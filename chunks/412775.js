t.d(n, { A: () => j });
var i = t(627968);
t(64700);
var a = t(311907),
    r = t(397927),
    l = t(821269),
    o = t(437774),
    s = t(773669),
    d = t(967198),
    c = t(351906),
    _ = t(183555),
    u = t(346713),
    p = t(484509),
    A = t(389996),
    g = t(46937),
    m = t(361311),
    f = t(743987),
    h = t(900179),
    x = t(280645),
    I = t(928223),
    b = t(518477),
    v = t(985018),
    E = t(824860);
function j(e) {
    let { user: n, displayProfile: t, onClose: j } = e,
        { trackUserProfileAction: y } = (0, _.NJ)(),
        C = (0, a.bG)([d.A], () => d.A.getGuildId()),
        T = (0, l.q)({ userId: n.id }),
        S = (0, a.bG)([c.A], () => c.A.hidePersonalInformation),
        N = (0, a.bG)([s.default], () => s.default.locale),
        R = (0, p.A)(n.id),
        L = (0, u.A)(n.id);
    return (0, i.jsxs)(r.IpV, {
        fade: !0,
        className: E.XG,
        children: [
            t?.bio != null && t?.bio !== "" && !S && (0, i.jsx)(A.A, { userBio: t.bio, setLineClamp: !1 }),
            t?.guildId != null && (0, i.jsx)(x.A, { userId: n.id, guildId: t.guildId }),
            n.isProvisional &&
                (0, i.jsx)(h.A, {
                    heading: v.intl.string(v.t.Iyka0U),
                    headingIcon: (0, i.jsx)(r.EpV, { size: "xxs", color: r.LU0.colors.TEXT_STRONG }),
                    headingColor: "text-default",
                    children: (0, i.jsx)(o.T, { userId: n.id }),
                }),
            T.length > 0 &&
                (0, i.jsx)(h.A, {
                    heading: v.intl.string(v.t["Uv/eTx"]),
                    children: (0, i.jsx)(m.A, { applicationIds: T }),
                }),
            (0, i.jsx)(h.A, {
                heading: v.intl.string(v.t.a6XYD9),
                children: (0, i.jsx)(f.A, { userId: n.id, guildId: t?.guildId, tooltipDelay: b.In }),
            }),
            R.length > 0 &&
                (0, i.jsx)(h.A, {
                    heading: v.intl.string(v.t["3fe7U5"]),
                    scrollTargetId: b.bk.CONNECTIONS,
                    children: (0, i.jsx)(g.Ay, { connectedAccounts: R, className: E.oQ, userId: n.id, locale: N }),
                }),
            L.length > 0 &&
                (0, i.jsx)(h.A, {
                    heading: v.intl.string(v.t.PHjkRE),
                    children: L.map((e) =>
                        (0, i.jsx)(
                            g.Wc,
                            {
                                className: E.MI,
                                applicationRoleConnection: e,
                                locale: N,
                                onApplicationClicked: () => {
                                    y({ action: "PRESS_APP_CONNECTION" }), j();
                                },
                                selectedGuildId: C ?? void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, i.jsx)(I.A, { userId: n.id }),
        ],
    });
}
