n.d(t, { c: () => f });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(979554),
    o = n(780384),
    C = n(481060),
    d = n(727637),
    c = n(410030),
    p = n(699758),
    u = n(616066),
    x = n(466679),
    _ = n(388032),
    h = n(632939);
let f = (e) => {
    let {
            skuId: t,
            assetId: n,
            user: l,
            claimed: f,
            onSelect: j,
            productName: m,
            a11yLabel: L,
            selectedSkuId: b,
            category: g,
        } = e,
        y = i.useRef(null),
        S = (0, d.Z)(y),
        E = (0, x.m)(y),
        v = !f && (S || E),
        P = (0, c.ZP)(),
        O = (0, o.wj)(P),
        w = {
            type: a.Z.AVATAR_DECORATION,
            label: L,
            asset: n,
        };
    return (0, r.jsx)(C.tEY, {
        children: (0, r.jsxs)(C.kL8, {
            ref: y,
            "aria-label": null != m ? m : "",
            onClick: () => {
                null != t && null != j && j(t);
            },
            className: s()(O ? h.shopCardDark : h.shopCard, {
                [h.shopCardAnimation]: v,
                [O ? h.shopCardDarkHighlighted : h.shopCardHighlighted]: v,
                [h.shopCardSelected]: b === t,
            }),
            children: [
                (0, r.jsx)("div", {
                    className: s()(h.preview, {
                        [h.previewTrick]: g === p.KN.Trick,
                        [h.previewTreat]: g === p.KN.Treat,
                        [h.shopCardClaimed]: f,
                    }),
                    children: (0, r.jsx)(u.R, {
                        item: w,
                        user: l,
                        isHighlighted: v,
                        avatarSize: C.EFr.SIZE_120,
                        isPurchased: f,
                    }),
                }),
                f &&
                    (0, r.jsx)(C.dz2, {
                        size: "custom",
                        width: 48,
                        height: 48,
                        color: C.TVs.colors.WHITE,
                        className: h.claimedIcon,
                    }),
                (0, r.jsxs)("div", {
                    className: h.productName,
                    children: [
                        (0, r.jsx)(C.X6q, {
                            variant: "text-lg/bold",
                            children: m,
                        }),
                        (0, r.jsx)(C.Text, {
                            variant: "text-md/normal",
                            children: f ? _.intl.string(_.t["6cfuDg"]) : _.intl.string(_.t.QQsaCQ),
                        }),
                    ],
                }),
            ],
        }),
    });
};
