"use strict";
n.d(t, { A: () => ei });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    r = n(990078),
    o = n(179866),
    d = n(834730),
    c = n(97808),
    u = n(778712),
    h = n(939249),
    g = n(285796),
    m = n(475825),
    x = n(192308),
    p = n(451394),
    A = n(821609),
    f = n(194261),
    b = n(512950),
    _ = n(534514),
    C = n(404778),
    j = n(663417),
    v = n(565787),
    N = n(157559),
    S = n(308528),
    E = n(435183),
    y = n(702805),
    T = n(155718),
    R = n(709066),
    I = n(63104),
    M = n(60868),
    L = n(894328),
    w = n(997509),
    O = n(776781),
    k = n(233993),
    D = n(110618),
    G = n(176360),
    B = n(696451),
    U = n(317525),
    P = n(71393),
    V = n(576705),
    H = n(287809),
    F = n(396465),
    z = n(488926),
    W = n(495273),
    Z = n(270486),
    Y = n(80686),
    J = n(908494),
    X = n(737045),
    $ = n(652215),
    Q = n(818348),
    q = n(985018),
    K = n(497903);
function ee(e) {
    let { channel: t, roles: n, members: i, disabledReason: a, getRemoveTooltipHint: x } = e;
    return (0, l.jsx)(m.OZ, {
        className: K.xz,
        sections: [n.length, i.length],
        renderRow: function (e) {
            let m,
                p,
                A,
                { section: f, row: b } = e,
                _ = !1;
            switch (f) {
                case X.oO.ROLES:
                    (A =
                        (p = n[b]).rowType === X.T6.ROLE && p.tags?.guild_connections === null
                            ? (0, l.jsx)(I.A, { className: K.a, color: p.colorString, size: 20 })
                            : (0, l.jsx)(o.i, { size: "custom", className: K.a, color: p.colorString, height: 20 })),
                        (m = (0, l.jsxs)(l.Fragment, {
                            children: [
                                A,
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    color: p.disabled ? "text-muted" : "text-default",
                                    children: p.name,
                                }),
                            ],
                        })),
                        (_ = p.disabled);
                    break;
                case X.oO.MEMBERS:
                    (p = i[b]),
                        (m = (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(c.eu, { src: p.avatarURL, size: u._3.SIZE_20, "aria-hidden": !0 }),
                                (0, l.jsx)(d.E, { variant: "text-sm/normal", children: p.name }),
                                p.bot && (0, l.jsx)(R.A, { verified: p.verifiedBot }),
                                (0, l.jsx)(d.E, {
                                    color: "text-muted",
                                    className: K.Gq,
                                    variant: "text-xs/normal",
                                    children: p.username,
                                }),
                            ],
                        })),
                        (_ = p.disabled);
                    break;
                default:
                    p = null;
            }
            if (null == p) return null;
            let C = !_ && null == a && null != p.id;
            return (0, l.jsxs)(
                "div",
                {
                    className: K.TL,
                    role: "listitem",
                    children: [
                        (0, l.jsx)("div", { className: K.z7, children: m }),
                        (0, l.jsxs)("div", {
                            className: K.z7,
                            children: [
                                (0, l.jsx)(d.E, {
                                    color: "text-muted",
                                    variant: "text-xs/normal",
                                    children: W.vV(p.rowType),
                                }),
                                p.rowType !== X.T6.EMPTY_STATE &&
                                    (0, l.jsx)(r.m, {
                                        asContainer: !0,
                                        text: a ?? x(p.rowType, p.disabled),
                                        children: (0, l.jsx)(h.D, {
                                            onClick: () => {
                                                var e, n, l;
                                                return (
                                                    C &&
                                                    null != p &&
                                                    ((e = p.id),
                                                    (n = p.name),
                                                    (l = p.rowType),
                                                    void N.A.show({
                                                        title: q.intl.string(q.t.GuPYQB),
                                                        body: q.intl.format(q.t.xERCnZ, { name: n }),
                                                        cancelText: q.intl.string(q.t["ETE/oC"]),
                                                        onConfirm: () =>
                                                            (function (e, n) {
                                                                if (t.isGuildStageVoice()) {
                                                                    let l = (0, O.$b)(
                                                                        e,
                                                                        n === X.T6.ROLE ? T.r2.ROLE : T.r2.MEMBER,
                                                                        t,
                                                                    );
                                                                    (0, O.pF)(l)
                                                                        ? S.A.clearPermissionOverwrite(t.id, l.id)
                                                                        : (0, y.R$)(t.id, [l]);
                                                                } else S.A.clearPermissionOverwrite(t.id, e);
                                                            })(e, l),
                                                    }))
                                                );
                                            },
                                            className: K.HI,
                                            "aria-disabled": !C,
                                            "aria-label": q.intl.string(q.t.N86XcP),
                                            children: (0, l.jsx)(g.a, {
                                                size: "sm",
                                                color: "currentColor",
                                                className: s()(K.Yz, { [K._2]: _ || a }),
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
                case X.oO.ROLES:
                    return (0, l.jsx)(el, { title: q.intl.string(q.t["LPJmL/"]) }, "roles-title");
                case X.oO.MEMBERS:
                    return (0, l.jsx)(el, { title: q.intl.string(q.t["9Oq93m"]) }, "members-title");
            }
        },
        sectionHeight: 49,
        role: "list",
    });
}
function et(e) {
    let { guild: t, channel: i, permissionUpdates: o } = e,
        c = (0, a.bG)([U.A], () => U.A.getSortedRoles(t.id)),
        u = W.C$(t, c, i, k.QY, o),
        h = (0, a.bG)([B.Ay], () => W.Wi(B.Ay.getMemberIds(t.id), i, t, k.QY, o)),
        g = (0, O.qd)(i.id);
    return (0, l.jsxs)("div", {
        className: s()(K.j1, K.vu),
        children: [
            (0, l.jsx)(Y.A, {
                label: q.intl.string(q.t.StpcFU),
                description: q.intl.string(q.t.f7VbhF),
                icon: (0, l.jsx)(p.q, {
                    size: "custom",
                    color: "currentColor",
                    className: K.Ie,
                    height: 20,
                    width: 20,
                }),
                id: "StageModeratorSettingCard",
            }),
            (0, l.jsxs)("div", {
                className: K.X4,
                children: [
                    (0, l.jsxs)("div", {
                        className: K.MJ,
                        children: [
                            (0, l.jsx)(d.E, { variant: "text-md/semibold", children: q.intl.string(q.t["7BWDRb"]) }),
                            (0, l.jsx)(r.m, {
                                text: q.intl.string(q.t.arRuES),
                                shouldShow: !g,
                                children: (0, l.jsx)(A.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: q.intl.string(q.t.dMJ3Y6),
                                    onClick: function () {
                                        (0, x.openModalLazy)(async () => {
                                            let { default: e } = await n.e("58608").then(n.bind(n, 841811));
                                            return (t) => (0, l.jsx)(e, { ...t, channelId: i.id });
                                        });
                                    },
                                    disabled: !g,
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(ee, {
                        channel: i,
                        roles: u,
                        members: h,
                        disabledReason: g ? null : q.intl.string(q.t.arRuES),
                        getRemoveTooltipHint: D.Mt,
                    }),
                ],
            }),
        ],
    });
}
function en(e) {
    let { guild: t, channel: i, isPrivateGuildChannel: r, roles: o, members: d } = e,
        c = (0, a.bG)([V.A], () => V.A.can(Q.xB.ADMINISTRATOR, t)),
        u = z.MJ(Q.xB.VIEW_CHANNEL, t),
        h = z.MJ(Q.xB.ADMINISTRATOR, t);
    async function g() {
        let e = i.accessPermissions,
            s = H.default.getCurrentUser();
        r || null == (await (0, L.D)(t.id, i.id))
            ? (W.uB(i, e, r), r || null == s || c || W.tP(i, e))
            : (0, x.openModalLazy)(async () => {
                  let { Modal: e } = await n.e("4823").then(n.bind(n, 158954));
                  return (n) =>
                      (0, l.jsx)(e, {
                          ...n,
                          title: q.intl.string(q.t.ZzdgUm),
                          subtitle: q.intl.format(q.t.DwY2vN, {
                              onClick: () => {
                                  w.A.open(t.id, $.BEX.ONBOARDING), n.onClose();
                              },
                          }),
                          actions: [{ text: q.intl.string(q.t.BddRzS), onClick: n.onClose }],
                      });
              });
    }
    let m = {
        title: q.intl.string(q.t.aUI70g),
        subtitle: q.intl.string(q.t.hfbjIH),
        formLabel: q.intl.string(q.t.P6eCbP),
    };
    return (
        i.isCategory()
            ? ((m.title = q.intl.string(q.t.lEPAZ5)),
              (m.subtitle = q.intl.string(q.t.RQUk61)),
              (m.formLabel = q.intl.string(q.t["8VIxJu"])))
            : i.type === $.rbe.GUILD_VOICE && (m.subtitle = q.intl.string(q.t.cLjvKg)),
        (0, l.jsxs)("div", {
            className: s()(K.j1, { [K.vu]: r }),
            children: [
                (0, l.jsx)(Y.A, {
                    description: m.subtitle,
                    icon: (0, l.jsx)(f.X, {
                        size: "custom",
                        color: "currentColor",
                        className: K.Ie,
                        height: 20,
                        width: 20,
                    }),
                    id: "PrivateChannelSettingCard",
                    label: m.title,
                    onChange: g,
                    value: r,
                }),
                (0, l.jsxs)("div", {
                    className: K.X4,
                    children: [
                        h &&
                            (0, l.jsx)("div", {
                                className: K.Ux,
                                children: (0, l.jsx)(b.p, {
                                    messageType: b.Y.WARNING,
                                    children: q.intl.string(q.t["5f3HIC"]),
                                }),
                            }),
                        !u &&
                            !h &&
                            !r &&
                            (0, l.jsx)("div", {
                                className: K.Ux,
                                children: (0, l.jsx)(b.p, {
                                    messageType: b.Y.WARNING,
                                    children: q.intl.string(q.t.ZAk4Q9),
                                }),
                            }),
                        r &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: K.MJ,
                                        children: [
                                            (0, l.jsx)(_.D, {
                                                variant: "heading-sm/semibold",
                                                className: K.DH,
                                                children: m.formLabel,
                                            }),
                                            (0, l.jsx)(A.$, {
                                                variant: "primary",
                                                size: "sm",
                                                text: q.intl.string(q.t.dMJ3Y6),
                                                onClick: function () {
                                                    (0, x.openModalLazy)(async () => {
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
                                    (0, l.jsx)(ee, { channel: i, roles: o, members: d, getRemoveTooltipHint: W.ro }),
                                ],
                            }),
                    ],
                }),
            ],
        })
    );
}
function el(e) {
    let { title: t } = e;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(C.c, { className: K.yF }),
            (0, l.jsx)(_.D, { variant: "heading-sm/semibold", className: s()(K.DH, K.Gf), children: t }),
        ],
    });
}
let ei = a.Ay.connectStores([G.A, V.A, B.Ay, P.A, U.A], () => {
    let e,
        t = G.A.channel,
        n = G.A.category,
        l = [],
        i = [],
        s = {},
        a = !1;
    if (null != t) {
        e = P.A.getGuild(t.getGuildId());
        let n = B.Ay.getMemberIds(e?.id);
        if (null != e) {
            let r = U.A.getSortedRoles(e.id);
            (s = G.A.editedPermissionIds.reduce((e, t) => {
                let n = G.A.getPermissionOverwrite(t);
                return null != n && (e[t] = n), e;
            }, {})),
                (l = W.uX(e, r, t, t.accessPermissions, s)),
                (i = W.Wi(n, t, e, t.accessPermissions, s)),
                (a = W.Ae(t, s));
        }
    }
    return {
        canSyncChannel: null != n && V.A.can(Q.xB.MANAGE_ROLES, n),
        category: n,
        channel: t,
        filteredMembers: i,
        filteredRoles: l,
        guild: e,
        isPrivateGuildChannel: a,
        locked: G.A.locked,
        permissionUpdates: s,
    };
})(function (e) {
    let {
        canSyncChannel: t,
        category: i,
        channel: s,
        filteredMembers: a,
        filteredRoles: r,
        guild: o,
        isPrivateGuildChannel: c,
        locked: u,
        permissionUpdates: h,
    } = e;
    if (null == s || null == o) return null;
    let g = { title: q.intl.string(q.t.BAZMBn), subtitle: q.intl.string(q.t.XLrZyp) };
    return (
        s.isCategory() && ((g.title = q.intl.string(q.t["/uELTj"])), (g.subtitle = q.intl.string(q.t["8iAg3Q"]))),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(_.D, { variant: "heading-lg/semibold", children: g.title }),
                (0, l.jsx)(d.E, { variant: "text-sm/normal", children: g.subtitle }),
                null != i && t
                    ? u
                        ? (0, l.jsx)(J.A, {
                              canSync: !1,
                              icon: j.f,
                              noticeText: q.intl.format(q.t.ETJqLl, { categoryName: i.name }),
                          })
                        : (0, l.jsx)(J.A, {
                              buttonText: q.intl.string(q.t.NVwuHq),
                              canSync: !0,
                              icon: (0, v.k)(F.A),
                              noticeText: q.intl.format(q.t.OIhm0M, { categoryName: i.name }),
                              onClick: function () {
                                  null != i &&
                                      (0, x.openModalLazy)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 544169));
                                          return (t) =>
                                              (0, l.jsx)(e, {
                                                  ...t,
                                                  channel: s,
                                                  category: i,
                                                  onConfirm: async () => {
                                                      let { guild_id: e } = i,
                                                          t = { ...i.permissionOverwrites };
                                                      null != e && null == t[e] && (t[e] = z.xT(e)),
                                                          (await (0, M.n)(s, t[e].deny, t[e].allow)) &&
                                                              (0, E.RT)(s.id, {
                                                                  permissionOverwrites: Object.values(t),
                                                              });
                                                  },
                                              });
                                      });
                              },
                          })
                    : null,
                s.isGuildStageVoice() ? (0, l.jsx)(et, { guild: o, channel: s, permissionUpdates: h }) : null,
                (0, l.jsx)(en, { channel: s, guild: o, isPrivateGuildChannel: c, roles: r, members: a }),
                (0, l.jsx)(Z.A, {}),
            ],
        })
    );
});
