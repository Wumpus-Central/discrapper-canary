n.d(t, { default: () => y });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(935462),
    o = n(717421),
    c = n(231723),
    d = n(43990),
    u = n(707685),
    m = n(775121),
    p = n(775602),
    _ = n(203982),
    A = n(700331),
    h = n(454290),
    g = n(369254),
    f = n(847816),
    E = n(652215),
    C = n(985018),
    I = n(264482);
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    !0 === n || p.A.useReducedMotion ? e.set(t) : e.start(t);
}
function y(e) {
    let {
            onClose: t,
            onIndexChange: n,
            items: l,
            startingIndex: y,
            enabledContentHarmTypeFlags: x,
            shouldHideMediaOptions: T = !1,
            transitionState: v,
            ...b
        } = e,
        [M, N] = i.useState(y ?? 0),
        [O, R] = i.useState(!1),
        [j, D] = (0, o.z)(() => ({
            scale: p.A.useReducedMotion ? 1 : 0.9,
            x: 0,
            y: 0,
            config: { friction: 30, tension: 300 },
        })),
        L = i.useRef(null);
    i.useEffect(() => {
        if (null != t)
            return (
                _._.subscribe(E.jej.MEDIA_MODAL_CLOSE, t),
                () => {
                    _._.unsubscribe(E.jej.MEDIA_MODAL_CLOSE, t);
                }
            );
    }, [t]);
    let w = i.useRef(null);
    i.useEffect(() => {
        if (v !== w.current)
            switch (((w.current = v), v)) {
                case c.ip.ENTERING:
                    S(j.scale, 1);
                    break;
                case c.ip.EXITING:
                    p.A.useReducedMotion || (S(j.x, 0), S(j.y, 0), S(j.scale, 0.9));
            }
    }, [v, j]),
        v === c.ip.HIDDEN && O && (R(!1), j.x.set(0), j.y.set(0), j.scale.set(1)),
        i.useEffect(() => {
            v === c.ip.ENTERED && (m.A.disable(), m.A.enableTemp(u.w)),
                v === c.ip.HIDDEN && (m.A.disable(), m.A.enableTemp(u.b));
            let e = () => {
                    m.A.disable(), v === c.ip.ENTERED ? m.A.enableTemp(u.w) : m.A.enableTemp(u.b);
                },
                t = () => {
                    m.A.disableTemp();
                },
                n = L.current?.ownerDocument?.defaultView;
            return (
                n?.addEventListener("focus", e),
                n?.addEventListener("blur", t),
                () => {
                    n?.removeEventListener("focus", e), n?.removeEventListener("blur", t), m.A.disableTemp();
                }
            );
        }, [v]);
    let P = i.useCallback(
            (e) => {
                N(e), n?.(e), A.l.markActionPerformed(A.N.SELECTED_ITEM_CHANGE);
            },
            [n],
        ),
        k = i.useMemo(
            () => ({
                scale: j.scale,
                x: j.x,
                y: j.y,
                setScale(e, t) {
                    S(j.scale, e, t?.immediate);
                },
                setOffset(e, t, n) {
                    S(j.x, e, n?.immediate), S(j.y, t, n?.immediate);
                },
                zoomed: O,
                setZoomed(e) {
                    R(e), S(j.scale, e ? 2.5 : 1), e || (S(j.x, 0), S(j.y, 0));
                },
            }),
            [O, j],
        );
    return (0, a.jsx)(d.N, {
        theme: E.NJ8.MIDNIGHT,
        children: (e) =>
            (0, a.jsx)(s.EO, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: r()(I.O, e),
                transitionState: v,
                ...b,
                size: s.rI.DYNAMIC,
                animation: s.WM.SUBTLE,
                fullscreenOnMobile: !1,
                onClick: t,
                "aria-label": C.intl.string(C.t.AMTX3j),
                parentComponent: "MediaViewerModal",
                children: (0, a.jsxs)(h.f.Provider, {
                    value: k,
                    children: [
                        (0, a.jsx)(f.A, { item: l[M], hideMediaOptions: T, onClose: t }),
                        (0, a.jsx)("div", { style: { display: "none" }, ref: L }),
                        (0, a.jsx)(g.A, {
                            items: l,
                            startIndex: M,
                            onIndexChange: P,
                            enabledContentHarmTypeFlags: x,
                            shouldHideMediaOptions: T,
                        }),
                    ],
                }),
            }),
    });
}
