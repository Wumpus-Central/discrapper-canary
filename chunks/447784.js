n.d(t, { k: () => g });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(575593),
    o = n(778712),
    u = n(187322),
    d = n(890856),
    c = n(947641),
    p = n(827734),
    m = n(534514),
    E = n(834730),
    S = n(713517),
    _ = n(674658),
    I = n(898461),
    P = n(837015),
    A = n(929283),
    x = n(761365),
    h = n(985018),
    T = n(267861);
let g = (e) => {
    let t,
        n,
        { skuId: r, user: g, claimed: f, onSelect: j, selectedSkuId: R } = e,
        [M, C] = i.useState(null),
        y = i.useCallback((e) => {
            C(e);
        }, []),
        N = i.useMemo(() => ({ current: M }), [M]),
        { isHoveringOrFocusing: k } = (0, S.A)(N),
        b = !f && k,
        { product: O } = (0, _.q)(r);
    if (null == O) return null;
    let v = O.items[0];
    return null == v
        ? null
        : ((0, I.T)(v)
              ? ((n = a.R.AVATAR_DECORATION),
                (t = (0, l.jsx)(A.i, { item: v, user: g, isHighlighted: b, avatarSize: o._3.SIZE_96 })))
              : (0, P.F)(v) &&
                ((n = a.R.NAMEPLATE),
                (t = (0, l.jsx)(x.A, { nameplate: v, user: g, isHighlighted: b, size: "small" }))),
          (0, l.jsx)(u.vN, {
              children: (0, l.jsxs)(d.s, {
                  ref: y,
                  "aria-label": O.name ?? "",
                  onClick: () => {
                      null == r || null == j || f || j(r);
                  },
                  className: s()(T._x, { [T.Vp]: !f, [T.mr]: b, [T.md]: R === r }),
                  children: [
                      (0, l.jsx)("div", {
                          className: s()(T.VH, { [T._Q]: n === a.R.AVATAR_DECORATION, [T.M4]: n === a.R.NAMEPLATE }),
                          children:
                              null != t
                                  ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)("div", { className: s()(T.i1, { [T.Sf]: f }), children: t }),
                                            f &&
                                                (0, l.jsx)(c.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: p.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: T.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, l.jsxs)("div", {
                          className: T.tZ,
                          children: [
                              (0, l.jsx)(m.D, { variant: "heading-md/extrabold", children: O.name }),
                              (0, l.jsx)(E.E, {
                                  variant: "text-sm/normal",
                                  children: f ? h.intl.string(h.t["6cfuDj"]) : h.intl.string(h.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
};
