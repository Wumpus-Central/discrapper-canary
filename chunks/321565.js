n.d(t, { default: () => f });
var a = n(627968),
    i = n(64700),
    r = n(503698),
    o = n.n(r),
    l = n(935462),
    c = n(397927),
    s = n(707685),
    d = n(775121),
    _ = n(775602),
    u = n(203982),
    m = n(700331),
    p = n(454290),
    A = n(369254),
    b = n(847816),
    S = n(652215),
    h = n(985018),
    g = n(20818);
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    !0 === n || _.A.useReducedMotion ? e.set(t) : e.start(t);
}
function f(e) {
    let {
            onClose: t,
            onIndexChange: n,
            items: r,
            startingIndex: f,
            enabledContentHarmTypeFlags: T,
            shouldHideMediaOptions: E = !1,
            transitionState: y,
            ...I
        } = e,
        [v, x] = i.useState(f ?? 0),
        [M, R] = i.useState(!1),
        [O, N] = (0, c.zhh)(() => ({
            scale: _.A.useReducedMotion ? 1 : 0.9,
            x: 0,
            y: 0,
            config: { friction: 30, tension: 300 },
        })),
        D = i.useRef(null);
    i.useEffect(() => {
        if (null != t)
            return (
                u._.subscribe(S.jej.MEDIA_MODAL_CLOSE, t),
                () => {
                    u._.unsubscribe(S.jej.MEDIA_MODAL_CLOSE, t);
                }
            );
    }, [t]);
    let j = i.useRef(null);
    i.useEffect(() => {
        if (y !== j.current)
            switch (((j.current = y), y)) {
                case c.ip4.ENTERING:
                    C(O.scale, 1);
                    break;
                case c.ip4.EXITING:
                    _.A.useReducedMotion || (C(O.x, 0), C(O.y, 0), C(O.scale, 0.9));
            }
    }, [y, O]),
        y === c.ip4.HIDDEN && M && (R(!1), O.x.set(0), O.y.set(0), O.scale.set(1)),
        i.useEffect(() => {
            y === c.ip4.ENTERED && (d.A.disable(), d.A.enableTemp(s.w)),
                y === c.ip4.HIDDEN && (d.A.disable(), d.A.enableTemp(s.b));
            let e = () => {
                    d.A.disable(), y === c.ip4.ENTERED ? d.A.enableTemp(s.w) : d.A.enableTemp(s.b);
                },
                t = () => {
                    d.A.disableTemp();
                },
                n = D.current?.ownerDocument?.defaultView;
            return (
                n?.addEventListener("focus", e),
                n?.addEventListener("blur", t),
                () => {
                    n?.removeEventListener("focus", e), n?.removeEventListener("blur", t), d.A.disableTemp();
                }
            );
        }, [y]);
    let P = i.useCallback(
            (e) => {
                x(e), n?.(e), m.l.markActionPerformed(m.N.SELECTED_ITEM_CHANGE);
            },
            [n],
        ),
        w = i.useMemo(
            () => ({
                scale: O.scale,
                x: O.x,
                y: O.y,
                setScale(e, t) {
                    C(O.scale, e, t?.immediate);
                },
                setOffset(e, t, n) {
                    C(O.x, e, n?.immediate), C(O.y, t, n?.immediate);
                },
                zoomed: M,
                setZoomed(e) {
                    R(e), C(O.scale, e ? 2.5 : 1), e || (C(O.x, 0), C(O.y, 0));
                },
            }),
            [M, O],
        );
    return (0, a.jsx)(c.NPJ, {
        theme: S.NJ8.MIDNIGHT,
        children: (e) =>
            (0, a.jsx)(c.EOs, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: o()(g.O, e),
                transitionState: y,
                ...I,
                size: c.rIJ.DYNAMIC,
                animation: l.WM.SUBTLE,
                fullscreenOnMobile: !1,
                onClick: t,
                "aria-label": h.intl.string(h.t.AMTX3j),
                parentComponent: "MediaViewerModal",
                children: (0, a.jsxs)(p.f.Provider, {
                    value: w,
                    children: [
                        (0, a.jsx)(b.A, { item: r[v], hideMediaOptions: E, onClose: t }),
                        (0, a.jsx)("div", { style: { display: "none" }, ref: D }),
                        (0, a.jsx)(A.A, {
                            items: r,
                            startIndex: v,
                            onIndexChange: P,
                            enabledContentHarmTypeFlags: T,
                            shouldHideMediaOptions: E,
                        }),
                    ],
                }),
            }),
    });
}
