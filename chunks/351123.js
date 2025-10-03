n.d(t, { Z: () => q }), n(388685);
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
    p = n(741361),
    m = n(911969),
    f = n(385499),
    b = n(134433),
    x = n(600164),
    j = n(156699),
    v = n(693196),
    y = n(434404),
    C = n(200498),
    N = n(146085),
    S = n(192079),
    E = n(277053),
    O = n(271383),
    Z = n(485386),
    w = n(430824),
    T = n(496675),
    R = n(594174),
    _ = n(903386),
    I = n(700785),
    P = n(605436),
    A = n(374347),
    L = n(415236),
    M = n(182905),
    D = n(71080),
    k = n(981631),
    B = n(231338),
    H = n(388032),
    V = n(411851);
function U(e) {
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
        className: V.roleMemberList,
        sections: [n.length, l.length],
        renderRow: function (e) {
            let c,
                g,
                j,
                { section: v, row: y } = e,
                N = !1;
            switch (v) {
                case D.m$.ROLES:
                    var S;
                    (j =
                        (g = n[y]).rowType === D.aC.ROLE &&
                        (null == (S = g.tags) ? void 0 : S.guild_connections) === null
                            ? (0, i.jsx)(b.Z, {
                                  className: V.shield,
                                  color: g.colorString,
                                  size: 20,
                              })
                            : (0, i.jsx)(d.lZ8, {
                                  size: "custom",
                                  className: V.shield,
                                  color: g.colorString,
                                  height: 20,
                              })),
                        (c = (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", {
                                    className: V.rowHeight,
                                    children: j,
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    className: V.rowLabel,
                                    color: g.disabled ? "text-muted" : "text-default",
                                    children: g.name,
                                }),
                            ],
                        })),
                        (N = g.disabled);
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
                                    className: V.rowLabel,
                                    variant: "text-sm/normal",
                                    children: g.name,
                                }),
                                g.bot &&
                                    (0, i.jsx)(f.Z, {
                                        verified: g.verifiedBot,
                                        className: V.rowBotTag,
                                    }),
                                null != g.nickname &&
                                    (0, i.jsx)(d.Text, {
                                        color: "text-muted",
                                        className: V.rowLabelSubText,
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
            let E = !N && null == r && null != g.id;
            return (0, i.jsxs)(
                x.Z,
                {
                    justify: x.Z.Justify.BETWEEN,
                    align: x.Z.Align.CENTER,
                    className: V.memberRow,
                    children: [
                        (0, i.jsx)(x.Z, {
                            justify: x.Z.Justify.START,
                            align: x.Z.Align.CENTER,
                            className: V.__invalid_memberRowBody,
                            children: c,
                        }),
                        (0, i.jsx)(d.Text, {
                            color: "text-muted",
                            variant: "text-xs/normal",
                            children: P.zB(g.rowType),
                        }),
                        g.rowType !== D.aC.EMPTY_STATE &&
                            (0, i.jsx)(o.u, {
                                asContainer: !0,
                                text: null != r ? r : a(g.rowType, g.disabled),
                                children: (0, i.jsx)(d.P3F, {
                                    onClick: () => {
                                        var e, n, i;
                                        return (
                                            E &&
                                            null != g &&
                                            ((e = g.id),
                                            (n = g.name),
                                            (i = g.rowType),
                                            void u.Z.show({
                                                title: H.intl.string(H.t.GuPYQE),
                                                body: H.intl.format(H.t.xERCnZ, { name: n }),
                                                cancelText: H.intl.string(H.t["ETE/oK"]),
                                                onConfirm: () =>
                                                    (function (e, n) {
                                                        if (t.isGuildStageVoice()) {
                                                            let i = (0, C._L)(
                                                                e,
                                                                n === D.aC.ROLE ? m.BN.ROLE : m.BN.MEMBER,
                                                                t,
                                                            );
                                                            (0, C.Os)(i)
                                                                ? h.Z.clearPermissionOverwrite(t.id, i.id)
                                                                : (0, p.hw)(t.id, [i]);
                                                        } else h.Z.clearPermissionOverwrite(t.id, e);
                                                    })(e, i),
                                            }))
                                        );
                                    },
                                    "aria-disabled": !E,
                                    "aria-label": H.intl.string(H.t.N86XcH),
                                    children: (0, i.jsx)(d.k$p, {
                                        size: "md",
                                        color: "currentColor",
                                        className: s()(V.removeIcon, { [V.disabledRemoveIcon]: N || r }),
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
                    return (0, i.jsx)(X, { title: H.intl.string(H.t.LPJmLy) }, "roles-title");
                case D.m$.MEMBERS:
                    return (0, i.jsx)(X, { title: H.intl.string(H.t["9Oq93t"]) }, "members-title");
            }
        },
        sectionHeight: 49,
    });
}
function F(e) {
    let { guild: t, channel: l, permissionUpdates: r } = e,
        c = (0, a.e7)([Z.Z], () => Z.Z.getSortedRoles(t.id)),
        u = P.RZ(t, c, l, N.yP, r),
        h = (0, a.e7)([O.ZP], () => P.cR(O.ZP.getMemberIds(t.id), l, t, N.yP, r)),
        g = (0, C.nG)(l.id);
    return (0, i.jsxs)("div", {
        className: s()(V.settingCard, V.active),
        children: [
            (0, i.jsx)(L.Z, {
                label: H.intl.string(H.t.StpcFR),
                description: H.intl.string(H.t.f7VbhI),
                icon: (0, i.jsx)(d.ewx, {
                    size: "custom",
                    color: "currentColor",
                    className: V.cardIcon,
                    height: 20,
                    width: 20,
                }),
                id: "StageModeratorSettingCard",
            }),
            (0, i.jsxs)("div", {
                className: V.cardFolder,
                children: [
                    (0, i.jsxs)(x.Z, {
                        justify: x.Z.Justify.BETWEEN,
                        align: x.Z.Align.CENTER,
                        className: V.folderHeader,
                        children: [
                            (0, i.jsx)(d.vwX, {
                                tag: "h5",
                                className: V.folderTitle,
                                children: H.intl.string(H.t["7BWDRU"]),
                            }),
                            (0, i.jsx)(o.u, {
                                text: H.intl.string(H.t.arRuER),
                                shouldShow: !g,
                                children: (0, i.jsx)(d.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: H.intl.string(H.t.dMJ3Y2),
                                    onClick: function () {
                                        (0, d.ZDy)(async () => {
                                            let { default: e } = await n.e("46786").then(n.bind(n, 388131));
                                            return (t) => (0, i.jsx)(e, G(U({}, t), { channelId: l.id }));
                                        });
                                    },
                                    disabled: !g,
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(W, {
                        channel: l,
                        roles: u,
                        members: h,
                        disabledReason: g ? null : H.intl.string(H.t.arRuER),
                        getRemoveTooltipHint: S.kk,
                    }),
                ],
            }),
        ],
    });
}
function z(e) {
    let { guild: t, channel: l, isPrivateGuildChannel: r, roles: o, members: u } = e,
        h = (0, a.e7)([T.Z], () => T.Z.can(B.Pl.ADMINISTRATOR, t)),
        g = I.Uu(B.Pl.VIEW_CHANNEL, t),
        p = I.Uu(B.Pl.ADMINISTRATOR, t);
    async function m() {
        let e = l.accessPermissions,
            s = R.default.getCurrentUser();
        if (!r && null != (await (0, v.T)(t.id, l.id)))
            return void (0, d.ZDy)(async () => {
                let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 878678));
                return (n) =>
                    (0, i.jsx)(
                        e,
                        G(U({}, n), {
                            confirmButtonColor: c.Tt.BRAND,
                            header: H.intl.string(H.t.ZzdgUl),
                            confirmText: H.intl.string(H.t.BddRzc),
                            children: (0, i.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: H.intl.format(H.t.DwY2vL, {
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
        title: H.intl.string(H.t.aUI70t),
        subtitle: H.intl.string(H.t.hfbjIC),
        formLabel: H.intl.string(H.t.P6eCbG),
    };
    return (
        l.isCategory()
            ? ((f.title = H.intl.string(H.t.lEPAZ2)),
              (f.subtitle = H.intl.string(H.t["RQUk6+"])),
              (f.formLabel = H.intl.string(H.t["8VIxJi"])))
            : l.type === k.d4z.GUILD_VOICE && (f.subtitle = H.intl.string(H.t.cLjvKi)),
        (0, i.jsxs)("div", {
            className: s()(V.settingCard, { [V.active]: r }),
            children: [
                (0, i.jsx)(L.Z, {
                    description: f.subtitle,
                    icon: (0, i.jsx)(d.mBM, {
                        size: "custom",
                        color: "currentColor",
                        className: V.cardIcon,
                        height: 20,
                        width: 20,
                    }),
                    id: "PrivateChannelSettingCard",
                    label: f.title,
                    onChange: m,
                    value: r,
                }),
                (0, i.jsxs)("div", {
                    className: V.cardFolder,
                    children: [
                        p &&
                            (0, i.jsx)("div", {
                                className: V.adminWarning,
                                children: (0, i.jsx)(d.Wn, {
                                    messageType: d.QYI.WARNING,
                                    children: H.intl.string(H.t["5f3HIC"]),
                                }),
                            }),
                        !g &&
                            !p &&
                            !r &&
                            (0, i.jsx)("div", {
                                className: V.adminWarning,
                                children: (0, i.jsx)(d.Wn, {
                                    messageType: d.QYI.WARNING,
                                    children: H.intl.string(H.t.ZAk4Q0),
                                }),
                            }),
                        r &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)(x.Z, {
                                        justify: x.Z.Justify.BETWEEN,
                                        align: x.Z.Align.CENTER,
                                        className: V.folderHeader,
                                        children: [
                                            (0, i.jsx)(d.vwX, {
                                                tag: "h5",
                                                className: V.folderTitle,
                                                children: f.formLabel,
                                            }),
                                            (0, i.jsx)(d.zxk, {
                                                variant: "primary",
                                                size: "sm",
                                                text: H.intl.string(H.t.dMJ3Y2),
                                                onClick: function () {
                                                    (0, d.ZDy)(async () => {
                                                        let { default: e } = await Promise.resolve().then(
                                                            n.bind(n, 185413),
                                                        );
                                                        return (t) =>
                                                            (0, i.jsx)(
                                                                e,
                                                                G(U({}, t), {
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
            (0, i.jsx)(d.izJ, { className: V.divider }),
            (0, i.jsx)(d.vwX, {
                className: s()(V.folderTitle, V.sectionTitle),
                tag: "h5",
                children: t,
            }),
        ],
    });
}
let q = a.ZP.connectStores([E.Z, T.Z, O.ZP, w.Z, Z.Z], () => {
    let e,
        t = E.Z.channel,
        n = E.Z.category,
        i = [],
        l = [],
        r = {},
        s = !1;
    if (null != t) {
        e = w.Z.getGuild(t.getGuildId());
        let n = O.ZP.getMemberIds(null == e ? void 0 : e.id);
        if (null != e) {
            let a = Z.Z.getSortedRoles(e.id);
            (r = E.Z.editedPermissionIds.reduce((e, t) => {
                let n = E.Z.getPermissionOverwrite(t);
                return null != n && (e[t] = n), e;
            }, {})),
                (i = P.kA(e, a, t, t.accessPermissions, r)),
                (l = P.cR(n, t, e, t.accessPermissions, r)),
                (s = P.Yk(t, r));
        }
    }
    return {
        canSyncChannel: null != n && T.Z.can(B.Pl.MANAGE_ROLES, n),
        category: n,
        channel: t,
        filteredMembers: l,
        filteredRoles: i,
        guild: e,
        isPrivateGuildChannel: s,
        locked: E.Z.locked,
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
            permissionUpdates: p,
        } = e,
        [m, f] = l.useState(!I.Uu(B.Pl.SEND_MESSAGES, s));
    if (null == s || null == c) return null;
    let b = {
        title: H.intl.string(H.t.BAZMBg),
        subtitle: H.intl.string(H.t.XLrZys),
    };
    return (
        s.isCategory() && ((b.title = H.intl.string(H.t["/uELTk"])), (b.subtitle = H.intl.string(H.t["8iAg3d"]))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.vwX, {
                    tag: "h1",
                    children: b.title,
                }),
                (0, i.jsx)(d.R94, { children: b.subtitle }),
                null != r && t
                    ? h
                        ? (0, i.jsx)(M.Z, {
                              canSync: !1,
                              icon: d.DuK,
                              noticeText: H.intl.format(H.t.ETJqLi, { categoryName: r.name }),
                          })
                        : (0, i.jsx)(M.Z, {
                              buttonText: H.intl.string(H.t.NVwuHh),
                              canSync: !0,
                              icon: (0, d.GSL)(_.Z),
                              noticeText: H.intl.format(H.t.OIhm0N, { categoryName: r.name }),
                              onClick: function () {
                                  null != r &&
                                      (0, d.ZDy)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 170509));
                                          return (t) =>
                                              (0, i.jsx)(
                                                  e,
                                                  G(U({}, t), {
                                                      channel: s,
                                                      category: r,
                                                      onConfirm: async () => {
                                                          let { guild_id: e } = r,
                                                              t = U({}, r.permissionOverwrites);
                                                          null != e && null == t[e] && (t[e] = I.we(e)),
                                                              (await (0, j.u)(s, t[e].deny, t[e].allow)) &&
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
                          permissionUpdates: p,
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
