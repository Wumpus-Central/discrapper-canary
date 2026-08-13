i.r(t), i.d(t, { default: () => ek });
var l = i(477900),
    a = i(582128),
    n = i(503698),
    r = i.n(n),
    s = i(17928),
    d = i(834730),
    c = i(289873),
    u = i(689175),
    o = i(71393),
    f = i(562708),
    _ = i(636537),
    E = i(228366),
    h = i(499785),
    g = i(158390),
    S = i(927813);
let A = S.A.Millis.SECOND,
    I = S.A.Millis.MINUTE,
    C = {};
class m extends s.Ay.Store {
    static displayName = "GuildSpaceStore";
    getSpace(e) {
        return C[e]?.space;
    }
    getFetchStatus(e) {
        return C[e]?.fetchStatus ?? "idle";
    }
    isInBackoff(e) {
        return C[e]?.backoff?.pending === !0;
    }
}
let D = new m(E.h, {
    GUILD_SPACE_FETCH_START: function (e) {
        let t,
            { guildId: i, requestId: l } = e,
            a = (null == (t = C[i]) && ((t = { fetchStatus: "idle" }), (C[i] = t)), t);
        (a.fetchStatus = "loading"), (a.activeFetchRequestId = l);
    },
    GUILD_SPACE_FETCH_SUCCESS: function (e) {
        let { guildId: t, requestId: i, space: l } = e,
            a = C[t];
        if (a?.activeFetchRequestId !== i) return !1;
        delete a.activeFetchRequestId, (a.space = l), (a.fetchStatus = "success"), a.backoff?.succeed();
    },
    GUILD_SPACE_FETCH_FAILURE: function (e) {
        let { guildId: t, requestId: i, retryable: l } = e,
            a = C[t];
        if (a?.activeFetchRequestId !== i) return !1;
        delete a.activeFetchRequestId,
            (a.fetchStatus = "error"),
            l &&
                (null == a.backoff && (a.backoff = new g.A(A, I, !0)),
                a.backoff.pending ||
                    a.backoff.fail(() => E.h.dispatch({ type: "GUILD_SPACE_FETCH_BACKOFF_EXPIRED", guildId: t })));
    },
    GUILD_SPACE_FETCH_BACKOFF_EXPIRED: function (e) {
        let { guildId: t } = e,
            i = C[t];
        if (i?.fetchStatus !== "error") return !1;
        i.backoff?.cancel(), (i.fetchStatus = "idle");
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t, space: i } = e,
            l = C[t];
        if (null == l) return !1;
        delete l.activeFetchRequestId, (l.space = i), (l.fetchStatus = "success"), l.backoff?.succeed();
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: i },
        } = e;
        if (i) return !1;
        C[t]?.backoff?.cancel(), delete C[t];
    },
    LOGOUT: function () {
        Object.values(C).forEach((e) => e?.backoff?.cancel()), (C = {});
    },
});
function p(e) {
    return !(e instanceof _.oh) || e.status < 400 || e.status >= 500 || 429 === e.status;
}
var T = i(652215);
let G = 0;
async function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = D.getFetchStatus(e),
        l = t && "error" === i && !D.isInBackoff(e);
    if ("idle" !== i && !l) return;
    let a = G++;
    E.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: e, requestId: a });
    try {
        let { body: t } = await h.A.get({
            url: T.Rsh.GUILD_SPACE(e),
            trackedActionData: { event: f.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        E.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: e, requestId: a, space: t });
    } catch (t) {
        E.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: e, requestId: a, retryable: p(t) });
    }
}
async function x(e, t) {
    let { body: i } = await _.Bo.patch({ url: T.Rsh.GUILD_SPACE_SETTINGS(e), body: t, rejectWithError: !0 });
    return i;
}
var L = i(626584),
    y = i(754674);
let U = {};
function j(e) {
    let t = U[e];
    return t?.saveStatus === "saving" ? void 0 : t;
}
class R extends s.Ay.Store {
    static displayName = "GuildSpaceEditorStore";
    getDraft(e) {
        return U[e]?.draft;
    }
    isEditing(e) {
        return null != U[e];
    }
    getSaveStatus(e) {
        return U[e]?.saveStatus ?? "idle";
    }
}
let P = new R(E.h, {
    GUILD_SPACE_EDIT_START: function (e) {
        let { guildId: t, space: i } = e;
        U[t] = { draft: { header: i.header, widgets: (0, y.W$)(i.widgets) }, saveStatus: "idle" };
    },
    GUILD_SPACE_EDIT_ADD_WIDGET: function (e) {
        let { guildId: t, widget: i } = e,
            l = j(t);
        if (null == l) return !1;
        l.draft = { ...l.draft, widgets: (0, y.QD)(l.draft.widgets, i) };
    },
    GUILD_SPACE_EDIT_MOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: i, targetColumn: l, targetIndex: a } = e,
            n = j(t);
        if (null == n) return !1;
        let r = (0, y.Gm)(n.draft.widgets, i, l, a);
        if (null == r) return !1;
        n.draft = { ...n.draft, widgets: r };
    },
    GUILD_SPACE_EDIT_REMOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: i } = e,
            l = j(t);
        if (null == l) return !1;
        let a = l.draft.widgets.filter((e) => {
            let { id: t } = e;
            return t !== i;
        });
        if (a.length === l.draft.widgets.length) return !1;
        l.draft = { ...l.draft, widgets: (0, y.W$)(a) };
    },
    GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG: function (e) {
        let { guildId: t, widgetId: i, config: l } = e,
            a = j(t);
        if (null == a) return !1;
        let n = a.draft.widgets.map((e) => (e.id === i ? { ...e, config: l } : e));
        a.draft = { ...a.draft, widgets: n };
    },
    GUILD_SPACE_EDIT_SAVE_START: function (e) {
        let { guildId: t, requestId: i } = e,
            l = U[t];
        if (null == l) return !1;
        (l.saveStatus = "saving"), (l.activeSaveRequestId = i);
    },
    GUILD_SPACE_EDIT_SAVE_FAILURE: function (e) {
        let { guildId: t, requestId: i } = e,
            l = U[t];
        if (l?.activeSaveRequestId !== i) return !1;
        delete l.activeSaveRequestId, (l.saveStatus = "error");
    },
    GUILD_SPACE_EDIT_CANCEL: function (e) {
        let { guildId: t } = e;
        if (null == U[t]) return !1;
        delete U[t];
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t } = e;
        if (null == U[t]) return !1;
        delete U[t];
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: i },
        } = e;
        if (i || null == U[t]) return !1;
        delete U[t];
    },
    LOGOUT: function () {
        U = {};
    },
});
var b = i(593673);
let N = "draft:",
    w = 0,
    F = new L.A("GuildSpaceEditorActionCreators"),
    O = 0;
function k(e) {
    E.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: e });
}
function H(e, t, i, l) {
    E.h.dispatch({ type: "GUILD_SPACE_EDIT_MOVE_WIDGET", guildId: e, widgetId: t, targetColumn: i, targetIndex: l });
}
async function M(e) {
    let t = P.getDraft(e);
    if (null == t || "saving" === P.getSaveStatus(e)) return;
    let i = {
            header: t.header,
            widgets: t.widgets.map((e) => {
                let { id: t, type: i, position: l, config: a } = e,
                    n = {
                        type: i,
                        position: l,
                        config: (function (e) {
                            if (e.type === b.a.IMAGE_TEXT) {
                                let t = { type: e.type, text: e.text, title: e.title };
                                return void 0 !== e.image && (t.image = e.image), t;
                            }
                            return e;
                        })(a),
                    };
                return t.startsWith(N) || (n.id = t), n;
            }),
        },
        l = O++;
    E.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_START", guildId: e, requestId: l });
    try {
        let { body: t } = await _.Bo.put({ url: T.Rsh.GUILD_SPACE(e), body: i, rejectWithError: !0 });
        E.h.dispatch({ type: "GUILD_SPACE_UPDATE_SUCCESS", guildId: e, space: t });
    } catch (t) {
        F.error("Failed to save guild space", { guildId: e, error: t }),
            E.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_FAILURE", guildId: e, requestId: l });
    }
}
var W = i(363957);
let B = 0;
async function q(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    i && E.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let l = W.A.getWidgetIdsToHydrate(e, t);
    if (0 === l.length) return;
    let a = B++;
    E.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: a, widgetIds: l });
    try {
        let { body: t } = await _.Bo.get({
            url: T.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: l },
            rejectWithError: !0,
        });
        E.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: a, widgets: t.widgets });
    } catch (t) {
        E.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: a, retryable: p(t) });
    }
}
var K = i(470452),
    V = i(872188),
    Y = i(868285),
    X = i(36525),
    z = i(871682),
    $ = i(331322),
    J = i(821609),
    Q = i(499373),
    Z = i(189213),
    ee = i(939249),
    et = i(245604),
    ei = i(104510),
    el = i(661531),
    ea = i(192308),
    en = i(775602);
async function er(e) {
    E.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: e });
    try {
        let { body: t } = await _.Bo.get({ url: T.Rsh.GUILD_SPACE_WIDGETS_CATALOG(e), rejectWithError: !0 });
        E.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: e, widgets: t.widgets });
    } catch {
        E.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: e });
    }
}
let es = {};
function ed(e) {
    let t = es[e];
    return null == t && ((t = { fetchStatus: "idle" }), (es[e] = t)), t;
}
class ec extends s.Ay.Store {
    static displayName = "GuildSpaceCatalogStore";
    getWidgets(e) {
        return es[e]?.widgets;
    }
    getFetchStatus(e) {
        return es[e]?.fetchStatus ?? "idle";
    }
}
let eu = new ec(E.h, {
    GUILD_SPACE_CATALOG_FETCH_START: function (e) {
        let { guildId: t } = e;
        ed(t).fetchStatus = "loading";
    },
    GUILD_SPACE_CATALOG_FETCH_SUCCESS: function (e) {
        let { guildId: t, widgets: i } = e,
            l = ed(t);
        (l.widgets = i), (l.fetchStatus = "success");
    },
    GUILD_SPACE_CATALOG_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        ed(t).fetchStatus = "error";
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: i },
        } = e;
        if (i || null == es[t]) return !1;
        delete es[t];
    },
    LOGOUT: function () {
        es = {};
    },
});
var eo = i(983283),
    ef = i(375708),
    e_ = i(241181);
function eE(e) {
    let { widget: t, onClick: i } = e,
        a = (0, s.bG)([en.Ay], () => en.Ay.useReducedMotion),
        { catalog_image_static_url: n, catalog_image_animated_url: r } = t.assets,
        c = (a ? null : r) ?? n,
        u = t.boost_price;
    return (0, l.jsxs)(ee.D, {
        className: e_.HL,
        onClick: i,
        children: [
            (0, l.jsxs)("div", {
                className: e_.b3,
                children: [
                    null != c && (0, l.jsx)("img", { className: e_.YI, src: c, alt: "" }),
                    (0, l.jsxs)("div", {
                        className: e_.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("div", { className: e_.Ti, children: (0, l.jsx)("div", { className: e_.dK }) }),
                            (0, l.jsxs)($.B, {
                                className: e_.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, l.jsx)(et.U, {}),
                                    (0, l.jsx)(d.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: ef.intl.string(eo.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)($.B, {
                gap: 4,
                children: [
                    (0, l.jsx)(d.E, { variant: "text-sm/semibold", color: "text-default", children: t.name }),
                    null != u && u > 0
                        ? (0, l.jsxs)($.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, l.jsx)(ei._, { size: "sm", color: el.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(d.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: ef.intl.format(eo.default["8wD0Un"], { boostPrice: u }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)(d.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: ef.intl.string(eo.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function eh(e) {
    let { guildId: t, ...i } = e,
        n = (0, s.yK)([eu, P], () => {
            let e = P.getDraft(t)?.widgets ?? [];
            var i = eu.getWidgets(t) ?? [];
            let l = new Map();
            for (let t of e) l.set(t.type, (l.get(t.type) ?? 0) + 1);
            return i.filter((e) => (l.get(e.type) ?? 0) < e.max_instances);
        }, [t]);
    return (
        a.useEffect(() => {
            er(t);
        }, [t]),
        (0, l.jsx)(Z.Modal, {
            title: ef.intl.string(eo.default.L8Xfoo),
            subtitle: ef.intl.string(eo.default["N8nJ+T"]),
            actions: [],
            ...i,
            children: (0, l.jsx)("div", {
                className: e_.Vg,
                children: n.map((e) =>
                    (0, l.jsx)(
                        eE,
                        {
                            widget: e,
                            onClick: () => {
                                var l, a;
                                (l = e.type),
                                    (a = e.name),
                                    E.h.dispatch({
                                        type: "GUILD_SPACE_EDIT_ADD_WIDGET",
                                        guildId: t,
                                        widget: (function (e, t) {
                                            let i = {
                                                id: `${N}${w++}`,
                                                position: { column: y.FT, order: 0 },
                                                requires_hydration: !1,
                                                default_title: t,
                                            };
                                            switch (e) {
                                                case b.a.IMAGE_TEXT:
                                                    return {
                                                        ...i,
                                                        type: e,
                                                        config: { type: e, title: null, image_hash: null, text: null },
                                                    };
                                                case b.a.LEADERBOARD:
                                                case b.a.WHITEBOARD:
                                                case b.a.POPULAR_MUSIC:
                                                case b.a.LIVE_ACTIVITY:
                                                    return { ...i, type: e, config: { type: e } };
                                            }
                                        })(l, a),
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
var eg = i(466844);
function eS(e) {
    let { guildId: t, isEditing: i } = e,
        n = (0, s.bG)([P], () => P.getSaveStatus(t), [t]),
        r = (0, s.bG)([P], () => P.getDraft(t)?.widgets.length ?? 0, [t]),
        c = "saving" === n,
        u = a.useCallback(() => {
            M(t);
        }, [t]),
        o = a.useCallback(() => {
            k(t);
        }, [t]);
    return (0, l.jsx)(Y.F, {
        component: "div",
        children:
            i &&
            (0, l.jsx)(z.F, {
                className: eg.K,
                children: (0, l.jsx)(X.A, {
                    submitting: c,
                    disabled: c,
                    onSave: u,
                    onReset: c ? void 0 : o,
                    message: (0, l.jsxs)($.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, l.jsx)(J.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: Q.T,
                                text: ef.intl.string(eo.default.L8Xfoo),
                                disabled: c,
                                onClick: () => {
                                    let e;
                                    return (
                                        (e = (e) => (0, l.jsx)(eh, { guildId: t, ...e })),
                                        void (0, ea.openModalLazy)(() => Promise.resolve(e), {
                                            modalKey: "guild-space-add-widget",
                                        })
                                    );
                                },
                            }),
                            "error" === n
                                ? (0, l.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-critical",
                                      role: "alert",
                                      children: ef.intl.string(eo.default.HmFYc5),
                                  })
                                : (0, l.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      children: ef.intl.format(eo.default.hpAg80, { panelCount: r }),
                                  }),
                        ],
                    }),
                }),
            }),
    });
}
var eA = i(686246),
    eI = i(651300),
    eC = i(451395),
    em = i(317574),
    eD = i(487692),
    ep = i(84899);
let eT = "GUILD_SPACE_WIDGET",
    eG = "GUILD_SPACE_WIDGETS",
    ev = `${eT}_${eG}`;
function ex(e) {
    let {
            guildId: t,
            widget: i,
            column: n,
            positionNumber: d,
            columnWidgetCount: c,
            flatIndex: u,
            leftColumnCount: o,
            onReorder: f,
            isSaving: _,
        } = e,
        h = a.useRef(null),
        g = a.useRef(null),
        S = (0, s.bG)([W.A], () => (i.requires_hydration ? W.A.getHydration(t, i.id) : void 0), [
            t,
            i.id,
            i.requires_hydration,
        ]),
        { isDragging: A, dragSourcePosition: I } = (0, eC.gY)({
            dragRef: h,
            dropRef: g,
            index: u,
            listType: eG,
            itemType: eT,
            itemId: i.id,
            onReorder: f,
            canDrag: !_,
        }),
        C = null == I ? null : I < o ? y.FT : y.yM,
        m = null != C && C !== n;
    return (0, l.jsx)("div", {
        ref: g,
        className: r()(ep.NI, { [ep.cB]: A, [ep.ne]: null != I && (m || I > u), [ep.O3]: null != I && !m && I < u }),
        "data-dnd-name": ef.intl.formatToPlainString(n === y.yM ? eo.default.O9RvHQ : eo.default["+cSvS8"], {
            positionNumber: d,
            positionCount: c,
        }),
        children: (0, l.jsx)(em.P, {
            widget: i,
            guildSpaceMode: "edit",
            hydration: S,
            dragHandleRef: h,
            disabled: _,
            onRemove: () => {
                var e;
                return (
                    (e = i.id), void E.h.dispatch({ type: "GUILD_SPACE_EDIT_REMOVE_WIDGET", guildId: t, widgetId: e })
                );
            },
            onCommitConfig: (e) => {
                var l;
                return (
                    (l = i.id),
                    void E.h.dispatch({
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
function eL(e) {
    let { column: t, onDropAtEnd: i } = e,
        n = a.useRef(null),
        [{ isOver: s }, d] = (0, eI.H)({
            accept: ev,
            drop: (e) => i(e.id, t),
            collect: (e) => ({ isOver: e.isOver({ shallow: !0 }) && e.canDrop() }),
        });
    return (
        a.useLayoutEffect(
            () => (
                d(n),
                () => {
                    d(null);
                }
            ),
            [d],
        ),
        (0, l.jsx)("div", {
            ref: n,
            className: r()(ep.wr, { [ep.SX]: s }),
            "data-dnd-name": ef.intl.string(t === y.yM ? eo.default.fWef0G : eo.default.KcdDyT),
        })
    );
}
function ey(e) {
    let { guildId: t, widgets: i } = e,
        n = a.useMemo(() => (0, y.Rl)(i), [i]),
        r = a.useMemo(
            () =>
                n.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != eD.m[t];
                    }),
                ),
            [n],
        ),
        d = a.useMemo(() => [...r[y.FT], ...r[y.yM]], [r]),
        c = (0, eA.V)((e) => e.isDragging() && e.getItemType() === ev),
        u = (0, s.bG)([P], () => "saving" === P.getSaveStatus(t), [t]),
        o = a.useCallback(
            (e, i) => {
                let l = d[e],
                    a = d[i];
                null != l && null != a && H(t, l.id, a.position.column, a.position.order);
            },
            [t, d],
        ),
        f = a.useCallback(
            (e, i) => {
                H(t, e, i, n[i]?.length ?? 0);
            },
            [t, n],
        );
    return (0, l.jsx)("div", {
        className: ep.Vg,
        children: r.map((e, i) =>
            (0, l.jsxs)(
                "div",
                {
                    className: ep.fi,
                    children: [
                        e.map((a, n) =>
                            (0, l.jsx)(
                                ex,
                                {
                                    guildId: t,
                                    widget: a,
                                    column: i,
                                    positionNumber: n + 1,
                                    columnWidgetCount: e.length,
                                    flatIndex: i === y.yM ? r[y.FT].length + n : n,
                                    leftColumnCount: r[y.FT].length,
                                    onReorder: o,
                                    isSaving: u,
                                },
                                a.id,
                            ),
                        ),
                        c && !u && (0, l.jsx)(eL, { column: i, onDropAtEnd: f }),
                    ],
                },
                i,
            ),
        ),
    });
}
var eU = i(529609),
    ej = i(297264),
    eR = i(22231),
    eP = i(548118),
    eb = i(498642),
    eN = i(486020),
    ew = i(555063);
function eF(e) {
    let { guildId: t, header: i, canEdit: n, isEditing: r } = e,
        c = (0, s.bG)([o.A], () => o.A.getGuild(t), [t]),
        u = (0, s.bG)([eb.A], () => eb.A.getOnlineCount(t), [t]),
        f = (0, s.bG)([eb.A], () => eb.A.getMemberCount(t), [t]),
        _ = i.custom_banner_hash ?? c?.banner,
        h = a.useMemo(() => (null == c ? null : eN.Ay.getGuildBannerURL({ id: c.id, banner: _ })), [c, _]);
    return null == c
        ? null
        : (0, l.jsxs)("div", {
              className: ew.wx,
              children: [
                  null != h ? (0, l.jsx)("img", { className: ew.vK, src: h, alt: "" }) : null,
                  (0, l.jsx)("div", { className: ew.f5, "aria-hidden": !0 }),
                  (0, l.jsxs)("div", {
                      className: ew.D_,
                      children: [
                          (0, l.jsx)(eP.Ay, {
                              className: ew.Kk,
                              guild: c,
                              size: eP.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsxs)("div", {
                              className: ew.pq,
                              children: [
                                  (0, l.jsx)(ej.D, {
                                      variant: "heading-xl/bold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: c.name,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: ew.M1,
                                      children: [
                                          null != u
                                              ? (0, l.jsxs)("div", {
                                                    className: ew.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: ew.RS, "aria-hidden": !0 }),
                                                        (0, l.jsx)(d.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: ef.intl.format(eo.default.G08ClG, { count: u }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != f
                                              ? (0, l.jsxs)("div", {
                                                    className: ew.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: ew.kq, "aria-hidden": !0 }),
                                                        (0, l.jsx)(d.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: ef.intl.format(eo.default["rp7bx+"], {
                                                                count: f,
                                                            }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: ew.dJ,
                                              children: [
                                                  (0, l.jsx)(ei._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, l.jsx)(d.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: ef.intl.format(eo.default.DwFqrb, {
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
                  n &&
                      !r &&
                      (0, l.jsx)(J.$, {
                          icon: eR.R,
                          text: ef.intl.string(eo.default.KcOpCm),
                          onClick: () => {
                              let e;
                              null != (e = D.getSpace(t)) &&
                                  E.h.dispatch({ type: "GUILD_SPACE_EDIT_START", guildId: t, space: e });
                          },
                      }),
              ],
          });
}
var eO = i(278093);
function ek(e) {
    let { guildId: t } = e,
        i = a.useRef(null),
        [n, f, _] = (0, s.yK)([D], () => [D.getSpace(t), D.getFetchStatus(t), D.isInBackoff(t)], [t]);
    a.useEffect(() => {
        let e = i.current !== t;
        (i.current = t), v(t, e);
    }, [f, t]);
    let E = (0, s.bG)([o.A], () => o.A.getGuild(t), [t]),
        h = (0, K.mN)(E),
        g = E?.guildSpaceSettings?.publish_status !== b.B.PUBLISHED,
        S = a.useCallback(() => x(t, { publish_status: b.B.PUBLISHED }), [t]),
        [A, I] = (0, s.yK)([P], () => [P.getDraft(t), P.getSaveStatus(t)], [t]),
        C = h && null != A,
        m = C ? A.widgets : n?.widgets;
    a.useEffect(() => {
        h || null == A || "saving" === I || k(t);
    }, [h, A, I, t]);
    let p = a.useMemo(
            () =>
                (m ?? [])
                    .filter((e) => {
                        let { requires_hydration: t } = e;
                        return t;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
            [m],
        ),
        T = (0, s.yK)([W.A], () => W.A.getWidgetIdsToHydrate(t, p), [t, p]),
        G = a.useRef(null);
    return (a.useEffect(() => {
        if (G.current !== t && null != n) {
            (G.current = t), q(t, p, !0);
            return;
        }
        q(t, T);
    }, [t, n, p, T]),
    null == n || null == m)
        ? (0, l.jsx)("div", {
              className: eO.MY,
              children: (0, l.jsx)("div", {
                  className: eO.F,
                  children:
                      "error" !== f || _
                          ? (0, l.jsx)(c.y, {
                                type: c.y.Type.SPINNING_CIRCLE,
                                "aria-label": ef.intl.string(ef.t.ZTNur7),
                            })
                          : (0, l.jsx)(d.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: ef.intl.string(ef.t.F8FvUy),
                            }),
              }),
          })
        : (0, l.jsxs)("div", {
              className: eO.MY,
              children: [
                  (0, l.jsx)(u.Gt, {
                      className: eO.XG,
                      children: (0, l.jsxs)("div", {
                          className: r()(eO.Qs, { [eO.Dy]: C }),
                          children: [
                              h && g ? (0, l.jsx)(V.A, { onPublish: S }) : null,
                              (0, l.jsx)(eF, { guildId: t, header: C ? A.header : n.header, isEditing: C, canEdit: h }),
                              C
                                  ? (0, l.jsx)(ey, { guildId: t, widgets: m })
                                  : (0, l.jsx)(eU.A, { guildId: t, widgets: m }),
                          ],
                      }),
                  }),
                  (0, l.jsx)(eS, { guildId: t, isEditing: C }),
              ],
          });
}
