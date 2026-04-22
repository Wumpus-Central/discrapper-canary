n.d(t, { A: () => L });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(284009),
    o = n.n(a),
    u = n(575593),
    d = n(311907),
    c = n(452027),
    C = n(265872),
    p = n(778712),
    m = n(939249),
    E = n(834730),
    A = n(534514),
    h = n(937008),
    f = n(287070),
    _ = n(576622),
    g = n(287809),
    T = n(927578),
    x = n(993408),
    S = n(674658),
    I = n(898461),
    O = n(203632),
    y = n(536572),
    N = n(14702),
    R = n(219103),
    v = n(525723),
    P = n(985018),
    b = n(780651);
let L = (e) => {
    let {
            skuId: t,
            isSelected: n,
            priceAmount: i,
            priceCurrency: a,
            onSelect: L,
            shouldDisplayHeader: k = !1,
            className: j,
            previewHeaderClassName: U,
            hideProfilePreview: M = !1,
        } = e,
        { product: w } = (0, S.q)(t, !0),
        { giftRecipient: F, giftRecipientError: D } = (0, h.Pv)(),
        H = (0, d.bG)([g.default], () => g.default.getCurrentUser()),
        G = (0, y.VG)(w),
        B = r.useRef(null),
        K = T.Ay.canUseCollectibles(H),
        V = r.useMemo(() => (0, x.fT)(w, K), [w, K]),
        W = (0, v.V_)(w);
    if (null == w) return null;
    let [Y] = w.items;
    o()(null != Y, "Product item should not be empty");
    let z = null != F && F.id !== H?.id && w.type !== u.R.BUNDLE && Y.type !== u.R.NAMEPLATE && !M;
    return (0, l.jsxs)("div", {
        className: j,
        children: [
            k &&
                (0, l.jsx)("div", {
                    className: s()(b.QU, U),
                    children: (0, l.jsx)(c.D, {
                        label: P.intl.string(P.t.PpoJzt),
                        children:
                            z &&
                            (0, l.jsx)(
                                C.Y,
                                {
                                    targetElementRef: B,
                                    preload: () => (0, _.A)(F.id, F.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, l.jsx)(f.A, {
                                            ...e,
                                            user: F,
                                            pendingAvatar: F.getAvatarURL(null, (0, p.FT)(p._3.SIZE_80)),
                                            pendingAvatarDecoration: (0, I.T)(Y) ? Y : null,
                                            pendingProfileEffect: (0, O.C3)(Y) ? Y : null,
                                            canUsePremiumCustomization: !0,
                                            disabledInputs: !0,
                                            hideExampleButton: !0,
                                        }),
                                    align: "center",
                                    position: "right",
                                    children: (e) =>
                                        (0, l.jsx)(m.D, {
                                            ...e,
                                            className: b.Nx,
                                            innerRef: B,
                                            children: (0, l.jsx)(E.E, {
                                                variant: "text-xs/medium",
                                                color: "text-link",
                                                children: P.intl.string(P.t["2GnJQL"]),
                                            }),
                                        }),
                                },
                                F.id,
                            ),
                    }),
                }),
            (0, l.jsxs)(m.D, {
                tag: "div",
                onClick: () => {
                    null != t && null != L && L(t);
                },
                className: s()(b.i1, { [b.no]: n && null == D, [b.cN]: n && null != D }),
                children: [
                    (0, l.jsxs)("div", {
                        className: b.Ug,
                        children: [
                            (0, l.jsx)(N.O, { product: w, fallbackLabel: null }),
                            (0, l.jsxs)("div", {
                                className: b.JZ,
                                children: [
                                    (0, l.jsx)(E.E, { variant: "text-md/semibold", children: G }),
                                    (0, l.jsx)(A.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children: (() => {
                                            if (w?.type === u.R.BUNDLE) return null;
                                            switch (Y.type) {
                                                case u.R.AVATAR_DECORATION:
                                                    return P.intl.string(P.t["7v0T9P"]);
                                                case u.R.PROFILE_EFFECT:
                                                    return P.intl.string(P.t.wR5wOo);
                                                case u.R.NAMEPLATE:
                                                    return P.intl.string(P.t.x5CoXR);
                                                default:
                                                    return null;
                                            }
                                        })(),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(R.x, {
                                priceAmount: i,
                                priceCurrency: a,
                                discount: V,
                                discountOfferAmount: W,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    n &&
                        null != D &&
                        (0, l.jsx)("div", {
                            className: b.Wh,
                            children: (0, l.jsx)(E.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                children: D,
                            }),
                        }),
                ],
            }),
        ],
    });
};
