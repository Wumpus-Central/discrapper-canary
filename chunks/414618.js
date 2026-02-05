"use strict";
n.d(t, { A: () => Y });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(157559),
    u = n(308528),
    h = n(435183),
    g = n(702805),
    m = n(155718),
    x = n(709066),
    A = n(63104),
    f = n(235986),
    p = n(60868),
    b = n(894328),
    C = n(997509),
    j = n(776781),
    N = n(233993),
    v = n(110618),
    _ = n(176360),
    E = n(696451),
    y = n(317525),
    S = n(71393),
    T = n(576705),
    M = n(287809),
    R = n(396465),
    I = n(488926),
    L = n(495273),
    w = n(270486),
    O = n(80686),
    G = n(908494),
    k = n(737045),
    D = n(652215),
    B = n(818348),
    P = n(985018),
    U = n(807484);
function V(e) {
    let { channel: t, roles: n, members: i, disabledReason: s, getRemoveTooltipHint: r } = e;
    return (0, l.jsx)(d.B8B, {
        className: U.xz,
        sections: [n.length, i.length],
        renderRow: function (e) {
            let h,
                p,
                b,
                { section: C, row: N } = e,
                v = !1;
            switch (C) {
                case k.oO.ROLES:
                    (b =
                        (p = n[N]).rowType === k.T6.ROLE && p.tags?.guild_connections === null
                            ? (0, l.jsx)(A.A, { className: U.a, color: p.colorString, size: 20 })
                            : (0, l.jsx)(d.iTF, { size: "custom", className: U.a, color: p.colorString, height: 20 })),
                        (h = (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", { className: U.iw, children: b }),
                                (0, l.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    className: U.xZ,
                                    color: p.disabled ? "text-muted" : "text-default",
                                    children: p.name,
                                }),
                            ],
                        })),
                        (v = p.disabled);
                    break;
                case k.oO.MEMBERS:
                    (p = i[N]),
                        (h = (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(d.euF, { src: p.avatarURL, size: d._3J.SIZE_24, "aria-hidden": !0 }),
                                (0, l.jsx)(d.Text, { className: U.xZ, variant: "text-sm/normal", children: p.name }),
                                p.bot && (0, l.jsx)(x.A, { verified: p.verifiedBot, className: U.oN }),
                                null != p.nickname &&
                                    (0, l.jsx)(d.Text, {
                                        color: "text-muted",
                                        className: U.Gq,
                                        variant: "text-sm/normal",
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
            let _ = !v && null == s && null != p.id;
            return (0, l.jsxs)(
                f.A,
                {
                    justify: f.A.Justify.BETWEEN,
                    align: f.A.Align.CENTER,
                    className: U.TL,
                    children: [
                        (0, l.jsx)(f.A, {
                            justify: f.A.Justify.START,
                            align: f.A.Align.CENTER,
                            className: U.__invalid_memberRowBody,
                            children: h,
                        }),
                        (0, l.jsx)(d.Text, {
                            color: "text-muted",
                            variant: "text-xs/normal",
                            children: L.vV(p.rowType),
                        }),
                        p.rowType !== k.T6.EMPTY_STATE &&
                            (0, l.jsx)(o.m, {
                                asContainer: !0,
                                text: s ?? r(p.rowType, p.disabled),
                                children: (0, l.jsx)(d.DUT, {
                                    onClick: () => {
                                        var e, n, l;
                                        return (
                                            _ &&
                                            null != p &&
                                            ((e = p.id),
                                            (n = p.name),
                                            (l = p.rowType),
                                            void c.A.show({
                                                title: P.intl.string(P.t.GuPYQB),
                                                body: P.intl.format(P.t.xERCnZ, { name: n }),
                                                cancelText: P.intl.string(P.t["ETE/oC"]),
                                                onConfirm: () =>
                                                    (function (e, n) {
                                                        if (t.isGuildStageVoice()) {
                                                            let l = (0, j.$b)(
                                                                e,
                                                                n === k.T6.ROLE ? m.r2.ROLE : m.r2.MEMBER,
                                                                t,
                                                            );
                                                            (0, j.pF)(l)
                                                                ? u.A.clearPermissionOverwrite(t.id, l.id)
                                                                : (0, g.R$)(t.id, [l]);
                                                        } else u.A.clearPermissionOverwrite(t.id, e);
                                                    })(e, l),
                                            }))
                                        );
                                    },
                                    "aria-disabled": !_,
                                    "aria-label": P.intl.string(P.t.N86XcP),
                                    children: (0, l.jsx)(d.aXh, {
                                        size: "md",
                                        color: "currentColor",
                                        className: a()(U.Yz, { [U._2]: v || s }),
                                    }),
                                }),
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
                case k.oO.ROLES:
                    return (0, l.jsx)(W, { title: P.intl.string(P.t["LPJmL/"]) }, "roles-title");
                case k.oO.MEMBERS:
                    return (0, l.jsx)(W, { title: P.intl.string(P.t["9Oq93m"]) }, "members-title");
            }
        },
        sectionHeight: 49,
    });
}
function H(e) {
    let { guild: t, channel: i, permissionUpdates: s } = e,
        c = (0, r.bG)([y.A], () => y.A.getSortedRoles(t.id)),
        u = L.C$(t, c, i, N.QY, s),
        h = (0, r.bG)([E.Ay], () => L.Wi(E.Ay.getMemberIds(t.id), i, t, N.QY, s)),
        g = (0, j.qd)(i.id);
    return (0, l.jsxs)("div", {
        className: a()(U.j1, U.vu),
        children: [
            (0, l.jsx)(O.A, {
                label: P.intl.string(P.t.StpcFU),
                description: P.intl.string(P.t.f7VbhF),
                icon: (0, l.jsx)(d.qux, {
                    size: "custom",
                    color: "currentColor",
                    className: U.Ie,
                    height: 20,
                    width: 20,
                }),
                id: "StageModeratorSettingCard",
            }),
            (0, l.jsxs)("div", {
                className: U.X4,
                children: [
                    (0, l.jsxs)(f.A, {
                        justify: f.A.Justify.BETWEEN,
                        align: f.A.Align.CENTER,
                        className: U.MJ,
                        children: [
                            (0, l.jsx)(d.Text, { variant: "text-md/semibold", children: P.intl.string(P.t["7BWDRb"]) }),
                            (0, l.jsx)(o.m, {
                                text: P.intl.string(P.t.arRuES),
                                shouldShow: !g,
                                children: (0, l.jsx)(d.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: P.intl.string(P.t.dMJ3Y6),
                                    onClick: function () {
                                        (0, d.mMO)(async () => {
                                            let { default: e } = await n.e("58608").then(n.bind(n, 841811));
                                            return (t) => (0, l.jsx)(e, { ...t, channelId: i.id });
                                        });
                                    },
                                    disabled: !g,
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(V, {
                        channel: i,
                        roles: u,
                        members: h,
                        disabledReason: g ? null : P.intl.string(P.t.arRuES),
                        getRemoveTooltipHint: v.Mt,
                    }),
                ],
            }),
        ],
    });
}
function F(e) {
    let { guild: t, channel: i, isPrivateGuildChannel: s, roles: o, members: c } = e,
        u = (0, r.bG)([T.A], () => T.A.can(B.xB.ADMINISTRATOR, t)),
        h = I.MJ(B.xB.VIEW_CHANNEL, t),
        g = I.MJ(B.xB.ADMINISTRATOR, t);
    async function m() {
        let e = i.accessPermissions,
            a = M.default.getCurrentUser();
        s || null == (await (0, b.D)(t.id, i.id))
            ? (L.uB(i, e, s), s || null == a || u || L.tP(i, e))
            : (0, d.mMO)(async () => {
                  let { Modal: e } = await Promise.resolve().then(n.bind(n, 158954));
                  return (n) =>
                      (0, l.jsx)(e, {
                          ...n,
                          title: P.intl.string(P.t.ZzdgUm),
                          subtitle: P.intl.format(P.t.DwY2vN, {
                              onClick: () => {
                                  C.A.open(t.id, D.BEX.ONBOARDING), n.onClose();
                              },
                          }),
                          actions: [{ text: P.intl.string(P.t.BddRzS), onClick: n.onClose }],
                      });
              });
    }
    let x = {
        title: P.intl.string(P.t.aUI70g),
        subtitle: P.intl.string(P.t.hfbjIH),
        formLabel: P.intl.string(P.t.P6eCbP),
    };
    return (
        i.isCategory()
            ? ((x.title = P.intl.string(P.t.lEPAZ5)),
              (x.subtitle = P.intl.string(P.t.RQUk61)),
              (x.formLabel = P.intl.string(P.t["8VIxJu"])))
            : i.type === D.rbe.GUILD_VOICE && (x.subtitle = P.intl.string(P.t.cLjvKg)),
        (0, l.jsxs)("div", {
            className: a()(U.j1, { [U.vu]: s }),
            children: [
                (0, l.jsx)(O.A, {
                    description: x.subtitle,
                    icon: (0, l.jsx)(d.XAi, {
                        size: "custom",
                        color: "currentColor",
                        className: U.Ie,
                        height: 20,
                        width: 20,
                    }),
                    id: "PrivateChannelSettingCard",
                    label: x.title,
                    onChange: m,
                    value: s,
                }),
                (0, l.jsxs)("div", {
                    className: U.X4,
                    children: [
                        g &&
                            (0, l.jsx)("div", {
                                className: U.Ux,
                                children: (0, l.jsx)(d.po8, {
                                    messageType: d.YCn.WARNING,
                                    children: P.intl.string(P.t["5f3HIC"]),
                                }),
                            }),
                        !h &&
                            !g &&
                            !s &&
                            (0, l.jsx)("div", {
                                className: U.Ux,
                                children: (0, l.jsx)(d.po8, {
                                    messageType: d.YCn.WARNING,
                                    children: P.intl.string(P.t.ZAk4Q9),
                                }),
                            }),
                        s &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsxs)(f.A, {
                                        justify: f.A.Justify.BETWEEN,
                                        align: f.A.Align.CENTER,
                                        className: U.MJ,
                                        children: [
                                            (0, l.jsx)(d.Heading, {
                                                variant: "heading-sm/semibold",
                                                className: U.DH,
                                                children: x.formLabel,
                                            }),
                                            (0, l.jsx)(d.Button, {
                                                variant: "primary",
                                                size: "sm",
                                                text: P.intl.string(P.t.dMJ3Y6),
                                                onClick: function () {
                                                    (0, d.mMO)(async () => {
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
                                    (0, l.jsx)(V, { channel: i, roles: o, members: c, getRemoveTooltipHint: L.ro }),
                                ],
                            }),
                    ],
                }),
            ],
        })
    );
}
function W(e) {
    let { title: t } = e;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(d.cGx, { className: U.yF }),
            (0, l.jsx)(d.Heading, { variant: "heading-sm/semibold", className: a()(U.DH, U.Gf), children: t }),
        ],
    });
}
let Y = r.Ay.connectStores([_.A, T.A, E.Ay, S.A, y.A], () => {
    let e,
        t = _.A.channel,
        n = _.A.category,
        l = [],
        i = [],
        s = {},
        a = !1;
    if (null != t) {
        e = S.A.getGuild(t.getGuildId());
        let n = E.Ay.getMemberIds(e?.id);
        if (null != e) {
            let r = y.A.getSortedRoles(e.id);
            (s = _.A.editedPermissionIds.reduce((e, t) => {
                let n = _.A.getPermissionOverwrite(t);
                return null != n && (e[t] = n), e;
            }, {})),
                (l = L.uX(e, r, t, t.accessPermissions, s)),
                (i = L.Wi(n, t, e, t.accessPermissions, s)),
                (a = L.Ae(t, s));
        }
    }
    return {
        canSyncChannel: null != n && T.A.can(B.xB.MANAGE_ROLES, n),
        category: n,
        channel: t,
        filteredMembers: i,
        filteredRoles: l,
        guild: e,
        isPrivateGuildChannel: a,
        locked: _.A.locked,
        permissionUpdates: s,
    };
})(function (e) {
    let {
            canSyncChannel: t,
            category: s,
            channel: a,
            filteredMembers: r,
            filteredRoles: o,
            guild: c,
            isPrivateGuildChannel: u,
            locked: g,
            permissionUpdates: m,
        } = e,
        [x, A] = i.useState(!I.MJ(B.xB.SEND_MESSAGES, a));
    if (null == a || null == c) return null;
    let f = { title: P.intl.string(P.t.BAZMBn), subtitle: P.intl.string(P.t.XLrZyp) };
    return (
        a.isCategory() && ((f.title = P.intl.string(P.t["/uELTj"])), (f.subtitle = P.intl.string(P.t["8iAg3Q"]))),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(d.Heading, { variant: "heading-lg/semibold", children: f.title }),
                (0, l.jsx)(d.Text, { variant: "text-sm/normal", children: f.subtitle }),
                null != s && t
                    ? g
                        ? (0, l.jsx)(G.A, {
                              canSync: !1,
                              icon: d.fNY,
                              noticeText: P.intl.format(P.t.ETJqLl, { categoryName: s.name }),
                          })
                        : (0, l.jsx)(G.A, {
                              buttonText: P.intl.string(P.t.NVwuHq),
                              canSync: !0,
                              icon: (0, d.kHD)(R.A),
                              noticeText: P.intl.format(P.t.OIhm0M, { categoryName: s.name }),
                              onClick: function () {
                                  null != s &&
                                      (0, d.mMO)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 544169));
                                          return (t) =>
                                              (0, l.jsx)(e, {
                                                  ...t,
                                                  channel: a,
                                                  category: s,
                                                  onConfirm: async () => {
                                                      let { guild_id: e } = s,
                                                          t = { ...s.permissionOverwrites };
                                                      null != e && null == t[e] && (t[e] = I.xT(e)),
                                                          (await (0, p.n)(a, t[e].deny, t[e].allow)) &&
                                                              (0, h.RT)(a.id, {
                                                                  permissionOverwrites: Object.values(t),
                                                              });
                                                  },
                                              });
                                      });
                              },
                          })
                    : null,
                a.isGuildStageVoice() ? (0, l.jsx)(H, { guild: c, channel: a, permissionUpdates: m }) : null,
                (0, l.jsx)(F, { channel: a, guild: c, isPrivateGuildChannel: u, roles: o, members: r }),
                !1,
                (0, l.jsx)(w.A, {}),
            ],
        })
    );
});
