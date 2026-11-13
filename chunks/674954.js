n.d(t, { Ay: () => K, aC: () => w });
var l,
    r,
    i,
    o = n(477900),
    a = n(582128),
    s = n(855986),
    u = n(477782),
    c = n(793574),
    d = n(688810),
    f = n(414636),
    A = n(821925),
    p = n(46653),
    E = n(886913),
    g = n(986630),
    _ = n(722258),
    I = n(575593),
    R = n(129230),
    m = n(652215),
    O =
        (((l = {}).LOOK_OPENED = "look_opened"),
        (l.MENU_VIEWED = "menu_viewed"),
        (l.COACHMARK_VIEWED = "coachmark_viewed"),
        (l.COACHMARK_CTA_CLICKED = "coachmark_cta_clicked"),
        (l.COACHMARK_DISMISSED = "coachmark_dismissed"),
        l),
    h = (((r = {}).ROW_VIEWED = "row_viewed"), (r.ROW_CLICKED = "row_clicked"), r);
function b(e) {
    let { action: t, skuId: n, productType: l, isDisabled: r, source: i } = e;
    R.default.track(m.HAw.SHOP_THIS_LOOK_ROW_ACTION, {
        action: t,
        sku_id: n,
        product_type: (function (e) {
            switch (e) {
                case I.R.PROFILE_FRAME:
                    return "profile_frame";
                case I.R.PROFILE_EFFECT:
                    return "profile_effect";
                case I.R.AVATAR_DECORATION:
                    return "avatar_decoration";
                case I.R.NAMEPLATE:
                    return "nameplate";
                default:
                    return;
            }
        })(l),
        is_disabled: r,
        source: i ?? void 0,
    });
}
var x =
        (((i = {})[(i.SHOP = 1)] = "SHOP"),
        (i[(i.QUEST = 2)] = "QUEST"),
        (i[(i.PREMIUM_PROMOTION = 3)] = "PREMIUM_PROMOTION"),
        (i[(i.REWARD = 4)] = "REWARD"),
        (i[(i.INTERNAL = 5)] = "INTERNAL"),
        i),
    N = n(856383),
    v = n(503698),
    S = n.n(v),
    C = n(834730),
    j = n(682301),
    P = n(623373),
    T = n(536572),
    M = n(14702),
    k = n(792996),
    y = n(728500);
function L() {
    return (0, o.jsxs)("div", {
        className: y.nM,
        "aria-hidden": !0,
        children: [
            (0, o.jsx)("div", { className: y.VH, children: (0, o.jsx)("div", { className: y.Qc }) }),
            (0, o.jsxs)("div", {
                className: S()(y.Qq, y.Um),
                children: [(0, o.jsx)("div", { className: y.Iz }), (0, o.jsx)("div", { className: y.wS })],
            }),
        ],
    });
}
function D(e) {
    let { skuId: t, disabled: n = !1, source: l } = e,
        { product: r, state: i } = (0, j.IK)(t, { needsCategory: !1, shouldFetchProduct: !1 }),
        u = (0, s.bG)(
            [A.A],
            () =>
                A.A.getProductsForSku(t)
                    ?.flatMap((e) => e.skus)
                    .find((e) => e.id === t),
            [t],
        ),
        c = a.useRef(!1);
    if (
        (a.useEffect(() => {
            null == r ||
                c.current ||
                ((c.current = !0),
                b({ action: h.ROW_VIEWED, skuId: t, productType: (0, P.YW)(r) ?? void 0, isDisabled: n, source: l }));
        }, [r, t, n, l]),
        "loading" === i)
    )
        return (0, o.jsx)(L, {});
    if (null == r) return null;
    let d = (0, P.YW)(r),
        f =
            null != d
                ? (function (e) {
                      switch (e) {
                          case I.R.AVATAR_DECORATION:
                              return k.intl.string(k.t["7v0T9P"]);
                          case I.R.PROFILE_EFFECT:
                              return k.intl.string(k.t.wR5wOo);
                          case I.R.NAMEPLATE:
                              return k.intl.string(k.t.x5CoXR);
                          case I.R.PROFILE_FRAME:
                              return k.intl.string(k.t.GWrZOd);
                          default:
                              return;
                      }
                  })(d)
                : void 0;
    return (0, o.jsxs)("div", {
        className: S()(y.nM, { [y.r9]: n }),
        children: [
            (0, o.jsx)("div", { className: y.VH, children: (0, o.jsx)(M.O, { product: r, sku: u }) }),
            (0, o.jsxs)("div", {
                className: y.Qq,
                children: [
                    (0, o.jsx)(C.E, { variant: "body-sm/medium", color: "text-default", children: (0, T.VG)(r) }),
                    null != f && (0, o.jsx)(C.E, { variant: "body-xs/normal", color: "text-subtle", children: f }),
                ],
            }),
        ],
    });
}
var U = n(996988),
    G = n(842671);
function F(e, t) {
    return (
        e.length === t.length &&
        e.every(
            (e, n) =>
                e.skuId === t[n].skuId &&
                e.isShoppableItem === t[n].isShoppableItem &&
                e.productType === t[n].productType &&
                e.fetchState === t[n].fetchState &&
                e.hasProduct === t[n].hasProduct,
        )
    );
}
function w(e, t, n) {
    let l = (0, s.bG)([p.default], () => p.default.getId() === e.id),
        r = (0, E.g)(e.id, t),
        i = "full_profile_button" === n ? c.A.FULL_PROFILE_SHOP_THIS_LOOK_BUTTON : c.A.USER_PROFILE_OVERFLOW_MENU,
        { analyticsLocations: I } = (0, d.Ay)(i),
        R =
            "full_profile_button" === n
                ? (0, o.jsx)(V, { source: "full_profile_button" })
                : n === U.d.MODAL_V2
                  ? (0, o.jsx)(V, { source: "full_profile_overflow_menu" })
                  : null,
        m = (0, f.n8)(e, t, R, i),
        [O, v] = a.useState(() => new Set()),
        S = (0, s.bG)(
            [A.A],
            () =>
                r.map((e) => {
                    let t = A.A.getProductsForSku(e)?.[0],
                        n = A.A.getProductsForSku(e)
                            ?.flatMap((e) => e.skus)
                            .find((t) => t.id === e);
                    return {
                        skuId: e,
                        fetchState: A.A.getFetchStateForSku(e),
                        hasProduct: null != t && null != g.A.fromStorefrontProductRecord(t),
                        isShoppableItem:
                            null != n &&
                            ("function" != typeof n.isAvailable
                                ? (N.A.captureMessage("isShoppableCollectibleSku: sku missing isAvailable()", {
                                      extra: { skuId: n.id, skuType: n.type },
                                  }),
                                  !1)
                                : n.isAvailable() && n.tenantMetadata?.collectibles?.sourceType === x.SHOP),
                        productType: n?.tenantMetadata?.collectibles?.type,
                    };
                }),
            [r],
            F,
        ),
        C = r.length > 0 || null != m,
        j = S.filter((e) => {
            let { skuId: t, fetchState: n } = e;
            return null != n && !O.has(t);
        });
    j.length > 0 &&
        v(
            new Set([
                ...O,
                ...j.map((e) => {
                    let { skuId: t } = e;
                    return t;
                }),
            ]),
        );
    let P =
        null != m ||
        S.some((e) => {
            let { skuId: t, fetchState: n, hasProduct: l } = e;
            return l || "loading" === n || (null == n && !O.has(t));
        });
    return {
        visible: !l && C,
        label: null != m ? k.intl.string(G.default["2PKrQO"]) : k.intl.string(k.t.xNdRDO),
        contents: (0, o.jsxs)(o.Fragment, {
            children: [
                m,
                (0, o.jsx)(u.rX, {
                    children: S.map((e, t) => {
                        let { skuId: l, isShoppableItem: r, productType: a } = e;
                        return (0, o.jsx)(
                            u.Dr,
                            {
                                id: `shop-this-look-${l}`,
                                navigable: r,
                                disabled: !r,
                                keepItemStyles: r,
                                render: (e) => {
                                    let { disabled: r } = e;
                                    return (0, o.jsxs)(o.Fragment, {
                                        children: [
                                            0 === t && null == m ? R : null,
                                            (0, o.jsx)(D, { skuId: l, disabled: r, source: n }),
                                        ],
                                    });
                                },
                                action: r
                                    ? () => {
                                          (b({
                                              action: h.ROW_CLICKED,
                                              skuId: l,
                                              productType: a,
                                              isDisabled: !1,
                                              source: n,
                                          }),
                                              (0, _.B)({ skuId: l, analyticsLocations: I, analyticsSource: i }));
                                      }
                                    : void 0,
                            },
                            l,
                        );
                    }),
                }),
            ],
        }),
        hasRenderableContent: P,
    };
}
function V(e) {
    let { source: t } = e;
    return (
        a.useEffect(() => {
            var e;
            ((e = O.LOOK_OPENED),
                R.default.track(m.HAw.SHOP_THIS_LOOK_MENU_ACTION, { action: e, source: t ?? void 0 }));
        }, [t]),
        null
    );
}
function K(e, t, n) {
    let { visible: l, label: r, contents: i } = w(e, t, n);
    return l ? (0, o.jsx)(u.Dr, { id: "shop-this-look", label: r, children: i }) : null;
}
