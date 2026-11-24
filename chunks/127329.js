n.d(t, { A: () => R });
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
    g = n(172218),
    h = n(918467),
    E = n(604913),
    p = n(65238),
    f = n(129230),
    x = n(669470),
    C = n(198329),
    A = n(504820),
    v = n(652215),
    b = n(135996),
    L = n(987421),
    _ = n(792996),
    y = n(102087);
let I = { [C.te.UP]: y.Vd, [C.te.LEFT]: y.z4 };
function S(e) {
    let [t, n] = r.useState(null),
        l = r.useCallback(() => n(e), [e]);
    return [e !== t ? e : null, l];
}
let k = (e) => {
        let { day: t } = e;
        return (0, l.jsx)("span", {
            className: y.U$,
            "aria-hidden": "true",
            children: (0, l.jsx)(u.E, {
                className: y.Le,
                variant: "heading-sm/medium",
                color: "none",
                tag: "span",
                children: t,
            }),
        });
    },
    j = (e) => {
        let { skuId: t, tilePosition: n, listItemProps: s } = e,
            a = r.useMemo(() => ({ tilePosition: n }), [n]);
        return null == t
            ? null
            : (0, l.jsx)(m.R9, { newValue: a, children: (0, l.jsx)(L.A, { skuId: t, listItemProps: s }) });
    },
    N = (e) => {
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
                    className: y.vj,
                    children: [
                        null != n &&
                            (0, l.jsx)("img", {
                                className: a()(y.LY, y.nu),
                                src: n,
                                alt: "",
                                draggable: !1,
                                onError: s,
                            }),
                        null != r &&
                            (0, l.jsx)("img", {
                                className: a()(y.LY, y.nu, y.qC),
                                src: r,
                                alt: "",
                                draggable: !1,
                                onError: i,
                            }),
                        !d && (0, l.jsx)(k, { day: t }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: a()(y.a7, { [y.u0]: m }),
                    children: [
                        d && (0, l.jsx)(k, { day: t }),
                        (0, l.jsx)(c.$, {
                            ...u,
                            variant: "overlay-primary",
                            fullWidth: !0,
                            text: _.intl.string(_.t["1PdKvg"]),
                            "aria-label": _.intl.formatToPlainString(_.t.zzDQv3, { day: t }),
                            onClick: o,
                        }),
                    ],
                }),
            ],
        });
    },
    O = (e) => {
        let {
                day: t,
                revealDate: n,
                lockedAssetUrl: r,
                hintAssetUrl: s,
                onLockedAssetError: i,
                onHintAssetError: o,
                listItemProps: c,
            } = e,
            d = null != n ? (0, C.Hm)(n, _.intl.currentLocale) : null;
        return (0, l.jsxs)("div", {
            tabIndex: 0,
            ...c,
            className: y.TW,
            role: "img",
            "aria-label":
                null != d
                    ? _.intl.formatToPlainString(_.t.jz3aVY, { day: t, date: d })
                    : _.intl.formatToPlainString(_.t.EeYnVZ, { day: t }),
            children: [
                null != r && (0, l.jsx)("img", { className: y.LY, src: r, alt: "", draggable: !1, onError: i }),
                null != s &&
                    (0, l.jsx)("img", { className: a()(y.LY, y.qC), src: s, alt: "", draggable: !1, onError: o }),
                (0, l.jsx)(k, { day: t }),
                null != d &&
                    (0, l.jsx)("span", {
                        className: y._J,
                        "aria-hidden": "true",
                        children: (0, l.jsx)(u.E, {
                            variant: "body-md/medium",
                            color: "none",
                            tag: "span",
                            lineClamp: 2,
                            children: _.intl.formatToPlainString(_.t.GwQvTT, { date: d }),
                        }),
                    }),
            ],
        });
    },
    T = (e) => {
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
                onReveal: g,
                onComplete: h,
            } = e,
            E = r.useRef(null),
            p = r.useRef(null),
            f = r.useCallback(() => {
                null == p.current && (p.current = setTimeout(h, 4250));
            }, [h]);
        r.useEffect(() => {
            let e = E.current;
            null != e && e.complete && e.naturalWidth > 0 && f();
            let t = setTimeout(h, 9250);
            return () => {
                (clearTimeout(t), null != p.current && (clearTimeout(p.current), (p.current = null)));
            };
        }, [f, h]);
        let x = r.useCallback(
            (e) => {
                null == o && e.target === e.currentTarget && h();
            },
            [o, h],
        );
        return (0, l.jsxs)("div", {
            className: y.qx,
            "aria-hidden": "true",
            inert: !0,
            children: [
                null != i && (0, l.jsx)("img", { className: a()(y.LY, y.QH), src: i, alt: "", draggable: !1 }),
                (0, l.jsx)("div", {
                    className: a()(y.Dx, I[u]),
                    onAnimationEnd: x,
                    children: (0, l.jsx)(N, {
                        day: t,
                        lockedAssetUrl: n,
                        hintAssetUrl: s,
                        onLockedAssetError: d,
                        onHintAssetError: m,
                        onReveal: g,
                        isNumberAboveButton: c,
                        hasIdleAnimation: null != i,
                    }),
                }),
                null != o &&
                    (0, l.jsx)("img", {
                        ref: E,
                        className: y.LY,
                        src: o,
                        alt: "",
                        draggable: !1,
                        onLoad: f,
                        onError: h,
                    }),
            ],
        });
    },
    R = (e) => {
        let t,
            {
                day: n,
                collectionId: s,
                surface: u,
                state: c,
                cardShape: m,
                isHintCentered: L = !1,
                skuId: _,
                lockedAssetUrl: I,
                hintAssetUrl: k,
                idleAnimationUrl: R,
                revealAnimationUrl: D,
                tilePosition: P,
                revealDate: M = null,
                aspectRatio: B,
                className: w,
                style: H,
                tag: U = "li",
                listItemProps: G,
                onReveal: F,
            } = e,
            $ = r.useMemo(() => ({ ...H, "--custom-calendar-tile-aspect-ratio": B }), [H, B]),
            [V, K] = S(I),
            [W, z] = S(k),
            Y = (0, o.bG)([d.Ay], () => d.Ay.useReducedMotion),
            [q, X] = S(R),
            [Q, Z] = r.useState(!1),
            J = r.useCallback(() => Z(!1), []);
        Y && Q && Z(!1);
        let { tileRef: ee, trackRevealClick: et } = (function (e) {
                let { collectionId: t, position: n, surface: l, tileState: s } = e,
                    a = r.useRef(null),
                    i = r.useRef(!1),
                    o = (s === C.k$.OPENABLE || s === C.k$.HINT) && null != t,
                    u = r.useCallback(
                        (e) => {
                            if (null == t) return;
                            let r = (0, x.bY)(h.A.getPromotionsForApplication(v.FYj), t, Date.now()),
                                a = (0, p.d3)(r)?.position === n;
                            f.default.track(v.HAw.SHOP_SEQUENCED_OFFER_PROMOTION_ACTION, {
                                promotion_id: a ? r?.id : null,
                                promotion_type: E.hE.COLLECTION_SEQUENCED_OFFER,
                                position: n,
                                surface: l,
                                action: e,
                                tile_state: s,
                            });
                        },
                        [t, n, l, s],
                    ),
                    c = r.useCallback(() => u(A.E.REVEAL_BUTTON_CLICKED), [u]),
                    d = r.useCallback(() => {
                        null != a.current && (clearTimeout(a.current), (a.current = null));
                    }, []),
                    m = (0, g.K)(
                        (e) => {
                            if (!e) {
                                ((i.current = !1), d());
                                return;
                            }
                            i.current ||
                                null != a.current ||
                                (a.current = setTimeout(() => {
                                    (u(A.E.TILE_VIEWED), (i.current = !0), (a.current = null));
                                }, 1e3));
                        },
                        0.5,
                        o,
                    );
                return (
                    r.useEffect(() => {
                        o || ((i.current = !1), d());
                    }, [o, d]),
                    r.useEffect(() => d, [d]),
                    { tileRef: m, trackRevealClick: c }
                );
            })({ collectionId: s, position: n, surface: u, tileState: c }),
            en = r.useRef(!1),
            el = r.useCallback(() => {
                ((en.current = !0), Z(!Y), et(), F());
            }, [F, Y, et]);
        r.useEffect(() => {
            if (c !== C.k$.REVEALED || !en.current) return;
            en.current = !1;
            let e = ee.current,
                t = Array.from(
                    e?.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])') ?? [],
                ).find((e) => null == e.closest("[inert]"));
            (t ?? e)?.focus();
        }, [c, ee]);
        let er = m === i.G.LARGE_SQUARE;
        switch (c) {
            case C.k$.REVEALED:
                t = (0, l.jsx)(j, { skuId: _, tilePosition: P, listItemProps: G });
                break;
            case C.k$.OPENABLE:
                t = (0, l.jsx)(N, {
                    day: n,
                    lockedAssetUrl: V,
                    hintAssetUrl: W,
                    onLockedAssetError: K,
                    onHintAssetError: z,
                    onReveal: el,
                    listItemProps: G,
                    isNumberAboveButton: er,
                    hasIdleAnimation: null != q,
                });
                break;
            case C.k$.HINT:
            case C.k$.LOCKED:
                t = (0, l.jsx)(O, {
                    day: n,
                    revealDate: M,
                    lockedAssetUrl: V,
                    hintAssetUrl: c === C.k$.HINT ? W : null,
                    onLockedAssetError: K,
                    onHintAssetError: z,
                    listItemProps: G,
                });
        }
        let es = c === C.k$.REVEALED,
            ea = c === C.k$.OPENABLE,
            ei = ea && !Y && null != D;
        return (
            r.useEffect(() => {
                ei && null != D && (new Image().src = D);
            }, [ei, D]),
            (0, l.jsxs)(U, {
                ref: ee,
                className: a()(y.Vs, { [y.Ml]: es, [y.Zk]: ea, [y.Jl]: er, [y.W_]: L }, w),
                style: $,
                tabIndex: es ? -1 : void 0,
                children: [
                    ea &&
                        null != q &&
                        (Y
                            ? (0, l.jsx)(b.A, { src: q, className: a()(y.LY, y.Jn), onError: X })
                            : (0, l.jsx)("img", {
                                  className: a()(y.LY, y.Jn),
                                  src: q,
                                  alt: "",
                                  draggable: !1,
                                  onError: X,
                              })),
                    t,
                    es &&
                        Q &&
                        !Y &&
                        (0, l.jsx)(T, {
                            day: n,
                            lockedAssetUrl: V,
                            hintAssetUrl: W,
                            idleAnimationUrl: q,
                            revealAnimationUrl: D,
                            slideDirection: (0, C.BZ)(m),
                            isNumberAboveButton: er,
                            onLockedAssetError: K,
                            onHintAssetError: z,
                            onReveal: el,
                            onComplete: J,
                        }),
                ],
            })
        );
    };
