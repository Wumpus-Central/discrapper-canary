a.d(t, { default: () => f });
var n = a(627968),
    i = a(64700),
    l = a(503698),
    s = a.n(l),
    r = a(935462),
    o = a(397927),
    c = a(707685),
    d = a(775121),
    u = a(775602),
    m = a(203982),
    _ = a(700331),
    p = a(454290),
    A = a(369254),
    h = a(847816),
    g = a(652215),
    E = a(985018),
    T = a(20818);
function S(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    !0 === a || u.A.useReducedMotion ? e.set(t) : e.start(t);
}
function f(e) {
    let {
            onClose: t,
            onIndexChange: a,
            items: l,
            startingIndex: f,
            enabledContentHarmTypeFlags: C,
            shouldHideMediaOptions: y = !1,
            transitionState: I,
            ...x
        } = e,
        [M, O] = i.useState(f ?? 0),
        [N, R] = i.useState(!1),
        [b, v] = (0, o.zhh)(() => ({
            scale: u.A.useReducedMotion ? 1 : 0.9,
            x: 0,
            y: 0,
            config: { friction: 30, tension: 300 },
        })),
        D = i.useRef(null);
    i.useEffect(() => {
        if (null != t)
            return (
                m._.subscribe(g.jej.MEDIA_MODAL_CLOSE, t),
                () => {
                    m._.unsubscribe(g.jej.MEDIA_MODAL_CLOSE, t);
                }
            );
    }, [t]);
    let j = i.useRef(null);
    i.useEffect(() => {
        if (I !== j.current)
            switch (((j.current = I), I)) {
                case o.ip4.ENTERING:
                    S(b.scale, 1);
                    break;
                case o.ip4.EXITING:
                    u.A.useReducedMotion || (S(b.x, 0), S(b.y, 0), S(b.scale, 0.9));
            }
    }, [I, b]),
        I === o.ip4.HIDDEN && N && (R(!1), b.x.set(0), b.y.set(0), b.scale.set(1)),
        i.useEffect(() => {
            I === o.ip4.ENTERED && (d.A.disable(), d.A.enableTemp(c.w)),
                I === o.ip4.HIDDEN && (d.A.disable(), d.A.enableTemp(c.b));
            let e = () => {
                    d.A.disable(), I === o.ip4.ENTERED ? d.A.enableTemp(c.w) : d.A.enableTemp(c.b);
                },
                t = () => {
                    d.A.disableTemp();
                },
                a = D.current?.ownerDocument?.defaultView;
            return (
                a?.addEventListener("focus", e),
                a?.addEventListener("blur", t),
                () => {
                    a?.removeEventListener("focus", e), a?.removeEventListener("blur", t), d.A.disableTemp();
                }
            );
        }, [I]);
    let L = i.useCallback(
            (e) => {
                O(e), a?.(e), _.l.markActionPerformed(_.N.SELECTED_ITEM_CHANGE);
            },
            [a],
        ),
        w = i.useMemo(
            () => ({
                scale: b.scale,
                x: b.x,
                y: b.y,
                setScale(e, t) {
                    S(b.scale, e, t?.immediate);
                },
                setOffset(e, t, a) {
                    S(b.x, e, a?.immediate), S(b.y, t, a?.immediate);
                },
                zoomed: N,
                setZoomed(e) {
                    R(e), S(b.scale, e ? 2.5 : 1), e || (S(b.x, 0), S(b.y, 0));
                },
            }),
            [N, b],
        );
    return (0, n.jsx)(o.NPJ, {
        theme: g.NJ8.MIDNIGHT,
        children: (e) =>
            (0, n.jsx)(o.EOs, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: s()(T.O, e),
                transitionState: I,
                ...x,
                size: o.rIJ.DYNAMIC,
                animation: r.WM.SUBTLE,
                fullscreenOnMobile: !1,
                onClick: t,
                "aria-label": E.intl.string(E.t.AMTX3j),
                parentComponent: "MediaViewerModal",
                children: (0, n.jsxs)(p.f.Provider, {
                    value: w,
                    children: [
                        (0, n.jsx)(h.A, { item: l[M], hideMediaOptions: y, onClose: t }),
                        (0, n.jsx)("div", { style: { display: "none" }, ref: D }),
                        (0, n.jsx)(A.Ay, {
                            items: l,
                            startIndex: M,
                            onIndexChange: L,
                            enabledContentHarmTypeFlags: C,
                            shouldHideMediaOptions: y,
                        }),
                    ],
                }),
            }),
    });
}
