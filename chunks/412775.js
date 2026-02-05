n.d(t, { A: () => b });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    a = n(821269),
    r = n(437774),
    d = n(773669),
    o = n(967198),
    c = n(351906),
    u = n(183555),
    A = n(346713),
    x = n(484509),
    m = n(389996),
    p = n(46937),
    h = n(361311),
    f = n(743987),
    g = n(900179),
    I = n(280645),
    j = n(928223),
    _ = n(518477),
    N = n(985018),
    v = n(195723);
function b(e) {
    let { user: t, displayProfile: n, onClose: b } = e,
        { trackUserProfileAction: T } = (0, u.NJ)(),
        E = (0, s.bG)([o.A], () => o.A.getGuildId()),
        y = (0, a.q)({ userId: t.id }),
        C = (0, s.bG)([c.A], () => c.A.hidePersonalInformation),
        P = (0, s.bG)([d.default], () => d.default.locale),
        L = (0, x.A)(t.id),
        S = (0, A.A)(t.id);
    return (0, i.jsxs)(l.IpV, {
        fade: !0,
        className: v.XG,
        children: [
            n?.bio != null && n?.bio !== "" && !C && (0, i.jsx)(m.A, { userBio: n.bio, setLineClamp: !1 }),
            n?.guildId != null && (0, i.jsx)(I.A, { userId: t.id, guildId: n.guildId }),
            t.isProvisional &&
                (0, i.jsx)(g.A, {
                    heading: N.intl.string(N.t.Iyka0U),
                    headingIcon: (0, i.jsx)(l.EpV, { size: "xxs", color: l.LU0.colors.TEXT_STRONG }),
                    headingColor: "text-default",
                    children: (0, i.jsx)(r.T, { userId: t.id }),
                }),
            y.length > 0 &&
                (0, i.jsx)(g.A, {
                    heading: N.intl.string(N.t["Uv/eTx"]),
                    children: (0, i.jsx)(h.A, { applicationIds: y }),
                }),
            (0, i.jsx)(g.A, {
                heading: N.intl.string(N.t.a6XYD9),
                children: (0, i.jsx)(f.A, { userId: t.id, guildId: n?.guildId, tooltipDelay: _.In }),
            }),
            L.length > 0 &&
                (0, i.jsx)(g.A, {
                    heading: N.intl.string(N.t["3fe7U5"]),
                    scrollTargetId: _.bk.CONNECTIONS,
                    children: (0, i.jsx)(p.Ay, { connectedAccounts: L, className: v.oQ, userId: t.id, locale: P }),
                }),
            S.length > 0 &&
                (0, i.jsx)(g.A, {
                    heading: N.intl.string(N.t.PHjkRE),
                    children: S.map((e) =>
                        (0, i.jsx)(
                            p.Wc,
                            {
                                className: v.MI,
                                applicationRoleConnection: e,
                                locale: P,
                                onApplicationClicked: () => {
                                    T({ action: "PRESS_APP_CONNECTION" }), b();
                                },
                                selectedGuildId: E ?? void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, i.jsx)(j.A, { userId: t.id }),
        ],
    });
}
