t.d(n, { A: () => C });
var i = t(627968);
t(64700);
var s = t(311907),
    r = t(397927),
    a = t(821269),
    l = t(437774),
    o = t(773669),
    d = t(967198),
    c = t(351906),
    u = t(183555),
    A = t(346713),
    _ = t(484509),
    m = t(389996),
    x = t(46937),
    p = t(361311),
    f = t(743987),
    h = t(900179),
    g = t(280645),
    I = t(928223),
    j = t(518477),
    b = t(985018),
    v = t(824860);
function C(e) {
    let { user: n, displayProfile: t, onClose: C } = e,
        { trackUserProfileAction: N } = (0, u.NJ)(),
        y = (0, s.bG)([d.A], () => d.A.getGuildId()),
        E = (0, a.q)({ userId: n.id }),
        T = (0, s.bG)([c.A], () => c.A.hidePersonalInformation),
        L = (0, s.bG)([o.default], () => o.default.locale),
        P = (0, _.A)(n.id),
        O = (0, A.A)(n.id);
    return (0, i.jsxs)(r.IpV, {
        fade: !0,
        className: v.XG,
        children: [
            t?.bio != null && t?.bio !== "" && !T && (0, i.jsx)(m.A, { userBio: t.bio, setLineClamp: !1 }),
            t?.guildId != null && (0, i.jsx)(g.A, { userId: n.id, guildId: t.guildId }),
            n.isProvisional &&
                (0, i.jsx)(h.A, {
                    heading: b.intl.string(b.t.Iyka0U),
                    headingIcon: (0, i.jsx)(r.EpV, { size: "xxs", color: r.LU0.colors.TEXT_STRONG }),
                    headingColor: "text-default",
                    children: (0, i.jsx)(l.T, { userId: n.id }),
                }),
            E.length > 0 &&
                (0, i.jsx)(h.A, {
                    heading: b.intl.string(b.t["Uv/eTx"]),
                    children: (0, i.jsx)(p.A, { applicationIds: E }),
                }),
            (0, i.jsx)(h.A, {
                heading: b.intl.string(b.t.a6XYD9),
                children: (0, i.jsx)(f.A, { userId: n.id, guildId: t?.guildId, tooltipDelay: j.In }),
            }),
            P.length > 0 &&
                (0, i.jsx)(h.A, {
                    heading: b.intl.string(b.t["3fe7U5"]),
                    scrollTargetId: j.bk.CONNECTIONS,
                    children: (0, i.jsx)(x.Ay, { connectedAccounts: P, className: v.oQ, userId: n.id, locale: L }),
                }),
            O.length > 0 &&
                (0, i.jsx)(h.A, {
                    heading: b.intl.string(b.t.PHjkRE),
                    children: O.map((e) =>
                        (0, i.jsx)(
                            x.Wc,
                            {
                                className: v.MI,
                                applicationRoleConnection: e,
                                locale: L,
                                onApplicationClicked: () => {
                                    N({ action: "PRESS_APP_CONNECTION" }), C();
                                },
                                selectedGuildId: y ?? void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, i.jsx)(I.A, { userId: n.id }),
        ],
    });
}
