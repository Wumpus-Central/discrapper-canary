n.d(t, { A: () => N });
var a = n(627968);
n(64700);
var i = n(311907),
    l = n(573613),
    r = n(695366),
    s = n(827734),
    o = n(821269),
    d = n(437774),
    c = n(773669),
    _ = n(967198),
    u = n(351906),
    p = n(183555),
    m = n(346713),
    f = n(484509),
    x = n(389996),
    g = n(46937),
    h = n(361311),
    A = n(743987),
    b = n(900179),
    v = n(280645),
    I = n(928223),
    j = n(518477),
    y = n(985018),
    C = n(741036);
function N(e) {
    let { user: t, displayProfile: n, onClose: N } = e,
        { trackUserProfileAction: E } = (0, p.NJ)(),
        T = (0, i.bG)([_.A], () => _.A.getGuildId()),
        w = (0, o.q)({ userId: t.id }),
        P = (0, i.bG)([u.A], () => u.A.hidePersonalInformation),
        L = (0, i.bG)([c.default], () => c.default.locale),
        k = (0, f.A)(t.id),
        S = (0, m.A)(t.id);
    return (0, a.jsxs)(l.Ip, {
        fade: !0,
        className: C.XG,
        children: [
            n?.bio != null && n?.bio !== "" && !P && (0, a.jsx)(x.A, { userBio: n.bio, setLineClamp: !1 }),
            n?.guildId != null && (0, a.jsx)(v.A, { userId: t.id, guildId: n.guildId }),
            t.isProvisional &&
                (0, a.jsx)(b.A, {
                    heading: y.intl.string(y.t.Iyka0U),
                    headingIcon: (0, a.jsx)(r.E, { size: "xxs", color: s.A.colors.TEXT_STRONG }),
                    headingColor: "text-default",
                    children: (0, a.jsx)(d.T, { userId: t.id }),
                }),
            w.length > 0 &&
                (0, a.jsx)(b.A, {
                    heading: y.intl.string(y.t["Uv/eTx"]),
                    children: (0, a.jsx)(h.A, { applicationIds: w }),
                }),
            (0, a.jsx)(b.A, {
                heading: y.intl.string(y.t.a6XYD9),
                children: (0, a.jsx)(A.A, { userId: t.id, guildId: n?.guildId, tooltipDelay: j.In }),
            }),
            k.length > 0 &&
                (0, a.jsx)(b.A, {
                    heading: y.intl.string(y.t["3fe7U5"]),
                    scrollTargetId: j.bk.CONNECTIONS,
                    children: (0, a.jsx)(g.Ay, { connectedAccounts: k, className: C.oQ, userId: t.id, locale: L }),
                }),
            S.length > 0 &&
                (0, a.jsx)(b.A, {
                    heading: y.intl.string(y.t.PHjkRE),
                    children: S.map((e) =>
                        (0, a.jsx)(
                            g.Wc,
                            {
                                className: C.MI,
                                applicationRoleConnection: e,
                                locale: L,
                                onApplicationClicked: () => {
                                    E({ action: "PRESS_APP_CONNECTION" }), N();
                                },
                                selectedGuildId: T ?? void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, a.jsx)(I.A, { userId: t.id }),
        ],
    });
}
