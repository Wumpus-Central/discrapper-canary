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
    m = n(741361),
    p = n(911969),
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
    w = n(485386),
    Z = n(430824),
    T = n(496675),
    R = n(594174),
    _ = n(903386),
    I = n(700785),
    P = n(605436),
    L = n(374347),
    A = n(415236),
    M = n(182905),
    D = n(71080),
    k = n(981631),
    B = n(231338),
    V = n(388032),
    H = n(611457);
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
        className: H.roleMemberList,
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
                                  className: H.shield,
                                  color: g.colorString,
                                  size: 20,
                              })
                            : (0, i.jsx)(d.lZ8, {
                                  size: "custom",
                                  className: H.shield,
                                  color: g.colorString,
                                  height: 20,
                              })),
                        (c = (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", {
                                    className: H.rowHeight,
                                    children: j,
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    className: H.rowLabel,
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
                                    className: H.rowLabel,
                                    variant: "text-sm/normal",
                                    children: g.name,
                                }),
                                g.bot &&
                                    (0, i.jsx)(f.Z, {
                                        verified: g.verifiedBot,
                                        className: H.rowBotTag,
                                    }),
                                null != g.nickname &&
                                    (0, i.jsx)(d.Text, {
                                        color: "text-muted",
                                        className: H.rowLabelSubText,
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
                    className: H.memberRow,
                    children: [
                        (0, i.jsx)(x.Z, {
                            justify: x.Z.Justify.START,
                            align: x.Z.Align.CENTER,
                            className: H.__invalid_memberRowBody,
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
                                                title: V.intl.string(V.t.GuPYQE),
                                                body: V.intl.format(V.t.xERCnZ, { name: n }),
                                                cancelText: V.intl.string(V.t["ETE/oK"]),
                                                onConfirm: () =>
                                                    (function (e, n) {
                                                        if (t.isGuildStageVoice()) {
                                                            let i = (0, C._L)(
                                                                e,
                                                                n === D.aC.ROLE ? p.BN.ROLE : p.BN.MEMBER,
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
                                    "aria-disabled": !E,
                                    "aria-label": V.intl.string(V.t.N86XcH),
                                    children: (0, i.jsx)(d.k$p, {
                                        size: "md",
                                        color: "currentColor",
                                        className: s()(H.removeIcon, { [H.disabledRemoveIcon]: N || r }),
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
                    return (0, i.jsx)(X, { title: V.intl.string(V.t.LPJmLy) }, "roles-title");
                case D.m$.MEMBERS:
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
        u = (0, a.e7)([O.ZP], () => P.cR(O.ZP.getMemberIds(t.id), l, t, N.yP, r)),
        h = (0, C.nG)(l.id);
    function g() {
        (0, d.ZDy)(async () => {
            let { default: e } = await n.e("46786").then(n.bind(n, 388131));
            return (t) => (0, i.jsx)(e, G(U({}, t), { channelId: l.id }));
        });
    }
    return (0, i.jsxs)("div", {
        className: s()(H.settingCard, H.active),
        children: [
            (0, i.jsx)(A.Z, {
                label: V.intl.string(V.t.StpcFR),
                description: V.intl.string(V.t.f7VbhI),
                icon: (0, i.jsx)(d.ewx, {
                    size: "custom",
                    color: "currentColor",
                    className: H.cardIcon,
                    height: 20,
                    width: 20,
                }),
                id: "StageModeratorSettingCard",
            }),
            (0, i.jsxs)("div", {
                className: H.cardFolder,
                children: [
                    (0, i.jsxs)(x.Z, {
                        justify: x.Z.Justify.BETWEEN,
                        align: x.Z.Align.CENTER,
                        className: H.folderHeader,
                        children: [
                            (0, i.jsx)(d.vwX, {
                                tag: "h5",
                                className: H.folderTitle,
                                children: V.intl.string(V.t["7BWDRU"]),
                            }),
                            (0, i.jsx)(d.ua7, {
                                text: V.intl.string(V.t.arRuER),
                                shouldShow: !h,
                                children: (e) =>
                                    (0, i.jsx)(
                                        d.zxk,
                                        G(
                                            U(
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
        h = (0, a.e7)([T.Z], () => T.Z.can(B.Pl.ADMINISTRATOR, t)),
        g = I.Uu(B.Pl.VIEW_CHANNEL, t),
        m = I.Uu(B.Pl.ADMINISTRATOR, t);
    async function p() {
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
            className: s()(H.settingCard, { [H.active]: r }),
            children: [
                (0, i.jsx)(A.Z, {
                    description: f.subtitle,
                    icon: (0, i.jsx)(d.mBM, {
                        size: "custom",
                        color: "currentColor",
                        className: H.cardIcon,
                        height: 20,
                        width: 20,
                    }),
                    id: "PrivateChannelSettingCard",
                    label: f.title,
                    onChange: p,
                    value: r,
                }),
                (0, i.jsxs)("div", {
                    className: H.cardFolder,
                    children: [
                        m &&
                            (0, i.jsx)("div", {
                                className: H.adminWarning,
                                children: (0, i.jsx)(d.Wn, {
                                    messageType: d.QYI.WARNING,
                                    children: V.intl.string(V.t["5f3HIC"]),
                                }),
                            }),
                        !g &&
                            !m &&
                            !r &&
                            (0, i.jsx)("div", {
                                className: H.adminWarning,
                                children: (0, i.jsx)(d.Wn, {
                                    messageType: d.QYI.WARNING,
                                    children: V.intl.string(V.t.ZAk4Q0),
                                }),
                            }),
                        r &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)(x.Z, {
                                        justify: x.Z.Justify.BETWEEN,
                                        align: x.Z.Align.CENTER,
                                        className: H.folderHeader,
                                        children: [
                                            (0, i.jsx)(d.vwX, {
                                                tag: "h5",
                                                className: H.folderTitle,
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
            (0, i.jsx)(d.$i$, { className: H.divider }),
            (0, i.jsx)(d.vwX, {
                className: s()(H.folderTitle, H.sectionTitle),
                tag: "h5",
                children: t,
            }),
        ],
    });
}
let q = a.ZP.connectStores([E.Z, T.Z, O.ZP, Z.Z, w.Z], () => {
    let e,
        t = E.Z.channel,
        n = E.Z.category,
        i = [],
        l = [],
        r = {},
        s = !1;
    if (null != t) {
        e = Z.Z.getGuild(t.getGuildId());
        let n = O.ZP.getMemberIds(null == e ? void 0 : e.id);
        if (null != e) {
            let a = w.Z.getSortedRoles(e.id);
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
            permissionUpdates: m,
        } = e,
        [p, f] = l.useState(!I.Uu(B.Pl.SEND_MESSAGES, s));
    if (null == s || null == c) return null;
    let b = {
        title: V.intl.string(V.t.BAZMBg),
        subtitle: V.intl.string(V.t.XLrZys),
    };
    return (
        s.isCategory() && ((b.title = V.intl.string(V.t["/uELTk"])), (b.subtitle = V.intl.string(V.t["8iAg3d"]))),
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
                              noticeText: V.intl.format(V.t.ETJqLi, { categoryName: r.name }),
                          })
                        : (0, i.jsx)(M.Z, {
                              buttonText: V.intl.string(V.t.NVwuHh),
                              canSync: !0,
                              icon: (0, d.GSL)(_.Z),
                              noticeText: V.intl.format(V.t.OIhm0N, { categoryName: r.name }),
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
                (0, i.jsx)(L.Z, {}),
            ],
        })
    );
});
