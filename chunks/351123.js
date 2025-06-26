n.d(t, { Z: () => F }), n(388685);
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
    g = n(911969),
    m = n(385499),
    p = n(134433),
    f = n(600164),
    j = n(156699),
    x = n(693196),
    b = n(434404),
    v = n(200498),
    y = n(146085),
    C = n(192079),
    N = n(277053),
    S = n(271383),
    E = n(430824),
    O = n(496675),
    Z = n(594174),
    T = n(903386),
    w = n(700785),
    R = n(605436),
    I = n(27544),
    _ = n(415236),
    P = n(182905),
    A = n(71080),
    L = n(981631),
    D = n(231338),
    M = n(388032),
    k = n(690550);
function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
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
        className: k.roleMemberList,
        sections: [n.length, l.length],
        renderRow: function (e) {
            let u,
                j,
                x,
                { section: b, row: y } = e,
                C = !1;
            switch (b) {
                case A.m$.ROLES:
                    var N;
                    (x =
                        (j = n[y]).rowType === A.aC.ROLE && (null == (N = j.tags) ? void 0 : N.guild_connections) === null
                            ? (0, i.jsx)(p.Z, {
                                  className: k.shield,
                                  color: j.colorString,
                                  size: 20
                              })
                            : (0, i.jsx)(o.lZ8, {
                                  size: 'custom',
                                  className: k.shield,
                                  color: j.colorString,
                                  height: 20
                              })),
                        (u = (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)('div', {
                                    className: k.rowHeight,
                                    children: x
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    className: k.rowLabel,
                                    color: j.disabled ? 'text-muted' : 'text-default',
                                    children: j.name
                                })
                            ]
                        })),
                        (C = j.disabled);
                    break;
                case A.m$.MEMBERS:
                    (j = l[y]),
                        (u = (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(o.qEK, {
                                    src: j.avatarURL,
                                    size: o.EFr.SIZE_24,
                                    'aria-hidden': !0
                                }),
                                (0, i.jsx)(o.Text, {
                                    className: k.rowLabel,
                                    variant: 'text-sm/normal',
                                    children: j.name
                                }),
                                j.bot &&
                                    (0, i.jsx)(m.Z, {
                                        verified: j.verifiedBot,
                                        className: k.rowBotTag
                                    }),
                                null != j.nickname &&
                                    (0, i.jsx)(o.Text, {
                                        color: 'text-muted',
                                        className: k.rowLabelSubText,
                                        variant: 'text-sm/normal',
                                        children: j.username
                                    })
                            ]
                        })),
                        (C = j.disabled);
                    break;
                default:
                    j = null;
            }
            if (null == j) return null;
            let S = !C && null == r && null != j.id;
            return (0, i.jsxs)(
                f.Z,
                {
                    justify: f.Z.Justify.BETWEEN,
                    align: f.Z.Align.CENTER,
                    className: k.memberRow,
                    children: [
                        (0, i.jsx)(f.Z, {
                            justify: f.Z.Justify.START,
                            align: f.Z.Align.CENTER,
                            className: k.__invalid_memberRowBody,
                            children: u
                        }),
                        (0, i.jsx)(o.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/normal',
                            children: R.zB(j.rowType)
                        }),
                        j.rowType !== A.aC.EMPTY_STATE &&
                            (0, i.jsx)(o.DY3, {
                                className: k.removeIconContainer,
                                text: null != r ? r : a(j.rowType, j.disabled),
                                children: (0, i.jsx)(o.P3F, {
                                    onClick: () => {
                                        var e, n, i;
                                        return (
                                            S &&
                                            null != j &&
                                            ((e = j.id),
                                            (n = j.name),
                                            (i = j.rowType),
                                            void c.Z.show({
                                                title: M.intl.string(M.t.GuPYQE),
                                                body: M.intl.format(M.t.xERCnZ, { name: n }),
                                                cancelText: M.intl.string(M.t['ETE/oK']),
                                                onConfirm: () =>
                                                    (function (e, n) {
                                                        if (t.isGuildStageVoice()) {
                                                            let i = (0, v._L)(e, n === A.aC.ROLE ? g.BN.ROLE : g.BN.MEMBER, t);
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
                                        className: s()(k.removeIcon, { [k.disabledRemoveIcon]: C || r })
                                    })
                                })
                            })
                    ]
                },
                j.id
            );
        },
        rowHeight: 40,
        renderSection: function (e) {
            let { section: t } = e;
            switch (t) {
                case A.m$.ROLES:
                    return (0, i.jsx)(H, { title: M.intl.string(M.t.LPJmLy) }, 'roles-title');
                case A.m$.MEMBERS:
                    return (0, i.jsx)(H, { title: M.intl.string(M.t['9Oq93t']) }, 'members-title');
            }
        },
        sectionHeight: 49
    });
}
function U(e) {
    let { guild: t, channel: l, permissionUpdates: r } = e,
        c = (0, a.e7)([E.Z], () => E.Z.getRoles(t.id)),
        d = R.RZ(t, c, l, y.yP, r),
        u = (0, a.e7)([S.ZP], () => R.cR(S.ZP.getMemberIds(t.id), l, t, y.yP, r)),
        h = (0, v.nG)(l.id);
    function g() {
        (0, o.ZDy)(async () => {
            let { default: e } = await n.e('46786').then(n.bind(n, 388131));
            return (t) => (0, i.jsx)(e, V(B({}, t), { channelId: l.id }));
        });
    }
    return (0, i.jsxs)('div', {
        className: s()(k.settingCard, k.active),
        children: [
            (0, i.jsx)(_.Z, {
                label: M.intl.string(M.t.StpcFR),
                description: M.intl.string(M.t.f7VbhI),
                icon: (0, i.jsx)(o.ewx, {
                    size: 'custom',
                    color: 'currentColor',
                    className: k.cardIcon,
                    height: 20,
                    width: 20
                }),
                id: 'StageModeratorSettingCard'
            }),
            (0, i.jsxs)('div', {
                className: k.cardFolder,
                children: [
                    (0, i.jsxs)(f.Z, {
                        justify: f.Z.Justify.BETWEEN,
                        align: f.Z.Align.CENTER,
                        className: k.folderHeader,
                        children: [
                            (0, i.jsx)(o.vwX, {
                                tag: 'h5',
                                className: k.folderTitle,
                                children: M.intl.string(M.t['7BWDRU'])
                            }),
                            (0, i.jsx)(o.ua7, {
                                text: M.intl.string(M.t.arRuER),
                                shouldShow: !h,
                                children: (e) =>
                                    (0, i.jsx)(
                                        o.zxk,
                                        V(B({}, e), {
                                            size: o.zxk.Sizes.SMALL,
                                            color: o.zxk.Colors.BRAND,
                                            onClick: g,
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
        u = (0, a.e7)([O.Z], () => O.Z.can(D.Pl.ADMINISTRATOR, t)),
        h = w.Uu(D.Pl.VIEW_CHANNEL, t),
        g = w.Uu(D.Pl.ADMINISTRATOR, t);
    async function m() {
        let e = l.accessPermissions,
            s = Z.default.getCurrentUser();
        if (!r && null != (await (0, x.T)(t.id, l.id)))
            return void (0, o.ZDy)(async () => {
                let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 878678));
                return (n) =>
                    (0, i.jsx)(
                        e,
                        V(B({}, n), {
                            confirmButtonColor: o.Ttl.BRAND,
                            header: M.intl.string(M.t.ZzdgUl),
                            confirmText: M.intl.string(M.t.BddRzc),
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: M.intl.format(M.t.DwY2vL, {
                                    onClick: () => {
                                        b.Z.open(t.id, L.pNK.ONBOARDING), n.onClose();
                                    }
                                })
                            })
                        })
                    );
            });
        R.$e(l, e, r), r || null == s || u || R.Yh(l, e);
    }
    let p = {
        title: M.intl.string(M.t.aUI70t),
        subtitle: M.intl.string(M.t.hfbjIC),
        formLabel: M.intl.string(M.t.P6eCbG)
    };
    return (
        l.isCategory() ? ((p.title = M.intl.string(M.t.lEPAZ2)), (p.subtitle = M.intl.string(M.t['RQUk6+'])), (p.formLabel = M.intl.string(M.t['8VIxJi']))) : l.type === L.d4z.GUILD_VOICE && (p.subtitle = M.intl.string(M.t.cLjvKi)),
        (0, i.jsxs)('div', {
            className: s()(k.settingCard, { [k.active]: r }),
            children: [
                (0, i.jsx)(_.Z, {
                    description: p.subtitle,
                    icon: (0, i.jsx)(o.mBM, {
                        size: 'custom',
                        color: 'currentColor',
                        className: k.cardIcon,
                        height: 20,
                        width: 20
                    }),
                    id: 'PrivateChannelSettingCard',
                    label: p.title,
                    onChange: m,
                    value: r
                }),
                (0, i.jsxs)('div', {
                    className: k.cardFolder,
                    children: [
                        g &&
                            (0, i.jsx)('div', {
                                className: k.adminWarning,
                                children: (0, i.jsx)(o.Wn, {
                                    messageType: o.QYI.WARNING,
                                    children: M.intl.string(M.t['5f3HIC'])
                                })
                            }),
                        !h &&
                            !g &&
                            !r &&
                            (0, i.jsx)('div', {
                                className: k.adminWarning,
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
                                        className: k.folderHeader,
                                        children: [
                                            (0, i.jsx)(o.vwX, {
                                                tag: 'h5',
                                                className: k.folderTitle,
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
                                                                V(B({}, t), {
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
                                        getRemoveTooltipHint: R.yv
                                    })
                                ]
                            })
                    ]
                })
            ]
        })
    );
}
function H(e) {
    let { title: t } = e;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(o.$i$, { className: k.divider }),
            (0, i.jsx)(o.vwX, {
                className: s()(k.folderTitle, k.sectionTitle),
                tag: 'h5',
                children: t
            })
        ]
    });
}
let F = a.ZP.connectStores([N.Z, O.Z, S.ZP, E.Z], () => {
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
            let a = E.Z.getRoles(e.id);
            (r = N.Z.editedPermissionIds.reduce((e, t) => {
                let n = N.Z.getPermissionOverwrite(t);
                return null != n && (e[t] = n), e;
            }, {})),
                (i = R.kA(e, a, t, t.accessPermissions, r)),
                (l = R.cR(n, t, e, t.accessPermissions, r)),
                (s = R.Yk(t, r));
        }
    }
    return {
        canSyncChannel: null != n && O.Z.can(D.Pl.MANAGE_ROLES, n),
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
    let { canSyncChannel: t, category: r, channel: s, filteredMembers: a, filteredRoles: c, guild: d, isPrivateGuildChannel: h, locked: g, permissionUpdates: m } = e,
        [p, f] = l.useState(!w.Uu(D.Pl.SEND_MESSAGES, s));
    if (null == s || null == d) return null;
    let x = {
        title: M.intl.string(M.t.BAZMBg),
        subtitle: M.intl.string(M.t.XLrZys)
    };
    return (
        s.isCategory() && ((x.title = M.intl.string(M.t['/uELTk'])), (x.subtitle = M.intl.string(M.t['8iAg3d']))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.vwX, {
                    tag: 'h1',
                    children: x.title
                }),
                (0, i.jsx)(o.R94, { children: x.subtitle }),
                null != r && t
                    ? g
                        ? (0, i.jsx)(P.Z, {
                              canSync: !1,
                              icon: o.DuK,
                              noticeText: M.intl.format(M.t.ETJqLi, { categoryName: r.name })
                          })
                        : (0, i.jsx)(P.Z, {
                              buttonText: M.intl.string(M.t.NVwuHh),
                              canSync: !0,
                              icon: (0, o.GSL)(T.Z),
                              noticeText: M.intl.format(M.t.OIhm0N, { categoryName: r.name }),
                              onClick: function () {
                                  null != r &&
                                      (0, o.ZDy)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 170509));
                                          return (t) =>
                                              (0, i.jsx)(
                                                  e,
                                                  V(B({}, t), {
                                                      channel: s,
                                                      category: r,
                                                      onConfirm: async () => {
                                                          let { guild_id: e } = r,
                                                              t = B({}, r.permissionOverwrites);
                                                          null != e && null == t[e] && (t[e] = w.we(e)), (await (0, j.u)(s, t[e].deny, t[e].allow)) && (0, u.wk)(s.id, { permissionOverwrites: Object.values(t) });
                                                      }
                                                  })
                                              );
                                      });
                              }
                          })
                    : null,
                s.isGuildStageVoice()
                    ? (0, i.jsx)(U, {
                          guild: d,
                          channel: s,
                          permissionUpdates: m
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
                (0, i.jsx)(I.Z, {})
            ]
        })
    );
});
