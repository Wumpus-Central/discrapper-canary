i.d(l, { Ay: () => j, CG: () => v, J$: () => E });
var t = i(477900);
i(582128);
var n = i(503698),
    s = i.n(n),
    a = i(192308),
    r = i(259678),
    u = i(22231),
    c = i(573435),
    o = i(946274),
    d = i(145497),
    I = i(422253),
    m = i(123213),
    A = i(963402),
    C = i(649640),
    x = i(339984),
    g = i(375708),
    N = i(377476);
function E(e) {
    let { profile: l, className: i } = e,
        n = (0, C._3)(l);
    return null != n
        ? (0, t.jsx)("div", { className: s()(i, N.vK), style: { background: n } })
        : (0, t.jsx)(h, { profile: l, className: i });
}
function h(e) {
    let { profile: l, className: i } = e,
        n = (0, C.b2)(),
        a = (0, C.aG)({ profile: l, defaultColor: n.hex(), forceDefaultColor: null != l.brandColorPrimary }),
        r = l.brandColorPrimary ?? a;
    return (0, t.jsx)("div", { className: s()(i, N.vK), style: { background: (0, C.n6)(r) } });
}
function v(e) {
    let { profile: l, onIconChange: n } = e;
    return null == n
        ? (0, t.jsx)("div", {
              className: N.H,
              children: (0, t.jsx)(c.Ay, {
                  mask: c.hW.CLAN_ICON,
                  width: 70,
                  height: 70,
                  children: (0, t.jsx)("div", {
                      className: N.R3,
                      children: (0, t.jsx)(d.j, { guildId: l.id, guildName: l.name, guildIcon: l.icon, iconSize: 64 }),
                  }),
              }),
          })
        : (0, t.jsx)("div", {
              className: N.H,
              children: (0, t.jsx)(r.vN, {
                  within: !0,
                  children: (0, t.jsx)(c.Ay, {
                      mask: c.hW.CLAN_ICON,
                      width: 70,
                      height: 70,
                      children: (0, t.jsxs)("div", {
                          className: s()(N.R3, N.vk),
                          children: [
                              (0, t.jsx)(d.j, { guildId: l.id, guildName: l.name, guildIcon: l.icon, iconSize: 64 }),
                              (0, t.jsx)("div", { className: N.Lw }),
                              (0, t.jsx)(u.PencilIcon, {
                                  size: "custom",
                                  className: N.QY,
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
                                                  i.e("722514"),
                                                  i.e("655327"),
                                                  i.e("67702"),
                                                  i.e("1214"),
                                                  i.e("454048"),
                                                  i.e("863232"),
                                                  i.e("188941"),
                                                  i.e("300699"),
                                                  i.e("349619"),
                                                  i.e("948804"),
                                                  i.e("183776"),
                                                  i.e("199999"),
                                                  i.e("318546"),
                                                  i.e("790244"),
                                                  i.e("536200"),
                                                  i.e("133902"),
                                                  i.e("561279"),
                                                  i.e("50342"),
                                                  i.e("463726"),
                                                  i.e("93513"),
                                                  i.e("779149"),
                                                  i.e("507406"),
                                                  i.e("455524"),
                                                  i.e("90017"),
                                                  i.e("489908"),
                                                  i.e("574571"),
                                                  i.e("750348"),
                                              ]).then(i.bind(i, 142630));
                                              return (i) =>
                                                  (0, t.jsx)(s, {
                                                      uploadType: x.HL.GUILD_ICON,
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
                                  "aria-label": g.intl.string(g.t.r3JdsT),
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
function j(e) {
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
        null != r ? (o = r) : a || (o = (0, t.jsx)(m.A, { profile: l, onComplete: u })),
        (0, t.jsxs)("div", {
            className: s()(N.kL, n),
            children: [
                (0, t.jsx)(E, { profile: l }),
                (0, t.jsx)(v, { onIconChange: i, profile: l }),
                (0, t.jsx)(A.A, { profile: l, disableGuildNameClick: c }),
                (0, t.jsx)(I.P, { profile: l }),
                null != o && (0, t.jsx)("div", { className: N.UD, children: o }),
            ],
        })
    );
}
