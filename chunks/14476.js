n.d(t, { c: () => f });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(979554),
    o = n(481060),
    u = n(104505),
    c = n(699758),
    d = n(616066),
    p = n(396728),
    m = n(388032),
    h = n(252728);
let f = (e) => {
    let t,
        n,
        {
            skuId: i,
            assetId: f,
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
        P === s.Z.AVATAR_DECORATION
            ? ((t = {
                  type: s.Z.AVATAR_DECORATION,
                  label: b,
                  asset: f,
              }),
              (n = (0, r.jsx)(d.R, {
                  item: t,
                  user: g,
                  isHighlighted: I,
                  avatarSize: o.EFr.SIZE_96,
              })))
            : P === s.Z.NAMEPLATE &&
              ((t = {
                  type: s.Z.NAMEPLATE,
                  label: b,
                  asset: f,
                  palette: null != x ? x : "none",
              }),
              (n = (0, r.jsx)(p.Z, {
                  nameplate: t,
                  user: g,
                  isHighlighted: I,
                  size: "small",
              }))),
        (0, r.jsx)(o.tEY, {
            children: (0, r.jsxs)(o.kL8, {
                ref: E,
                "aria-label": null != v ? v : "",
                onClick: () => {
                    null == i || null == j || y || j(i);
                },
                className: a()(h.shopCard, {
                    [h.shopCardAnimation]: !y,
                    [h.highlighted]: I,
                    [h.shopCardSelected]: O === i,
                }),
                children: [
                    (0, r.jsx)("div", {
                        className: a()(h.preview, {
                            [h.avatarPreview]: P === s.Z.AVATAR_DECORATION,
                            [h.nameplatePreview]: P === s.Z.NAMEPLATE,
                            [h.previewTrick]: S === c.KN.Trick,
                            [h.previewTreat]: S === c.KN.Treat,
                        }),
                        children:
                            null != t
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: a()(h.previewContainer, { [h.claimed]: y }),
                                              children: n,
                                          }),
                                          y &&
                                              (0, r.jsx)(o.sV5, {
                                                  size: "custom",
                                                  width: 48,
                                                  height: 48,
                                                  color: o.TVs.colors.INTERACTIVE_TEXT_ACTIVE,
                                                  className: h.claimedIcon,
                                              }),
                                      ],
                                  })
                                : null,
                    }),
                    (0, r.jsxs)("div", {
                        className: h.productName,
                        children: [
                            (0, r.jsx)(o.Heading, {
                                variant: "heading-md/extrabold",
                                children: v,
                            }),
                            (0, r.jsx)(o.Text, {
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
