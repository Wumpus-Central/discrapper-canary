n.d(t, {
    A: () => P,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(575593),
    u = n(311907),
    d = n(397927),
    f = n(937008),
    p = n(287070),
    _ = n(576622),
    h = n(287809),
    m = n(927578),
    g = n(993408),
    E = n(674658),
    y = n(645178),
    b = n(898461),
    O = n(203632),
    v = n(14702),
    A = n(219103),
    I = n(525723),
    S = n(985018),
    T = n(245948);

function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                C(e, t, n[t]);
            });
    }
    return e;
}

function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = (e) => {
    var t, n;
    let {
            skuId: a,
            isSelected: o,
            pricePreview: C,
            onSelect: w,
            shouldDisplayHeader: P = !1,
            className: D,
            previewHeaderClassName: x,
            hideProfilePreview: L = !1,
            fallbackPrice: j,
        } = e,
        { product: M } = (0, E.q)(a, !0),
        { giftRecipient: k, giftRecipientError: U } = (0, f.Pv)(),
        G = (0, u.bG)([h.default], () => h.default.getCurrentUser()),
        V = (0, y.o7)(M),
        F = i.useRef(null),
        B = m.Ay.canUseCollectibles(G),
        H = i.useMemo(() => (0, g.fT)(M, B), [M, B]),
        Y = (0, I.V_)(M);
    if (null == M) return null;
    let [W] = M.items;
    l()(null != W, "Product item should not be empty");
    let K = () => {
            if ((null == M ? void 0 : M.type) === c.R.BUNDLE) return null;
            switch (W.type) {
                case c.R.AVATAR_DECORATION:
                    return S.intl.string(S.t["7v0T9P"]);
                case c.R.PROFILE_EFFECT:
                    return S.intl.string(S.t.wR5wOo);
                case c.R.NAMEPLATE:
                    return S.intl.string(S.t.x5CoXR);
                default:
                    return null;
            }
        },
        z =
            null != k &&
            k.id !== (null == G ? void 0 : G.id) &&
            M.type !== c.R.BUNDLE &&
            W.type !== c.R.NAMEPLATE &&
            !L,
        q = () => {
            null != a && null != w && w(a);
        },
        Z = null == C || null == (n = C.invoice_items) || null == (t = n[0]) ? void 0 : t.unit_price;
    return (0, r.jsxs)("div", {
        className: D,
        children: [
            P &&
                (0, r.jsx)("div", {
                    className: s()(T.QU, x),
                    children: (0, r.jsx)(d.D0$, {
                        label: S.intl.string(S.t.PpoJzt),
                        children:
                            z &&
                            (0, r.jsx)(
                                d.YNO,
                                {
                                    targetElementRef: F,
                                    preload: () => (0, _.A)(k.id, k.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, r.jsx)(
                                            p.A,
                                            R(N({}, e), {
                                                user: k,
                                                pendingAvatar: k.getAvatarURL(null, (0, d.FT9)(d._3J.SIZE_80)),
                                                pendingAvatarDecoration: (0, b.T)(W) ? W : null,
                                                pendingProfileEffect: (0, O.C)(W) ? W : null,
                                                canUsePremiumCustomization: !0,
                                                disabledInputs: !0,
                                                hideExampleButton: !0,
                                            }),
                                        ),
                                    align: "center",
                                    position: "right",
                                    children: (e) =>
                                        (0, r.jsx)(
                                            d.DUT,
                                            R(N({}, e), {
                                                className: T.Nx,
                                                innerRef: F,
                                                children: (0, r.jsx)(d.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-link",
                                                    children: S.intl.string(S.t["2GnJQL"]),
                                                }),
                                            }),
                                        ),
                                },
                                k.id,
                            ),
                    }),
                }),
            (0, r.jsxs)(d.DUT, {
                tag: "div",
                onClick: q,
                className: s()(T.i1, {
                    [T.no]: o && null == U,
                    [T.cN]: o && null != U,
                }),
                children: [
                    (0, r.jsxs)("div", {
                        className: T.Ug,
                        children: [
                            (0, r.jsx)(v.O, {
                                product: M,
                                fallbackLabel: null,
                            }),
                            (0, r.jsxs)("div", {
                                className: T.JZ,
                                children: [
                                    (0, r.jsx)(d.Text, {
                                        variant: "text-md/semibold",
                                        children: V,
                                    }),
                                    (0, r.jsx)(d.Heading, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children: K(),
                                    }),
                                ],
                            }),
                            null != C && null != Z
                                ? (0, r.jsx)(A.x, {
                                      price: {
                                          amount: Z.amount,
                                          currency: Z.currency,
                                          taxInclusive: C.tax_inclusive,
                                          tax: C.tax,
                                          exponent: Z.exponent,
                                      },
                                      discount: H,
                                      discountOfferAmount: Y,
                                      variant: "text-md/bold",
                                  })
                                : (0, r.jsx)(d.Text, {
                                      variant: "text-md/semibold",
                                      children: j,
                                  }),
                        ],
                    }),
                    o &&
                        null != U &&
                        (0, r.jsx)("div", {
                            className: T.Wh,
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                children: U,
                            }),
                        }),
                ],
            }),
        ],
    });
};
