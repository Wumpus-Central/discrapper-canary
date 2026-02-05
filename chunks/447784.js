t.d(n, { k: () => x });
var i = t(627968),
    l = t(64700),
    r = t(503698),
    s = t.n(r),
    a = t(575593),
    o = t(397927),
    u = t(713517),
    d = t(674658),
    c = t(898461),
    p = t(837015),
    m = t(929283),
    E = t(761365),
    g = t(985018),
    _ = t(836314);
let x = (e) => {
    let n,
        t,
        { skuId: r, user: x, claimed: T, onSelect: h, selectedSkuId: P } = e,
        [A, S] = l.useState(null),
        I = l.useCallback((e) => {
            S(e);
        }, []),
        j = l.useMemo(() => ({ current: A }), [A]),
        { isHoveringOrFocusing: f } = (0, u.A)(j),
        R = !T && f,
        { product: C } = (0, d.q)(r);
    if (null == C) return null;
    let M = C.items[0];
    return null == M
        ? null
        : ((0, c.T)(M)
              ? ((t = a.R.AVATAR_DECORATION),
                (n = (0, i.jsx)(m.i, { item: M, user: x, isHighlighted: R, avatarSize: o._3J.SIZE_96 })))
              : (0, p.F)(M) &&
                ((t = a.R.NAMEPLATE),
                (n = (0, i.jsx)(E.A, { nameplate: M, user: x, isHighlighted: R, size: "small" }))),
          (0, i.jsx)(o.vN3, {
              children: (0, i.jsxs)(o.sqX, {
                  ref: I,
                  "aria-label": C.name ?? "",
                  onClick: () => {
                      null == r || null == h || T || h(r);
                  },
                  className: s()(_._x, { [_.Vp]: !T, [_.mr]: R, [_.md]: P === r }),
                  children: [
                      (0, i.jsx)("div", {
                          className: s()(_.VH, { [_._Q]: t === a.R.AVATAR_DECORATION, [_.M4]: t === a.R.NAMEPLATE }),
                          children:
                              null != n
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)("div", { className: s()(_.i1, { [_.Sf]: T }), children: n }),
                                            T &&
                                                (0, i.jsx)(o.rOg, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: _.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, i.jsxs)("div", {
                          className: _.tZ,
                          children: [
                              (0, i.jsx)(o.Heading, { variant: "heading-md/extrabold", children: C.name }),
                              (0, i.jsx)(o.Text, {
                                  variant: "text-sm/normal",
                                  children: T ? g.intl.string(g.t["6cfuDj"]) : g.intl.string(g.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
};
