n.d(t, { c: () => m });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(979554),
    s = n(780384),
    d = n(481060),
    C = n(410030),
    c = n(104505),
    u = n(699758),
    p = n(616066),
    _ = n(388032),
    h = n(632939);
let m = (e) => {
    let {
            skuId: t,
            assetId: n,
            user: a,
            claimed: m,
            onSelect: f,
            productName: x,
            a11yLabel: g,
            selectedSkuId: j,
            category: b,
        } = e,
        y = i.useRef(null),
        { isHoveringOrFocusing: L } = (0, c.Z)(y),
        v = !m && L,
        S = (0, C.ZP)(),
        w = (0, s.wj)(S),
        I = {
            type: o.Z.AVATAR_DECORATION,
            label: g,
            asset: n,
        };
    return (0, r.jsx)(d.tEY, {
        children: (0, r.jsxs)(d.kL8, {
            ref: y,
            "aria-label": null != x ? x : "",
            onClick: () => {
                null == t || null == f || m || f(t);
            },
            className: l()(w ? h.shopCardDark : h.shopCard, {
                [h.shopCardAnimation]: !m,
                [w ? h.shopCardDarkHighlighted : h.shopCardHighlighted]: v,
                [h.shopCardSelected]: j === t,
            }),
            children: [
                (0, r.jsx)("div", {
                    className: l()(h.preview, {
                        [h.previewTrick]: b === u.KN.Trick,
                        [h.previewTreat]: b === u.KN.Treat,
                        [h.shopCardClaimed]: m,
                    }),
                    children: (0, r.jsx)(p.R, {
                        item: I,
                        user: a,
                        isHighlighted: v,
                        avatarSize: d.EFr.SIZE_120,
                        isPurchased: m,
                    }),
                }),
                m &&
                    (0, r.jsx)(d.dz2, {
                        size: "custom",
                        width: 48,
                        height: 48,
                        color: d.TVs.colors.WHITE,
                        className: h.claimedIcon,
                    }),
                (0, r.jsxs)("div", {
                    className: h.productName,
                    children: [
                        (0, r.jsx)(d.Heading, {
                            variant: "text-md/bold",
                            children: x,
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: "text-md/normal",
                            children: m ? _.intl.string(_.t["6cfuDj"]) : _.intl.string(_.t.QQsaCc),
                        }),
                    ],
                }),
            ],
        }),
    });
};
