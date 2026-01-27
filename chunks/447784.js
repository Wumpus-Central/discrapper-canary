t.d(n, {
    k: () => E,
});
var l = t(627968),
    r = t(64700),
    i = t(503698),
    s = t.n(i),
    a = t(575593),
    o = t(397927),
    u = t(713517),
    c = t(674658),
    d = t(898461),
    p = t(837015),
    m = t(929283),
    g = t(761365),
    f = t(985018),
    j = t(836314);
let E = (e) => {
    var n;
    let t,
        i,
        { skuId: E, user: x, claimed: h, onSelect: T, selectedSkuId: P } = e,
        S = r.useRef(null),
        { isHoveringOrFocusing: b } = (0, u.A)(S),
        A = !h && b,
        { product: y } = (0, c.q)(E);
    if (null == y) return null;
    let v = y.items[0];
    return null == v
        ? null
        : ((0, d.T)(v)
              ? ((i = a.R.AVATAR_DECORATION),
                (t = (0, l.jsx)(m.i, {
                    item: v,
                    user: x,
                    isHighlighted: A,
                    avatarSize: o._3J.SIZE_96,
                })))
              : (0, p.F)(v) &&
                ((i = a.R.NAMEPLATE),
                (t = (0, l.jsx)(g.A, {
                    nameplate: v,
                    user: x,
                    isHighlighted: A,
                    size: "small",
                }))),
          (0, l.jsx)(o.vN3, {
              children: (0, l.jsxs)(o.sqX, {
                  ref: S,
                  "aria-label": null != (n = y.name) ? n : "",
                  onClick: () => {
                      null == E || null == T || h || T(E);
                  },
                  className: s()(j._x, {
                      [j.Vp]: !h,
                      [j.mr]: A,
                      [j.md]: P === E,
                  }),
                  children: [
                      (0, l.jsx)("div", {
                          className: s()(j.VH, {
                              [j._Q]: i === a.R.AVATAR_DECORATION,
                              [j.M4]: i === a.R.NAMEPLATE,
                          }),
                          children:
                              null != t
                                  ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)("div", {
                                                className: s()(j.i1, {
                                                    [j.Sf]: h,
                                                }),
                                                children: t,
                                            }),
                                            h &&
                                                (0, l.jsx)(o.rOg, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: j.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, l.jsxs)("div", {
                          className: j.tZ,
                          children: [
                              (0, l.jsx)(o.Heading, {
                                  variant: "heading-md/extrabold",
                                  children: y.name,
                              }),
                              (0, l.jsx)(o.Text, {
                                  variant: "text-sm/normal",
                                  children: h ? f.intl.string(f.t["6cfuDj"]) : f.intl.string(f.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
};
