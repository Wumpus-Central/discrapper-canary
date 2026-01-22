n.d(t, { A: () => p }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(990078),
    c = n(397927),
    o = n(966327),
    d = n(304072),
    u = n(427262),
    f = n(631576),
    g = n(148355),
    b = n(985018),
    m = n(102982);
let p = (e) => {
    let { className: t, isDisabled: l, sticker: p, canManageSticker: x } = e,
        [h, j] = i.useState(!1),
        [O, y] = (0, d.A)(null, 4000),
        v = async () => {
            y(null), j(!0);
            try {
                await (0, f.sl)(p);
            } catch (e) {
                y(e.body.message), j(!1);
            }
        },
        A = u.Ay.useUserTag(p.user);
    return (0, r.jsx)(a.m, {
        forceOpen: null != O,
        text: O,
        asContainer: !0,
        children: (0, r.jsxs)("div", {
            className: s()(m.iE, t, { [m.Ce]: l }),
            children: [
                (0, r.jsxs)("div", {
                    className: s()(m.Qs, { [m.d4]: h }),
                    children: [
                        (0, r.jsx)(g.A, {
                            className: m.yI,
                            size: 72,
                            sticker: p,
                        }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(c.Text, {
                                    color: "text-strong",
                                    variant: "text-xs/semibold",
                                    className: m.Zl,
                                    children: p.name,
                                }),
                                null != p.user &&
                                    (0, r.jsxs)("div", {
                                        className: m.kQ,
                                        children: [
                                            (0, r.jsx)(o.A, {
                                                className: m.dj,
                                                size: c._3J.SIZE_16,
                                                user: p.user,
                                            }),
                                            (0, r.jsx)(c.Text, {
                                                color: "text-default",
                                                variant: "text-xs/normal",
                                                children: A,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        x
                            ? (0, r.jsxs)("div", {
                                  className: m.o1,
                                  children: [
                                      (0, r.jsx)(c.DUT, {
                                          className: m.XI,
                                          onClick: () => {
                                              (0, c.mMO)(async () => {
                                                  let { default: e } = await Promise.all([
                                                      n.e("29143"),
                                                      n.e("27382"),
                                                  ]).then(n.bind(n, 445002));
                                                  return (t) =>
                                                      (0, r.jsx)(
                                                          e,
                                                          (function (e) {
                                                              for (var t = 1; t < arguments.length; t++) {
                                                                  var n = null != arguments[t] ? arguments[t] : {},
                                                                      r = Object.keys(n);
                                                                  "function" == typeof Object.getOwnPropertySymbols &&
                                                                      (r = r.concat(
                                                                          Object.getOwnPropertySymbols(n).filter(
                                                                              function (e) {
                                                                                  return Object.getOwnPropertyDescriptor(
                                                                                      n,
                                                                                      e,
                                                                                  ).enumerable;
                                                                              },
                                                                          ),
                                                                      )),
                                                                      r.forEach(function (t) {
                                                                          var r;
                                                                          (r = n[t]),
                                                                              t in e
                                                                                  ? Object.defineProperty(e, t, {
                                                                                        value: r,
                                                                                        enumerable: !0,
                                                                                        configurable: !0,
                                                                                        writable: !0,
                                                                                    })
                                                                                  : (e[t] = r);
                                                                      });
                                                              }
                                                              return e;
                                                          })(
                                                              {
                                                                  sticker: p,
                                                                  guildId: p.guild_id,
                                                              },
                                                              t,
                                                          ),
                                                      );
                                              });
                                          },
                                          "aria-label": b.intl.string(b.t.bt75uw),
                                          children: (0, r.jsx)(c.R2l, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: m.Kk,
                                          }),
                                      }),
                                      (0, r.jsx)(c.DUT, {
                                          className: s()(m.XI, m.v_),
                                          onClick: v,
                                          "aria-label": b.intl.string(b.t.N86XcP),
                                          children: (0, r.jsx)(c.PGe, {
                                              size: "md",
                                              color: "currentColor",
                                              className: m.Kk,
                                          }),
                                      }),
                                  ],
                              })
                            : null,
                    ],
                }),
                h && (0, r.jsx)(c.y$y, { className: m.u1 }),
            ],
        }),
    });
};
