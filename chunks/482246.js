"use strict";
n.d(t, { A: () => N });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(993408),
    E = n(674658),
    A = n(645178),
    I = n(898461),
    T = n(203632),
    y = n(14702),
    S = n(219103),
    v = n(525723),
    C = n(985018),
    b = n(245948);
let N = (e) => {
    let {
            skuId: t,
            isSelected: n,
            priceAmount: a,
            priceCurrency: o,
            onSelect: N,
            shouldDisplayHeader: R = !1,
            className: O,
            previewHeaderClassName: D,
            hideProfilePreview: L = !1,
        } = e,
        { product: w } = (0, E.q)(t, !0),
        { giftRecipient: x, giftRecipientError: P } = (0, _.Pv)(),
        M = (0, c.bG)([h.default], () => h.default.getCurrentUser()),
        k = (0, A.o7)(w),
        U = i.useRef(null),
        G = m.Ay.canUseCollectibles(M),
        V = i.useMemo(() => (0, g.fT)(w, G), [w, G]),
        F = (0, v.V_)(w);
    if (null == w) return null;
    let [B] = w.items;
    l()(null != B, "Product item should not be empty");
    let j = () => {
            if (w?.type === u.R.BUNDLE) return null;
            switch (B.type) {
                case u.R.AVATAR_DECORATION:
                    return C.intl.string(C.t["7v0T9P"]);
                case u.R.PROFILE_EFFECT:
                    return C.intl.string(C.t.wR5wOo);
                case u.R.NAMEPLATE:
                    return C.intl.string(C.t.x5CoXR);
                default:
                    return null;
            }
        },
        H = null != x && x.id !== M?.id && w.type !== u.R.BUNDLE && B.type !== u.R.NAMEPLATE && !L,
        Y = () => {
            null != t && null != N && N(t);
        };
    return (0, r.jsxs)("div", {
        className: O,
        children: [
            R &&
                (0, r.jsx)("div", {
                    className: s()(b.QU, D),
                    children: (0, r.jsx)(d.D0$, {
                        label: C.intl.string(C.t.PpoJzt),
                        children:
                            H &&
                            (0, r.jsx)(
                                d.YNO,
                                {
                                    targetElementRef: U,
                                    preload: () => (0, p.A)(x.id, x.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, r.jsx)(f.A, {
                                            ...e,
                                            user: x,
                                            pendingAvatar: x.getAvatarURL(null, (0, d.FT9)(d._3J.SIZE_80)),
                                            pendingAvatarDecoration: (0, I.T)(B) ? B : null,
                                            pendingProfileEffect: (0, T.C)(B) ? B : null,
                                            canUsePremiumCustomization: !0,
                                            disabledInputs: !0,
                                            hideExampleButton: !0,
                                        }),
                                    align: "center",
                                    position: "right",
                                    children: (e) =>
                                        (0, r.jsx)(d.DUT, {
                                            ...e,
                                            className: b.Nx,
                                            innerRef: U,
                                            children: (0, r.jsx)(d.Text, {
                                                variant: "text-xs/medium",
                                                color: "text-link",
                                                children: C.intl.string(C.t["2GnJQL"]),
                                            }),
                                        }),
                                },
                                x.id,
                            ),
                    }),
                }),
            (0, r.jsxs)(d.DUT, {
                tag: "div",
                onClick: Y,
                className: s()(b.i1, { [b.no]: n && null == P, [b.cN]: n && null != P }),
                children: [
                    (0, r.jsxs)("div", {
                        className: b.Ug,
                        children: [
                            (0, r.jsx)(y.O, { product: w, fallbackLabel: null }),
                            (0, r.jsxs)("div", {
                                className: b.JZ,
                                children: [
                                    (0, r.jsx)(d.Text, { variant: "text-md/semibold", children: k }),
                                    (0, r.jsx)(d.Heading, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children: j(),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(S.x, {
                                priceAmount: a,
                                priceCurrency: o,
                                discount: V,
                                discountOfferAmount: F,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    n &&
                        null != P &&
                        (0, r.jsx)("div", {
                            className: b.Wh,
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                children: P,
                            }),
                        }),
                ],
            }),
        ],
    });
};
