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
    j = t(900927),
    v = t(678738),
    b = t(179828),
    g = t(878566),
    I = t(228168),
    y = t(388032),
    Z = t(199912);
function O(e) {
    let { user: n, displayProfile: t, onClose: O } = e,
        { trackUserProfileAction: N } = (0, u.KZ)(),
        T = (0, i.e7)([s.Z], () => s.Z.getGuildId()),
        A = (0, r.Y)({ userId: n.id }),
        P = (0, i.e7)([d.Z], () => d.Z.hidePersonalInformation),
        E = (0, i.e7)([c.default], () => c.default.locale),
        _ = (0, m.Z)(n.id),
        C = (0, f.Z)(n.id);
    return (0, l.jsxs)(o.zJl, {
        fade: !0,
        className: Z.scroller,
        children: [
            (null == t ? void 0 : t.bio) != null &&
                (null == t ? void 0 : t.bio) !== "" &&
                !P &&
                (0, l.jsx)(p.Z, {
                    userBio: t.bio,
                    setLineClamp: !1,
                }),
            (null == t ? void 0 : t.guildId) != null &&
                (0, l.jsx)(b.Z, {
                    userId: n.id,
                    guildId: t.guildId,
                }),
            n.isProvisional &&
                (0, l.jsx)(v.Z, {
                    heading: y.intl.string(y.t.Iyka0U),
                    headingIcon: (0, l.jsx)(o.Mgn, {
                        size: "xxs",
                        color: o.TVs.colors.TEXT_STRONG,
                    }),
                    headingColor: "text-default",
                    children: (0, l.jsx)(a.n, { userId: n.id }),
                }),
            A.length > 0 &&
                (0, l.jsx)(v.Z, {
                    heading: y.intl.string(y.t["Uv/eTx"]),
                    children: (0, l.jsx)(h.Z, { applicationIds: A }),
                }),
            (0, l.jsx)(v.Z, {
                heading: y.intl.string(y.t.a6XYD9),
                children: (0, l.jsx)(j.Z, {
                    userId: n.id,
                    guildId: null == t ? void 0 : t.guildId,
                    tooltipDelay: I.vB,
                }),
            }),
            _.length > 0 &&
                (0, l.jsx)(v.Z, {
                    heading: y.intl.string(y.t["3fe7U5"]),
                    scrollTargetId: I.Tb.CONNECTIONS,
                    children: (0, l.jsx)(x.ZP, {
                        connectedAccounts: _,
                        className: Z.connections,
                        userId: n.id,
                        locale: E,
                    }),
                }),
            C.length > 0 &&
                (0, l.jsx)(v.Z, {
                    heading: y.intl.string(y.t.PHjkRE),
                    children: C.map((e) =>
                        (0, l.jsx)(
                            x.tH,
                            {
                                className: Z.appsConnections,
                                applicationRoleConnection: e,
                                locale: E,
                                onApplicationClicked: () => {
                                    N({ action: "PRESS_APP_CONNECTION" }), O();
                                },
                                selectedGuildId: null != T ? T : void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, l.jsx)(g.Z, { userId: n.id }),
        ],
    });
}
