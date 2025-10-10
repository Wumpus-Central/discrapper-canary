n.d(t, { c: () => f });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(979554),
    s = n(780384),
    d = n(481060),
    c = n(410030),
    C = n(104505),
    u = n(699758),
    p = n(616066),
    _ = n(388032),
    h = n(632939);
let f = (e) => {
    let {
            skuId: t,
            assetId: n,
            user: a,
            claimed: f,
            onSelect: m,
            productName: x,
            a11yLabel: g,
            selectedSkuId: j,
            category: b,
        } = e,
        v = i.useRef(null),
        { isHoveringOrFocusing: y } = (0, C.Z)(v),
        S = !f && y,
        L = (0, c.ZP)(),
        I = (0, s.wj)(L),
        w = {
            type: o.Z.AVATAR_DECORATION,
            label: g,
            asset: n,
        };
    return (0, r.jsx)(d.tEY, {
        children: (0, r.jsxs)(d.kL8, {
            ref: v,
            "aria-label": null != x ? x : "",
            onClick: () => {
                null == t || null == m || f || m(t);
            },
            className: l()(I ? h.shopCardDark : h.shopCard, {
                [h.shopCardAnimation]: !f,
                [I ? h.shopCardDarkHighlighted : h.shopCardHighlighted]: S,
                [h.shopCardSelected]: j === t,
            }),
            children: [
                (0, r.jsx)("div", {
                    className: l()(h.preview, {
                        [h.previewTrick]: b === u.KN.Trick,
                        [h.previewTreat]: b === u.KN.Treat,
                        [h.shopCardClaimed]: f,
                    }),
                    children: (0, r.jsx)(p.R, {
                        item: w,
                        user: a,
                        isHighlighted: S,
                        avatarSize: d.EFr.SIZE_120,
                        isPurchased: f,
                    }),
                }),
                f &&
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
                        (0, r.jsx)(d.X6q, {
                            variant: "text-md/bold",
                            children: x,
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: "text-md/normal",
                            children: f ? _.intl.string(_.t["6cfuDg"]) : _.intl.string(_.t.QQsaCQ),
                        }),
                    ],
                }),
            ],
        }),
    });
};
