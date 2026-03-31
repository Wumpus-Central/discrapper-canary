t.d(n, { A: () => E });
var i = t(627968);
t(64700);
var s = t(311907),
    l = t(397927),
    r = t(821269),
    a = t(437774),
    o = t(773669),
    d = t(967198),
    c = t(351906),
    u = t(183555),
    A = t(346713),
    _ = t(484509),
    x = t(389996),
    p = t(46937),
    m = t(361311),
    I = t(743987),
    f = t(900179),
    g = t(280645),
    h = t(928223),
    b = t(518477),
    j = t(985018),
    C = t(47049);
function E(e) {
    let { user: n, displayProfile: t, onClose: E } = e,
        { trackUserProfileAction: N } = (0, u.NJ)(),
        v = (0, s.bG)([d.A], () => d.A.getGuildId()),
        T = (0, r.q)({ userId: n.id }),
        y = (0, s.bG)([c.A], () => c.A.hidePersonalInformation),
        L = (0, s.bG)([o.default], () => o.default.locale),
        P = (0, _.A)(n.id),
        O = (0, A.A)(n.id);
    return (0, i.jsxs)(l.IpV, {
        fade: !0,
        className: C.XG,
        children: [
            t?.bio != null && t?.bio !== "" && !y && (0, i.jsx)(x.A, { userBio: t.bio, setLineClamp: !1 }),
            t?.guildId != null && (0, i.jsx)(g.A, { userId: n.id, guildId: t.guildId }),
            n.isProvisional &&
                (0, i.jsx)(f.A, {
                    heading: j.intl.string(j.t.Iyka0U),
                    headingIcon: (0, i.jsx)(l.EpV, { size: "xxs", color: l.LU0.colors.TEXT_STRONG }),
                    headingColor: "text-default",
                    children: (0, i.jsx)(a.T, { userId: n.id }),
                }),
            T.length > 0 &&
                (0, i.jsx)(f.A, {
                    heading: j.intl.string(j.t["Uv/eTx"]),
                    children: (0, i.jsx)(m.A, { applicationIds: T }),
                }),
            (0, i.jsx)(f.A, {
                heading: j.intl.string(j.t.a6XYD9),
                children: (0, i.jsx)(I.A, { userId: n.id, guildId: t?.guildId, tooltipDelay: b.In }),
            }),
            P.length > 0 &&
                (0, i.jsx)(f.A, {
                    heading: j.intl.string(j.t["3fe7U5"]),
                    scrollTargetId: b.bk.CONNECTIONS,
                    children: (0, i.jsx)(p.Ay, { connectedAccounts: P, className: C.oQ, userId: n.id, locale: L }),
                }),
            O.length > 0 &&
                (0, i.jsx)(f.A, {
                    heading: j.intl.string(j.t.PHjkRE),
                    children: O.map((e) =>
                        (0, i.jsx)(
                            p.Wc,
                            {
                                className: C.MI,
                                applicationRoleConnection: e,
                                locale: L,
                                onApplicationClicked: () => {
                                    N({ action: "PRESS_APP_CONNECTION" }), E();
                                },
                                selectedGuildId: v ?? void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, i.jsx)(h.A, { userId: n.id }),
        ],
    });
}
