t.d(n, {
    Z: function () {
        return N;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    o = t(481060),
    r = t(666520),
    s = t(91896),
    c = t(189156),
    a = t(706454),
    d = t(430824),
    u = t(914010),
    f = t(785717),
    m = t(250822),
    p = t(771362),
    I = t(280885),
    x = t(819602),
    h = t(78806),
    v = t(900927),
    g = t(678738),
    Z = t(652853),
    j = t(179828),
    _ = t(228168),
    b = t(388032),
    E = t(64406);
function N(e) {
    let { user: n, currentUser: t, displayProfile: N, subsection: y, onClose: S, hideIdentityInfo: T } = e,
        { theme: P } = (0, Z.z)(),
        { trackUserProfileAction: C } = (0, f.KZ)(),
        A = null == N ? void 0 : N.guildId,
        L = (0, l.e7)([d.Z], () => (null != A ? d.Z.getGuild(A) : null)),
        M = (0, l.e7)([u.Z], () => u.Z.getGuildId()),
        R = (0, l.Wu)([s.Z], () => s.Z.getGameFriendsForUser(n.id).map((e) => e.applicationId)),
        O = T && R.length > 0,
        U = (0, l.e7)([a.default], () => a.default.locale),
        B = (0, p.Z)(n.id),
        F = (0, m.Z)(n.id);
    return (0, i.jsxs)(o.ScrollerThin, {
        fade: !0,
        className: E.scroller,
        children: [
            !T &&
                (null == N ? void 0 : N.bio) != null &&
                (null == N ? void 0 : N.bio) !== '' &&
                (0, i.jsx)(I.Z, {
                    userBio: N.bio,
                    setLineClamp: !1
                }),
            null != L &&
                (0, i.jsx)(j.Z, {
                    user: n,
                    currentUser: t,
                    guild: L,
                    scrollIntoView: y === _.Tb.ROLES
                }),
            n.isProvisional && (0, i.jsx)(c.Z, { look: 'profile_modal' }),
            O &&
                (0, i.jsx)(g.Z, {
                    heading: b.intl.string(b.t['Uv/eT0']),
                    children: (0, i.jsx)(h.Z, { applicationIds: R })
                }),
            (0, i.jsx)(g.Z, {
                heading: b.intl.string(b.t.a6XYDw),
                children: (0, i.jsx)(v.Z, {
                    userId: n.id,
                    guildId: null == N ? void 0 : N.guildId,
                    tooltipDelay: _.vB
                })
            }),
            B.length > 0 &&
                (0, i.jsx)(g.Z, {
                    heading: b.intl.string(b.t['3fe7U1']),
                    scrollIntoView: y === _.Tb.CONNECTIONS,
                    children: (0, i.jsx)(x.OA, {
                        connectedAccounts: B,
                        className: E.connections,
                        userId: n.id,
                        theme: P,
                        locale: U
                    })
                }),
            F.length > 0 &&
                (0, i.jsx)(g.Z, {
                    heading: b.intl.string(b.t.PHjkRE),
                    children: F.map((e) =>
                        (0, i.jsx)(
                            x.tH,
                            {
                                className: E.appsConnections,
                                applicationRoleConnection: e,
                                locale: U,
                                onApplicationClicked: () => {
                                    C({ action: 'PRESS_APP_CONNECTION' }), S();
                                },
                                selectedGuildId: null != M ? M : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, i.jsx)(g.Z, {
                heading: b.intl.string(b.t.PbMNh4),
                scrollIntoView: y === _.Tb.NOTE,
                children: (0, i.jsx)(r.Z, {
                    userId: n.id,
                    className: E.note,
                    autoFocus: y === _.Tb.NOTE,
                    onUpdate: () => C({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
