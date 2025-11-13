n.d(t, { c: () => g });
var r = n(951288),
    l = n(647438),
    a = n(120356),
    i = n.n(a),
    o = n(979554),
    s = n(780384),
    d = n(481060),
    c = n(410030),
    u = n(104505),
    p = n(699758),
    m = n(616066),
    h = n(396728),
    f = n(388032),
    b = n(632939);
let g = (e) => {
    let t,
        n,
        {
            skuId: a,
            assetId: g,
            user: v,
            claimed: x,
            onSelect: j,
            productName: y,
            a11yLabel: P,
            selectedSkuId: S,
            category: _,
            type: O,
            palette: C,
        } = e,
        w = l.useRef(null),
        { isHoveringOrFocusing: k } = (0, u.Z)(w),
        E = !x && k,
        I = (0, c.ZP)(),
        T = (0, s.wj)(I);
    return (
        O === o.Z.AVATAR_DECORATION
            ? ((t = {
                  type: o.Z.AVATAR_DECORATION,
                  label: P,
                  asset: g,
              }),
              (n = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(m.R, {
                          item: t,
                          user: v,
                          isHighlighted: E,
                          avatarSize: d.EFr.SIZE_96,
                          isPurchased: x,
                      }),
                      x &&
                          (0, r.jsx)(d.dz2, {
                              size: "custom",
                              width: 48,
                              height: 48,
                              color: d.TVs.colors.WHITE,
                              className: b.claimedIcon,
                          }),
                  ],
              })))
            : O === o.Z.NAMEPLATE &&
              ((t = {
                  type: o.Z.NAMEPLATE,
                  label: P,
                  asset: g,
                  palette: null != C ? C : "none",
              }),
              (n = (0, r.jsx)(h.Z, {
                  nameplate: t,
                  user: v,
                  isHighlighted: E,
                  isPurchased: x,
                  size: "small",
              }))),
        (0, r.jsx)(d.tEY, {
            children: (0, r.jsxs)(d.kL8, {
                ref: w,
                "aria-label": null != y ? y : "",
                onClick: () => {
                    null == a || null == j || x || j(a);
                },
                className: i()(T ? b.shopCardDark : b.shopCard, {
                    [b.shopCardAnimation]: !x,
                    [T ? b.shopCardDarkHighlighted : b.shopCardHighlighted]: E,
                    [b.shopCardSelected]: S === a,
                }),
                children: [
                    (0, r.jsx)("div", {
                        className: i()(b.preview, {
                            [b.avatarPreview]: O === o.Z.AVATAR_DECORATION,
                            [b.nameplatePreview]: O === o.Z.NAMEPLATE,
                            [b.previewTrick]: _ === p.KN.Trick,
                            [b.previewTreat]: _ === p.KN.Treat,
                            [b.shopCardClaimed]: x,
                        }),
                        children: null != t && n,
                    }),
                    (0, r.jsxs)("div", {
                        className: b.productName,
                        children: [
                            (0, r.jsx)(d.Heading, {
                                variant: "heading-md/extrabold",
                                children: y,
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: x ? f.intl.string(f.t["6cfuDj"]) : f.intl.string(f.t.QQsaCc),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
};
