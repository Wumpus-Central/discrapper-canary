n.d(t, { ZP: () => R });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(399606),
    s = n(481060),
    o = n(493683),
    c = n(906732),
    d = n(979264),
    u = n(69882),
    h = n(251794),
    p = n(386696),
    m = n(946273),
    f = n(910693),
    g = n(314897),
    _ = n(271383),
    C = n(430824),
    x = n(496675),
    v = n(158776),
    E = n(885110),
    I = n(594174),
    b = n(572004),
    Z = n(5192),
    N = n(51144),
    T = n(308083),
    S = n(388032),
    j = n(125712);
function y(e) {
    let { user: t, guildId: n, onClose: l } = e,
        a = t.id,
        o = (0, r.e7)([E.Z, v.Z, g.default], () => (a === g.default.getId() ? E.Z.getStatus() : v.Z.getStatus(a, n)), [a, n]);
    return (0, i.jsxs)('div', {
        className: j.topRow,
        children: [
            (0, i.jsxs)('div', {
                className: j.memberNameContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: j.memberAvatar,
                        children: (0, i.jsx)(s.qEK, {
                            src: t.getAvatarURL(n, 48),
                            'aria-label': t.username,
                            size: s.EFr.SIZE_48,
                            status: o
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: j.memberNameAndTagContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: j.memberNameTextContainer,
                                children: [
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-lg/medium',
                                        children: (0, i.jsx)(s.PUh, {
                                            name: Z.ZP.getName(n, null, t),
                                            color: s.TVs.colors.HEADER_PRIMARY.css
                                        })
                                    }),
                                    (0, i.jsx)(d.ZP, {
                                        primaryGuild: null == t ? void 0 : t.primaryGuild,
                                        userId: null == t ? void 0 : t.id,
                                        contextGuildId: n,
                                        badgeSize: T.NC.SIZE_16,
                                        textVariant: 'heading-md/semibold',
                                        className: j.memberClanTag,
                                        containerClassName: j.memberClanTagContainer
                                    })
                                ]
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-md/medium',
                                color: 'text-normal',
                                children: N.ZP.getUserTag(t)
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-md/medium',
                color: 'text-normal',
                children: (0, i.jsx)(s.P3F, {
                    className: j.closeAction,
                    onClick: l,
                    children: (0, i.jsx)(s.Dio, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })
            })
        ]
    });
}
function A(e) {
    let { tag: t = 'div', text: n, disabled: l, children: r, onClick: o, ...c } = e;
    return (0, i.jsx)(s.ua7, {
        text: n,
        children: (e) =>
            (0, i.jsx)(s.P3F, {
                ...c,
                ...e,
                tag: t,
                'aria-label': n,
                className: a()(j.bottomRowAction, { [j.bottomRowActionDisabled]: l }),
                onClick: l ? void 0 : o,
                children: (0, i.jsx)('div', {
                    className: j.innerBottomRowAction,
                    children: r
                })
            })
    });
}
function P(e) {
    let { user: t, member: l, guildId: a } = e,
        d = (0, r.e7)([C.Z], () => C.Z.getGuild(a)),
        {
            canKickUser: _,
            canBanUser: v,
            canModerateMembers: E
        } = (0, r.cj)(
            [x.Z, I.default, C.Z],
            () => ({
                canKickUser: (0, m.BK)(t, d),
                canBanUser: (0, m.mm)(t, d),
                canModerateMembers: null != d && (0, p.F)(d.id, t.id, [I.default, C.Z, x.Z])
            }),
            [t, d]
        ),
        Z = (0, u.b)(l),
        { analyticsLocations: N, newestAnalyticsLocation: T } = (0, c.ZP)(),
        y = (0, f.sE)(a, {
            targetUserId: t.id,
            location: T,
            locations: N
        }),
        P = (0, r.e7)([g.default], () => g.default.getId() === (null == t ? void 0 : t.id));
    return (0, i.jsxs)('div', {
        className: j.bottomRow,
        children: [
            (0, i.jsx)(A, {
                disabled: P,
                text: S.intl.string(S.t['g33r/P']),
                onClick: () => {
                    o.Z.openPrivateChannel(t.id);
                },
                children: (0, i.jsx)(s.kBi, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 24,
                    height: 24
                })
            }),
            (0, i.jsx)(A, {
                disabled: !_,
                text: S.intl.string(S.t['3glT6e']),
                onClick: () => {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await n.e('5454').then(n.bind(n, 854360));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                location: T,
                                guildId: a,
                                user: t
                            });
                    });
                },
                children: (0, i.jsx)(s.I9k, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: s.TVs.colors.TEXT_NORMAL.css
                })
            }),
            (0, i.jsx)(A, {
                disabled: !v,
                text: S.intl.string(S.t['5MBJ5O']),
                onClick: () => {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await n.e('43350').then(n.bind(n, 98746));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                location: T,
                                guildId: a,
                                user: t
                            });
                    });
                },
                children: (0, i.jsx)(s.pgN, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: s.TVs.colors.TEXT_NORMAL.css
                })
            }),
            (0, i.jsx)(A, {
                disabled: !E,
                text: Z ? S.intl.string(S.t.N86XcH) : S.intl.string(S.t.kTlLr6),
                onClick: () => {
                    Z
                        ? (0, h.q)({
                              guildId: l.guildId,
                              userId: l.userId,
                              anaylticsLocations: N
                          })
                        : (0, h.z)({
                              guildId: l.guildId,
                              userId: l.userId,
                              anaylticsLocations: N
                          });
                },
                children: (0, i.jsx)(s.YlB, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: s.TVs.colors.TEXT_NORMAL.css
                })
            }),
            (0, i.jsx)(A, {
                text: S.intl.string(S.t.IHTjzM),
                onClick: () => {
                    y(f.jQ.COPY_ID), (0, b.JG)(t.id);
                },
                disabled: !b.wS,
                children: (0, i.jsx)(s.VuL, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: s.TVs.colors.TEXT_NORMAL.css
                })
            })
        ]
    });
}
function R(e) {
    let { userId: t, guildId: n, onClose: l } = e,
        a = (0, r.e7)([I.default], () => I.default.getUser(t), [t]),
        s = (0, r.e7)([_.ZP], () => _.ZP.getMember(n, t), [n, t]);
    return null == a || null == s
        ? null
        : (0, i.jsxs)('div', {
              className: j.container,
              children: [
                  (0, i.jsx)(y, {
                      user: a,
                      guildId: n,
                      onClose: l
                  }),
                  (0, i.jsx)(P, {
                      user: a,
                      member: s,
                      guildId: n
                  })
              ]
          });
}
