(n.r(t), n.d(t, { default: () => e4 }));
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    u = n(17928),
    s = n(834730),
    d = n(289873),
    c = n(689175),
    o = n(250527),
    f = n(868652),
    g = n(645619),
    m = n(71393),
    h = n(562708),
    E = n(636537),
    p = n(228366),
    _ = n(499785),
    x = n(716357);
function A(e) {
    return !(e instanceof E.oh) || e.status < 400 || e.status >= 500 || 429 === e.status;
}
var C = n(652215);
let I = 0;
async function v(e) {
    let t = I++;
    p.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: e, requestId: t });
    try {
        let { body: n } = await _.A.get({
            url: C.Rsh.GUILD_SPACE(e),
            trackedActionData: { event: h.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        p.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: e, requestId: t, space: n });
    } catch (n) {
        p.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: e, requestId: t, retryable: A(n) });
    }
}
async function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = x.A.getFetchStatus(e),
        l = t && "error" === n && !x.A.isInBackoff(e);
    ("idle" === n || l) && (await v(e));
}
async function S(e) {
    await v(e);
}
async function b(e, t) {
    let { body: n } = await E.Bo.patch({ url: C.Rsh.GUILD_SPACE_SETTINGS(e), body: t, rejectWithError: !0 });
    return n;
}
async function D(e) {
    p.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: e });
    try {
        let { body: t } = await E.Bo.get({ url: C.Rsh.GUILD_SPACE_WIDGETS_CATALOG(e), rejectWithError: !0 });
        p.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: e, widgets: t.widgets });
    } catch {
        p.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: e });
    }
}
var j = n(960960),
    T = n(754674);
let G = {};
function w(e) {
    let t = G[e];
    return t?.saveStatus === "saving" ? void 0 : t;
}
class R extends u.Ay.Store {
    static displayName = "GuildSpaceEditorStore";
    getDraft(e) {
        return G[e]?.draft;
    }
    isEditing(e) {
        return null != G[e];
    }
    getSaveStatus(e) {
        return G[e]?.saveStatus ?? "idle";
    }
    getSaveErrorMessage(e) {
        return G[e]?.saveErrorMessage;
    }
}
let L = new R(p.h, {
    GUILD_SPACE_EDIT_START: function (e) {
        let { guildId: t, space: n } = e;
        G[t] = { draft: { header: n.header, widgets: (0, T.W$)(n.widgets) }, saveStatus: "idle" };
    },
    GUILD_SPACE_EDIT_ADD_WIDGET: function (e) {
        let { guildId: t, widget: n, insertionTarget: l } = e,
            r = w(t);
        if (null == r) return !1;
        r.draft = { ...r.draft, widgets: (0, T.QD)(r.draft.widgets, n, l) };
    },
    GUILD_SPACE_EDIT_MOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: n, targetColumn: l, targetIndex: r } = e,
            i = w(t);
        if (null == i) return !1;
        let a = (0, T.Gm)(i.draft.widgets, n, l, r);
        if (null == a) return !1;
        i.draft = { ...i.draft, widgets: a };
    },
    GUILD_SPACE_EDIT_REMOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: n } = e,
            l = w(t);
        if (null == l) return !1;
        let r = l.draft.widgets.filter((e) => {
            let { id: t } = e;
            return t !== n;
        });
        if (r.length === l.draft.widgets.length) return !1;
        l.draft = { ...l.draft, widgets: (0, T.W$)(r) };
    },
    GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG: function (e) {
        let { guildId: t, widgetId: n, config: l } = e,
            r = w(t);
        if (null == r) return !1;
        let i = r.draft.widgets.map((e) => (e.id === n ? { ...e, config: l } : e));
        r.draft = { ...r.draft, widgets: i };
    },
    GUILD_SPACE_EDIT_UPDATE_HEADER: function (e) {
        let { guildId: t, customBanner: n } = e,
            l = w(t);
        if (null == l) return !1;
        l.draft = { ...l.draft, header: { ...l.draft.header, custom_banner: n } };
    },
    GUILD_SPACE_EDIT_SAVE_START: function (e) {
        let { guildId: t, requestId: n } = e,
            l = G[t];
        if (null == l) return !1;
        ((l.saveStatus = "saving"), (l.activeSaveRequestId = n), delete l.saveErrorMessage);
    },
    GUILD_SPACE_EDIT_SAVE_FAILURE: function (e) {
        let { guildId: t, requestId: n, errorMessage: l } = e,
            r = G[t];
        if (r?.activeSaveRequestId !== n) return !1;
        (delete r.activeSaveRequestId, (r.saveStatus = "error"), (r.saveErrorMessage = l));
    },
    GUILD_SPACE_EDIT_CANCEL: function (e) {
        let { guildId: t } = e;
        if (null == G[t]) return !1;
        delete G[t];
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t } = e;
        if (null == G[t]) return !1;
        delete G[t];
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: n },
        } = e;
        if (n || null == G[t]) return !1;
        delete G[t];
    },
    LOGOUT: function () {
        G = {};
    },
});
var N = n(913122),
    P = n(593673);
let U = "draft:",
    k = 0,
    M = 0;
function B(e) {
    p.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: e });
}
function O(e, t, n, l) {
    p.h.dispatch({ type: "GUILD_SPACE_EDIT_MOVE_WIDGET", guildId: e, widgetId: t, targetColumn: n, targetIndex: l });
}
function F(e, t) {
    p.h.dispatch({ type: "GUILD_SPACE_EDIT_REMOVE_WIDGET", guildId: e, widgetId: t });
}
function H(e, t) {
    p.h.dispatch({ type: "GUILD_SPACE_EDIT_UPDATE_HEADER", guildId: e, customBanner: t });
}
async function W(e) {
    let t = L.getDraft(e);
    if (null == t || "saving" === L.getSaveStatus(e)) return;
    let n = {};
    void 0 !== t.header.custom_banner && (n.custom_banner = t.header.custom_banner);
    let l = {
            header: n,
            widgets: t.widgets.map((e) => {
                let { id: t, type: n, position: l, config: r } = e,
                    i = {
                        type: n,
                        position: l,
                        config: (function (e) {
                            if (e.type === P.a.IMAGE_TEXT) {
                                let t = { type: e.type, text: e.text, title: e.title };
                                return (void 0 !== e.image && (t.image = e.image), t);
                            }
                            return e;
                        })(r),
                    };
                return (t.startsWith(U) || (i.id = t), i);
            }),
        },
        r = M++;
    p.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_START", guildId: e, requestId: r });
    try {
        let { body: t } = await E.Bo.put({ url: C.Rsh.GUILD_SPACE(e), body: l, rejectWithError: !0 });
        p.h.dispatch({ type: "GUILD_SPACE_UPDATE_SUCCESS", guildId: e, space: t });
    } catch (i) {
        let n = (function (e, t) {
                if (e instanceof E.oh)
                    for (let [n, l] of Object.entries(
                        new N.LG({ status: e.status, body: e.body }).getAllFieldErrors(),
                    )) {
                        let [e, r] = n.split(".");
                        if ("widgets" !== e) continue;
                        let i = Number(r),
                            a = Number.isInteger(i) ? t[i] : void 0,
                            u = l[0]?.message;
                        if (null != a && null != u) return { type: a.type, message: u };
                    }
            })(i, t.widgets),
            l = n?.message;
        if (null != n) {
            let t = j.A.getWidget(e, n.type)?.name;
            null != t && (l = `${t}: ${n.message}`);
        }
        p.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_FAILURE", guildId: e, requestId: r, errorMessage: l });
    }
}
var $ = n(363957);
let K = 0;
async function q(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    n && p.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let l = $.A.getWidgetIdsToHydrate(e, t);
    if (0 === l.length) return;
    let r = K++;
    p.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: r, widgetIds: l });
    try {
        let { body: t } = await E.Bo.get({
            url: C.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: l },
            rejectWithError: !0,
        });
        p.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: r, widgets: t.widgets });
    } catch (t) {
        p.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: r, retryable: A(t) });
    }
}
var z = n(470452),
    V = n(344351),
    Y = n(795816),
    X = n(933958),
    J = n(44167),
    Q = n(872188),
    Z = n(868285),
    ee = n(36525),
    et = n(871682),
    en = n(331322),
    el = n(821609),
    er = n(499373),
    ei = n(866665),
    ea = n(189213),
    eu = n(939249),
    es = n(104510),
    ed = n(661531),
    ec = n(245604),
    eo = n(192308),
    ef = n(775602),
    eg = n(61567),
    em = n(375708),
    eh = n(517228);
function eE(e) {
    let { widget: t, onClick: n } = e,
        r = (0, u.bG)([ef.Ay], () => ef.Ay.useReducedMotion),
        { catalog_image_static_url: i, catalog_image_animated_url: a } = t.assets,
        d = (r ? null : a) ?? i,
        c = t.boost_price;
    return (0, l.jsxs)(eu.D, {
        className: eh.HL,
        onClick: n,
        children: [
            (0, l.jsxs)("div", {
                className: eh.b3,
                children: [
                    null != d && (0, l.jsx)("img", { className: eh.YI, src: d, alt: "" }),
                    t.locked &&
                        (0, l.jsx)("div", {
                            className: eh.AA,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(es._, {
                                size: "sm",
                                color: ed.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                            }),
                        }),
                    (0, l.jsxs)("div", {
                        className: eh.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("div", { className: eh.Ti, children: (0, l.jsx)("div", { className: eh.dK }) }),
                            (0, l.jsxs)(en.B, {
                                className: eh.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, l.jsx)(ec.U, {}),
                                    (0, l.jsx)(s.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: em.intl.string(eg.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(en.B, {
                gap: 4,
                children: [
                    (0, l.jsx)(s.E, { variant: "text-sm/semibold", color: "text-default", children: t.name }),
                    null != c && c > 0
                        ? (0, l.jsxs)(en.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, l.jsx)(es._, { size: "sm", color: ed.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(s.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: em.intl.format(eg.default["8wD0Un"], { boostPrice: c }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)(s.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: em.intl.string(eg.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function ep(e) {
    let { guildId: t, insertionTarget: n, ...i } = e,
        a = (0, u.yK)(
            [j.A, L],
            () => {
                let e = L.getDraft(t)?.widgets ?? [];
                var n = j.A.getWidgets(t) ?? [];
                let l = new Map();
                for (let t of e) l.set(t.type, (l.get(t.type) ?? 0) + 1);
                return n.filter((e) => (l.get(e.type) ?? 0) < e.max_instances);
            },
            [t],
        );
    return (
        r.useEffect(() => {
            D(t);
        }, [t]),
        (0, l.jsx)(ea.Modal, {
            title: em.intl.string(eg.default.L8Xfoo),
            subtitle: em.intl.string(eg.default["N8nJ+T"]),
            actions: [],
            ...i,
            children: (0, l.jsx)("div", {
                className: eh.Vg,
                children: a.map((e) =>
                    (0, l.jsx)(
                        eE,
                        {
                            widget: e,
                            onClick: () => {
                                var l, r, a;
                                ((l = e.type),
                                    (r = e.name),
                                    (a = e.locked),
                                    p.h.dispatch({
                                        type: "GUILD_SPACE_EDIT_ADD_WIDGET",
                                        guildId: t,
                                        widget: (function (e, t, n) {
                                            let l = {
                                                id: `${U}${k++}`,
                                                position: { column: 0, order: 0 },
                                                requires_hydration: !1,
                                                default_title: t,
                                                locked: n,
                                            };
                                            switch (e) {
                                                case P.a.IMAGE_TEXT:
                                                    return {
                                                        ...l,
                                                        type: e,
                                                        config: { type: e, title: null, image_hash: null, text: null },
                                                    };
                                                case P.a.LEADERBOARD:
                                                case P.a.WHITEBOARD:
                                                case P.a.POPULAR_MUSIC:
                                                case P.a.LIVE_ACTIVITY:
                                                    return { ...l, type: e, config: { type: e } };
                                            }
                                        })(l, r, a),
                                        insertionTarget: n,
                                    }),
                                    i.onClose());
                            },
                        },
                        e.type,
                    ),
                ),
            }),
        })
    );
}
function e_(e, t) {
    let n = (n) => (0, l.jsx)(ep, { guildId: e, insertionTarget: t, ...n });
    (0, eo.openModalLazy)(() => Promise.resolve(n), { modalKey: "guild-space-add-widget" });
}
var ex = n(992303);
function eA(e) {
    let { guildId: t, isEditing: n, isRemovalPending: i } = e,
        a = (0, u.bG)([L], () => L.getSaveStatus(t), [t]),
        d = (0, u.bG)([L], () => L.getDraft(t)?.widgets.length ?? 0, [t]),
        c = (0, u.bG)([L], () => L.getSaveErrorMessage(t), [t]),
        o = "saving" === a,
        f = o || i,
        g = c ?? em.intl.string(eg.default.HmFYc5),
        m = r.useCallback(() => {
            f || W(t);
        }, [t, f]),
        h = r.useCallback(() => {
            B(t);
        }, [t]);
    return (0, l.jsx)(Z.F, {
        component: "div",
        children:
            n &&
            (0, l.jsx)(et.F, {
                className: ex.K,
                children: (0, l.jsx)(ee.A, {
                    submitting: o,
                    disabled: f,
                    onSave: m,
                    onReset: f ? void 0 : h,
                    message: (0, l.jsxs)(en.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, l.jsx)(el.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: er.T,
                                text: em.intl.string(eg.default.L8Xfoo),
                                disabled: f,
                                onClick: () => e_(t),
                            }),
                            "error" === a
                                ? (0, l.jsx)(ei.m, {
                                      text: g,
                                      children: (0, l.jsx)(s.E, {
                                          variant: "text-sm/medium",
                                          color: "text-feedback-critical",
                                          role: "alert",
                                          lineClamp: 1,
                                          children: g,
                                      }),
                                  })
                                : (0, l.jsx)(s.E, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      children: em.intl.format(eg.default.hpAg80, { panelCount: d }),
                                  }),
                        ],
                    }),
                }),
            }),
    });
}
var eC = n(425763),
    eI = n(294918);
function ev(e) {
    let { height: t } = e;
    return (0, l.jsx)("div", { className: eI.qf, style: null == t ? void 0 : { height: t }, "aria-hidden": !0 });
}
var ey = n(686246);
let eS = "GUILD_SPACE_WIDGET",
    eb = "GUILD_SPACE_WIDGETS",
    eD = `${eS}_${eb}`;
var ej = n(225995),
    eT = n(333007);
let eG = "canvas, iframe, video";
function ew(e) {
    let { isKeyboardMode: t, targetColumn: n, getColumnElement: i } = e,
        { isDragging: a, item: u } = (0, ey.V)((e) => ({
            isDragging: e.isDragging() && e.getItemType() === eD,
            item: e.getItem(),
        })),
        s = (0, ej.u)(),
        d = r.useRef(null),
        c = r.useRef(null);
    return (r.useLayoutEffect(() => {
        let e = d.current;
        if (!a || t || null == e) return;
        let n = s.getMonitor();
        function l() {
            let t = n.getSourceClientOffset();
            if (null == t) {
                e.style.visibility = "hidden";
                return;
            }
            ((e.style.transform = `translate3d(${t.x}px, ${t.y}px, 0)`), (e.style.visibility = "visible"));
        }
        return (l(), n.subscribeToOffsetChange(l));
    }, [s, a, t]),
    r.useLayoutEffect(() => {
        let e = c.current,
            n = d.current,
            l = a ? u?.itemPreviewProps?.getSourceElement?.() : null;
        if (!a || t || null == e || null == n || null == l) return;
        let r = l.cloneNode(!0);
        n.style.width = `${l.getBoundingClientRect().width}px`;
        let i = l.querySelectorAll(eG);
        return (
            r.querySelectorAll(eG).forEach((e, t) => {
                let n = document.createElement("div"),
                    l = i.item(t),
                    r = l?.getBoundingClientRect(),
                    a = l?.parentElement?.getBoundingClientRect();
                ((n.className = e.className),
                    n.setAttribute("aria-hidden", "true"),
                    null != r &&
                        ((n.style.width = null != a && 0.5 > Math.abs(r.width - a.width) ? "100%" : `${r.width}px`),
                        (n.style.height = null != a && 0.5 > Math.abs(r.height - a.height) ? "100%" : `${r.height}px`)),
                    e.replaceWith(n));
            }),
            r.classList.remove(eI.cB, eI.Ni),
            r.removeAttribute("data-dnd-name"),
            r.querySelectorAll("[id]").forEach((e) => e.removeAttribute("id")),
            r.setAttribute("aria-hidden", "true"),
            (r.inert = !0),
            e.replaceChildren(r),
            () => e.replaceChildren()
        );
    }, [a, t, u]),
    r.useLayoutEffect(() => {
        let e = d.current;
        if (!a || t || null == e || null == n) return;
        let l = i(n);
        if (null == l) return;
        function r() {
            e.style.width = `${l.clientWidth}px`;
        }
        r();
        let u = new ResizeObserver(r);
        return (u.observe(l), () => u.disconnect());
    }, [i, a, t, n]),
    !a || t || null == u)
        ? null
        : (0, eT.createPortal)(
              (0, l.jsx)("div", {
                  ref: d,
                  className: eI.dk,
                  "aria-hidden": !0,
                  children: (0, l.jsx)("div", { ref: c, className: eI.w4 }),
              }),
              document.body,
          );
}
var eR = n(651300);
function eL(e) {
    let { column: t, children: n, isPointerDragging: i, onElement: a, onDragHover: u } = e,
        s = r.useRef(null),
        [, d] = (0, eR.H)({
            accept: eD,
            canDrop: () => i,
            hover: (e, n) => {
                if (!i) return;
                let l = n.getClientOffset();
                null != l && u(e.id, t, l);
            },
        }),
        c = r.useCallback(
            (e) => {
                ((s.current = e), a(t, e));
            },
            [t, a],
        );
    return (
        r.useLayoutEffect(
            () => (
                d(s),
                () => {
                    d(null);
                }
            ),
            [d],
        ),
        (0, l.jsx)("div", { ref: c, className: eI.fi, children: n })
    );
}
function eN(e) {
    let { column: t, dndName: n, onDropAtEnd: i } = e,
        u = r.useRef(null),
        [{ isOver: s }, d] = (0, eR.H)({
            accept: eD,
            drop: (e) => i(e.id, t),
            collect: (e) => ({ isOver: e.isOver({ shallow: !0 }) && e.canDrop() }),
        });
    return (
        r.useLayoutEffect(
            () => (
                d(u),
                () => {
                    d(null);
                }
            ),
            [d],
        ),
        (0, l.jsx)("div", { ref: u, className: a()(eI.wr, { [eI.SX]: s }), "data-dnd-name": n })
    );
}
var eP = n(451395),
    eU = n(42499),
    ek = n(539888);
function eM(e) {
    let {
            guildId: t,
            widget: n,
            column: i,
            positionNumber: s,
            columnWidgetCount: d,
            flatIndex: c,
            leftColumnCount: o,
            isKeyboardMode: f,
            onReorder: g,
            onDrop: m,
            onDragEnd: h,
            onSlotElement: E,
            isSaving: p,
            getDropLabel: _,
            onRemove: x,
            onCommitConfig: A,
            isSettling: C,
            onMotionEnd: I,
            isRemoving: v,
            isRemovalPending: y,
            onRemovalAnimationEnd: S,
        } = e,
        b = r.useRef(null),
        D = r.useRef(null),
        j = (0, u.bG)([$.A], () => (n.requires_hydration ? $.A.getHydration(t, n.id) : void 0), [
            t,
            n.id,
            n.requires_hydration,
        ]),
        T = (0, eU.K)(t, n),
        { isDragging: G, dragSourcePosition: w } = (0, eP.gY)({
            dragRef: b,
            dropRef: D,
            index: c,
            listType: eb,
            itemType: eS,
            itemId: n.id,
            itemPreviewProps: { getSourceElement: () => D.current },
            onDrop: (e) => m(e.id),
            onReorder: g,
            onEnd: (e, t) => h(e.id, t.didDrop()),
            canDrag: !p && !y,
        }),
        R = null == w ? null : w < o ? 0 : 1,
        L = null != R && R !== i,
        N = f && null != w && (L || w > c),
        P = f && null != w && !L && w < c,
        U = r.useCallback(
            (e) => {
                ((D.current = e), E(n.id, e));
            },
            [E, n.id],
        );
    return (0, l.jsx)("div", {
        ref: U,
        className: a()(eI.NI, { [eI.cB]: G, [eI.Ni]: C, [eI.kC]: v, [eI.ne]: N, [eI.O3]: P }),
        onAnimationEnd: (e) => {
            e.target === e.currentTarget && (v ? S(n.id) : C && I(n.id));
        },
        "data-dnd-name": _(i, s, d),
        children: (0, l.jsx)(ek.P, {
            guildId: t,
            widget: n,
            guildSpaceMode: "edit",
            hydration: j,
            lock: T,
            dragHandleRef: b,
            disabled: p,
            onRemove: () => x(n.id),
            onCommitConfig: A,
        }),
    });
}
var eB = n(865830);
function eO(e) {
    let { column: t, disabled: n, onInsert: r } = e,
        i = em.intl.formatToPlainString(1 === t ? eg.default.U0SqHk : eg.default["9Ctu9P"], { positionNumber: 1 });
    return (0, l.jsxs)(en.B, {
        className: eI.Y$,
        align: "center",
        justify: "center",
        gap: 12,
        children: [
            (0, l.jsx)(s.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: em.intl.string(eg.default["/OtM0k"]),
            }),
            (0, l.jsx)(el.$, {
                variant: "secondary",
                size: "sm",
                icon: er.T,
                text: em.intl.string(eg.default.L8Xfoo),
                "aria-label": i,
                disabled: n,
                onClick: () => r(t, 0),
            }),
        ],
    });
}
var eF = n(408278);
function eH(e) {
    let { column: t, index: n, disabled: r, placement: i, onInsert: u } = e,
        s = em.intl.formatToPlainString(1 === t ? eg.default["h9P9H+"] : eg.default.xboFyi, { positionNumber: n + 1 });
    return (0, l.jsxs)("div", {
        className: a()(eI.kZ, { [eI.j2]: "before" === i, [eI.AO]: "after" === i }),
        children: [
            (0, l.jsx)("div", { className: eI.CF, "aria-hidden": !0 }),
            (0, l.jsx)("div", {
                className: eI.QN,
                children: (0, l.jsx)(ei.m, {
                    text: s,
                    ariaHidden: !0,
                    children: (0, l.jsx)(eF.K, {
                        icon: er.T,
                        "aria-label": s,
                        size: "sm",
                        disabled: r,
                        onClick: () => u(t, n),
                    }),
                }),
            }),
        ],
    });
}
function eW(e, t, n) {
    return em.intl.formatToPlainString(1 === e ? eg.default.O9RvHQ : eg.default["+cSvS8"], {
        positionNumber: t,
        positionCount: n,
    });
}
function e$(e) {
    let { guildId: t, widgets: n, onRemovalPendingChange: i } = e,
        s = r.useMemo(() => (0, T.Rl)(n), [n]),
        d = r.useMemo(
            () =>
                s.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != eB.m[t];
                    }),
                ),
            [s],
        ),
        c = r.useMemo(() => [...d[0], ...d[1]], [d]),
        o = (0, ey.V)((e) =>
            e.isDragging() && e.getItemType() === eD
                ? { isDragging: !0, widgetId: e.getItem().id }
                : { isDragging: !1 },
        ),
        f = o.isDragging,
        g = o.isDragging ? o.widgetId : null,
        m = (0, eC.VU)(),
        h = (0, u.bG)([ef.Ay], () => ef.Ay.useReducedMotion),
        E = (0, u.bG)([L], () => "saving" === L.getSaveStatus(t), [t]),
        _ = f && !m,
        [x, A] = r.useState(null),
        C = x?.type === "removing" ? x.widgetId : null,
        I = null != C;
    r.useEffect(() => {
        h && x?.type === "settling" && A(null);
    }, [h, x]);
    let v = r.useCallback(
            (e, n, l) => {
                (O(t, e, n, l), h || A({ type: "settling", widgetId: e }));
            },
            [t, h],
        ),
        {
            effectiveDestination: y,
            draggedLocation: S,
            getColumnElement: b,
            gridDropSurfaceRef: D,
            handleColumnHover: j,
            handleDragEnd: G,
            handleDrop: w,
            placeholderHeight: R,
            registerColumnElement: N,
            registerSlotElement: P,
            snapshotSlotRects: U,
        } = (function (e) {
            let t,
                n,
                l,
                i,
                {
                    columns: a,
                    draftColumns: u,
                    draggedWidgetId: s,
                    isPointerDragging: d,
                    isKeyboardMode: c,
                    isSaving: o,
                    reduceMotion: f,
                    onMoveWidget: g,
                } = e,
                [m, h] = r.useState(null),
                E = r.useRef(null),
                p = r.useRef(null),
                _ = r.useRef(null),
                x = r.useRef(null),
                A = r.useRef([null, null]),
                C = r.useRef(new Map()),
                [I, v] = r.useState(null),
                { stopAutoScroll: y, updatePointerY: S } =
                    ((t = r.useRef(null)),
                    (n = r.useRef(null)),
                    (l = r.useCallback(() => {
                        (null != t.current && cancelAnimationFrame(t.current), (t.current = null), (n.current = null));
                    }, [])),
                    (i = r.useCallback(
                        (e) => {
                            ((n.current = e),
                                null == t.current &&
                                    (t.current = requestAnimationFrame(function e() {
                                        t.current = null;
                                        let l = n.current;
                                        if (null == l) return;
                                        let r = (function () {
                                                let e = x.current?.parentElement;
                                                for (; null != e;) {
                                                    let t = window.getComputedStyle(e).overflowY;
                                                    if ("auto" === t || "scroll" === t) return e;
                                                    e = e.parentElement;
                                                }
                                                return null;
                                            })(),
                                            i = r?.getBoundingClientRect(),
                                            a = i?.top ?? 0,
                                            u = i?.bottom ?? window.innerHeight,
                                            s = l - a < 96 ? -1 : +(u - l < 96);
                                        if (0 === s) return;
                                        let d = Math.ceil(24 * (1 - (s < 0 ? l - a : u - l) / 96));
                                        (null != r ? r.scrollBy({ top: s * d }) : window.scrollBy({ top: s * d }),
                                            (t.current = requestAnimationFrame(e)));
                                    })));
                        },
                        [x],
                    )),
                    r.useEffect(() => l, [l]),
                    { stopAutoScroll: l, updatePointerY: i }),
                { clearSlotMotion: b, snapshotSlotRects: D } = (function (e) {
                    let { columns: t, pendingDestination: n, reduceMotion: l, slotElementsRef: i } = e,
                        a = r.useRef(new Map()),
                        u = r.useRef(new Map()),
                        s = r.useCallback(() => {
                            (u.current.forEach((e) => e.cancel()), u.current.clear());
                        }, []),
                        d = r.useCallback(() => {
                            (a.current.clear(), s());
                        }, [s]),
                        c = r.useCallback(
                            (e) => {
                                l ||
                                    (a.current.clear(),
                                    i.current.forEach((t, n) => {
                                        n !== e && a.current.set(n, t.getBoundingClientRect());
                                    }));
                            },
                            [l, i],
                        );
                    return (
                        r.useLayoutEffect(() => {
                            if (l) {
                                (a.current.clear(), s());
                                return;
                            }
                            let e = a.current;
                            0 !== e.size &&
                                (i.current.forEach((t, n) => {
                                    (u.current.get(n)?.cancel(), u.current.delete(n));
                                    let l = e.get(n);
                                    if (null == l) return;
                                    let r = t.getBoundingClientRect(),
                                        i = l.left - r.left,
                                        a = l.top - r.top;
                                    if (1 > Math.abs(i) && 1 > Math.abs(a)) return;
                                    let s = t.animate(
                                        [{ transform: `translate(${i}px, ${a}px)` }, { transform: "translate(0, 0)" }],
                                        { duration: 140, easing: "cubic-bezier(0.2, 0, 0, 1)" },
                                    );
                                    function d() {
                                        u.current.get(n) === s && u.current.delete(n);
                                    }
                                    (u.current.set(n, s), (s.onfinish = d), (s.oncancel = d));
                                }),
                                e.clear());
                        }, [s, t, n, l, i]),
                        r.useEffect(() => s, [s]),
                        { clearSlotMotion: d, snapshotSlotRects: c }
                    );
                })({ columns: a, pendingDestination: m, reduceMotion: f, slotElementsRef: C }),
                j = (() => {
                    if (null == s) return null;
                    for (let [e, t] of a.entries()) {
                        let n = t.findIndex((e) => {
                            let { id: t } = e;
                            return t === s;
                        });
                        if (-1 !== n) return { column: e, index: n };
                    }
                    return null;
                })(),
                G = d && m?.widgetId === s && (null == j || m.column !== j.column || m.index !== j.index) ? m : null,
                w = r.useCallback((e, t) => {
                    A.current[e] = t;
                }, []),
                R = r.useCallback((e) => A.current[e] ?? null, []),
                L = r.useCallback((e, t) => {
                    null == t ? C.current.delete(e) : C.current.set(e, t);
                }, []),
                N = r.useCallback((e, t, n) => {
                    if (e === t) return !0;
                    let l = A.current[0]?.getBoundingClientRect(),
                        r = A.current[1]?.getBoundingClientRect();
                    if (null == l || null == r || !(l.right <= r.left)) return !0;
                    let i = (l.right + r.left) / 2;
                    return 1 === t ? n > i + 32 : n < i - 32;
                }, []),
                P = r.useCallback(() => {
                    _.current = null;
                    let e = p.current;
                    if (null == e) return;
                    let t = E.current;
                    (t?.widgetId !== e.widgetId || t.column !== e.column || t.index !== e.index) &&
                        (D(e.widgetId), (E.current = e), h(e));
                }, [D]),
                U = r.useCallback(
                    (e, t, n, l) => {
                        if (o) return;
                        S(l.y);
                        let r = E.current?.column ?? j?.column;
                        if (null == r || !N(r, t, l.x)) return;
                        let i =
                            a[t]?.filter((t) => {
                                let { id: n } = t;
                                return n !== e;
                            }).length ?? 0;
                        ((p.current = { widgetId: e, column: t, index: Math.max(0, Math.min(n, i)) }),
                            null == _.current && (_.current = requestAnimationFrame(P)));
                    },
                    [P, a, N, j?.column, o, S],
                ),
                k = r.useCallback(
                    (e, t, n) => {
                        let l =
                                a[t]?.filter((t) => {
                                    let { id: n } = t;
                                    return n !== e;
                                }) ?? [],
                            r = l.findIndex((e) => {
                                let { id: t } = e,
                                    l = C.current.get(t)?.getBoundingClientRect();
                                return null != l && n.y < l.top + l.height / 2;
                            });
                        U(e, t, -1 === r ? l.length : r, n);
                    },
                    [a, U],
                ),
                M = r.useCallback(
                    (e, t) => {
                        let n = 0,
                            l = 1 / 0;
                        (A.current.forEach((e, r) => {
                            if (null == e) return;
                            let i = e.getBoundingClientRect(),
                                a = t.x < i.left ? i.left - t.x : Math.max(0, t.x - i.right),
                                u = t.y < i.top ? i.top - t.y : Math.max(0, t.y - i.bottom),
                                s = a * a + u * u;
                            s < l && ((n = r), (l = s));
                        }),
                            k(e, n, t));
                    },
                    [k],
                ),
                [, B] = (0, eR.H)({
                    accept: eD,
                    canDrop: () => d,
                    drop: () => ({}),
                    hover: (e, t) => {
                        if (!d || !t.isOver({ shallow: !0 })) return;
                        let n = t.getClientOffset();
                        null != n && M(e.id, n);
                    },
                });
            r.useLayoutEffect(
                () => (
                    B(x),
                    () => {
                        B(null);
                    }
                ),
                [B],
            );
            let O = r.useCallback((e) => {
                    let t = p.current;
                    if (t?.widgetId === e) return t;
                    let n = E.current;
                    return n?.widgetId === e ? n : null;
                }, []),
                F = r.useCallback((e, t) => (0, T.O6)(u[t.column] ?? [], a[t.column] ?? [], t.index, e), [a, u]),
                H = r.useCallback(() => {
                    (null != _.current && cancelAnimationFrame(_.current),
                        (_.current = null),
                        (p.current = null),
                        (E.current = null),
                        h(null),
                        v(null),
                        b(),
                        y());
                }, [b, y]),
                W = r.useCallback(() => d, [d]),
                $ = r.useCallback(
                    (e, t) => {
                        let n = O(e);
                        (t &&
                            !c &&
                            null != n &&
                            (null == j || n.column !== j.column || n.index !== j.index) &&
                            g(e, n.column, F(e, n)),
                            H());
                    },
                    [H, j, O, F, c, g],
                );
            return (
                r.useLayoutEffect(() => {
                    if (!d || null == s) return;
                    let e = C.current.get(s);
                    if (null == e) return;
                    let t = e.getBoundingClientRect().height;
                    t > 0 && t !== I && v(t);
                }, [s, d, I]),
                r.useEffect(
                    () => () => {
                        null != _.current && cancelAnimationFrame(_.current);
                    },
                    [],
                ),
                {
                    effectiveDestination: G,
                    draggedLocation: j,
                    getColumnElement: R,
                    gridDropSurfaceRef: x,
                    handleColumnHover: k,
                    handleDragEnd: $,
                    handleDrop: W,
                    placeholderHeight: I,
                    registerColumnElement: w,
                    registerSlotElement: L,
                    snapshotSlotRects: D,
                }
            );
        })({
            columns: d,
            draftColumns: s,
            draggedWidgetId: g,
            isPointerDragging: _,
            isKeyboardMode: m,
            isSaving: E,
            reduceMotion: h,
            onMoveWidget: v,
        }),
        k = r.useCallback((e) => {
            A((t) => (t?.type === "settling" && t.widgetId === e ? null : t));
        }, []),
        M = r.useCallback(
            (e) => {
                (A(null == e ? null : { type: "removing", widgetId: e }), i(null != e));
            },
            [i],
        ),
        B = r.useCallback(
            (e) => {
                C === e && (U(e), F(t, e), M(null));
            },
            [t, C, M, U],
        ),
        H = r.useCallback(
            (e) => {
                if (!E && !I) {
                    if (h) {
                        (U(e), F(t, e));
                        return;
                    }
                    M(e);
                }
            },
            [t, I, E, h, M, U],
        );
    (r.useLayoutEffect(() => {
        h && null != C && B(C);
    }, [B, h, C]),
        r.useEffect(() => () => i(!1), [i]));
    let W = r.useCallback(
            (e, n) => {
                let l = c[e],
                    r = c[n];
                null != l && null != r && O(t, l.id, r.position.column, r.position.order);
            },
            [t, c],
        ),
        $ = r.useCallback(
            (e, n) => {
                O(t, e, n, s[n]?.length ?? 0);
            },
            [s, t],
        ),
        K = r.useCallback(
            (e, n) => {
                let l = (0, T.O6)(s[e] ?? [], d[e] ?? [], n);
                e_(t, { column: e, index: l });
            },
            [d, s, t],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ref: D,
                className: eI.Z7,
                children: (0, l.jsx)("div", {
                    className: a()(eI.Vg, { [eI.nl]: _ }),
                    children: d.map((e, n) =>
                        (0, l.jsxs)(
                            eL,
                            {
                                column: n,
                                isPointerDragging: _,
                                onElement: N,
                                onDragHover: j,
                                children: [
                                    (function (e, n) {
                                        if (0 === e.length && !f)
                                            return (0, l.jsx)(eO, { column: n, disabled: E || I, onInsert: K });
                                        let r =
                                            _ && null != g
                                                ? e.filter((e) => {
                                                      let { id: t } = e;
                                                      return t !== g;
                                                  })
                                                : e;
                                        return (function (e, t, n) {
                                            let l = e.map((e) => ({ type: "widget", widget: e }));
                                            if (n?.column !== t) return l;
                                            let r = e.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === n.widgetId;
                                                }),
                                                i = -1 !== r && n.index > r ? n.index + 1 : n.index;
                                            return (l.splice(Math.min(i, l.length), 0, { type: "placeholder" }), l);
                                        })(e, n, y).map((i) => {
                                            if ("placeholder" === i.type)
                                                return (0, l.jsx)(ev, { height: R }, "drag-placeholder");
                                            let { widget: a } = i,
                                                u = r.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                s =
                                                    -1 === u
                                                        ? e.findIndex((e) => {
                                                              let { id: t } = e;
                                                              return t === a.id;
                                                          })
                                                        : u,
                                                o = c.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                g = e.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                _ = !f && !E && !I;
                                            return (0, l.jsxs)(
                                                "div",
                                                {
                                                    className: eI.O4,
                                                    children: [
                                                        _ &&
                                                            (0, l.jsx)(eH, {
                                                                column: n,
                                                                index: g,
                                                                disabled: E,
                                                                placement: "before",
                                                                onInsert: K,
                                                            }),
                                                        (0, l.jsx)(eM, {
                                                            guildId: t,
                                                            widget: a,
                                                            column: n,
                                                            positionNumber: s + 1,
                                                            columnWidgetCount: r.length,
                                                            flatIndex: o,
                                                            leftColumnCount: d[0].length,
                                                            isKeyboardMode: m,
                                                            isSaving: E,
                                                            getDropLabel: eW,
                                                            onReorder: W,
                                                            onDrop: w,
                                                            onDragEnd: G,
                                                            onSlotElement: P,
                                                            isSettling:
                                                                x?.type === "settling" &&
                                                                x.widgetId === a.id &&
                                                                !m &&
                                                                !h,
                                                            onMotionEnd: k,
                                                            isRemoving: C === a.id,
                                                            isRemovalPending: I,
                                                            onRemovalAnimationEnd: B,
                                                            onRemove: H,
                                                            onCommitConfig: (e) => {
                                                                var n;
                                                                return (
                                                                    (n = a.id),
                                                                    void p.h.dispatch({
                                                                        type: "GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG",
                                                                        guildId: t,
                                                                        widgetId: n,
                                                                        config: e,
                                                                    })
                                                                );
                                                            },
                                                        }),
                                                        _ &&
                                                            g === e.length - 1 &&
                                                            (0, l.jsx)(eH, {
                                                                column: n,
                                                                index: e.length,
                                                                disabled: E,
                                                                placement: "after",
                                                                onInsert: K,
                                                            }),
                                                    ],
                                                },
                                                a.id,
                                            );
                                        });
                                    })(e, n),
                                    m &&
                                        f &&
                                        !E &&
                                        (0, l.jsx)(eN, {
                                            column: n,
                                            dndName: em.intl.string(1 === n ? eg.default.fWef0G : eg.default.KcdDyT),
                                            onDropAtEnd: $,
                                        }),
                                    _ && (0, l.jsx)("div", { className: eI.XP, "aria-hidden": !0 }),
                                ],
                            },
                            n,
                        ),
                    ),
                }),
            }),
            (0, l.jsx)(ew, { isKeyboardMode: m, targetColumn: y?.column ?? S?.column ?? null, getColumnElement: b }),
        ],
    });
}
var eK = n(529609),
    eq = n(241326),
    ez = n(297264),
    eV = n(22231),
    eY = n(654107),
    eX = n(548118),
    eJ = n(837011),
    eQ = n(649640),
    eZ = n(2553),
    e0 = n(405810),
    e1 = n(498642),
    e2 = n(486020),
    e8 = n(488428),
    e6 = n(776231),
    e5 = n(986898);
function e3(e) {
    let { guildId: t, header: n, canEdit: i, isEditing: a, isSaving: d } = e,
        c = (0, u.bG)([m.A], () => m.A.getGuild(t), [t]),
        o = (0, u.bG)([e1.A], () => e1.A.getOnlineCount(t), [t]),
        f = (0, u.bG)([e1.A], () => e1.A.getMemberCount(t), [t]),
        g = n.custom_banner,
        h = (0, u.bG)([eJ.A], () => eJ.A.getProfile(t), [t]),
        E = (0, eQ.b2)().hex(),
        _ = null == c ? null : e2.Ay.getGuildIconURL({ id: c.id, icon: c.icon, size: 64 }),
        A = (0, eY.Ay)(_, E),
        I = (0, eQ.n6)(h?.brandColorPrimary ?? A),
        v = r.useMemo(
            () =>
                null == c
                    ? null
                    : "string" == typeof g
                      ? g
                      : void 0 === g && null != n.custom_banner_hash
                        ? (function (e, t) {
                              let n = e2.QB ? "webp" : "jpg",
                                  { CDN_HOST: l, API_ENDPOINT: r } = window.GLOBAL_ENV,
                                  i = C.Rsh.GUILD_SPACE_BANNER(e, t, n),
                                  a = null != l ? `https://${l}${i}` : location.protocol + r + i,
                                  u = { size: (0, e6.kr)(1200 * (0, e6.mZ)()) };
                              return ("jpg" === n && (u.quality = "lossless"), (a += `?${e8.stringify(u)}`));
                          })(c.id, n.custom_banner_hash)
                        : e2.Ay.getGuildBannerURL({ id: c.id, banner: c.banner }),
            [c, g, n.custom_banner_hash],
        ),
        y = "string" == typeof g || (void 0 === g && null != n.custom_banner_hash);
    return null == c
        ? null
        : (0, l.jsxs)("div", {
              className: e5.wx,
              children: [
                  null != v
                      ? (0, l.jsx)("img", { className: e5.vK, src: v, alt: "" })
                      : (0, l.jsx)("div", { className: e5.vK, style: { background: I }, "aria-hidden": !0 }),
                  (0, l.jsx)("div", { className: e5.f5, "aria-hidden": !0 }),
                  a
                      ? (0, l.jsxs)("div", {
                            className: e5.j0,
                            children: [
                                (0, l.jsx)(e0.A, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: em.intl.string(eg.default["EN+0gW"]),
                                    onChange: (e) => H(t, e),
                                    maxFileSizeBytes: 0xa00000,
                                    onFileSizeError: () => (0, eZ.A)(0xa00000),
                                    disabled: d,
                                }),
                                y
                                    ? (0, l.jsx)(ei.m, {
                                          text: em.intl.string(eg.default["CunK+J"]),
                                          ariaHidden: !0,
                                          children: (0, l.jsx)(eF.K, {
                                              variant: "critical-secondary",
                                              icon: eq.TrashIcon,
                                              "aria-label": em.intl.string(eg.default["CunK+J"]),
                                              onClick: () => H(t, null),
                                              disabled: d,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  (0, l.jsxs)("div", {
                      className: e5.D_,
                      children: [
                          (0, l.jsx)(eX.Ay, {
                              className: e5.Kk,
                              guild: c,
                              size: eX.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsxs)("div", {
                              className: e5.pq,
                              children: [
                                  (0, l.jsx)(ez.D, {
                                      variant: "heading-xl/bold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: c.name,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: e5.M1,
                                      children: [
                                          null != o
                                              ? (0, l.jsxs)("div", {
                                                    className: e5.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: e5.RS, "aria-hidden": !0 }),
                                                        (0, l.jsx)(s.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: em.intl.format(eg.default.G08ClG, { count: o }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != f
                                              ? (0, l.jsxs)("div", {
                                                    className: e5.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: e5.kq, "aria-hidden": !0 }),
                                                        (0, l.jsx)(s.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: em.intl.format(eg.default["rp7bx+"], {
                                                                count: f,
                                                            }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: e5.dJ,
                                              children: [
                                                  (0, l.jsx)(es._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, l.jsx)(s.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: em.intl.format(eg.default.DwFqrb, {
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
                  i &&
                      !a &&
                      (0, l.jsx)(el.$, {
                          icon: eV.PencilIcon,
                          text: em.intl.string(eg.default.KcOpCm),
                          size: "sm",
                          onClick: () => {
                              let e;
                              null != (e = x.A.getSpace(t)) &&
                                  p.h.dispatch({ type: "GUILD_SPACE_EDIT_START", guildId: t, space: e });
                          },
                      }),
              ],
          });
}
var e9 = n(312152);
function e4(e) {
    let t,
        { guildId: n } = e,
        i = r.useRef(null),
        [h, E] = r.useState(!1),
        [p, _, A] = (0, u.yK)([x.A], () => [x.A.getSpace(n), x.A.getFetchStatus(n), x.A.isInBackoff(n)], [n]);
    (r.useEffect(() => {
        let e = i.current !== n;
        ((i.current = n), y(n, e));
    }, [_, n]),
        r.useEffect(() => {
            (0, o.L4)(n, !1, { respectBackoff: !0 });
        }, [n]),
        (t = (0, J.n)()),
        r.useEffect(
            () => () => {
                if (null == t) return;
                let e = X.Ay.getCurrentEmbeddedActivity();
                null != e &&
                    e.location.kind === V.T.GUILD_CHANNEL &&
                    e.location.channel_id === t &&
                    (0, Y._H)({ location: e.location, applicationId: e.applicationId, showFeedback: !1 });
            },
            [t],
        ));
    let C = (0, u.bG)([m.A], () => m.A.getGuild(n), [n]),
        I = (0, z.mN)(C),
        v = (0, u.bG)([j.A], () => j.A.getFetchStatus(n), [n]);
    r.useEffect(() => {
        I && "idle" === v && D(n);
    }, [I, v, n]);
    let T = C?.guildSpaceSettings?.publish_status !== P.B.PUBLISHED,
        G = r.useCallback(() => b(n, { publish_status: P.B.PUBLISHED }), [n]),
        [w, R] = (0, u.yK)([L], () => [L.getDraft(n), L.getSaveStatus(n)], [n]),
        N = I && null != w,
        U = N ? w.widgets : p?.widgets,
        k = r.useMemo(() => U?.some((e) => e.locked) ?? !1, [U]);
    r.useEffect(() => {
        I && k && ((0, f.AK)(n), (0, f.Xd)(n));
    }, [I, n, k]);
    let M = (0, u.bG)(
        [g.A, j.A],
        () =>
            p?.widgets.some((e) => {
                let t = j.A.getWidget(n, e.type)?.powerup_sku_id;
                return e.locked && null != t && g.A.getStateForGuild(n)?.unlockedPowerups[t] != null;
            }) ?? !1,
        [n, p],
    );
    (r.useEffect(() => {
        M && S(n);
    }, [n, M]),
        r.useEffect(() => {
            I || null == w || "saving" === R || B(n);
        }, [I, w, R, n]));
    let O = r.useMemo(
            () =>
                (U ?? [])
                    .filter((e) => {
                        let { requires_hydration: t } = e;
                        return t;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
            [U],
        ),
        F = (0, u.yK)([$.A], () => $.A.getWidgetIdsToHydrate(n, O), [n, O]),
        H = r.useRef(null);
    return (r.useEffect(() => {
        if (H.current !== n && null != p) {
            ((H.current = n), q(n, O, !0));
            return;
        }
        q(n, F);
    }, [n, p, O, F]),
    null == p || null == U)
        ? (0, l.jsx)("div", {
              className: e9.MY,
              children: (0, l.jsx)("div", {
                  className: e9.F,
                  children:
                      "error" !== _ || A
                          ? (0, l.jsx)(d.y, {
                                type: d.y.Type.SPINNING_CIRCLE,
                                "aria-label": em.intl.string(em.t.ZTNur7),
                            })
                          : (0, l.jsx)(s.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: em.intl.string(em.t.F8FvUy),
                            }),
              }),
          })
        : (0, l.jsxs)("div", {
              className: e9.MY,
              children: [
                  (0, l.jsx)(c.Gt, {
                      className: e9.XG,
                      children: (0, l.jsxs)("div", {
                          className: a()(e9.Qs, { [e9.Dy]: N }),
                          children: [
                              I && T ? (0, l.jsx)(Q.A, { onPublish: G }) : null,
                              (0, l.jsx)(e3, {
                                  guildId: n,
                                  header: N ? w.header : p.header,
                                  isEditing: N,
                                  canEdit: I,
                                  isSaving: "saving" === R,
                              }),
                              N
                                  ? (0, l.jsx)(e$, { guildId: n, widgets: U, onRemovalPendingChange: E }, n)
                                  : (0, l.jsx)(eK.A, { canEdit: I, guildId: n, widgets: U }),
                          ],
                      }),
                  }),
                  (0, l.jsx)(eA, { guildId: n, isEditing: N, isRemovalPending: h }),
              ],
          });
}
