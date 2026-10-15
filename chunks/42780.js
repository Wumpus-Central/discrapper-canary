t.d(l, { Ay: () => C, CG: () => f, J$: () => A });
var i = t(477900);
t(582128);
var n = t(503698),
    s = t.n(n),
    a = t(192308),
    r = t(559106),
    c = t(22231),
    o = t(573435),
    d = t(946274),
    u = t(145497),
    m = t(263908),
    x = t(123213),
    I = t(86376),
    h = t(649640),
    v = t(339984),
    j = t(105292),
    g = t(377476);
function A(e) {
    let { profile: l, className: t } = e,
        n = (0, h._3)(l);
    return null != n
        ? (0, i.jsx)("div", { className: s()(t, g.vK), style: { background: n } })
        : (0, i.jsx)(N, { profile: l, className: t });
}
function N(e) {
    let { profile: l, className: t } = e,
        n = (0, h.b2)(),
        a = (0, h.aG)({ profile: l, defaultColor: n.hex(), forceDefaultColor: null != l.brandColorPrimary }),
        r = l.brandColorPrimary ?? a;
    return (0, i.jsx)("div", { className: s()(t, g.vK), style: { background: (0, h.n6)(r) } });
}
function f(e) {
    let { profile: l, onIconChange: n } = e;
    return null == n
        ? (0, i.jsx)("div", {
              className: g.H,
              children: (0, i.jsx)(o.Ay, {
                  mask: o.hW.CLAN_ICON,
                  width: 70,
                  height: 70,
                  children: (0, i.jsx)("div", {
                      className: g.R3,
                      children: (0, i.jsx)(u.j, { guildId: l.id, guildName: l.name, guildIcon: l.icon, iconSize: 64 }),
                  }),
              }),
          })
        : (0, i.jsx)("div", {
              className: g.H,
              children: (0, i.jsx)(r.vN, {
                  within: !0,
                  children: (0, i.jsx)(o.Ay, {
                      mask: o.hW.CLAN_ICON,
                      width: 70,
                      height: 70,
                      children: (0, i.jsxs)("div", {
                          className: s()(g.R3, g.vk),
                          children: [
                              (0, i.jsx)(u.j, { guildId: l.id, guildName: l.name, guildIcon: l.icon, iconSize: 64 }),
                              (0, i.jsx)("div", { className: g.Lw }),
                              (0, i.jsx)(c.PencilIcon, {
                                  size: "custom",
                                  className: g.QY,
                                  width: 20,
                                  height: 20,
                                  color: "white",
                              }),
                              (0, i.jsx)(d.Ay, {
                                  tabIndex: 0,
                                  onChange: function (e, l) {
                                      null != n &&
                                          (0, a.openModalLazy)(async () => {
                                              let { default: s } = await Promise.all([
                                                  t.e("655327"),
                                                  t.e("67702"),
                                                  t.e("1214"),
                                                  t.e("454048"),
                                                  t.e("863232"),
                                                  t.e("300699"),
                                                  t.e("349619"),
                                                  t.e("948804"),
                                                  t.e("199999"),
                                                  t.e("534822"),
                                                  t.e("536200"),
                                                  t.e("133902"),
                                                  t.e("790244"),
                                                  t.e("318546"),
                                                  t.e("50342"),
                                                  t.e("507406"),
                                                  t.e("463726"),
                                                  t.e("93513"),
                                                  t.e("779149"),
                                                  t.e("455524"),
                                                  t.e("90017"),
                                                  t.e("489908"),
                                                  t.e("574571"),
                                                  t.e("750348"),
                                              ]).then(t.bind(t, 142630));
                                              return (t) =>
                                                  (0, i.jsx)(s, {
                                                      uploadType: v.HL.GUILD_ICON,
                                                      imageUri: e,
                                                      file: l,
                                                      onCrop: (e) => {
                                                          let { imageUri: l } = e;
                                                          return n(l);
                                                      },
                                                      ...t,
                                                  });
                                          }, {});
                                  },
                                  "aria-label": j.intl.string(j.t.r3JdsT),
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
function C(e) {
    let {
            profile: l,
            onIconChange: t,
            className: n,
            disableCTA: a,
            CTAOverride: r,
            onClose: c,
            disableGuildNameClick: o,
            footer: d,
        } = e,
        u = null;
    return (
        null != r ? (u = r) : a || (u = (0, i.jsx)(x.A, { profile: l, onComplete: c })),
        (0, i.jsxs)("div", {
            className: s()(g.kL, n),
            children: [
                (0, i.jsx)(A, { profile: l }),
                (0, i.jsx)(f, { onIconChange: t, profile: l }),
                (0, i.jsx)(I.A, { profile: l, disableGuildNameClick: o }),
                (0, i.jsx)(m.P, { profile: l }),
                null != u && (0, i.jsx)("div", { className: g.UD, children: u }),
                d,
            ],
        })
    );
}
