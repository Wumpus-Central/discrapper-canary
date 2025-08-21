n.d(t, { c: () => h });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(979554),
    o = n(780384),
    C = n(481060),
    d = n(727637),
    c = n(410030),
    p = n(616066),
    u = n(466679),
    x = n(388032),
    f = n(632939);
let h = (e) => {
    let { skuId: t, assetId: n, user: l, onSelect: h, productName: _, a11yLabel: j, selectedSkuId: m } = e,
        L = i.useRef(null),
        b = (0, d.Z)(L),
        g = (0, u.m)(L),
        y = b || g,
        S = (0, c.ZP)(),
        v = (0, o.wj)(S),
        E = {
            type: s.Z.AVATAR_DECORATION,
            label: j,
            asset: n,
        };
    return (0, r.jsx)(C.tEY, {
        children: (0, r.jsxs)(C.kL8, {
            ref: L,
            "aria-label": null != _ ? _ : "",
            onClick: () => {
                null != t && null != h && h(t);
            },
            className: a()(v ? f.shopCardDark : f.shopCard, {
                [f.shopCardAnimation]: y,
                [v ? f.shopCardDarkHighlighted : f.shopCardHighlighted]: y,
                [f.shopCardSelected]: m === t,
            }),
            children: [
                (0, r.jsx)("div", {
                    className: f.preview,
                    children: (0, r.jsx)(p.R, {
                        item: E,
                        user: l,
                        isHighlighted: y,
                        avatarSize: C.EFr.SIZE_120,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: f.productName,
                    children: [
                        (0, r.jsx)(C.X6q, {
                            variant: "text-lg/bold",
                            children: _,
                        }),
                        (0, r.jsx)(C.Text, {
                            variant: "text-md/normal",
                            children: x.intl.string(x.t.QQsaCQ),
                        }),
                    ],
                }),
            ],
        }),
    });
};
