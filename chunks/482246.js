"use strict";
n.d(t, { A: () => R });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(575593),
    c = n(311907),
    d = n(397927),
    _ = n(937008),
    f = n(287070),
    p = n(576622),
    h = n(287809),
    m = n(927578),
    E = n(993408),
    g = n(674658),
    A = n(898461),
    I = n(203632),
    T = n(536572),
    S = n(14702),
    y = n(219103),
    v = n(525723),
    N = n(985018),
    C = n(730939);
let R = (e) => {
    let {
            skuId: t,
            isSelected: n,
            priceAmount: s,
            priceCurrency: o,
            onSelect: R,
            shouldDisplayHeader: O = !1,
            className: b,
            previewHeaderClassName: D,
            hideProfilePreview: L = !1,
        } = e,
        { product: w } = (0, g.q)(t, !0),
        { giftRecipient: M, giftRecipientError: x } = (0, _.Pv)(),
        P = (0, c.bG)([h.default], () => h.default.getCurrentUser()),
        k = (0, T.VG)(w),
        U = i.useRef(null),
        G = m.Ay.canUseCollectibles(P),
        F = i.useMemo(() => (0, E.fT)(w, G), [w, G]),
        V = (0, v.V_)(w);
    if (null == w) return null;
    let [B] = w.items;
    l()(null != B, "Product item should not be empty");
    let H = () => {
            if (w?.type === u.R.BUNDLE) return null;
            switch (B.type) {
                case u.R.AVATAR_DECORATION:
                    return N.intl.string(N.t["7v0T9P"]);
                case u.R.PROFILE_EFFECT:
                    return N.intl.string(N.t.wR5wOo);
                case u.R.NAMEPLATE:
                    return N.intl.string(N.t.x5CoXR);
                default:
                    return null;
            }
        },
        j = null != M && M.id !== P?.id && w.type !== u.R.BUNDLE && B.type !== u.R.NAMEPLATE && !L,
        Y = () => {
            null != t && null != R && R(t);
        };
    return (0, r.jsxs)("div", {
        className: b,
        children: [
            O &&
                (0, r.jsx)("div", {
                    className: a()(C.QU, D),
                    children: (0, r.jsx)(d.D0$, {
                        label: N.intl.string(N.t.PpoJzt),
                        children:
                            j &&
                            (0, r.jsx)(
                                d.YNO,
                                {
                                    targetElementRef: U,
                                    preload: () => (0, p.A)(M.id, M.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, r.jsx)(f.A, {
                                            ...e,
                                            user: M,
                                            pendingAvatar: M.getAvatarURL(null, (0, d.FT9)(d._3J.SIZE_80)),
                                            pendingAvatarDecoration: (0, A.T)(B) ? B : null,
                                            pendingProfileEffect: (0, I.C3)(B) ? B : null,
                                            canUsePremiumCustomization: !0,
                                            disabledInputs: !0,
                                            hideExampleButton: !0,
                                        }),
                                    align: "center",
                                    position: "right",
                                    children: (e) =>
                                        (0, r.jsx)(d.DUT, {
                                            ...e,
                                            className: C.Nx,
                                            innerRef: U,
                                            children: (0, r.jsx)(d.Text, {
                                                variant: "text-xs/medium",
                                                color: "text-link",
                                                children: N.intl.string(N.t["2GnJQL"]),
                                            }),
                                        }),
                                },
                                M.id,
                            ),
                    }),
                }),
            (0, r.jsxs)(d.DUT, {
                tag: "div",
                onClick: Y,
                className: a()(C.i1, { [C.no]: n && null == x, [C.cN]: n && null != x }),
                children: [
                    (0, r.jsxs)("div", {
                        className: C.Ug,
                        children: [
                            (0, r.jsx)(S.O, { product: w, fallbackLabel: null }),
                            (0, r.jsxs)("div", {
                                className: C.JZ,
                                children: [
                                    (0, r.jsx)(d.Text, { variant: "text-md/semibold", children: k }),
                                    (0, r.jsx)(d.Heading, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children: H(),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(y.x, {
                                priceAmount: s,
                                priceCurrency: o,
                                discount: F,
                                discountOfferAmount: V,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    n &&
                        null != x &&
                        (0, r.jsx)("div", {
                            className: C.Wh,
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                children: x,
                            }),
                        }),
                ],
            }),
        ],
    });
};
