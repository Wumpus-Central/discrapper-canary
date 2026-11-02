s.d(l, { A: () => D });
var t = s(477900),
    n = s(582128),
    i = s(503698),
    r = s.n(i),
    a = s(17928),
    u = s(269115),
    c = s(821609),
    o = s(534514),
    d = s(834730),
    m = s(406810),
    g = s(43990),
    h = s(688810),
    x = s(812095),
    p = s(197935),
    k = s(733391),
    f = s(439303),
    v = s(832163),
    C = s(317560),
    I = s(467884),
    j = s(174459),
    _ = s(371794),
    N = s(440938);
s(321073);
var E = s(52133),
    S = s(435658),
    y = s(820847),
    b = s(862772),
    L = s(287809),
    A = s(67480);
function w(e, l) {
    return e.isFetching === l.isFetching && (0, E.v)(e.loadedSkuIds, l.loadedSkuIds);
}
var M = s(652215),
    O = s(188275),
    R = s(105292),
    T = s(867595);
let P = (e) => {
    let { skuId: l, index: s, onClick: n, listItemProps: i } = e;
    return (0, t.jsx)("div", {
        className: T.Ko,
        children: (0, t.jsx)(I.Ay, {
            className: T.du,
            skuId: l,
            positionInSection: s,
            onClick: n,
            showOrbsOnly: !1,
            listItemProps: i,
        }),
    });
};
function B(e) {
    return e;
}
let D = function (e) {
    let {
        skuIds: l,
        tab: s,
        applicationId: i,
        headerText: I,
        subheaderText: D,
        logoUrl: F,
        cta: K,
        timeLeftText: Y,
        termsUrl: U,
        backgroundImageUrl: H,
        analyticsSection: $,
        analyticsTileType: Q,
        analyticsImpressionType: z,
        backgroundGradient: G,
    } = e;
    n.useEffect(() => {
        (0, k.ap)(i);
    }, [i]);
    let V = (0, a.bG)(
            [v.A],
            () => {
                let e = v.A.getStorefrontMetadata(i);
                return e?.logoAssetId != null ? (0, _.YE)(i, e.logoAssetId, 256) : void 0;
            },
            [i],
        ),
        J = F ?? V,
        W = (function (e, l) {
            let [s, t] = n.useState([]),
                i = e.length > 0 ? e.length : 4;
            n.useEffect(() => {
                for (let s of e) (0, k.Pp)(l, s);
            }, [e, l]);
            let { isFetching: r, loadedSkuIds: u } = (0, a.bG)(
                    [A.A],
                    () => {
                        let l = [],
                            s = !1;
                        for (let t of e) ((s = A.A.isFetching(t) || s), null != A.A.get(t) && l.push(t));
                        return { isFetching: s, loadedSkuIds: l };
                    },
                    [e],
                    w,
                ),
                c = !r && u.length < i,
                o = L.default.getCurrentUser()?.id,
                d = n.useMemo(() => (c ? [l] : []), [c, l]),
                m = n.useMemo(() => (c && null != o ? [o] : []), [c, o]),
                { recommendations: g, status: h } = (0, b.XQ)({
                    applicationIds: d,
                    userIds: m,
                    numItems: i,
                    source: y.B.USER_PROFILE,
                }),
                x = n.useMemo(() => {
                    if (r) return null;
                    if (u.length >= i) return u;
                    if ("loading" === h) return null;
                    let l = new Set(e);
                    return [...u, ...g.map((e) => e.id).filter((e) => !l.has(e))].slice(0, i);
                }, [e, r, u, g, h, i]),
                p = null != x && (0, E.v)(s, x);
            null != x && x.length > 0 && !p && t(x);
            let f = null == x || p ? s : x;
            return ((0, S.j)({ skuIds: f }), f);
        })(l, i),
        X = (0, N.uM)(),
        { analyticsLocations: q } = (0, h.Ay)(),
        Z = n.useRef(null),
        ee = n.useRef(!1),
        el = n.useRef(null),
        es = n.useMemo(() => ({ pageSection: $, placement: f.Ye.COLLECTIBLES_SHOP_BANNER }), [$]),
        et = n.useCallback(
            (e, l) => {
                j.default.track(M.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: X?.sessionId,
                    page_type: s,
                    page_category: X?.pageCategory,
                    page_section: X?.pageSection,
                    tile_type: Q,
                    cta_name: e,
                    ...(null != l ? { sku_id: l } : void 0),
                });
            },
            [X?.sessionId, X?.pageCategory, X?.pageSection, s, Q],
        ),
        en = K?.kind === "button" ? K.onClick : void 0,
        ei = n.useCallback(() => {
            (et("go_to_game_shop"), en?.());
        }, [et, en]),
        er = n.useCallback(
            (e, l) => {
                let { skuId: s, applicationId: t } = l;
                (et("card_click", s),
                    (0, C.R)({ skuId: s, applicationId: t, isStorefront: !1, analyticsLocations: q }));
            },
            [et, q],
        ),
        ea = n.useCallback((e, l, s) => (0, t.jsx)(P, { skuId: e, index: s, onClick: er, listItemProps: l }), [er]),
        eu = n.useCallback(
            (e) => {
                !ee.current &&
                    (e && null === el.current
                        ? (el.current = setTimeout(() => {
                              ((ee.current = !0),
                                  (el.current = null),
                                  j.default.track(M.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: X?.sessionId,
                                      page_type: s,
                                      page_category: X?.pageCategory,
                                      page_section: X?.pageSection,
                                      type: z,
                                  }));
                          }, 1e3))
                        : e || null === el.current || (clearTimeout(el.current), (el.current = null)));
            },
            [X?.sessionId, X?.pageCategory, X?.pageSection, s, z],
        );
    if (
        (n.useEffect(
            () => () => {
                null !== el.current && (clearTimeout(el.current), (el.current = null));
            },
            [],
        ),
        0 === W.length)
    )
        return null;
    let ec = 1 === W.length,
        eo = W.length > 2,
        ed =
            null == K
                ? null
                : "custom" === K.kind
                  ? K.node
                  : (0, t.jsx)(c.$, {
                        variant: "overlay-primary",
                        size: "sm",
                        text: K.text,
                        onMouseDown: K.onMouseDown,
                        onClick: ei,
                    }),
        em = W.map((e, l) => (0, t.jsx)(P, { skuId: e, index: l, onClick: er }, e)),
        eg = (0, t.jsxs)("div", {
            className: T.C,
            children: [
                null != J && (0, t.jsx)("img", { className: T.wm, src: J, alt: "" }),
                (0, t.jsxs)("div", {
                    className: T.xf,
                    children: [
                        (0, t.jsxs)("div", {
                            children: [
                                (0, t.jsx)(o.D, {
                                    variant: null != D ? "heading-xl/semibold" : "heading-lg/medium",
                                    color: "text-overlay-light",
                                    children: (0, x.U)(I, { enableNewlines: !0 }),
                                }),
                                null != D &&
                                    (0, t.jsx)(d.E, {
                                        variant: "text-lg/normal",
                                        color: "text-overlay-light",
                                        children: (0, x.U)(D, { enableNewlines: !0 }),
                                    }),
                            ],
                        }),
                        (null != ed || null != Y || null != U) &&
                            (0, t.jsxs)("div", {
                                className: T.KW,
                                children: [
                                    ed,
                                    null != Y &&
                                        (0, t.jsxs)("div", {
                                            className: T.f$,
                                            children: [
                                                (0, t.jsx)(m.ClockIcon, { size: "xs", color: "currentColor" }),
                                                (0, t.jsx)(d.E, {
                                                    variant: "text-xs/medium",
                                                    color: "none",
                                                    children: Y,
                                                }),
                                            ],
                                        }),
                                    null != U &&
                                        (0, t.jsx)(d.E, {
                                            variant: "text-sm/medium",
                                            children: R.intl.format(R.t.mYS7uY, { helpCenterLink: U }),
                                        }),
                                ],
                            }),
                    ],
                }),
            ],
        }),
        eh = (0, t.jsx)("div", {
            className: T.UO,
            children: (0, t.jsxs)(f.E9, {
                newValue: es,
                children: [
                    ec
                        ? em
                        : eo
                          ? (0, t.jsx)(p.A, {
                                className: T.pY,
                                itemClassName: r()(T.NM, { [T.i6]: 4 === W.length }),
                                gap: "md",
                                "aria-label": R.intl.string(R.t["kocF+6"]),
                                items: W,
                                getItemKey: B,
                                renderItem: ea,
                            })
                          : (0, t.jsx)("div", { className: T.$2, children: em }),
                    i === O.FK &&
                        (0, t.jsx)("div", {
                            className: T.Ok,
                            children: (0, t.jsx)(d.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: "\xa9 2026 MARVEL",
                            }),
                        }),
                ],
            }),
        });
    return (0, t.jsx)(g.N, {
        theme: M.NJ8.DARK,
        children: (e) =>
            (0, t.jsx)(u.L, {
                innerRef: Z,
                onChange: eu,
                threshold: 0,
                children: (0, t.jsx)("div", {
                    ref: Z,
                    className: r()(T.YB, e),
                    children: (0, t.jsxs)("div", {
                        className: r()(T.kL, { [T.Qt]: ec }),
                        children: [
                            null != H &&
                                (0, t.jsx)("div", { className: T.iL, style: { backgroundImage: `url(${H})` } }),
                            null != G && (0, t.jsx)("div", { className: T.D7, style: { background: G } }),
                            (0, t.jsxs)("div", { className: r()(T.Qs, { [T.TI]: ec }), children: [eg, eh] }),
                        ],
                    }),
                }),
            }),
    });
};
