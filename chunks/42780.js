l.d(t, { Ay: () => j, CG: () => N, J$: () => I });
var i = l(627968);
l(64700);
var n = l(503698),
    s = l.n(n),
    a = l(192308),
    r = l(187322),
    c = l(22231),
    o = l(573435),
    u = l(946274),
    d = l(145497),
    m = l(179283),
    h = l(123213),
    A = l(86376),
    x = l(649640),
    f = l(339984),
    v = l(890653);
function I(e) {
    let { profile: t, className: l } = e,
        n = (0, x._3)(t);
    return null != n
        ? (0, i.jsx)("div", { className: s()(l, v.vK), style: { background: n } })
        : (0, i.jsx)(g, { profile: t, className: l });
}
function g(e) {
    let { profile: t, className: l } = e,
        n = (0, x.b2)(),
        a = (0, x.aG)({ profile: t, defaultColor: n.hex(), forceDefaultColor: null != t.brandColorPrimary }),
        r = t.brandColorPrimary ?? a;
    return (0, i.jsx)("div", { className: s()(l, v.vK), style: { background: (0, x.n6)(r) } });
}
function N(e) {
    let { profile: t, onIconChange: n } = e;
    return null == n
        ? (0, i.jsx)("div", {
              className: v.H,
              children: (0, i.jsx)(o.Ay, {
                  mask: o.hW.CLAN_ICON,
                  width: 70,
                  height: 70,
                  children: (0, i.jsx)("div", {
                      className: v.R3,
                      children: (0, i.jsx)(d.j, { guildId: t.id, guildName: t.name, guildIcon: t.icon, iconSize: 64 }),
                  }),
              }),
          })
        : (0, i.jsx)("div", {
              className: v.H,
              children: (0, i.jsx)(r.vN, {
                  within: !0,
                  children: (0, i.jsx)(o.Ay, {
                      mask: o.hW.CLAN_ICON,
                      width: 70,
                      height: 70,
                      children: (0, i.jsxs)("div", {
                          className: s()(v.R3, v.vk),
                          children: [
                              (0, i.jsx)(d.j, { guildId: t.id, guildName: t.name, guildIcon: t.icon, iconSize: 64 }),
                              (0, i.jsx)("div", { className: v.Lw }),
                              (0, i.jsx)(c.R, {
                                  size: "custom",
                                  className: v.QY,
                                  width: 20,
                                  height: 20,
                                  color: "white",
                              }),
                              (0, i.jsx)(u.Ay, {
                                  tabIndex: 0,
                                  onChange: function (e, t) {
                                      null != n &&
                                          (0, a.openModalLazy)(async () => {
                                              let { default: s } = await Promise.all([
                                                  l.e("79149"),
                                                  l.e("29259"),
                                                  l.e("74571"),
                                                  l.e("46907"),
                                              ]).then(l.bind(l, 142630));
                                              return (l) =>
                                                  (0, i.jsx)(s, {
                                                      uploadType: f.HL.GUILD_ICON,
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
function j(e) {
    let {
            profile: t,
            onIconChange: l,
            className: n,
            disableCTA: a,
            CTAOverride: r,
            onClose: c,
            disableGuildNameClick: o,
        } = e,
        u = null;
    return (
        null != r ? (u = r) : a || (u = (0, i.jsx)(h.A, { profile: t, onComplete: c })),
        (0, i.jsxs)("div", {
            className: s()(v.kL, n),
            children: [
                (0, i.jsx)(I, { profile: t }),
                (0, i.jsx)(N, { onIconChange: l, profile: t }),
                (0, i.jsx)(A.A, { profile: t, disableGuildNameClick: o }),
                (0, i.jsx)(m.P, { profile: t }),
                null != u && (0, i.jsx)("div", { className: v.UD, children: u }),
            ],
        })
    );
}
