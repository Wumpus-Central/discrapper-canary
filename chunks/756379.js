i.r(t), i.d(t, { default: () => eW });
var l = i(477900),
    n = i(582128),
    a = i(503698),
    r = i.n(a),
    s = i(17928),
    d = i(834730),
    u = i(289873),
    c = i(689175),
    o = i(71393),
    _ = i(562708),
    E = i(636537),
    h = i(228366),
    g = i(499785),
    f = i(716357);
function m(e) {
    return !(e instanceof E.oh) || e.status < 400 || e.status >= 500 || 429 === e.status;
}
var A = i(652215);
let I = 0;
async function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = f.A.getFetchStatus(e),
        l = t && "error" === i && !f.A.isInBackoff(e);
    if ("idle" !== i && !l) return;
    let n = I++;
    h.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: e, requestId: n });
    try {
        let { body: t } = await g.A.get({
            url: A.Rsh.GUILD_SPACE(e),
            trackedActionData: { event: _.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        h.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: e, requestId: n, space: t });
    } catch (t) {
        h.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: e, requestId: n, retryable: m(t) });
    }
}
async function p(e, t) {
    let { body: i } = await E.Bo.patch({ url: A.Rsh.GUILD_SPACE_SETTINGS(e), body: t, rejectWithError: !0 });
    return i;
}
async function D(e) {
    h.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: e });
    try {
        let { body: t } = await E.Bo.get({ url: A.Rsh.GUILD_SPACE_WIDGETS_CATALOG(e), rejectWithError: !0 });
        h.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: e, widgets: t.widgets });
    } catch {
        h.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: e });
    }
}
var C = i(960960),
    x = i(626584),
    v = i(754674);
let T = {};
function G(e) {
    let t = T[e];
    return t?.saveStatus === "saving" ? void 0 : t;
}
class y extends s.Ay.Store {
    static displayName = "GuildSpaceEditorStore";
    getDraft(e) {
        return T[e]?.draft;
    }
    isEditing(e) {
        return null != T[e];
    }
    getSaveStatus(e) {
        return T[e]?.saveStatus ?? "idle";
    }
}
let j = new y(h.h, {
    GUILD_SPACE_EDIT_START: function (e) {
        let { guildId: t, space: i } = e;
        T[t] = { draft: { header: i.header, widgets: (0, v.W$)(i.widgets) }, saveStatus: "idle" };
    },
    GUILD_SPACE_EDIT_ADD_WIDGET: function (e) {
        let { guildId: t, widget: i } = e,
            l = G(t);
        if (null == l) return !1;
        l.draft = { ...l.draft, widgets: (0, v.QD)(l.draft.widgets, i) };
    },
    GUILD_SPACE_EDIT_MOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: i, targetColumn: l, targetIndex: n } = e,
            a = G(t);
        if (null == a) return !1;
        let r = (0, v.Gm)(a.draft.widgets, i, l, n);
        if (null == r) return !1;
        a.draft = { ...a.draft, widgets: r };
    },
    GUILD_SPACE_EDIT_REMOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: i } = e,
            l = G(t);
        if (null == l) return !1;
        let n = l.draft.widgets.filter((e) => {
            let { id: t } = e;
            return t !== i;
        });
        if (n.length === l.draft.widgets.length) return !1;
        l.draft = { ...l.draft, widgets: (0, v.W$)(n) };
    },
    GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG: function (e) {
        let { guildId: t, widgetId: i, config: l } = e,
            n = G(t);
        if (null == n) return !1;
        let a = n.draft.widgets.map((e) => (e.id === i ? { ...e, config: l } : e));
        n.draft = { ...n.draft, widgets: a };
    },
    GUILD_SPACE_EDIT_UPDATE_HEADER: function (e) {
        let { guildId: t, customBanner: i } = e,
            l = G(t);
        if (null == l) return !1;
        l.draft = { ...l.draft, header: { ...l.draft.header, custom_banner: i } };
    },
    GUILD_SPACE_EDIT_SAVE_START: function (e) {
        let { guildId: t, requestId: i } = e,
            l = T[t];
        if (null == l) return !1;
        (l.saveStatus = "saving"), (l.activeSaveRequestId = i);
    },
    GUILD_SPACE_EDIT_SAVE_FAILURE: function (e) {
        let { guildId: t, requestId: i } = e,
            l = T[t];
        if (l?.activeSaveRequestId !== i) return !1;
        delete l.activeSaveRequestId, (l.saveStatus = "error");
    },
    GUILD_SPACE_EDIT_CANCEL: function (e) {
        let { guildId: t } = e;
        if (null == T[t]) return !1;
        delete T[t];
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t } = e;
        if (null == T[t]) return !1;
        delete T[t];
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: i },
        } = e;
        if (i || null == T[t]) return !1;
        delete T[t];
    },
    LOGOUT: function () {
        T = {};
    },
});
var L = i(593673);
let U = "draft:",
    b = 0,
    N = new x.A("GuildSpaceEditorActionCreators"),
    P = 0;
function R(e) {
    h.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: e });
}
function w(e, t, i, l) {
    h.h.dispatch({ type: "GUILD_SPACE_EDIT_MOVE_WIDGET", guildId: e, widgetId: t, targetColumn: i, targetIndex: l });
}
function F(e, t) {
    h.h.dispatch({ type: "GUILD_SPACE_EDIT_UPDATE_HEADER", guildId: e, customBanner: t });
}
async function O(e) {
    let t = j.getDraft(e);
    if (null == t || "saving" === j.getSaveStatus(e)) return;
    let i = {};
    void 0 !== t.header.custom_banner && (i.custom_banner = t.header.custom_banner);
    let l = {
            header: i,
            widgets: t.widgets.map((e) => {
                let { id: t, type: i, position: l, config: n } = e,
                    a = {
                        type: i,
                        position: l,
                        config: (function (e) {
                            if (e.type === L.a.IMAGE_TEXT) {
                                let t = { type: e.type, text: e.text, title: e.title };
                                return void 0 !== e.image && (t.image = e.image), t;
                            }
                            return e;
                        })(n),
                    };
                return t.startsWith(U) || (a.id = t), a;
            }),
        },
        n = P++;
    h.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_START", guildId: e, requestId: n });
    try {
        let { body: t } = await E.Bo.put({ url: A.Rsh.GUILD_SPACE(e), body: l, rejectWithError: !0 });
        h.h.dispatch({ type: "GUILD_SPACE_UPDATE_SUCCESS", guildId: e, space: t });
    } catch (t) {
        N.error("Failed to save guild space", { guildId: e, error: t }),
            h.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_FAILURE", guildId: e, requestId: n });
    }
}
var W = i(363957);
let k = 0;
async function H(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    i && h.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let l = W.A.getWidgetIdsToHydrate(e, t);
    if (0 === l.length) return;
    let n = k++;
    h.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: n, widgetIds: l });
    try {
        let { body: t } = await E.Bo.get({
            url: A.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: l },
            rejectWithError: !0,
        });
        h.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: n, widgets: t.widgets });
    } catch (t) {
        h.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: n, retryable: m(t) });
    }
}
var M = i(470452),
    B = i(872188),
    K = i(868285),
    V = i(36525),
    z = i(871682),
    q = i(331322),
    Y = i(821609),
    $ = i(499373),
    X = i(189213),
    J = i(939249),
    Q = i(104510),
    Z = i(661531),
    ee = i(245604),
    et = i(192308),
    ei = i(775602),
    el = i(125075),
    en = i(375708),
    ea = i(517228);
function er(e) {
    let { widget: t, onClick: i } = e,
        n = (0, s.bG)([ei.Ay], () => ei.Ay.useReducedMotion),
        { catalog_image_static_url: a, catalog_image_animated_url: r } = t.assets,
        u = (n ? null : r) ?? a,
        c = t.boost_price;
    return (0, l.jsxs)(J.D, {
        className: ea.HL,
        onClick: i,
        children: [
            (0, l.jsxs)("div", {
                className: ea.b3,
                children: [
                    null != u && (0, l.jsx)("img", { className: ea.YI, src: u, alt: "" }),
                    t.locked &&
                        (0, l.jsx)("div", {
                            className: ea.AA,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(Q._, { size: "sm", color: Z.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                        }),
                    (0, l.jsxs)("div", {
                        className: ea.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("div", { className: ea.Ti, children: (0, l.jsx)("div", { className: ea.dK }) }),
                            (0, l.jsxs)(q.B, {
                                className: ea.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, l.jsx)(ee.U, {}),
                                    (0, l.jsx)(d.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: en.intl.string(el.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(q.B, {
                gap: 4,
                children: [
                    (0, l.jsx)(d.E, { variant: "text-sm/semibold", color: "text-default", children: t.name }),
                    null != c && c > 0
                        ? (0, l.jsxs)(q.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, l.jsx)(Q._, { size: "sm", color: Z.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(d.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: en.intl.format(el.default["8wD0Un"], { boostPrice: c }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)(d.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: en.intl.string(el.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function es(e) {
    let { guildId: t, ...i } = e,
        a = (0, s.yK)([C.A, j], () => {
            let e = j.getDraft(t)?.widgets ?? [];
            var i = C.A.getWidgets(t) ?? [];
            let l = new Map();
            for (let t of e) l.set(t.type, (l.get(t.type) ?? 0) + 1);
            return i.filter((e) => (l.get(e.type) ?? 0) < e.max_instances);
        }, [t]);
    return (
        n.useEffect(() => {
            D(t);
        }, [t]),
        (0, l.jsx)(X.Modal, {
            title: en.intl.string(el.default.L8Xfoo),
            subtitle: en.intl.string(el.default["N8nJ+T"]),
            actions: [],
            ...i,
            children: (0, l.jsx)("div", {
                className: ea.Vg,
                children: a.map((e) =>
                    (0, l.jsx)(
                        er,
                        {
                            widget: e,
                            onClick: () => {
                                var l, n, a;
                                (l = e.type),
                                    (n = e.name),
                                    (a = e.locked),
                                    h.h.dispatch({
                                        type: "GUILD_SPACE_EDIT_ADD_WIDGET",
                                        guildId: t,
                                        widget: (function (e, t, i) {
                                            let l = {
                                                id: `${U}${b++}`,
                                                position: { column: v.FT, order: 0 },
                                                requires_hydration: !1,
                                                default_title: t,
                                                locked: i,
                                            };
                                            switch (e) {
                                                case L.a.IMAGE_TEXT:
                                                    return {
                                                        ...l,
                                                        type: e,
                                                        config: { type: e, title: null, image_hash: null, text: null },
                                                    };
                                                case L.a.LEADERBOARD:
                                                case L.a.WHITEBOARD:
                                                case L.a.POPULAR_MUSIC:
                                                case L.a.LIVE_ACTIVITY:
                                                    return { ...l, type: e, config: { type: e } };
                                            }
                                        })(l, n, a),
                                    }),
                                    i.onClose();
                            },
                        },
                        e.type,
                    ),
                ),
            }),
        })
    );
}
var ed = i(992303);
function eu(e) {
    let { guildId: t, isEditing: i } = e,
        a = (0, s.bG)([j], () => j.getSaveStatus(t), [t]),
        r = (0, s.bG)([j], () => j.getDraft(t)?.widgets.length ?? 0, [t]),
        u = "saving" === a,
        c = n.useCallback(() => {
            O(t);
        }, [t]),
        o = n.useCallback(() => {
            R(t);
        }, [t]);
    return (0, l.jsx)(K.F, {
        component: "div",
        children:
            i &&
            (0, l.jsx)(z.F, {
                className: ed.K,
                children: (0, l.jsx)(V.A, {
                    submitting: u,
                    disabled: u,
                    onSave: c,
                    onReset: u ? void 0 : o,
                    message: (0, l.jsxs)(q.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, l.jsx)(Y.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: $.T,
                                text: en.intl.string(el.default.L8Xfoo),
                                disabled: u,
                                onClick: () => {
                                    let e;
                                    return (
                                        (e = (e) => (0, l.jsx)(es, { guildId: t, ...e })),
                                        void (0, et.openModalLazy)(() => Promise.resolve(e), {
                                            modalKey: "guild-space-add-widget",
                                        })
                                    );
                                },
                            }),
                            "error" === a
                                ? (0, l.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-critical",
                                      role: "alert",
                                      children: en.intl.string(el.default.HmFYc5),
                                  })
                                : (0, l.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      children: en.intl.format(el.default.hpAg80, { panelCount: r }),
                                  }),
                        ],
                    }),
                }),
            }),
    });
}
var ec = i(686246),
    eo = i(651300),
    e_ = i(451395),
    eE = i(42499),
    eh = i(539888),
    eg = i(233084),
    ef = i(294918);
let em = "GUILD_SPACE_WIDGET",
    eA = "GUILD_SPACE_WIDGETS",
    eI = `${em}_${eA}`;
function eS(e) {
    let {
            guildId: t,
            widget: i,
            column: a,
            positionNumber: d,
            columnWidgetCount: u,
            flatIndex: c,
            leftColumnCount: o,
            onReorder: _,
            isSaving: E,
        } = e,
        g = n.useRef(null),
        f = n.useRef(null),
        m = (0, s.bG)([W.A], () => (i.requires_hydration ? W.A.getHydration(t, i.id) : void 0), [
            t,
            i.id,
            i.requires_hydration,
        ]),
        A = (0, eE.K)(t, i),
        { isDragging: I, dragSourcePosition: S } = (0, e_.gY)({
            dragRef: g,
            dropRef: f,
            index: c,
            listType: eA,
            itemType: em,
            itemId: i.id,
            onReorder: _,
            canDrag: !E,
        }),
        p = null == S ? null : S < o ? v.FT : v.yM,
        D = null != p && p !== a;
    return (0, l.jsx)("div", {
        ref: f,
        className: r()(ef.NI, { [ef.cB]: I, [ef.ne]: null != S && (D || S > c), [ef.O3]: null != S && !D && S < c }),
        "data-dnd-name": en.intl.formatToPlainString(a === v.yM ? el.default.O9RvHQ : el.default["+cSvS8"], {
            positionNumber: d,
            positionCount: u,
        }),
        children: (0, l.jsx)(eh.P, {
            widget: i,
            guildSpaceMode: "edit",
            hydration: m,
            lock: A,
            dragHandleRef: g,
            disabled: E,
            onRemove: () => {
                var e;
                return (
                    (e = i.id), void h.h.dispatch({ type: "GUILD_SPACE_EDIT_REMOVE_WIDGET", guildId: t, widgetId: e })
                );
            },
            onCommitConfig: (e) => {
                var l;
                return (
                    (l = i.id),
                    void h.h.dispatch({
                        type: "GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG",
                        guildId: t,
                        widgetId: l,
                        config: e,
                    })
                );
            },
        }),
    });
}
function ep(e) {
    let { column: t, onDropAtEnd: i } = e,
        a = n.useRef(null),
        [{ isOver: s }, d] = (0, eo.H)({
            accept: eI,
            drop: (e) => i(e.id, t),
            collect: (e) => ({ isOver: e.isOver({ shallow: !0 }) && e.canDrop() }),
        });
    return (
        n.useLayoutEffect(
            () => (
                d(a),
                () => {
                    d(null);
                }
            ),
            [d],
        ),
        (0, l.jsx)("div", {
            ref: a,
            className: r()(ef.wr, { [ef.SX]: s }),
            "data-dnd-name": en.intl.string(t === v.yM ? el.default.fWef0G : el.default.KcdDyT),
        })
    );
}
function eD(e) {
    let { guildId: t, widgets: i } = e,
        a = n.useMemo(() => (0, v.Rl)(i), [i]),
        r = n.useMemo(
            () =>
                a.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != eg.m[t];
                    }),
                ),
            [a],
        ),
        d = n.useMemo(() => [...r[v.FT], ...r[v.yM]], [r]),
        u = (0, ec.V)((e) => e.isDragging() && e.getItemType() === eI),
        c = (0, s.bG)([j], () => "saving" === j.getSaveStatus(t), [t]),
        o = n.useCallback(
            (e, i) => {
                let l = d[e],
                    n = d[i];
                null != l && null != n && w(t, l.id, n.position.column, n.position.order);
            },
            [t, d],
        ),
        _ = n.useCallback(
            (e, i) => {
                w(t, e, i, a[i]?.length ?? 0);
            },
            [t, a],
        );
    return (0, l.jsx)("div", {
        className: ef.Vg,
        children: r.map((e, i) =>
            (0, l.jsxs)(
                "div",
                {
                    className: ef.fi,
                    children: [
                        e.map((n, a) =>
                            (0, l.jsx)(
                                eS,
                                {
                                    guildId: t,
                                    widget: n,
                                    column: i,
                                    positionNumber: a + 1,
                                    columnWidgetCount: e.length,
                                    flatIndex: i === v.yM ? r[v.FT].length + a : a,
                                    leftColumnCount: r[v.FT].length,
                                    onReorder: o,
                                    isSaving: c,
                                },
                                n.id,
                            ),
                        ),
                        u && !c && (0, l.jsx)(ep, { column: i, onDropAtEnd: _ }),
                    ],
                },
                i,
            ),
        ),
    });
}
var eC = i(529609),
    ex = i(866665),
    ev = i(408278),
    eT = i(241326),
    eG = i(297264),
    ey = i(22231),
    ej = i(548118),
    eL = i(2553),
    eU = i(405810),
    eb = i(498642),
    eN = i(486020),
    eP = i(488428),
    eR = i(776231),
    ew = i(986898);
function eF(e) {
    let { guildId: t, header: i, canEdit: a, isEditing: r, isSaving: u } = e,
        c = (0, s.bG)([o.A], () => o.A.getGuild(t), [t]),
        _ = (0, s.bG)([eb.A], () => eb.A.getOnlineCount(t), [t]),
        E = (0, s.bG)([eb.A], () => eb.A.getMemberCount(t), [t]),
        g = i.custom_banner,
        m = n.useMemo(
            () =>
                null == c
                    ? null
                    : "string" == typeof g
                      ? g
                      : void 0 === g && null != i.custom_banner_hash
                        ? (function (e, t) {
                              let i = eN.QB ? "webp" : "jpg",
                                  { CDN_HOST: l, API_ENDPOINT: n } = window.GLOBAL_ENV,
                                  a = A.Rsh.GUILD_SPACE_BANNER(e, t, i),
                                  r = null != l ? `https://${l}${a}` : location.protocol + n + a,
                                  s = { size: (0, eR.kr)(1200 * (0, eR.mZ)()) };
                              return "jpg" === i && (s.quality = "lossless"), (r += `?${eP.stringify(s)}`);
                          })(c.id, i.custom_banner_hash)
                        : eN.Ay.getGuildBannerURL({ id: c.id, banner: c.banner }),
            [c, g, i.custom_banner_hash],
        ),
        I = "string" == typeof g || (void 0 === g && null != i.custom_banner_hash);
    return null == c
        ? null
        : (0, l.jsxs)("div", {
              className: ew.wx,
              children: [
                  null != m ? (0, l.jsx)("img", { className: ew.vK, src: m, alt: "" }) : null,
                  (0, l.jsx)("div", { className: ew.f5, "aria-hidden": !0 }),
                  r
                      ? (0, l.jsxs)("div", {
                            className: ew.j0,
                            children: [
                                (0, l.jsx)(eU.A, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: en.intl.string(el.default["EN+0gW"]),
                                    onChange: (e) => F(t, e),
                                    maxFileSizeBytes: 0xa00000,
                                    onFileSizeError: () => (0, eL.A)(0xa00000),
                                    disabled: u,
                                }),
                                I
                                    ? (0, l.jsx)(ex.m, {
                                          text: en.intl.string(el.default["CunK+J"]),
                                          ariaHidden: !0,
                                          children: (0, l.jsx)(ev.K, {
                                              variant: "critical-secondary",
                                              icon: eT.TrashIcon,
                                              "aria-label": en.intl.string(el.default["CunK+J"]),
                                              onClick: () => F(t, null),
                                              disabled: u,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  (0, l.jsxs)("div", {
                      className: ew.D_,
                      children: [
                          (0, l.jsx)(ej.Ay, {
                              className: ew.Kk,
                              guild: c,
                              size: ej.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsxs)("div", {
                              className: ew.pq,
                              children: [
                                  (0, l.jsx)(eG.D, {
                                      variant: "heading-xl/bold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: c.name,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: ew.M1,
                                      children: [
                                          null != _
                                              ? (0, l.jsxs)("div", {
                                                    className: ew.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: ew.RS, "aria-hidden": !0 }),
                                                        (0, l.jsx)(d.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: en.intl.format(el.default.G08ClG, { count: _ }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != E
                                              ? (0, l.jsxs)("div", {
                                                    className: ew.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: ew.kq, "aria-hidden": !0 }),
                                                        (0, l.jsx)(d.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: en.intl.format(el.default["rp7bx+"], {
                                                                count: E,
                                                            }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: ew.dJ,
                                              children: [
                                                  (0, l.jsx)(Q._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, l.jsx)(d.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: en.intl.format(el.default.DwFqrb, {
                                                          count: c.premiumSubscriberCount,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
                  a &&
                      !r &&
                      (0, l.jsx)(Y.$, {
                          icon: ey.PencilIcon,
                          text: en.intl.string(el.default.KcOpCm),
                          onClick: () => {
                              let e;
                              null != (e = f.A.getSpace(t)) &&
                                  h.h.dispatch({ type: "GUILD_SPACE_EDIT_START", guildId: t, space: e });
                          },
                      }),
              ],
          });
}
var eO = i(312152);
function eW(e) {
    let { guildId: t } = e,
        i = n.useRef(null),
        [a, _, E] = (0, s.yK)([f.A], () => [f.A.getSpace(t), f.A.getFetchStatus(t), f.A.isInBackoff(t)], [t]);
    n.useEffect(() => {
        let e = i.current !== t;
        (i.current = t), S(t, e);
    }, [_, t]);
    let h = (0, s.bG)([o.A], () => o.A.getGuild(t), [t]),
        g = (0, M.mN)(h),
        m = (0, s.bG)([C.A], () => C.A.getFetchStatus(t), [t]);
    n.useEffect(() => {
        g && "idle" === m && D(t);
    }, [g, m, t]);
    let A = h?.guildSpaceSettings?.publish_status !== L.B.PUBLISHED,
        I = n.useCallback(() => p(t, { publish_status: L.B.PUBLISHED }), [t]),
        [x, v] = (0, s.yK)([j], () => [j.getDraft(t), j.getSaveStatus(t)], [t]),
        T = g && null != x,
        G = T ? x.widgets : a?.widgets;
    n.useEffect(() => {
        g || null == x || "saving" === v || R(t);
    }, [g, x, v, t]);
    let y = n.useMemo(
            () =>
                (G ?? [])
                    .filter((e) => {
                        let { requires_hydration: t } = e;
                        return t;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
            [G],
        ),
        U = (0, s.yK)([W.A], () => W.A.getWidgetIdsToHydrate(t, y), [t, y]),
        b = n.useRef(null);
    return (n.useEffect(() => {
        if (b.current !== t && null != a) {
            (b.current = t), H(t, y, !0);
            return;
        }
        H(t, U);
    }, [t, a, y, U]),
    null == a || null == G)
        ? (0, l.jsx)("div", {
              className: eO.MY,
              children: (0, l.jsx)("div", {
                  className: eO.F,
                  children:
                      "error" !== _ || E
                          ? (0, l.jsx)(u.y, {
                                type: u.y.Type.SPINNING_CIRCLE,
                                "aria-label": en.intl.string(en.t.ZTNur7),
                            })
                          : (0, l.jsx)(d.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: en.intl.string(en.t.F8FvUy),
                            }),
              }),
          })
        : (0, l.jsxs)("div", {
              className: eO.MY,
              children: [
                  (0, l.jsx)(c.Gt, {
                      className: eO.XG,
                      children: (0, l.jsxs)("div", {
                          className: r()(eO.Qs, { [eO.Dy]: T }),
                          children: [
                              g && A ? (0, l.jsx)(B.A, { onPublish: I }) : null,
                              (0, l.jsx)(eF, {
                                  guildId: t,
                                  header: T ? x.header : a.header,
                                  isEditing: T,
                                  canEdit: g,
                                  isSaving: "saving" === v,
                              }),
                              T
                                  ? (0, l.jsx)(eD, { guildId: t, widgets: G })
                                  : (0, l.jsx)(eC.A, { guildId: t, widgets: G }),
                          ],
                      }),
                  }),
                  (0, l.jsx)(eu, { guildId: t, isEditing: T }),
              ],
          });
}
