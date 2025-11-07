n.d(t, { c: () => x });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(979554),
    s = n(780384),
    C = n(481060),
    d = n(410030),
    c = n(104505),
    u = n(699758),
    p = n(616066),
    f = n(388032),
    h = n(632939);
let x = (e) => {
    let {
            skuId: t,
            assetId: n,
            user: l,
            claimed: x,
            onSelect: m,
            productName: _,
            a11yLabel: j,
            selectedSkuId: g,
            category: b,
        } = e,
        y = i.useRef(null),
        { isHoveringOrFocusing: L } = (0, c.Z)(y),
        v = !x && L,
        S = (0, d.ZP)(),
        O = (0, s.wj)(S),
        E = {
            type: o.Z.AVATAR_DECORATION,
            label: j,
            asset: n,
        };
    return (0, r.jsx)(C.tEY, {
        children: (0, r.jsxs)(C.kL8, {
            ref: y,
            "aria-label": null != _ ? _ : "",
            onClick: () => {
                null == t || null == m || x || m(t);
            },
            className: a()(O ? h.shopCardDark : h.shopCard, {
                [h.shopCardAnimation]: !x,
                [O ? h.shopCardDarkHighlighted : h.shopCardHighlighted]: v,
                [h.shopCardSelected]: g === t,
            }),
            children: [
                (0, r.jsx)("div", {
                    className: a()(h.preview, {
                        [h.previewTrick]: b === u.KN.Trick,
                        [h.previewTreat]: b === u.KN.Treat,
                        [h.shopCardClaimed]: x,
                    }),
                    children: (0, r.jsx)(p.R, {
                        item: E,
                        user: l,
                        isHighlighted: v,
                        avatarSize: C.EFr.SIZE_96,
                        isPurchased: x,
                    }),
                }),
                x &&
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
                        (0, r.jsx)(C.Heading, {
                            variant: "text-md/bold",
                            children: _,
                        }),
                        (0, r.jsx)(C.Text, {
                            variant: "text-md/normal",
                            children: x ? f.intl.string(f.t["6cfuDj"]) : f.intl.string(f.t.QQsaCc),
                        }),
                    ],
                }),
            ],
        }),
    });
};
