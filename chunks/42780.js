l.d(t, { Ay: () => m, CG: () => L, J$: () => P });
var i = l(627968);
l(64700);
var n = l(503698),
    r = l.n(n),
    s = l(192308),
    a = l(187322),
    u = l(22231),
    c = l(573435),
    o = l(946274),
    d = l(145497),
    I = l(179283),
    A = l(123213),
    _ = l(86376),
    E = l(649640),
    h = l(339984),
    C = l(890653);
function P(e) {
    let { profile: t, className: l } = e,
        n = (0, E._3)(t);
    return null != n
        ? (0, i.jsx)("div", { className: r()(l, C.vK), style: { background: n } })
        : (0, i.jsx)(g, { profile: t, className: l });
}
function g(e) {
    let { profile: t, className: l } = e,
        n = (0, E.b2)(),
        s = (0, E.aG)({ profile: t, defaultColor: n.hex(), forceDefaultColor: null != t.brandColorPrimary }),
        a = t.brandColorPrimary ?? s;
    return (0, i.jsx)("div", { className: r()(l, C.vK), style: { background: (0, E.n6)(a) } });
}
function L(e) {
    let { profile: t, onIconChange: n } = e;
    return null == n
        ? (0, i.jsx)("div", {
              className: C.H,
              children: (0, i.jsx)(c.Ay, {
                  mask: c.hW.CLAN_ICON,
                  width: 70,
                  height: 70,
                  children: (0, i.jsx)("div", {
                      className: C.R3,
                      children: (0, i.jsx)(d.j, { guildId: t.id, guildName: t.name, guildIcon: t.icon, iconSize: 64 }),
                  }),
              }),
          })
        : (0, i.jsx)("div", {
              className: C.H,
              children: (0, i.jsx)(a.vN, {
                  within: !0,
                  children: (0, i.jsx)(c.Ay, {
                      mask: c.hW.CLAN_ICON,
                      width: 70,
                      height: 70,
                      children: (0, i.jsxs)("div", {
                          className: r()(C.R3, C.vk),
                          children: [
                              (0, i.jsx)(d.j, { guildId: t.id, guildName: t.name, guildIcon: t.icon, iconSize: 64 }),
                              (0, i.jsx)("div", { className: C.Lw }),
                              (0, i.jsx)(u.R, {
                                  size: "custom",
                                  className: C.QY,
                                  width: 20,
                                  height: 20,
                                  color: "white",
                              }),
                              (0, i.jsx)(o.Ay, {
                                  tabIndex: 0,
                                  onChange: function (e, t) {
                                      null != n &&
                                          (0, s.openModalLazy)(async () => {
                                              let { default: r } = await Promise.all([
                                                  l.e("79149"),
                                                  l.e("2956"),
                                                  l.e("74571"),
                                                  l.e("58176"),
                                              ]).then(l.bind(l, 142630));
                                              return (l) =>
                                                  (0, i.jsx)(r, {
                                                      uploadType: h.HL.GUILD_ICON,
                                                      imageUri: e,
                                                      file: t,
                                                      onCrop: (e) => {
                                                          let { imageUri: t } = e;
                                                          return n(t);
                                                      },
                                                      ...l,
                                                  });
                                          }, {});
                                  },
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
function m(e) {
    let {
            profile: t,
            onIconChange: l,
            className: n,
            disableCTA: s,
            CTAOverride: a,
            onClose: u,
            disableGuildNameClick: c,
        } = e,
        o = null;
    return (
        null != a ? (o = a) : s || (o = (0, i.jsx)(A.A, { profile: t, onComplete: u })),
        (0, i.jsxs)("div", {
            className: r()(C.kL, n),
            children: [
                (0, i.jsx)(P, { profile: t }),
                (0, i.jsx)(L, { onIconChange: l, profile: t }),
                (0, i.jsx)(_.A, { profile: t, disableGuildNameClick: c }),
                (0, i.jsx)(I.P, { profile: t }),
                null != o && (0, i.jsx)("div", { className: C.UD, children: o }),
            ],
        })
    );
}
