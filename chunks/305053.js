n.d(t, { A: () => E }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(989349),
    s = n.n(l),
    a = n(386181),
    c = n(493108),
    o = n(650682),
    d = n(158954),
    u = n(417597),
    f = n(554146),
    g = n(157559),
    b = n(826673),
    m = n(367727),
    p = n(937161),
    x = n(576705),
    h = n(405269),
    j = n(997509),
    O = n(652215),
    y = n(49999),
    v = n(985018),
    A = n(918609);
function E(e) {
    let { guild: t } = e;
    i.useEffect(() => {
        (0, b.dX)(f.M.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION, t.id, {
            dismissAction: y.i.INDIRECT_ACTION,
            guildId: t.id,
            forceTrack: !0,
        });
    }, [t]);
    let n =
            !(0, m.cN)(f.M.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION, t.id) ||
            !t.features.has(O.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE) ||
            !t.features.has(O.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE),
        { enabled: l } = p.A.useExperiment({
            guildId: t.id,
            location: "PermissionMigrationInfoBox",
        }),
        u = (0, h.i$)(s()(O.X30), "LL");
    return l
        ? (0, r.jsxs)(a.EN, {
              className: A.oe,
              defaultExpanded: n,
              children: [
                  (0, r.jsx)(c.D, {
                      level: 2,
                      children: (0, r.jsx)(d.vN3, {
                          children: (0, r.jsxs)(o.$, {
                              slot: "trigger",
                              className: A.wx,
                              children: [
                                  (0, r.jsx)(d.EpV, { color: "currentColor" }),
                                  (0, r.jsx)(d.EYj, {
                                      variant: "heading-lg/semibold",
                                      tag: "span",
                                      children: v.intl.string(v.t["k60MO+"]),
                                  }),
                                  (0, r.jsx)(d.g8p, { className: A.X1 }),
                              ],
                          }),
                      }),
                  }),
                  (0, r.jsx)(a.kS, {
                      className: A.nd,
                      children: (0, r.jsxs)("div", {
                          className: A.Qs,
                          children: [
                              (0, r.jsxs)("p", {
                                  children: [
                                      v.intl.format(v.t.kBaRSt, {}),
                                      (0, r.jsxs)("ul", {
                                          className: A.Dj,
                                          children: [
                                              (0, r.jsx)("li", { children: v.intl.format(v.t.tUarT8, {}) }),
                                              (0, r.jsx)("li", { children: v.intl.format(v.t.r807RN, {}) }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("p", { children: v.intl.format(v.t.vgAb6w, { breakingChangeDate: u }) }),
                          ],
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)(a.EN, {
              className: A.oe,
              defaultExpanded: n,
              children: [
                  (0, r.jsx)(c.D, {
                      level: 2,
                      children: (0, r.jsx)(d.vN3, {
                          children: (0, r.jsxs)(o.$, {
                              slot: "trigger",
                              className: A.wx,
                              children: [
                                  (0, r.jsx)(d.EpV, { color: "currentColor" }),
                                  (0, r.jsx)(d.EYj, {
                                      variant: "heading-lg/semibold",
                                      tag: "span",
                                      children: v.intl.string(v.t["F+YaVP"]),
                                  }),
                                  (0, r.jsx)(d.g8p, { className: A.X1 }),
                              ],
                          }),
                      }),
                  }),
                  (0, r.jsx)(a.kS, {
                      className: A.nd,
                      children: (0, r.jsxs)("div", {
                          className: A.Qs,
                          children: [
                              (0, r.jsxs)("p", {
                                  children: [
                                      v.intl.format(v.t.xaPmNf, {}),
                                      (0, r.jsxs)("ul", {
                                          className: A.Dj,
                                          children: [
                                              (0, r.jsx)("li", { children: v.intl.format(v.t.tUarT8, {}) }),
                                              (0, r.jsx)("li", { children: v.intl.format(v.t.r807RN, {}) }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(d.Fmo, {
                                  forceLevel: 3,
                                  children: (0, r.jsx)(d.DZT, {
                                      variant: "text-md/bold",
                                      children: v.intl.string(v.t.bLwbyU),
                                  }),
                              }),
                              (0, r.jsx)("p", { children: v.intl.format(v.t.eo5E6e, { breakingChangeDate: u }) }),
                              (0, r.jsx)("p", { children: v.intl.format(v.t.iLwQzv, { breakingChangeDate: u }) }),
                              (0, r.jsx)("div", { className: A.yF }),
                              (0, r.jsx)(N, { guild: t }),
                          ],
                      }),
                  }),
              ],
          });
}
function N(e) {
    let { guild: t } = e,
        n = (0, u.bG)([x.A], () => x.A.can(O.xBc.ADMINISTRATOR, t)),
        l = t.features.has(O.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE),
        s = t.features.has(O.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE),
        [a, c] = i.useState(!0),
        [o, f] = i.useState(!0);
    return n
        ? (0, r.jsxs)("form", {
              className: A.Zd,
              children: [
                  (0, r.jsxs)("fieldset", {
                      children: [
                          (0, r.jsx)("legend", { children: v.intl.string(v.t["/SSzPD"]) }),
                          (0, r.jsx)(_, {
                              label: v.intl.string(v.t.KMbKTt),
                              migratedLabel: v.intl.string(v.t.IJKefK),
                              migrated: l,
                              enabled: a,
                              onChange: c,
                          }),
                          (0, r.jsx)(_, {
                              label: v.intl.string(v.t["7ltOG9"]),
                              migratedLabel: v.intl.string(v.t.gVKQNA),
                              migrated: s,
                              enabled: o,
                              onChange: f,
                          }),
                      ],
                  }),
                  (0, r.jsx)(d.$nd, {
                      text: v.intl.string(v.t["1Qm822"]),
                      disabled: (!a || l) && (!o || s),
                      onClick: () => {
                          var e, n;
                          return (
                              (e = t),
                              (n = {
                                  migratePin: a && !l,
                                  migrateSlowmode: o && !s,
                              }),
                              void g.A.show({
                                  title: v.intl.string(v.t.fM5aQ2),
                                  body: v.intl.format(v.t.rLbJs6, { guildName: e.name }),
                                  cancelText: v.intl.string(v.t["ETE/oC"]),
                                  confirmText: v.intl.string(v.t["cY+Oob"]),
                                  onConfirm: () => {
                                      S(e.id, n);
                                  },
                              })
                          );
                      },
                  }),
              ],
          })
        : (0, r.jsx)("p", { children: v.intl.string(v.t.hvFwHy) });
}
function _(e) {
    let { label: t, migratedLabel: n, migrated: i, enabled: l, onChange: s } = e;
    return (0, r.jsx)(d.Sc0, {
        label: i ? n : t,
        labelType: "primary",
        disabled: i,
        checked: l || i,
        onChange: s,
    });
}
async function S(e, t) {
    try {
        await j.A.migratePermissions(e, t);
    } catch (e) {
        g.A.show({
            title: v.intl.string(v.t.R0RpRX),
            body: v.intl.string(v.t["58yMLG"]),
            confirmVariant: "secondary",
        });
    }
}
