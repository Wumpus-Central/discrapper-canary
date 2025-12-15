n.d(t, { c: () => h });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(979554),
    s = n(481060),
    u = n(104505),
    c = n(699758),
    d = n(616066),
    p = n(396728),
    m = n(388032),
    f = n(252728);
let h = (e) => {
    let t,
        n,
        {
            skuId: i,
            assetId: h,
            user: g,
            claimed: y,
            onSelect: j,
            productName: v,
            a11yLabel: b,
            selectedSkuId: O,
            category: S,
            type: P,
            palette: x,
        } = e,
        E = l.useRef(null),
        { isHoveringOrFocusing: w } = (0, u.Z)(E),
        I = !y && w;
    return (
        P === o.Z.AVATAR_DECORATION
            ? ((t = {
                  type: o.Z.AVATAR_DECORATION,
                  label: b,
                  asset: h,
              }),
              (n = (0, r.jsx)(d.R, {
                  item: t,
                  user: g,
                  isHighlighted: I,
                  avatarSize: s.EFr.SIZE_96,
              })))
            : P === o.Z.NAMEPLATE &&
              ((t = {
                  type: o.Z.NAMEPLATE,
                  label: b,
                  asset: h,
                  palette: null != x ? x : "none",
              }),
              (n = (0, r.jsx)(p.Z, {
                  nameplate: t,
                  user: g,
                  isHighlighted: I,
                  size: "small",
              }))),
        (0, r.jsx)(s.tEY, {
            children: (0, r.jsxs)(s.kL8, {
                ref: E,
                "aria-label": null != v ? v : "",
                onClick: () => {
                    null == i || null == j || y || j(i);
                },
                className: a()(f.shopCard, {
                    [f.shopCardAnimation]: !y,
                    [f.highlighted]: I,
                    [f.shopCardSelected]: O === i,
                }),
                children: [
                    (0, r.jsx)("div", {
                        className: a()(f.preview, {
                            [f.avatarPreview]: P === o.Z.AVATAR_DECORATION,
                            [f.nameplatePreview]: P === o.Z.NAMEPLATE,
                            [f.previewTrick]: S === c.KN.Trick,
                            [f.previewTreat]: S === c.KN.Treat,
                        }),
                        children:
                            null != t
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: a()(f.previewContainer, { [f.claimed]: y }),
                                              children: n,
                                          }),
                                          y &&
                                              (0, r.jsx)(s.sV5, {
                                                  size: "custom",
                                                  width: 48,
                                                  height: 48,
                                                  color: s.TVs.colors.INTERACTIVE_TEXT_ACTIVE,
                                                  className: f.claimedIcon,
                                              }),
                                      ],
                                  })
                                : null,
                    }),
                    (0, r.jsxs)("div", {
                        className: f.productName,
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "heading-md/extrabold",
                                children: v,
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                children: y ? m.intl.string(m.t["6cfuDj"]) : m.intl.string(m.t.QQsaCc),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
};
