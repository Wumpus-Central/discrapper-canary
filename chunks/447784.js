t.d(n, {
    k: () => j,
}),
    t(896048);
var r = t(627968),
    l = t(64700),
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
    E = t(836314);
let j = (e) => {
    var n;
    let t,
        i,
        { skuId: j, user: x, claimed: h, onSelect: T, selectedSkuId: P } = e,
        [S, A] = l.useState(null),
        b = l.useCallback((e) => {
            A(e);
        }, []),
        y = l.useMemo(
            () => ({
                current: S,
            }),
            [S],
        ),
        { isHoveringOrFocusing: I } = (0, u.A)(y),
        O = !h && I,
        { product: v } = (0, c.q)(j);
    if (null == v) return null;
    let _ = v.items[0];
    return null == _
        ? null
        : ((0, d.T)(_)
              ? ((i = a.R.AVATAR_DECORATION),
                (t = (0, r.jsx)(m.i, {
                    item: _,
                    user: x,
                    isHighlighted: O,
                    avatarSize: o._3J.SIZE_96,
                })))
              : (0, p.F)(_) &&
                ((i = a.R.NAMEPLATE),
                (t = (0, r.jsx)(g.A, {
                    nameplate: _,
                    user: x,
                    isHighlighted: O,
                    size: "small",
                }))),
          (0, r.jsx)(o.vN3, {
              children: (0, r.jsxs)(o.sqX, {
                  ref: b,
                  "aria-label": null != (n = v.name) ? n : "",
                  onClick: () => {
                      null == j || null == T || h || T(j);
                  },
                  className: s()(E._x, {
                      [E.Vp]: !h,
                      [E.mr]: O,
                      [E.md]: P === j,
                  }),
                  children: [
                      (0, r.jsx)("div", {
                          className: s()(E.VH, {
                              [E._Q]: i === a.R.AVATAR_DECORATION,
                              [E.M4]: i === a.R.NAMEPLATE,
                          }),
                          children:
                              null != t
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: s()(E.i1, {
                                                    [E.Sf]: h,
                                                }),
                                                children: t,
                                            }),
                                            h &&
                                                (0, r.jsx)(o.rOg, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: E.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, r.jsxs)("div", {
                          className: E.tZ,
                          children: [
                              (0, r.jsx)(o.Heading, {
                                  variant: "heading-md/extrabold",
                                  children: v.name,
                              }),
                              (0, r.jsx)(o.Text, {
                                  variant: "text-sm/normal",
                                  children: h ? f.intl.string(f.t["6cfuDj"]) : f.intl.string(f.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
};
