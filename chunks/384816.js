t.d(n, { Z: () => P });
var i = t(200651),
    l = t(192379),
    o = t(442837),
    s = t(481060),
    r = t(666520),
    a = t(372460),
    d = t(320582),
    c = t(189156),
    u = t(706454),
    m = t(430824),
    x = t(914010),
    p = t(785717),
    I = t(250822),
    f = t(771362),
    h = t(280885),
    v = t(819602),
    Z = t(78806),
    g = t(900927),
    _ = t(678738),
    j = t(652853),
    E = t(179828),
    N = t(228168),
    y = t(388032),
    T = t(64406);
function P(e) {
    let { user: n, currentUser: t, displayProfile: P, subsection: S, onClose: b } = e,
        { theme: L } = (0, j.z)(),
        { trackUserProfileAction: C } = (0, p.KZ)(),
        A = null == P ? void 0 : P.guildId,
        O = (0, o.e7)([m.Z], () => (null != A ? m.Z.getGuild(A) : null)),
        M = (0, o.e7)([x.Z], () => x.Z.getGuildId()),
        R = (0, d.ML)(n.id),
        U = l.useMemo(
            () =>
                R.map((e) => {
                    let { applicationId: n } = e;
                    return n;
                }),
            [R]
        ),
        B = (0, a.wn)({ location: 'UserProfileModalInfo' }) && U.length > 0,
        F = (0, o.e7)([u.default], () => u.default.locale),
        D = (0, f.Z)(n.id),
        w = (0, I.Z)(n.id);
    return (0, i.jsxs)(s.zJl, {
        fade: !0,
        className: T.scroller,
        children: [
            (null == P ? void 0 : P.bio) != null &&
                (null == P ? void 0 : P.bio) !== '' &&
                (0, i.jsx)(h.Z, {
                    userBio: P.bio,
                    setLineClamp: !1
                }),
            null != O &&
                (0, i.jsx)(E.Z, {
                    user: n,
                    currentUser: t,
                    guild: O,
                    scrollIntoView: S === N.Tb.ROLES
                }),
            n.isProvisional &&
                (0, i.jsx)(c.Z, {
                    look: 'profile_modal',
                    userId: n.id
                }),
            B &&
                (0, i.jsx)(_.Z, {
                    heading: y.intl.string(y.t['Uv/eT0']),
                    children: (0, i.jsx)(Z.Z, { applicationIds: U })
                }),
            (0, i.jsx)(_.Z, {
                heading: y.intl.string(y.t.a6XYDw),
                children: (0, i.jsx)(g.Z, {
                    userId: n.id,
                    guildId: null == P ? void 0 : P.guildId,
                    tooltipDelay: N.vB
                })
            }),
            D.length > 0 &&
                (0, i.jsx)(_.Z, {
                    heading: y.intl.string(y.t['3fe7U1']),
                    scrollIntoView: S === N.Tb.CONNECTIONS,
                    children: (0, i.jsx)(v.OA, {
                        connectedAccounts: D,
                        className: T.connections,
                        userId: n.id,
                        theme: L,
                        locale: F
                    })
                }),
            w.length > 0 &&
                (0, i.jsx)(_.Z, {
                    heading: y.intl.string(y.t.PHjkRE),
                    children: w.map((e) =>
                        (0, i.jsx)(
                            v.tH,
                            {
                                className: T.appsConnections,
                                applicationRoleConnection: e,
                                locale: F,
                                onApplicationClicked: () => {
                                    C({ action: 'PRESS_APP_CONNECTION' }), b();
                                },
                                selectedGuildId: null != M ? M : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, i.jsx)(_.Z, {
                heading: y.intl.string(y.t.PbMNh4),
                scrollIntoView: S === N.Tb.NOTE,
                children: (0, i.jsx)(r.Z, {
                    userId: n.id,
                    className: T.note,
                    autoFocus: S === N.Tb.NOTE,
                    onUpdate: () => C({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
