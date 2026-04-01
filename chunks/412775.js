t.d(n, { A: () => C });
var i = t(627968);
t(64700);
var a = t(311907),
    s = t(397927),
    r = t(821269),
    l = t(437774),
    o = t(773669),
    d = t(967198),
    c = t(351906),
    u = t(183555),
    _ = t(346713),
    p = t(484509),
    x = t(389996),
    A = t(46937),
    f = t(361311),
    m = t(743987),
    g = t(900179),
    I = t(280645),
    h = t(928223),
    b = t(518477),
    j = t(985018),
    v = t(824860);
function C(e) {
    let { user: n, displayProfile: t, onClose: C } = e,
        { trackUserProfileAction: N } = (0, u.NJ)(),
        y = (0, a.bG)([d.A], () => d.A.getGuildId()),
        E = (0, r.q)({ userId: n.id }),
        T = (0, a.bG)([c.A], () => c.A.hidePersonalInformation),
        L = (0, a.bG)([o.default], () => o.default.locale),
        P = (0, p.A)(n.id),
        O = (0, _.A)(n.id);
    return (0, i.jsxs)(s.IpV, {
        fade: !0,
        className: v.XG,
        children: [
            t?.bio != null && t?.bio !== "" && !T && (0, i.jsx)(x.A, { userBio: t.bio, setLineClamp: !1 }),
            t?.guildId != null && (0, i.jsx)(I.A, { userId: n.id, guildId: t.guildId }),
            n.isProvisional &&
                (0, i.jsx)(g.A, {
                    heading: j.intl.string(j.t.Iyka0U),
                    headingIcon: (0, i.jsx)(s.EpV, { size: "xxs", color: s.LU0.colors.TEXT_STRONG }),
                    headingColor: "text-default",
                    children: (0, i.jsx)(l.T, { userId: n.id }),
                }),
            E.length > 0 &&
                (0, i.jsx)(g.A, {
                    heading: j.intl.string(j.t["Uv/eTx"]),
                    children: (0, i.jsx)(f.A, { applicationIds: E }),
                }),
            (0, i.jsx)(g.A, {
                heading: j.intl.string(j.t.a6XYD9),
                children: (0, i.jsx)(m.A, { userId: n.id, guildId: t?.guildId, tooltipDelay: b.In }),
            }),
            P.length > 0 &&
                (0, i.jsx)(g.A, {
                    heading: j.intl.string(j.t["3fe7U5"]),
                    scrollTargetId: b.bk.CONNECTIONS,
                    children: (0, i.jsx)(A.Ay, { connectedAccounts: P, className: v.oQ, userId: n.id, locale: L }),
                }),
            O.length > 0 &&
                (0, i.jsx)(g.A, {
                    heading: j.intl.string(j.t.PHjkRE),
                    children: O.map((e) =>
                        (0, i.jsx)(
                            A.Wc,
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
            (0, i.jsx)(h.A, { userId: n.id }),
        ],
    });
}
