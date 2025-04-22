n.d(t, { Z: () => z }), n(388685);
var i = n(200651),
    l = n(192379),
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
    x = n(156699),
    j = n(693196),
    b = n(434404),
    v = n(200498),
    y = n(146085),
    C = n(192079),
    N = n(277053),
    S = n(271383),
    w = n(430824),
    O = n(496675),
    Z = n(594174),
    T = n(903386),
    E = n(700785),
    R = n(605436),
    _ = n(27544),
    I = n(415236),
    P = n(182905),
    D = n(71080),
    L = n(981631),
    A = n(231338),
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
function G(e) {
    let { channel: t, roles: n, members: l, disabledReason: r, getRemoveTooltipHint: a } = e;
    return (0, i.jsx)(o.aVo, {
        className: k.roleMemberList,
        sections: [n.length, l.length],
        renderRow: function (e) {
            let u,
                x,
                j,
                { section: b, row: y } = e,
                C = !1;
            switch (b) {
                case D.m$.ROLES:
                    var N;
                    (j =
                        (x = n[y]).rowType === D.aC.ROLE && (null == (N = x.tags) ? void 0 : N.guild_connections) === null
                            ? (0, i.jsx)(p.Z, {
                                  className: k.shield,
                                  color: x.colorString,
                                  size: 20
                              })
                            : (0, i.jsx)(o.lZ8, {
                                  size: 'custom',
                                  className: k.shield,
                                  color: x.colorString,
                                  height: 20
                              })),
                        (u = (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)('div', {
                                    className: k.rowHeight,
                                    children: j
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    className: k.rowLabel,
                                    color: x.disabled ? 'text-muted' : 'text-normal',
                                    children: x.name
                                })
                            ]
                        })),
                        (C = x.disabled);
                    break;
                case D.m$.MEMBERS:
                    (x = l[y]),
                        (u = (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(o.qEK, {
                                    src: x.avatarURL,
                                    size: o.EFr.SIZE_24,
                                    'aria-hidden': !0
                                }),
                                (0, i.jsx)(o.Text, {
                                    className: k.rowLabel,
                                    variant: 'text-sm/normal',
                                    children: x.name
                                }),
                                x.bot &&
                                    (0, i.jsx)(m.Z, {
                                        verified: x.verifiedBot,
                                        className: k.rowBotTag
                                    }),
                                null != x.nickname &&
                                    (0, i.jsx)(o.Text, {
                                        color: 'text-muted',
                                        className: k.rowLabelSubText,
                                        variant: 'text-sm/normal',
                                        children: x.username
                                    })
                            ]
                        })),
                        (C = x.disabled);
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
                            children: R.zB(x.rowType)
                        }),
                        x.rowType !== D.aC.EMPTY_STATE &&
                            (0, i.jsx)(o.DY3, {
                                className: k.removeIconContainer,
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
                                                            let i = (0, v._L)(e, n === D.aC.ROLE ? g.BN.ROLE : g.BN.MEMBER, t);
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
                x.id
            );
        },
        rowHeight: 40,
        renderSection: function (e) {
            let { section: t } = e;
            switch (t) {
                case D.m$.ROLES:
                    return (0, i.jsx)(H, { title: M.intl.string(M.t.LPJmLy) }, 'roles-title');
                case D.m$.MEMBERS:
                    return (0, i.jsx)(H, { title: M.intl.string(M.t['9Oq93t']) }, 'members-title');
            }
        },
        sectionHeight: 49
    });
}
function U(e) {
    let { guild: t, channel: l, permissionUpdates: r } = e,
        c = (0, a.e7)([w.Z], () => w.Z.getRoles(t.id)),
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
            (0, i.jsx)(I.Z, {
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
                    (0, i.jsx)(G, {
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
function W(e) {
    let { guild: t, channel: l, isPrivateGuildChannel: r, roles: c, members: d } = e,
        u = (0, a.e7)([O.Z], () => O.Z.can(A.Pl.ADMINISTRATOR, t)),
        h = E.Uu(A.Pl.VIEW_CHANNEL, t),
        g = E.Uu(A.Pl.ADMINISTRATOR, t);
    async function m() {
        let e = l.accessPermissions,
            s = Z.default.getCurrentUser();
        if (!r && null != (await (0, j.T)(t.id, l.id)))
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
                (0, i.jsx)(I.Z, {
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
                                    (0, i.jsx)(G, {
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
let z = a.ZP.connectStores([N.Z, O.Z, S.ZP, w.Z], () => {
    let e,
        t = N.Z.channel,
        n = N.Z.category,
        i = [],
        l = [],
        r = {},
        s = !1;
    if (null != t) {
        e = w.Z.getGuild(t.getGuildId());
        let n = S.ZP.getMemberIds(null == e ? void 0 : e.id);
        if (null != e) {
            let a = w.Z.getRoles(e.id);
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
        canSyncChannel: null != n && O.Z.can(A.Pl.MANAGE_ROLES, n),
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
        [p, f] = l.useState(!E.Uu(A.Pl.SEND_MESSAGES, s));
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
                                                          null != e && null == t[e] && (t[e] = E.we(e)), (await (0, x.u)(s, t[e].deny, t[e].allow)) && (0, u.wk)(s.id, { permissionOverwrites: Object.values(t) });
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
                (0, i.jsx)(W, {
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
