n.d(t, { c: () => _ });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(979554),
    o = n(780384),
    d = n(481060),
    c = n(410030),
    C = n(104505),
    u = n(699758),
    p = n(616066),
    h = n(388032),
    m = n(632939);
let _ = (e) => {
    let {
            skuId: t,
            assetId: n,
            user: l,
            claimed: _,
            onSelect: f,
            productName: x,
            a11yLabel: j,
            selectedSkuId: g,
            category: b,
        } = e,
        L = i.useRef(null),
        { isHoveringOrFocusing: v } = (0, C.Z)(L),
        y = !_ && v,
        S = (0, c.ZP)(),
        I = (0, o.wj)(S),
        w = {
            type: s.Z.AVATAR_DECORATION,
            label: j,
            asset: n,
        };
    return (0, r.jsx)(d.tEY, {
        children: (0, r.jsxs)(d.kL8, {
            ref: L,
            "aria-label": null != x ? x : "",
            onClick: () => {
                null == t || null == f || _ || f(t);
            },
            className: a()(I ? m.shopCardDark : m.shopCard, {
                [m.shopCardAnimation]: !_,
                [I ? m.shopCardDarkHighlighted : m.shopCardHighlighted]: y,
                [m.shopCardSelected]: g === t,
            }),
            children: [
                (0, r.jsx)("div", {
                    className: a()(m.preview, {
                        [m.previewTrick]: b === u.KN.Trick,
                        [m.previewTreat]: b === u.KN.Treat,
                        [m.shopCardClaimed]: _,
                    }),
                    children: (0, r.jsx)(p.R, {
                        item: w,
                        user: l,
                        isHighlighted: y,
                        avatarSize: d.EFr.SIZE_120,
                        isPurchased: _,
                    }),
                }),
                _ &&
                    (0, r.jsx)(d.dz2, {
                        size: "custom",
                        width: 48,
                        height: 48,
                        color: d.TVs.colors.WHITE,
                        className: m.claimedIcon,
                    }),
                (0, r.jsxs)("div", {
                    className: m.productName,
                    children: [
                        (0, r.jsx)(d.Heading, {
                            variant: "text-md/bold",
                            children: x,
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: "text-md/normal",
                            children: _ ? h.intl.string(h.t["6cfuDj"]) : h.intl.string(h.t.QQsaCc),
                        }),
                    ],
                }),
            ],
        }),
    });
};
