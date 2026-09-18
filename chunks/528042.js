(n.r(t), n.d(t, { default: () => e9 }));
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(17928),
    u = n(834730),
    d = n(289873),
    c = n(689175),
    o = n(250527),
    f = n(868652),
    g = n(645619),
    m = n(71393),
    h = n(562708),
    E = n(636537),
    p = n(228366),
    A = n(499785),
    x = n(716357);
function _(e) {
    return !(e instanceof E.oh) || e.status < 400 || e.status >= 500 || 429 === e.status;
}
var C = n(652215);
let v = 0;
async function I(e) {
    let t = v++;
    p.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: e, requestId: t });
    try {
        let { body: n } = await A.A.get({
            url: C.Rsh.GUILD_SPACE(e),
            trackedActionData: { event: h.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        p.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: e, requestId: t, space: n });
    } catch (n) {
        p.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: e, requestId: t, retryable: _(n) });
    }
}
async function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = x.A.getFetchStatus(e),
        l = t && "error" === n && !x.A.isInBackoff(e);
    ("idle" === n || l) && (await I(e));
}
async function S(e) {
    await I(e);
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
    G = n(202762),
    T = n(88592),
    w = n(363957);
let L = 0;
async function R(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    n && p.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let l = w.A.getWidgetIdsToHydrate(e, t);
    if (0 === l.length) return;
    let r = L++;
    p.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: r, widgetIds: l });
    try {
        let { body: t } = await E.Bo.get({
            url: C.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: l },
            rejectWithError: !0,
        });
        p.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: r, widgets: t.widgets });
    } catch (t) {
        p.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: r, retryable: _(t) });
    }
}
var N = n(593673),
    P = n(470452),
    U = n(344351),
    k = n(795816),
    M = n(933958),
    O = n(44167),
    B = n(872188),
    F = n(868285),
    H = n(36525),
    W = n(871682),
    K = n(331322),
    z = n(821609),
    $ = n(499373),
    q = n(866665),
    V = n(189213),
    X = n(939249),
    Y = n(104510),
    J = n(661531),
    Q = n(245604),
    Z = n(192308),
    ee = n(775602),
    et = n(855823),
    en = n(61567),
    el = n(375708),
    er = n(517228);
function ei(e) {
    let { widget: t, onClick: n } = e,
        r = (0, s.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        { catalog_image_static_url: i, catalog_image_animated_url: a } = t.assets,
        d = (r ? null : a) ?? i,
        c = t.boost_price;
    return (0, l.jsxs)(X.D, {
        className: er.HL,
        onClick: n,
        children: [
            (0, l.jsxs)("div", {
                className: er.b3,
                children: [
                    null != d && (0, l.jsx)("img", { className: er.YI, src: d, alt: "" }),
                    t.locked &&
                        (0, l.jsx)("div", {
                            className: er.AA,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(Y._, { size: "sm", color: J.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                        }),
                    (0, l.jsxs)("div", {
                        className: er.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("div", { className: er.Ti, children: (0, l.jsx)("div", { className: er.dK }) }),
                            (0, l.jsxs)(K.B, {
                                className: er.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, l.jsx)(Q.U, {}),
                                    (0, l.jsx)(u.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: el.intl.string(en.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(K.B, {
                gap: 4,
                children: [
                    (0, l.jsx)(u.E, { variant: "text-sm/semibold", color: "text-default", children: t.name }),
                    null != c && c > 0
                        ? (0, l.jsxs)(K.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, l.jsx)(Y._, { size: "sm", color: J.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: el.intl.format(en.default["8wD0Un"], { boostPrice: c }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)(u.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: el.intl.string(en.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function ea(e) {
    let { guildId: t, insertionTarget: n, ...i } = e,
        a = (0, s.yK)(
            [j.A, T.A],
            () => {
                let e = T.A.getDraft(t)?.widgets ?? [],
                    n = j.A.getWidgets(t) ?? [];
                return (0, et.aU)(n, e);
            },
            [t],
        );
    return (
        r.useEffect(() => {
            D(t);
        }, [t]),
        (0, l.jsx)(V.Modal, {
            title: el.intl.string(en.default.L8Xfoo),
            subtitle: el.intl.string(en.default["N8nJ+T"]),
            actions: [],
            ...i,
            children: (0, l.jsx)("div", {
                className: er.Vg,
                children: a.map((e) =>
                    (0, l.jsx)(
                        ei,
                        {
                            widget: e,
                            onClick: () => {
                                ((0, G.lr)(t, e.type, e.name, e.locked, n), i.onClose());
                            },
                        },
                        e.type,
                    ),
                ),
            }),
        })
    );
}
function es(e, t) {
    let n = (n) => (0, l.jsx)(ea, { guildId: e, insertionTarget: t, ...n });
    (0, Z.openModalLazy)(() => Promise.resolve(n), { modalKey: "guild-space-add-widget" });
}
var eu = n(992303);
function ed(e) {
    let { guildId: t, isEditing: n, isRemovalPending: i } = e,
        a = (0, s.bG)([T.A], () => T.A.getSaveStatus(t), [t]),
        d = (0, s.bG)([T.A], () => T.A.getDraft(t)?.widgets.length ?? 0, [t]),
        c = (0, s.bG)([T.A], () => T.A.getSaveErrorMessage(t), [t]),
        o = "saving" === a,
        f = o || i,
        g = c ?? el.intl.string(en.default.HmFYc5),
        m = r.useCallback(() => {
            f || (0, G.Fj)(t);
        }, [t, f]),
        h = r.useCallback(() => {
            (0, G.iX)(t);
        }, [t]);
    return (0, l.jsx)(F.F, {
        component: "div",
        children:
            n &&
            (0, l.jsx)(W.F, {
                className: eu.K,
                children: (0, l.jsx)(H.A, {
                    submitting: o,
                    disabled: f,
                    onSave: m,
                    onReset: f ? void 0 : h,
                    message: (0, l.jsxs)(K.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, l.jsx)(z.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: $.T,
                                text: el.intl.string(en.default.L8Xfoo),
                                disabled: f,
                                onClick: () => es(t),
                            }),
                            "error" === a
                                ? (0, l.jsx)(q.m, {
                                      text: g,
                                      children: (0, l.jsx)(u.E, {
                                          variant: "text-sm/medium",
                                          color: "text-feedback-critical",
                                          role: "alert",
                                          lineClamp: 1,
                                          children: g,
                                      }),
                                  })
                                : (0, l.jsx)(u.E, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      children: el.intl.format(en.default.hpAg80, { panelCount: d }),
                                  }),
                        ],
                    }),
                }),
            }),
    });
}
var ec = n(425763),
    eo = n(754674),
    ef = n(294918);
function eg(e) {
    let { height: t } = e;
    return (0, l.jsx)("div", { className: ef.qf, style: null == t ? void 0 : { height: t }, "aria-hidden": !0 });
}
var em = n(686246);
let eh = "GUILD_SPACE_WIDGET",
    eE = "GUILD_SPACE_WIDGETS",
    ep = `${eh}_${eE}`;
var eA = n(225995),
    ex = n(333007);
let e_ = "canvas, iframe, video";
function eC(e) {
    let { isKeyboardMode: t, targetColumn: n, getColumnElement: i } = e,
        { isDragging: a, item: s } = (0, em.V)((e) => ({
            isDragging: e.isDragging() && e.getItemType() === ep,
            item: e.getItem(),
        })),
        u = (0, eA.u)(),
        d = r.useRef(null),
        c = r.useRef(null);
    return (r.useLayoutEffect(() => {
        let e = d.current;
        if (!a || t || null == e) return;
        let n = u.getMonitor();
        function l() {
            let t = n.getSourceClientOffset();
            if (null == t) {
                e.style.visibility = "hidden";
                return;
            }
            ((e.style.transform = `translate3d(${t.x}px, ${t.y}px, 0)`), (e.style.visibility = "visible"));
        }
        return (l(), n.subscribeToOffsetChange(l));
    }, [u, a, t]),
    r.useLayoutEffect(() => {
        let e = c.current,
            n = d.current,
            l = a ? s?.itemPreviewProps?.getSourceElement?.() : null;
        if (!a || t || null == e || null == n || null == l) return;
        let r = l.cloneNode(!0);
        n.style.width = `${l.getBoundingClientRect().width}px`;
        let i = l.querySelectorAll(e_);
        return (
            r.querySelectorAll(e_).forEach((e, t) => {
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
            r.classList.remove(ef.cB, ef.Ni),
            r.removeAttribute("data-dnd-name"),
            r.querySelectorAll("[id]").forEach((e) => e.removeAttribute("id")),
            r.setAttribute("aria-hidden", "true"),
            (r.inert = !0),
            e.replaceChildren(r),
            () => e.replaceChildren()
        );
    }, [a, t, s]),
    r.useLayoutEffect(() => {
        let e = d.current;
        if (!a || t || null == e || null == n) return;
        let l = i(n);
        if (null == l) return;
        function r() {
            e.style.width = `${l.clientWidth}px`;
        }
        r();
        let s = new ResizeObserver(r);
        return (s.observe(l), () => s.disconnect());
    }, [i, a, t, n]),
    !a || t || null == s)
        ? null
        : (0, ex.createPortal)(
              (0, l.jsx)("div", {
                  ref: d,
                  className: ef.dk,
                  "aria-hidden": !0,
                  children: (0, l.jsx)("div", { ref: c, className: ef.w4 }),
              }),
              document.body,
          );
}
var ev = n(651300);
function eI(e) {
    let { column: t, children: n, isPointerDragging: i, onElement: a, onDragHover: s } = e,
        u = r.useRef(null),
        [, d] = (0, ev.H)({
            accept: ep,
            canDrop: () => i,
            hover: (e, n) => {
                if (!i) return;
                let l = n.getClientOffset();
                null != l && s(e.id, t, l);
            },
        }),
        c = r.useCallback(
            (e) => {
                ((u.current = e), a(t, e));
            },
            [t, a],
        );
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
        (0, l.jsx)("div", { ref: c, className: ef.fi, children: n })
    );
}
function ey(e) {
    let { column: t, dndName: n, onDropAtEnd: i } = e,
        s = r.useRef(null),
        [{ isOver: u }, d] = (0, ev.H)({
            accept: ep,
            drop: (e) => i(e.id, t),
            collect: (e) => ({ isOver: e.isOver({ shallow: !0 }) && e.canDrop() }),
        });
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
        (0, l.jsx)("div", { ref: s, className: a()(ef.wr, { [ef.SX]: u }), "data-dnd-name": n })
    );
}
var eS = n(451395),
    eb = n(42499),
    eD = n(539888);
function ej(e) {
    let {
            guildId: t,
            widget: n,
            column: i,
            positionNumber: u,
            columnWidgetCount: d,
            flatIndex: c,
            leftColumnCount: o,
            isKeyboardMode: f,
            onReorder: g,
            onDrop: m,
            onDragEnd: h,
            onSlotElement: E,
            isSaving: p,
            getDropLabel: A,
            onRemove: x,
            onCommitConfig: _,
            isSettling: C,
            onMotionEnd: v,
            isRemoving: I,
            isRemovalPending: y,
            onRemovalAnimationEnd: S,
        } = e,
        b = r.useRef(null),
        D = r.useRef(null),
        j = (0, s.bG)([w.A], () => (n.requires_hydration ? w.A.getHydration(t, n.id) : void 0), [
            t,
            n.id,
            n.requires_hydration,
        ]),
        G = (0, eb.K)(t, n),
        { isDragging: T, dragSourcePosition: L } = (0, eS.gY)({
            dragRef: b,
            dropRef: D,
            index: c,
            listType: eE,
            itemType: eh,
            itemId: n.id,
            itemPreviewProps: { getSourceElement: () => D.current },
            onDrop: (e) => m(e.id),
            onReorder: g,
            onEnd: (e, t) => h(e.id, t.didDrop()),
            canDrag: !p && !y,
        }),
        R = null == L ? null : L < o ? 0 : 1,
        N = null != R && R !== i,
        P = f && null != L && (N || L > c),
        U = f && null != L && !N && L < c,
        k = r.useCallback(
            (e) => {
                ((D.current = e), E(n.id, e));
            },
            [E, n.id],
        );
    return (0, l.jsx)("div", {
        ref: k,
        className: a()(ef.NI, { [ef.cB]: T, [ef.Ni]: C, [ef.kC]: I, [ef.ne]: P, [ef.O3]: U }),
        onAnimationEnd: (e) => {
            e.target === e.currentTarget && (I ? S(n.id) : C && v(n.id));
        },
        "data-dnd-name": A(i, u, d),
        children: (0, l.jsx)(eD.P, {
            guildId: t,
            widget: n,
            guildSpaceMode: "edit",
            hydration: j,
            lock: G,
            dragHandleRef: b,
            disabled: p,
            onRemove: () => x(n.id),
            onCommitConfig: _,
        }),
    });
}
var eG = n(865830);
function eT(e) {
    let { column: t, disabled: n, onInsert: r } = e,
        i = el.intl.formatToPlainString(1 === t ? en.default.U0SqHk : en.default["9Ctu9P"], { positionNumber: 1 });
    return (0, l.jsxs)(K.B, {
        className: ef.Y$,
        align: "center",
        justify: "center",
        gap: 12,
        children: [
            (0, l.jsx)(u.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: el.intl.string(en.default["/OtM0k"]),
            }),
            (0, l.jsx)(z.$, {
                variant: "secondary",
                size: "sm",
                icon: $.T,
                text: el.intl.string(en.default.L8Xfoo),
                "aria-label": i,
                disabled: n,
                onClick: () => r(t, 0),
            }),
        ],
    });
}
var ew = n(408278);
function eL(e) {
    let { column: t, index: n, disabled: r, placement: i, onInsert: s } = e,
        u = el.intl.formatToPlainString(1 === t ? en.default["h9P9H+"] : en.default.xboFyi, { positionNumber: n + 1 });
    return (0, l.jsxs)("div", {
        className: a()(ef.kZ, { [ef.j2]: "before" === i, [ef.AO]: "after" === i }),
        children: [
            (0, l.jsx)("div", { className: ef.CF, "aria-hidden": !0 }),
            (0, l.jsx)("div", {
                className: ef.QN,
                children: (0, l.jsx)(q.m, {
                    text: u,
                    ariaHidden: !0,
                    children: (0, l.jsx)(ew.K, {
                        icon: $.T,
                        "aria-label": u,
                        size: "sm",
                        disabled: r,
                        onClick: () => s(t, n),
                    }),
                }),
            }),
        ],
    });
}
function eR(e, t, n) {
    return el.intl.formatToPlainString(1 === e ? en.default.O9RvHQ : en.default["+cSvS8"], {
        positionNumber: t,
        positionCount: n,
    });
}
function eN(e) {
    let { guildId: t, widgets: n, onRemovalPendingChange: i } = e,
        u = r.useMemo(() => (0, eo.Rl)(n), [n]),
        d = r.useMemo(
            () =>
                u.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != eG.m[t];
                    }),
                ),
            [u],
        ),
        c = r.useMemo(() => [...d[0], ...d[1]], [d]),
        o = (0, em.V)((e) =>
            e.isDragging() && e.getItemType() === ep
                ? { isDragging: !0, widgetId: e.getItem().id }
                : { isDragging: !1 },
        ),
        f = o.isDragging,
        g = o.isDragging ? o.widgetId : null,
        m = (0, ec.VU)(),
        h = (0, s.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        E = (0, s.bG)([T.A], () => "saving" === T.A.getSaveStatus(t), [t]),
        p = f && !m,
        [A, x] = r.useState(null),
        _ = A?.type === "removing" ? A.widgetId : null,
        C = null != _;
    r.useEffect(() => {
        h && A?.type === "settling" && x(null);
    }, [h, A]);
    let v = r.useCallback(
            (e, n, l) => {
                ((0, G.j0)(t, e, n, l), h || x({ type: "settling", widgetId: e }));
            },
            [t, h],
        ),
        {
            effectiveDestination: I,
            draggedLocation: y,
            getColumnElement: S,
            gridDropSurfaceRef: b,
            handleColumnHover: D,
            handleDragEnd: j,
            handleDrop: w,
            placeholderHeight: L,
            registerColumnElement: R,
            registerSlotElement: N,
            snapshotSlotRects: P,
        } = (function (e) {
            let t,
                n,
                l,
                i,
                {
                    columns: a,
                    draftColumns: s,
                    draggedWidgetId: u,
                    isPointerDragging: d,
                    isKeyboardMode: c,
                    isSaving: o,
                    reduceMotion: f,
                    onMoveWidget: g,
                } = e,
                [m, h] = r.useState(null),
                E = r.useRef(null),
                p = r.useRef(null),
                A = r.useRef(null),
                x = r.useRef(null),
                _ = r.useRef([null, null]),
                C = r.useRef(new Map()),
                [v, I] = r.useState(null),
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
                                            s = i?.bottom ?? window.innerHeight,
                                            u = l - a < 96 ? -1 : +(s - l < 96);
                                        if (0 === u) return;
                                        let d = Math.ceil(24 * (1 - (u < 0 ? l - a : s - l) / 96));
                                        (null != r ? r.scrollBy({ top: u * d }) : window.scrollBy({ top: u * d }),
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
                        s = r.useRef(new Map()),
                        u = r.useCallback(() => {
                            (s.current.forEach((e) => e.cancel()), s.current.clear());
                        }, []),
                        d = r.useCallback(() => {
                            (a.current.clear(), u());
                        }, [u]),
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
                                (a.current.clear(), u());
                                return;
                            }
                            let e = a.current;
                            0 !== e.size &&
                                (i.current.forEach((t, n) => {
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
                        }, [u, t, n, l, i]),
                        r.useEffect(() => u, [u]),
                        { clearSlotMotion: d, snapshotSlotRects: c }
                    );
                })({ columns: a, pendingDestination: m, reduceMotion: f, slotElementsRef: C }),
                j = (() => {
                    if (null == u) return null;
                    for (let [e, t] of a.entries()) {
                        let n = t.findIndex((e) => {
                            let { id: t } = e;
                            return t === u;
                        });
                        if (-1 !== n) return { column: e, index: n };
                    }
                    return null;
                })(),
                G = d && m?.widgetId === u && (null == j || m.column !== j.column || m.index !== j.index) ? m : null,
                T = r.useCallback((e, t) => {
                    _.current[e] = t;
                }, []),
                w = r.useCallback((e) => _.current[e] ?? null, []),
                L = r.useCallback((e, t) => {
                    null == t ? C.current.delete(e) : C.current.set(e, t);
                }, []),
                R = r.useCallback((e, t, n) => {
                    if (e === t) return !0;
                    let l = _.current[0]?.getBoundingClientRect(),
                        r = _.current[1]?.getBoundingClientRect();
                    if (null == l || null == r || !(l.right <= r.left)) return !0;
                    let i = (l.right + r.left) / 2;
                    return 1 === t ? n > i + 32 : n < i - 32;
                }, []),
                N = r.useCallback(() => {
                    A.current = null;
                    let e = p.current;
                    if (null == e) return;
                    let t = E.current;
                    (t?.widgetId !== e.widgetId || t.column !== e.column || t.index !== e.index) &&
                        (D(e.widgetId), (E.current = e), h(e));
                }, [D]),
                P = r.useCallback(
                    (e, t, n, l) => {
                        if (o) return;
                        S(l.y);
                        let r = E.current?.column ?? j?.column;
                        if (null == r || !R(r, t, l.x)) return;
                        let i =
                            a[t]?.filter((t) => {
                                let { id: n } = t;
                                return n !== e;
                            }).length ?? 0;
                        ((p.current = { widgetId: e, column: t, index: Math.max(0, Math.min(n, i)) }),
                            null == A.current && (A.current = requestAnimationFrame(N)));
                    },
                    [N, a, R, j?.column, o, S],
                ),
                U = r.useCallback(
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
                        P(e, t, -1 === r ? l.length : r, n);
                    },
                    [a, P],
                ),
                k = r.useCallback(
                    (e, t) => {
                        let n = 0,
                            l = 1 / 0;
                        (_.current.forEach((e, r) => {
                            if (null == e) return;
                            let i = e.getBoundingClientRect(),
                                a = t.x < i.left ? i.left - t.x : Math.max(0, t.x - i.right),
                                s = t.y < i.top ? i.top - t.y : Math.max(0, t.y - i.bottom),
                                u = a * a + s * s;
                            u < l && ((n = r), (l = u));
                        }),
                            U(e, n, t));
                    },
                    [U],
                ),
                [, M] = (0, ev.H)({
                    accept: ep,
                    canDrop: () => d,
                    drop: () => ({}),
                    hover: (e, t) => {
                        if (!d || !t.isOver({ shallow: !0 })) return;
                        let n = t.getClientOffset();
                        null != n && k(e.id, n);
                    },
                });
            r.useLayoutEffect(
                () => (
                    M(x),
                    () => {
                        M(null);
                    }
                ),
                [M],
            );
            let O = r.useCallback((e) => {
                    let t = p.current;
                    if (t?.widgetId === e) return t;
                    let n = E.current;
                    return n?.widgetId === e ? n : null;
                }, []),
                B = r.useCallback((e, t) => (0, eo.O6)(s[t.column] ?? [], a[t.column] ?? [], t.index, e), [a, s]),
                F = r.useCallback(() => {
                    (null != A.current && cancelAnimationFrame(A.current),
                        (A.current = null),
                        (p.current = null),
                        (E.current = null),
                        h(null),
                        I(null),
                        b(),
                        y());
                }, [b, y]),
                H = r.useCallback(() => d, [d]),
                W = r.useCallback(
                    (e, t) => {
                        let n = O(e);
                        (t &&
                            !c &&
                            null != n &&
                            (null == j || n.column !== j.column || n.index !== j.index) &&
                            g(e, n.column, B(e, n)),
                            F());
                    },
                    [F, j, O, B, c, g],
                );
            return (
                r.useLayoutEffect(() => {
                    if (!d || null == u) return;
                    let e = C.current.get(u);
                    if (null == e) return;
                    let t = e.getBoundingClientRect().height;
                    t > 0 && t !== v && I(t);
                }, [u, d, v]),
                r.useEffect(
                    () => () => {
                        null != A.current && cancelAnimationFrame(A.current);
                    },
                    [],
                ),
                {
                    effectiveDestination: G,
                    draggedLocation: j,
                    getColumnElement: w,
                    gridDropSurfaceRef: x,
                    handleColumnHover: U,
                    handleDragEnd: W,
                    handleDrop: H,
                    placeholderHeight: v,
                    registerColumnElement: T,
                    registerSlotElement: L,
                    snapshotSlotRects: D,
                }
            );
        })({
            columns: d,
            draftColumns: u,
            draggedWidgetId: g,
            isPointerDragging: p,
            isKeyboardMode: m,
            isSaving: E,
            reduceMotion: h,
            onMoveWidget: v,
        }),
        U = r.useCallback((e) => {
            x((t) => (t?.type === "settling" && t.widgetId === e ? null : t));
        }, []),
        k = r.useCallback(
            (e) => {
                (x(null == e ? null : { type: "removing", widgetId: e }), i(null != e));
            },
            [i],
        ),
        M = r.useCallback(
            (e) => {
                _ === e && (P(e), (0, G.GP)(t, e), k(null));
            },
            [t, _, k, P],
        ),
        O = r.useCallback(
            (e) => {
                if (!E && !C) {
                    if (h) {
                        (P(e), (0, G.GP)(t, e));
                        return;
                    }
                    k(e);
                }
            },
            [t, C, E, h, k, P],
        );
    (r.useLayoutEffect(() => {
        h && null != _ && M(_);
    }, [M, h, _]),
        r.useEffect(() => () => i(!1), [i]));
    let B = r.useCallback(
            (e, n) => {
                let l = c[e],
                    r = c[n];
                null != l && null != r && (0, G.j0)(t, l.id, r.position.column, r.position.order);
            },
            [t, c],
        ),
        F = r.useCallback(
            (e, n) => {
                (0, G.j0)(t, e, n, u[n]?.length ?? 0);
            },
            [u, t],
        ),
        H = r.useCallback(
            (e, n) => {
                let l = (0, eo.O6)(u[e] ?? [], d[e] ?? [], n);
                es(t, { column: e, index: l });
            },
            [d, u, t],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ref: b,
                className: ef.Z7,
                children: (0, l.jsx)("div", {
                    className: a()(ef.Vg, { [ef.nl]: p }),
                    children: d.map((e, n) =>
                        (0, l.jsxs)(
                            eI,
                            {
                                column: n,
                                isPointerDragging: p,
                                onElement: R,
                                onDragHover: D,
                                children: [
                                    (function (e, n) {
                                        if (0 === e.length && !f)
                                            return (0, l.jsx)(eT, { column: n, disabled: E || C, onInsert: H });
                                        let r =
                                            p && null != g
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
                                        })(e, n, I).map((i) => {
                                            if ("placeholder" === i.type)
                                                return (0, l.jsx)(eg, { height: L }, "drag-placeholder");
                                            let { widget: a } = i,
                                                s = r.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                u =
                                                    -1 === s
                                                        ? e.findIndex((e) => {
                                                              let { id: t } = e;
                                                              return t === a.id;
                                                          })
                                                        : s,
                                                o = c.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                g = e.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                p = !f && !E && !C;
                                            return (0, l.jsxs)(
                                                "div",
                                                {
                                                    className: ef.O4,
                                                    children: [
                                                        p &&
                                                            (0, l.jsx)(eL, {
                                                                column: n,
                                                                index: g,
                                                                disabled: E,
                                                                placement: "before",
                                                                onInsert: H,
                                                            }),
                                                        (0, l.jsx)(ej, {
                                                            guildId: t,
                                                            widget: a,
                                                            column: n,
                                                            positionNumber: u + 1,
                                                            columnWidgetCount: r.length,
                                                            flatIndex: o,
                                                            leftColumnCount: d[0].length,
                                                            isKeyboardMode: m,
                                                            isSaving: E,
                                                            getDropLabel: eR,
                                                            onReorder: B,
                                                            onDrop: w,
                                                            onDragEnd: j,
                                                            onSlotElement: N,
                                                            isSettling:
                                                                A?.type === "settling" &&
                                                                A.widgetId === a.id &&
                                                                !m &&
                                                                !h,
                                                            onMotionEnd: U,
                                                            isRemoving: _ === a.id,
                                                            isRemovalPending: C,
                                                            onRemovalAnimationEnd: M,
                                                            onRemove: O,
                                                            onCommitConfig: (e) => (0, G.Vk)(t, a.id, e),
                                                        }),
                                                        p &&
                                                            g === e.length - 1 &&
                                                            (0, l.jsx)(eL, {
                                                                column: n,
                                                                index: e.length,
                                                                disabled: E,
                                                                placement: "after",
                                                                onInsert: H,
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
                                        (0, l.jsx)(ey, {
                                            column: n,
                                            dndName: el.intl.string(1 === n ? en.default.fWef0G : en.default.KcdDyT),
                                            onDropAtEnd: F,
                                        }),
                                    p && (0, l.jsx)("div", { className: ef.XP, "aria-hidden": !0 }),
                                ],
                            },
                            n,
                        ),
                    ),
                }),
            }),
            (0, l.jsx)(eC, { isKeyboardMode: m, targetColumn: I?.column ?? y?.column ?? null, getColumnElement: S }),
        ],
    });
}
var eP = n(529609),
    eU = n(241326),
    ek = n(297264),
    eM = n(22231),
    eO = n(654107),
    eB = n(548118),
    eF = n(837011),
    eH = n(649640),
    eW = n(2553),
    eK = n(405810),
    ez = n(498642),
    e$ = n(486020),
    eq = n(488428),
    eV = n(776231),
    eX = n(968176),
    eY = n(986898);
function eJ(e) {
    let { guildId: t, header: n, canEdit: i, isEditing: a, isSaving: d } = e,
        c = (0, s.bG)([m.A], () => m.A.getGuild(t), [t]),
        o = (0, s.bG)([ez.A], () => ez.A.getOnlineCount(t), [t]),
        f = (0, s.bG)([ez.A], () => ez.A.getMemberCount(t), [t]),
        g = n.custom_banner,
        h = (0, s.bG)([eF.A], () => eF.A.getProfile(t), [t]),
        E = (0, eH.b2)().hex(),
        p = null == c ? null : e$.Ay.getGuildIconURL({ id: c.id, icon: c.icon, size: 64 }),
        A = (0, eO.Ay)(p, E),
        x = (0, eH.n6)(h?.brandColorPrimary ?? A),
        _ = r.useMemo(
            () =>
                null == c
                    ? null
                    : "string" == typeof g
                      ? g
                      : void 0 === g && null != n.custom_banner_hash
                        ? (function (e, t) {
                              let n = e$.QB ? "webp" : "jpg",
                                  { CDN_HOST: l, API_ENDPOINT: r } = window.GLOBAL_ENV,
                                  i = C.Rsh.GUILD_SPACE_BANNER(e, t, n),
                                  a = null != l ? `https://${l}${i}` : location.protocol + r + i,
                                  s = { size: (0, eV.kr)(1200 * (0, eV.mZ)()) };
                              return ("jpg" === n && (s.quality = "lossless"), (a += `?${eq.stringify(s)}`));
                          })(c.id, n.custom_banner_hash)
                        : e$.Ay.getGuildBannerURL({ id: c.id, banner: c.banner }),
            [c, g, n.custom_banner_hash],
        ),
        v = "string" == typeof g || (void 0 === g && null != n.custom_banner_hash);
    return null == c
        ? null
        : (0, l.jsxs)("div", {
              className: eY.wx,
              children: [
                  null != _
                      ? (0, l.jsx)("img", { className: eY.vK, src: _, alt: "" })
                      : (0, l.jsx)("div", { className: eY.vK, style: { background: x }, "aria-hidden": !0 }),
                  (0, l.jsx)("div", { className: eY.f5, "aria-hidden": !0 }),
                  a
                      ? (0, l.jsxs)("div", {
                            className: eY.j0,
                            children: [
                                (0, l.jsx)(eK.A, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: el.intl.string(en.default["EN+0gW"]),
                                    onChange: (e) => (0, G.pC)(t, e),
                                    maxFileSizeBytes: 0xa00000,
                                    onFileSizeError: () => (0, eW.A)(0xa00000),
                                    disabled: d,
                                }),
                                v
                                    ? (0, l.jsx)(q.m, {
                                          text: el.intl.string(en.default["CunK+J"]),
                                          ariaHidden: !0,
                                          children: (0, l.jsx)(ew.K, {
                                              variant: "critical-secondary",
                                              icon: eU.TrashIcon,
                                              "aria-label": el.intl.string(en.default["CunK+J"]),
                                              onClick: () => (0, G.pC)(t, null),
                                              disabled: d,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  (0, l.jsxs)("div", {
                      className: eY.D_,
                      children: [
                          (0, l.jsx)(eB.Ay, {
                              className: eY.Kk,
                              guild: c,
                              size: eB.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsxs)("div", {
                              className: eY.pq,
                              children: [
                                  (0, l.jsx)(ek.D, {
                                      variant: "heading-xl/bold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: c.name,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: eY.M1,
                                      children: [
                                          null != o
                                              ? (0, l.jsxs)("div", {
                                                    className: eY.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: eY.RS, "aria-hidden": !0 }),
                                                        (0, l.jsx)(u.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: el.intl.format(en.default.G08ClG, { count: o }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != f
                                              ? (0, l.jsxs)("div", {
                                                    className: eY.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: eY.kq, "aria-hidden": !0 }),
                                                        (0, l.jsx)(u.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: el.intl.format(en.default["rp7bx+"], {
                                                                count: f,
                                                            }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: eY.dJ,
                                              children: [
                                                  (0, l.jsx)(Y._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, l.jsx)(u.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: el.intl.format(en.default.DwFqrb, {
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
                      (0, l.jsx)(z.$, {
                          icon: eM.PencilIcon,
                          text: el.intl.string(eX.default.KcOpCm),
                          size: "sm",
                          onClick: () => (0, G.Wd)(t),
                      }),
              ],
          });
}
var eQ = n(554146),
    eZ = n(942857),
    e0 = n(131607),
    e1 = n(967198),
    e2 = n(725041),
    e6 = n(49999),
    e8 = n(312152);
function e9(e) {
    let t,
        { guildId: i } = e,
        h = r.useRef(null),
        [E, p] = r.useState(!1),
        [A, _, C] = (0, s.yK)([x.A], () => [x.A.getSpace(i), x.A.getFetchStatus(i), x.A.isInBackoff(i)], [i]);
    (r.useEffect(() => {
        let e = h.current !== i;
        ((h.current = i), y(i, e));
    }, [_, i]),
        r.useEffect(() => {
            (0, o.L4)(i, !1, { respectBackoff: !0 });
        }, [i]),
        (t = (0, O.n)()),
        r.useEffect(
            () => () => {
                if (null == t) return;
                let e = M.Ay.getCurrentEmbeddedActivity();
                null != e &&
                    e.location.kind === U.T.GUILD_CHANNEL &&
                    e.location.channel_id === t &&
                    (0, k._H)({ location: e.location, applicationId: e.applicationId, showFeedback: !1 });
            },
            [t],
        ));
    let v = (0, s.bG)([m.A], () => m.A.getGuild(i), [i]),
        I = (0, P.mN)(v),
        L = (0, s.bG)([j.A], () => j.A.getFetchStatus(i), [i]);
    r.useEffect(() => {
        I && "idle" === L && D(i);
    }, [I, L, i]);
    let F = v?.guildSpaceSettings?.publish_status !== N.B.PUBLISHED,
        H = r.useCallback(() => b(i, { publish_status: N.B.PUBLISHED }), [i]),
        [W, K] = (0, s.yK)([T.A], () => [T.A.getDraft(i), T.A.getSaveStatus(i)], [i]),
        z = I && null != W;
    !(function (e, t) {
        let i = (0, Z.useHasModalOpen)(e2.J),
            a = (0, s.bG)([e1.A], () => e1.A.getGuildId()),
            u = (0, eZ.A)(),
            [d, c] = (0, e0.kn)(t && a === e && !u ? [eQ.M.GUILD_SPACE_NUX_MODAL] : [], e6.m.GUILD_SPACE_NUX, !0),
            o = r.useRef(!1),
            f = d === eQ.M.GUILD_SPACE_NUX_MODAL;
        (r.useEffect(() => {
            o.current = !1;
        }, [e, a]),
            r.useEffect(() => {
                !f ||
                    i ||
                    o.current ||
                    ((o.current = !0),
                    (0, Z.openModalLazy)(
                        async () => {
                            let t = await Promise.resolve().then(n.bind(n, 725041));
                            return (n) =>
                                (0, l.jsx)(t.default, {
                                    guildId: e,
                                    markAsDismissed: c,
                                    transitionState: n.transitionState,
                                    onClose: n.onClose,
                                });
                        },
                        { modalKey: e2.J },
                    ).catch(() => {
                        o.current = !1;
                    }));
            }, [e, i, c, f]));
    })(i, I && !z && null != A);
    let $ = z ? W.widgets : A?.widgets,
        q = r.useMemo(() => $?.some((e) => e.locked) ?? !1, [$]);
    r.useEffect(() => {
        I && q && ((0, f.AK)(i), (0, f.Xd)(i));
    }, [I, i, q]);
    let V = (0, s.bG)(
        [g.A, j.A],
        () =>
            A?.widgets.some((e) => {
                let t = j.A.getWidget(i, e.type)?.powerup_sku_id;
                return e.locked && null != t && g.A.getStateForGuild(i)?.unlockedPowerups[t] != null;
            }) ?? !1,
        [i, A],
    );
    (r.useEffect(() => {
        V && S(i);
    }, [i, V]),
        r.useEffect(() => {
            I || null == W || "saving" === K || (0, G.iX)(i);
        }, [I, W, K, i]));
    let X = r.useMemo(
            () =>
                ($ ?? [])
                    .filter((e) => {
                        let { requires_hydration: t } = e;
                        return t;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
            [$],
        ),
        Y = (0, s.yK)([w.A], () => w.A.getWidgetIdsToHydrate(i, X), [i, X]),
        J = r.useRef(null);
    return (r.useEffect(() => {
        if (J.current !== i && null != A) {
            ((J.current = i), R(i, X, !0));
            return;
        }
        R(i, Y);
    }, [i, A, X, Y]),
    null == A || null == $)
        ? (0, l.jsx)("div", {
              className: e8.MY,
              children: (0, l.jsx)("div", {
                  className: e8.F,
                  children:
                      "error" !== _ || C
                          ? (0, l.jsx)(d.y, {
                                type: d.y.Type.SPINNING_CIRCLE,
                                "aria-label": el.intl.string(el.t.ZTNur7),
                            })
                          : (0, l.jsx)(u.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: el.intl.string(el.t.F8FvUy),
                            }),
              }),
          })
        : (0, l.jsxs)("div", {
              className: e8.MY,
              children: [
                  (0, l.jsx)(c.Gt, {
                      className: e8.XG,
                      children: (0, l.jsxs)("div", {
                          className: a()(e8.Qs, { [e8.Dy]: z }),
                          children: [
                              I && F ? (0, l.jsx)(B.A, { onPublish: H }) : null,
                              (0, l.jsx)(eJ, {
                                  guildId: i,
                                  header: z ? W.header : A.header,
                                  isEditing: z,
                                  canEdit: I,
                                  isSaving: "saving" === K,
                              }),
                              z
                                  ? (0, l.jsx)(eN, { guildId: i, widgets: $, onRemovalPendingChange: p }, i)
                                  : (0, l.jsx)(eP.A, { canEdit: I, guildId: i, widgets: $ }),
                          ],
                      }),
                  }),
                  (0, l.jsx)(ed, { guildId: i, isEditing: z, isRemovalPending: E }),
              ],
          });
}
