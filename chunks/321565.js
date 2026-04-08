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
    T = a(851187);
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
        [N, b] = i.useState(!1),
        [R, v] = (0, o.zhh)(() => ({
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
    }, [t]),
        i.useEffect(() => {
            I === o.ip4.ENTERING && S(R.scale, 1),
                I === o.ip4.ENTERED && (d.A.disable(), d.A.enableTemp(c.w)),
                I === o.ip4.HIDDEN && (S(R.scale, 0.9), d.A.disable(), d.A.enableTemp(c.b)),
                I === o.ip4.EXITING && S(R.scale, 0.9);
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
        }, [I, R]);
    let j = i.useCallback(
            (e) => {
                O(e), a?.(e), _.l.markActionPerformed(_.N.SELECTED_ITEM_CHANGE);
            },
            [a],
        ),
        L = i.useMemo(
            () => ({
                scale: R.scale,
                x: R.x,
                y: R.y,
                setScale(e, t) {
                    S(R.scale, e, t?.immediate);
                },
                setOffset(e, t, a) {
                    S(R.x, e, a?.immediate), S(R.y, t, a?.immediate);
                },
                zoomed: N,
                setZoomed(e) {
                    b(e), S(R.scale, e ? 2.5 : 1), e || (S(R.x, 0), S(R.y, 0));
                },
            }),
            [N, R],
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
                    value: L,
                    children: [
                        (0, n.jsx)(h.A, { item: l[M], hideMediaOptions: y, onClose: t }),
                        (0, n.jsx)("div", { style: { display: "none" }, ref: D }),
                        (0, n.jsx)(A.Ay, {
                            items: l,
                            startIndex: M,
                            onIndexChange: j,
                            enabledContentHarmTypeFlags: C,
                            shouldHideMediaOptions: y,
                        }),
                    ],
                }),
            }),
    });
}
