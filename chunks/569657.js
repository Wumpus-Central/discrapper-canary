n.d(t, { Z: () => y }), n(388685);
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
    p = n(496675),
    h = n(55935),
    x = n(434404),
    j = n(981631),
    v = n(921944),
    O = n(388032),
    C = n(824222);
function y(e) {
    let { guild: t } = e;
    i.useEffect(() => {
        (0, m.wE)(g.z.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION, t.id, {
            dismissAction: v.L.INDIRECT_ACTION,
            guildId: t.id,
            forceTrack: !0,
        });
    }, [t]);
    let n =
            !(0, b.OA)(g.z.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION, t.id) ||
            !t.features.has(j.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE) ||
            !t.features.has(j.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE),
        l = (0, h.vc)(a()(j.zQD), "LL");
    return (0, r.jsxs)(s.pJ, {
        className: C.infobox,
        defaultExpanded: n,
        children: [
            (0, r.jsx)(o.X, {
                level: 2,
                children: (0, r.jsx)(d.tEY, {
                    children: (0, r.jsxs)(c.z, {
                        slot: "trigger",
                        className: C.header,
                        children: [
                            (0, r.jsx)(d.Mgn, { color: "currentColor" }),
                            (0, r.jsx)(d.xvT, {
                                variant: "heading-lg/semibold",
                                tag: "span",
                                children: O.intl.string(O.t["F+YaVP"]),
                            }),
                            (0, r.jsx)(d.hic, { className: C.expandButton }),
                        ],
                    }),
                }),
            }),
            (0, r.jsx)(s.V2, {
                className: C.panel,
                children: (0, r.jsxs)("div", {
                    className: C.content,
                    children: [
                        (0, r.jsxs)("p", {
                            children: [
                                O.intl.format(O.t.xaPmNf, {}),
                                (0, r.jsxs)("ul", {
                                    className: C.infoList,
                                    children: [
                                        (0, r.jsx)("li", { children: O.intl.format(O.t.tUarT8, {}) }),
                                        (0, r.jsx)("li", { children: O.intl.format(O.t.r807RN, {}) }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(d.y5t, {
                            forceLevel: 3,
                            children: (0, r.jsx)(d.X6q, {
                                variant: "text-md/bold",
                                children: O.intl.string(O.t.bLwbyU),
                            }),
                        }),
                        (0, r.jsx)("p", { children: O.intl.format(O.t.eo5E6e, { breakingChangeDate: l }) }),
                        (0, r.jsx)("p", { children: O.intl.format(O.t.iLwQzv, { breakingChangeDate: l }) }),
                        (0, r.jsx)("div", { className: C.divider }),
                        (0, r.jsx)(N, { guild: t }),
                    ],
                }),
            }),
        ],
    });
}
function N(e) {
    let { guild: t } = e,
        n = (0, u.e7)([p.Z], () => p.Z.can(j.Plq.ADMINISTRATOR, t)),
        l = t.features.has(j.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE),
        a = t.features.has(j.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE),
        [s, o] = i.useState(!0),
        [c, g] = i.useState(!0);
    return n
        ? (0, r.jsxs)("form", {
              className: C.form,
              children: [
                  (0, r.jsxs)("fieldset", {
                      children: [
                          (0, r.jsx)("legend", { children: O.intl.string(O.t["/SSzPD"]) }),
                          (0, r.jsx)(E, {
                              label: O.intl.string(O.t.KMbKTt),
                              migratedLabel: O.intl.string(O.t.IJKefK),
                              migrated: l,
                              enabled: s,
                              onChange: o,
                          }),
                          (0, r.jsx)(E, {
                              label: O.intl.string(O.t["7ltOG9"]),
                              migratedLabel: O.intl.string(O.t.gVKQNA),
                              migrated: a,
                              enabled: c,
                              onChange: g,
                          }),
                      ],
                  }),
                  (0, r.jsx)(d.zxk, {
                      text: O.intl.string(O.t["1Qm822"]),
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
                                  title: O.intl.string(O.t.fM5aQ2),
                                  body: O.intl.format(O.t.rLbJs6, { guildName: e.name }),
                                  cancelText: O.intl.string(O.t["ETE/oC"]),
                                  confirmText: O.intl.string(O.t["cY+Oob"]),
                                  onConfirm: () => {
                                      I(e.id, n);
                                  },
                              })
                          );
                      },
                  }),
              ],
          })
        : (0, r.jsx)("p", { children: O.intl.string(O.t.hvFwHy) });
}
function E(e) {
    let { label: t, migratedLabel: n, migrated: i, enabled: l, onChange: a } = e;
    return (0, r.jsx)(d.XZJ, {
        label: i ? n : t,
        labelType: "primary",
        disabled: i,
        checked: l || i,
        onChange: a,
    });
}
async function I(e, t) {
    try {
        await x.Z.migratePermissions(e, t);
    } catch (e) {
        f.Z.show({
            title: O.intl.string(O.t.R0RpRX),
            body: O.intl.string(O.t["58yMLG"]),
            confirmVariant: "secondary",
        });
    }
}
