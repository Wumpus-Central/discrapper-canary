t.d(n, { Z: () => O });
var l = t(54381);
t(473749);
var i = t(442837),
    o = t(481060),
    r = t(246016),
    a = t(189156),
    c = t(706454),
    s = t(914010),
    d = t(246946),
    u = t(785717),
    f = t(250822),
    m = t(771362),
    p = t(280885),
    x = t(819602),
    h = t(78806),
    v = t(900927),
    b = t(678738),
    j = t(179828),
    g = t(878566),
    I = t(228168),
    y = t(388032),
    Z = t(199912);
function O(e) {
    let { user: n, currentUser: t, displayProfile: O, onClose: T } = e,
        { trackUserProfileAction: N } = (0, u.KZ)(),
        A = (0, i.e7)([s.Z], () => s.Z.getGuildId()),
        P = (0, r.Y)({ userId: n.id }),
        E = (0, i.e7)([d.Z], () => d.Z.hidePersonalInformation),
        _ = (0, i.e7)([c.default], () => c.default.locale),
        C = (0, m.Z)(n.id),
        S = (0, f.Z)(n.id);
    return (0, l.jsxs)(o.zJl, {
        fade: !0,
        className: Z.scroller,
        children: [
            (null == O ? void 0 : O.bio) != null &&
                (null == O ? void 0 : O.bio) !== "" &&
                !E &&
                (0, l.jsx)(p.Z, {
                    userBio: O.bio,
                    setLineClamp: !1,
                }),
            (null == O ? void 0 : O.guildId) != null &&
                (0, l.jsx)(j.Z, {
                    user: n,
                    currentUser: t,
                    guildId: O.guildId,
                }),
            n.isProvisional &&
                (0, l.jsx)(b.Z, {
                    heading: y.intl.string(y.t.Iyka0U),
                    headingIcon: (0, l.jsx)(o.Mgn, {
                        size: "xxs",
                        color: o.TVs.colors.TEXT_STRONG,
                    }),
                    headingColor: "text-default",
                    children: (0, l.jsx)(a.n, { userId: n.id }),
                }),
            P.length > 0 &&
                (0, l.jsx)(b.Z, {
                    heading: y.intl.string(y.t["Uv/eTx"]),
                    children: (0, l.jsx)(h.Z, { applicationIds: P }),
                }),
            (0, l.jsx)(b.Z, {
                heading: y.intl.string(y.t.a6XYD9),
                children: (0, l.jsx)(v.Z, {
                    userId: n.id,
                    guildId: null == O ? void 0 : O.guildId,
                    tooltipDelay: I.vB,
                }),
            }),
            C.length > 0 &&
                (0, l.jsx)(b.Z, {
                    heading: y.intl.string(y.t["3fe7U5"]),
                    scrollTargetId: I.Tb.CONNECTIONS,
                    children: (0, l.jsx)(x.ZP, {
                        connectedAccounts: C,
                        className: Z.connections,
                        userId: n.id,
                        locale: _,
                    }),
                }),
            S.length > 0 &&
                (0, l.jsx)(b.Z, {
                    heading: y.intl.string(y.t.PHjkRE),
                    children: S.map((e) =>
                        (0, l.jsx)(
                            x.tH,
                            {
                                className: Z.appsConnections,
                                applicationRoleConnection: e,
                                locale: _,
                                onApplicationClicked: () => {
                                    N({ action: "PRESS_APP_CONNECTION" }), T();
                                },
                                selectedGuildId: null != A ? A : void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, l.jsx)(g.Z, { userId: n.id }),
        ],
    });
}
