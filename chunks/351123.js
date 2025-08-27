n.d(t, { Z: () => Y }), n(388685);
var i = n(951288),
    l = n(647438),
    r = n(120356),
    s = n.n(r),
    a = n(442837),
    o = n(28664),
    c = n(755721),
    d = n(481060),
    u = n(668781),
    h = n(493683),
    g = n(787014),
    m = n(741361),
    p = n(911969),
    f = n(385499),
    x = n(134433),
    j = n(600164),
    b = n(156699),
    v = n(693196),
    y = n(434404),
    C = n(200498),
    N = n(146085),
    S = n(192079),
    O = n(277053),
    E = n(271383),
    w = n(485386),
    T = n(430824),
    Z = n(496675),
    R = n(594174),
    I = n(903386),
    _ = n(700785),
    P = n(605436),
    A = n(27544),
    L = n(415236),
    D = n(182905),
    M = n(71080),
    k = n(981631),
    B = n(231338),
    V = n(388032),
    U = n(411851);
function H(e) {
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
function G(e, t) {
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
function W(e) {
    let { channel: t, roles: n, members: l, disabledReason: r, getRemoveTooltipHint: a } = e;
    return (0, i.jsx)(d.aVo, {
        className: U.roleMemberList,
        sections: [n.length, l.length],
        renderRow: function (e) {
            let c,
                g,
                b,
                { section: v, row: y } = e,
                N = !1;
            switch (v) {
                case M.m$.ROLES:
                    var S;
                    (b =
                        (g = n[y]).rowType === M.aC.ROLE &&
                        (null == (S = g.tags) ? void 0 : S.guild_connections) === null
                            ? (0, i.jsx)(x.Z, {
                                  className: U.shield,
                                  color: g.colorString,
                                  size: 20,
                              })
                            : (0, i.jsx)(d.lZ8, {
                                  size: "custom",
                                  className: U.shield,
                                  color: g.colorString,
                                  height: 20,
                              })),
                        (c = (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", {
                                    className: U.rowHeight,
                                    children: b,
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    className: U.rowLabel,
                                    color: g.disabled ? "text-muted" : "text-default",
                                    children: g.name,
                                }),
                            ],
                        })),
                        (N = g.disabled);
                    break;
                case M.m$.MEMBERS:
                    (g = l[y]),
                        (c = (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(d.qEK, {
                                    src: g.avatarURL,
                                    size: d.EFr.SIZE_24,
                                    "aria-hidden": !0,
                                }),
                                (0, i.jsx)(d.Text, {
                                    className: U.rowLabel,
                                    variant: "text-sm/normal",
                                    children: g.name,
                                }),
                                g.bot &&
                                    (0, i.jsx)(f.Z, {
                                        verified: g.verifiedBot,
                                        className: U.rowBotTag,
                                    }),
                                null != g.nickname &&
                                    (0, i.jsx)(d.Text, {
                                        color: "text-muted",
                                        className: U.rowLabelSubText,
                                        variant: "text-sm/normal",
                                        children: g.username,
                                    }),
                            ],
                        })),
                        (N = g.disabled);
                    break;
                default:
                    g = null;
            }
            if (null == g) return null;
            let O = !N && null == r && null != g.id;
            return (0, i.jsxs)(
                j.Z,
                {
                    justify: j.Z.Justify.BETWEEN,
                    align: j.Z.Align.CENTER,
                    className: U.memberRow,
                    children: [
                        (0, i.jsx)(j.Z, {
                            justify: j.Z.Justify.START,
                            align: j.Z.Align.CENTER,
                            className: U.__invalid_memberRowBody,
                            children: c,
                        }),
                        (0, i.jsx)(d.Text, {
                            color: "text-muted",
                            variant: "text-xs/normal",
                            children: P.zB(g.rowType),
                        }),
                        g.rowType !== M.aC.EMPTY_STATE &&
                            (0, i.jsx)(o.u, {
                                asContainer: !0,
                                text: null != r ? r : a(g.rowType, g.disabled),
                                children: (0, i.jsx)(d.P3F, {
                                    onClick: () => {
                                        var e, n, i;
                                        return (
                                            O &&
                                            null != g &&
                                            ((e = g.id),
                                            (n = g.name),
                                            (i = g.rowType),
                                            void u.Z.show({
                                                title: V.intl.string(V.t.GuPYQE),
                                                body: V.intl.format(V.t.xERCnZ, { name: n }),
                                                cancelText: V.intl.string(V.t["ETE/oK"]),
                                                onConfirm: () =>
                                                    (function (e, n) {
                                                        if (t.isGuildStageVoice()) {
                                                            let i = (0, C._L)(
                                                                e,
                                                                n === M.aC.ROLE ? p.BN.ROLE : p.BN.MEMBER,
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
                                    "aria-disabled": !O,
                                    "aria-label": V.intl.string(V.t.N86XcH),
                                    children: (0, i.jsx)(d.k$p, {
                                        size: "md",
                                        color: "currentColor",
                                        className: s()(U.removeIcon, { [U.disabledRemoveIcon]: N || r }),
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
                case M.m$.ROLES:
                    return (0, i.jsx)(X, { title: V.intl.string(V.t.LPJmLy) }, "roles-title");
                case M.m$.MEMBERS:
                    return (0, i.jsx)(X, { title: V.intl.string(V.t["9Oq93t"]) }, "members-title");
            }
        },
        sectionHeight: 49,
    });
}
function F(e) {
    let { guild: t, channel: l, permissionUpdates: r } = e,
        o = (0, a.e7)([w.Z], () => w.Z.getSortedRoles(t.id)),
        c = P.RZ(t, o, l, N.yP, r),
        u = (0, a.e7)([E.ZP], () => P.cR(E.ZP.getMemberIds(t.id), l, t, N.yP, r)),
        h = (0, C.nG)(l.id);
    function g() {
        (0, d.ZDy)(async () => {
            let { default: e } = await n.e("46786").then(n.bind(n, 388131));
            return (t) => (0, i.jsx)(e, G(H({}, t), { channelId: l.id }));
        });
    }
    return (0, i.jsxs)("div", {
        className: s()(U.settingCard, U.active),
        children: [
            (0, i.jsx)(L.Z, {
                label: V.intl.string(V.t.StpcFR),
                description: V.intl.string(V.t.f7VbhI),
                icon: (0, i.jsx)(d.ewx, {
                    size: "custom",
                    color: "currentColor",
                    className: U.cardIcon,
                    height: 20,
                    width: 20,
                }),
                id: "StageModeratorSettingCard",
            }),
            (0, i.jsxs)("div", {
                className: U.cardFolder,
                children: [
                    (0, i.jsxs)(j.Z, {
                        justify: j.Z.Justify.BETWEEN,
                        align: j.Z.Align.CENTER,
                        className: U.folderHeader,
                        children: [
                            (0, i.jsx)(d.vwX, {
                                tag: "h5",
                                className: U.folderTitle,
                                children: V.intl.string(V.t["7BWDRU"]),
                            }),
                            (0, i.jsx)(d.ua7, {
                                text: V.intl.string(V.t.arRuER),
                                shouldShow: !h,
                                children: (e) =>
                                    (0, i.jsx)(
                                        d.zxk,
                                        G(
                                            H(
                                                {
                                                    variant: "primary",
                                                    size: "sm",
                                                    text: V.intl.string(V.t.dMJ3Y2),
                                                },
                                                e,
                                            ),
                                            {
                                                onClick: g,
                                                disabled: !h,
                                            },
                                        ),
                                    ),
                            }),
                        ],
                    }),
                    (0, i.jsx)(W, {
                        channel: l,
                        roles: c,
                        members: u,
                        disabledReason: h ? null : V.intl.string(V.t.arRuER),
                        getRemoveTooltipHint: S.kk,
                    }),
                ],
            }),
        ],
    });
}
function z(e) {
    let { guild: t, channel: l, isPrivateGuildChannel: r, roles: o, members: u } = e,
        h = (0, a.e7)([Z.Z], () => Z.Z.can(B.Pl.ADMINISTRATOR, t)),
        g = _.Uu(B.Pl.VIEW_CHANNEL, t),
        m = _.Uu(B.Pl.ADMINISTRATOR, t);
    async function p() {
        let e = l.accessPermissions,
            s = R.default.getCurrentUser();
        if (!r && null != (await (0, v.T)(t.id, l.id)))
            return void (0, d.ZDy)(async () => {
                let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 878678));
                return (n) =>
                    (0, i.jsx)(
                        e,
                        G(H({}, n), {
                            confirmButtonColor: c.Tt.BRAND,
                            header: V.intl.string(V.t.ZzdgUl),
                            confirmText: V.intl.string(V.t.BddRzc),
                            children: (0, i.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: V.intl.format(V.t.DwY2vL, {
                                    onClick: () => {
                                        y.Z.open(t.id, k.pNK.ONBOARDING), n.onClose();
                                    },
                                }),
                            }),
                        }),
                    );
            });
        P.$e(l, e, r), r || null == s || h || P.Yh(l, e);
    }
    let f = {
        title: V.intl.string(V.t.aUI70t),
        subtitle: V.intl.string(V.t.hfbjIC),
        formLabel: V.intl.string(V.t.P6eCbG),
    };
    return (
        l.isCategory()
            ? ((f.title = V.intl.string(V.t.lEPAZ2)),
              (f.subtitle = V.intl.string(V.t["RQUk6+"])),
              (f.formLabel = V.intl.string(V.t["8VIxJi"])))
            : l.type === k.d4z.GUILD_VOICE && (f.subtitle = V.intl.string(V.t.cLjvKi)),
        (0, i.jsxs)("div", {
            className: s()(U.settingCard, { [U.active]: r }),
            children: [
                (0, i.jsx)(L.Z, {
                    description: f.subtitle,
                    icon: (0, i.jsx)(d.mBM, {
                        size: "custom",
                        color: "currentColor",
                        className: U.cardIcon,
                        height: 20,
                        width: 20,
                    }),
                    id: "PrivateChannelSettingCard",
                    label: f.title,
                    onChange: p,
                    value: r,
                }),
                (0, i.jsxs)("div", {
                    className: U.cardFolder,
                    children: [
                        m &&
                            (0, i.jsx)("div", {
                                className: U.adminWarning,
                                children: (0, i.jsx)(d.Wn, {
                                    messageType: d.QYI.WARNING,
                                    children: V.intl.string(V.t["5f3HIC"]),
                                }),
                            }),
                        !g &&
                            !m &&
                            !r &&
                            (0, i.jsx)("div", {
                                className: U.adminWarning,
                                children: (0, i.jsx)(d.Wn, {
                                    messageType: d.QYI.WARNING,
                                    children: V.intl.string(V.t.ZAk4Q0),
                                }),
                            }),
                        r &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)(j.Z, {
                                        justify: j.Z.Justify.BETWEEN,
                                        align: j.Z.Align.CENTER,
                                        className: U.folderHeader,
                                        children: [
                                            (0, i.jsx)(d.vwX, {
                                                tag: "h5",
                                                className: U.folderTitle,
                                                children: f.formLabel,
                                            }),
                                            (0, i.jsx)(d.zxk, {
                                                variant: "primary",
                                                size: "sm",
                                                text: V.intl.string(V.t.dMJ3Y2),
                                                onClick: function () {
                                                    (0, d.ZDy)(async () => {
                                                        let { default: e } = await Promise.resolve().then(
                                                            n.bind(n, 185413),
                                                        );
                                                        return (t) =>
                                                            (0, i.jsx)(
                                                                e,
                                                                G(H({}, t), {
                                                                    channelId: l.id,
                                                                    inSettings: !0,
                                                                }),
                                                            );
                                                    });
                                                },
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(W, {
                                        channel: l,
                                        roles: o,
                                        members: u,
                                        getRemoveTooltipHint: P.yv,
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        })
    );
}
function X(e) {
    let { title: t } = e;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(d.$i$, { className: U.divider }),
            (0, i.jsx)(d.vwX, {
                className: s()(U.folderTitle, U.sectionTitle),
                tag: "h5",
                children: t,
            }),
        ],
    });
}
let Y = a.ZP.connectStores([O.Z, Z.Z, E.ZP, T.Z, w.Z], () => {
    let e,
        t = O.Z.channel,
        n = O.Z.category,
        i = [],
        l = [],
        r = {},
        s = !1;
    if (null != t) {
        e = T.Z.getGuild(t.getGuildId());
        let n = E.ZP.getMemberIds(null == e ? void 0 : e.id);
        if (null != e) {
            let a = w.Z.getSortedRoles(e.id);
            (r = O.Z.editedPermissionIds.reduce((e, t) => {
                let n = O.Z.getPermissionOverwrite(t);
                return null != n && (e[t] = n), e;
            }, {})),
                (i = P.kA(e, a, t, t.accessPermissions, r)),
                (l = P.cR(n, t, e, t.accessPermissions, r)),
                (s = P.Yk(t, r));
        }
    }
    return {
        canSyncChannel: null != n && Z.Z.can(B.Pl.MANAGE_ROLES, n),
        category: n,
        channel: t,
        filteredMembers: l,
        filteredRoles: i,
        guild: e,
        isPrivateGuildChannel: s,
        locked: O.Z.locked,
        permissionUpdates: r,
    };
})(function (e) {
    let {
            canSyncChannel: t,
            category: r,
            channel: s,
            filteredMembers: a,
            filteredRoles: o,
            guild: c,
            isPrivateGuildChannel: u,
            locked: h,
            permissionUpdates: m,
        } = e,
        [p, f] = l.useState(!_.Uu(B.Pl.SEND_MESSAGES, s));
    if (null == s || null == c) return null;
    let x = {
        title: V.intl.string(V.t.BAZMBg),
        subtitle: V.intl.string(V.t.XLrZys),
    };
    return (
        s.isCategory() && ((x.title = V.intl.string(V.t["/uELTk"])), (x.subtitle = V.intl.string(V.t["8iAg3d"]))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.vwX, {
                    tag: "h1",
                    children: x.title,
                }),
                (0, i.jsx)(d.R94, { children: x.subtitle }),
                null != r && t
                    ? h
                        ? (0, i.jsx)(D.Z, {
                              canSync: !1,
                              icon: d.DuK,
                              noticeText: V.intl.format(V.t.ETJqLi, { categoryName: r.name }),
                          })
                        : (0, i.jsx)(D.Z, {
                              buttonText: V.intl.string(V.t.NVwuHh),
                              canSync: !0,
                              icon: (0, d.GSL)(I.Z),
                              noticeText: V.intl.format(V.t.OIhm0N, { categoryName: r.name }),
                              onClick: function () {
                                  null != r &&
                                      (0, d.ZDy)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 170509));
                                          return (t) =>
                                              (0, i.jsx)(
                                                  e,
                                                  G(H({}, t), {
                                                      channel: s,
                                                      category: r,
                                                      onConfirm: async () => {
                                                          let { guild_id: e } = r,
                                                              t = H({}, r.permissionOverwrites);
                                                          null != e && null == t[e] && (t[e] = _.we(e)),
                                                              (await (0, b.u)(s, t[e].deny, t[e].allow)) &&
                                                                  (0, g.wk)(s.id, {
                                                                      permissionOverwrites: Object.values(t),
                                                                  });
                                                      },
                                                  }),
                                              );
                                      });
                              },
                          })
                    : null,
                s.isGuildStageVoice()
                    ? (0, i.jsx)(F, {
                          guild: c,
                          channel: s,
                          permissionUpdates: m,
                      })
                    : null,
                (0, i.jsx)(z, {
                    channel: s,
                    guild: c,
                    isPrivateGuildChannel: u,
                    roles: o,
                    members: a,
                }),
                !1,
                (0, i.jsx)(A.Z, {}),
            ],
        })
    );
});
