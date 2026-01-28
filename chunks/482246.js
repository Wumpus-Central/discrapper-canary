n.d(t, {
    A: () => P,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(284009),
    l = n.n(s),
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
    let {
            skuId: t,
            isSelected: n,
            priceAmount: a,
            priceCurrency: s,
            onSelect: C,
            shouldDisplayHeader: w = !1,
            className: P,
            previewHeaderClassName: D,
            hideProfilePreview: L = !1,
        } = e,
        { product: x } = (0, E.q)(t, !0),
        { giftRecipient: M, giftRecipientError: j } = (0, f.Pv)(),
        k = (0, u.bG)([h.default], () => h.default.getCurrentUser()),
        U = (0, y.o7)(x),
        G = i.useRef(null),
        F = m.Ay.canUseCollectibles(k),
        V = i.useMemo(() => (0, g.fT)(x, F), [x, F]),
        B = (0, I.V_)(x);
    if (null == x) return null;
    let [H] = x.items;
    l()(null != H, "Product item should not be empty");
    let Y = () => {
            if ((null == x ? void 0 : x.type) === c.R.BUNDLE) return null;
            switch (H.type) {
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
        W =
            null != M &&
            M.id !== (null == k ? void 0 : k.id) &&
            x.type !== c.R.BUNDLE &&
            H.type !== c.R.NAMEPLATE &&
            !L,
        K = () => {
            null != t && null != C && C(t);
        };
    return (0, r.jsxs)("div", {
        className: P,
        children: [
            w &&
                (0, r.jsx)("div", {
                    className: o()(T.QU, D),
                    children: (0, r.jsx)(d.D0$, {
                        label: S.intl.string(S.t.PpoJzt),
                        children:
                            W &&
                            (0, r.jsx)(
                                d.YNO,
                                {
                                    targetElementRef: G,
                                    preload: () => (0, _.A)(M.id, M.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, r.jsx)(
                                            p.A,
                                            R(N({}, e), {
                                                user: M,
                                                pendingAvatar: M.getAvatarURL(null, (0, d.FT9)(d._3J.SIZE_80)),
                                                pendingAvatarDecoration: (0, b.T)(H) ? H : null,
                                                pendingProfileEffect: (0, O.C)(H) ? H : null,
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
                                                innerRef: G,
                                                children: (0, r.jsx)(d.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-link",
                                                    children: S.intl.string(S.t["2GnJQL"]),
                                                }),
                                            }),
                                        ),
                                },
                                M.id,
                            ),
                    }),
                }),
            (0, r.jsxs)(d.DUT, {
                tag: "div",
                onClick: K,
                className: o()(T.i1, {
                    [T.no]: n && null == j,
                    [T.cN]: n && null != j,
                }),
                children: [
                    (0, r.jsxs)("div", {
                        className: T.Ug,
                        children: [
                            (0, r.jsx)(v.O, {
                                product: x,
                                fallbackLabel: null,
                            }),
                            (0, r.jsxs)("div", {
                                className: T.JZ,
                                children: [
                                    (0, r.jsx)(d.Text, {
                                        variant: "text-md/semibold",
                                        children: U,
                                    }),
                                    (0, r.jsx)(d.Heading, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children: Y(),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(A.x, {
                                priceAmount: a,
                                priceCurrency: s,
                                discount: V,
                                discountOfferAmount: B,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    n &&
                        null != j &&
                        (0, r.jsx)("div", {
                            className: T.Wh,
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                children: j,
                            }),
                        }),
                ],
            }),
        ],
    });
};
