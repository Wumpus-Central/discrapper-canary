n.d(t, { c: () => m });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    s = n(979554),
    o = n(780384),
    d = n(481060),
    c = n(410030),
    C = n(104505),
    u = n(699758),
    p = n(616066),
    h = n(388032),
    _ = n(632939);
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
        v = i.useRef(null),
        { isHoveringOrFocusing: S } = (0, C.Z)(v),
        L = !m && S,
        y = (0, c.ZP)(),
        I = (0, o.wj)(y),
        w = {
            type: s.Z.AVATAR_DECORATION,
            label: g,
            asset: n,
        };
    return (0, r.jsx)(d.tEY, {
        children: (0, r.jsxs)(d.kL8, {
            ref: v,
            "aria-label": null != x ? x : "",
            onClick: () => {
                null == t || null == f || m || f(t);
            },
            className: l()(I ? _.shopCardDark : _.shopCard, {
                [_.shopCardAnimation]: !m,
                [I ? _.shopCardDarkHighlighted : _.shopCardHighlighted]: L,
                [_.shopCardSelected]: j === t,
            }),
            children: [
                (0, r.jsx)("div", {
                    className: l()(_.preview, {
                        [_.previewTrick]: b === u.KN.Trick,
                        [_.previewTreat]: b === u.KN.Treat,
                        [_.shopCardClaimed]: m,
                    }),
                    children: (0, r.jsx)(p.R, {
                        item: w,
                        user: a,
                        isHighlighted: L,
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
                        className: _.claimedIcon,
                    }),
                (0, r.jsxs)("div", {
                    className: _.productName,
                    children: [
                        (0, r.jsx)(d.Heading, {
                            variant: "text-md/bold",
                            children: x,
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: "text-md/normal",
                            children: m ? h.intl.string(h.t["6cfuDg"]) : h.intl.string(h.t.QQsaCQ),
                        }),
                    ],
                }),
            ],
        }),
    });
};
