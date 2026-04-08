t.d(n, { A: () => C });
var i = t(627968);
t(64700);
var a = t(311907),
    r = t(397927),
    l = t(821269),
    s = t(437774),
    o = t(773669),
    d = t(967198),
    c = t(351906),
    u = t(183555),
    _ = t(346713),
    p = t(484509),
    A = t(389996),
    g = t(46937),
    m = t(361311),
    I = t(743987),
    f = t(900179),
    h = t(280645),
    x = t(928223),
    v = t(518477),
    E = t(985018),
    b = t(47049);
function C(e) {
    let { user: n, displayProfile: t, onClose: C } = e,
        { trackUserProfileAction: y } = (0, u.NJ)(),
        T = (0, a.bG)([d.A], () => d.A.getGuildId()),
        j = (0, l.q)({ userId: n.id }),
        S = (0, a.bG)([c.A], () => c.A.hidePersonalInformation),
        N = (0, a.bG)([o.default], () => o.default.locale),
        R = (0, p.A)(n.id),
        L = (0, _.A)(n.id);
    return (0, i.jsxs)(r.IpV, {
        fade: !0,
        className: b.XG,
        children: [
            t?.bio != null && t?.bio !== "" && !S && (0, i.jsx)(A.A, { userBio: t.bio, setLineClamp: !1 }),
            t?.guildId != null && (0, i.jsx)(h.A, { userId: n.id, guildId: t.guildId }),
            n.isProvisional &&
                (0, i.jsx)(f.A, {
                    heading: E.intl.string(E.t.Iyka0U),
                    headingIcon: (0, i.jsx)(r.EpV, { size: "xxs", color: r.LU0.colors.TEXT_STRONG }),
                    headingColor: "text-default",
                    children: (0, i.jsx)(s.T, { userId: n.id }),
                }),
            j.length > 0 &&
                (0, i.jsx)(f.A, {
                    heading: E.intl.string(E.t["Uv/eTx"]),
                    children: (0, i.jsx)(m.A, { applicationIds: j }),
                }),
            (0, i.jsx)(f.A, {
                heading: E.intl.string(E.t.a6XYD9),
                children: (0, i.jsx)(I.A, { userId: n.id, guildId: t?.guildId, tooltipDelay: v.In }),
            }),
            R.length > 0 &&
                (0, i.jsx)(f.A, {
                    heading: E.intl.string(E.t["3fe7U5"]),
                    scrollTargetId: v.bk.CONNECTIONS,
                    children: (0, i.jsx)(g.Ay, { connectedAccounts: R, className: b.oQ, userId: n.id, locale: N }),
                }),
            L.length > 0 &&
                (0, i.jsx)(f.A, {
                    heading: E.intl.string(E.t.PHjkRE),
                    children: L.map((e) =>
                        (0, i.jsx)(
                            g.Wc,
                            {
                                className: b.MI,
                                applicationRoleConnection: e,
                                locale: N,
                                onApplicationClicked: () => {
                                    y({ action: "PRESS_APP_CONNECTION" }), C();
                                },
                                selectedGuildId: T ?? void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, i.jsx)(x.A, { userId: n.id }),
        ],
    });
}
