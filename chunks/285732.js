"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(990078),
    o = n(397927),
    d = n(966327),
    c = n(304072),
    u = n(427262),
    m = n(631576),
    g = n(148355),
    x = n(985018),
    h = n(102982);
let _ = (e) => {
    let { className: t, isDisabled: l, sticker: _, canManageSticker: A } = e,
        [p, f] = s.useState(!1),
        [j, N] = (0, c.A)(null, 4e3),
        E = async () => {
            N(null), f(!0);
            try {
                await (0, m.sl)(_);
            } catch (e) {
                N(e.body.message), f(!1);
            }
        },
        b = u.Ay.useUserTag(_.user);
    return (0, i.jsx)(a.m, {
        forceOpen: null != j,
        text: j,
        asContainer: !0,
        children: (0, i.jsxs)("div", {
            className: r()(h.iE, t, { [h.Ce]: l }),
            children: [
                (0, i.jsxs)("div", {
                    className: r()(h.Qs, { [h.d4]: p }),
                    children: [
                        (0, i.jsx)(g.A, { className: h.yI, size: 72, sticker: _ }),
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(o.Text, {
                                    color: "text-strong",
                                    variant: "text-xs/semibold",
                                    className: h.Zl,
                                    children: _.name,
                                }),
                                null != _.user &&
                                    (0, i.jsxs)("div", {
                                        className: h.kQ,
                                        children: [
                                            (0, i.jsx)(d.A, { className: h.dj, size: o._3J.SIZE_16, user: _.user }),
                                            (0, i.jsx)(o.Text, {
                                                color: "text-default",
                                                variant: "text-xs/normal",
                                                children: b,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        A
                            ? (0, i.jsxs)("div", {
                                  className: h.o1,
                                  children: [
                                      (0, i.jsx)(o.DUT, {
                                          className: h.XI,
                                          onClick: () => {
                                              (0, o.mMO)(async () => {
                                                  let { default: e } = await Promise.all([
                                                      n.e("29143"),
                                                      n.e("27382"),
                                                  ]).then(n.bind(n, 445002));
                                                  return (t) =>
                                                      (0, i.jsx)(e, { sticker: _, guildId: _.guild_id, ...t });
                                              });
                                          },
                                          "aria-label": x.intl.string(x.t.bt75uw),
                                          children: (0, i.jsx)(o.R2l, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: h.Kk,
                                          }),
                                      }),
                                      (0, i.jsx)(o.DUT, {
                                          className: r()(h.XI, h.v_),
                                          onClick: E,
                                          "aria-label": x.intl.string(x.t.N86XcP),
                                          children: (0, i.jsx)(o.PGe, {
                                              size: "md",
                                              color: "currentColor",
                                              className: h.Kk,
                                          }),
                                      }),
                                  ],
                              })
                            : null,
                    ],
                }),
                p && (0, i.jsx)(o.y$y, { className: h.u1 }),
            ],
        }),
    });
};
