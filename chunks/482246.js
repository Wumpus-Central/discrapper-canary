"use strict";
n.d(t, { A: () => w });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(575593),
    c = n(311907),
    d = n(452027),
    _ = n(265872),
    f = n(778712),
    p = n(939249),
    h = n(834730),
    E = n(534514),
    m = n(937008),
    g = n(287070),
    A = n(576622),
    I = n(287809),
    T = n(927578),
    S = n(993408),
    y = n(674658),
    N = n(898461),
    v = n(203632),
    C = n(536572),
    O = n(14702),
    R = n(219103),
    b = n(525723),
    D = n(985018),
    L = n(780651);
let w = (e) => {
    let {
            skuId: t,
            isSelected: n,
            priceAmount: s,
            priceCurrency: o,
            onSelect: w,
            shouldDisplayHeader: M = !1,
            className: P,
            previewHeaderClassName: x,
            hideProfilePreview: k = !1,
        } = e,
        { product: U } = (0, y.q)(t, !0),
        { giftRecipient: G, giftRecipientError: F } = (0, m.Pv)(),
        V = (0, c.bG)([I.default], () => I.default.getCurrentUser()),
        B = (0, C.VG)(U),
        H = i.useRef(null),
        j = T.Ay.canUseCollectibles(V),
        Y = i.useMemo(() => (0, S.fT)(U, j), [U, j]),
        W = (0, b.V_)(U);
    if (null == U) return null;
    let [K] = U.items;
    l()(null != K, "Product item should not be empty");
    let $ = null != G && G.id !== V?.id && U.type !== u.R.BUNDLE && K.type !== u.R.NAMEPLATE && !k;
    return (0, r.jsxs)("div", {
        className: P,
        children: [
            M &&
                (0, r.jsx)("div", {
                    className: a()(L.QU, x),
                    children: (0, r.jsx)(d.D, {
                        label: D.intl.string(D.t.PpoJzt),
                        children:
                            $ &&
                            (0, r.jsx)(
                                _.Y,
                                {
                                    targetElementRef: H,
                                    preload: () => (0, A.A)(G.id, G.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, r.jsx)(g.A, {
                                            ...e,
                                            user: G,
                                            pendingAvatar: G.getAvatarURL(null, (0, f.FT)(f._3.SIZE_80)),
                                            pendingAvatarDecoration: (0, N.T)(K) ? K : null,
                                            pendingProfileEffect: (0, v.C3)(K) ? K : null,
                                            canUsePremiumCustomization: !0,
                                            disabledInputs: !0,
                                            hideExampleButton: !0,
                                        }),
                                    align: "center",
                                    position: "right",
                                    children: (e) =>
                                        (0, r.jsx)(p.D, {
                                            ...e,
                                            className: L.Nx,
                                            innerRef: H,
                                            children: (0, r.jsx)(h.E, {
                                                variant: "text-xs/medium",
                                                color: "text-link",
                                                children: D.intl.string(D.t["2GnJQL"]),
                                            }),
                                        }),
                                },
                                G.id,
                            ),
                    }),
                }),
            (0, r.jsxs)(p.D, {
                tag: "div",
                onClick: () => {
                    null != t && null != w && w(t);
                },
                className: a()(L.i1, { [L.no]: n && null == F, [L.cN]: n && null != F }),
                children: [
                    (0, r.jsxs)("div", {
                        className: L.Ug,
                        children: [
                            (0, r.jsx)(O.O, { product: U, fallbackLabel: null }),
                            (0, r.jsxs)("div", {
                                className: L.JZ,
                                children: [
                                    (0, r.jsx)(h.E, { variant: "text-md/semibold", children: B }),
                                    (0, r.jsx)(E.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children: (() => {
                                            if (U?.type === u.R.BUNDLE) return null;
                                            switch (K.type) {
                                                case u.R.AVATAR_DECORATION:
                                                    return D.intl.string(D.t["7v0T9P"]);
                                                case u.R.PROFILE_EFFECT:
                                                    return D.intl.string(D.t.wR5wOo);
                                                case u.R.NAMEPLATE:
                                                    return D.intl.string(D.t.x5CoXR);
                                                default:
                                                    return null;
                                            }
                                        })(),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(R.x, {
                                priceAmount: s,
                                priceCurrency: o,
                                discount: Y,
                                discountOfferAmount: W,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    n &&
                        null != F &&
                        (0, r.jsx)("div", {
                            className: L.Wh,
                            children: (0, r.jsx)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                children: F,
                            }),
                        }),
                ],
            }),
        ],
    });
};
