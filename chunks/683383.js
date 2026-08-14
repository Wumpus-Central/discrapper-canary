i.r(e), i.d(e, { default: () => tM });
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
    f = i(228366),
    g = i(499785),
    h = i(716357);
function A(t) {
    return !(t instanceof E.oh) || t.status < 400 || t.status >= 500 || 429 === t.status;
}
var m = i(652215);
let S = 0;
async function I(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = h.A.getFetchStatus(t),
        l = e && "error" === i && !h.A.isInBackoff(t);
    if ("idle" !== i && !l) return;
    let n = S++;
    f.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: t, requestId: n });
    try {
        let { body: e } = await g.A.get({
            url: m.Rsh.GUILD_SPACE(t),
            trackedActionData: { event: _.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        f.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: t, requestId: n, space: e });
    } catch (e) {
        f.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: t, requestId: n, retryable: A(e) });
    }
}
async function C(t, e) {
    let { body: i } = await E.Bo.patch({ url: m.Rsh.GUILD_SPACE_SETTINGS(t), body: e, rejectWithError: !0 });
    return i;
}
var p = i(626584),
    D = i(754674);
let T = {};
function x(t) {
    let e = T[t];
    return e?.saveStatus === "saving" ? void 0 : e;
}
class v extends s.Ay.Store {
    static displayName = "GuildSpaceEditorStore";
    getDraft(t) {
        return T[t]?.draft;
    }
    isEditing(t) {
        return null != T[t];
    }
    getSaveStatus(t) {
        return T[t]?.saveStatus ?? "idle";
    }
}
let G = new v(f.h, {
    GUILD_SPACE_EDIT_START: function (t) {
        let { guildId: e, space: i } = t;
        T[e] = { draft: { header: i.header, widgets: (0, D.W$)(i.widgets) }, saveStatus: "idle" };
    },
    GUILD_SPACE_EDIT_ADD_WIDGET: function (t) {
        let { guildId: e, widget: i } = t,
            l = x(e);
        if (null == l) return !1;
        l.draft = { ...l.draft, widgets: (0, D.QD)(l.draft.widgets, i) };
    },
    GUILD_SPACE_EDIT_MOVE_WIDGET: function (t) {
        let { guildId: e, widgetId: i, targetColumn: l, targetIndex: n } = t,
            a = x(e);
        if (null == a) return !1;
        let r = (0, D.Gm)(a.draft.widgets, i, l, n);
        if (null == r) return !1;
        a.draft = { ...a.draft, widgets: r };
    },
    GUILD_SPACE_EDIT_REMOVE_WIDGET: function (t) {
        let { guildId: e, widgetId: i } = t,
            l = x(e);
        if (null == l) return !1;
        let n = l.draft.widgets.filter((t) => {
            let { id: e } = t;
            return e !== i;
        });
        if (n.length === l.draft.widgets.length) return !1;
        l.draft = { ...l.draft, widgets: (0, D.W$)(n) };
    },
    GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG: function (t) {
        let { guildId: e, widgetId: i, config: l } = t,
            n = x(e);
        if (null == n) return !1;
        let a = n.draft.widgets.map((t) => (t.id === i ? { ...t, config: l } : t));
        n.draft = { ...n.draft, widgets: a };
    },
    GUILD_SPACE_EDIT_UPDATE_HEADER: function (t) {
        let { guildId: e, customBanner: i } = t,
            l = x(e);
        if (null == l) return !1;
        l.draft = { ...l.draft, header: { ...l.draft.header, custom_banner: i } };
    },
    GUILD_SPACE_EDIT_SAVE_START: function (t) {
        let { guildId: e, requestId: i } = t,
            l = T[e];
        if (null == l) return !1;
        (l.saveStatus = "saving"), (l.activeSaveRequestId = i);
    },
    GUILD_SPACE_EDIT_SAVE_FAILURE: function (t) {
        let { guildId: e, requestId: i } = t,
            l = T[e];
        if (l?.activeSaveRequestId !== i) return !1;
        delete l.activeSaveRequestId, (l.saveStatus = "error");
    },
    GUILD_SPACE_EDIT_CANCEL: function (t) {
        let { guildId: e } = t;
        if (null == T[e]) return !1;
        delete T[e];
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (t) {
        let { guildId: e } = t;
        if (null == T[e]) return !1;
        delete T[e];
    },
    GUILD_DELETE: function (t) {
        let {
            guild: { id: e, unavailable: i },
        } = t;
        if (i || null == T[e]) return !1;
        delete T[e];
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
function b(t) {
    f.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: t });
}
function R(t, e, i, l) {
    f.h.dispatch({ type: "GUILD_SPACE_EDIT_MOVE_WIDGET", guildId: t, widgetId: e, targetColumn: i, targetIndex: l });
}
function N(t, e) {
    f.h.dispatch({ type: "GUILD_SPACE_EDIT_UPDATE_HEADER", guildId: t, customBanner: e });
}
async function w(t) {
    let e = G.getDraft(t);
    if (null == e || "saving" === G.getSaveStatus(t)) return;
    let i = {};
    void 0 !== e.header.custom_banner && (i.custom_banner = e.header.custom_banner);
    let l = {
            header: i,
            widgets: e.widgets.map((t) => {
                let { id: e, type: i, position: l, config: n } = t,
                    a = {
                        type: i,
                        position: l,
                        config: (function (t) {
                            if (t.type === y.a.IMAGE_TEXT) {
                                let e = { type: t.type, text: t.text, title: t.title };
                                return void 0 !== t.image && (e.image = t.image), e;
                            }
                            return t;
                        })(n),
                    };
                return e.startsWith(L) || (a.id = e), a;
            }),
        },
        n = P++;
    f.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_START", guildId: t, requestId: n });
    try {
        let { body: e } = await E.Bo.put({ url: m.Rsh.GUILD_SPACE(t), body: l, rejectWithError: !0 });
        f.h.dispatch({ type: "GUILD_SPACE_UPDATE_SUCCESS", guildId: t, space: e });
    } catch (e) {
        U.error("Failed to save guild space", { guildId: t, error: e }),
            f.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_FAILURE", guildId: t, requestId: n });
    }
}
var F = i(363957);
let O = 0;
async function H(t, e) {
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    i && f.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: t, widgetIds: e });
    let l = F.A.getWidgetIdsToHydrate(t, e);
    if (0 === l.length) return;
    let n = O++;
    f.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: t, requestId: n, widgetIds: l });
    try {
        let { body: e } = await E.Bo.get({
            url: m.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(t),
            query: { widget_ids: l },
            rejectWithError: !0,
        });
        f.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: t, requestId: n, widgets: e.widgets });
    } catch (e) {
        f.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: t, requestId: n, retryable: A(e) });
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
    tt = i(775602);
async function te(t) {
    f.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: t });
    try {
        let { body: e } = await E.Bo.get({ url: m.Rsh.GUILD_SPACE_WIDGETS_CATALOG(t), rejectWithError: !0 });
        f.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: t, widgets: e.widgets });
    } catch {
        f.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: t });
    }
}
let ti = {};
function tl(t) {
    let e = ti[t];
    return null == e && ((e = { fetchStatus: "idle" }), (ti[t] = e)), e;
}
class tn extends s.Ay.Store {
    static displayName = "GuildSpaceCatalogStore";
    getWidgets(t) {
        return ti[t]?.widgets;
    }
    getFetchStatus(t) {
        return ti[t]?.fetchStatus ?? "idle";
    }
}
let ta = new tn(f.h, {
    GUILD_SPACE_CATALOG_FETCH_START: function (t) {
        let { guildId: e } = t;
        tl(e).fetchStatus = "loading";
    },
    GUILD_SPACE_CATALOG_FETCH_SUCCESS: function (t) {
        let { guildId: e, widgets: i } = t,
            l = tl(e);
        (l.widgets = i), (l.fetchStatus = "success");
    },
    GUILD_SPACE_CATALOG_FETCH_FAILURE: function (t) {
        let { guildId: e } = t;
        tl(e).fetchStatus = "error";
    },
    GUILD_DELETE: function (t) {
        let {
            guild: { id: e, unavailable: i },
        } = t;
        if (i || null == ti[e]) return !1;
        delete ti[e];
    },
    LOGOUT: function () {
        ti = {};
    },
});
var tr = i(983283),
    ts = i(375708),
    td = i(241181);
function tu(t) {
    let { widget: e, onClick: i } = t,
        n = (0, s.bG)([tt.Ay], () => tt.Ay.useReducedMotion),
        { catalog_image_static_url: a, catalog_image_animated_url: r } = e.assets,
        u = (n ? null : r) ?? a,
        c = e.boost_price;
    return (0, l.jsxs)($.D, {
        className: td.HL,
        onClick: i,
        children: [
            (0, l.jsxs)("div", {
                className: td.b3,
                children: [
                    null != u && (0, l.jsx)("img", { className: td.YI, src: u, alt: "" }),
                    (0, l.jsxs)("div", {
                        className: td.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("div", { className: td.Ti, children: (0, l.jsx)("div", { className: td.dK }) }),
                            (0, l.jsxs)(V.B, {
                                className: td.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, l.jsx)(X.U, {}),
                                    (0, l.jsx)(d.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: ts.intl.string(tr.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(V.B, {
                gap: 4,
                children: [
                    (0, l.jsx)(d.E, { variant: "text-sm/semibold", color: "text-default", children: e.name }),
                    null != c && c > 0
                        ? (0, l.jsxs)(V.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, l.jsx)(J._, { size: "sm", color: Q.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(d.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: ts.intl.format(tr.default["8wD0Un"], { boostPrice: c }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)(d.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: ts.intl.string(tr.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function tc(t) {
    let { guildId: e, ...i } = t,
        a = (0, s.yK)([ta, G], () => {
            let t = G.getDraft(e)?.widgets ?? [];
            var i = ta.getWidgets(e) ?? [];
            let l = new Map();
            for (let e of t) l.set(e.type, (l.get(e.type) ?? 0) + 1);
            return i.filter((t) => (l.get(t.type) ?? 0) < t.max_instances);
        }, [e]);
    return (
        n.useEffect(() => {
            te(e);
        }, [e]),
        (0, l.jsx)(Y.Modal, {
            title: ts.intl.string(tr.default.L8Xfoo),
            subtitle: ts.intl.string(tr.default["N8nJ+T"]),
            actions: [],
            ...i,
            children: (0, l.jsx)("div", {
                className: td.Vg,
                children: a.map((t) =>
                    (0, l.jsx)(
                        tu,
                        {
                            widget: t,
                            onClick: () => {
                                var l, n;
                                (l = t.type),
                                    (n = t.name),
                                    f.h.dispatch({
                                        type: "GUILD_SPACE_EDIT_ADD_WIDGET",
                                        guildId: e,
                                        widget: (function (t, e) {
                                            let i = {
                                                id: `${L}${j++}`,
                                                position: { column: D.FT, order: 0 },
                                                requires_hydration: !1,
                                                default_title: e,
                                            };
                                            switch (t) {
                                                case y.a.IMAGE_TEXT:
                                                    return {
                                                        ...i,
                                                        type: t,
                                                        config: { type: t, title: null, image_hash: null, text: null },
                                                    };
                                                case y.a.LEADERBOARD:
                                                case y.a.WHITEBOARD:
                                                case y.a.POPULAR_MUSIC:
                                                case y.a.LIVE_ACTIVITY:
                                                    return { ...i, type: t, config: { type: t } };
                                            }
                                        })(l, n),
                                    }),
                                    i.onClose();
                            },
                        },
                        t.type,
                    ),
                ),
            }),
        })
    );
}
var to = i(466844);
function t_(t) {
    let { guildId: e, isEditing: i } = t,
        a = (0, s.bG)([G], () => G.getSaveStatus(e), [e]),
        r = (0, s.bG)([G], () => G.getDraft(e)?.widgets.length ?? 0, [e]),
        u = "saving" === a,
        c = n.useCallback(() => {
            w(e);
        }, [e]),
        o = n.useCallback(() => {
            b(e);
        }, [e]);
    return (0, l.jsx)(k.F, {
        component: "div",
        children:
            i &&
            (0, l.jsx)(K.F, {
                className: to.K,
                children: (0, l.jsx)(B.A, {
                    submitting: u,
                    disabled: u,
                    onSave: c,
                    onReset: u ? void 0 : o,
                    message: (0, l.jsxs)(V.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, l.jsx)(q.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: z.T,
                                text: ts.intl.string(tr.default.L8Xfoo),
                                disabled: u,
                                onClick: () => {
                                    let t;
                                    return (
                                        (t = (t) => (0, l.jsx)(tc, { guildId: e, ...t })),
                                        void (0, Z.openModalLazy)(() => Promise.resolve(t), {
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
                                      children: ts.intl.string(tr.default.HmFYc5),
                                  })
                                : (0, l.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      children: ts.intl.format(tr.default.hpAg80, { panelCount: r }),
                                  }),
                        ],
                    }),
                }),
            }),
    });
}
var tE = i(686246),
    tf = i(651300),
    tg = i(451395),
    th = i(317574),
    tA = i(521810),
    tm = i(84899);
let tS = "GUILD_SPACE_WIDGET",
    tI = "GUILD_SPACE_WIDGETS",
    tC = `${tS}_${tI}`;
function tp(t) {
    let {
            guildId: e,
            widget: i,
            column: a,
            positionNumber: d,
            columnWidgetCount: u,
            flatIndex: c,
            leftColumnCount: o,
            onReorder: _,
            isSaving: E,
        } = t,
        g = n.useRef(null),
        h = n.useRef(null),
        A = (0, s.bG)([F.A], () => (i.requires_hydration ? F.A.getHydration(e, i.id) : void 0), [
            e,
            i.id,
            i.requires_hydration,
        ]),
        { isDragging: m, dragSourcePosition: S } = (0, tg.gY)({
            dragRef: g,
            dropRef: h,
            index: c,
            listType: tI,
            itemType: tS,
            itemId: i.id,
            onReorder: _,
            canDrag: !E,
        }),
        I = null == S ? null : S < o ? D.FT : D.yM,
        C = null != I && I !== a;
    return (0, l.jsx)("div", {
        ref: h,
        className: r()(tm.NI, { [tm.cB]: m, [tm.ne]: null != S && (C || S > c), [tm.O3]: null != S && !C && S < c }),
        "data-dnd-name": ts.intl.formatToPlainString(a === D.yM ? tr.default.O9RvHQ : tr.default["+cSvS8"], {
            positionNumber: d,
            positionCount: u,
        }),
        children: (0, l.jsx)(th.P, {
            widget: i,
            guildSpaceMode: "edit",
            hydration: A,
            dragHandleRef: g,
            disabled: E,
            onRemove: () => {
                var t;
                return (
                    (t = i.id), void f.h.dispatch({ type: "GUILD_SPACE_EDIT_REMOVE_WIDGET", guildId: e, widgetId: t })
                );
            },
            onCommitConfig: (t) => {
                var l;
                return (
                    (l = i.id),
                    void f.h.dispatch({
                        type: "GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG",
                        guildId: e,
                        widgetId: l,
                        config: t,
                    })
                );
            },
        }),
    });
}
function tD(t) {
    let { column: e, onDropAtEnd: i } = t,
        a = n.useRef(null),
        [{ isOver: s }, d] = (0, tf.H)({
            accept: tC,
            drop: (t) => i(t.id, e),
            collect: (t) => ({ isOver: t.isOver({ shallow: !0 }) && t.canDrop() }),
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
            className: r()(tm.wr, { [tm.SX]: s }),
            "data-dnd-name": ts.intl.string(e === D.yM ? tr.default.fWef0G : tr.default.KcdDyT),
        })
    );
}
function tT(t) {
    let { guildId: e, widgets: i } = t,
        a = n.useMemo(() => (0, D.Rl)(i), [i]),
        r = n.useMemo(
            () =>
                a.map((t) =>
                    t.filter((t) => {
                        let { type: e } = t;
                        return null != tA.m[e];
                    }),
                ),
            [a],
        ),
        d = n.useMemo(() => [...r[D.FT], ...r[D.yM]], [r]),
        u = (0, tE.V)((t) => t.isDragging() && t.getItemType() === tC),
        c = (0, s.bG)([G], () => "saving" === G.getSaveStatus(e), [e]),
        o = n.useCallback(
            (t, i) => {
                let l = d[t],
                    n = d[i];
                null != l && null != n && R(e, l.id, n.position.column, n.position.order);
            },
            [e, d],
        ),
        _ = n.useCallback(
            (t, i) => {
                R(e, t, i, a[i]?.length ?? 0);
            },
            [e, a],
        );
    return (0, l.jsx)("div", {
        className: tm.Vg,
        children: r.map((t, i) =>
            (0, l.jsxs)(
                "div",
                {
                    className: tm.fi,
                    children: [
                        t.map((n, a) =>
                            (0, l.jsx)(
                                tp,
                                {
                                    guildId: e,
                                    widget: n,
                                    column: i,
                                    positionNumber: a + 1,
                                    columnWidgetCount: t.length,
                                    flatIndex: i === D.yM ? r[D.FT].length + a : a,
                                    leftColumnCount: r[D.FT].length,
                                    onReorder: o,
                                    isSaving: c,
                                },
                                n.id,
                            ),
                        ),
                        u && !c && (0, l.jsx)(tD, { column: i, onDropAtEnd: _ }),
                    ],
                },
                i,
            ),
        ),
    });
}
var tx = i(529609),
    tv = i(866665),
    tG = i(408278),
    ty = i(241326),
    tL = i(297264),
    tj = i(22231),
    tU = i(548118),
    tP = i(2553),
    tb = i(405810),
    tR = i(498642),
    tN = i(486020),
    tw = i(488428),
    tF = i(776231),
    tO = i(555063);
function tH(t) {
    let { guildId: e, header: i, canEdit: a, isEditing: r, isSaving: u } = t,
        c = (0, s.bG)([o.A], () => o.A.getGuild(e), [e]),
        _ = (0, s.bG)([tR.A], () => tR.A.getOnlineCount(e), [e]),
        E = (0, s.bG)([tR.A], () => tR.A.getMemberCount(e), [e]),
        g = i.custom_banner,
        A = n.useMemo(
            () =>
                null == c
                    ? null
                    : "string" == typeof g
                      ? g
                      : void 0 === g && null != i.custom_banner_hash
                        ? (function (t, e) {
                              let i = tN.QB ? "webp" : "jpg",
                                  { CDN_HOST: l, API_ENDPOINT: n } = window.GLOBAL_ENV,
                                  a = m.Rsh.GUILD_SPACE_BANNER(t, e, i),
                                  r = null != l ? `https://${l}${a}` : location.protocol + n + a,
                                  s = { size: (0, tF.kr)(1200 * (0, tF.mZ)()) };
                              return "jpg" === i && (s.quality = "lossless"), (r += `?${tw.stringify(s)}`);
                          })(c.id, i.custom_banner_hash)
                        : tN.Ay.getGuildBannerURL({ id: c.id, banner: c.banner }),
            [c, g, i.custom_banner_hash],
        ),
        S = "string" == typeof g || (void 0 === g && null != i.custom_banner_hash);
    return null == c
        ? null
        : (0, l.jsxs)("div", {
              className: tO.wx,
              children: [
                  null != A ? (0, l.jsx)("img", { className: tO.vK, src: A, alt: "" }) : null,
                  (0, l.jsx)("div", { className: tO.f5, "aria-hidden": !0 }),
                  r
                      ? (0, l.jsxs)("div", {
                            className: tO.j0,
                            children: [
                                (0, l.jsx)(tb.A, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: ts.intl.string(tr.default["EN+0gW"]),
                                    onChange: (t) => N(e, t),
                                    maxFileSizeBytes: 0xa00000,
                                    onFileSizeError: () => (0, tP.A)(0xa00000),
                                    disabled: u,
                                }),
                                S
                                    ? (0, l.jsx)(tv.m, {
                                          text: ts.intl.string(tr.default["CunK+J"]),
                                          ariaHidden: !0,
                                          children: (0, l.jsx)(tG.K, {
                                              variant: "critical-secondary",
                                              icon: ty.u,
                                              "aria-label": ts.intl.string(tr.default["CunK+J"]),
                                              onClick: () => N(e, null),
                                              disabled: u,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  (0, l.jsxs)("div", {
                      className: tO.D_,
                      children: [
                          (0, l.jsx)(tU.Ay, {
                              className: tO.Kk,
                              guild: c,
                              size: tU.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsxs)("div", {
                              className: tO.pq,
                              children: [
                                  (0, l.jsx)(tL.D, {
                                      variant: "heading-xl/bold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: c.name,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: tO.M1,
                                      children: [
                                          null != _
                                              ? (0, l.jsxs)("div", {
                                                    className: tO.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: tO.RS, "aria-hidden": !0 }),
                                                        (0, l.jsx)(d.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: ts.intl.format(tr.default.G08ClG, { count: _ }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != E
                                              ? (0, l.jsxs)("div", {
                                                    className: tO.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: tO.kq, "aria-hidden": !0 }),
                                                        (0, l.jsx)(d.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: ts.intl.format(tr.default["rp7bx+"], {
                                                                count: E,
                                                            }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: tO.dJ,
                                              children: [
                                                  (0, l.jsx)(J._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, l.jsx)(d.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: ts.intl.format(tr.default.DwFqrb, {
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
                      (0, l.jsx)(q.$, {
                          icon: tj.R,
                          text: ts.intl.string(tr.default.KcOpCm),
                          onClick: () => {
                              let t;
                              null != (t = h.A.getSpace(e)) &&
                                  f.h.dispatch({ type: "GUILD_SPACE_EDIT_START", guildId: e, space: t });
                          },
                      }),
              ],
          });
}
var tW = i(278093);
function tM(t) {
    let { guildId: e } = t,
        i = n.useRef(null),
        [a, _, E] = (0, s.yK)([h.A], () => [h.A.getSpace(e), h.A.getFetchStatus(e), h.A.isInBackoff(e)], [e]);
    n.useEffect(() => {
        let t = i.current !== e;
        (i.current = e), I(e, t);
    }, [_, e]);
    let f = (0, s.bG)([o.A], () => o.A.getGuild(e), [e]),
        g = (0, W.mN)(f),
        A = f?.guildSpaceSettings?.publish_status !== y.B.PUBLISHED,
        m = n.useCallback(() => C(e, { publish_status: y.B.PUBLISHED }), [e]),
        [S, p] = (0, s.yK)([G], () => [G.getDraft(e), G.getSaveStatus(e)], [e]),
        D = g && null != S,
        T = D ? S.widgets : a?.widgets;
    n.useEffect(() => {
        g || null == S || "saving" === p || b(e);
    }, [g, S, p, e]);
    let x = n.useMemo(
            () =>
                (T ?? [])
                    .filter((t) => {
                        let { requires_hydration: e } = t;
                        return e;
                    })
                    .map((t) => {
                        let { id: e } = t;
                        return e;
                    }),
            [T],
        ),
        v = (0, s.yK)([F.A], () => F.A.getWidgetIdsToHydrate(e, x), [e, x]),
        L = n.useRef(null);
    return (n.useEffect(() => {
        if (L.current !== e && null != a) {
            (L.current = e), H(e, x, !0);
            return;
        }
        H(e, v);
    }, [e, a, x, v]),
    null == a || null == T)
        ? (0, l.jsx)("div", {
              className: tW.MY,
              children: (0, l.jsx)("div", {
                  className: tW.F,
                  children:
                      "error" !== _ || E
                          ? (0, l.jsx)(u.y, {
                                type: u.y.Type.SPINNING_CIRCLE,
                                "aria-label": ts.intl.string(ts.t.ZTNur7),
                            })
                          : (0, l.jsx)(d.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: ts.intl.string(ts.t.F8FvUy),
                            }),
              }),
          })
        : (0, l.jsxs)("div", {
              className: tW.MY,
              children: [
                  (0, l.jsx)(c.Gt, {
                      className: tW.XG,
                      children: (0, l.jsxs)("div", {
                          className: r()(tW.Qs, { [tW.Dy]: D }),
                          children: [
                              g && A ? (0, l.jsx)(M.A, { onPublish: m }) : null,
                              (0, l.jsx)(tH, {
                                  guildId: e,
                                  header: D ? S.header : a.header,
                                  isEditing: D,
                                  canEdit: g,
                                  isSaving: "saving" === p,
                              }),
                              D
                                  ? (0, l.jsx)(tT, { guildId: e, widgets: T })
                                  : (0, l.jsx)(tx.A, { guildId: e, widgets: T }),
                          ],
                      }),
                  }),
                  (0, l.jsx)(t_, { guildId: e, isEditing: D }),
              ],
          });
}
