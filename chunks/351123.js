(n.d(t, { Z: () => X }), n(388685));
var i = n(255367),
    l = n(73800),
    r = n(120356),
    s = n.n(r),
    a = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(668781),
    u = n(493683),
    h = n(787014),
    m = n(741361),
    g = n(911969),
    p = n(385499),
    f = n(134433),
    x = n(600164),
    j = n(156699),
    b = n(693196),
    v = n(434404),
    y = n(200498),
    C = n(146085),
    N = n(192079),
    S = n(277053),
    E = n(271383),
    O = n(485386),
    T = n(430824),
    w = n(496675),
    Z = n(594174),
    R = n(903386),
    I = n(700785),
    _ = n(605436),
    P = n(27544),
    A = n(415236),
    L = n(182905),
    D = n(71080),
    M = n(981631),
    k = n(231338),
    B = n(388032),
    V = n(690550);
function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function W(e, t) {
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
function H(e) {
    let { channel: t, roles: n, members: l, disabledReason: r, getRemoveTooltipHint: a } = e;
    return (0, i.jsx)(c.aVo, {
        className: V.roleMemberList,
        sections: [n.length, l.length],
        renderRow: function (e) {
            let o,
                h,
                j,
                { section: b, row: v } = e,
                C = !1;
            switch (b) {
                case D.m$.ROLES:
                    var N;
                    ((j =
                        (h = n[v]).rowType === D.aC.ROLE && (null == (N = h.tags) ? void 0 : N.guild_connections) === null
                            ? (0, i.jsx)(f.Z, {
                                  className: V.shield,
                                  color: h.colorString,
                                  size: 20
                              })
                            : (0, i.jsx)(c.lZ8, {
                                  size: 'custom',
                                  className: V.shield,
                                  color: h.colorString,
                                  height: 20
                              })),
                        (o = (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)('div', {
                                    className: V.rowHeight,
                                    children: j
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-sm/normal',
                                    className: V.rowLabel,
                                    color: h.disabled ? 'text-muted' : 'text-default',
                                    children: h.name
                                })
                            ]
                        })),
                        (C = h.disabled));
                    break;
                case D.m$.MEMBERS:
                    ((h = l[v]),
                        (o = (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(c.qEK, {
                                    src: h.avatarURL,
                                    size: c.EFr.SIZE_24,
                                    'aria-hidden': !0
                                }),
                                (0, i.jsx)(c.Text, {
                                    className: V.rowLabel,
                                    variant: 'text-sm/normal',
                                    children: h.name
                                }),
                                h.bot &&
                                    (0, i.jsx)(p.Z, {
                                        verified: h.verifiedBot,
                                        className: V.rowBotTag
                                    }),
                                null != h.nickname &&
                                    (0, i.jsx)(c.Text, {
                                        color: 'text-muted',
                                        className: V.rowLabelSubText,
                                        variant: 'text-sm/normal',
                                        children: h.username
                                    })
                            ]
                        })),
                        (C = h.disabled));
                    break;
                default:
                    h = null;
            }
            if (null == h) return null;
            let S = !C && null == r && null != h.id;
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
                            children: o
                        }),
                        (0, i.jsx)(c.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/normal',
                            children: _.zB(h.rowType)
                        }),
                        h.rowType !== D.aC.EMPTY_STATE &&
                            (0, i.jsx)(c.DY3, {
                                className: V.removeIconContainer,
                                text: null != r ? r : a(h.rowType, h.disabled),
                                children: (0, i.jsx)(c.P3F, {
                                    onClick: () => {
                                        var e, n, i;
                                        return (
                                            S &&
                                            null != h &&
                                            ((e = h.id),
                                            (n = h.name),
                                            (i = h.rowType),
                                            void d.Z.show({
                                                title: B.intl.string(B.t.GuPYQE),
                                                body: B.intl.format(B.t.xERCnZ, { name: n }),
                                                cancelText: B.intl.string(B.t['ETE/oK']),
                                                onConfirm: () =>
                                                    (function (e, n) {
                                                        if (t.isGuildStageVoice()) {
                                                            let i = (0, y._L)(e, n === D.aC.ROLE ? g.BN.ROLE : g.BN.MEMBER, t);
                                                            (0, y.Os)(i) ? u.Z.clearPermissionOverwrite(t.id, i.id) : (0, m.hw)(t.id, [i]);
                                                        } else u.Z.clearPermissionOverwrite(t.id, e);
                                                    })(e, i)
                                            }))
                                        );
                                    },
                                    'aria-disabled': !S,
                                    'aria-label': B.intl.string(B.t.N86XcH),
                                    children: (0, i.jsx)(c.k$p, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: s()(V.removeIcon, { [V.disabledRemoveIcon]: C || r })
                                    })
                                })
                            })
                    ]
                },
                h.id
            );
        },
        rowHeight: 40,
        renderSection: function (e) {
            let { section: t } = e;
            switch (t) {
                case D.m$.ROLES:
                    return (0, i.jsx)(z, { title: B.intl.string(B.t.LPJmLy) }, 'roles-title');
                case D.m$.MEMBERS:
                    return (0, i.jsx)(z, { title: B.intl.string(B.t['9Oq93t']) }, 'members-title');
            }
        },
        sectionHeight: 49
    });
}
function G(e) {
    let { guild: t, channel: l, permissionUpdates: r } = e,
        o = (0, a.e7)([O.Z], () => O.Z.getSortedRoles(t.id)),
        d = _.RZ(t, o, l, C.yP, r),
        u = (0, a.e7)([E.ZP], () => _.cR(E.ZP.getMemberIds(t.id), l, t, C.yP, r)),
        h = (0, y.nG)(l.id);
    function m() {
        (0, c.ZDy)(async () => {
            let { default: e } = await n.e('46786').then(n.bind(n, 388131));
            return (t) => (0, i.jsx)(e, W(U({}, t), { channelId: l.id }));
        });
    }
    return (0, i.jsxs)('div', {
        className: s()(V.settingCard, V.active),
        children: [
            (0, i.jsx)(A.Z, {
                label: B.intl.string(B.t.StpcFR),
                description: B.intl.string(B.t.f7VbhI),
                icon: (0, i.jsx)(c.ewx, {
                    size: 'custom',
                    color: 'currentColor',
                    className: V.cardIcon,
                    height: 20,
                    width: 20
                }),
                id: 'StageModeratorSettingCard'
            }),
            (0, i.jsxs)('div', {
                className: V.cardFolder,
                children: [
                    (0, i.jsxs)(x.Z, {
                        justify: x.Z.Justify.BETWEEN,
                        align: x.Z.Align.CENTER,
                        className: V.folderHeader,
                        children: [
                            (0, i.jsx)(c.vwX, {
                                tag: 'h5',
                                className: V.folderTitle,
                                children: B.intl.string(B.t['7BWDRU'])
                            }),
                            (0, i.jsx)(c.ua7, {
                                text: B.intl.string(B.t.arRuER),
                                shouldShow: !h,
                                children: (e) =>
                                    (0, i.jsx)(
                                        c.zxk,
                                        W(
                                            U(
                                                {
                                                    variant: 'primary',
                                                    size: 'sm',
                                                    text: B.intl.string(B.t.dMJ3Y2)
                                                },
                                                e
                                            ),
                                            {
                                                onClick: m,
                                                disabled: !h
                                            }
                                        )
                                    )
                            })
                        ]
                    }),
                    (0, i.jsx)(H, {
                        channel: l,
                        roles: d,
                        members: u,
                        disabledReason: h ? null : B.intl.string(B.t.arRuER),
                        getRemoveTooltipHint: N.kk
                    })
                ]
            })
        ]
    });
}
function F(e) {
    let { guild: t, channel: l, isPrivateGuildChannel: r, roles: d, members: u } = e,
        h = (0, a.e7)([w.Z], () => w.Z.can(k.Pl.ADMINISTRATOR, t)),
        m = I.Uu(k.Pl.VIEW_CHANNEL, t),
        g = I.Uu(k.Pl.ADMINISTRATOR, t);
    async function p() {
        let e = l.accessPermissions,
            s = Z.default.getCurrentUser();
        if (!r && null != (await (0, b.T)(t.id, l.id)))
            return void (0, c.ZDy)(async () => {
                let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 878678));
                return (n) =>
                    (0, i.jsx)(
                        e,
                        W(U({}, n), {
                            confirmButtonColor: o.Tt.BRAND,
                            header: B.intl.string(B.t.ZzdgUl),
                            confirmText: B.intl.string(B.t.BddRzc),
                            children: (0, i.jsx)(c.Text, {
                                variant: 'text-md/normal',
                                children: B.intl.format(B.t.DwY2vL, {
                                    onClick: () => {
                                        (v.Z.open(t.id, M.pNK.ONBOARDING), n.onClose());
                                    }
                                })
                            })
                        })
                    );
            });
        (_.$e(l, e, r), r || null == s || h || _.Yh(l, e));
    }
    let f = {
        title: B.intl.string(B.t.aUI70t),
        subtitle: B.intl.string(B.t.hfbjIC),
        formLabel: B.intl.string(B.t.P6eCbG)
    };
    return (
        l.isCategory() ? ((f.title = B.intl.string(B.t.lEPAZ2)), (f.subtitle = B.intl.string(B.t['RQUk6+'])), (f.formLabel = B.intl.string(B.t['8VIxJi']))) : l.type === M.d4z.GUILD_VOICE && (f.subtitle = B.intl.string(B.t.cLjvKi)),
        (0, i.jsxs)('div', {
            className: s()(V.settingCard, { [V.active]: r }),
            children: [
                (0, i.jsx)(A.Z, {
                    description: f.subtitle,
                    icon: (0, i.jsx)(c.mBM, {
                        size: 'custom',
                        color: 'currentColor',
                        className: V.cardIcon,
                        height: 20,
                        width: 20
                    }),
                    id: 'PrivateChannelSettingCard',
                    label: f.title,
                    onChange: p,
                    value: r
                }),
                (0, i.jsxs)('div', {
                    className: V.cardFolder,
                    children: [
                        g &&
                            (0, i.jsx)('div', {
                                className: V.adminWarning,
                                children: (0, i.jsx)(c.Wn, {
                                    messageType: c.QYI.WARNING,
                                    children: B.intl.string(B.t['5f3HIC'])
                                })
                            }),
                        !m &&
                            !g &&
                            !r &&
                            (0, i.jsx)('div', {
                                className: V.adminWarning,
                                children: (0, i.jsx)(c.Wn, {
                                    messageType: c.QYI.WARNING,
                                    children: B.intl.string(B.t.ZAk4Q0)
                                })
                            }),
                        r &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)(x.Z, {
                                        justify: x.Z.Justify.BETWEEN,
                                        align: x.Z.Align.CENTER,
                                        className: V.folderHeader,
                                        children: [
                                            (0, i.jsx)(c.vwX, {
                                                tag: 'h5',
                                                className: V.folderTitle,
                                                children: f.formLabel
                                            }),
                                            (0, i.jsx)(c.zxk, {
                                                variant: 'primary',
                                                size: 'sm',
                                                text: B.intl.string(B.t.dMJ3Y2),
                                                onClick: function () {
                                                    (0, c.ZDy)(async () => {
                                                        let { default: e } = await Promise.resolve().then(n.bind(n, 185413));
                                                        return (t) =>
                                                            (0, i.jsx)(
                                                                e,
                                                                W(U({}, t), {
                                                                    channelId: l.id,
                                                                    inSettings: !0
                                                                })
                                                            );
                                                    });
                                                }
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(H, {
                                        channel: l,
                                        roles: d,
                                        members: u,
                                        getRemoveTooltipHint: _.yv
                                    })
                                ]
                            })
                    ]
                })
            ]
        })
    );
}
function z(e) {
    let { title: t } = e;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(c.$i$, { className: V.divider }),
            (0, i.jsx)(c.vwX, {
                className: s()(V.folderTitle, V.sectionTitle),
                tag: 'h5',
                children: t
            })
        ]
    });
}
let X = a.ZP.connectStores([S.Z, w.Z, E.ZP, T.Z, O.Z], () => {
    let e,
        t = S.Z.channel,
        n = S.Z.category,
        i = [],
        l = [],
        r = {},
        s = !1;
    if (null != t) {
        e = T.Z.getGuild(t.getGuildId());
        let n = E.ZP.getMemberIds(null == e ? void 0 : e.id);
        if (null != e) {
            let a = O.Z.getSortedRoles(e.id);
            ((r = S.Z.editedPermissionIds.reduce((e, t) => {
                let n = S.Z.getPermissionOverwrite(t);
                return (null != n && (e[t] = n), e);
            }, {})),
                (i = _.kA(e, a, t, t.accessPermissions, r)),
                (l = _.cR(n, t, e, t.accessPermissions, r)),
                (s = _.Yk(t, r)));
        }
    }
    return {
        canSyncChannel: null != n && w.Z.can(k.Pl.MANAGE_ROLES, n),
        category: n,
        channel: t,
        filteredMembers: l,
        filteredRoles: i,
        guild: e,
        isPrivateGuildChannel: s,
        locked: S.Z.locked,
        permissionUpdates: r
    };
})(function (e) {
    let { canSyncChannel: t, category: r, channel: s, filteredMembers: a, filteredRoles: o, guild: d, isPrivateGuildChannel: u, locked: m, permissionUpdates: g } = e,
        [p, f] = l.useState(!I.Uu(k.Pl.SEND_MESSAGES, s));
    if (null == s || null == d) return null;
    let x = {
        title: B.intl.string(B.t.BAZMBg),
        subtitle: B.intl.string(B.t.XLrZys)
    };
    return (
        s.isCategory() && ((x.title = B.intl.string(B.t['/uELTk'])), (x.subtitle = B.intl.string(B.t['8iAg3d']))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.vwX, {
                    tag: 'h1',
                    children: x.title
                }),
                (0, i.jsx)(c.R94, { children: x.subtitle }),
                null != r && t
                    ? m
                        ? (0, i.jsx)(L.Z, {
                              canSync: !1,
                              icon: c.DuK,
                              noticeText: B.intl.format(B.t.ETJqLi, { categoryName: r.name })
                          })
                        : (0, i.jsx)(L.Z, {
                              buttonText: B.intl.string(B.t.NVwuHh),
                              canSync: !0,
                              icon: (0, c.GSL)(R.Z),
                              noticeText: B.intl.format(B.t.OIhm0N, { categoryName: r.name }),
                              onClick: function () {
                                  null != r &&
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 170509));
                                          return (t) =>
                                              (0, i.jsx)(
                                                  e,
                                                  W(U({}, t), {
                                                      channel: s,
                                                      category: r,
                                                      onConfirm: async () => {
                                                          let { guild_id: e } = r,
                                                              t = U({}, r.permissionOverwrites);
                                                          (null != e && null == t[e] && (t[e] = I.we(e)), (await (0, j.u)(s, t[e].deny, t[e].allow)) && (0, h.wk)(s.id, { permissionOverwrites: Object.values(t) }));
                                                      }
                                                  })
                                              );
                                      });
                              }
                          })
                    : null,
                s.isGuildStageVoice()
                    ? (0, i.jsx)(G, {
                          guild: d,
                          channel: s,
                          permissionUpdates: g
                      })
                    : null,
                (0, i.jsx)(F, {
                    channel: s,
                    guild: d,
                    isPrivateGuildChannel: u,
                    roles: o,
                    members: a
                }),
                !1,
                (0, i.jsx)(P.Z, {})
            ]
        })
    );
});
