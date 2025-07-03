(n.d(t, { Z: () => z }), n(388685));
var i = n(255367),
    l = n(73800),
    r = n(120356),
    s = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(668781),
    d = n(493683),
    u = n(787014),
    h = n(741361),
    m = n(911969),
    g = n(385499),
    p = n(134433),
    f = n(600164),
    x = n(156699),
    j = n(693196),
    b = n(434404),
    v = n(200498),
    y = n(146085),
    C = n(192079),
    N = n(277053),
    S = n(271383),
    O = n(485386),
    E = n(430824),
    T = n(496675),
    w = n(594174),
    Z = n(903386),
    R = n(700785),
    I = n(605436),
    _ = n(27544),
    P = n(415236),
    A = n(182905),
    L = n(71080),
    k = n(981631),
    D = n(231338),
    M = n(388032),
    B = n(690550);
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
function V(e, t) {
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
    return (0, i.jsx)(o.aVo, {
        className: B.roleMemberList,
        sections: [n.length, l.length],
        renderRow: function (e) {
            let u,
                x,
                j,
                { section: b, row: y } = e,
                C = !1;
            switch (b) {
                case L.m$.ROLES:
                    var N;
                    ((j =
                        (x = n[y]).rowType === L.aC.ROLE && (null == (N = x.tags) ? void 0 : N.guild_connections) === null
                            ? (0, i.jsx)(p.Z, {
                                  className: B.shield,
                                  color: x.colorString,
                                  size: 20
                              })
                            : (0, i.jsx)(o.lZ8, {
                                  size: 'custom',
                                  className: B.shield,
                                  color: x.colorString,
                                  height: 20
                              })),
                        (u = (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)('div', {
                                    className: B.rowHeight,
                                    children: j
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    className: B.rowLabel,
                                    color: x.disabled ? 'text-muted' : 'text-default',
                                    children: x.name
                                })
                            ]
                        })),
                        (C = x.disabled));
                    break;
                case L.m$.MEMBERS:
                    ((x = l[y]),
                        (u = (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(o.qEK, {
                                    src: x.avatarURL,
                                    size: o.EFr.SIZE_24,
                                    'aria-hidden': !0
                                }),
                                (0, i.jsx)(o.Text, {
                                    className: B.rowLabel,
                                    variant: 'text-sm/normal',
                                    children: x.name
                                }),
                                x.bot &&
                                    (0, i.jsx)(g.Z, {
                                        verified: x.verifiedBot,
                                        className: B.rowBotTag
                                    }),
                                null != x.nickname &&
                                    (0, i.jsx)(o.Text, {
                                        color: 'text-muted',
                                        className: B.rowLabelSubText,
                                        variant: 'text-sm/normal',
                                        children: x.username
                                    })
                            ]
                        })),
                        (C = x.disabled));
                    break;
                default:
                    x = null;
            }
            if (null == x) return null;
            let S = !C && null == r && null != x.id;
            return (0, i.jsxs)(
                f.Z,
                {
                    justify: f.Z.Justify.BETWEEN,
                    align: f.Z.Align.CENTER,
                    className: B.memberRow,
                    children: [
                        (0, i.jsx)(f.Z, {
                            justify: f.Z.Justify.START,
                            align: f.Z.Align.CENTER,
                            className: B.__invalid_memberRowBody,
                            children: u
                        }),
                        (0, i.jsx)(o.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/normal',
                            children: I.zB(x.rowType)
                        }),
                        x.rowType !== L.aC.EMPTY_STATE &&
                            (0, i.jsx)(o.DY3, {
                                className: B.removeIconContainer,
                                text: null != r ? r : a(x.rowType, x.disabled),
                                children: (0, i.jsx)(o.P3F, {
                                    onClick: () => {
                                        var e, n, i;
                                        return (
                                            S &&
                                            null != x &&
                                            ((e = x.id),
                                            (n = x.name),
                                            (i = x.rowType),
                                            void c.Z.show({
                                                title: M.intl.string(M.t.GuPYQE),
                                                body: M.intl.format(M.t.xERCnZ, { name: n }),
                                                cancelText: M.intl.string(M.t['ETE/oK']),
                                                onConfirm: () =>
                                                    (function (e, n) {
                                                        if (t.isGuildStageVoice()) {
                                                            let i = (0, v._L)(e, n === L.aC.ROLE ? m.BN.ROLE : m.BN.MEMBER, t);
                                                            (0, v.Os)(i) ? d.Z.clearPermissionOverwrite(t.id, i.id) : (0, h.hw)(t.id, [i]);
                                                        } else d.Z.clearPermissionOverwrite(t.id, e);
                                                    })(e, i)
                                            }))
                                        );
                                    },
                                    'aria-disabled': !S,
                                    'aria-label': M.intl.string(M.t.N86XcH),
                                    children: (0, i.jsx)(o.k$p, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: s()(B.removeIcon, { [B.disabledRemoveIcon]: C || r })
                                    })
                                })
                            })
                    ]
                },
                x.id
            );
        },
        rowHeight: 40,
        renderSection: function (e) {
            let { section: t } = e;
            switch (t) {
                case L.m$.ROLES:
                    return (0, i.jsx)(F, { title: M.intl.string(M.t.LPJmLy) }, 'roles-title');
                case L.m$.MEMBERS:
                    return (0, i.jsx)(F, { title: M.intl.string(M.t['9Oq93t']) }, 'members-title');
            }
        },
        sectionHeight: 49
    });
}
function H(e) {
    let { guild: t, channel: l, permissionUpdates: r } = e,
        c = (0, a.e7)([O.Z], () => O.Z.getRoles(t.id)),
        d = I.RZ(t, c, l, y.yP, r),
        u = (0, a.e7)([S.ZP], () => I.cR(S.ZP.getMemberIds(t.id), l, t, y.yP, r)),
        h = (0, v.nG)(l.id);
    function m() {
        (0, o.ZDy)(async () => {
            let { default: e } = await n.e('46786').then(n.bind(n, 388131));
            return (t) => (0, i.jsx)(e, V(U({}, t), { channelId: l.id }));
        });
    }
    return (0, i.jsxs)('div', {
        className: s()(B.settingCard, B.active),
        children: [
            (0, i.jsx)(P.Z, {
                label: M.intl.string(M.t.StpcFR),
                description: M.intl.string(M.t.f7VbhI),
                icon: (0, i.jsx)(o.ewx, {
                    size: 'custom',
                    color: 'currentColor',
                    className: B.cardIcon,
                    height: 20,
                    width: 20
                }),
                id: 'StageModeratorSettingCard'
            }),
            (0, i.jsxs)('div', {
                className: B.cardFolder,
                children: [
                    (0, i.jsxs)(f.Z, {
                        justify: f.Z.Justify.BETWEEN,
                        align: f.Z.Align.CENTER,
                        className: B.folderHeader,
                        children: [
                            (0, i.jsx)(o.vwX, {
                                tag: 'h5',
                                className: B.folderTitle,
                                children: M.intl.string(M.t['7BWDRU'])
                            }),
                            (0, i.jsx)(o.ua7, {
                                text: M.intl.string(M.t.arRuER),
                                shouldShow: !h,
                                children: (e) =>
                                    (0, i.jsx)(
                                        o.zxk,
                                        V(U({}, e), {
                                            size: o.zxk.Sizes.SMALL,
                                            color: o.zxk.Colors.BRAND,
                                            onClick: m,
                                            disabled: !h,
                                            children: M.intl.string(M.t.dMJ3Y2)
                                        })
                                    )
                            })
                        ]
                    }),
                    (0, i.jsx)(W, {
                        channel: l,
                        roles: d,
                        members: u,
                        disabledReason: h ? null : M.intl.string(M.t.arRuER),
                        getRemoveTooltipHint: C.kk
                    })
                ]
            })
        ]
    });
}
function G(e) {
    let { guild: t, channel: l, isPrivateGuildChannel: r, roles: c, members: d } = e,
        u = (0, a.e7)([T.Z], () => T.Z.can(D.Pl.ADMINISTRATOR, t)),
        h = R.Uu(D.Pl.VIEW_CHANNEL, t),
        m = R.Uu(D.Pl.ADMINISTRATOR, t);
    async function g() {
        let e = l.accessPermissions,
            s = w.default.getCurrentUser();
        if (!r && null != (await (0, j.T)(t.id, l.id)))
            return void (0, o.ZDy)(async () => {
                let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 878678));
                return (n) =>
                    (0, i.jsx)(
                        e,
                        V(U({}, n), {
                            confirmButtonColor: o.Ttl.BRAND,
                            header: M.intl.string(M.t.ZzdgUl),
                            confirmText: M.intl.string(M.t.BddRzc),
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: M.intl.format(M.t.DwY2vL, {
                                    onClick: () => {
                                        (b.Z.open(t.id, k.pNK.ONBOARDING), n.onClose());
                                    }
                                })
                            })
                        })
                    );
            });
        (I.$e(l, e, r), r || null == s || u || I.Yh(l, e));
    }
    let p = {
        title: M.intl.string(M.t.aUI70t),
        subtitle: M.intl.string(M.t.hfbjIC),
        formLabel: M.intl.string(M.t.P6eCbG)
    };
    return (
        l.isCategory() ? ((p.title = M.intl.string(M.t.lEPAZ2)), (p.subtitle = M.intl.string(M.t['RQUk6+'])), (p.formLabel = M.intl.string(M.t['8VIxJi']))) : l.type === k.d4z.GUILD_VOICE && (p.subtitle = M.intl.string(M.t.cLjvKi)),
        (0, i.jsxs)('div', {
            className: s()(B.settingCard, { [B.active]: r }),
            children: [
                (0, i.jsx)(P.Z, {
                    description: p.subtitle,
                    icon: (0, i.jsx)(o.mBM, {
                        size: 'custom',
                        color: 'currentColor',
                        className: B.cardIcon,
                        height: 20,
                        width: 20
                    }),
                    id: 'PrivateChannelSettingCard',
                    label: p.title,
                    onChange: g,
                    value: r
                }),
                (0, i.jsxs)('div', {
                    className: B.cardFolder,
                    children: [
                        m &&
                            (0, i.jsx)('div', {
                                className: B.adminWarning,
                                children: (0, i.jsx)(o.Wn, {
                                    messageType: o.QYI.WARNING,
                                    children: M.intl.string(M.t['5f3HIC'])
                                })
                            }),
                        !h &&
                            !m &&
                            !r &&
                            (0, i.jsx)('div', {
                                className: B.adminWarning,
                                children: (0, i.jsx)(o.Wn, {
                                    messageType: o.QYI.WARNING,
                                    children: M.intl.string(M.t.ZAk4Q0)
                                })
                            }),
                        r &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)(f.Z, {
                                        justify: f.Z.Justify.BETWEEN,
                                        align: f.Z.Align.CENTER,
                                        className: B.folderHeader,
                                        children: [
                                            (0, i.jsx)(o.vwX, {
                                                tag: 'h5',
                                                className: B.folderTitle,
                                                children: p.formLabel
                                            }),
                                            (0, i.jsx)(o.zxk, {
                                                size: o.zxk.Sizes.SMALL,
                                                color: o.zxk.Colors.BRAND,
                                                onClick: function () {
                                                    (0, o.ZDy)(async () => {
                                                        let { default: e } = await Promise.resolve().then(n.bind(n, 185413));
                                                        return (t) =>
                                                            (0, i.jsx)(
                                                                e,
                                                                V(U({}, t), {
                                                                    channelId: l.id,
                                                                    inSettings: !0
                                                                })
                                                            );
                                                    });
                                                },
                                                children: M.intl.string(M.t.dMJ3Y2)
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(W, {
                                        channel: l,
                                        roles: c,
                                        members: d,
                                        getRemoveTooltipHint: I.yv
                                    })
                                ]
                            })
                    ]
                })
            ]
        })
    );
}
function F(e) {
    let { title: t } = e;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(o.$i$, { className: B.divider }),
            (0, i.jsx)(o.vwX, {
                className: s()(B.folderTitle, B.sectionTitle),
                tag: 'h5',
                children: t
            })
        ]
    });
}
let z = a.ZP.connectStores([N.Z, T.Z, S.ZP, E.Z, O.Z], () => {
    let e,
        t = N.Z.channel,
        n = N.Z.category,
        i = [],
        l = [],
        r = {},
        s = !1;
    if (null != t) {
        e = E.Z.getGuild(t.getGuildId());
        let n = S.ZP.getMemberIds(null == e ? void 0 : e.id);
        if (null != e) {
            let a = O.Z.getRoles(e.id);
            ((r = N.Z.editedPermissionIds.reduce((e, t) => {
                let n = N.Z.getPermissionOverwrite(t);
                return (null != n && (e[t] = n), e);
            }, {})),
                (i = I.kA(e, a, t, t.accessPermissions, r)),
                (l = I.cR(n, t, e, t.accessPermissions, r)),
                (s = I.Yk(t, r)));
        }
    }
    return {
        canSyncChannel: null != n && T.Z.can(D.Pl.MANAGE_ROLES, n),
        category: n,
        channel: t,
        filteredMembers: l,
        filteredRoles: i,
        guild: e,
        isPrivateGuildChannel: s,
        locked: N.Z.locked,
        permissionUpdates: r
    };
})(function (e) {
    let { canSyncChannel: t, category: r, channel: s, filteredMembers: a, filteredRoles: c, guild: d, isPrivateGuildChannel: h, locked: m, permissionUpdates: g } = e,
        [p, f] = l.useState(!R.Uu(D.Pl.SEND_MESSAGES, s));
    if (null == s || null == d) return null;
    let j = {
        title: M.intl.string(M.t.BAZMBg),
        subtitle: M.intl.string(M.t.XLrZys)
    };
    return (
        s.isCategory() && ((j.title = M.intl.string(M.t['/uELTk'])), (j.subtitle = M.intl.string(M.t['8iAg3d']))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.vwX, {
                    tag: 'h1',
                    children: j.title
                }),
                (0, i.jsx)(o.R94, { children: j.subtitle }),
                null != r && t
                    ? m
                        ? (0, i.jsx)(A.Z, {
                              canSync: !1,
                              icon: o.DuK,
                              noticeText: M.intl.format(M.t.ETJqLi, { categoryName: r.name })
                          })
                        : (0, i.jsx)(A.Z, {
                              buttonText: M.intl.string(M.t.NVwuHh),
                              canSync: !0,
                              icon: (0, o.GSL)(Z.Z),
                              noticeText: M.intl.format(M.t.OIhm0N, { categoryName: r.name }),
                              onClick: function () {
                                  null != r &&
                                      (0, o.ZDy)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 170509));
                                          return (t) =>
                                              (0, i.jsx)(
                                                  e,
                                                  V(U({}, t), {
                                                      channel: s,
                                                      category: r,
                                                      onConfirm: async () => {
                                                          let { guild_id: e } = r,
                                                              t = U({}, r.permissionOverwrites);
                                                          (null != e && null == t[e] && (t[e] = R.we(e)), (await (0, x.u)(s, t[e].deny, t[e].allow)) && (0, u.wk)(s.id, { permissionOverwrites: Object.values(t) }));
                                                      }
                                                  })
                                              );
                                      });
                              }
                          })
                    : null,
                s.isGuildStageVoice()
                    ? (0, i.jsx)(H, {
                          guild: d,
                          channel: s,
                          permissionUpdates: g
                      })
                    : null,
                (0, i.jsx)(G, {
                    channel: s,
                    guild: d,
                    isPrivateGuildChannel: h,
                    roles: c,
                    members: a
                }),
                !1,
                (0, i.jsx)(_.Z, {})
            ]
        })
    );
});
