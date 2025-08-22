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
    let { skuId: t, assetId: n, user: l, onSelect: _, productName: f, a11yLabel: j, selectedSkuId: m } = e,
        L = i.useRef(null),
        g = (0, d.Z)(L),
        b = (0, u.m)(L),
        y = g || b,
        S = (0, c.ZP)(),
        E = (0, o.wj)(S),
        O = {
            type: a.Z.AVATAR_DECORATION,
            label: j,
            asset: n,
        };
    return (0, r.jsx)(C.tEY, {
        children: (0, r.jsxs)(C.kL8, {
            ref: L,
            "aria-label": null != f ? f : "",
            onClick: () => {
                null != t && null != _ && _(t);
            },
            className: s()(E ? h.shopCardDark : h.shopCard, {
                [h.shopCardAnimation]: y,
                [E ? h.shopCardDarkHighlighted : h.shopCardHighlighted]: y,
                [h.shopCardSelected]: m === t,
            }),
            children: [
                (0, r.jsx)("div", {
                    className: h.preview,
                    children: (0, r.jsx)(p.R, {
                        item: O,
                        user: l,
                        isHighlighted: y,
                        avatarSize: C.EFr.SIZE_120,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: h.productName,
                    children: [
                        (0, r.jsx)(C.X6q, {
                            variant: "text-lg/bold",
                            children: f,
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
