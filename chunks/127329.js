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
    h = n(172218),
    g = n(918467),
    E = n(604913),
    f = n(65238),
    p = n(129230),
    x = n(669470),
    C = n(198329),
    v = n(504820),
    A = n(652215),
    L = n(135996),
    y = n(987421),
    b = n(792996),
    _ = n(102087);
let I = { [C.te.UP]: _.Vd, [C.te.LEFT]: _.z4 };
function S(e) {
    let [t, n] = r.useState(null),
        l = r.useCallback(() => n(e), [e]);
    return [e !== t ? e : null, l];
}
let N = (e) => {
        let { day: t } = e;
        return (0, l.jsx)("span", {
            className: _.U$,
            "aria-hidden": "true",
            children: (0, l.jsx)(u.E, {
                className: _.Le,
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
            : (0, l.jsx)(m.R9, {
                  newValue: a,
                  children: (0, l.jsx)(y.A, { skuId: t, listItemProps: s, cardClassName: _.QW }),
              });
    },
    k = (e) => {
        let {
                day: t,
                lockedAssetUrl: n,
                hintAssetUrl: s,
                onLockedAssetError: i,
                onHintAssetError: o,
                onReveal: u,
                listItemProps: d,
                isNumberAboveButton: m,
                hasIdleAnimation: h,
                doorRef: g,
            } = e,
            E = r.useCallback(
                (e) => {
                    (e.stopPropagation(), u());
                },
                [u],
            );
        return (0, l.jsxs)("div", {
            className: _.$N,
            children: [
                (0, l.jsxs)("div", {
                    ref: g,
                    className: _.vj,
                    children: [
                        null != n &&
                            (0, l.jsx)("img", {
                                className: a()(_.LY, _.nu),
                                src: n,
                                alt: "",
                                draggable: !1,
                                onError: i,
                            }),
                        null != s &&
                            (0, l.jsx)("img", {
                                className: a()(_.LY, _.nu, _.qC),
                                src: s,
                                alt: "",
                                draggable: !1,
                                onError: o,
                            }),
                        !m && (0, l.jsx)(N, { day: t }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: a()(_.a7, { [_.u0]: h }),
                    children: [
                        m && (0, l.jsx)(N, { day: t }),
                        (0, l.jsx)("div", {
                            className: _.Si,
                            children: (0, l.jsx)(c.$, {
                                ...d,
                                variant: "overlay-primary",
                                fullWidth: !0,
                                text: b.intl.string(b.t["1PdKvg"]),
                                "aria-label": b.intl.formatToPlainString(b.t.zzDQv3, { day: t }),
                                onClick: E,
                            }),
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
            d = null != n ? (0, C.Hm)(n, b.intl.currentLocale) : null;
        return (0, l.jsxs)("div", {
            tabIndex: 0,
            ...c,
            className: _.TW,
            role: "img",
            "aria-label":
                null != d
                    ? b.intl.formatToPlainString(b.t.jz3aVY, { day: t, date: d })
                    : b.intl.formatToPlainString(b.t.EeYnVZ, { day: t }),
            children: [
                null != r && (0, l.jsx)("img", { className: _.LY, src: r, alt: "", draggable: !1, onError: i }),
                null != s &&
                    (0, l.jsx)("img", { className: a()(_.LY, _.qC), src: s, alt: "", draggable: !1, onError: o }),
                (0, l.jsx)(N, { day: t }),
                null != d &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)("span", { className: _.Cx, "aria-hidden": "true" }),
                            (0, l.jsx)("span", {
                                className: _._J,
                                "aria-hidden": "true",
                                children: (0, l.jsx)(u.E, {
                                    variant: "body-md/medium",
                                    color: "none",
                                    tag: "span",
                                    lineClamp: 2,
                                    children: b.intl.formatToPlainString(b.t.GwQvTT, { date: d }),
                                }),
                            }),
                        ],
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
                onReveal: h,
                onComplete: g,
                doorStartTransform: E,
            } = e,
            f = r.useMemo(() => ({ "--custom-calendar-door-start-transform": E }), [E]),
            p = r.useRef(null),
            x = r.useRef(null),
            C = r.useCallback(() => {
                null == x.current && (x.current = setTimeout(g, 4250));
            }, [g]);
        r.useEffect(() => {
            let e = p.current;
            null != e && e.complete && e.naturalWidth > 0 && C();
            let t = setTimeout(g, 9250);
            return () => {
                (clearTimeout(t), null != x.current && (clearTimeout(x.current), (x.current = null)));
            };
        }, [C, g]);
        let v = r.useCallback(
            (e) => {
                null == o && e.target === e.currentTarget && g();
            },
            [o, g],
        );
        return (0, l.jsxs)("div", {
            className: _.qx,
            "aria-hidden": "true",
            inert: !0,
            children: [
                null != i && (0, l.jsx)("img", { className: a()(_.LY, _.QH), src: i, alt: "", draggable: !1 }),
                (0, l.jsx)("div", {
                    className: a()(_.Dx, I[u]),
                    style: f,
                    onAnimationEnd: v,
                    children: (0, l.jsx)(k, {
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
                null != o &&
                    (0, l.jsx)("img", {
                        ref: p,
                        className: _.LY,
                        src: o,
                        alt: "",
                        draggable: !1,
                        onLoad: C,
                        onError: g,
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
                isHintCentered: y = !1,
                skuId: b,
                lockedAssetUrl: I,
                hintAssetUrl: N,
                idleAnimationUrl: R,
                revealAnimationUrl: D,
                tilePosition: P,
                revealDate: M = null,
                aspectRatio: w,
                className: B,
                style: H,
                tag: U = "li",
                listItemProps: G,
                onReveal: F,
            } = e,
            $ = r.useMemo(() => ({ ...H, "--custom-calendar-tile-aspect-ratio": w }), [H, w]),
            [V, K] = S(I),
            [W, Y] = S(N),
            z = (0, o.bG)([d.Ay], () => d.Ay.useReducedMotion),
            [q, X] = S(R),
            [Q, Z] = r.useState(!1),
            J = r.useCallback(() => Z(!1), []);
        z && Q && Z(!1);
        let { tileRef: ee, trackRevealClick: et } = (function (e) {
                let { collectionId: t, position: n, surface: l, tileState: s } = e,
                    a = r.useRef(null),
                    i = r.useRef(!1),
                    o = (s === C.k$.OPENABLE || s === C.k$.HINT) && null != t,
                    u = r.useCallback(
                        (e) => {
                            if (null == t) return;
                            let r = (0, x.bY)(g.A.getPromotionsForApplication(A.FYj), t, Date.now()),
                                a = (0, f.d3)(r)?.position === n;
                            p.default.track(A.HAw.SHOP_SEQUENCED_OFFER_PROMOTION_ACTION, {
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
                    c = r.useCallback(() => u(v.E.REVEAL_BUTTON_CLICKED), [u]),
                    d = r.useCallback(() => {
                        null != a.current && (clearTimeout(a.current), (a.current = null));
                    }, []),
                    m = (0, h.K)(
                        (e) => {
                            if (!e) {
                                ((i.current = !1), d());
                                return;
                            }
                            i.current ||
                                null != a.current ||
                                (a.current = setTimeout(() => {
                                    (u(v.E.TILE_VIEWED), (i.current = !0), (a.current = null));
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
            el = r.useRef(null),
            [er, es] = r.useState("none"),
            ea = r.useCallback(() => {
                en.current = !0;
                let e = el.current;
                (es(null != e ? (0, C.N4)(getComputedStyle(e).transform) : "none"), Z(!z), et(), F());
            }, [F, z, et]);
        r.useEffect(() => {
            if (c !== C.k$.REVEALED || !en.current) return;
            en.current = !1;
            let e = ee.current,
                t = Array.from(
                    e?.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])') ?? [],
                ).find((e) => null == e.closest("[inert]"));
            (t ?? e)?.focus();
        }, [c, ee]);
        let ei = m === i.G.LARGE_SQUARE;
        switch (c) {
            case C.k$.REVEALED:
                t = (0, l.jsx)(j, { skuId: b, tilePosition: P, listItemProps: G });
                break;
            case C.k$.OPENABLE:
                t = (0, l.jsx)(k, {
                    day: n,
                    lockedAssetUrl: V,
                    hintAssetUrl: W,
                    onLockedAssetError: K,
                    onHintAssetError: Y,
                    onReveal: ea,
                    listItemProps: G,
                    doorRef: el,
                    isNumberAboveButton: ei,
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
                    onHintAssetError: Y,
                    listItemProps: G,
                });
        }
        let eo = c === C.k$.REVEALED,
            eu = c === C.k$.OPENABLE,
            ec = eu && !z && null != D;
        return (
            r.useEffect(() => {
                ec && null != D && (new Image().src = D);
            }, [ec, D]),
            (0, l.jsxs)(U, {
                ref: ee,
                className: a()(_.Vs, { [_.Ml]: eo, [_.Zk]: eu, [_.Jl]: ei, [_.W_]: y }, B),
                style: $,
                tabIndex: eo ? -1 : void 0,
                onClick: eu ? ea : void 0,
                children: [
                    eu &&
                        null != q &&
                        (z
                            ? (0, l.jsx)(L.A, { src: q, className: a()(_.LY, _.Jn), onError: X })
                            : (0, l.jsx)("img", {
                                  className: a()(_.LY, _.Jn),
                                  src: q,
                                  alt: "",
                                  draggable: !1,
                                  onError: X,
                              })),
                    t,
                    eo &&
                        Q &&
                        !z &&
                        (0, l.jsx)(T, {
                            day: n,
                            lockedAssetUrl: V,
                            hintAssetUrl: W,
                            idleAnimationUrl: q,
                            revealAnimationUrl: D,
                            slideDirection: (0, C.BZ)(m),
                            isNumberAboveButton: ei,
                            onLockedAssetError: K,
                            onHintAssetError: Y,
                            onReveal: ea,
                            onComplete: J,
                            doorStartTransform: er,
                        }),
                ],
            })
        );
    };
