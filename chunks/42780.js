i.d(l, { Ay: () => b, CG: () => f, J$: () => A });
var t = i(477900);
i(582128);
var n = i(503698),
    s = i.n(n),
    a = i(192308),
    r = i(559106),
    o = i(22231),
    c = i(573435),
    d = i(946274),
    u = i(145497),
    m = i(263908),
    x = i(123213),
    I = i(86376),
    h = i(649640),
    v = i(339984),
    j = i(105292),
    g = i(377476);
function A(e) {
    let { profile: l, className: i } = e,
        n = (0, h._3)(l);
    return null != n
        ? (0, t.jsx)("div", { className: s()(i, g.vK), style: { background: n } })
        : (0, t.jsx)(N, { profile: l, className: i });
}
function N(e) {
    let { profile: l, className: i } = e,
        n = (0, h.b2)(),
        a = (0, h.aG)({ profile: l, defaultColor: n.hex(), forceDefaultColor: null != l.brandColorPrimary }),
        r = l.brandColorPrimary ?? a;
    return (0, t.jsx)("div", { className: s()(i, g.vK), style: { background: (0, h.n6)(r) } });
}
function f(e) {
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
                      children: (0, t.jsx)(u.j, { guildId: l.id, guildName: l.name, guildIcon: l.icon, iconSize: 64 }),
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
                              (0, t.jsx)(u.j, { guildId: l.id, guildName: l.name, guildIcon: l.icon, iconSize: 64 }),
                              (0, t.jsx)("div", { className: g.Lw }),
                              (0, t.jsx)(o.PencilIcon, {
                                  size: "custom",
                                  className: g.QY,
                                  width: 20,
                                  height: 20,
                                  color: "white",
                              }),
                              (0, t.jsx)(d.Ay, {
                                  tabIndex: 0,
                                  onChange: function (e, l) {
                                      null != n &&
                                          (0, a.openModalLazy)(async () => {
                                              let { default: s } = await Promise.all([
                                                  i.e("655327"),
                                                  i.e("67702"),
                                                  i.e("1214"),
                                                  i.e("454048"),
                                                  i.e("863232"),
                                                  i.e("300699"),
                                                  i.e("349619"),
                                                  i.e("948804"),
                                                  i.e("199999"),
                                                  i.e("534822"),
                                                  i.e("133902"),
                                                  i.e("790244"),
                                                  i.e("318546"),
                                                  i.e("50342"),
                                                  i.e("507406"),
                                                  i.e("463726"),
                                                  i.e("93513"),
                                                  i.e("779149"),
                                                  i.e("455524"),
                                                  i.e("90017"),
                                                  i.e("489908"),
                                                  i.e("574571"),
                                                  i.e("750348"),
                                              ]).then(i.bind(i, 142630));
                                              return (i) =>
                                                  (0, t.jsx)(s, {
                                                      uploadType: v.HL.GUILD_ICON,
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
                                  "aria-label": j.intl.string(j.t.r3JdsT),
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
function b(e) {
    let {
            profile: l,
            onIconChange: i,
            className: n,
            disableCTA: a,
            CTAOverride: r,
            onClose: o,
            disableGuildNameClick: c,
            footer: d,
        } = e,
        u = null;
    return (
        null != r ? (u = r) : a || (u = (0, t.jsx)(x.A, { profile: l, onComplete: o })),
        (0, t.jsxs)("div", {
            className: s()(g.kL, n),
            children: [
                (0, t.jsx)(A, { profile: l }),
                (0, t.jsx)(f, { onIconChange: i, profile: l }),
                (0, t.jsx)(I.A, { profile: l, disableGuildNameClick: c }),
                (0, t.jsx)(m.P, { profile: l }),
                null != u && (0, t.jsx)("div", { className: g.UD, children: u }),
                d,
            ],
        })
    );
}
