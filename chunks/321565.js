n.d(t, { default: () => g });
var i = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(935462),
    o = n(397927),
    c = n(707685),
    d = n(775121),
    u = n(775602),
    m = n(203982),
    _ = n(700331),
    p = n(454290),
    E = n(369254),
    A = n(847816),
    f = n(652215),
    S = n(985018),
    h = n(285953);
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    !0 === n || u.A.useReducedMotion ? e.set(t) : e.start(t);
}
function g(e) {
    let {
            onClose: t,
            items: n,
            startingIndex: s,
            enabledContentHarmTypeFlags: g,
            shouldHideMediaOptions: O = !1,
            transitionState: y,
            ...C
        } = e,
        [I, b] = a.useState(s ?? 0),
        [D, R] = a.useState(!1),
        [N, M] = (0, o.zhh)(() => ({
            scale: u.A.useReducedMotion ? 1 : 0.9,
            x: 0,
            y: 0,
            config: { friction: 30, tension: 300 },
        })),
        x = a.useRef(null);
    a.useEffect(() => {
        if (null != t)
            return (
                m._.subscribe(f.jej.MEDIA_MODAL_CLOSE, t),
                () => {
                    m._.unsubscribe(f.jej.MEDIA_MODAL_CLOSE, t);
                }
            );
    }, [t]),
        a.useEffect(() => {
            y === o.ip4.ENTERING && T(N.scale, 1),
                y === o.ip4.ENTERED && (d.A.disable(), d.A.enableTemp(c.w)),
                y === o.ip4.HIDDEN && (T(N.scale, 0.9), d.A.disable(), d.A.enableTemp(c.b)),
                y === o.ip4.EXITING && T(N.scale, 0.9);
            let e = () => {
                    d.A.disable(), y === o.ip4.ENTERED ? d.A.enableTemp(c.w) : d.A.enableTemp(c.b);
                },
                t = () => {
                    d.A.disableTemp();
                },
                n = x.current?.ownerDocument?.defaultView;
            return (
                n?.addEventListener("focus", e),
                n?.addEventListener("blur", t),
                () => {
                    n?.removeEventListener("focus", e), n?.removeEventListener("blur", t), d.A.disableTemp();
                }
            );
        }, [y, N]);
    let j = a.useCallback((e) => {
            b(e), _.l.markActionPerformed(_.N.SELECTED_ITEM_CHANGE);
        }, []),
        v = a.useMemo(
            () => ({
                scale: N.scale,
                x: N.x,
                y: N.y,
                setScale(e, t) {
                    T(N.scale, e, t?.immediate);
                },
                setOffset(e, t, n) {
                    T(N.x, e, n?.immediate), T(N.y, t, n?.immediate);
                },
                zoomed: D,
                setZoomed(e) {
                    R(e), T(N.scale, e ? 2.5 : 1), e || (T(N.x, 0), T(N.y, 0));
                },
            }),
            [D, N],
        );
    return (0, i.jsx)(o.NPJ, {
        theme: f.NJ8.MIDNIGHT,
        children: (e) =>
            (0, i.jsx)(o.EOs, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: l()(h.O, e),
                transitionState: y,
                ...C,
                size: o.rIJ.DYNAMIC,
                animation: r.WM.SUBTLE,
                fullscreenOnMobile: !1,
                onClick: t,
                "aria-label": S.intl.string(S.t.AMTX3j),
                parentComponent: "MediaViewerModal",
                children: (0, i.jsxs)(p.f.Provider, {
                    value: v,
                    children: [
                        (0, i.jsx)(A.A, { item: n[I], hideMediaOptions: O, onClose: t }),
                        (0, i.jsx)("div", { style: { display: "none" }, ref: x }),
                        (0, i.jsx)(E.Ay, {
                            items: n,
                            startIndex: I,
                            onIndexChange: j,
                            enabledContentHarmTypeFlags: g,
                            shouldHideMediaOptions: O,
                        }),
                    ],
                }),
            }),
    });
}
