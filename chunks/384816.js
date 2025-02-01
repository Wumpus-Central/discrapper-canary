i.d(n, { Z: () => T });
var t = i(200651);
i(192379);
var l = i(442837),
    o = i(481060),
    s = i(666520),
    r = i(372460),
    a = i(91896),
    d = i(189156),
    c = i(706454),
    u = i(430824),
    m = i(914010),
    x = i(785717),
    p = i(250822),
    f = i(771362),
    I = i(280885),
    h = i(819602),
    v = i(78806),
    Z = i(900927),
    g = i(678738),
    _ = i(652853),
    j = i(179828),
    E = i(228168),
    N = i(388032),
    y = i(64406);
function T(e) {
    let { user: n, currentUser: i, displayProfile: T, subsection: P, onClose: b } = e,
        { theme: S } = (0, _.z)(),
        { trackUserProfileAction: L } = (0, x.KZ)(),
        C = null == T ? void 0 : T.guildId,
        A = (0, l.e7)([u.Z], () => (null != C ? u.Z.getGuild(C) : null)),
        O = (0, l.e7)([m.Z], () => m.Z.getGuildId()),
        M = (0, l.Wu)([a.Z], () => a.Z.getGameFriendsForUser(n.id).map((e) => e.applicationId)),
        R = (0, r.wn)({ location: 'UserProfileModalInfo' }) && M.length > 0,
        U = (0, l.e7)([c.default], () => c.default.locale),
        B = (0, f.Z)(n.id),
        F = (0, p.Z)(n.id);
    return (0, t.jsxs)(o.zJl, {
        fade: !0,
        className: y.scroller,
        children: [
            (null == T ? void 0 : T.bio) != null &&
                (null == T ? void 0 : T.bio) !== '' &&
                (0, t.jsx)(I.Z, {
                    userBio: T.bio,
                    setLineClamp: !1
                }),
            null != A &&
                (0, t.jsx)(j.Z, {
                    user: n,
                    currentUser: i,
                    guild: A,
                    scrollIntoView: P === E.Tb.ROLES
                }),
            n.isProvisional &&
                (0, t.jsx)(d.Z, {
                    look: 'profile_modal',
                    userId: n.id
                }),
            R &&
                (0, t.jsx)(g.Z, {
                    heading: N.intl.string(N.t['Uv/eT0']),
                    children: (0, t.jsx)(v.Z, { applicationIds: M })
                }),
            (0, t.jsx)(g.Z, {
                heading: N.intl.string(N.t.a6XYDw),
                children: (0, t.jsx)(Z.Z, {
                    userId: n.id,
                    guildId: null == T ? void 0 : T.guildId,
                    tooltipDelay: E.vB
                })
            }),
            B.length > 0 &&
                (0, t.jsx)(g.Z, {
                    heading: N.intl.string(N.t['3fe7U1']),
                    scrollIntoView: P === E.Tb.CONNECTIONS,
                    children: (0, t.jsx)(h.OA, {
                        connectedAccounts: B,
                        className: y.connections,
                        userId: n.id,
                        theme: S,
                        locale: U
                    })
                }),
            F.length > 0 &&
                (0, t.jsx)(g.Z, {
                    heading: N.intl.string(N.t.PHjkRE),
                    children: F.map((e) =>
                        (0, t.jsx)(
                            h.tH,
                            {
                                className: y.appsConnections,
                                applicationRoleConnection: e,
                                locale: U,
                                onApplicationClicked: () => {
                                    L({ action: 'PRESS_APP_CONNECTION' }), b();
                                },
                                selectedGuildId: null != O ? O : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, t.jsx)(g.Z, {
                heading: N.intl.string(N.t.PbMNh4),
                scrollIntoView: P === E.Tb.NOTE,
                children: (0, t.jsx)(s.Z, {
                    userId: n.id,
                    className: y.note,
                    autoFocus: P === E.Tb.NOTE,
                    onUpdate: () => L({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
