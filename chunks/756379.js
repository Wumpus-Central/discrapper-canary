i.r(t), i.d(t, { default: () => eB });
var l = i(477900),
    n = i(582128),
    a = i(503698),
    r = i.n(a),
    s = i(17928),
    d = i(834730),
    c = i(289873),
    u = i(689175),
    o = i(250527),
    _ = i(71393),
    E = i(562708),
    h = i(636537),
    g = i(228366),
    f = i(499785),
    m = i(716357);
function A(e) {
    return !(e instanceof h.oh) || e.status < 400 || e.status >= 500 || 429 === e.status;
}
var I = i(652215);
let S = 0;
async function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = m.A.getFetchStatus(e),
        l = t && "error" === i && !m.A.isInBackoff(e);
    if ("idle" !== i && !l) return;
    let n = S++;
    g.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: e, requestId: n });
    try {
        let { body: t } = await f.A.get({
            url: I.Rsh.GUILD_SPACE(e),
            trackedActionData: { event: E.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        g.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: e, requestId: n, space: t });
    } catch (t) {
        g.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: e, requestId: n, retryable: A(t) });
    }
}
async function x(e, t) {
    let { body: i } = await h.Bo.patch({ url: I.Rsh.GUILD_SPACE_SETTINGS(e), body: t, rejectWithError: !0 });
    return i;
}
async function D(e) {
    g.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: e });
    try {
        let { body: t } = await h.Bo.get({ url: I.Rsh.GUILD_SPACE_WIDGETS_CATALOG(e), rejectWithError: !0 });
        g.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: e, widgets: t.widgets });
    } catch {
        g.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: e });
    }
}
var C = i(960960),
    v = i(626584),
    T = i(754674);
let y = {};
function G(e) {
    let t = y[e];
    return t?.saveStatus === "saving" ? void 0 : t;
}
class j extends s.Ay.Store {
    static displayName = "GuildSpaceEditorStore";
    getDraft(e) {
        return y[e]?.draft;
    }
    isEditing(e) {
        return null != y[e];
    }
    getSaveStatus(e) {
        return y[e]?.saveStatus ?? "idle";
    }
}
let L = new j(g.h, {
    GUILD_SPACE_EDIT_START: function (e) {
        let { guildId: t, space: i } = e;
        y[t] = { draft: { header: i.header, widgets: (0, T.W$)(i.widgets) }, saveStatus: "idle" };
    },
    GUILD_SPACE_EDIT_ADD_WIDGET: function (e) {
        let { guildId: t, widget: i } = e,
            l = G(t);
        if (null == l) return !1;
        l.draft = { ...l.draft, widgets: (0, T.QD)(l.draft.widgets, i) };
    },
    GUILD_SPACE_EDIT_MOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: i, targetColumn: l, targetIndex: n } = e,
            a = G(t);
        if (null == a) return !1;
        let r = (0, T.Gm)(a.draft.widgets, i, l, n);
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
        l.draft = { ...l.draft, widgets: (0, T.W$)(n) };
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
            l = y[t];
        if (null == l) return !1;
        (l.saveStatus = "saving"), (l.activeSaveRequestId = i);
    },
    GUILD_SPACE_EDIT_SAVE_FAILURE: function (e) {
        let { guildId: t, requestId: i } = e,
            l = y[t];
        if (l?.activeSaveRequestId !== i) return !1;
        delete l.activeSaveRequestId, (l.saveStatus = "error");
    },
    GUILD_SPACE_EDIT_CANCEL: function (e) {
        let { guildId: t } = e;
        if (null == y[t]) return !1;
        delete y[t];
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t } = e;
        if (null == y[t]) return !1;
        delete y[t];
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: i },
        } = e;
        if (i || null == y[t]) return !1;
        delete y[t];
    },
    LOGOUT: function () {
        y = {};
    },
});
var U = i(593673);
let b = "draft:",
    N = 0,
    P = new v.A("GuildSpaceEditorActionCreators"),
    R = 0;
function w(e) {
    g.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: e });
}
function F(e, t, i, l) {
    g.h.dispatch({ type: "GUILD_SPACE_EDIT_MOVE_WIDGET", guildId: e, widgetId: t, targetColumn: i, targetIndex: l });
}
function k(e, t) {
    g.h.dispatch({ type: "GUILD_SPACE_EDIT_UPDATE_HEADER", guildId: e, customBanner: t });
}
async function W(e) {
    let t = L.getDraft(e);
    if (null == t || "saving" === L.getSaveStatus(e)) return;
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
                            if (e.type === U.a.IMAGE_TEXT) {
                                let t = { type: e.type, text: e.text, title: e.title };
                                return void 0 !== e.image && (t.image = e.image), t;
                            }
                            return e;
                        })(n),
                    };
                return t.startsWith(b) || (a.id = t), a;
            }),
        },
        n = R++;
    g.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_START", guildId: e, requestId: n });
    try {
        let { body: t } = await h.Bo.put({ url: I.Rsh.GUILD_SPACE(e), body: l, rejectWithError: !0 });
        g.h.dispatch({ type: "GUILD_SPACE_UPDATE_SUCCESS", guildId: e, space: t });
    } catch (t) {
        P.error("Failed to save guild space", { guildId: e, error: t }),
            g.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_FAILURE", guildId: e, requestId: n });
    }
}
var M = i(363957);
let O = 0;
async function H(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    i && g.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let l = M.A.getWidgetIdsToHydrate(e, t);
    if (0 === l.length) return;
    let n = O++;
    g.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: n, widgetIds: l });
    try {
        let { body: t } = await h.Bo.get({
            url: I.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: l },
            rejectWithError: !0,
        });
        g.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: n, widgets: t.widgets });
    } catch (t) {
        g.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: n, retryable: A(t) });
    }
}
var B = i(470452),
    K = i(872188),
    z = i(868285),
    V = i(36525),
    q = i(871682),
    Y = i(331322),
    $ = i(821609),
    X = i(499373),
    J = i(189213),
    Q = i(939249),
    Z = i(104510),
    ee = i(661531),
    et = i(245604),
    ei = i(192308),
    el = i(775602),
    en = i(61567),
    ea = i(375708),
    er = i(517228);
function es(e) {
    let { widget: t, onClick: i } = e,
        n = (0, s.bG)([el.Ay], () => el.Ay.useReducedMotion),
        { catalog_image_static_url: a, catalog_image_animated_url: r } = t.assets,
        c = (n ? null : r) ?? a,
        u = t.boost_price;
    return (0, l.jsxs)(Q.D, {
        className: er.HL,
        onClick: i,
        children: [
            (0, l.jsxs)("div", {
                className: er.b3,
                children: [
                    null != c && (0, l.jsx)("img", { className: er.YI, src: c, alt: "" }),
                    t.locked &&
                        (0, l.jsx)("div", {
                            className: er.AA,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(Z._, { size: "sm", color: ee.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                        }),
                    (0, l.jsxs)("div", {
                        className: er.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("div", { className: er.Ti, children: (0, l.jsx)("div", { className: er.dK }) }),
                            (0, l.jsxs)(Y.B, {
                                className: er.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, l.jsx)(et.U, {}),
                                    (0, l.jsx)(d.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: ea.intl.string(en.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(Y.B, {
                gap: 4,
                children: [
                    (0, l.jsx)(d.E, { variant: "text-sm/semibold", color: "text-default", children: t.name }),
                    null != u && u > 0
                        ? (0, l.jsxs)(Y.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, l.jsx)(Z._, { size: "sm", color: ee.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(d.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: ea.intl.format(en.default["8wD0Un"], { boostPrice: u }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)(d.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: ea.intl.string(en.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function ed(e) {
    let { guildId: t, ...i } = e,
        a = (0, s.yK)([C.A, L], () => {
            let e = L.getDraft(t)?.widgets ?? [];
            var i = C.A.getWidgets(t) ?? [];
            let l = new Map();
            for (let t of e) l.set(t.type, (l.get(t.type) ?? 0) + 1);
            return i.filter((e) => (l.get(e.type) ?? 0) < e.max_instances);
        }, [t]);
    return (
        n.useEffect(() => {
            D(t);
        }, [t]),
        (0, l.jsx)(J.Modal, {
            title: ea.intl.string(en.default.L8Xfoo),
            subtitle: ea.intl.string(en.default["N8nJ+T"]),
            actions: [],
            ...i,
            children: (0, l.jsx)("div", {
                className: er.Vg,
                children: a.map((e) =>
                    (0, l.jsx)(
                        es,
                        {
                            widget: e,
                            onClick: () => {
                                var l, n, a;
                                (l = e.type),
                                    (n = e.name),
                                    (a = e.locked),
                                    g.h.dispatch({
                                        type: "GUILD_SPACE_EDIT_ADD_WIDGET",
                                        guildId: t,
                                        widget: (function (e, t, i) {
                                            let l = {
                                                id: `${b}${N++}`,
                                                position: { column: T.FT, order: 0 },
                                                requires_hydration: !1,
                                                default_title: t,
                                                locked: i,
                                            };
                                            switch (e) {
                                                case U.a.IMAGE_TEXT:
                                                    return {
                                                        ...l,
                                                        type: e,
                                                        config: { type: e, title: null, image_hash: null, text: null },
                                                    };
                                                case U.a.LEADERBOARD:
                                                case U.a.WHITEBOARD:
                                                case U.a.POPULAR_MUSIC:
                                                case U.a.LIVE_ACTIVITY:
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
var ec = i(992303);
function eu(e) {
    let { guildId: t, isEditing: i } = e,
        a = (0, s.bG)([L], () => L.getSaveStatus(t), [t]),
        r = (0, s.bG)([L], () => L.getDraft(t)?.widgets.length ?? 0, [t]),
        c = "saving" === a,
        u = n.useCallback(() => {
            W(t);
        }, [t]),
        o = n.useCallback(() => {
            w(t);
        }, [t]);
    return (0, l.jsx)(z.F, {
        component: "div",
        children:
            i &&
            (0, l.jsx)(q.F, {
                className: ec.K,
                children: (0, l.jsx)(V.A, {
                    submitting: c,
                    disabled: c,
                    onSave: u,
                    onReset: c ? void 0 : o,
                    message: (0, l.jsxs)(Y.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, l.jsx)($.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: X.T,
                                text: ea.intl.string(en.default.L8Xfoo),
                                disabled: c,
                                onClick: () => {
                                    let e;
                                    return (
                                        (e = (e) => (0, l.jsx)(ed, { guildId: t, ...e })),
                                        void (0, ei.openModalLazy)(() => Promise.resolve(e), {
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
                                      children: ea.intl.string(en.default.HmFYc5),
                                  })
                                : (0, l.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      children: ea.intl.format(en.default.hpAg80, { panelCount: r }),
                                  }),
                        ],
                    }),
                }),
            }),
    });
}
var eo = i(686246),
    e_ = i(651300),
    eE = i(451395),
    eh = i(42499),
    eg = i(539888),
    ef = i(179105),
    em = i(294918);
let eA = "GUILD_SPACE_WIDGET",
    eI = "GUILD_SPACE_WIDGETS",
    eS = `${eA}_${eI}`;
function ep(e) {
    let {
            guildId: t,
            widget: i,
            column: a,
            positionNumber: d,
            columnWidgetCount: c,
            flatIndex: u,
            leftColumnCount: o,
            onReorder: _,
            isSaving: E,
        } = e,
        h = n.useRef(null),
        f = n.useRef(null),
        m = (0, s.bG)([M.A], () => (i.requires_hydration ? M.A.getHydration(t, i.id) : void 0), [
            t,
            i.id,
            i.requires_hydration,
        ]),
        A = (0, eh.K)(t, i),
        { isDragging: I, dragSourcePosition: S } = (0, eE.gY)({
            dragRef: h,
            dropRef: f,
            index: u,
            listType: eI,
            itemType: eA,
            itemId: i.id,
            onReorder: _,
            canDrag: !E,
        }),
        p = null == S ? null : S < o ? T.FT : T.yM,
        x = null != p && p !== a;
    return (0, l.jsx)("div", {
        ref: f,
        className: r()(em.NI, { [em.cB]: I, [em.ne]: null != S && (x || S > u), [em.O3]: null != S && !x && S < u }),
        "data-dnd-name": ea.intl.formatToPlainString(a === T.yM ? en.default.O9RvHQ : en.default["+cSvS8"], {
            positionNumber: d,
            positionCount: c,
        }),
        children: (0, l.jsx)(eg.P, {
            guildId: t,
            widget: i,
            guildSpaceMode: "edit",
            hydration: m,
            lock: A,
            dragHandleRef: h,
            disabled: E,
            onRemove: () => {
                var e;
                return (
                    (e = i.id), void g.h.dispatch({ type: "GUILD_SPACE_EDIT_REMOVE_WIDGET", guildId: t, widgetId: e })
                );
            },
            onCommitConfig: (e) => {
                var l;
                return (
                    (l = i.id),
                    void g.h.dispatch({
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
function ex(e) {
    let { column: t, onDropAtEnd: i } = e,
        a = n.useRef(null),
        [{ isOver: s }, d] = (0, e_.H)({
            accept: eS,
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
            className: r()(em.wr, { [em.SX]: s }),
            "data-dnd-name": ea.intl.string(t === T.yM ? en.default.fWef0G : en.default.KcdDyT),
        })
    );
}
function eD(e) {
    let { guildId: t, widgets: i } = e,
        a = n.useMemo(() => (0, T.Rl)(i), [i]),
        r = n.useMemo(
            () =>
                a.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != ef.m[t];
                    }),
                ),
            [a],
        ),
        d = n.useMemo(() => [...r[T.FT], ...r[T.yM]], [r]),
        c = (0, eo.V)((e) => e.isDragging() && e.getItemType() === eS),
        u = (0, s.bG)([L], () => "saving" === L.getSaveStatus(t), [t]),
        o = n.useCallback(
            (e, i) => {
                let l = d[e],
                    n = d[i];
                null != l && null != n && F(t, l.id, n.position.column, n.position.order);
            },
            [t, d],
        ),
        _ = n.useCallback(
            (e, i) => {
                F(t, e, i, a[i]?.length ?? 0);
            },
            [t, a],
        );
    return (0, l.jsx)("div", {
        className: em.Vg,
        children: r.map((e, i) =>
            (0, l.jsxs)(
                "div",
                {
                    className: em.fi,
                    children: [
                        e.map((n, a) =>
                            (0, l.jsx)(
                                ep,
                                {
                                    guildId: t,
                                    widget: n,
                                    column: i,
                                    positionNumber: a + 1,
                                    columnWidgetCount: e.length,
                                    flatIndex: i === T.yM ? r[T.FT].length + a : a,
                                    leftColumnCount: r[T.FT].length,
                                    onReorder: o,
                                    isSaving: u,
                                },
                                n.id,
                            ),
                        ),
                        c && !u && (0, l.jsx)(ex, { column: i, onDropAtEnd: _ }),
                    ],
                },
                i,
            ),
        ),
    });
}
var eC = i(529609),
    ev = i(866665),
    eT = i(408278),
    ey = i(241326),
    eG = i(297264),
    ej = i(22231),
    eL = i(654107),
    eU = i(548118),
    eb = i(837011),
    eN = i(649640),
    eP = i(2553),
    eR = i(405810),
    ew = i(498642),
    eF = i(486020),
    ek = i(488428),
    eW = i(776231),
    eM = i(986898);
function eO(e) {
    let { guildId: t, header: i, canEdit: a, isEditing: r, isSaving: c } = e,
        u = (0, s.bG)([_.A], () => _.A.getGuild(t), [t]),
        o = (0, s.bG)([ew.A], () => ew.A.getOnlineCount(t), [t]),
        E = (0, s.bG)([ew.A], () => ew.A.getMemberCount(t), [t]),
        h = i.custom_banner,
        f = (0, s.bG)([eb.A], () => eb.A.getProfile(t), [t]),
        A = (0, eN.b2)().hex(),
        S = null == u ? null : eF.Ay.getGuildIconURL({ id: u.id, icon: u.icon, size: 64 }),
        p = (0, eL.Ay)(S, A),
        x = (0, eN.n6)(f?.brandColorPrimary ?? p),
        D = n.useMemo(
            () =>
                null == u
                    ? null
                    : "string" == typeof h
                      ? h
                      : void 0 === h && null != i.custom_banner_hash
                        ? (function (e, t) {
                              let i = eF.QB ? "webp" : "jpg",
                                  { CDN_HOST: l, API_ENDPOINT: n } = window.GLOBAL_ENV,
                                  a = I.Rsh.GUILD_SPACE_BANNER(e, t, i),
                                  r = null != l ? `https://${l}${a}` : location.protocol + n + a,
                                  s = { size: (0, eW.kr)(1200 * (0, eW.mZ)()) };
                              return "jpg" === i && (s.quality = "lossless"), (r += `?${ek.stringify(s)}`);
                          })(u.id, i.custom_banner_hash)
                        : eF.Ay.getGuildBannerURL({ id: u.id, banner: u.banner }),
            [u, h, i.custom_banner_hash],
        ),
        C = "string" == typeof h || (void 0 === h && null != i.custom_banner_hash);
    return null == u
        ? null
        : (0, l.jsxs)("div", {
              className: eM.wx,
              children: [
                  null != D
                      ? (0, l.jsx)("img", { className: eM.vK, src: D, alt: "" })
                      : (0, l.jsx)("div", { className: eM.vK, style: { background: x }, "aria-hidden": !0 }),
                  (0, l.jsx)("div", { className: eM.f5, "aria-hidden": !0 }),
                  r
                      ? (0, l.jsxs)("div", {
                            className: eM.j0,
                            children: [
                                (0, l.jsx)(eR.A, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: ea.intl.string(en.default["EN+0gW"]),
                                    onChange: (e) => k(t, e),
                                    maxFileSizeBytes: 0xa00000,
                                    onFileSizeError: () => (0, eP.A)(0xa00000),
                                    disabled: c,
                                }),
                                C
                                    ? (0, l.jsx)(ev.m, {
                                          text: ea.intl.string(en.default["CunK+J"]),
                                          ariaHidden: !0,
                                          children: (0, l.jsx)(eT.K, {
                                              variant: "critical-secondary",
                                              icon: ey.TrashIcon,
                                              "aria-label": ea.intl.string(en.default["CunK+J"]),
                                              onClick: () => k(t, null),
                                              disabled: c,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  (0, l.jsxs)("div", {
                      className: eM.D_,
                      children: [
                          (0, l.jsx)(eU.Ay, {
                              className: eM.Kk,
                              guild: u,
                              size: eU.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsxs)("div", {
                              className: eM.pq,
                              children: [
                                  (0, l.jsx)(eG.D, {
                                      variant: "heading-xl/bold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: u.name,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: eM.M1,
                                      children: [
                                          null != o
                                              ? (0, l.jsxs)("div", {
                                                    className: eM.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: eM.RS, "aria-hidden": !0 }),
                                                        (0, l.jsx)(d.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: ea.intl.format(en.default.G08ClG, { count: o }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != E
                                              ? (0, l.jsxs)("div", {
                                                    className: eM.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: eM.kq, "aria-hidden": !0 }),
                                                        (0, l.jsx)(d.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: ea.intl.format(en.default["rp7bx+"], {
                                                                count: E,
                                                            }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: eM.dJ,
                                              children: [
                                                  (0, l.jsx)(Z._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, l.jsx)(d.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: ea.intl.format(en.default.DwFqrb, {
                                                          count: u.premiumSubscriberCount,
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
                      (0, l.jsx)($.$, {
                          icon: ej.PencilIcon,
                          text: ea.intl.string(en.default.KcOpCm),
                          onClick: () => {
                              let e;
                              null != (e = m.A.getSpace(t)) &&
                                  g.h.dispatch({ type: "GUILD_SPACE_EDIT_START", guildId: t, space: e });
                          },
                      }),
              ],
          });
}
var eH = i(312152);
function eB(e) {
    let { guildId: t } = e,
        i = n.useRef(null),
        [a, E, h] = (0, s.yK)([m.A], () => [m.A.getSpace(t), m.A.getFetchStatus(t), m.A.isInBackoff(t)], [t]);
    n.useEffect(() => {
        let e = i.current !== t;
        (i.current = t), p(t, e);
    }, [E, t]),
        n.useEffect(() => {
            (0, o.L4)(t, !1, { respectBackoff: !0 });
        }, [t]);
    let g = (0, s.bG)([_.A], () => _.A.getGuild(t), [t]),
        f = (0, B.mN)(g),
        A = (0, s.bG)([C.A], () => C.A.getFetchStatus(t), [t]);
    n.useEffect(() => {
        f && "idle" === A && D(t);
    }, [f, A, t]);
    let I = g?.guildSpaceSettings?.publish_status !== U.B.PUBLISHED,
        S = n.useCallback(() => x(t, { publish_status: U.B.PUBLISHED }), [t]),
        [v, T] = (0, s.yK)([L], () => [L.getDraft(t), L.getSaveStatus(t)], [t]),
        y = f && null != v,
        G = y ? v.widgets : a?.widgets;
    n.useEffect(() => {
        f || null == v || "saving" === T || w(t);
    }, [f, v, T, t]);
    let j = n.useMemo(
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
        b = (0, s.yK)([M.A], () => M.A.getWidgetIdsToHydrate(t, j), [t, j]),
        N = n.useRef(null);
    return (n.useEffect(() => {
        if (N.current !== t && null != a) {
            (N.current = t), H(t, j, !0);
            return;
        }
        H(t, b);
    }, [t, a, j, b]),
    null == a || null == G)
        ? (0, l.jsx)("div", {
              className: eH.MY,
              children: (0, l.jsx)("div", {
                  className: eH.F,
                  children:
                      "error" !== E || h
                          ? (0, l.jsx)(c.y, {
                                type: c.y.Type.SPINNING_CIRCLE,
                                "aria-label": ea.intl.string(ea.t.ZTNur7),
                            })
                          : (0, l.jsx)(d.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: ea.intl.string(ea.t.F8FvUy),
                            }),
              }),
          })
        : (0, l.jsxs)("div", {
              className: eH.MY,
              children: [
                  (0, l.jsx)(u.Gt, {
                      className: eH.XG,
                      children: (0, l.jsxs)("div", {
                          className: r()(eH.Qs, { [eH.Dy]: y }),
                          children: [
                              f && I ? (0, l.jsx)(K.A, { onPublish: S }) : null,
                              (0, l.jsx)(eO, {
                                  guildId: t,
                                  header: y ? v.header : a.header,
                                  isEditing: y,
                                  canEdit: f,
                                  isSaving: "saving" === T,
                              }),
                              y
                                  ? (0, l.jsx)(eD, { guildId: t, widgets: G })
                                  : (0, l.jsx)(eC.A, { guildId: t, widgets: G }),
                          ],
                      }),
                  }),
                  (0, l.jsx)(eu, { guildId: t, isEditing: y }),
              ],
          });
}
