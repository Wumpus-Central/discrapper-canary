"use strict";
n.d(t, { default: () => S });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(935462),
    o = n(717421),
    c = n(231723),
    u = n(43990),
    d = n(707685),
    _ = n(775121),
    p = n(775602),
    m = n(203982),
    A = n(700331),
    h = n(454290),
    f = n(369254),
    g = n(847816),
    E = n(652215),
    I = n(985018),
    v = n(264482);
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    !0 === n || p.A.useReducedMotion ? e.set(t) : e.start(t);
}
function S(e) {
    let {
            onClose: t,
            onIndexChange: n,
            items: r,
            startingIndex: S,
            enabledContentHarmTypeFlags: C,
            shouldHideMediaOptions: b = !1,
            transitionState: x,
            ...y
        } = e,
        [R, N] = a.useState(S ?? 0),
        [L, O] = a.useState(!1),
        [M, w] = (0, o.z)(() => ({
            scale: p.A.useReducedMotion ? 1 : 0.9,
            x: 0,
            y: 0,
            config: { friction: 30, tension: 300 },
        })),
        D = a.useRef(null);
    a.useEffect(() => {
        if (null != t)
            return (
                m._.subscribe(E.jej.MEDIA_MODAL_CLOSE, t),
                () => {
                    m._.unsubscribe(E.jej.MEDIA_MODAL_CLOSE, t);
                }
            );
    }, [t]);
    let P = a.useRef(null);
    a.useEffect(() => {
        if (x !== P.current)
            switch (((P.current = x), x)) {
                case c.ip.ENTERING:
                    T(M.scale, 1);
                    break;
                case c.ip.EXITING:
                    p.A.useReducedMotion || (T(M.x, 0), T(M.y, 0), T(M.scale, 0.9));
            }
    }, [x, M]),
        x === c.ip.HIDDEN && L && (O(!1), M.x.set(0), M.y.set(0), M.scale.set(1)),
        a.useEffect(() => {
            x === c.ip.ENTERED && (_.A.disable(), _.A.enableTemp(d.w)),
                x === c.ip.HIDDEN && (_.A.disable(), _.A.enableTemp(d.b));
            let e = () => {
                    _.A.disable(), x === c.ip.ENTERED ? _.A.enableTemp(d.w) : _.A.enableTemp(d.b);
                },
                t = () => {
                    _.A.disableTemp();
                },
                n = D.current?.ownerDocument?.defaultView;
            return (
                n?.addEventListener("focus", e),
                n?.addEventListener("blur", t),
                () => {
                    n?.removeEventListener("focus", e), n?.removeEventListener("blur", t), _.A.disableTemp();
                }
            );
        }, [x]);
    let j = a.useCallback(
            (e) => {
                N(e), n?.(e), A.l.markActionPerformed(A.N.SELECTED_ITEM_CHANGE);
            },
            [n],
        ),
        F = a.useMemo(
            () => ({
                scale: M.scale,
                x: M.x,
                y: M.y,
                setScale(e, t) {
                    T(M.scale, e, t?.immediate);
                },
                setOffset(e, t, n) {
                    T(M.x, e, n?.immediate), T(M.y, t, n?.immediate);
                },
                zoomed: L,
                setZoomed(e) {
                    O(e), T(M.scale, e ? 2.5 : 1), e || (T(M.x, 0), T(M.y, 0));
                },
            }),
            [L, M],
        );
    return (0, i.jsx)(u.N, {
        theme: E.NJ8.MIDNIGHT,
        children: (e) =>
            (0, i.jsx)(s.EO, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: l()(v.O, e),
                transitionState: x,
                ...y,
                size: s.rI.DYNAMIC,
                animation: s.WM.SUBTLE,
                fullscreenOnMobile: !1,
                onClick: t,
                "aria-label": I.intl.string(I.t.AMTX3j),
                parentComponent: "MediaViewerModal",
                children: (0, i.jsxs)(h.f.Provider, {
                    value: F,
                    children: [
                        (0, i.jsx)(g.A, { item: r[R], hideMediaOptions: b, onClose: t }),
                        (0, i.jsx)("div", { style: { display: "none" }, ref: D }),
                        (0, i.jsx)(f.A, {
                            items: r,
                            startIndex: R,
                            onIndexChange: j,
                            enabledContentHarmTypeFlags: C,
                            shouldHideMediaOptions: b,
                        }),
                    ],
                }),
            }),
    });
}
