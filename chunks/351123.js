n.d(t, { Z: () => q }), n(388685);
var i = n(54381),
    l = n(473749),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(28664),
    c = n(755721),
    d = n(481060),
    u = n(668781),
    h = n(493683),
    g = n(787014),
    m = n(741361),
    f = n(911969),
    p = n(385499),
    b = n(134433),
    x = n(600164),
    j = n(156699),
    v = n(693196),
    y = n(434404),
    C = n(200498),
    O = n(146085),
    Z = n(192079),
    S = n(277053),
    N = n(271383),
    E = n(485386),
    w = n(430824),
    T = n(496675),
    P = n(594174),
    I = n(903386),
    R = n(700785),
    L = n(605436),
    M = n(374347),
    A = n(415236),
    _ = n(182905),
    D = n(71080),
    k = n(981631),
    B = n(231338),
    U = n(388032),
    G = n(267263);
function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function F(e) {
    let { channel: t, roles: n, members: l, disabledReason: r, getRemoveTooltipHint: s } = e;
    return (0, i.jsx)(d.aVo, {
        className: G.roleMemberList,
        sections: [n.length, l.length],
        renderRow: function (e) {
            let c,
                g,
                j,
                { section: v, row: y } = e,
                O = !1;
            switch (v) {
                case D.m$.ROLES:
                    var Z;
                    (j =
                        (g = n[y]).rowType === D.aC.ROLE &&
                        (null == (Z = g.tags) ? void 0 : Z.guild_connections) === null
                            ? (0, i.jsx)(b.Z, {
                                  className: G.shield,
                                  color: g.colorString,
                                  size: 20,
                              })
                            : (0, i.jsx)(d.lZ8, {
                                  size: "custom",
                                  className: G.shield,
                                  color: g.colorString,
                                  height: 20,
                              })),
                        (c = (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", {
                                    className: G.rowHeight,
                                    children: j,
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    className: G.rowLabel,
                                    color: g.disabled ? "text-muted" : "text-default",
                                    children: g.name,
                                }),
                            ],
                        })),
                        (O = g.disabled);
                    break;
                case D.m$.MEMBERS:
                    (g = l[y]),
                        (c = (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(d.qEK, {
                                    src: g.avatarURL,
                                    size: d.EFr.SIZE_24,
                                    "aria-hidden": !0,
                                }),
                                (0, i.jsx)(d.Text, {
                                    className: G.rowLabel,
                                    variant: "text-sm/normal",
                                    children: g.name,
                                }),
                                g.bot &&
                                    (0, i.jsx)(p.Z, {
                                        verified: g.verifiedBot,
                                        className: G.rowBotTag,
                                    }),
                                null != g.nickname &&
                                    (0, i.jsx)(d.Text, {
                                        color: "text-muted",
                                        className: G.rowLabelSubText,
                                        variant: "text-sm/normal",
                                        children: g.username,
                                    }),
                            ],
                        })),
                        (O = g.disabled);
                    break;
                default:
                    g = null;
            }
            if (null == g) return null;
            let S = !O && null == r && null != g.id;
            return (0, i.jsxs)(
                x.Z,
                {
                    justify: x.Z.Justify.BETWEEN,
                    align: x.Z.Align.CENTER,
                    className: G.memberRow,
                    children: [
                        (0, i.jsx)(x.Z, {
                            justify: x.Z.Justify.START,
                            align: x.Z.Align.CENTER,
                            className: G.__invalid_memberRowBody,
                            children: c,
                        }),
                        (0, i.jsx)(d.Text, {
                            color: "text-muted",
                            variant: "text-xs/normal",
                            children: L.zB(g.rowType),
                        }),
                        g.rowType !== D.aC.EMPTY_STATE &&
                            (0, i.jsx)(o.u, {
                                asContainer: !0,
                                text: null != r ? r : s(g.rowType, g.disabled),
                                children: (0, i.jsx)(d.P3F, {
                                    onClick: () => {
                                        var e, n, i;
                                        return (
                                            S &&
                                            null != g &&
                                            ((e = g.id),
                                            (n = g.name),
                                            (i = g.rowType),
                                            void u.Z.show({
                                                title: U.intl.string(U.t.GuPYQB),
                                                body: U.intl.format(U.t.xERCnZ, { name: n }),
                                                cancelText: U.intl.string(U.t["ETE/oC"]),
                                                onConfirm: () =>
                                                    (function (e, n) {
                                                        if (t.isGuildStageVoice()) {
                                                            let i = (0, C._L)(
                                                                e,
                                                                n === D.aC.ROLE ? f.BN.ROLE : f.BN.MEMBER,
                                                                t,
                                                            );
                                                            (0, C.Os)(i)
                                                                ? h.Z.clearPermissionOverwrite(t.id, i.id)
                                                                : (0, m.hw)(t.id, [i]);
                                                        } else h.Z.clearPermissionOverwrite(t.id, e);
                                                    })(e, i),
                                            }))
                                        );
                                    },
                                    "aria-disabled": !S,
                                    "aria-label": U.intl.string(U.t.N86XcP),
                                    children: (0, i.jsx)(d.k$p, {
                                        size: "md",
                                        color: "currentColor",
                                        className: a()(G.removeIcon, { [G.disabledRemoveIcon]: O || r }),
                                    }),
                                }),
                            }),
                    ],
                },
                g.id,
            );
        },
        rowHeight: 40,
        renderSection: function (e) {
            let { section: t } = e;
            switch (t) {
                case D.m$.ROLES:
                    return (0, i.jsx)(Y, { title: U.intl.string(U.t["LPJmL/"]) }, "roles-title");
                case D.m$.MEMBERS:
                    return (0, i.jsx)(Y, { title: U.intl.string(U.t["9Oq93m"]) }, "members-title");
            }
        },
        sectionHeight: 49,
    });
}
function W(e) {
    let { guild: t, channel: l, permissionUpdates: r } = e,
        c = (0, s.e7)([E.Z], () => E.Z.getSortedRoles(t.id)),
        u = L.RZ(t, c, l, O.yP, r),
        h = (0, s.e7)([N.ZP], () => L.cR(N.ZP.getMemberIds(t.id), l, t, O.yP, r)),
        g = (0, C.nG)(l.id);
    return (0, i.jsxs)("div", {
        className: a()(G.settingCard, G.active),
        children: [
            (0, i.jsx)(A.Z, {
                label: U.intl.string(U.t.StpcFU),
                description: U.intl.string(U.t.f7VbhF),
                icon: (0, i.jsx)(d.ewx, {
                    size: "custom",
                    color: "currentColor",
                    className: G.cardIcon,
                    height: 20,
                    width: 20,
                }),
                id: "StageModeratorSettingCard",
            }),
            (0, i.jsxs)("div", {
                className: G.cardFolder,
                children: [
                    (0, i.jsxs)(x.Z, {
                        justify: x.Z.Justify.BETWEEN,
                        align: x.Z.Align.CENTER,
                        className: G.folderHeader,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: "text-md/semibold",
                                children: U.intl.string(U.t["7BWDRb"]),
                            }),
                            (0, i.jsx)(o.u, {
                                text: U.intl.string(U.t.arRuES),
                                shouldShow: !g,
                                children: (0, i.jsx)(d.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: U.intl.string(U.t.dMJ3Y6),
                                    onClick: function () {
                                        (0, d.ZDy)(async () => {
                                            let { default: e } = await n.e("46786").then(n.bind(n, 388131));
                                            return (t) => (0, i.jsx)(e, H(V({}, t), { channelId: l.id }));
                                        });
                                    },
                                    disabled: !g,
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(F, {
                        channel: l,
                        roles: u,
                        members: h,
                        disabledReason: g ? null : U.intl.string(U.t.arRuES),
                        getRemoveTooltipHint: Z.kk,
                    }),
                ],
            }),
        ],
    });
}
function z(e) {
    let { guild: t, channel: l, isPrivateGuildChannel: r, roles: o, members: u } = e,
        h = (0, s.e7)([T.Z], () => T.Z.can(B.Pl.ADMINISTRATOR, t)),
        g = R.Uu(B.Pl.VIEW_CHANNEL, t),
        m = R.Uu(B.Pl.ADMINISTRATOR, t);
    async function f() {
        let e = l.accessPermissions,
            a = P.default.getCurrentUser();
        if (!r && null != (await (0, v.T)(t.id, l.id)))
            return void (0, d.ZDy)(async () => {
                let { VoidConfirmModal: e } = await Promise.resolve().then(n.bind(n, 288022));
                return (n) =>
                    (0, i.jsx)(
                        e,
                        H(V({}, n), {
                            confirmButtonColor: c.Tt.BRAND,
                            header: U.intl.string(U.t.ZzdgUm),
                            confirmText: U.intl.string(U.t.BddRzS),
                            children: (0, i.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: U.intl.format(U.t.DwY2vN, {
                                    onClick: () => {
                                        y.Z.open(t.id, k.pNK.ONBOARDING), n.onClose();
                                    },
                                }),
                            }),
                        }),
                    );
            });
        L.$e(l, e, r), r || null == a || h || L.Yh(l, e);
    }
    let p = {
        title: U.intl.string(U.t.aUI70g),
        subtitle: U.intl.string(U.t.hfbjIH),
        formLabel: U.intl.string(U.t.P6eCbP),
    };
    return (
        l.isCategory()
            ? ((p.title = U.intl.string(U.t.lEPAZ5)),
              (p.subtitle = U.intl.string(U.t.RQUk61)),
              (p.formLabel = U.intl.string(U.t["8VIxJu"])))
            : l.type === k.d4z.GUILD_VOICE && (p.subtitle = U.intl.string(U.t.cLjvKg)),
        (0, i.jsxs)("div", {
            className: a()(G.settingCard, { [G.active]: r }),
            children: [
                (0, i.jsx)(A.Z, {
                    description: p.subtitle,
                    icon: (0, i.jsx)(d.mBM, {
                        size: "custom",
                        color: "currentColor",
                        className: G.cardIcon,
                        height: 20,
                        width: 20,
                    }),
                    id: "PrivateChannelSettingCard",
                    label: p.title,
                    onChange: f,
                    value: r,
                }),
                (0, i.jsxs)("div", {
                    className: G.cardFolder,
                    children: [
                        m &&
                            (0, i.jsx)("div", {
                                className: G.adminWarning,
                                children: (0, i.jsx)(d.Wn, {
                                    messageType: d.QYI.WARNING,
                                    children: U.intl.string(U.t["5f3HIC"]),
                                }),
                            }),
                        !g &&
                            !m &&
                            !r &&
                            (0, i.jsx)("div", {
                                className: G.adminWarning,
                                children: (0, i.jsx)(d.Wn, {
                                    messageType: d.QYI.WARNING,
                                    children: U.intl.string(U.t.ZAk4Q9),
                                }),
                            }),
                        r &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)(x.Z, {
                                        justify: x.Z.Justify.BETWEEN,
                                        align: x.Z.Align.CENTER,
                                        className: G.folderHeader,
                                        children: [
                                            (0, i.jsx)(d.Heading, {
                                                variant: "heading-sm/semibold",
                                                className: G.folderTitle,
                                                children: p.formLabel,
                                            }),
                                            (0, i.jsx)(d.Button, {
                                                variant: "primary",
                                                size: "sm",
                                                text: U.intl.string(U.t.dMJ3Y6),
                                                onClick: function () {
                                                    (0, d.ZDy)(async () => {
                                                        let { default: e } = await Promise.resolve().then(
                                                            n.bind(n, 185413),
                                                        );
                                                        return (t) =>
                                                            (0, i.jsx)(
                                                                e,
                                                                H(V({}, t), {
                                                                    channelId: l.id,
                                                                    inSettings: !0,
                                                                }),
                                                            );
                                                    });
                                                },
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(F, {
                                        channel: l,
                                        roles: o,
                                        members: u,
                                        getRemoveTooltipHint: L.yv,
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        })
    );
}
function Y(e) {
    let { title: t } = e;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(d.izJ, { className: G.divider }),
            (0, i.jsx)(d.Heading, {
                variant: "heading-sm/semibold",
                className: a()(G.folderTitle, G.sectionTitle),
                children: t,
            }),
        ],
    });
}
let q = s.ZP.connectStores([S.Z, T.Z, N.ZP, w.Z, E.Z], () => {
    let e,
        t = S.Z.channel,
        n = S.Z.category,
        i = [],
        l = [],
        r = {},
        a = !1;
    if (null != t) {
        e = w.Z.getGuild(t.getGuildId());
        let n = N.ZP.getMemberIds(null == e ? void 0 : e.id);
        if (null != e) {
            let s = E.Z.getSortedRoles(e.id);
            (r = S.Z.editedPermissionIds.reduce((e, t) => {
                let n = S.Z.getPermissionOverwrite(t);
                return null != n && (e[t] = n), e;
            }, {})),
                (i = L.kA(e, s, t, t.accessPermissions, r)),
                (l = L.cR(n, t, e, t.accessPermissions, r)),
                (a = L.Yk(t, r));
        }
    }
    return {
        canSyncChannel: null != n && T.Z.can(B.Pl.MANAGE_ROLES, n),
        category: n,
        channel: t,
        filteredMembers: l,
        filteredRoles: i,
        guild: e,
        isPrivateGuildChannel: a,
        locked: S.Z.locked,
        permissionUpdates: r,
    };
})(function (e) {
    let {
            canSyncChannel: t,
            category: r,
            channel: a,
            filteredMembers: s,
            filteredRoles: o,
            guild: c,
            isPrivateGuildChannel: u,
            locked: h,
            permissionUpdates: m,
        } = e,
        [f, p] = l.useState(!R.Uu(B.Pl.SEND_MESSAGES, a));
    if (null == a || null == c) return null;
    let b = {
        title: U.intl.string(U.t.BAZMBn),
        subtitle: U.intl.string(U.t.XLrZyp),
    };
    return (
        a.isCategory() && ((b.title = U.intl.string(U.t["/uELTj"])), (b.subtitle = U.intl.string(U.t["8iAg3Q"]))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.Heading, {
                    variant: "heading-lg/semibold",
                    children: b.title,
                }),
                (0, i.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: b.subtitle,
                }),
                null != r && t
                    ? h
                        ? (0, i.jsx)(_.Z, {
                              canSync: !1,
                              icon: d.DuK,
                              noticeText: U.intl.format(U.t.ETJqLl, { categoryName: r.name }),
                          })
                        : (0, i.jsx)(_.Z, {
                              buttonText: U.intl.string(U.t.NVwuHq),
                              canSync: !0,
                              icon: (0, d.GSL)(I.Z),
                              noticeText: U.intl.format(U.t.OIhm0M, { categoryName: r.name }),
                              onClick: function () {
                                  null != r &&
                                      (0, d.ZDy)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 901492));
                                          return (t) =>
                                              (0, i.jsx)(
                                                  e,
                                                  H(V({}, t), {
                                                      channel: a,
                                                      category: r,
                                                      onConfirm: async () => {
                                                          let { guild_id: e } = r,
                                                              t = V({}, r.permissionOverwrites);
                                                          null != e && null == t[e] && (t[e] = R.we(e)),
                                                              (await (0, j.u)(a, t[e].deny, t[e].allow)) &&
                                                                  (0, g.wk)(a.id, {
                                                                      permissionOverwrites: Object.values(t),
                                                                  });
                                                      },
                                                  }),
                                              );
                                      });
                              },
                          })
                    : null,
                a.isGuildStageVoice()
                    ? (0, i.jsx)(W, {
                          guild: c,
                          channel: a,
                          permissionUpdates: m,
                      })
                    : null,
                (0, i.jsx)(z, {
                    channel: a,
                    guild: c,
                    isPrivateGuildChannel: u,
                    roles: o,
                    members: s,
                }),
                !1,
                (0, i.jsx)(M.Z, {}),
            ],
        })
    );
});
