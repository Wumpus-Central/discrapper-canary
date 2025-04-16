n.d(t, { Z: () => z }), n(388685);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
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
    N = n(200498),
    v = n(146085),
    y = n(192079),
    C = n(277053),
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
    W = n(71080),
    D = n(981631),
    L = n(231338),
    A = n(388032),
    M = n(690550);
function k(e) {
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
function B(e, t) {
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
function V(e) {
    let { channel: t, roles: n, members: r, disabledReason: l, getRemoveTooltipHint: a } = e;
    return (0, i.jsx)(o.aVo, {
        className: M.roleMemberList,
        sections: [n.length, r.length],
        renderRow: function (e) {
            let u,
                x,
                j,
                { section: b, row: v } = e,
                y = !1;
            switch (b) {
                case W.m$.ROLES:
                    var C;
                    (j =
                        (x = n[v]).rowType === W.aC.ROLE && (null == (C = x.tags) ? void 0 : C.guild_connections) === null
                            ? (0, i.jsx)(p.Z, {
                                  className: M.shield,
                                  color: x.colorString,
                                  size: 20
                              })
                            : (0, i.jsx)(o.lZ8, {
                                  size: 'custom',
                                  className: M.shield,
                                  color: x.colorString,
                                  height: 20
                              })),
                        (u = (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)('div', {
                                    className: M.rowHeight,
                                    children: j
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    className: M.rowLabel,
                                    color: x.disabled ? 'text-muted' : 'text-normal',
                                    children: x.name
                                })
                            ]
                        })),
                        (y = x.disabled);
                    break;
                case W.m$.MEMBERS:
                    (x = r[v]),
                        (u = (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(o.qEK, {
                                    src: x.avatarURL,
                                    size: o.EFr.SIZE_24,
                                    'aria-hidden': !0
                                }),
                                (0, i.jsx)(o.Text, {
                                    className: M.rowLabel,
                                    variant: 'text-sm/normal',
                                    children: x.name
                                }),
                                x.bot &&
                                    (0, i.jsx)(m.Z, {
                                        verified: x.verifiedBot,
                                        className: M.rowBotTag
                                    }),
                                null != x.nickname &&
                                    (0, i.jsx)(o.Text, {
                                        color: 'text-muted',
                                        className: M.rowLabelSubText,
                                        variant: 'text-sm/normal',
                                        children: x.username
                                    })
                            ]
                        })),
                        (y = x.disabled);
                    break;
                default:
                    x = null;
            }
            if (null == x) return null;
            let S = !y && null == l && null != x.id;
            return (0, i.jsxs)(
                f.Z,
                {
                    justify: f.Z.Justify.BETWEEN,
                    align: f.Z.Align.CENTER,
                    className: M.memberRow,
                    children: [
                        (0, i.jsx)(f.Z, {
                            justify: f.Z.Justify.START,
                            align: f.Z.Align.CENTER,
                            className: M.__invalid_memberRowBody,
                            children: u
                        }),
                        (0, i.jsx)(o.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/normal',
                            children: R.zB(x.rowType)
                        }),
                        x.rowType !== W.aC.EMPTY_STATE &&
                            (0, i.jsx)(o.DY3, {
                                className: M.removeIconContainer,
                                text: null != l ? l : a(x.rowType, x.disabled),
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
                                                title: A.NW.string(A.t.GuPYQE),
                                                body: A.NW.format(A.t.xERCnZ, { name: n }),
                                                cancelText: A.NW.string(A.t['ETE/oK']),
                                                onConfirm: () =>
                                                    (function (e, n) {
                                                        if (t.isGuildStageVoice()) {
                                                            let i = (0, N._L)(e, n === W.aC.ROLE ? g.BN.ROLE : g.BN.MEMBER, t);
                                                            (0, N.Os)(i) ? d.Z.clearPermissionOverwrite(t.id, i.id) : (0, h.hw)(t.id, [i]);
                                                        } else d.Z.clearPermissionOverwrite(t.id, e);
                                                    })(e, i)
                                            }))
                                        );
                                    },
                                    'aria-disabled': !S,
                                    'aria-label': A.NW.string(A.t.N86XcH),
                                    children: (0, i.jsx)(o.k$p, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: s()(M.removeIcon, { [M.disabledRemoveIcon]: y || l })
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
                case W.m$.ROLES:
                    return (0, i.jsx)(H, { title: A.NW.string(A.t.LPJmLy) }, 'roles-title');
                case W.m$.MEMBERS:
                    return (0, i.jsx)(H, { title: A.NW.string(A.t['9Oq93t']) }, 'members-title');
            }
        },
        sectionHeight: 49
    });
}
function G(e) {
    let { guild: t, channel: r, permissionUpdates: l } = e,
        c = (0, a.e7)([w.Z], () => w.Z.getRoles(t.id)),
        d = R.RZ(t, c, r, v.yP, l),
        u = (0, a.e7)([S.ZP], () => R.cR(S.ZP.getMemberIds(t.id), r, t, v.yP, l)),
        h = (0, N.nG)(r.id);
    function g() {
        (0, o.ZDy)(async () => {
            let { default: e } = await n.e('46786').then(n.bind(n, 388131));
            return (t) => (0, i.jsx)(e, B(k({}, t), { channelId: r.id }));
        });
    }
    return (0, i.jsxs)('div', {
        className: s()(M.settingCard, M.active),
        children: [
            (0, i.jsx)(I.Z, {
                label: A.NW.string(A.t.StpcFR),
                description: A.NW.string(A.t.f7VbhI),
                icon: (0, i.jsx)(o.ewx, {
                    size: 'custom',
                    color: 'currentColor',
                    className: M.cardIcon,
                    height: 20,
                    width: 20
                }),
                id: 'StageModeratorSettingCard'
            }),
            (0, i.jsxs)('div', {
                className: M.cardFolder,
                children: [
                    (0, i.jsxs)(f.Z, {
                        justify: f.Z.Justify.BETWEEN,
                        align: f.Z.Align.CENTER,
                        className: M.folderHeader,
                        children: [
                            (0, i.jsx)(o.vwX, {
                                tag: 'h5',
                                className: M.folderTitle,
                                children: A.NW.string(A.t['7BWDRU'])
                            }),
                            (0, i.jsx)(o.ua7, {
                                text: A.NW.string(A.t.arRuER),
                                shouldShow: !h,
                                children: (e) =>
                                    (0, i.jsx)(
                                        o.zxk,
                                        B(k({}, e), {
                                            size: o.zxk.Sizes.SMALL,
                                            color: o.zxk.Colors.BRAND,
                                            onClick: g,
                                            disabled: !h,
                                            children: A.NW.string(A.t.dMJ3Y2)
                                        })
                                    )
                            })
                        ]
                    }),
                    (0, i.jsx)(V, {
                        channel: r,
                        roles: d,
                        members: u,
                        disabledReason: h ? null : A.NW.string(A.t.arRuER),
                        getRemoveTooltipHint: y.kk
                    })
                ]
            })
        ]
    });
}
function U(e) {
    let { guild: t, channel: r, isPrivateGuildChannel: l, roles: c, members: d } = e,
        u = (0, a.e7)([O.Z], () => O.Z.can(L.Pl.ADMINISTRATOR, t)),
        h = E.Uu(L.Pl.VIEW_CHANNEL, t),
        g = E.Uu(L.Pl.ADMINISTRATOR, t);
    async function m() {
        let e = r.accessPermissions,
            s = Z.default.getCurrentUser();
        if (!l && null != (await (0, j.T)(t.id, r.id)))
            return void (0, o.ZDy)(async () => {
                let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 878678));
                return (n) =>
                    (0, i.jsx)(
                        e,
                        B(k({}, n), {
                            confirmButtonColor: o.Ttl.BRAND,
                            header: A.NW.string(A.t.ZzdgUl),
                            confirmText: A.NW.string(A.t.BddRzc),
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: A.NW.format(A.t.DwY2vL, {
                                    onClick: () => {
                                        b.Z.open(t.id, D.pNK.ONBOARDING), n.onClose();
                                    }
                                })
                            })
                        })
                    );
            });
        R.$e(r, e, l), l || null == s || u || R.Yh(r, e);
    }
    let p = {
        title: A.NW.string(A.t.aUI70t),
        subtitle: A.NW.string(A.t.hfbjIC),
        formLabel: A.NW.string(A.t.P6eCbG)
    };
    return (
        r.isCategory() ? ((p.title = A.NW.string(A.t.lEPAZ2)), (p.subtitle = A.NW.string(A.t['RQUk6+'])), (p.formLabel = A.NW.string(A.t['8VIxJi']))) : r.type === D.d4z.GUILD_VOICE && (p.subtitle = A.NW.string(A.t.cLjvKi)),
        (0, i.jsxs)('div', {
            className: s()(M.settingCard, { [M.active]: l }),
            children: [
                (0, i.jsx)(I.Z, {
                    description: p.subtitle,
                    icon: (0, i.jsx)(o.mBM, {
                        size: 'custom',
                        color: 'currentColor',
                        className: M.cardIcon,
                        height: 20,
                        width: 20
                    }),
                    id: 'PrivateChannelSettingCard',
                    label: p.title,
                    onChange: m,
                    value: l
                }),
                (0, i.jsxs)('div', {
                    className: M.cardFolder,
                    children: [
                        g &&
                            (0, i.jsx)('div', {
                                className: M.adminWarning,
                                children: (0, i.jsx)(o.Wn, {
                                    messageType: o.QYI.WARNING,
                                    children: A.NW.string(A.t['5f3HIC'])
                                })
                            }),
                        !h &&
                            !g &&
                            !l &&
                            (0, i.jsx)('div', {
                                className: M.adminWarning,
                                children: (0, i.jsx)(o.Wn, {
                                    messageType: o.QYI.WARNING,
                                    children: A.NW.string(A.t.ZAk4Q0)
                                })
                            }),
                        l &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)(f.Z, {
                                        justify: f.Z.Justify.BETWEEN,
                                        align: f.Z.Align.CENTER,
                                        className: M.folderHeader,
                                        children: [
                                            (0, i.jsx)(o.vwX, {
                                                tag: 'h5',
                                                className: M.folderTitle,
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
                                                                B(k({}, t), {
                                                                    channelId: r.id,
                                                                    inSettings: !0
                                                                })
                                                            );
                                                    });
                                                },
                                                children: A.NW.string(A.t.dMJ3Y2)
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(V, {
                                        channel: r,
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
            (0, i.jsx)(o.$i$, { className: M.divider }),
            (0, i.jsx)(o.vwX, {
                className: s()(M.folderTitle, M.sectionTitle),
                tag: 'h5',
                children: t
            })
        ]
    });
}
let z = a.ZP.connectStores([C.Z, O.Z, S.ZP, w.Z], () => {
    let e,
        t = C.Z.channel,
        n = C.Z.category,
        i = [],
        r = [],
        l = {},
        s = !1;
    if (null != t) {
        e = w.Z.getGuild(t.getGuildId());
        let n = S.ZP.getMemberIds(null == e ? void 0 : e.id);
        if (null != e) {
            let a = w.Z.getRoles(e.id);
            (l = C.Z.editedPermissionIds.reduce((e, t) => {
                let n = C.Z.getPermissionOverwrite(t);
                return null != n && (e[t] = n), e;
            }, {})),
                (i = R.kA(e, a, t, t.accessPermissions, l)),
                (r = R.cR(n, t, e, t.accessPermissions, l)),
                (s = R.Yk(t, l));
        }
    }
    return {
        canSyncChannel: null != n && O.Z.can(L.Pl.MANAGE_ROLES, n),
        category: n,
        channel: t,
        filteredMembers: r,
        filteredRoles: i,
        guild: e,
        isPrivateGuildChannel: s,
        locked: C.Z.locked,
        permissionUpdates: l
    };
})(function (e) {
    let { canSyncChannel: t, category: l, channel: s, filteredMembers: a, filteredRoles: c, guild: d, isPrivateGuildChannel: h, locked: g, permissionUpdates: m } = e,
        [p, f] = r.useState(!E.Uu(L.Pl.SEND_MESSAGES, s));
    if (null == s || null == d) return null;
    let j = {
        title: A.NW.string(A.t.BAZMBg),
        subtitle: A.NW.string(A.t.XLrZys)
    };
    return (
        s.isCategory() && ((j.title = A.NW.string(A.t['/uELTk'])), (j.subtitle = A.NW.string(A.t['8iAg3d']))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.vwX, {
                    tag: 'h1',
                    children: j.title
                }),
                (0, i.jsx)(o.R94, { children: j.subtitle }),
                null != l && t
                    ? g
                        ? (0, i.jsx)(P.Z, {
                              canSync: !1,
                              icon: o.DuK,
                              noticeText: A.NW.format(A.t.ETJqLi, { categoryName: l.name })
                          })
                        : (0, i.jsx)(P.Z, {
                              buttonText: A.NW.string(A.t.NVwuHh),
                              canSync: !0,
                              icon: (0, o.GSL)(T.Z),
                              noticeText: A.NW.format(A.t.OIhm0N, { categoryName: l.name }),
                              onClick: function () {
                                  null != l &&
                                      (0, o.ZDy)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 170509));
                                          return (t) =>
                                              (0, i.jsx)(
                                                  e,
                                                  B(k({}, t), {
                                                      channel: s,
                                                      category: l,
                                                      onConfirm: async () => {
                                                          let { guild_id: e } = l,
                                                              t = k({}, l.permissionOverwrites);
                                                          null != e && null == t[e] && (t[e] = E.we(e)), (await (0, x.u)(s, t[e].deny, t[e].allow)) && (0, u.wk)(s.id, { permissionOverwrites: Object.values(t) });
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
                          permissionUpdates: m
                      })
                    : null,
                (0, i.jsx)(U, {
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
