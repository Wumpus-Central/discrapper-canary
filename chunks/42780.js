i.d(l, { Ay: () => v, CG: () => h, J$: () => m });
var t = i(627968);
i(64700);
var n = i(503698),
    s = i.n(n),
    a = i(192308),
    r = i(187322),
    u = i(22231),
    c = i(573435),
    o = i(946274),
    d = i(145497),
    I = i(179283),
    A = i(123213),
    C = i(86376),
    E = i(649640),
    _ = i(339984),
    N = i(375708),
    g = i(890653);
function m(e) {
    let { profile: l, className: i } = e,
        n = (0, E._3)(l);
    return null != n
        ? (0, t.jsx)("div", { className: s()(i, g.vK), style: { background: n } })
        : (0, t.jsx)(x, { profile: l, className: i });
}
function x(e) {
    let { profile: l, className: i } = e,
        n = (0, E.b2)(),
        a = (0, E.aG)({ profile: l, defaultColor: n.hex(), forceDefaultColor: null != l.brandColorPrimary }),
        r = l.brandColorPrimary ?? a;
    return (0, t.jsx)("div", { className: s()(i, g.vK), style: { background: (0, E.n6)(r) } });
}
function h(e) {
    let { profile: l, onIconChange: n } = e;
    return null == n
        ? (0, t.jsx)("div", {
              className: g.H,
              children: (0, t.jsx)(c.Ay, {
                  mask: c.hW.CLAN_ICON,
                  width: 70,
                  height: 70,
                  children: (0, t.jsx)("div", {
                      className: g.R3,
                      children: (0, t.jsx)(d.j, { guildId: l.id, guildName: l.name, guildIcon: l.icon, iconSize: 64 }),
                  }),
              }),
          })
        : (0, t.jsx)("div", {
              className: g.H,
              children: (0, t.jsx)(r.vN, {
                  within: !0,
                  children: (0, t.jsx)(c.Ay, {
                      mask: c.hW.CLAN_ICON,
                      width: 70,
                      height: 70,
                      children: (0, t.jsxs)("div", {
                          className: s()(g.R3, g.vk),
                          children: [
                              (0, t.jsx)(d.j, { guildId: l.id, guildName: l.name, guildIcon: l.icon, iconSize: 64 }),
                              (0, t.jsx)("div", { className: g.Lw }),
                              (0, t.jsx)(u.R, {
                                  size: "custom",
                                  className: g.QY,
                                  width: 20,
                                  height: 20,
                                  color: "white",
                              }),
                              (0, t.jsx)(o.Ay, {
                                  tabIndex: 0,
                                  onChange: function (e, l) {
                                      null != n &&
                                          (0, a.openModalLazy)(async () => {
                                              let { default: s } = await Promise.all([
                                                  i.e("80203"),
                                                  i.e("43908"),
                                                  i.e("8308"),
                                                  i.e("73953"),
                                                  i.e("43662"),
                                                  i.e("63232"),
                                                  i.e("88941"),
                                                  i.e("62680"),
                                                  i.e("48804"),
                                                  i.e("33902"),
                                                  i.e("99999"),
                                                  i.e("18546"),
                                                  i.e("90244"),
                                                  i.e("50342"),
                                                  i.e("63726"),
                                                  i.e("93513"),
                                                  i.e("1530"),
                                                  i.e("7406"),
                                                  i.e("55524"),
                                                  i.e("90017"),
                                                  i.e("89908"),
                                                  i.e("74571"),
                                                  i.e("50348"),
                                              ]).then(i.bind(i, 142630));
                                              return (i) =>
                                                  (0, t.jsx)(s, {
                                                      uploadType: _.HL.GUILD_ICON,
                                                      imageUri: e,
                                                      file: l,
                                                      onCrop: (e) => {
                                                          let { imageUri: l } = e;
                                                          return n(l);
                                                      },
                                                      ...i,
                                                  });
                                          }, {});
                                  },
                                  "aria-label": N.intl.string(N.t.r3JdsT),
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
function v(e) {
    let {
            profile: l,
            onIconChange: i,
            className: n,
            disableCTA: a,
            CTAOverride: r,
            onClose: u,
            disableGuildNameClick: c,
        } = e,
        o = null;
    return (
        null != r ? (o = r) : a || (o = (0, t.jsx)(A.A, { profile: l, onComplete: u })),
        (0, t.jsxs)("div", {
            className: s()(g.kL, n),
            children: [
                (0, t.jsx)(m, { profile: l }),
                (0, t.jsx)(h, { onIconChange: i, profile: l }),
                (0, t.jsx)(C.A, { profile: l, disableGuildNameClick: c }),
                (0, t.jsx)(I.P, { profile: l }),
                null != o && (0, t.jsx)("div", { className: g.UD, children: o }),
            ],
        })
    );
}
