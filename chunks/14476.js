n.d(t, { c: () => h });
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
    f = n(632939);
let h = (e) => {
    let {
            skuId: t,
            assetId: n,
            user: a,
            claimed: h,
            onSelect: m,
            productName: x,
            a11yLabel: j,
            selectedSkuId: g,
            category: b,
        } = e,
        y = i.useRef(null),
        { isHoveringOrFocusing: L } = (0, c.Z)(y),
        v = !h && L,
        S = (0, C.ZP)(),
        O = (0, s.wj)(S),
        P = {
            type: o.Z.AVATAR_DECORATION,
            label: j,
            asset: n,
        };
    return (0, r.jsx)(d.tEY, {
        children: (0, r.jsxs)(d.kL8, {
            ref: y,
            "aria-label": null != x ? x : "",
            onClick: () => {
                null == t || null == m || h || m(t);
            },
            className: l()(O ? f.shopCardDark : f.shopCard, {
                [f.shopCardAnimation]: !h,
                [O ? f.shopCardDarkHighlighted : f.shopCardHighlighted]: v,
                [f.shopCardSelected]: g === t,
            }),
            children: [
                (0, r.jsx)("div", {
                    className: l()(f.preview, {
                        [f.previewTrick]: b === u.KN.Trick,
                        [f.previewTreat]: b === u.KN.Treat,
                        [f.shopCardClaimed]: h,
                    }),
                    children: (0, r.jsx)(p.R, {
                        item: P,
                        user: a,
                        isHighlighted: v,
                        avatarSize: d.EFr.SIZE_120,
                        isPurchased: h,
                    }),
                }),
                h &&
                    (0, r.jsx)(d.dz2, {
                        size: "custom",
                        width: 48,
                        height: 48,
                        color: d.TVs.colors.WHITE,
                        className: f.claimedIcon,
                    }),
                (0, r.jsxs)("div", {
                    className: f.productName,
                    children: [
                        (0, r.jsx)(d.X6q, {
                            variant: "text-md/bold",
                            children: x,
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: "text-md/normal",
                            children: h ? _.intl.string(_.t["6cfuDg"]) : _.intl.string(_.t.QQsaCQ),
                        }),
                    ],
                }),
            ],
        }),
    });
};
