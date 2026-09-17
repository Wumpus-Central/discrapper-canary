(n.r(t), n.d(t, { default: () => e3 }));
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
    _ = n(228366),
    p = n(499785),
    x = n(716357);
function A(e) {
    return !(e instanceof E.oh) || e.status < 400 || e.status >= 500 || 429 === e.status;
}
var C = n(652215);
let I = 0;
async function v(e) {
    let t = I++;
    _.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: e, requestId: t });
    try {
        let { body: n } = await p.A.get({
            url: C.Rsh.GUILD_SPACE(e),
            trackedActionData: { event: h.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        _.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: e, requestId: t, space: n });
    } catch (n) {
        _.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: e, requestId: t, retryable: A(n) });
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
    _.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: e });
    try {
        let { body: t } = await E.Bo.get({ url: C.Rsh.GUILD_SPACE_WIDGETS_CATALOG(e), rejectWithError: !0 });
        _.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: e, widgets: t.widgets });
    } catch {
        _.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: e });
    }
}
var j = n(960960),
    T = n(754674);
let G = {};
function w(e) {
    let t = G[e];
    return t?.saveStatus === "saving" ? void 0 : t;
}
class L extends u.Ay.Store {
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
let R = new L(_.h, {
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
    _.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: e });
}
function O(e, t, n, l) {
    _.h.dispatch({ type: "GUILD_SPACE_EDIT_MOVE_WIDGET", guildId: e, widgetId: t, targetColumn: n, targetIndex: l });
}
function F(e, t) {
    _.h.dispatch({ type: "GUILD_SPACE_EDIT_UPDATE_HEADER", guildId: e, customBanner: t });
}
async function H(e) {
    let t = R.getDraft(e);
    if (null == t || "saving" === R.getSaveStatus(e)) return;
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
    _.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_START", guildId: e, requestId: r });
    try {
        let { body: t } = await E.Bo.put({ url: C.Rsh.GUILD_SPACE(e), body: l, rejectWithError: !0 });
        _.h.dispatch({ type: "GUILD_SPACE_UPDATE_SUCCESS", guildId: e, space: t });
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
        _.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_FAILURE", guildId: e, requestId: r, errorMessage: l });
    }
}
var W = n(363957);
let $ = 0;
async function K(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    n && _.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let l = W.A.getWidgetIdsToHydrate(e, t);
    if (0 === l.length) return;
    let r = $++;
    _.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: r, widgetIds: l });
    try {
        let { body: t } = await E.Bo.get({
            url: C.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: l },
            rejectWithError: !0,
        });
        _.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: r, widgets: t.widgets });
    } catch (t) {
        _.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: r, retryable: A(t) });
    }
}
var q = n(470452),
    z = n(344351),
    V = n(795816),
    Y = n(933958),
    X = n(44167),
    J = n(872188),
    Q = n(868285),
    Z = n(36525),
    ee = n(871682),
    et = n(331322),
    en = n(821609),
    el = n(499373),
    er = n(866665),
    ei = n(189213),
    ea = n(939249),
    eu = n(104510),
    es = n(661531),
    ed = n(245604),
    ec = n(192308),
    eo = n(775602),
    ef = n(61567),
    eg = n(375708),
    em = n(517228);
function eh(e) {
    let { widget: t, onClick: n } = e,
        r = (0, u.bG)([eo.Ay], () => eo.Ay.useReducedMotion),
        { catalog_image_static_url: i, catalog_image_animated_url: a } = t.assets,
        d = (r ? null : a) ?? i,
        c = t.boost_price;
    return (0, l.jsxs)(ea.D, {
        className: em.HL,
        onClick: n,
        children: [
            (0, l.jsxs)("div", {
                className: em.b3,
                children: [
                    null != d && (0, l.jsx)("img", { className: em.YI, src: d, alt: "" }),
                    t.locked &&
                        (0, l.jsx)("div", {
                            className: em.AA,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(eu._, {
                                size: "sm",
                                color: es.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                            }),
                        }),
                    (0, l.jsxs)("div", {
                        className: em.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("div", { className: em.Ti, children: (0, l.jsx)("div", { className: em.dK }) }),
                            (0, l.jsxs)(et.B, {
                                className: em.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, l.jsx)(ed.U, {}),
                                    (0, l.jsx)(s.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: eg.intl.string(ef.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(et.B, {
                gap: 4,
                children: [
                    (0, l.jsx)(s.E, { variant: "text-sm/semibold", color: "text-default", children: t.name }),
                    null != c && c > 0
                        ? (0, l.jsxs)(et.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, l.jsx)(eu._, { size: "sm", color: es.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(s.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: eg.intl.format(ef.default["8wD0Un"], { boostPrice: c }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)(s.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: eg.intl.string(ef.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function eE(e) {
    let { guildId: t, insertionTarget: n, ...i } = e,
        a = (0, u.yK)(
            [j.A, R],
            () => {
                let e = R.getDraft(t)?.widgets ?? [];
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
        (0, l.jsx)(ei.Modal, {
            title: eg.intl.string(ef.default.L8Xfoo),
            subtitle: eg.intl.string(ef.default["N8nJ+T"]),
            actions: [],
            ...i,
            children: (0, l.jsx)("div", {
                className: em.Vg,
                children: a.map((e) =>
                    (0, l.jsx)(
                        eh,
                        {
                            widget: e,
                            onClick: () => {
                                var l, r, a;
                                ((l = e.type),
                                    (r = e.name),
                                    (a = e.locked),
                                    _.h.dispatch({
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
    let n = (n) => (0, l.jsx)(eE, { guildId: e, insertionTarget: t, ...n });
    (0, ec.openModalLazy)(() => Promise.resolve(n), { modalKey: "guild-space-add-widget" });
}
var ep = n(992303);
function ex(e) {
    let { guildId: t, isEditing: n } = e,
        i = (0, u.bG)([R], () => R.getSaveStatus(t), [t]),
        a = (0, u.bG)([R], () => R.getDraft(t)?.widgets.length ?? 0, [t]),
        d = (0, u.bG)([R], () => R.getSaveErrorMessage(t), [t]),
        c = "saving" === i,
        o = d ?? eg.intl.string(ef.default.HmFYc5),
        f = r.useCallback(() => {
            H(t);
        }, [t]),
        g = r.useCallback(() => {
            B(t);
        }, [t]);
    return (0, l.jsx)(Q.F, {
        component: "div",
        children:
            n &&
            (0, l.jsx)(ee.F, {
                className: ep.K,
                children: (0, l.jsx)(Z.A, {
                    submitting: c,
                    disabled: c,
                    onSave: f,
                    onReset: c ? void 0 : g,
                    message: (0, l.jsxs)(et.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, l.jsx)(en.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: el.T,
                                text: eg.intl.string(ef.default.L8Xfoo),
                                disabled: c,
                                onClick: () => e_(t),
                            }),
                            "error" === i
                                ? (0, l.jsx)(er.m, {
                                      text: o,
                                      children: (0, l.jsx)(s.E, {
                                          variant: "text-sm/medium",
                                          color: "text-feedback-critical",
                                          role: "alert",
                                          lineClamp: 1,
                                          children: o,
                                      }),
                                  })
                                : (0, l.jsx)(s.E, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      children: eg.intl.format(ef.default.hpAg80, { panelCount: a }),
                                  }),
                        ],
                    }),
                }),
            }),
    });
}
var eA = n(425763),
    eC = n(294918);
function eI(e) {
    let { height: t } = e;
    return (0, l.jsx)("div", { className: eC.qf, style: null == t ? void 0 : { height: t }, "aria-hidden": !0 });
}
var ev = n(686246);
let ey = "GUILD_SPACE_WIDGET",
    eS = "GUILD_SPACE_WIDGETS",
    eb = `${ey}_${eS}`;
var eD = n(225995),
    ej = n(333007);
let eT = "canvas, iframe, video";
function eG(e) {
    let { isKeyboardMode: t, targetColumn: n, getColumnElement: i } = e,
        { isDragging: a, item: u } = (0, ev.V)((e) => ({
            isDragging: e.isDragging() && e.getItemType() === eb,
            item: e.getItem(),
        })),
        s = (0, eD.u)(),
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
        let i = l.querySelectorAll(eT);
        return (
            r.querySelectorAll(eT).forEach((e, t) => {
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
            r.classList.remove(eC.cB, eC.Ni),
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
        : (0, ej.createPortal)(
              (0, l.jsx)("div", {
                  ref: d,
                  className: eC.dk,
                  "aria-hidden": !0,
                  children: (0, l.jsx)("div", { ref: c, className: eC.w4 }),
              }),
              document.body,
          );
}
var ew = n(651300);
function eL(e) {
    let { column: t, children: n, isPointerDragging: i, onElement: a, onDragHover: u } = e,
        s = r.useRef(null),
        [, d] = (0, ew.H)({
            accept: eb,
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
        (0, l.jsx)("div", { ref: c, className: eC.fi, children: n })
    );
}
function eR(e) {
    let { column: t, dndName: n, onDropAtEnd: i } = e,
        u = r.useRef(null),
        [{ isOver: s }, d] = (0, ew.H)({
            accept: eb,
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
        (0, l.jsx)("div", { ref: u, className: a()(eC.wr, { [eC.SX]: s }), "data-dnd-name": n })
    );
}
var eN = n(451395),
    eP = n(42499),
    eU = n(539888);
function ek(e) {
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
            isSaving: _,
            getDropLabel: p,
            onRemove: x,
            onCommitConfig: A,
            isSettling: C,
            onMotionEnd: I,
        } = e,
        v = r.useRef(null),
        y = r.useRef(null),
        S = (0, u.bG)([W.A], () => (n.requires_hydration ? W.A.getHydration(t, n.id) : void 0), [
            t,
            n.id,
            n.requires_hydration,
        ]),
        b = (0, eP.K)(t, n),
        { isDragging: D, dragSourcePosition: j } = (0, eN.gY)({
            dragRef: v,
            dropRef: y,
            index: c,
            listType: eS,
            itemType: ey,
            itemId: n.id,
            itemPreviewProps: { getSourceElement: () => y.current },
            onDrop: (e) => m(e.id),
            onReorder: g,
            onEnd: (e, t) => h(e.id, t.didDrop()),
            canDrag: !_,
        }),
        T = null == j ? null : j < o ? 0 : 1,
        G = null != T && T !== i,
        w = f && null != j && (G || j > c),
        L = f && null != j && !G && j < c,
        R = r.useCallback(
            (e) => {
                ((y.current = e), E(n.id, e));
            },
            [E, n.id],
        );
    return (0, l.jsx)("div", {
        ref: R,
        className: a()(eC.NI, { [eC.cB]: D, [eC.Ni]: C, [eC.ne]: w, [eC.O3]: L }),
        onAnimationEnd: (e) => {
            e.target === e.currentTarget && C && I(n.id);
        },
        "data-dnd-name": p(i, s, d),
        children: (0, l.jsx)(eU.P, {
            guildId: t,
            widget: n,
            guildSpaceMode: "edit",
            hydration: S,
            lock: b,
            dragHandleRef: v,
            disabled: _,
            onRemove: () => x(n.id),
            onCommitConfig: A,
        }),
    });
}
var eM = n(590632);
function eB(e) {
    let { column: t, disabled: n, onInsert: r } = e,
        i = eg.intl.formatToPlainString(1 === t ? ef.default.U0SqHk : ef.default["9Ctu9P"], { positionNumber: 1 });
    return (0, l.jsxs)(et.B, {
        className: eC.Y$,
        align: "center",
        justify: "center",
        gap: 12,
        children: [
            (0, l.jsx)(s.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: eg.intl.string(ef.default["/OtM0k"]),
            }),
            (0, l.jsx)(en.$, {
                variant: "secondary",
                size: "sm",
                icon: el.T,
                text: eg.intl.string(ef.default.L8Xfoo),
                "aria-label": i,
                disabled: n,
                onClick: () => r(t, 0),
            }),
        ],
    });
}
var eO = n(408278);
function eF(e) {
    let { column: t, index: n, disabled: r, placement: i, onInsert: u } = e,
        s = eg.intl.formatToPlainString(1 === t ? ef.default["h9P9H+"] : ef.default.xboFyi, { positionNumber: n + 1 });
    return (0, l.jsxs)("div", {
        className: a()(eC.kZ, { [eC.j2]: "before" === i, [eC.AO]: "after" === i }),
        children: [
            (0, l.jsx)("div", { className: eC.CF, "aria-hidden": !0 }),
            (0, l.jsx)("div", {
                className: eC.QN,
                children: (0, l.jsx)(er.m, {
                    text: s,
                    ariaHidden: !0,
                    children: (0, l.jsx)(eO.K, {
                        icon: el.T,
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
function eH(e, t, n) {
    return eg.intl.formatToPlainString(1 === e ? ef.default.O9RvHQ : ef.default["+cSvS8"], {
        positionNumber: t,
        positionCount: n,
    });
}
function eW(e) {
    let { guildId: t, widgets: n } = e,
        i = r.useMemo(() => (0, T.Rl)(n), [n]),
        s = r.useMemo(
            () =>
                i.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != eM.m[t];
                    }),
                ),
            [i],
        ),
        d = r.useMemo(() => [...s[0], ...s[1]], [s]),
        c = (0, ev.V)((e) =>
            e.isDragging() && e.getItemType() === eb
                ? { isDragging: !0, widgetId: e.getItem().id }
                : { isDragging: !1 },
        ),
        o = c.isDragging,
        f = c.isDragging ? c.widgetId : null,
        g = (0, eA.VU)(),
        m = (0, u.bG)([eo.Ay], () => eo.Ay.useReducedMotion),
        h = (0, u.bG)([R], () => "saving" === R.getSaveStatus(t), [t]),
        E = o && !g,
        [p, x] = r.useState(null);
    r.useEffect(() => {
        m && x(null);
    }, [m]);
    let A = r.useCallback(
            (e, n, l) => {
                (O(t, e, n, l), m || x(e));
            },
            [t, m],
        ),
        {
            effectiveDestination: C,
            draggedLocation: I,
            getColumnElement: v,
            gridDropSurfaceRef: y,
            handleColumnHover: S,
            handleDragEnd: b,
            handleDrop: D,
            placeholderHeight: j,
            registerColumnElement: G,
            registerSlotElement: w,
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
                _ = r.useRef(null),
                p = r.useRef(null),
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
                    let {
                            columns: t,
                            isPointerDragging: n,
                            pendingDestination: l,
                            reduceMotion: i,
                            slotElementsRef: a,
                        } = e,
                        u = r.useRef(new Map()),
                        s = r.useRef(new Map()),
                        d = r.useCallback(() => {
                            (s.current.forEach((e) => e.cancel()), s.current.clear());
                        }, []),
                        c = r.useCallback(() => {
                            u.current.clear();
                        }, []),
                        o = r.useCallback(
                            (e) => {
                                n &&
                                    !i &&
                                    (u.current.clear(),
                                    a.current.forEach((t, n) => {
                                        n !== e && u.current.set(n, t.getBoundingClientRect());
                                    }));
                            },
                            [n, i, a],
                        );
                    return (
                        r.useLayoutEffect(() => {
                            if (!n || i) {
                                (u.current.clear(), d());
                                return;
                            }
                            let e = u.current;
                            0 !== e.size &&
                                (a.current.forEach((t, n) => {
                                    (s.current.get(n)?.cancel(), s.current.delete(n));
                                    let l = e.get(n);
                                    if (null == l) return;
                                    let r = t.getBoundingClientRect(),
                                        i = l.left - r.left,
                                        a = l.top - r.top;
                                    if (1 > Math.abs(i) && 1 > Math.abs(a)) return;
                                    let u = t.animate(
                                        [{ transform: `translate(${i}px, ${a}px)` }, { transform: "translate(0, 0)" }],
                                        { duration: 140, easing: "cubic-bezier(0.2, 0, 0, 1)" },
                                    );
                                    function d() {
                                        s.current.get(n) === u && s.current.delete(n);
                                    }
                                    (s.current.set(n, u), (u.onfinish = d), (u.oncancel = d));
                                }),
                                e.clear());
                        }, [d, t, n, l, i, a]),
                        r.useEffect(() => d, [d]),
                        { clearSlotMotion: c, snapshotSlotRects: o }
                    );
                })({ columns: a, isPointerDragging: d, pendingDestination: m, reduceMotion: f, slotElementsRef: C }),
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
                L = r.useCallback((e) => A.current[e] ?? null, []),
                R = r.useCallback((e, t) => {
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
                    p.current = null;
                    let e = _.current;
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
                        ((_.current = { widgetId: e, column: t, index: Math.max(0, Math.min(n, i)) }),
                            null == p.current && (p.current = requestAnimationFrame(P)));
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
                [, B] = (0, ew.H)({
                    accept: eb,
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
                    let t = _.current;
                    if (t?.widgetId === e) return t;
                    let n = E.current;
                    return n?.widgetId === e ? n : null;
                }, []),
                F = r.useCallback((e, t) => (0, T.O6)(u[t.column] ?? [], a[t.column] ?? [], t.index, e), [a, u]),
                H = r.useCallback(() => {
                    (null != p.current && cancelAnimationFrame(p.current),
                        (p.current = null),
                        (_.current = null),
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
                        null != p.current && cancelAnimationFrame(p.current);
                    },
                    [],
                ),
                {
                    effectiveDestination: G,
                    draggedLocation: j,
                    getColumnElement: L,
                    gridDropSurfaceRef: x,
                    handleColumnHover: k,
                    handleDragEnd: $,
                    handleDrop: W,
                    placeholderHeight: I,
                    registerColumnElement: w,
                    registerSlotElement: R,
                }
            );
        })({
            columns: s,
            draftColumns: i,
            draggedWidgetId: f,
            isPointerDragging: E,
            isKeyboardMode: g,
            isSaving: h,
            reduceMotion: m,
            onMoveWidget: A,
        }),
        L = r.useCallback((e) => {
            x((t) => (t === e ? null : t));
        }, []),
        N = r.useCallback(
            (e, n) => {
                let l = d[e],
                    r = d[n];
                null != l && null != r && O(t, l.id, r.position.column, r.position.order);
            },
            [t, d],
        ),
        P = r.useCallback(
            (e, n) => {
                O(t, e, n, i[n]?.length ?? 0);
            },
            [i, t],
        ),
        U = r.useCallback(
            (e, n) => {
                let l = (0, T.O6)(i[e] ?? [], s[e] ?? [], n);
                e_(t, { column: e, index: l });
            },
            [s, i, t],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ref: y,
                className: eC.Z7,
                children: (0, l.jsx)("div", {
                    className: a()(eC.Vg, { [eC.nl]: E }),
                    children: s.map((e, n) =>
                        (0, l.jsxs)(
                            eL,
                            {
                                column: n,
                                isPointerDragging: E,
                                onElement: G,
                                onDragHover: S,
                                children: [
                                    (function (e, n) {
                                        if (0 === e.length && !o)
                                            return (0, l.jsx)(eB, { column: n, disabled: h, onInsert: U });
                                        let r =
                                            E && null != f
                                                ? e.filter((e) => {
                                                      let { id: t } = e;
                                                      return t !== f;
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
                                        })(e, n, C).map((i) => {
                                            if ("placeholder" === i.type)
                                                return (0, l.jsx)(eI, { height: j }, "drag-placeholder");
                                            let { widget: a } = i,
                                                u = r.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                c =
                                                    -1 === u
                                                        ? e.findIndex((e) => {
                                                              let { id: t } = e;
                                                              return t === a.id;
                                                          })
                                                        : u,
                                                f = d.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                E = e.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                x = !o && !h;
                                            return (0, l.jsxs)(
                                                "div",
                                                {
                                                    className: eC.O4,
                                                    children: [
                                                        x &&
                                                            (0, l.jsx)(eF, {
                                                                column: n,
                                                                index: E,
                                                                disabled: h,
                                                                placement: "before",
                                                                onInsert: U,
                                                            }),
                                                        (0, l.jsx)(ek, {
                                                            guildId: t,
                                                            widget: a,
                                                            column: n,
                                                            positionNumber: c + 1,
                                                            columnWidgetCount: r.length,
                                                            flatIndex: f,
                                                            leftColumnCount: s[0].length,
                                                            isKeyboardMode: g,
                                                            isSaving: h,
                                                            getDropLabel: eH,
                                                            onReorder: N,
                                                            onDrop: D,
                                                            onDragEnd: b,
                                                            onSlotElement: w,
                                                            isSettling: p === a.id && !g && !m,
                                                            onMotionEnd: L,
                                                            onRemove: (e) => {
                                                                _.h.dispatch({
                                                                    type: "GUILD_SPACE_EDIT_REMOVE_WIDGET",
                                                                    guildId: t,
                                                                    widgetId: e,
                                                                });
                                                            },
                                                            onCommitConfig: (e) => {
                                                                var n;
                                                                return (
                                                                    (n = a.id),
                                                                    void _.h.dispatch({
                                                                        type: "GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG",
                                                                        guildId: t,
                                                                        widgetId: n,
                                                                        config: e,
                                                                    })
                                                                );
                                                            },
                                                        }),
                                                        x &&
                                                            E === e.length - 1 &&
                                                            (0, l.jsx)(eF, {
                                                                column: n,
                                                                index: e.length,
                                                                disabled: h,
                                                                placement: "after",
                                                                onInsert: U,
                                                            }),
                                                    ],
                                                },
                                                a.id,
                                            );
                                        });
                                    })(e, n),
                                    g &&
                                        o &&
                                        !h &&
                                        (0, l.jsx)(eR, {
                                            column: n,
                                            dndName: eg.intl.string(1 === n ? ef.default.fWef0G : ef.default.KcdDyT),
                                            onDropAtEnd: P,
                                        }),
                                    E && (0, l.jsx)("div", { className: eC.XP, "aria-hidden": !0 }),
                                ],
                            },
                            n,
                        ),
                    ),
                }),
            }),
            (0, l.jsx)(eG, { isKeyboardMode: g, targetColumn: C?.column ?? I?.column ?? null, getColumnElement: v }),
        ],
    });
}
var e$ = n(529609),
    eK = n(241326),
    eq = n(297264),
    ez = n(22231),
    eV = n(654107),
    eY = n(548118),
    eX = n(837011),
    eJ = n(649640),
    eQ = n(2553),
    eZ = n(405810),
    e0 = n(498642),
    e1 = n(486020),
    e2 = n(488428),
    e8 = n(776231),
    e6 = n(986898);
function e5(e) {
    let { guildId: t, header: n, canEdit: i, isEditing: a, isSaving: d } = e,
        c = (0, u.bG)([m.A], () => m.A.getGuild(t), [t]),
        o = (0, u.bG)([e0.A], () => e0.A.getOnlineCount(t), [t]),
        f = (0, u.bG)([e0.A], () => e0.A.getMemberCount(t), [t]),
        g = n.custom_banner,
        h = (0, u.bG)([eX.A], () => eX.A.getProfile(t), [t]),
        E = (0, eJ.b2)().hex(),
        p = null == c ? null : e1.Ay.getGuildIconURL({ id: c.id, icon: c.icon, size: 64 }),
        A = (0, eV.Ay)(p, E),
        I = (0, eJ.n6)(h?.brandColorPrimary ?? A),
        v = r.useMemo(
            () =>
                null == c
                    ? null
                    : "string" == typeof g
                      ? g
                      : void 0 === g && null != n.custom_banner_hash
                        ? (function (e, t) {
                              let n = e1.QB ? "webp" : "jpg",
                                  { CDN_HOST: l, API_ENDPOINT: r } = window.GLOBAL_ENV,
                                  i = C.Rsh.GUILD_SPACE_BANNER(e, t, n),
                                  a = null != l ? `https://${l}${i}` : location.protocol + r + i,
                                  u = { size: (0, e8.kr)(1200 * (0, e8.mZ)()) };
                              return ("jpg" === n && (u.quality = "lossless"), (a += `?${e2.stringify(u)}`));
                          })(c.id, n.custom_banner_hash)
                        : e1.Ay.getGuildBannerURL({ id: c.id, banner: c.banner }),
            [c, g, n.custom_banner_hash],
        ),
        y = "string" == typeof g || (void 0 === g && null != n.custom_banner_hash);
    return null == c
        ? null
        : (0, l.jsxs)("div", {
              className: e6.wx,
              children: [
                  null != v
                      ? (0, l.jsx)("img", { className: e6.vK, src: v, alt: "" })
                      : (0, l.jsx)("div", { className: e6.vK, style: { background: I }, "aria-hidden": !0 }),
                  (0, l.jsx)("div", { className: e6.f5, "aria-hidden": !0 }),
                  a
                      ? (0, l.jsxs)("div", {
                            className: e6.j0,
                            children: [
                                (0, l.jsx)(eZ.A, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: eg.intl.string(ef.default["EN+0gW"]),
                                    onChange: (e) => F(t, e),
                                    maxFileSizeBytes: 0xa00000,
                                    onFileSizeError: () => (0, eQ.A)(0xa00000),
                                    disabled: d,
                                }),
                                y
                                    ? (0, l.jsx)(er.m, {
                                          text: eg.intl.string(ef.default["CunK+J"]),
                                          ariaHidden: !0,
                                          children: (0, l.jsx)(eO.K, {
                                              variant: "critical-secondary",
                                              icon: eK.TrashIcon,
                                              "aria-label": eg.intl.string(ef.default["CunK+J"]),
                                              onClick: () => F(t, null),
                                              disabled: d,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  (0, l.jsxs)("div", {
                      className: e6.D_,
                      children: [
                          (0, l.jsx)(eY.Ay, {
                              className: e6.Kk,
                              guild: c,
                              size: eY.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsxs)("div", {
                              className: e6.pq,
                              children: [
                                  (0, l.jsx)(eq.D, {
                                      variant: "heading-xl/bold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: c.name,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: e6.M1,
                                      children: [
                                          null != o
                                              ? (0, l.jsxs)("div", {
                                                    className: e6.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: e6.RS, "aria-hidden": !0 }),
                                                        (0, l.jsx)(s.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: eg.intl.format(ef.default.G08ClG, { count: o }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != f
                                              ? (0, l.jsxs)("div", {
                                                    className: e6.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: e6.kq, "aria-hidden": !0 }),
                                                        (0, l.jsx)(s.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: eg.intl.format(ef.default["rp7bx+"], {
                                                                count: f,
                                                            }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: e6.dJ,
                                              children: [
                                                  (0, l.jsx)(eu._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, l.jsx)(s.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: eg.intl.format(ef.default.DwFqrb, {
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
                      (0, l.jsx)(en.$, {
                          icon: ez.PencilIcon,
                          text: eg.intl.string(ef.default.KcOpCm),
                          size: "sm",
                          onClick: () => {
                              let e;
                              null != (e = x.A.getSpace(t)) &&
                                  _.h.dispatch({ type: "GUILD_SPACE_EDIT_START", guildId: t, space: e });
                          },
                      }),
              ],
          });
}
var e9 = n(312152);
function e3(e) {
    let t,
        { guildId: n } = e,
        i = r.useRef(null),
        [h, E, _] = (0, u.yK)([x.A], () => [x.A.getSpace(n), x.A.getFetchStatus(n), x.A.isInBackoff(n)], [n]);
    (r.useEffect(() => {
        let e = i.current !== n;
        ((i.current = n), y(n, e));
    }, [E, n]),
        r.useEffect(() => {
            (0, o.L4)(n, !1, { respectBackoff: !0 });
        }, [n]),
        (t = (0, X.n)()),
        r.useEffect(
            () => () => {
                if (null == t) return;
                let e = Y.Ay.getCurrentEmbeddedActivity();
                null != e &&
                    e.location.kind === z.T.GUILD_CHANNEL &&
                    e.location.channel_id === t &&
                    (0, V._H)({ location: e.location, applicationId: e.applicationId, showFeedback: !1 });
            },
            [t],
        ));
    let p = (0, u.bG)([m.A], () => m.A.getGuild(n), [n]),
        A = (0, q.mN)(p),
        C = (0, u.bG)([j.A], () => j.A.getFetchStatus(n), [n]);
    r.useEffect(() => {
        A && "idle" === C && D(n);
    }, [A, C, n]);
    let I = p?.guildSpaceSettings?.publish_status !== P.B.PUBLISHED,
        v = r.useCallback(() => b(n, { publish_status: P.B.PUBLISHED }), [n]),
        [T, G] = (0, u.yK)([R], () => [R.getDraft(n), R.getSaveStatus(n)], [n]),
        w = A && null != T,
        L = w ? T.widgets : h?.widgets,
        N = r.useMemo(() => L?.some((e) => e.locked) ?? !1, [L]);
    r.useEffect(() => {
        A && N && ((0, f.AK)(n), (0, f.Xd)(n));
    }, [A, n, N]);
    let U = (0, u.bG)(
        [g.A, j.A],
        () =>
            h?.widgets.some((e) => {
                let t = j.A.getWidget(n, e.type)?.powerup_sku_id;
                return e.locked && null != t && g.A.getStateForGuild(n)?.unlockedPowerups[t] != null;
            }) ?? !1,
        [n, h],
    );
    (r.useEffect(() => {
        U && S(n);
    }, [n, U]),
        r.useEffect(() => {
            A || null == T || "saving" === G || B(n);
        }, [A, T, G, n]));
    let k = r.useMemo(
            () =>
                (L ?? [])
                    .filter((e) => {
                        let { requires_hydration: t } = e;
                        return t;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
            [L],
        ),
        M = (0, u.yK)([W.A], () => W.A.getWidgetIdsToHydrate(n, k), [n, k]),
        O = r.useRef(null);
    return (r.useEffect(() => {
        if (O.current !== n && null != h) {
            ((O.current = n), K(n, k, !0));
            return;
        }
        K(n, M);
    }, [n, h, k, M]),
    null == h || null == L)
        ? (0, l.jsx)("div", {
              className: e9.MY,
              children: (0, l.jsx)("div", {
                  className: e9.F,
                  children:
                      "error" !== E || _
                          ? (0, l.jsx)(d.y, {
                                type: d.y.Type.SPINNING_CIRCLE,
                                "aria-label": eg.intl.string(eg.t.ZTNur7),
                            })
                          : (0, l.jsx)(s.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: eg.intl.string(eg.t.F8FvUy),
                            }),
              }),
          })
        : (0, l.jsxs)("div", {
              className: e9.MY,
              children: [
                  (0, l.jsx)(c.Gt, {
                      className: e9.XG,
                      children: (0, l.jsxs)("div", {
                          className: a()(e9.Qs, { [e9.Dy]: w }),
                          children: [
                              A && I ? (0, l.jsx)(J.A, { onPublish: v }) : null,
                              (0, l.jsx)(e5, {
                                  guildId: n,
                                  header: w ? T.header : h.header,
                                  isEditing: w,
                                  canEdit: A,
                                  isSaving: "saving" === G,
                              }),
                              w
                                  ? (0, l.jsx)(eW, { guildId: n, widgets: L })
                                  : (0, l.jsx)(e$.A, { canEdit: A, guildId: n, widgets: L }),
                          ],
                      }),
                  }),
                  (0, l.jsx)(ex, { guildId: n, isEditing: w }),
              ],
          });
}
