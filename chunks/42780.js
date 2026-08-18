t.d(l, { Ay: () => _, CG: () => v, J$: () => g });
var i = t(477900);
t(582128);
var n = t(503698),
    s = t.n(n),
    a = t(192308),
    r = t(259678),
    u = t(22231),
    c = t(573435),
    o = t(946274),
    d = t(145497),
    I = t(422253),
    A = t(123213),
    m = t(963402),
    C = t(649640),
    f = t(339984),
    x = t(375708),
    E = t(342949);
function g(e) {
    let { profile: l, className: t } = e,
        n = (0, C._3)(l);
    return null != n
        ? (0, i.jsx)("div", { className: s()(t, E.vK), style: { background: n } })
        : (0, i.jsx)(N, { profile: l, className: t });
}
function N(e) {
    let { profile: l, className: t } = e,
        n = (0, C.b2)(),
        a = (0, C.aG)({ profile: l, defaultColor: n.hex(), forceDefaultColor: null != l.brandColorPrimary }),
        r = l.brandColorPrimary ?? a;
    return (0, i.jsx)("div", { className: s()(t, E.vK), style: { background: (0, C.n6)(r) } });
}
function v(e) {
    let { profile: l, onIconChange: n } = e;
    return null == n
        ? (0, i.jsx)("div", {
              className: E.H,
              children: (0, i.jsx)(c.Ay, {
                  mask: c.hW.CLAN_ICON,
                  width: 70,
                  height: 70,
                  children: (0, i.jsx)("div", {
                      className: E.R3,
                      children: (0, i.jsx)(d.j, { guildId: l.id, guildName: l.name, guildIcon: l.icon, iconSize: 64 }),
                  }),
              }),
          })
        : (0, i.jsx)("div", {
              className: E.H,
              children: (0, i.jsx)(r.vN, {
                  within: !0,
                  children: (0, i.jsx)(c.Ay, {
                      mask: c.hW.CLAN_ICON,
                      width: 70,
                      height: 70,
                      children: (0, i.jsxs)("div", {
                          className: s()(E.R3, E.vk),
                          children: [
                              (0, i.jsx)(d.j, { guildId: l.id, guildName: l.name, guildIcon: l.icon, iconSize: 64 }),
                              (0, i.jsx)("div", { className: E.Lw }),
                              (0, i.jsx)(u.PencilIcon, {
                                  size: "custom",
                                  className: E.QY,
                                  width: 20,
                                  height: 20,
                                  color: "white",
                              }),
                              (0, i.jsx)(o.Ay, {
                                  tabIndex: 0,
                                  onChange: function (e, l) {
                                      null != n &&
                                          (0, a.openModalLazy)(async () => {
                                              let { default: s } = await Promise.all([
                                                  t.e("454722"),
                                                  t.e("983199"),
                                                  t.e("731278"),
                                                  t.e("863232"),
                                                  t.e("349619"),
                                                  t.e("300699"),
                                                  t.e("948804"),
                                                  t.e("318546"),
                                                  t.e("199999"),
                                                  t.e("790244"),
                                                  t.e("50342"),
                                                  t.e("463726"),
                                                  t.e("93513"),
                                                  t.e("779149"),
                                                  t.e("507406"),
                                                  t.e("455524"),
                                                  t.e("90017"),
                                                  t.e("489908"),
                                                  t.e("574571"),
                                                  t.e("750348"),
                                              ]).then(t.bind(t, 142630));
                                              return (t) =>
                                                  (0, i.jsx)(s, {
                                                      uploadType: f.HL.GUILD_ICON,
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
                                  "aria-label": x.intl.string(x.t.r3JdsT),
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
function _(e) {
    let {
            profile: l,
            onIconChange: t,
            className: n,
            disableCTA: a,
            CTAOverride: r,
            onClose: u,
            disableGuildNameClick: c,
        } = e,
        o = null;
    return (
        null != r ? (o = r) : a || (o = (0, i.jsx)(A.A, { profile: l, onComplete: u })),
        (0, i.jsxs)("div", {
            className: s()(E.kL, n),
            children: [
                (0, i.jsx)(g, { profile: l }),
                (0, i.jsx)(v, { onIconChange: t, profile: l }),
                (0, i.jsx)(m.A, { profile: l, disableGuildNameClick: c }),
                (0, i.jsx)(I.P, { profile: l }),
                null != o && (0, i.jsx)("div", { className: E.UD, children: o }),
            ],
        })
    );
}
