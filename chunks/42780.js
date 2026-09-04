t.d(l, { Ay: () => C, CG: () => f, J$: () => A });
var i = t(477900);
t(582128);
var n = t(503698),
    s = t.n(n),
    a = t(192308),
    r = t(259678),
    o = t(22231),
    c = t(573435),
    d = t(946274),
    u = t(145497),
    m = t(263908),
    x = t(123213),
    v = t(963402),
    g = t(649640),
    h = t(339984),
    I = t(375708),
    j = t(377476);
function A(e) {
    let { profile: l, className: t } = e,
        n = (0, g._3)(l);
    return null != n
        ? (0, i.jsx)("div", { className: s()(t, j.vK), style: { background: n } })
        : (0, i.jsx)(N, { profile: l, className: t });
}
function N(e) {
    let { profile: l, className: t } = e,
        n = (0, g.b2)(),
        a = (0, g.aG)({ profile: l, defaultColor: n.hex(), forceDefaultColor: null != l.brandColorPrimary }),
        r = l.brandColorPrimary ?? a;
    return (0, i.jsx)("div", { className: s()(t, j.vK), style: { background: (0, g.n6)(r) } });
}
function f(e) {
    let { profile: l, onIconChange: n } = e;
    return null == n
        ? (0, i.jsx)("div", {
              className: j.H,
              children: (0, i.jsx)(c.Ay, {
                  mask: c.hW.CLAN_ICON,
                  width: 70,
                  height: 70,
                  children: (0, i.jsx)("div", {
                      className: j.R3,
                      children: (0, i.jsx)(u.j, { guildId: l.id, guildName: l.name, guildIcon: l.icon, iconSize: 64 }),
                  }),
              }),
          })
        : (0, i.jsx)("div", {
              className: j.H,
              children: (0, i.jsx)(r.vN, {
                  within: !0,
                  children: (0, i.jsx)(c.Ay, {
                      mask: c.hW.CLAN_ICON,
                      width: 70,
                      height: 70,
                      children: (0, i.jsxs)("div", {
                          className: s()(j.R3, j.vk),
                          children: [
                              (0, i.jsx)(u.j, { guildId: l.id, guildName: l.name, guildIcon: l.icon, iconSize: 64 }),
                              (0, i.jsx)("div", { className: j.Lw }),
                              (0, i.jsx)(o.PencilIcon, {
                                  size: "custom",
                                  className: j.QY,
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
                                                  t.e("722514"),
                                                  t.e("655327"),
                                                  t.e("67702"),
                                                  t.e("1214"),
                                                  t.e("454048"),
                                                  t.e("863232"),
                                                  t.e("188941"),
                                                  t.e("300699"),
                                                  t.e("349619"),
                                                  t.e("948804"),
                                                  t.e("183776"),
                                                  t.e("199999"),
                                                  t.e("318546"),
                                                  t.e("790244"),
                                                  t.e("536200"),
                                                  t.e("133902"),
                                                  t.e("561279"),
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
                                                      uploadType: h.HL.GUILD_ICON,
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
                                  "aria-label": I.intl.string(I.t.r3JdsT),
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
            onClose: o,
            disableGuildNameClick: c,
        } = e,
        d = null;
    return (
        null != r ? (d = r) : a || (d = (0, i.jsx)(x.A, { profile: l, onComplete: o })),
        (0, i.jsxs)("div", {
            className: s()(j.kL, n),
            children: [
                (0, i.jsx)(A, { profile: l }),
                (0, i.jsx)(f, { onIconChange: t, profile: l }),
                (0, i.jsx)(v.A, { profile: l, disableGuildNameClick: c }),
                (0, i.jsx)(m.P, { profile: l }),
                null != d && (0, i.jsx)("div", { className: j.UD, children: d }),
            ],
        })
    );
}
