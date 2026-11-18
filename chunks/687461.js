var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    i = n(690352),
    o = n(855986),
    u = n(834730),
    c = n(821609),
    d = n(775602),
    m = n(857512),
    h = n(135996),
    g = n(987421),
    E = n(198329),
    p = n(792996),
    f = n(102087);
let x = { [E.te.UP]: f.Vd, [E.te.LEFT]: f.z4 };
function A(e) {
    let [t, n] = r.useState(null),
        l = r.useCallback(() => n(e), [e]);
    return [e !== t ? e : null, l];
}
let v = (e) => {
        let { day: t } = e;
        return (0, l.jsx)("span", {
            className: f.U$,
            "aria-hidden": "true",
            children: (0, l.jsx)(u.E, {
                className: f.Le,
                variant: "heading-sm/medium",
                color: "none",
                tag: "span",
                children: t,
            }),
        });
    },
    C = (e) => {
        let { skuId: t, tilePosition: n, listItemProps: s } = e,
            a = r.useMemo(() => ({ tilePosition: n }), [n]);
        return null == t
            ? null
            : (0, l.jsx)(m.R9, { newValue: a, children: (0, l.jsx)(g.A, { skuId: t, listItemProps: s }) });
    },
    y = (e) => {
        let {
            day: t,
            lockedAssetUrl: n,
            hintAssetUrl: r,
            onLockedAssetError: s,
            onHintAssetError: i,
            onReveal: o,
            listItemProps: u,
            isNumberAboveButton: d,
            hasIdleAnimation: m,
        } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: f.vj,
                    children: [
                        null != n && (0, l.jsx)("img", { className: a()(f.LY, f.nu), src: n, alt: "", onError: s }),
                        null != r &&
                            (0, l.jsx)("img", { className: a()(f.LY, f.nu, f.qC), src: r, alt: "", onError: i }),
                        !d && (0, l.jsx)(v, { day: t }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: a()(f.a7, { [f.u0]: m }),
                    children: [
                        d && (0, l.jsx)(v, { day: t }),
                        (0, l.jsx)(c.$, {
                            ...u,
                            variant: "overlay-primary",
                            fullWidth: !0,
                            text: p.intl.string(p.t["1PdKvg"]),
                            "aria-label": p.intl.formatToPlainString(p.t.zzDQv3, { day: t }),
                            onClick: o,
                        }),
                    ],
                }),
            ],
        });
    },
    L = (e) => {
        let {
                day: t,
                revealDate: n,
                lockedAssetUrl: r,
                hintAssetUrl: s,
                onLockedAssetError: i,
                onHintAssetError: o,
                listItemProps: c,
            } = e,
            d = null != n ? (0, E.Hm)(n, p.intl.currentLocale) : null;
        return (0, l.jsxs)("div", {
            ...c,
            className: f.TW,
            role: "img",
            "aria-label":
                null != d
                    ? p.intl.formatToPlainString(p.t.jz3aVY, { day: t, date: d })
                    : p.intl.formatToPlainString(p.t.EeYnVZ, { day: t }),
            children: [
                null != r && (0, l.jsx)("img", { className: f.LY, src: r, alt: "", onError: i }),
                null != s && (0, l.jsx)("img", { className: a()(f.LY, f.qC), src: s, alt: "", onError: o }),
                (0, l.jsx)(v, { day: t }),
                null != d &&
                    (0, l.jsx)("span", {
                        className: f._J,
                        "aria-hidden": "true",
                        children: (0, l.jsx)(u.E, {
                            variant: "body-md/medium",
                            color: "none",
                            tag: "span",
                            lineClamp: 2,
                            children: p.intl.formatToPlainString(p.t.GwQvTT, { date: d }),
                        }),
                    }),
            ],
        });
    },
    _ = (e) => {
        let {
                day: t,
                lockedAssetUrl: n,
                hintAssetUrl: s,
                idleAnimationUrl: i,
                revealAnimationUrl: o,
                slideDirection: u,
                isNumberAboveButton: c,
                onLockedAssetError: d,
                onHintAssetError: m,
                onReveal: h,
                onComplete: g,
            } = e,
            E = r.useRef(null),
            p = r.useRef(null),
            A = r.useCallback(() => {
                null == p.current && (p.current = setTimeout(g, 4250));
            }, [g]);
        r.useEffect(() => {
            let e = E.current;
            null != e && e.complete && e.naturalWidth > 0 && A();
            let t = setTimeout(g, 9250);
            return () => {
                (clearTimeout(t), null != p.current && (clearTimeout(p.current), (p.current = null)));
            };
        }, [A, g]);
        let v = r.useCallback(
            (e) => {
                null == o && e.target === e.currentTarget && g();
            },
            [o, g],
        );
        return (0, l.jsxs)("div", {
            className: f.qx,
            "aria-hidden": "true",
            inert: !0,
            children: [
                null != i && (0, l.jsx)("img", { className: a()(f.LY, f.QH), src: i, alt: "" }),
                (0, l.jsx)("div", {
                    className: a()(f.Dx, x[u]),
                    onAnimationEnd: v,
                    children: (0, l.jsx)(y, {
                        day: t,
                        lockedAssetUrl: n,
                        hintAssetUrl: s,
                        onLockedAssetError: d,
                        onHintAssetError: m,
                        onReveal: h,
                        isNumberAboveButton: c,
                        hasIdleAnimation: null != i,
                    }),
                }),
                null != o && (0, l.jsx)("img", { ref: E, className: f.LY, src: o, alt: "", onLoad: A, onError: g }),
            ],
        });
    };
n.d(
    t,
    {},
    {
        A: (e) => {
            let t,
                {
                    day: n,
                    state: s,
                    cardShape: u,
                    isHintCentered: c = !1,
                    skuId: m,
                    lockedAssetUrl: g,
                    hintAssetUrl: p,
                    idleAnimationUrl: x,
                    revealAnimationUrl: v,
                    tilePosition: b,
                    revealDate: S = null,
                    aspectRatio: I,
                    className: j,
                    style: k,
                    tag: N = "li",
                    listItemProps: O,
                    onReveal: R,
                } = e,
                T = r.useMemo(() => ({ ...k, "--custom-calendar-tile-aspect-ratio": I }), [k, I]),
                [D, P] = A(g),
                [M, w] = A(p),
                B = (0, o.bG)([d.Ay], () => d.Ay.useReducedMotion),
                [H, U] = A(x),
                [G, F] = r.useState(!1),
                $ = r.useCallback(() => F(!1), []);
            B && G && F(!1);
            let V = r.useRef(null),
                K = r.useRef(!1),
                W = r.useCallback(() => {
                    ((K.current = !0), F(!B), R());
                }, [R, B]);
            r.useEffect(() => {
                if (s !== E.k$.REVEALED || !K.current) return;
                K.current = !1;
                let e = V.current,
                    t = Array.from(
                        e?.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])') ?? [],
                    ).find((e) => null == e.closest("[inert]"));
                (t ?? e)?.focus();
            }, [s]);
            let z = u === i.G.LARGE_SQUARE;
            switch (s) {
                case E.k$.REVEALED:
                    t = (0, l.jsx)(C, { skuId: m, tilePosition: b, listItemProps: O });
                    break;
                case E.k$.OPENABLE:
                    t = (0, l.jsx)(y, {
                        day: n,
                        lockedAssetUrl: D,
                        hintAssetUrl: M,
                        onLockedAssetError: P,
                        onHintAssetError: w,
                        onReveal: W,
                        listItemProps: O,
                        isNumberAboveButton: z,
                        hasIdleAnimation: null != H,
                    });
                    break;
                case E.k$.HINT:
                case E.k$.LOCKED:
                    t = (0, l.jsx)(L, {
                        day: n,
                        revealDate: S,
                        lockedAssetUrl: D,
                        hintAssetUrl: s === E.k$.HINT ? M : null,
                        onLockedAssetError: P,
                        onHintAssetError: w,
                        listItemProps: O,
                    });
            }
            let Y = s === E.k$.REVEALED,
                q = s === E.k$.OPENABLE,
                X = q && !B && null != v;
            return (
                r.useEffect(() => {
                    X && null != v && (new Image().src = v);
                }, [X, v]),
                (0, l.jsxs)(N, {
                    ref: V,
                    className: a()(f.Vs, { [f.Ml]: Y, [f.Zk]: q, [f.Jl]: z, [f.W_]: c }, j),
                    style: T,
                    tabIndex: Y ? -1 : void 0,
                    children: [
                        q &&
                            null != H &&
                            (B
                                ? (0, l.jsx)(h.A, { src: H, className: a()(f.LY, f.Jn), onError: U })
                                : (0, l.jsx)("img", { className: a()(f.LY, f.Jn), src: H, alt: "", onError: U })),
                        t,
                        Y &&
                            G &&
                            !B &&
                            (0, l.jsx)(_, {
                                day: n,
                                lockedAssetUrl: D,
                                hintAssetUrl: M,
                                idleAnimationUrl: H,
                                revealAnimationUrl: v,
                                slideDirection: (0, E.BZ)(u),
                                isNumberAboveButton: z,
                                onLockedAssetError: P,
                                onHintAssetError: w,
                                onReveal: W,
                                onComplete: $,
                            }),
                    ],
                })
            );
        },
    },
);
