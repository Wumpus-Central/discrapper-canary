"use strict";
n.d(t, { A: () => F });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    r = n(990078),
    o = n(397927),
    d = n(157559),
    c = n(308528),
    u = n(435183),
    h = n(702805),
    g = n(155718),
    m = n(709066),
    x = n(63104),
    A = n(60868),
    p = n(894328),
    f = n(997509),
    b = n(776781),
    C = n(233993),
    j = n(110618),
    v = n(176360),
    N = n(696451),
    _ = n(317525),
    y = n(71393),
    S = n(576705),
    E = n(287809),
    T = n(396465),
    M = n(488926),
    I = n(495273),
    R = n(270486),
    L = n(80686),
    w = n(908494),
    O = n(737045),
    G = n(652215),
    k = n(818348),
    D = n(985018),
    B = n(420754);
function P(e) {
    let { channel: t, roles: n, members: i, disabledReason: a, getRemoveTooltipHint: u } = e;
    return (0, l.jsx)(o.B8B, {
        className: B.xz,
        sections: [n.length, i.length],
        renderRow: function (e) {
            let A,
                p,
                f,
                { section: C, row: j } = e,
                v = !1;
            switch (C) {
                case O.oO.ROLES:
                    (f =
                        (p = n[j]).rowType === O.T6.ROLE && p.tags?.guild_connections === null
                            ? (0, l.jsx)(x.A, { className: B.a, color: p.colorString, size: 20 })
                            : (0, l.jsx)(o.iTF, { size: "custom", className: B.a, color: p.colorString, height: 20 })),
                        (A = (0, l.jsxs)(l.Fragment, {
                            children: [
                                f,
                                (0, l.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: p.disabled ? "text-muted" : "text-default",
                                    children: p.name,
                                }),
                            ],
                        })),
                        (v = p.disabled);
                    break;
                case O.oO.MEMBERS:
                    (p = i[j]),
                        (A = (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(o.euF, { src: p.avatarURL, size: o._3J.SIZE_20, "aria-hidden": !0 }),
                                (0, l.jsx)(o.Text, { variant: "text-sm/normal", children: p.name }),
                                p.bot && (0, l.jsx)(m.A, { verified: p.verifiedBot }),
                                (0, l.jsx)(o.Text, {
                                    color: "text-muted",
                                    className: B.Gq,
                                    variant: "text-xs/normal",
                                    children: p.username,
                                }),
                            ],
                        })),
                        (v = p.disabled);
                    break;
                default:
                    p = null;
            }
            if (null == p) return null;
            let N = !v && null == a && null != p.id;
            return (0, l.jsxs)(
                "div",
                {
                    className: B.TL,
                    role: "listitem",
                    children: [
                        (0, l.jsx)("div", { className: B.z7, children: A }),
                        (0, l.jsxs)("div", {
                            className: B.z7,
                            children: [
                                (0, l.jsx)(o.Text, {
                                    color: "text-muted",
                                    variant: "text-xs/normal",
                                    children: I.vV(p.rowType),
                                }),
                                p.rowType !== O.T6.EMPTY_STATE &&
                                    (0, l.jsx)(r.m, {
                                        asContainer: !0,
                                        text: a ?? u(p.rowType, p.disabled),
                                        children: (0, l.jsx)(o.DUT, {
                                            onClick: () => {
                                                var e, n, l;
                                                return (
                                                    N &&
                                                    null != p &&
                                                    ((e = p.id),
                                                    (n = p.name),
                                                    (l = p.rowType),
                                                    void d.A.show({
                                                        title: D.intl.string(D.t.GuPYQB),
                                                        body: D.intl.format(D.t.xERCnZ, { name: n }),
                                                        cancelText: D.intl.string(D.t["ETE/oC"]),
                                                        onConfirm: () =>
                                                            (function (e, n) {
                                                                if (t.isGuildStageVoice()) {
                                                                    let l = (0, b.$b)(
                                                                        e,
                                                                        n === O.T6.ROLE ? g.r2.ROLE : g.r2.MEMBER,
                                                                        t,
                                                                    );
                                                                    (0, b.pF)(l)
                                                                        ? c.A.clearPermissionOverwrite(t.id, l.id)
                                                                        : (0, h.R$)(t.id, [l]);
                                                                } else c.A.clearPermissionOverwrite(t.id, e);
                                                            })(e, l),
                                                    }))
                                                );
                                            },
                                            className: B.HI,
                                            "aria-disabled": !N,
                                            "aria-label": D.intl.string(D.t.N86XcP),
                                            children: (0, l.jsx)(o.aXh, {
                                                size: "sm",
                                                color: "currentColor",
                                                className: s()(B.Yz, { [B._2]: v || a }),
                                            }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                },
                p.id,
            );
        },
        rowHeight: 40,
        renderSection: function (e) {
            let { section: t } = e;
            switch (t) {
                case O.oO.ROLES:
                    return (0, l.jsx)(H, { title: D.intl.string(D.t["LPJmL/"]) }, "roles-title");
                case O.oO.MEMBERS:
                    return (0, l.jsx)(H, { title: D.intl.string(D.t["9Oq93m"]) }, "members-title");
            }
        },
        sectionHeight: 49,
        role: "list",
    });
}
function U(e) {
    let { guild: t, channel: i, permissionUpdates: d } = e,
        c = (0, a.bG)([_.A], () => _.A.getSortedRoles(t.id)),
        u = I.C$(t, c, i, C.QY, d),
        h = (0, a.bG)([N.Ay], () => I.Wi(N.Ay.getMemberIds(t.id), i, t, C.QY, d)),
        g = (0, b.qd)(i.id);
    return (0, l.jsxs)("div", {
        className: s()(B.j1, B.vu),
        children: [
            (0, l.jsx)(L.A, {
                label: D.intl.string(D.t.StpcFU),
                description: D.intl.string(D.t.f7VbhF),
                icon: (0, l.jsx)(o.qux, {
                    size: "custom",
                    color: "currentColor",
                    className: B.Ie,
                    height: 20,
                    width: 20,
                }),
                id: "StageModeratorSettingCard",
            }),
            (0, l.jsxs)("div", {
                className: B.X4,
                children: [
                    (0, l.jsxs)("div", {
                        className: B.MJ,
                        children: [
                            (0, l.jsx)(o.Text, { variant: "text-md/semibold", children: D.intl.string(D.t["7BWDRb"]) }),
                            (0, l.jsx)(r.m, {
                                text: D.intl.string(D.t.arRuES),
                                shouldShow: !g,
                                children: (0, l.jsx)(o.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: D.intl.string(D.t.dMJ3Y6),
                                    onClick: function () {
                                        (0, o.mMO)(async () => {
                                            let { default: e } = await n.e("58608").then(n.bind(n, 841811));
                                            return (t) => (0, l.jsx)(e, { ...t, channelId: i.id });
                                        });
                                    },
                                    disabled: !g,
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(P, {
                        channel: i,
                        roles: u,
                        members: h,
                        disabledReason: g ? null : D.intl.string(D.t.arRuES),
                        getRemoveTooltipHint: j.Mt,
                    }),
                ],
            }),
        ],
    });
}
function V(e) {
    let { guild: t, channel: i, isPrivateGuildChannel: r, roles: d, members: c } = e,
        u = (0, a.bG)([S.A], () => S.A.can(k.xB.ADMINISTRATOR, t)),
        h = M.MJ(k.xB.VIEW_CHANNEL, t),
        g = M.MJ(k.xB.ADMINISTRATOR, t);
    async function m() {
        let e = i.accessPermissions,
            s = E.default.getCurrentUser();
        r || null == (await (0, p.D)(t.id, i.id))
            ? (I.uB(i, e, r), r || null == s || u || I.tP(i, e))
            : (0, o.mMO)(async () => {
                  let { Modal: e } = await Promise.resolve().then(n.bind(n, 158954));
                  return (n) =>
                      (0, l.jsx)(e, {
                          ...n,
                          title: D.intl.string(D.t.ZzdgUm),
                          subtitle: D.intl.format(D.t.DwY2vN, {
                              onClick: () => {
                                  f.A.open(t.id, G.BEX.ONBOARDING), n.onClose();
                              },
                          }),
                          actions: [{ text: D.intl.string(D.t.BddRzS), onClick: n.onClose }],
                      });
              });
    }
    let x = {
        title: D.intl.string(D.t.aUI70g),
        subtitle: D.intl.string(D.t.hfbjIH),
        formLabel: D.intl.string(D.t.P6eCbP),
    };
    return (
        i.isCategory()
            ? ((x.title = D.intl.string(D.t.lEPAZ5)),
              (x.subtitle = D.intl.string(D.t.RQUk61)),
              (x.formLabel = D.intl.string(D.t["8VIxJu"])))
            : i.type === G.rbe.GUILD_VOICE && (x.subtitle = D.intl.string(D.t.cLjvKg)),
        (0, l.jsxs)("div", {
            className: s()(B.j1, { [B.vu]: r }),
            children: [
                (0, l.jsx)(L.A, {
                    description: x.subtitle,
                    icon: (0, l.jsx)(o.XAi, {
                        size: "custom",
                        color: "currentColor",
                        className: B.Ie,
                        height: 20,
                        width: 20,
                    }),
                    id: "PrivateChannelSettingCard",
                    label: x.title,
                    onChange: m,
                    value: r,
                }),
                (0, l.jsxs)("div", {
                    className: B.X4,
                    children: [
                        g &&
                            (0, l.jsx)("div", {
                                className: B.Ux,
                                children: (0, l.jsx)(o.po8, {
                                    messageType: o.YCn.WARNING,
                                    children: D.intl.string(D.t["5f3HIC"]),
                                }),
                            }),
                        !h &&
                            !g &&
                            !r &&
                            (0, l.jsx)("div", {
                                className: B.Ux,
                                children: (0, l.jsx)(o.po8, {
                                    messageType: o.YCn.WARNING,
                                    children: D.intl.string(D.t.ZAk4Q9),
                                }),
                            }),
                        r &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: B.MJ,
                                        children: [
                                            (0, l.jsx)(o.Heading, {
                                                variant: "heading-sm/semibold",
                                                className: B.DH,
                                                children: x.formLabel,
                                            }),
                                            (0, l.jsx)(o.Button, {
                                                variant: "primary",
                                                size: "sm",
                                                text: D.intl.string(D.t.dMJ3Y6),
                                                onClick: function () {
                                                    (0, o.mMO)(async () => {
                                                        let { default: e } = await Promise.resolve().then(
                                                            n.bind(n, 685374),
                                                        );
                                                        return (t) =>
                                                            (0, l.jsx)(e, { ...t, channelId: i.id, inSettings: !0 });
                                                    });
                                                },
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(P, { channel: i, roles: d, members: c, getRemoveTooltipHint: I.ro }),
                                ],
                            }),
                    ],
                }),
            ],
        })
    );
}
function H(e) {
    let { title: t } = e;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(o.cGx, { className: B.yF }),
            (0, l.jsx)(o.Heading, { variant: "heading-sm/semibold", className: s()(B.DH, B.Gf), children: t }),
        ],
    });
}
let F = a.Ay.connectStores([v.A, S.A, N.Ay, y.A, _.A], () => {
    let e,
        t = v.A.channel,
        n = v.A.category,
        l = [],
        i = [],
        s = {},
        a = !1;
    if (null != t) {
        e = y.A.getGuild(t.getGuildId());
        let n = N.Ay.getMemberIds(e?.id);
        if (null != e) {
            let r = _.A.getSortedRoles(e.id);
            (s = v.A.editedPermissionIds.reduce((e, t) => {
                let n = v.A.getPermissionOverwrite(t);
                return null != n && (e[t] = n), e;
            }, {})),
                (l = I.uX(e, r, t, t.accessPermissions, s)),
                (i = I.Wi(n, t, e, t.accessPermissions, s)),
                (a = I.Ae(t, s));
        }
    }
    return {
        canSyncChannel: null != n && S.A.can(k.xB.MANAGE_ROLES, n),
        category: n,
        channel: t,
        filteredMembers: i,
        filteredRoles: l,
        guild: e,
        isPrivateGuildChannel: a,
        locked: v.A.locked,
        permissionUpdates: s,
    };
})(function (e) {
    let {
        canSyncChannel: t,
        category: i,
        channel: s,
        filteredMembers: a,
        filteredRoles: r,
        guild: d,
        isPrivateGuildChannel: c,
        locked: h,
        permissionUpdates: g,
    } = e;
    if (null == s || null == d) return null;
    let m = { title: D.intl.string(D.t.BAZMBn), subtitle: D.intl.string(D.t.XLrZyp) };
    return (
        s.isCategory() && ((m.title = D.intl.string(D.t["/uELTj"])), (m.subtitle = D.intl.string(D.t["8iAg3Q"]))),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(o.Heading, { variant: "heading-lg/semibold", children: m.title }),
                (0, l.jsx)(o.Text, { variant: "text-sm/normal", children: m.subtitle }),
                null != i && t
                    ? h
                        ? (0, l.jsx)(w.A, {
                              canSync: !1,
                              icon: o.fNY,
                              noticeText: D.intl.format(D.t.ETJqLl, { categoryName: i.name }),
                          })
                        : (0, l.jsx)(w.A, {
                              buttonText: D.intl.string(D.t.NVwuHq),
                              canSync: !0,
                              icon: (0, o.kHD)(T.A),
                              noticeText: D.intl.format(D.t.OIhm0M, { categoryName: i.name }),
                              onClick: function () {
                                  null != i &&
                                      (0, o.mMO)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 544169));
                                          return (t) =>
                                              (0, l.jsx)(e, {
                                                  ...t,
                                                  channel: s,
                                                  category: i,
                                                  onConfirm: async () => {
                                                      let { guild_id: e } = i,
                                                          t = { ...i.permissionOverwrites };
                                                      null != e && null == t[e] && (t[e] = M.xT(e)),
                                                          (await (0, A.n)(s, t[e].deny, t[e].allow)) &&
                                                              (0, u.RT)(s.id, {
                                                                  permissionOverwrites: Object.values(t),
                                                              });
                                                  },
                                              });
                                      });
                              },
                          })
                    : null,
                s.isGuildStageVoice() ? (0, l.jsx)(U, { guild: d, channel: s, permissionUpdates: g }) : null,
                (0, l.jsx)(V, { channel: s, guild: d, isPrivateGuildChannel: c, roles: r, members: a }),
                (0, l.jsx)(R.A, {}),
            ],
        })
    );
});
