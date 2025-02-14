n.d(t, { Z: () => W }), n(47120), n(724458);
var i = n(200651),
    l = n(192379),
    s = n(120356),
    a = n.n(s),
    r = n(442837),
    o = n(481060),
    d = n(668781),
    c = n(493683),
    u = n(787014),
    h = n(741361),
    m = n(911969),
    g = n(385499),
    p = n(134433),
    x = n(600164),
    f = n(156699),
    j = n(693196),
    v = n(434404),
    C = n(200498),
    N = n(146085),
    b = n(192079),
    Z = n(277053),
    T = n(271383),
    S = n(430824),
    E = n(496675),
    R = n(594174),
    y = n(903386),
    _ = n(700785),
    w = n(605436),
    I = n(27544),
    L = n(415236),
    A = n(182905),
    M = n(71080),
    D = n(981631),
    P = n(231338),
    k = n(388032),
    O = n(922240);
function B(e) {
    let { channel: t, roles: n, members: l, disabledReason: s, getRemoveTooltipHint: r } = e;
    return (0, i.jsx)(o.aVo, {
        className: O.roleMemberList,
        sections: [n.length, l.length],
        renderRow: function (e) {
            let u,
                f,
                j,
                { section: v, row: N } = e,
                b = !1;
            switch (v) {
                case M.m$.ROLES:
                    var Z;
                    (j =
                        (f = n[N]).rowType === M.aC.ROLE && (null === (Z = f.tags) || void 0 === Z ? void 0 : Z.guild_connections) === null
                            ? (0, i.jsx)(p.Z, {
                                  className: O.shield,
                                  color: f.colorString,
                                  size: 20
                              })
                            : (0, i.jsx)(o.lZ8, {
                                  size: 'custom',
                                  className: O.shield,
                                  color: f.colorString,
                                  height: 20
                              })),
                        (u = (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)('div', {
                                    className: O.rowHeight,
                                    children: j
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    className: O.rowLabel,
                                    color: f.disabled ? 'text-muted' : 'text-normal',
                                    children: f.name
                                })
                            ]
                        })),
                        (b = f.disabled);
                    break;
                case M.m$.MEMBERS:
                    (f = l[N]),
                        (u = (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(o.qEK, {
                                    src: f.avatarURL,
                                    size: o.EFr.SIZE_24,
                                    'aria-hidden': !0
                                }),
                                (0, i.jsx)(o.Text, {
                                    className: O.rowLabel,
                                    variant: 'text-sm/normal',
                                    children: f.name
                                }),
                                f.bot &&
                                    (0, i.jsx)(g.Z, {
                                        verified: f.verifiedBot,
                                        className: O.rowBotTag
                                    }),
                                null != f.nickname &&
                                    (0, i.jsx)(o.Text, {
                                        color: 'text-muted',
                                        className: O.rowLabelSubText,
                                        variant: 'text-sm/normal',
                                        children: f.username
                                    })
                            ]
                        })),
                        (b = f.disabled);
                    break;
                default:
                    f = null;
            }
            if (null == f) return null;
            let T = !b && null == s && null != f.id;
            return (0, i.jsxs)(
                x.Z,
                {
                    justify: x.Z.Justify.BETWEEN,
                    align: x.Z.Align.CENTER,
                    className: O.memberRow,
                    children: [
                        (0, i.jsx)(x.Z, {
                            justify: x.Z.Justify.START,
                            align: x.Z.Align.CENTER,
                            className: O.__invalid_memberRowBody,
                            children: u
                        }),
                        (0, i.jsx)(o.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/normal',
                            children: w.zB(f.rowType)
                        }),
                        f.rowType !== M.aC.EMPTY_STATE &&
                            (0, i.jsx)(o.DY3, {
                                className: O.removeIconContainer,
                                text: null != s ? s : r(f.rowType, f.disabled),
                                children: (0, i.jsx)(o.P3F, {
                                    onClick: () => {
                                        var e, n, i;
                                        return (
                                            T &&
                                            null != f &&
                                            ((e = f.id),
                                            (n = f.name),
                                            (i = f.rowType),
                                            void d.Z.show({
                                                title: k.intl.string(k.t.GuPYQE),
                                                body: k.intl.format(k.t.xERCnZ, { name: n }),
                                                cancelText: k.intl.string(k.t['ETE/oK']),
                                                onConfirm: () =>
                                                    (function (e, n) {
                                                        if (t.isGuildStageVoice()) {
                                                            let i = (0, C._L)(e, n === M.aC.ROLE ? m.BN.ROLE : m.BN.MEMBER, t);
                                                            (0, C.Os)(i) ? c.Z.clearPermissionOverwrite(t.id, i.id) : (0, h.hw)(t.id, [i]);
                                                        } else c.Z.clearPermissionOverwrite(t.id, e);
                                                    })(e, i)
                                            }))
                                        );
                                    },
                                    'aria-disabled': !T,
                                    'aria-label': k.intl.string(k.t.N86XcH),
                                    children: (0, i.jsx)(o.k$p, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: a()(O.removeIcon, { [O.disabledRemoveIcon]: b || s })
                                    })
                                })
                            })
                    ]
                },
                f.id
            );
        },
        rowHeight: 40,
        renderSection: function (e) {
            let { section: t } = e;
            switch (t) {
                case M.m$.ROLES:
                    return (0, i.jsx)(U, { title: k.intl.string(k.t.LPJmLy) }, 'roles-title');
                case M.m$.MEMBERS:
                    return (0, i.jsx)(U, { title: k.intl.string(k.t['9Oq93t']) }, 'members-title');
            }
        },
        sectionHeight: 49
    });
}
function V(e) {
    let { guild: t, channel: l, permissionUpdates: s } = e,
        d = (0, r.e7)([S.Z], () => S.Z.getRoles(t.id)),
        c = w.RZ(t, d, l, N.yP, s),
        u = (0, r.e7)([T.ZP], () => w.cR(T.ZP.getMemberIds(t.id), l, t, N.yP, s)),
        h = (0, C.nG)(l.id);
    function m() {
        (0, o.ZDy)(async () => {
            let { default: e } = await n.e('46786').then(n.bind(n, 388131));
            return (t) =>
                (0, i.jsx)(e, {
                    ...t,
                    channelId: l.id
                });
        });
    }
    return (0, i.jsxs)('div', {
        className: a()(O.settingCard, O.active),
        children: [
            (0, i.jsx)(L.Z, {
                label: k.intl.string(k.t.StpcFR),
                description: k.intl.string(k.t.f7VbhI),
                icon: (0, i.jsx)(o.ewx, {
                    size: 'custom',
                    color: 'currentColor',
                    className: O.cardIcon,
                    height: 20,
                    width: 20
                }),
                id: 'StageModeratorSettingCard'
            }),
            (0, i.jsxs)('div', {
                className: O.cardFolder,
                children: [
                    (0, i.jsxs)(x.Z, {
                        justify: x.Z.Justify.BETWEEN,
                        align: x.Z.Align.CENTER,
                        className: O.folderHeader,
                        children: [
                            (0, i.jsx)(o.vwX, {
                                tag: 'h5',
                                className: O.folderTitle,
                                children: k.intl.string(k.t['7BWDRU'])
                            }),
                            (0, i.jsx)(o.ua7, {
                                text: k.intl.string(k.t.arRuER),
                                shouldShow: !h,
                                children: (e) =>
                                    (0, i.jsx)(o.zxk, {
                                        ...e,
                                        size: o.zxk.Sizes.SMALL,
                                        color: o.zxk.Colors.BRAND,
                                        onClick: m,
                                        disabled: !h,
                                        children: k.intl.string(k.t.dMJ3Y2)
                                    })
                            })
                        ]
                    }),
                    (0, i.jsx)(B, {
                        channel: l,
                        roles: c,
                        members: u,
                        disabledReason: h ? null : k.intl.string(k.t.arRuER),
                        getRemoveTooltipHint: b.kk
                    })
                ]
            })
        ]
    });
}
function G(e) {
    let { guild: t, channel: l, isPrivateGuildChannel: s, roles: d, members: c } = e,
        u = (0, r.e7)([E.Z], () => E.Z.can(P.Pl.ADMINISTRATOR, t)),
        h = _.Uu(P.Pl.VIEW_CHANNEL, t),
        m = _.Uu(P.Pl.ADMINISTRATOR, t);
    async function g() {
        let e = l.accessPermissions,
            a = R.default.getCurrentUser();
        if (!s && null != (await (0, j.T)(t.id, l.id))) {
            (0, o.ZDy)(async () => {
                let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 878678));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        confirmButtonColor: o.Ttl.BRAND,
                        header: k.intl.string(k.t.ZzdgUl),
                        confirmText: k.intl.string(k.t.BddRzc),
                        children: (0, i.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            children: k.intl.format(k.t.DwY2vL, {
                                onClick: () => {
                                    v.Z.open(t.id, D.pNK.ONBOARDING), n.onClose();
                                }
                            })
                        })
                    });
            });
            return;
        }
        w.$e(l, e, s), s || null == a || u || w.Yh(l, e);
    }
    let p = {
        title: k.intl.string(k.t.aUI70t),
        subtitle: k.intl.string(k.t.hfbjIC),
        formLabel: k.intl.string(k.t.P6eCbG)
    };
    return (
        l.isCategory() ? ((p.title = k.intl.string(k.t.lEPAZ2)), (p.subtitle = k.intl.string(k.t['RQUk6+'])), (p.formLabel = k.intl.string(k.t['8VIxJi']))) : l.type === D.d4z.GUILD_VOICE && (p.subtitle = k.intl.string(k.t.cLjvKi)),
        (0, i.jsxs)('div', {
            className: a()(O.settingCard, { [O.active]: s }),
            children: [
                (0, i.jsx)(L.Z, {
                    description: p.subtitle,
                    icon: (0, i.jsx)(o.mBM, {
                        size: 'custom',
                        color: 'currentColor',
                        className: O.cardIcon,
                        height: 20,
                        width: 20
                    }),
                    id: 'PrivateChannelSettingCard',
                    label: p.title,
                    onChange: g,
                    value: s
                }),
                (0, i.jsxs)('div', {
                    className: O.cardFolder,
                    children: [
                        m &&
                            (0, i.jsx)('div', {
                                className: O.adminWarning,
                                children: (0, i.jsx)(o.Wn, {
                                    messageType: o.QYI.WARNING,
                                    children: k.intl.string(k.t['5f3HIC'])
                                })
                            }),
                        !h &&
                            !m &&
                            !s &&
                            (0, i.jsx)('div', {
                                className: O.adminWarning,
                                children: (0, i.jsx)(o.Wn, {
                                    messageType: o.QYI.WARNING,
                                    children: k.intl.string(k.t.ZAk4Q0)
                                })
                            }),
                        s &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)(x.Z, {
                                        justify: x.Z.Justify.BETWEEN,
                                        align: x.Z.Align.CENTER,
                                        className: O.folderHeader,
                                        children: [
                                            (0, i.jsx)(o.vwX, {
                                                tag: 'h5',
                                                className: O.folderTitle,
                                                children: p.formLabel
                                            }),
                                            (0, i.jsx)(o.zxk, {
                                                size: o.zxk.Sizes.SMALL,
                                                color: o.zxk.Colors.BRAND,
                                                onClick: function () {
                                                    (0, o.ZDy)(async () => {
                                                        let { default: e } = await Promise.resolve().then(n.bind(n, 185413));
                                                        return (t) =>
                                                            (0, i.jsx)(e, {
                                                                ...t,
                                                                channelId: l.id,
                                                                inSettings: !0
                                                            });
                                                    });
                                                },
                                                children: k.intl.string(k.t.dMJ3Y2)
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(B, {
                                        channel: l,
                                        roles: d,
                                        members: c,
                                        getRemoveTooltipHint: w.yv
                                    })
                                ]
                            })
                    ]
                })
            ]
        })
    );
}
function U(e) {
    let { title: t } = e;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(o.$i$, { className: O.divider }),
            (0, i.jsx)(o.vwX, {
                className: a()(O.folderTitle, O.sectionTitle),
                tag: 'h5',
                children: t
            })
        ]
    });
}
let W = r.ZP.connectStores([Z.Z, E.Z, T.ZP, S.Z], () => {
    let e;
    let t = Z.Z.channel,
        n = Z.Z.category,
        i = [],
        l = [],
        s = {},
        a = !1;
    if (null != t) {
        e = S.Z.getGuild(t.getGuildId());
        let n = T.ZP.getMemberIds(null == e ? void 0 : e.id);
        if (null != e) {
            let r = S.Z.getRoles(e.id);
            (s = Z.Z.editedPermissionIds.reduce((e, t) => {
                let n = Z.Z.getPermissionOverwrite(t);
                return null != n && (e[t] = n), e;
            }, {})),
                (i = w.kA(e, r, t, t.accessPermissions, s)),
                (l = w.cR(n, t, e, t.accessPermissions, s)),
                (a = w.Yk(t, s));
        }
    }
    return {
        canSyncChannel: null != n && E.Z.can(P.Pl.MANAGE_ROLES, n),
        category: n,
        channel: t,
        filteredMembers: l,
        filteredRoles: i,
        guild: e,
        isPrivateGuildChannel: a,
        locked: Z.Z.locked,
        permissionUpdates: s
    };
})(function (e) {
    let { canSyncChannel: t, category: s, channel: a, filteredMembers: r, filteredRoles: d, guild: c, isPrivateGuildChannel: h, locked: m, permissionUpdates: g } = e,
        [p, x] = l.useState(!_.Uu(P.Pl.SEND_MESSAGES, a));
    if (null == a || null == c) return null;
    let j = {
        title: k.intl.string(k.t.BAZMBg),
        subtitle: k.intl.string(k.t.XLrZys)
    };
    return (
        a.isCategory() && ((j.title = k.intl.string(k.t['/uELTk'])), (j.subtitle = k.intl.string(k.t['8iAg3d']))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.vwX, {
                    tag: 'h1',
                    children: j.title
                }),
                (0, i.jsx)(o.R94, { children: j.subtitle }),
                null != s && t
                    ? m
                        ? (0, i.jsx)(A.Z, {
                              canSync: !1,
                              icon: o.DuK,
                              noticeText: k.intl.format(k.t.ETJqLi, { categoryName: s.name })
                          })
                        : (0, i.jsx)(A.Z, {
                              buttonText: k.intl.string(k.t.NVwuHh),
                              canSync: !0,
                              icon: (0, o.GSL)(y.Z),
                              noticeText: k.intl.format(k.t.OIhm0N, { categoryName: s.name }),
                              onClick: function () {
                                  null != s &&
                                      (0, o.ZDy)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 170509));
                                          return (t) =>
                                              (0, i.jsx)(e, {
                                                  ...t,
                                                  channel: a,
                                                  category: s,
                                                  onConfirm: async () => {
                                                      let { guild_id: e } = s,
                                                          t = { ...s.permissionOverwrites };
                                                      null != e && null == t[e] && (t[e] = _.we(e)), (await (0, f.u)(a, t[e].deny, t[e].allow)) && (0, u.wk)(a.id, { permissionOverwrites: Object.values(t) });
                                                  }
                                              });
                                      });
                              }
                          })
                    : null,
                a.isGuildStageVoice()
                    ? (0, i.jsx)(V, {
                          guild: c,
                          channel: a,
                          permissionUpdates: g
                      })
                    : null,
                (0, i.jsx)(G, {
                    channel: a,
                    guild: c,
                    isPrivateGuildChannel: h,
                    roles: d,
                    members: r
                }),
                !1,
                (0, i.jsx)(I.Z, {})
            ]
        })
    );
});
