n.d(t, { Z: () => N }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(913527),
    a = n.n(l),
    s = n(913793),
    o = n(247062),
    c = n(23893),
    d = n(793030),
    u = n(399606),
    g = n(704215),
    f = n(668781),
    m = n(266454),
    b = n(605236),
    p = n(110259),
    h = n(496675),
    x = n(55935),
    j = n(434404),
    v = n(981631),
    O = n(921944),
    C = n(388032),
    y = n(824222);
function N(e) {
    let { guild: t } = e;
    i.useEffect(() => {
        (0, m.wE)(g.z.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION, t.id, {
            dismissAction: O.L.INDIRECT_ACTION,
            guildId: t.id,
            forceTrack: !0,
        });
    }, [t]);
    let n =
            !(0, b.OA)(g.z.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION, t.id) ||
            !t.features.has(v.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE) ||
            !t.features.has(v.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE),
        { enabled: l } = p.Z.useExperiment({
            guildId: t.id,
            location: "PermissionMigrationInfoBox",
        }),
        u = (0, x.vc)(a()(v.zQD), "LL");
    return l
        ? (0, r.jsxs)(s.pJ, {
              className: y.infobox,
              defaultExpanded: n,
              children: [
                  (0, r.jsx)(o.X, {
                      level: 2,
                      children: (0, r.jsx)(d.tEY, {
                          children: (0, r.jsxs)(c.z, {
                              slot: "trigger",
                              className: y.header,
                              children: [
                                  (0, r.jsx)(d.Mgn, { color: "currentColor" }),
                                  (0, r.jsx)(d.xvT, {
                                      variant: "heading-lg/semibold",
                                      tag: "span",
                                      children: C.intl.string(C.t["k60MO+"]),
                                  }),
                                  (0, r.jsx)(d.hic, { className: y.expandButton }),
                              ],
                          }),
                      }),
                  }),
                  (0, r.jsx)(s.V2, {
                      className: y.panel,
                      children: (0, r.jsxs)("div", {
                          className: y.content,
                          children: [
                              (0, r.jsxs)("p", {
                                  children: [
                                      C.intl.format(C.t.kBaRSt, {}),
                                      (0, r.jsxs)("ul", {
                                          className: y.infoList,
                                          children: [
                                              (0, r.jsx)("li", { children: C.intl.format(C.t.tUarT8, {}) }),
                                              (0, r.jsx)("li", { children: C.intl.format(C.t.r807RN, {}) }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("p", { children: C.intl.format(C.t.vgAb6w, { breakingChangeDate: u }) }),
                          ],
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)(s.pJ, {
              className: y.infobox,
              defaultExpanded: n,
              children: [
                  (0, r.jsx)(o.X, {
                      level: 2,
                      children: (0, r.jsx)(d.tEY, {
                          children: (0, r.jsxs)(c.z, {
                              slot: "trigger",
                              className: y.header,
                              children: [
                                  (0, r.jsx)(d.Mgn, { color: "currentColor" }),
                                  (0, r.jsx)(d.xvT, {
                                      variant: "heading-lg/semibold",
                                      tag: "span",
                                      children: C.intl.string(C.t["F+YaVP"]),
                                  }),
                                  (0, r.jsx)(d.hic, { className: y.expandButton }),
                              ],
                          }),
                      }),
                  }),
                  (0, r.jsx)(s.V2, {
                      className: y.panel,
                      children: (0, r.jsxs)("div", {
                          className: y.content,
                          children: [
                              (0, r.jsxs)("p", {
                                  children: [
                                      C.intl.format(C.t.xaPmNf, {}),
                                      (0, r.jsxs)("ul", {
                                          className: y.infoList,
                                          children: [
                                              (0, r.jsx)("li", { children: C.intl.format(C.t.tUarT8, {}) }),
                                              (0, r.jsx)("li", { children: C.intl.format(C.t.r807RN, {}) }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(d.y5t, {
                                  forceLevel: 3,
                                  children: (0, r.jsx)(d.X6q, {
                                      variant: "text-md/bold",
                                      children: C.intl.string(C.t.bLwbyU),
                                  }),
                              }),
                              (0, r.jsx)("p", { children: C.intl.format(C.t.eo5E6e, { breakingChangeDate: u }) }),
                              (0, r.jsx)("p", { children: C.intl.format(C.t.iLwQzv, { breakingChangeDate: u }) }),
                              (0, r.jsx)("div", { className: y.divider }),
                              (0, r.jsx)(E, { guild: t }),
                          ],
                      }),
                  }),
              ],
          });
}
function E(e) {
    let { guild: t } = e,
        n = (0, u.e7)([h.Z], () => h.Z.can(v.Plq.ADMINISTRATOR, t)),
        l = t.features.has(v.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE),
        a = t.features.has(v.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE),
        [s, o] = i.useState(!0),
        [c, g] = i.useState(!0);
    return n
        ? (0, r.jsxs)("form", {
              className: y.form,
              children: [
                  (0, r.jsxs)("fieldset", {
                      children: [
                          (0, r.jsx)("legend", { children: C.intl.string(C.t["/SSzPD"]) }),
                          (0, r.jsx)(I, {
                              label: C.intl.string(C.t.KMbKTt),
                              migratedLabel: C.intl.string(C.t.IJKefK),
                              migrated: l,
                              enabled: s,
                              onChange: o,
                          }),
                          (0, r.jsx)(I, {
                              label: C.intl.string(C.t["7ltOG9"]),
                              migratedLabel: C.intl.string(C.t.gVKQNA),
                              migrated: a,
                              enabled: c,
                              onChange: g,
                          }),
                      ],
                  }),
                  (0, r.jsx)(d.zxk, {
                      text: C.intl.string(C.t["1Qm822"]),
                      disabled: (!s || l) && (!c || a),
                      onClick: () => {
                          var e, n;
                          return (
                              (e = t),
                              (n = {
                                  migratePin: s && !l,
                                  migrateSlowmode: c && !a,
                              }),
                              void f.Z.show({
                                  title: C.intl.string(C.t.fM5aQ2),
                                  body: C.intl.format(C.t.rLbJs6, { guildName: e.name }),
                                  cancelText: C.intl.string(C.t["ETE/oC"]),
                                  confirmText: C.intl.string(C.t["cY+Oob"]),
                                  onConfirm: () => {
                                      S(e.id, n);
                                  },
                              })
                          );
                      },
                  }),
              ],
          })
        : (0, r.jsx)("p", { children: C.intl.string(C.t.hvFwHy) });
}
function I(e) {
    let { label: t, migratedLabel: n, migrated: i, enabled: l, onChange: a } = e;
    return (0, r.jsx)(d.XZJ, {
        label: i ? n : t,
        labelType: "primary",
        disabled: i,
        checked: l || i,
        onChange: a,
    });
}
async function S(e, t) {
    try {
        await j.Z.migratePermissions(e, t);
    } catch (e) {
        f.Z.show({
            title: C.intl.string(C.t.R0RpRX),
            body: C.intl.string(C.t["58yMLG"]),
            confirmVariant: "secondary",
        });
    }
}
