s.d(l, { A: () => B });
var n = s(477900),
    t = s(582128),
    a = s(503698),
    r = s.n(a),
    i = s(17928),
    c = s(269115),
    u = s(821609),
    o = s(297264),
    d = s(834730),
    g = s(406810),
    h = s(43990),
    m = s(688810),
    p = s(449543),
    x = s(812095),
    f = s(733391),
    v = s(439303),
    _ = s(832163),
    j = s(317560),
    k = s(467884),
    C = s(174459),
    E = s(371794),
    I = s(440938);
s(321073);
var N = s(52133),
    S = s(435658),
    y = s(820847),
    b = s(862772),
    L = s(287809),
    A = s(67480);
function w(e, l) {
    return e.isFetching === l.isFetching && (0, N.v)(e.loadedSkuIds, l.loadedSkuIds);
}
var M = s(652215),
    O = s(188275),
    R = s(660183),
    T = s(867595);
let B = function (e) {
    let {
        skuIds: l,
        tab: s,
        applicationId: a,
        headerText: B,
        subheaderText: D,
        logoUrl: F,
        cta: Y,
        timeLeftText: K,
        termsUrl: P,
        backgroundImageUrl: U,
        analyticsSection: H,
        analyticsTileType: $,
        analyticsImpressionType: Q,
        backgroundGradient: z,
    } = e;
    t.useEffect(() => {
        (0, f.ap)(a);
    }, [a]);
    let G = (0, i.bG)(
            [_.A],
            () => {
                let e = _.A.getStorefrontMetadata(a);
                return e?.logoAssetId != null ? (0, E.YE)(a, e.logoAssetId, 256) : void 0;
            },
            [a],
        ),
        V = F ?? G,
        J = (function (e, l) {
            let [s, n] = t.useState([]),
                a = e.length > 0 ? e.length : 4;
            t.useEffect(() => {
                for (let s of e) (0, f.Pp)(l, s);
            }, [e, l]);
            let { isFetching: r, loadedSkuIds: c } = (0, i.bG)(
                    [A.A],
                    () => {
                        let l = [],
                            s = !1;
                        for (let n of e) ((s = A.A.isFetching(n) || s), null != A.A.get(n) && l.push(n));
                        return { isFetching: s, loadedSkuIds: l };
                    },
                    [e],
                    w,
                ),
                u = !r && c.length < a,
                o = L.default.getCurrentUser()?.id,
                d = t.useMemo(() => (u ? [l] : []), [u, l]),
                g = t.useMemo(() => (u && null != o ? [o] : []), [u, o]),
                { recommendations: h, status: m } = (0, b.XQ)({
                    applicationIds: d,
                    userIds: g,
                    numItems: a,
                    source: y.B.USER_PROFILE,
                }),
                p = t.useMemo(() => {
                    if (r) return null;
                    if (c.length >= a) return c;
                    if ("loading" === m) return null;
                    let l = new Set(e);
                    return [...c, ...h.map((e) => e.id).filter((e) => !l.has(e))].slice(0, a);
                }, [e, r, c, h, m, a]),
                x = null != p && (0, N.v)(s, p);
            null != p && p.length > 0 && !x && n(p);
            let v = null == p || x ? s : p;
            return ((0, S.j)({ skuIds: v }), v);
        })(l, a),
        W = (0, I.uM)(),
        { analyticsLocations: X } = (0, m.Ay)(),
        q = t.useRef(null),
        Z = t.useRef(!1),
        ee = t.useRef(null),
        el = t.useMemo(() => ({ pageSection: H, placement: v.Ye.COLLECTIBLES_SHOP_BANNER }), [H]),
        es = t.useCallback(
            (e, l) => {
                C.default.track(M.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: W?.sessionId,
                    page_type: s,
                    page_category: W?.pageCategory,
                    page_section: W?.pageSection,
                    tile_type: $,
                    cta_name: e,
                    ...(null != l ? { sku_id: l } : void 0),
                });
            },
            [W?.sessionId, W?.pageCategory, W?.pageSection, s, $],
        ),
        en = Y?.kind === "button" ? Y.onClick : void 0,
        et = t.useCallback(() => {
            (es("go_to_game_shop"), en?.());
        }, [es, en]),
        ea = t.useCallback(
            (e, l) => {
                let { skuId: s, applicationId: n } = l;
                (es("card_click", s),
                    (0, j.R)({ skuId: s, applicationId: n, isStorefront: !1, analyticsLocations: X }));
            },
            [es, X],
        ),
        er = t.useCallback(
            (e) => {
                !Z.current &&
                    (e && null === ee.current
                        ? (ee.current = setTimeout(() => {
                              ((Z.current = !0),
                                  (ee.current = null),
                                  C.default.track(M.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: W?.sessionId,
                                      page_type: s,
                                      page_category: W?.pageCategory,
                                      page_section: W?.pageSection,
                                      type: Q,
                                  }));
                          }, 1e3))
                        : e || null === ee.current || (clearTimeout(ee.current), (ee.current = null)));
            },
            [W?.sessionId, W?.pageCategory, W?.pageSection, s, Q],
        );
    if (
        (t.useEffect(
            () => () => {
                null !== ee.current && (clearTimeout(ee.current), (ee.current = null));
            },
            [],
        ),
        0 === J.length)
    )
        return null;
    let ei = 1 === J.length,
        ec = J.length > 2,
        eu =
            null == Y
                ? null
                : "custom" === Y.kind
                  ? Y.node
                  : (0, n.jsx)(u.$, {
                        variant: "overlay-primary",
                        size: "sm",
                        text: Y.text,
                        onMouseDown: Y.onMouseDown,
                        onClick: et,
                    }),
        eo = J.map((e, l) =>
            (0, n.jsx)(
                "div",
                {
                    className: r()(T.Ko, { [T.NM]: ec, [T.i6]: 4 === J.length }),
                    children: (0, n.jsx)(k.Ay, {
                        className: T.du,
                        skuId: e,
                        positionInSection: l,
                        onClick: ea,
                        showOrbsOnly: !1,
                    }),
                },
                e,
            ),
        ),
        ed = (0, n.jsxs)("div", {
            className: T.C,
            children: [
                null != V && (0, n.jsx)("img", { className: T.wm, src: V, alt: "" }),
                (0, n.jsxs)("div", {
                    className: T.xf,
                    children: [
                        (0, n.jsxs)("div", {
                            children: [
                                (0, n.jsx)(o.D, {
                                    variant: null != D ? "heading-xl/bold" : "heading-lg/normal",
                                    color: "text-overlay-light",
                                    children: (0, x.U)(B, { enableNewlines: !0 }),
                                }),
                                null != D &&
                                    (0, n.jsx)(d.E, {
                                        variant: "text-lg/normal",
                                        color: "text-overlay-light",
                                        children: (0, x.U)(D, { enableNewlines: !0 }),
                                    }),
                            ],
                        }),
                        (null != eu || null != K || null != P) &&
                            (0, n.jsxs)("div", {
                                className: T.KW,
                                children: [
                                    eu,
                                    null != K &&
                                        (0, n.jsxs)("div", {
                                            className: T.f$,
                                            children: [
                                                (0, n.jsx)(g.ClockIcon, { size: "xs", color: "currentColor" }),
                                                (0, n.jsx)(d.E, {
                                                    variant: "text-xs/medium",
                                                    color: "none",
                                                    children: K,
                                                }),
                                            ],
                                        }),
                                    null != P &&
                                        (0, n.jsx)(d.E, {
                                            variant: "text-sm/medium",
                                            children: R.intl.format(R.t.mYS7uY, { helpCenterLink: P }),
                                        }),
                                ],
                            }),
                    ],
                }),
            ],
        }),
        eg = (0, n.jsx)("div", {
            className: T.UO,
            children: (0, n.jsxs)(v.E9, {
                newValue: el,
                children: [
                    ei
                        ? eo
                        : ec
                          ? (0, n.jsx)(p.A, {
                                className: T.pY,
                                gap: "md",
                                "aria-label": R.intl.string(R.t["kocF+6"]),
                                children: eo,
                            })
                          : (0, n.jsx)("div", { className: T.$2, children: eo }),
                    a === O.FK &&
                        (0, n.jsx)("div", {
                            className: T.Ok,
                            children: (0, n.jsx)(d.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: "\xa9 2026 MARVEL",
                            }),
                        }),
                ],
            }),
        });
    return (0, n.jsx)(h.N, {
        theme: M.NJ8.DARK,
        children: (e) =>
            (0, n.jsx)(c.L, {
                innerRef: q,
                onChange: er,
                threshold: 0,
                children: (0, n.jsx)("div", {
                    ref: q,
                    className: r()(T.YB, e),
                    children: (0, n.jsxs)("div", {
                        className: r()(T.kL, { [T.Qt]: ei }),
                        children: [
                            null != U &&
                                (0, n.jsx)("div", { className: T.iL, style: { backgroundImage: `url(${U})` } }),
                            null != z && (0, n.jsx)("div", { className: T.D7, style: { background: z } }),
                            (0, n.jsxs)("div", { className: r()(T.Qs, { [T.TI]: ei }), children: [ed, eg] }),
                        ],
                    }),
                }),
            }),
    });
};
