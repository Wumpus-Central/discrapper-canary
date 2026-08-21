i.r(t), i.d(t, { default: () => eM });
var n = i(477900),
    l = i(582128),
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
    f = i(499785),
    g = i(716357);
function A(e) {
    return !(e instanceof E.oh) || e.status < 400 || e.status >= 500 || 429 === e.status;
}
var m = i(652215);
let S = 0;
async function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = g.A.getFetchStatus(e),
        n = t && "error" === i && !g.A.isInBackoff(e);
    if ("idle" !== i && !n) return;
    let l = S++;
    h.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: e, requestId: l });
    try {
        let { body: t } = await f.A.get({
            url: m.Rsh.GUILD_SPACE(e),
            trackedActionData: { event: _.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        h.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: e, requestId: l, space: t });
    } catch (t) {
        h.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: e, requestId: l, retryable: A(t) });
    }
}
async function C(e, t) {
    let { body: i } = await E.Bo.patch({ url: m.Rsh.GUILD_SPACE_SETTINGS(e), body: t, rejectWithError: !0 });
    return i;
}
var p = i(626584),
    D = i(754674);
let T = {};
function x(e) {
    let t = T[e];
    return t?.saveStatus === "saving" ? void 0 : t;
}
class v extends s.Ay.Store {
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
let G = new v(h.h, {
    GUILD_SPACE_EDIT_START: function (e) {
        let { guildId: t, space: i } = e;
        T[t] = { draft: { header: i.header, widgets: (0, D.W$)(i.widgets) }, saveStatus: "idle" };
    },
    GUILD_SPACE_EDIT_ADD_WIDGET: function (e) {
        let { guildId: t, widget: i } = e,
            n = x(t);
        if (null == n) return !1;
        n.draft = { ...n.draft, widgets: (0, D.QD)(n.draft.widgets, i) };
    },
    GUILD_SPACE_EDIT_MOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: i, targetColumn: n, targetIndex: l } = e,
            a = x(t);
        if (null == a) return !1;
        let r = (0, D.Gm)(a.draft.widgets, i, n, l);
        if (null == r) return !1;
        a.draft = { ...a.draft, widgets: r };
    },
    GUILD_SPACE_EDIT_REMOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: i } = e,
            n = x(t);
        if (null == n) return !1;
        let l = n.draft.widgets.filter((e) => {
            let { id: t } = e;
            return t !== i;
        });
        if (l.length === n.draft.widgets.length) return !1;
        n.draft = { ...n.draft, widgets: (0, D.W$)(l) };
    },
    GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG: function (e) {
        let { guildId: t, widgetId: i, config: n } = e,
            l = x(t);
        if (null == l) return !1;
        let a = l.draft.widgets.map((e) => (e.id === i ? { ...e, config: n } : e));
        l.draft = { ...l.draft, widgets: a };
    },
    GUILD_SPACE_EDIT_UPDATE_HEADER: function (e) {
        let { guildId: t, customBanner: i } = e,
            n = x(t);
        if (null == n) return !1;
        n.draft = { ...n.draft, header: { ...n.draft.header, custom_banner: i } };
    },
    GUILD_SPACE_EDIT_SAVE_START: function (e) {
        let { guildId: t, requestId: i } = e,
            n = T[t];
        if (null == n) return !1;
        (n.saveStatus = "saving"), (n.activeSaveRequestId = i);
    },
    GUILD_SPACE_EDIT_SAVE_FAILURE: function (e) {
        let { guildId: t, requestId: i } = e,
            n = T[t];
        if (n?.activeSaveRequestId !== i) return !1;
        delete n.activeSaveRequestId, (n.saveStatus = "error");
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
var y = i(593673);
let L = "draft:",
    j = 0,
    U = new p.A("GuildSpaceEditorActionCreators"),
    P = 0;
function b(e) {
    h.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: e });
}
function R(e, t, i, n) {
    h.h.dispatch({ type: "GUILD_SPACE_EDIT_MOVE_WIDGET", guildId: e, widgetId: t, targetColumn: i, targetIndex: n });
}
function N(e, t) {
    h.h.dispatch({ type: "GUILD_SPACE_EDIT_UPDATE_HEADER", guildId: e, customBanner: t });
}
async function w(e) {
    let t = G.getDraft(e);
    if (null == t || "saving" === G.getSaveStatus(e)) return;
    let i = {};
    void 0 !== t.header.custom_banner && (i.custom_banner = t.header.custom_banner);
    let n = {
            header: i,
            widgets: t.widgets.map((e) => {
                let { id: t, type: i, position: n, config: l } = e,
                    a = {
                        type: i,
                        position: n,
                        config: (function (e) {
                            if (e.type === y.a.IMAGE_TEXT) {
                                let t = { type: e.type, text: e.text, title: e.title };
                                return void 0 !== e.image && (t.image = e.image), t;
                            }
                            return e;
                        })(l),
                    };
                return t.startsWith(L) || (a.id = t), a;
            }),
        },
        l = P++;
    h.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_START", guildId: e, requestId: l });
    try {
        let { body: t } = await E.Bo.put({ url: m.Rsh.GUILD_SPACE(e), body: n, rejectWithError: !0 });
        h.h.dispatch({ type: "GUILD_SPACE_UPDATE_SUCCESS", guildId: e, space: t });
    } catch (t) {
        U.error("Failed to save guild space", { guildId: e, error: t }),
            h.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_FAILURE", guildId: e, requestId: l });
    }
}
var F = i(363957);
let O = 0;
async function H(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    i && h.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let n = F.A.getWidgetIdsToHydrate(e, t);
    if (0 === n.length) return;
    let l = O++;
    h.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: l, widgetIds: n });
    try {
        let { body: t } = await E.Bo.get({
            url: m.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: n },
            rejectWithError: !0,
        });
        h.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: l, widgets: t.widgets });
    } catch (t) {
        h.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: l, retryable: A(t) });
    }
}
var W = i(470452),
    M = i(872188),
    k = i(868285),
    B = i(36525),
    K = i(871682),
    V = i(331322),
    q = i(821609),
    z = i(499373),
    Y = i(189213),
    $ = i(939249),
    X = i(245604),
    J = i(104510),
    Q = i(661531),
    Z = i(192308),
    ee = i(775602);
async function et(e) {
    h.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: e });
    try {
        let { body: t } = await E.Bo.get({ url: m.Rsh.GUILD_SPACE_WIDGETS_CATALOG(e), rejectWithError: !0 });
        h.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: e, widgets: t.widgets });
    } catch {
        h.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: e });
    }
}
let ei = {};
function en(e) {
    let t = ei[e];
    return null == t && ((t = { fetchStatus: "idle" }), (ei[e] = t)), t;
}
class el extends s.Ay.Store {
    static displayName = "GuildSpaceCatalogStore";
    getWidgets(e) {
        return ei[e]?.widgets;
    }
    getFetchStatus(e) {
        return ei[e]?.fetchStatus ?? "idle";
    }
}
let ea = new el(h.h, {
    GUILD_SPACE_CATALOG_FETCH_START: function (e) {
        let { guildId: t } = e;
        en(t).fetchStatus = "loading";
    },
    GUILD_SPACE_CATALOG_FETCH_SUCCESS: function (e) {
        let { guildId: t, widgets: i } = e,
            n = en(t);
        (n.widgets = i), (n.fetchStatus = "success");
    },
    GUILD_SPACE_CATALOG_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        en(t).fetchStatus = "error";
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: i },
        } = e;
        if (i || null == ei[t]) return !1;
        delete ei[t];
    },
    LOGOUT: function () {
        ei = {};
    },
});
var er = i(125075),
    es = i(375708),
    ed = i(517228);
function eu(e) {
    let { widget: t, onClick: i } = e,
        l = (0, s.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        { catalog_image_static_url: a, catalog_image_animated_url: r } = t.assets,
        u = (l ? null : r) ?? a,
        c = t.boost_price;
    return (0, n.jsxs)($.D, {
        className: ed.HL,
        onClick: i,
        children: [
            (0, n.jsxs)("div", {
                className: ed.b3,
                children: [
                    null != u && (0, n.jsx)("img", { className: ed.YI, src: u, alt: "" }),
                    (0, n.jsxs)("div", {
                        className: ed.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, n.jsx)("div", { className: ed.Ti, children: (0, n.jsx)("div", { className: ed.dK }) }),
                            (0, n.jsxs)(V.B, {
                                className: ed.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, n.jsx)(X.U, {}),
                                    (0, n.jsx)(d.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: es.intl.string(er.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)(V.B, {
                gap: 4,
                children: [
                    (0, n.jsx)(d.E, { variant: "text-sm/semibold", color: "text-default", children: t.name }),
                    null != c && c > 0
                        ? (0, n.jsxs)(V.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, n.jsx)(J._, { size: "sm", color: Q.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, n.jsx)(d.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: es.intl.format(er.default["8wD0Un"], { boostPrice: c }),
                                  }),
                              ],
                          })
                        : (0, n.jsx)(d.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: es.intl.string(er.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function ec(e) {
    let { guildId: t, ...i } = e,
        a = (0, s.yK)([ea, G], () => {
            let e = G.getDraft(t)?.widgets ?? [];
            var i = ea.getWidgets(t) ?? [];
            let n = new Map();
            for (let t of e) n.set(t.type, (n.get(t.type) ?? 0) + 1);
            return i.filter((e) => (n.get(e.type) ?? 0) < e.max_instances);
        }, [t]);
    return (
        l.useEffect(() => {
            et(t);
        }, [t]),
        (0, n.jsx)(Y.Modal, {
            title: es.intl.string(er.default.L8Xfoo),
            subtitle: es.intl.string(er.default["N8nJ+T"]),
            actions: [],
            ...i,
            children: (0, n.jsx)("div", {
                className: ed.Vg,
                children: a.map((e) =>
                    (0, n.jsx)(
                        eu,
                        {
                            widget: e,
                            onClick: () => {
                                var n, l;
                                (n = e.type),
                                    (l = e.name),
                                    h.h.dispatch({
                                        type: "GUILD_SPACE_EDIT_ADD_WIDGET",
                                        guildId: t,
                                        widget: (function (e, t) {
                                            let i = {
                                                id: `${L}${j++}`,
                                                position: { column: D.FT, order: 0 },
                                                requires_hydration: !1,
                                                default_title: t,
                                            };
                                            switch (e) {
                                                case y.a.IMAGE_TEXT:
                                                    return {
                                                        ...i,
                                                        type: e,
                                                        config: { type: e, title: null, image_hash: null, text: null },
                                                    };
                                                case y.a.LEADERBOARD:
                                                case y.a.WHITEBOARD:
                                                case y.a.POPULAR_MUSIC:
                                                case y.a.LIVE_ACTIVITY:
                                                    return { ...i, type: e, config: { type: e } };
                                            }
                                        })(n, l),
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
var eo = i(992303);
function e_(e) {
    let { guildId: t, isEditing: i } = e,
        a = (0, s.bG)([G], () => G.getSaveStatus(t), [t]),
        r = (0, s.bG)([G], () => G.getDraft(t)?.widgets.length ?? 0, [t]),
        u = "saving" === a,
        c = l.useCallback(() => {
            w(t);
        }, [t]),
        o = l.useCallback(() => {
            b(t);
        }, [t]);
    return (0, n.jsx)(k.F, {
        component: "div",
        children:
            i &&
            (0, n.jsx)(K.F, {
                className: eo.K,
                children: (0, n.jsx)(B.A, {
                    submitting: u,
                    disabled: u,
                    onSave: c,
                    onReset: u ? void 0 : o,
                    message: (0, n.jsxs)(V.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, n.jsx)(q.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: z.T,
                                text: es.intl.string(er.default.L8Xfoo),
                                disabled: u,
                                onClick: () => {
                                    let e;
                                    return (
                                        (e = (e) => (0, n.jsx)(ec, { guildId: t, ...e })),
                                        void (0, Z.openModalLazy)(() => Promise.resolve(e), {
                                            modalKey: "guild-space-add-widget",
                                        })
                                    );
                                },
                            }),
                            "error" === a
                                ? (0, n.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-critical",
                                      role: "alert",
                                      children: es.intl.string(er.default.HmFYc5),
                                  })
                                : (0, n.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      children: es.intl.format(er.default.hpAg80, { panelCount: r }),
                                  }),
                        ],
                    }),
                }),
            }),
    });
}
var eE = i(686246),
    eh = i(651300),
    ef = i(451395),
    eg = i(317574),
    eA = i(521810),
    em = i(294918);
let eS = "GUILD_SPACE_WIDGET",
    eI = "GUILD_SPACE_WIDGETS",
    eC = `${eS}_${eI}`;
function ep(e) {
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
        f = l.useRef(null),
        g = l.useRef(null),
        A = (0, s.bG)([F.A], () => (i.requires_hydration ? F.A.getHydration(t, i.id) : void 0), [
            t,
            i.id,
            i.requires_hydration,
        ]),
        { isDragging: m, dragSourcePosition: S } = (0, ef.gY)({
            dragRef: f,
            dropRef: g,
            index: c,
            listType: eI,
            itemType: eS,
            itemId: i.id,
            onReorder: _,
            canDrag: !E,
        }),
        I = null == S ? null : S < o ? D.FT : D.yM,
        C = null != I && I !== a;
    return (0, n.jsx)("div", {
        ref: g,
        className: r()(em.NI, { [em.cB]: m, [em.ne]: null != S && (C || S > c), [em.O3]: null != S && !C && S < c }),
        "data-dnd-name": es.intl.formatToPlainString(a === D.yM ? er.default.O9RvHQ : er.default["+cSvS8"], {
            positionNumber: d,
            positionCount: u,
        }),
        children: (0, n.jsx)(eg.P, {
            widget: i,
            guildSpaceMode: "edit",
            hydration: A,
            dragHandleRef: f,
            disabled: E,
            onRemove: () => {
                var e;
                return (
                    (e = i.id), void h.h.dispatch({ type: "GUILD_SPACE_EDIT_REMOVE_WIDGET", guildId: t, widgetId: e })
                );
            },
            onCommitConfig: (e) => {
                var n;
                return (
                    (n = i.id),
                    void h.h.dispatch({
                        type: "GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG",
                        guildId: t,
                        widgetId: n,
                        config: e,
                    })
                );
            },
        }),
    });
}
function eD(e) {
    let { column: t, onDropAtEnd: i } = e,
        a = l.useRef(null),
        [{ isOver: s }, d] = (0, eh.H)({
            accept: eC,
            drop: (e) => i(e.id, t),
            collect: (e) => ({ isOver: e.isOver({ shallow: !0 }) && e.canDrop() }),
        });
    return (
        l.useLayoutEffect(
            () => (
                d(a),
                () => {
                    d(null);
                }
            ),
            [d],
        ),
        (0, n.jsx)("div", {
            ref: a,
            className: r()(em.wr, { [em.SX]: s }),
            "data-dnd-name": es.intl.string(t === D.yM ? er.default.fWef0G : er.default.KcdDyT),
        })
    );
}
function eT(e) {
    let { guildId: t, widgets: i } = e,
        a = l.useMemo(() => (0, D.Rl)(i), [i]),
        r = l.useMemo(
            () =>
                a.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != eA.m[t];
                    }),
                ),
            [a],
        ),
        d = l.useMemo(() => [...r[D.FT], ...r[D.yM]], [r]),
        u = (0, eE.V)((e) => e.isDragging() && e.getItemType() === eC),
        c = (0, s.bG)([G], () => "saving" === G.getSaveStatus(t), [t]),
        o = l.useCallback(
            (e, i) => {
                let n = d[e],
                    l = d[i];
                null != n && null != l && R(t, n.id, l.position.column, l.position.order);
            },
            [t, d],
        ),
        _ = l.useCallback(
            (e, i) => {
                R(t, e, i, a[i]?.length ?? 0);
            },
            [t, a],
        );
    return (0, n.jsx)("div", {
        className: em.Vg,
        children: r.map((e, i) =>
            (0, n.jsxs)(
                "div",
                {
                    className: em.fi,
                    children: [
                        e.map((l, a) =>
                            (0, n.jsx)(
                                ep,
                                {
                                    guildId: t,
                                    widget: l,
                                    column: i,
                                    positionNumber: a + 1,
                                    columnWidgetCount: e.length,
                                    flatIndex: i === D.yM ? r[D.FT].length + a : a,
                                    leftColumnCount: r[D.FT].length,
                                    onReorder: o,
                                    isSaving: c,
                                },
                                l.id,
                            ),
                        ),
                        u && !c && (0, n.jsx)(eD, { column: i, onDropAtEnd: _ }),
                    ],
                },
                i,
            ),
        ),
    });
}
var ex = i(529609),
    ev = i(866665),
    eG = i(408278),
    ey = i(241326),
    eL = i(297264),
    ej = i(22231),
    eU = i(548118),
    eP = i(2553),
    eb = i(405810),
    eR = i(498642),
    eN = i(486020),
    ew = i(488428),
    eF = i(776231),
    eO = i(986898);
function eH(e) {
    let { guildId: t, header: i, canEdit: a, isEditing: r, isSaving: u } = e,
        c = (0, s.bG)([o.A], () => o.A.getGuild(t), [t]),
        _ = (0, s.bG)([eR.A], () => eR.A.getOnlineCount(t), [t]),
        E = (0, s.bG)([eR.A], () => eR.A.getMemberCount(t), [t]),
        f = i.custom_banner,
        A = l.useMemo(
            () =>
                null == c
                    ? null
                    : "string" == typeof f
                      ? f
                      : void 0 === f && null != i.custom_banner_hash
                        ? (function (e, t) {
                              let i = eN.QB ? "webp" : "jpg",
                                  { CDN_HOST: n, API_ENDPOINT: l } = window.GLOBAL_ENV,
                                  a = m.Rsh.GUILD_SPACE_BANNER(e, t, i),
                                  r = null != n ? `https://${n}${a}` : location.protocol + l + a,
                                  s = { size: (0, eF.kr)(1200 * (0, eF.mZ)()) };
                              return "jpg" === i && (s.quality = "lossless"), (r += `?${ew.stringify(s)}`);
                          })(c.id, i.custom_banner_hash)
                        : eN.Ay.getGuildBannerURL({ id: c.id, banner: c.banner }),
            [c, f, i.custom_banner_hash],
        ),
        S = "string" == typeof f || (void 0 === f && null != i.custom_banner_hash);
    return null == c
        ? null
        : (0, n.jsxs)("div", {
              className: eO.wx,
              children: [
                  null != A ? (0, n.jsx)("img", { className: eO.vK, src: A, alt: "" }) : null,
                  (0, n.jsx)("div", { className: eO.f5, "aria-hidden": !0 }),
                  r
                      ? (0, n.jsxs)("div", {
                            className: eO.j0,
                            children: [
                                (0, n.jsx)(eb.A, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: es.intl.string(er.default["EN+0gW"]),
                                    onChange: (e) => N(t, e),
                                    maxFileSizeBytes: 0xa00000,
                                    onFileSizeError: () => (0, eP.A)(0xa00000),
                                    disabled: u,
                                }),
                                S
                                    ? (0, n.jsx)(ev.m, {
                                          text: es.intl.string(er.default["CunK+J"]),
                                          ariaHidden: !0,
                                          children: (0, n.jsx)(eG.K, {
                                              variant: "critical-secondary",
                                              icon: ey.TrashIcon,
                                              "aria-label": es.intl.string(er.default["CunK+J"]),
                                              onClick: () => N(t, null),
                                              disabled: u,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  (0, n.jsxs)("div", {
                      className: eO.D_,
                      children: [
                          (0, n.jsx)(eU.Ay, {
                              className: eO.Kk,
                              guild: c,
                              size: eU.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, n.jsxs)("div", {
                              className: eO.pq,
                              children: [
                                  (0, n.jsx)(eL.D, {
                                      variant: "heading-xl/bold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: c.name,
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: eO.M1,
                                      children: [
                                          null != _
                                              ? (0, n.jsxs)("div", {
                                                    className: eO.dJ,
                                                    children: [
                                                        (0, n.jsx)("span", { className: eO.RS, "aria-hidden": !0 }),
                                                        (0, n.jsx)(d.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: es.intl.format(er.default.G08ClG, { count: _ }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != E
                                              ? (0, n.jsxs)("div", {
                                                    className: eO.dJ,
                                                    children: [
                                                        (0, n.jsx)("span", { className: eO.kq, "aria-hidden": !0 }),
                                                        (0, n.jsx)(d.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: es.intl.format(er.default["rp7bx+"], {
                                                                count: E,
                                                            }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, n.jsxs)("div", {
                                              className: eO.dJ,
                                              children: [
                                                  (0, n.jsx)(J._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, n.jsx)(d.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: es.intl.format(er.default.DwFqrb, {
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
                      (0, n.jsx)(q.$, {
                          icon: ej.PencilIcon,
                          text: es.intl.string(er.default.KcOpCm),
                          onClick: () => {
                              let e;
                              null != (e = g.A.getSpace(t)) &&
                                  h.h.dispatch({ type: "GUILD_SPACE_EDIT_START", guildId: t, space: e });
                          },
                      }),
              ],
          });
}
var eW = i(312152);
function eM(e) {
    let { guildId: t } = e,
        i = l.useRef(null),
        [a, _, E] = (0, s.yK)([g.A], () => [g.A.getSpace(t), g.A.getFetchStatus(t), g.A.isInBackoff(t)], [t]);
    l.useEffect(() => {
        let e = i.current !== t;
        (i.current = t), I(t, e);
    }, [_, t]);
    let h = (0, s.bG)([o.A], () => o.A.getGuild(t), [t]),
        f = (0, W.mN)(h),
        A = h?.guildSpaceSettings?.publish_status !== y.B.PUBLISHED,
        m = l.useCallback(() => C(t, { publish_status: y.B.PUBLISHED }), [t]),
        [S, p] = (0, s.yK)([G], () => [G.getDraft(t), G.getSaveStatus(t)], [t]),
        D = f && null != S,
        T = D ? S.widgets : a?.widgets;
    l.useEffect(() => {
        f || null == S || "saving" === p || b(t);
    }, [f, S, p, t]);
    let x = l.useMemo(
            () =>
                (T ?? [])
                    .filter((e) => {
                        let { requires_hydration: t } = e;
                        return t;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
            [T],
        ),
        v = (0, s.yK)([F.A], () => F.A.getWidgetIdsToHydrate(t, x), [t, x]),
        L = l.useRef(null);
    return (l.useEffect(() => {
        if (L.current !== t && null != a) {
            (L.current = t), H(t, x, !0);
            return;
        }
        H(t, v);
    }, [t, a, x, v]),
    null == a || null == T)
        ? (0, n.jsx)("div", {
              className: eW.MY,
              children: (0, n.jsx)("div", {
                  className: eW.F,
                  children:
                      "error" !== _ || E
                          ? (0, n.jsx)(u.y, {
                                type: u.y.Type.SPINNING_CIRCLE,
                                "aria-label": es.intl.string(es.t.ZTNur7),
                            })
                          : (0, n.jsx)(d.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: es.intl.string(es.t.F8FvUy),
                            }),
              }),
          })
        : (0, n.jsxs)("div", {
              className: eW.MY,
              children: [
                  (0, n.jsx)(c.Gt, {
                      className: eW.XG,
                      children: (0, n.jsxs)("div", {
                          className: r()(eW.Qs, { [eW.Dy]: D }),
                          children: [
                              f && A ? (0, n.jsx)(M.A, { onPublish: m }) : null,
                              (0, n.jsx)(eH, {
                                  guildId: t,
                                  header: D ? S.header : a.header,
                                  isEditing: D,
                                  canEdit: f,
                                  isSaving: "saving" === p,
                              }),
                              D
                                  ? (0, n.jsx)(eT, { guildId: t, widgets: T })
                                  : (0, n.jsx)(ex.A, { guildId: t, widgets: T }),
                          ],
                      }),
                  }),
                  (0, n.jsx)(e_, { guildId: t, isEditing: D }),
              ],
          });
}
