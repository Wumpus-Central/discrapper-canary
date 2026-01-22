t.d(l, { A: () => O });
var n = t(627968);
t(64700);
var i = t(311907),
    r = t(397927),
    s = t(821269),
    a = t(437774),
    o = t(773669),
    d = t(967198),
    c = t(351906),
    u = t(183555),
    f = t(346713),
    p = t(484509),
    m = t(389996),
    x = t(46937),
    A = t(361311),
    j = t(743987),
    h = t(900179),
    g = t(280645),
    v = t(928223),
    b = t(518477),
    I = t(985018),
    y = t(195723);
function O(e) {
    let { user: l, displayProfile: t, onClose: O } = e,
        { trackUserProfileAction: N } = (0, u.NJ)(),
        E = (0, i.bG)([d.A], () => d.A.getGuildId()),
        _ = (0, s.q)({ userId: l.id }),
        T = (0, i.bG)([c.A], () => c.A.hidePersonalInformation),
        P = (0, i.bG)([o.default], () => o.default.locale),
        S = (0, p.A)(l.id),
        C = (0, f.A)(l.id);
    return (0, n.jsxs)(r.IpV, {
        fade: !0,
        className: y.XG,
        children: [
            (null == t ? void 0 : t.bio) != null &&
                (null == t ? void 0 : t.bio) !== "" &&
                !T &&
                (0, n.jsx)(m.A, {
                    userBio: t.bio,
                    setLineClamp: !1,
                }),
            (null == t ? void 0 : t.guildId) != null &&
                (0, n.jsx)(g.A, {
                    userId: l.id,
                    guildId: t.guildId,
                }),
            l.isProvisional &&
                (0, n.jsx)(h.A, {
                    heading: I.intl.string(I.t.Iyka0U),
                    headingIcon: (0, n.jsx)(r.EpV, {
                        size: "xxs",
                        color: r.LU0.colors.TEXT_STRONG,
                    }),
                    headingColor: "text-default",
                    children: (0, n.jsx)(a.T, { userId: l.id }),
                }),
            _.length > 0 &&
                (0, n.jsx)(h.A, {
                    heading: I.intl.string(I.t["Uv/eTx"]),
                    children: (0, n.jsx)(A.A, { applicationIds: _ }),
                }),
            (0, n.jsx)(h.A, {
                heading: I.intl.string(I.t.a6XYD9),
                children: (0, n.jsx)(j.A, {
                    userId: l.id,
                    guildId: null == t ? void 0 : t.guildId,
                    tooltipDelay: b.In,
                }),
            }),
            S.length > 0 &&
                (0, n.jsx)(h.A, {
                    heading: I.intl.string(I.t["3fe7U5"]),
                    scrollTargetId: b.bk.CONNECTIONS,
                    children: (0, n.jsx)(x.Ay, {
                        connectedAccounts: S,
                        className: y.oQ,
                        userId: l.id,
                        locale: P,
                    }),
                }),
            C.length > 0 &&
                (0, n.jsx)(h.A, {
                    heading: I.intl.string(I.t.PHjkRE),
                    children: C.map((e) =>
                        (0, n.jsx)(
                            x.Wc,
                            {
                                className: y.MI,
                                applicationRoleConnection: e,
                                locale: P,
                                onApplicationClicked: () => {
                                    N({ action: "PRESS_APP_CONNECTION" }), O();
                                },
                                selectedGuildId: null != E ? E : void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, n.jsx)(v.A, { userId: l.id }),
        ],
    });
}
