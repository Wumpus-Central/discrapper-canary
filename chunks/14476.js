n.d(t, { c: () => _ });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(979554),
    o = n(780384),
    C = n(481060),
    d = n(727637),
    c = n(410030),
    p = n(616066),
    u = n(466679),
    x = n(388032),
    h = n(632939);
let _ = (e) => {
    let { skuId: t, assetId: n, user: l, claimed: _, onSelect: f, productName: j, a11yLabel: m, selectedSkuId: L } = e,
        g = i.useRef(null),
        b = (0, d.Z)(g),
        y = (0, u.m)(g),
        S = !_ && (b || y),
        E = (0, c.ZP)(),
        O = (0, o.wj)(E),
        P = {
            type: a.Z.AVATAR_DECORATION,
            label: m,
            asset: n,
        };
    return (0, r.jsx)(C.tEY, {
        children: (0, r.jsxs)(C.kL8, {
            ref: g,
            "aria-label": null != j ? j : "",
            onClick: () => {
                null != t && null != f && f(t);
            },
            className: s()(O ? h.shopCardDark : h.shopCard, {
                [h.shopCardAnimation]: S,
                [O ? h.shopCardDarkHighlighted : h.shopCardHighlighted]: S,
                [h.shopCardSelected]: L === t,
            }),
            children: [
                (0, r.jsx)("div", {
                    className: s()(h.preview, { [h.shopCardClaimed]: _ }),
                    children: (0, r.jsx)(p.R, {
                        item: P,
                        user: l,
                        isHighlighted: S,
                        avatarSize: C.EFr.SIZE_120,
                        isPurchased: _,
                    }),
                }),
                _ &&
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
                            children: j,
                        }),
                        (0, r.jsx)(C.Text, {
                            variant: "text-md/normal",
                            children: _ ? x.intl.string(x.t["6cfuDg"]) : x.intl.string(x.t.QQsaCQ),
                        }),
                    ],
                }),
            ],
        }),
    });
};
