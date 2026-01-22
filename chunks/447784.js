n.d(t, { k: () => g });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(575593),
    o = n(397927),
    u = n(713517),
    c = n(68545),
    d = n(929283),
    p = n(761365),
    m = n(985018),
    f = n(836314);
let g = (e) => {
    let t,
        n,
        {
            skuId: i,
            assetId: g,
            user: j,
            claimed: y,
            onSelect: h,
            productName: v,
            a11yLabel: b,
            selectedSkuId: O,
            category: x,
            type: P,
            palette: S,
        } = e,
        E = r.useRef(null),
        { isHoveringOrFocusing: T } = (0, u.A)(E),
        I = !y && T;
    return (
        P === a.R.AVATAR_DECORATION
            ? ((t = {
                  type: a.R.AVATAR_DECORATION,
                  label: b,
                  asset: g,
              }),
              (n = (0, l.jsx)(d.i, {
                  item: t,
                  user: j,
                  isHighlighted: I,
                  avatarSize: o._3J.SIZE_96,
              })))
            : P === a.R.NAMEPLATE &&
              ((t = {
                  type: a.R.NAMEPLATE,
                  label: b,
                  asset: g,
                  palette: null != S ? S : "none",
              }),
              (n = (0, l.jsx)(p.A, {
                  nameplate: t,
                  user: j,
                  isHighlighted: I,
                  size: "small",
              }))),
        (0, l.jsx)(o.vN3, {
            children: (0, l.jsxs)(o.sqX, {
                ref: E,
                "aria-label": null != v ? v : "",
                onClick: () => {
                    null == i || null == h || y || h(i);
                },
                className: s()(f._x, {
                    [f.Vp]: !y,
                    [f.mr]: I,
                    [f.md]: O === i,
                }),
                children: [
                    (0, l.jsx)("div", {
                        className: s()(f.VH, {
                            [f._Q]: P === a.R.AVATAR_DECORATION,
                            [f.M4]: P === a.R.NAMEPLATE,
                            [f.S1]: x === c.Sm.Trick,
                            [f.LX]: x === c.Sm.Treat,
                        }),
                        children:
                            null != t
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)("div", {
                                              className: s()(f.i1, { [f.Sf]: y }),
                                              children: n,
                                          }),
                                          y &&
                                              (0, l.jsx)(o.rOg, {
                                                  size: "custom",
                                                  width: 48,
                                                  height: 48,
                                                  color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
                                                  className: f.j0,
                                              }),
                                      ],
                                  })
                                : null,
                    }),
                    (0, l.jsxs)("div", {
                        className: f.tZ,
                        children: [
                            (0, l.jsx)(o.Heading, {
                                variant: "heading-md/extrabold",
                                children: v,
                            }),
                            (0, l.jsx)(o.Text, {
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
