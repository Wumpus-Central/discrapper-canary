n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(990078),
    o = n(192308),
    d = n(834730),
    c = n(778712),
    u = n(939249),
    m = n(22231),
    g = n(789645),
    h = n(289873),
    x = n(966327),
    _ = n(304072),
    p = n(427262),
    A = n(631576),
    E = n(148355),
    f = n(985018),
    j = n(129711);
let N = (e) => {
    let { className: t, isDisabled: s, sticker: N, canManageSticker: I } = e,
        [C, b] = l.useState(!1),
        [v, S] = (0, _.A)(null, 4e3),
        T = async () => {
            S(null), b(!0);
            try {
                await (0, A.sl)(N);
            } catch (e) {
                S(e.body.message), b(!1);
            }
        },
        y = p.Ay.useUserTag(N.user);
    return (0, i.jsx)(a.m, {
        forceOpen: null != v,
        text: v,
        asContainer: !0,
        children: (0, i.jsxs)("div", {
            className: r()(j.iE, t, { [j.Ce]: s }),
            children: [
                (0, i.jsxs)("div", {
                    className: r()(j.Qs, { [j.d4]: C }),
                    children: [
                        (0, i.jsx)(E.A, { className: j.yI, size: 72, sticker: N }),
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(d.E, {
                                    color: "text-strong",
                                    variant: "text-xs/semibold",
                                    className: j.Zl,
                                    children: N.name,
                                }),
                                null != N.user &&
                                    (0, i.jsxs)("div", {
                                        className: j.kQ,
                                        children: [
                                            (0, i.jsx)(x.A, { className: j.dj, size: c._3.SIZE_16, user: N.user }),
                                            (0, i.jsx)(d.E, {
                                                color: "text-default",
                                                variant: "text-xs/normal",
                                                children: y,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        I
                            ? (0, i.jsxs)("div", {
                                  className: j.o1,
                                  children: [
                                      (0, i.jsx)(u.D, {
                                          className: j.XI,
                                          onClick: () => {
                                              (0, o.openModalLazy)(async () => {
                                                  let { default: e } = await Promise.all([
                                                      n.e("29143"),
                                                      n.e("40361"),
                                                  ]).then(n.bind(n, 445002));
                                                  return (t) =>
                                                      (0, i.jsx)(e, { sticker: N, guildId: N.guild_id, ...t });
                                              });
                                          },
                                          "aria-label": f.intl.string(f.t.bt75uw),
                                          children: (0, i.jsx)(m.R, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: j.Kk,
                                          }),
                                      }),
                                      (0, i.jsx)(u.D, {
                                          className: r()(j.XI, j.v_),
                                          onClick: T,
                                          "aria-label": f.intl.string(f.t.N86XcP),
                                          children: (0, i.jsx)(g.P, {
                                              size: "md",
                                              color: "currentColor",
                                              className: j.Kk,
                                          }),
                                      }),
                                  ],
                              })
                            : null,
                    ],
                }),
                C && (0, i.jsx)(h.y, { className: j.u1 }),
            ],
        }),
    });
};
