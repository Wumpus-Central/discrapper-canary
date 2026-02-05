"use strict";
n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    l = n(989349),
    r = n.n(l),
    a = n(386181),
    o = n(493108),
    d = n(650682),
    c = n(158954),
    u = n(417597),
    m = n(554146),
    g = n(157559),
    x = n(826673),
    h = n(367727),
    _ = n(937161),
    A = n(576705),
    p = n(405269),
    f = n(997509),
    j = n(652215),
    N = n(49999),
    E = n(985018),
    b = n(918609);
function T(e) {
    let { guild: t } = e;
    s.useEffect(() => {
        (0, x.dX)(m.M.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION, t.id, {
            dismissAction: N.i.INDIRECT_ACTION,
            guildId: t.id,
            forceTrack: !0,
        });
    }, [t]);
    let n =
            !(0, h.cN)(m.M.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION, t.id) ||
            !t.features.has(j.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE) ||
            !t.features.has(j.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE),
        { enabled: l } = _.A.useExperiment({ guildId: t.id, location: "PermissionMigrationInfoBox" }),
        u = (0, p.i$)(r()(j.X30), "LL");
    return l
        ? (0, i.jsxs)(a.EN, {
              className: b.oe,
              defaultExpanded: n,
              children: [
                  (0, i.jsx)(o.D, {
                      level: 2,
                      children: (0, i.jsx)(c.vN3, {
                          children: (0, i.jsxs)(d.$, {
                              slot: "trigger",
                              className: b.wx,
                              children: [
                                  (0, i.jsx)(c.EpV, { color: "currentColor" }),
                                  (0, i.jsx)(c.EYj, {
                                      variant: "heading-lg/semibold",
                                      tag: "span",
                                      children: E.intl.string(E.t["k60MO+"]),
                                  }),
                                  (0, i.jsx)(c.g8p, { className: b.X1 }),
                              ],
                          }),
                      }),
                  }),
                  (0, i.jsx)(a.kS, {
                      className: b.nd,
                      children: (0, i.jsxs)("div", {
                          className: b.Qs,
                          children: [
                              (0, i.jsxs)("p", {
                                  children: [
                                      E.intl.format(E.t.kBaRSt, {}),
                                      (0, i.jsxs)("ul", {
                                          className: b.Dj,
                                          children: [
                                              (0, i.jsx)("li", { children: E.intl.format(E.t.tUarT8, {}) }),
                                              (0, i.jsx)("li", { children: E.intl.format(E.t.r807RN, {}) }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("p", { children: E.intl.format(E.t.vgAb6w, { breakingChangeDate: u }) }),
                          ],
                      }),
                  }),
              ],
          })
        : (0, i.jsxs)(a.EN, {
              className: b.oe,
              defaultExpanded: n,
              children: [
                  (0, i.jsx)(o.D, {
                      level: 2,
                      children: (0, i.jsx)(c.vN3, {
                          children: (0, i.jsxs)(d.$, {
                              slot: "trigger",
                              className: b.wx,
                              children: [
                                  (0, i.jsx)(c.EpV, { color: "currentColor" }),
                                  (0, i.jsx)(c.EYj, {
                                      variant: "heading-lg/semibold",
                                      tag: "span",
                                      children: E.intl.string(E.t["F+YaVP"]),
                                  }),
                                  (0, i.jsx)(c.g8p, { className: b.X1 }),
                              ],
                          }),
                      }),
                  }),
                  (0, i.jsx)(a.kS, {
                      className: b.nd,
                      children: (0, i.jsxs)("div", {
                          className: b.Qs,
                          children: [
                              (0, i.jsxs)("p", {
                                  children: [
                                      E.intl.format(E.t.xaPmNf, {}),
                                      (0, i.jsxs)("ul", {
                                          className: b.Dj,
                                          children: [
                                              (0, i.jsx)("li", { children: E.intl.format(E.t.tUarT8, {}) }),
                                              (0, i.jsx)("li", { children: E.intl.format(E.t.r807RN, {}) }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(c.Fmo, {
                                  forceLevel: 3,
                                  children: (0, i.jsx)(c.DZT, {
                                      variant: "text-md/bold",
                                      children: E.intl.string(E.t.bLwbyU),
                                  }),
                              }),
                              (0, i.jsx)("p", { children: E.intl.format(E.t.eo5E6e, { breakingChangeDate: u }) }),
                              (0, i.jsx)("p", { children: E.intl.format(E.t.iLwQzv, { breakingChangeDate: u }) }),
                              (0, i.jsx)("div", { className: b.yF }),
                              (0, i.jsx)(C, { guild: t }),
                          ],
                      }),
                  }),
              ],
          });
}
function C(e) {
    let { guild: t } = e,
        n = (0, u.bG)([A.A], () => A.A.can(j.xBc.ADMINISTRATOR, t)),
        l = t.features.has(j.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE),
        r = t.features.has(j.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE),
        [a, o] = s.useState(!0),
        [d, m] = s.useState(!0);
    return n
        ? (0, i.jsxs)("form", {
              className: b.Zd,
              children: [
                  (0, i.jsxs)("fieldset", {
                      children: [
                          (0, i.jsx)("legend", { children: E.intl.string(E.t["/SSzPD"]) }),
                          (0, i.jsx)(I, {
                              label: E.intl.string(E.t.KMbKTt),
                              migratedLabel: E.intl.string(E.t.IJKefK),
                              migrated: l,
                              enabled: a,
                              onChange: o,
                          }),
                          (0, i.jsx)(I, {
                              label: E.intl.string(E.t["7ltOG9"]),
                              migratedLabel: E.intl.string(E.t.gVKQNA),
                              migrated: r,
                              enabled: d,
                              onChange: m,
                          }),
                      ],
                  }),
                  (0, i.jsx)(c.$nd, {
                      text: E.intl.string(E.t["1Qm822"]),
                      disabled: (!a || l) && (!d || r),
                      onClick: () => {
                          var e, n;
                          return (
                              (e = t),
                              (n = { migratePin: a && !l, migrateSlowmode: d && !r }),
                              void g.A.show({
                                  title: E.intl.string(E.t.fM5aQ2),
                                  body: E.intl.format(E.t.rLbJs6, { guildName: e.name }),
                                  cancelText: E.intl.string(E.t["ETE/oC"]),
                                  confirmText: E.intl.string(E.t["cY+Oob"]),
                                  onConfirm: () => {
                                      v(e.id, n);
                                  },
                              })
                          );
                      },
                  }),
              ],
          })
        : (0, i.jsx)("p", { children: E.intl.string(E.t.hvFwHy) });
}
function I(e) {
    let { label: t, migratedLabel: n, migrated: s, enabled: l, onChange: r } = e;
    return (0, i.jsx)(c.Sc0, { label: s ? n : t, labelType: "primary", disabled: s, checked: l || s, onChange: r });
}
async function v(e, t) {
    try {
        await f.A.migratePermissions(e, t);
    } catch {
        g.A.show({ title: E.intl.string(E.t.R0RpRX), body: E.intl.string(E.t["58yMLG"]), confirmVariant: "secondary" });
    }
}
