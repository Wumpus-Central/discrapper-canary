n.d(t, { c: () => x });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(979554),
    o = n(780384),
    d = n(481060),
    C = n(410030),
    c = n(104505),
    u = n(699758),
    p = n(616066),
    h = n(396728),
    m = n(388032),
    f = n(632939);
let x = (e) => {
    let t,
        n,
        {
            skuId: l,
            assetId: x,
            user: _,
            claimed: j,
            onSelect: g,
            productName: b,
            a11yLabel: y,
            selectedSkuId: v,
            category: L,
            type: S,
            palette: O,
        } = e,
        P = i.useRef(null),
        { isHoveringOrFocusing: E } = (0, c.Z)(P),
        w = !j && E,
        I = (0, C.ZP)(),
        M = (0, o.wj)(I);
    return (
        S === s.Z.AVATAR_DECORATION
            ? ((t = {
                  type: s.Z.AVATAR_DECORATION,
                  label: y,
                  asset: x,
              }),
              (n = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(p.R, {
                          item: t,
                          user: _,
                          isHighlighted: w,
                          avatarSize: d.EFr.SIZE_96,
                          isPurchased: j,
                      }),
                      j &&
                          (0, r.jsx)(d.dz2, {
                              size: "custom",
                              width: 48,
                              height: 48,
                              color: d.TVs.colors.WHITE,
                              className: f.claimedIcon,
                          }),
                  ],
              })))
            : S === s.Z.NAMEPLATE &&
              ((t = {
                  type: s.Z.NAMEPLATE,
                  label: y,
                  asset: x,
                  palette: null != O ? O : "none",
              }),
              (n = (0, r.jsx)(h.Z, {
                  nameplate: t,
                  user: _,
                  isHighlighted: w,
                  isPurchased: j,
                  size: "small",
              }))),
        (0, r.jsx)(d.tEY, {
            children: (0, r.jsxs)(d.kL8, {
                ref: P,
                "aria-label": null != b ? b : "",
                onClick: () => {
                    null == l || null == g || j || g(l);
                },
                className: a()(M ? f.shopCardDark : f.shopCard, {
                    [f.shopCardAnimation]: !j,
                    [M ? f.shopCardDarkHighlighted : f.shopCardHighlighted]: w,
                    [f.shopCardSelected]: v === l,
                }),
                children: [
                    (0, r.jsx)("div", {
                        className: a()(f.preview, {
                            [f.avatarPreview]: S === s.Z.AVATAR_DECORATION,
                            [f.nameplatePreview]: S === s.Z.NAMEPLATE,
                            [f.previewTrick]: L === u.KN.Trick,
                            [f.previewTreat]: L === u.KN.Treat,
                            [f.shopCardClaimed]: j,
                        }),
                        children: null != t && n,
                    }),
                    (0, r.jsxs)("div", {
                        className: f.productName,
                        children: [
                            (0, r.jsx)(d.Heading, {
                                variant: "heading-md/extrabold",
                                children: b,
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: j ? m.intl.string(m.t["6cfuDj"]) : m.intl.string(m.t.QQsaCc),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
};
