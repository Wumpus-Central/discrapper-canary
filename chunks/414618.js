"use strict";
n.d(t, { A: () => W });
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
    p = n(60868),
    f = n(894328),
    b = n(997509),
    C = n(776781),
    j = n(233993),
    N = n(110618),
    v = n(176360),
    _ = n(696451),
    S = n(317525),
    y = n(71393),
    E = n(576705),
    T = n(287809),
    M = n(396465),
    I = n(488926),
    R = n(495273),
    L = n(270486),
    w = n(80686),
    O = n(908494),
    G = n(737045),
    k = n(652215),
    D = n(818348),
    B = n(985018),
    P = n(807484);
function U(e) {
    let { channel: t, roles: n, members: i, disabledReason: s, getRemoveTooltipHint: r } = e;
    return (0, l.jsx)(d.B8B, {
        className: P.xz,
        sections: [n.length, i.length],
        renderRow: function (e) {
            let h,
                p,
                f,
                { section: b, row: j } = e,
                N = !1;
            switch (b) {
                case G.oO.ROLES:
                    (f =
                        (p = n[j]).rowType === G.T6.ROLE && p.tags?.guild_connections === null
                            ? (0, l.jsx)(A.A, { className: P.a, color: p.colorString, size: 20 })
                            : (0, l.jsx)(d.iTF, { size: "custom", className: P.a, color: p.colorString, height: 20 })),
                        (h = (0, l.jsxs)(l.Fragment, {
                            children: [
                                f,
                                (0, l.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    color: p.disabled ? "text-muted" : "text-default",
                                    children: p.name,
                                }),
                            ],
                        })),
                        (N = p.disabled);
                    break;
                case G.oO.MEMBERS:
                    (p = i[j]),
                        (h = (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(d.euF, { src: p.avatarURL, size: d._3J.SIZE_20, "aria-hidden": !0 }),
                                (0, l.jsx)(d.Text, { variant: "text-sm/normal", children: p.name }),
                                p.bot && (0, l.jsx)(x.A, { verified: p.verifiedBot }),
                                (0, l.jsx)(d.Text, {
                                    color: "text-muted",
                                    className: P.Gq,
                                    variant: "text-xs/normal",
                                    children: p.username,
                                }),
                            ],
                        })),
                        (N = p.disabled);
                    break;
                default:
                    p = null;
            }
            if (null == p) return null;
            let v = !N && null == s && null != p.id;
            return (0, l.jsxs)(
                "div",
                {
                    className: P.TL,
                    role: "listitem",
                    children: [
                        (0, l.jsx)("div", { className: P.z7, children: h }),
                        (0, l.jsxs)("div", {
                            className: P.z7,
                            children: [
                                (0, l.jsx)(d.Text, {
                                    color: "text-muted",
                                    variant: "text-xs/normal",
                                    children: R.vV(p.rowType),
                                }),
                                p.rowType !== G.T6.EMPTY_STATE &&
                                    (0, l.jsx)(o.m, {
                                        asContainer: !0,
                                        text: s ?? r(p.rowType, p.disabled),
                                        children: (0, l.jsx)(d.DUT, {
                                            onClick: () => {
                                                var e, n, l;
                                                return (
                                                    v &&
                                                    null != p &&
                                                    ((e = p.id),
                                                    (n = p.name),
                                                    (l = p.rowType),
                                                    void c.A.show({
                                                        title: B.intl.string(B.t.GuPYQB),
                                                        body: B.intl.format(B.t.xERCnZ, { name: n }),
                                                        cancelText: B.intl.string(B.t["ETE/oC"]),
                                                        onConfirm: () =>
                                                            (function (e, n) {
                                                                if (t.isGuildStageVoice()) {
                                                                    let l = (0, C.$b)(
                                                                        e,
                                                                        n === G.T6.ROLE ? m.r2.ROLE : m.r2.MEMBER,
                                                                        t,
                                                                    );
                                                                    (0, C.pF)(l)
                                                                        ? u.A.clearPermissionOverwrite(t.id, l.id)
                                                                        : (0, g.R$)(t.id, [l]);
                                                                } else u.A.clearPermissionOverwrite(t.id, e);
                                                            })(e, l),
                                                    }))
                                                );
                                            },
                                            className: P.HI,
                                            "aria-disabled": !v,
                                            "aria-label": B.intl.string(B.t.N86XcP),
                                            children: (0, l.jsx)(d.aXh, {
                                                size: "sm",
                                                color: "currentColor",
                                                className: a()(P.Yz, { [P._2]: N || s }),
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
                case G.oO.ROLES:
                    return (0, l.jsx)(F, { title: B.intl.string(B.t["LPJmL/"]) }, "roles-title");
                case G.oO.MEMBERS:
                    return (0, l.jsx)(F, { title: B.intl.string(B.t["9Oq93m"]) }, "members-title");
            }
        },
        sectionHeight: 49,
        role: "list",
    });
}
function V(e) {
    let { guild: t, channel: i, permissionUpdates: s } = e,
        c = (0, r.bG)([S.A], () => S.A.getSortedRoles(t.id)),
        u = R.C$(t, c, i, j.QY, s),
        h = (0, r.bG)([_.Ay], () => R.Wi(_.Ay.getMemberIds(t.id), i, t, j.QY, s)),
        g = (0, C.qd)(i.id);
    return (0, l.jsxs)("div", {
        className: a()(P.j1, P.vu),
        children: [
            (0, l.jsx)(w.A, {
                label: B.intl.string(B.t.StpcFU),
                description: B.intl.string(B.t.f7VbhF),
                icon: (0, l.jsx)(d.qux, {
                    size: "custom",
                    color: "currentColor",
                    className: P.Ie,
                    height: 20,
                    width: 20,
                }),
                id: "StageModeratorSettingCard",
            }),
            (0, l.jsxs)("div", {
                className: P.X4,
                children: [
                    (0, l.jsxs)("div", {
                        className: P.MJ,
                        children: [
                            (0, l.jsx)(d.Text, { variant: "text-md/semibold", children: B.intl.string(B.t["7BWDRb"]) }),
                            (0, l.jsx)(o.m, {
                                text: B.intl.string(B.t.arRuES),
                                shouldShow: !g,
                                children: (0, l.jsx)(d.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: B.intl.string(B.t.dMJ3Y6),
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
                    (0, l.jsx)(U, {
                        channel: i,
                        roles: u,
                        members: h,
                        disabledReason: g ? null : B.intl.string(B.t.arRuES),
                        getRemoveTooltipHint: N.Mt,
                    }),
                ],
            }),
        ],
    });
}
function H(e) {
    let { guild: t, channel: i, isPrivateGuildChannel: s, roles: o, members: c } = e,
        u = (0, r.bG)([E.A], () => E.A.can(D.xB.ADMINISTRATOR, t)),
        h = I.MJ(D.xB.VIEW_CHANNEL, t),
        g = I.MJ(D.xB.ADMINISTRATOR, t);
    async function m() {
        let e = i.accessPermissions,
            a = T.default.getCurrentUser();
        s || null == (await (0, f.D)(t.id, i.id))
            ? (R.uB(i, e, s), s || null == a || u || R.tP(i, e))
            : (0, d.mMO)(async () => {
                  let { Modal: e } = await Promise.resolve().then(n.bind(n, 158954));
                  return (n) =>
                      (0, l.jsx)(e, {
                          ...n,
                          title: B.intl.string(B.t.ZzdgUm),
                          subtitle: B.intl.format(B.t.DwY2vN, {
                              onClick: () => {
                                  b.A.open(t.id, k.BEX.ONBOARDING), n.onClose();
                              },
                          }),
                          actions: [{ text: B.intl.string(B.t.BddRzS), onClick: n.onClose }],
                      });
              });
    }
    let x = {
        title: B.intl.string(B.t.aUI70g),
        subtitle: B.intl.string(B.t.hfbjIH),
        formLabel: B.intl.string(B.t.P6eCbP),
    };
    return (
        i.isCategory()
            ? ((x.title = B.intl.string(B.t.lEPAZ5)),
              (x.subtitle = B.intl.string(B.t.RQUk61)),
              (x.formLabel = B.intl.string(B.t["8VIxJu"])))
            : i.type === k.rbe.GUILD_VOICE && (x.subtitle = B.intl.string(B.t.cLjvKg)),
        (0, l.jsxs)("div", {
            className: a()(P.j1, { [P.vu]: s }),
            children: [
                (0, l.jsx)(w.A, {
                    description: x.subtitle,
                    icon: (0, l.jsx)(d.XAi, {
                        size: "custom",
                        color: "currentColor",
                        className: P.Ie,
                        height: 20,
                        width: 20,
                    }),
                    id: "PrivateChannelSettingCard",
                    label: x.title,
                    onChange: m,
                    value: s,
                }),
                (0, l.jsxs)("div", {
                    className: P.X4,
                    children: [
                        g &&
                            (0, l.jsx)("div", {
                                className: P.Ux,
                                children: (0, l.jsx)(d.po8, {
                                    messageType: d.YCn.WARNING,
                                    children: B.intl.string(B.t["5f3HIC"]),
                                }),
                            }),
                        !h &&
                            !g &&
                            !s &&
                            (0, l.jsx)("div", {
                                className: P.Ux,
                                children: (0, l.jsx)(d.po8, {
                                    messageType: d.YCn.WARNING,
                                    children: B.intl.string(B.t.ZAk4Q9),
                                }),
                            }),
                        s &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: P.MJ,
                                        children: [
                                            (0, l.jsx)(d.Heading, {
                                                variant: "heading-sm/semibold",
                                                className: P.DH,
                                                children: x.formLabel,
                                            }),
                                            (0, l.jsx)(d.Button, {
                                                variant: "primary",
                                                size: "sm",
                                                text: B.intl.string(B.t.dMJ3Y6),
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
                                    (0, l.jsx)(U, { channel: i, roles: o, members: c, getRemoveTooltipHint: R.ro }),
                                ],
                            }),
                    ],
                }),
            ],
        })
    );
}
function F(e) {
    let { title: t } = e;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(d.cGx, { className: P.yF }),
            (0, l.jsx)(d.Heading, { variant: "heading-sm/semibold", className: a()(P.DH, P.Gf), children: t }),
        ],
    });
}
let W = r.Ay.connectStores([v.A, E.A, _.Ay, y.A, S.A], () => {
    let e,
        t = v.A.channel,
        n = v.A.category,
        l = [],
        i = [],
        s = {},
        a = !1;
    if (null != t) {
        e = y.A.getGuild(t.getGuildId());
        let n = _.Ay.getMemberIds(e?.id);
        if (null != e) {
            let r = S.A.getSortedRoles(e.id);
            (s = v.A.editedPermissionIds.reduce((e, t) => {
                let n = v.A.getPermissionOverwrite(t);
                return null != n && (e[t] = n), e;
            }, {})),
                (l = R.uX(e, r, t, t.accessPermissions, s)),
                (i = R.Wi(n, t, e, t.accessPermissions, s)),
                (a = R.Ae(t, s));
        }
    }
    return {
        canSyncChannel: null != n && E.A.can(D.xB.MANAGE_ROLES, n),
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
            category: s,
            channel: a,
            filteredMembers: r,
            filteredRoles: o,
            guild: c,
            isPrivateGuildChannel: u,
            locked: g,
            permissionUpdates: m,
        } = e,
        [x, A] = i.useState(!I.MJ(D.xB.SEND_MESSAGES, a));
    if (null == a || null == c) return null;
    let f = { title: B.intl.string(B.t.BAZMBn), subtitle: B.intl.string(B.t.XLrZyp) };
    return (
        a.isCategory() && ((f.title = B.intl.string(B.t["/uELTj"])), (f.subtitle = B.intl.string(B.t["8iAg3Q"]))),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(d.Heading, { variant: "heading-lg/semibold", children: f.title }),
                (0, l.jsx)(d.Text, { variant: "text-sm/normal", children: f.subtitle }),
                null != s && t
                    ? g
                        ? (0, l.jsx)(O.A, {
                              canSync: !1,
                              icon: d.fNY,
                              noticeText: B.intl.format(B.t.ETJqLl, { categoryName: s.name }),
                          })
                        : (0, l.jsx)(O.A, {
                              buttonText: B.intl.string(B.t.NVwuHq),
                              canSync: !0,
                              icon: (0, d.kHD)(M.A),
                              noticeText: B.intl.format(B.t.OIhm0M, { categoryName: s.name }),
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
                a.isGuildStageVoice() ? (0, l.jsx)(V, { guild: c, channel: a, permissionUpdates: m }) : null,
                (0, l.jsx)(H, { channel: a, guild: c, isPrivateGuildChannel: u, roles: o, members: r }),
                !1,
                (0, l.jsx)(L.A, {}),
            ],
        })
    );
});
