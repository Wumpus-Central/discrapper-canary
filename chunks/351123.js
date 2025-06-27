n.d(t, { Z: () => z }), n(388685);
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
    x = n(156699),
    j = n(693196),
    b = n(434404),
    v = n(200498),
    y = n(146085),
    C = n(192079),
    N = n(277053),
    S = n(271383),
    E = n(485386),
    O = n(430824),
    Z = n(496675),
    w = n(594174),
    T = n(903386),
    R = n(700785),
    I = n(605436),
    _ = n(27544),
    P = n(415236),
    A = n(182905),
    L = n(71080),
    D = n(981631),
    M = n(231338),
    k = n(388032),
    B = n(690550);
function V(e) {
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
function U(e) {
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
                    (j =
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
                        (C = x.disabled);
                    break;
                case L.m$.MEMBERS:
                    (x = l[y]),
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
                                    (0, i.jsx)(m.Z, {
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
                                                title: k.intl.string(k.t.GuPYQE),
                                                body: k.intl.format(k.t.xERCnZ, { name: n }),
                                                cancelText: k.intl.string(k.t['ETE/oK']),
                                                onConfirm: () =>
                                                    (function (e, n) {
                                                        if (t.isGuildStageVoice()) {
                                                            let i = (0, v._L)(e, n === L.aC.ROLE ? g.BN.ROLE : g.BN.MEMBER, t);
                                                            (0, v.Os)(i) ? d.Z.clearPermissionOverwrite(t.id, i.id) : (0, h.hw)(t.id, [i]);
                                                        } else d.Z.clearPermissionOverwrite(t.id, e);
                                                    })(e, i)
                                            }))
                                        );
                                    },
                                    'aria-disabled': !S,
                                    'aria-label': k.intl.string(k.t.N86XcH),
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
                    return (0, i.jsx)(F, { title: k.intl.string(k.t.LPJmLy) }, 'roles-title');
                case L.m$.MEMBERS:
                    return (0, i.jsx)(F, { title: k.intl.string(k.t['9Oq93t']) }, 'members-title');
            }
        },
        sectionHeight: 49
    });
}
function H(e) {
    let { guild: t, channel: l, permissionUpdates: r } = e,
        c = (0, a.e7)([E.Z], () => E.Z.getRoles(t.id)),
        d = I.RZ(t, c, l, y.yP, r),
        u = (0, a.e7)([S.ZP], () => I.cR(S.ZP.getMemberIds(t.id), l, t, y.yP, r)),
        h = (0, v.nG)(l.id);
    function g() {
        (0, o.ZDy)(async () => {
            let { default: e } = await n.e('46786').then(n.bind(n, 388131));
            return (t) => (0, i.jsx)(e, W(V({}, t), { channelId: l.id }));
        });
    }
    return (0, i.jsxs)('div', {
        className: s()(B.settingCard, B.active),
        children: [
            (0, i.jsx)(P.Z, {
                label: k.intl.string(k.t.StpcFR),
                description: k.intl.string(k.t.f7VbhI),
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
                                children: k.intl.string(k.t['7BWDRU'])
                            }),
                            (0, i.jsx)(o.ua7, {
                                text: k.intl.string(k.t.arRuER),
                                shouldShow: !h,
                                children: (e) =>
                                    (0, i.jsx)(
                                        o.zxk,
                                        W(V({}, e), {
                                            size: o.zxk.Sizes.SMALL,
                                            color: o.zxk.Colors.BRAND,
                                            onClick: g,
                                            disabled: !h,
                                            children: k.intl.string(k.t.dMJ3Y2)
                                        })
                                    )
                            })
                        ]
                    }),
                    (0, i.jsx)(U, {
                        channel: l,
                        roles: d,
                        members: u,
                        disabledReason: h ? null : k.intl.string(k.t.arRuER),
                        getRemoveTooltipHint: C.kk
                    })
                ]
            })
        ]
    });
}
function G(e) {
    let { guild: t, channel: l, isPrivateGuildChannel: r, roles: c, members: d } = e,
        u = (0, a.e7)([Z.Z], () => Z.Z.can(M.Pl.ADMINISTRATOR, t)),
        h = R.Uu(M.Pl.VIEW_CHANNEL, t),
        g = R.Uu(M.Pl.ADMINISTRATOR, t);
    async function m() {
        let e = l.accessPermissions,
            s = w.default.getCurrentUser();
        if (!r && null != (await (0, j.T)(t.id, l.id)))
            return void (0, o.ZDy)(async () => {
                let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 878678));
                return (n) =>
                    (0, i.jsx)(
                        e,
                        W(V({}, n), {
                            confirmButtonColor: o.Ttl.BRAND,
                            header: k.intl.string(k.t.ZzdgUl),
                            confirmText: k.intl.string(k.t.BddRzc),
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: k.intl.format(k.t.DwY2vL, {
                                    onClick: () => {
                                        b.Z.open(t.id, D.pNK.ONBOARDING), n.onClose();
                                    }
                                })
                            })
                        })
                    );
            });
        I.$e(l, e, r), r || null == s || u || I.Yh(l, e);
    }
    let p = {
        title: k.intl.string(k.t.aUI70t),
        subtitle: k.intl.string(k.t.hfbjIC),
        formLabel: k.intl.string(k.t.P6eCbG)
    };
    return (
        l.isCategory() ? ((p.title = k.intl.string(k.t.lEPAZ2)), (p.subtitle = k.intl.string(k.t['RQUk6+'])), (p.formLabel = k.intl.string(k.t['8VIxJi']))) : l.type === D.d4z.GUILD_VOICE && (p.subtitle = k.intl.string(k.t.cLjvKi)),
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
                    onChange: m,
                    value: r
                }),
                (0, i.jsxs)('div', {
                    className: B.cardFolder,
                    children: [
                        g &&
                            (0, i.jsx)('div', {
                                className: B.adminWarning,
                                children: (0, i.jsx)(o.Wn, {
                                    messageType: o.QYI.WARNING,
                                    children: k.intl.string(k.t['5f3HIC'])
                                })
                            }),
                        !h &&
                            !g &&
                            !r &&
                            (0, i.jsx)('div', {
                                className: B.adminWarning,
                                children: (0, i.jsx)(o.Wn, {
                                    messageType: o.QYI.WARNING,
                                    children: k.intl.string(k.t.ZAk4Q0)
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
                                                                W(V({}, t), {
                                                                    channelId: l.id,
                                                                    inSettings: !0
                                                                })
                                                            );
                                                    });
                                                },
                                                children: k.intl.string(k.t.dMJ3Y2)
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(U, {
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
let z = a.ZP.connectStores([N.Z, Z.Z, S.ZP, O.Z, E.Z], () => {
    let e,
        t = N.Z.channel,
        n = N.Z.category,
        i = [],
        l = [],
        r = {},
        s = !1;
    if (null != t) {
        e = O.Z.getGuild(t.getGuildId());
        let n = S.ZP.getMemberIds(null == e ? void 0 : e.id);
        if (null != e) {
            let a = E.Z.getRoles(e.id);
            (r = N.Z.editedPermissionIds.reduce((e, t) => {
                let n = N.Z.getPermissionOverwrite(t);
                return null != n && (e[t] = n), e;
            }, {})),
                (i = I.kA(e, a, t, t.accessPermissions, r)),
                (l = I.cR(n, t, e, t.accessPermissions, r)),
                (s = I.Yk(t, r));
        }
    }
    return {
        canSyncChannel: null != n && Z.Z.can(M.Pl.MANAGE_ROLES, n),
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
        [p, f] = l.useState(!R.Uu(M.Pl.SEND_MESSAGES, s));
    if (null == s || null == d) return null;
    let j = {
        title: k.intl.string(k.t.BAZMBg),
        subtitle: k.intl.string(k.t.XLrZys)
    };
    return (
        s.isCategory() && ((j.title = k.intl.string(k.t['/uELTk'])), (j.subtitle = k.intl.string(k.t['8iAg3d']))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.vwX, {
                    tag: 'h1',
                    children: j.title
                }),
                (0, i.jsx)(o.R94, { children: j.subtitle }),
                null != r && t
                    ? g
                        ? (0, i.jsx)(A.Z, {
                              canSync: !1,
                              icon: o.DuK,
                              noticeText: k.intl.format(k.t.ETJqLi, { categoryName: r.name })
                          })
                        : (0, i.jsx)(A.Z, {
                              buttonText: k.intl.string(k.t.NVwuHh),
                              canSync: !0,
                              icon: (0, o.GSL)(T.Z),
                              noticeText: k.intl.format(k.t.OIhm0N, { categoryName: r.name }),
                              onClick: function () {
                                  null != r &&
                                      (0, o.ZDy)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 170509));
                                          return (t) =>
                                              (0, i.jsx)(
                                                  e,
                                                  W(V({}, t), {
                                                      channel: s,
                                                      category: r,
                                                      onConfirm: async () => {
                                                          let { guild_id: e } = r,
                                                              t = V({}, r.permissionOverwrites);
                                                          null != e && null == t[e] && (t[e] = R.we(e)), (await (0, x.u)(s, t[e].deny, t[e].allow)) && (0, u.wk)(s.id, { permissionOverwrites: Object.values(t) });
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
                (0, i.jsx)(_.Z, {})
            ]
        })
    );
});
