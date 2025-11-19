n.d(t, { c: () => g });
var r = n(54381),
    l = n(473749),
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
            onSelect: y,
            productName: P,
            a11yLabel: S,
            selectedSkuId: j,
            category: _,
            type: w,
            palette: O,
        } = e,
        C = l.useRef(null),
        { isHoveringOrFocusing: k } = (0, u.Z)(C),
        E = !x && k,
        I = (0, c.ZP)(),
        T = (0, s.wj)(I);
    return (
        w === o.Z.AVATAR_DECORATION
            ? ((t = {
                  type: o.Z.AVATAR_DECORATION,
                  label: S,
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
            : w === o.Z.NAMEPLATE &&
              ((t = {
                  type: o.Z.NAMEPLATE,
                  label: S,
                  asset: g,
                  palette: null != O ? O : "none",
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
                ref: C,
                "aria-label": null != P ? P : "",
                onClick: () => {
                    null == a || null == y || x || y(a);
                },
                className: i()(T ? b.shopCardDark : b.shopCard, {
                    [b.shopCardAnimation]: !x,
                    [T ? b.shopCardDarkHighlighted : b.shopCardHighlighted]: E,
                    [b.shopCardSelected]: j === a,
                }),
                children: [
                    (0, r.jsx)("div", {
                        className: i()(b.preview, {
                            [b.avatarPreview]: w === o.Z.AVATAR_DECORATION,
                            [b.nameplatePreview]: w === o.Z.NAMEPLATE,
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
                                children: P,
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
