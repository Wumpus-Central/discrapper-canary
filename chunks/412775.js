a.d(t, { A: () => N });
var n = a(627968);
a(64700);
var i = a(311907),
    l = a(573613),
    r = a(695366),
    d = a(827734),
    o = a(821269),
    s = a(437774),
    c = a(773669),
    _ = a(967198),
    u = a(351906),
    m = a(183555),
    p = a(346713),
    g = a(484509),
    b = a(389996),
    f = a(46937),
    x = a(361311),
    h = a(743987),
    A = a(900179),
    v = a(280645),
    I = a(928223),
    y = a(518477),
    C = a(985018),
    j = a(26988);
function N(e) {
    let { user: t, displayProfile: a, onClose: N } = e,
        { trackUserProfileAction: E } = (0, m.NJ)(),
        S = (0, i.bG)([_.A], () => _.A.getGuildId()),
        T = (0, o.q)({ userId: t.id }),
        w = (0, i.bG)([u.A], () => u.A.hidePersonalInformation),
        P = (0, i.bG)([c.default], () => c.default.locale),
        k = (0, g.A)(t.id),
        M = (0, p.A)(t.id);
    return (0, n.jsxs)(l.Ip, {
        fade: !0,
        className: j.XG,
        children: [
            a?.bio != null && a?.bio !== "" && !w && (0, n.jsx)(b.A, { userBio: a.bio, setLineClamp: !1 }),
            a?.guildId != null && (0, n.jsx)(v.A, { userId: t.id, guildId: a.guildId }),
            t.isProvisional &&
                (0, n.jsx)(A.A, {
                    heading: C.intl.string(C.t.Iyka0U),
                    headingIcon: (0, n.jsx)(r.E, { size: "xxs", color: d.A.colors.TEXT_STRONG }),
                    headingColor: "text-default",
                    children: (0, n.jsx)(s.T, { userId: t.id }),
                }),
            T.length > 0 &&
                (0, n.jsx)(A.A, {
                    heading: C.intl.string(C.t["Uv/eTx"]),
                    children: (0, n.jsx)(x.A, { applicationIds: T }),
                }),
            (0, n.jsx)(A.A, {
                heading: C.intl.string(C.t.a6XYD9),
                children: (0, n.jsx)(h.A, { userId: t.id, guildId: a?.guildId, tooltipDelay: y.In }),
            }),
            k.length > 0 &&
                (0, n.jsx)(A.A, {
                    heading: C.intl.string(C.t["3fe7U5"]),
                    scrollTargetId: y.bk.CONNECTIONS,
                    children: (0, n.jsx)(f.Ay, { connectedAccounts: k, className: j.oQ, userId: t.id, locale: P }),
                }),
            M.length > 0 &&
                (0, n.jsx)(A.A, {
                    heading: C.intl.string(C.t.PHjkRE),
                    children: M.map((e) =>
                        (0, n.jsx)(
                            f.Wc,
                            {
                                className: j.MI,
                                applicationRoleConnection: e,
                                locale: P,
                                onApplicationClicked: () => {
                                    E({ action: "PRESS_APP_CONNECTION" }), N();
                                },
                                selectedGuildId: S ?? void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, n.jsx)(I.A, { userId: t.id }),
        ],
    });
}
