t.d(n, { Ay: () => K, d1: () => Y, s6: () => w });
var i = t(477900),
    l = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(284009),
    o = t.n(r),
    c = t(17928),
    u = t(789645),
    d = t(297152),
    A = t(866665),
    h = t(408278),
    m = t(117723),
    g = t(939249),
    x = t(778712),
    C = t(463930),
    f = t(834730),
    p = t(193249),
    E = t(475825),
    j = t(442433),
    v = t(730134),
    I = t(964486),
    N = t(80682),
    T = t(58736),
    _ = t(967144),
    b = t(342296),
    S = t(696451),
    y = t(576705),
    O = t(290863),
    R = t(849736),
    L = t(113783),
    M = t(925931),
    D = t(105530),
    G = t(699970),
    P = t(345687),
    k = t(818348),
    U = t(660183),
    V = t(888299);
let B = l.memo(function (e) {
    let { toggleRequestToSpeakSidebar: n, chatOpen: t } = e,
        l = (0, i.jsx)(T.Ay.Icon, { icon: u.P, tooltip: U.intl.string(U.t.cpT0Cq), onClick: n });
    return (0, i.jsxs)(T.Ay, {
        toolbar: l,
        className: a()(V.N1, { [V.X_]: t }),
        children: [
            (0, i.jsx)(T.Ay.Icon, { icon: d.E, disabled: !0, "aria-label": U.intl.string(U.t.TYZgzW) }),
            (0, i.jsx)(T.Ay.Title, { children: U.intl.string(U.t.TYZgzW) }),
        ],
    });
});
function w(e) {
    let { channel: n, userId: t, awaitingUserAck: s } = e,
        [a, r] = l.useState(!0);
    (0, I.Ay)(() => {
        let e = setTimeout(() => r(!1), 1e3);
        return () => clearTimeout(e);
    });
    let o = s ? U.intl.string(U.t.h9rsTd) : U.intl.string(U.t.f0T7hI);
    return (0, i.jsxs)("div", {
        className: V.UD,
        children: [
            (0, i.jsx)(A.m, {
                text: o,
                asContainer: !0,
                children: (0, i.jsx)(h.K, {
                    onClick: () => (0, R.lL)(n, t, !1),
                    disabled: s || a,
                    icon: m.L,
                    variant: "secondary",
                    "aria-label": o,
                }),
            }),
            (0, i.jsx)(A.m, {
                text: U.intl.string(U.t.moABMy),
                asContainer: !0,
                children: (0, i.jsx)(h.K, {
                    "aria-label": U.intl.string(U.t.moABMy),
                    onClick: () => (0, R.lL)(n, t, !0),
                    icon: u.P,
                    variant: "secondary",
                }),
            }),
        ],
    });
}
let H = l.memo(function (e) {
        let { channel: n, participant: s } = e,
            a = l.useRef(null),
            r = n.getGuildId();
        o()(null != r, "Channel cannot be guildless");
        let { isMobile: u, status: d } = (0, c.cf)([O.A], () => ({
                isMobile: O.A.isMobileOnline(s.user.id),
                status: O.A.getStatus(s.user.id, r),
            })),
            A = (0, c.bG)([S.Ay], () => S.Ay.getMember(r, s.user.id)),
            h = (0, _.gn)(n.guild_id, A?.userId, A?.colorStrings ?? null),
            m = l.useMemo(() => ({ [r]: [s.user.id] }), [r, s.user.id]);
        (0, N.Eq)(m, "RequestToSpeakSidebar");
        let p = s.rtsState === D.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        function E(e) {
            null != r &&
                (0, j.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        t.e("463317"),
                        t.e("893190"),
                        t.e("189673"),
                        t.e("882073"),
                        t.e("797558"),
                        t.e("691994"),
                        t.e("229787"),
                        t.e("576665"),
                        t.e("624198"),
                        t.e("715038"),
                        t.e("245996"),
                        t.e("529422"),
                        t.e("823427"),
                        t.e("242204"),
                        t.e("307059"),
                        t.e("449145"),
                        t.e("343116"),
                        t.e("139103"),
                        t.e("470314"),
                        t.e("70515"),
                        t.e("404524"),
                        t.e("654148"),
                        t.e("666939"),
                        t.e("717334"),
                        t.e("184841"),
                    ]).then(t.bind(t, 107632));
                    return (t) => (0, i.jsx)(e, { ...t, user: s.user, guildId: r, channel: n, showMediaItems: !0 });
                });
        }
        return (0, i.jsxs)("div", {
            className: V.fn,
            children: [
                (0, i.jsx)(b.A, {
                    targetElementRef: a,
                    user: s.user,
                    guildId: n.guild_id,
                    channelId: n.id,
                    position: "left",
                    spacing: 16,
                    clickTrap: !0,
                    children: (e) =>
                        (0, i.jsxs)(g.D, {
                            innerRef: a,
                            className: V.$u,
                            onContextMenu: E,
                            ...e,
                            children: [
                                (0, i.jsx)(v.A, {
                                    size: x._3.SIZE_40,
                                    className: V.RB,
                                    user: s.user,
                                    isMobile: u,
                                    status: d,
                                }),
                                (0, i.jsxs)("div", {
                                    className: V.kH,
                                    children: [
                                        (0, i.jsx)(C.g, {
                                            name: s.userNick,
                                            colorString: A?.colorString ?? null,
                                            colorStrings: h,
                                            className: V.F8,
                                        }),
                                        (0, i.jsx)(f.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: (0, M.g)(s),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                }),
                (0, i.jsx)(w, { channel: n, userId: s.user.id, awaitingUserAck: p }),
            ],
        });
    }),
    Y = l.memo(function (e) {
        let { channel: n } = e,
            [t, l] = (0, G.X)(n.id);
        return (0, i.jsx)(p.d, { label: U.intl.string(U.t.GYCh0W), checked: t, onChange: l });
    }),
    z = l.memo(function () {
        return (0, i.jsxs)("div", {
            className: V.y7,
            children: [
                (0, i.jsx)(P.A, {}),
                (0, i.jsx)(f.E, {
                    className: V.vo,
                    variant: "text-lg/semibold",
                    color: "text-strong",
                    children: U.intl.string(U.t["7R24mX"]),
                }),
                (0, i.jsx)(f.E, {
                    className: V.XG,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: U.intl.string(U.t.Rpr2s0),
                }),
            ],
        });
    });
function K(e) {
    let { channel: n, toggleRequestToSpeakSidebar: t, chatOpen: l } = e,
        s = (0, L.J2)(n.id),
        r = [
            +!!(0, c.bG)([y.A], () => y.A.can(k.xB.MANAGE_CHANNELS, n) || y.A.can(k.xB.MANAGE_ROLES, n)),
            Math.max(1, s.length),
        ];
    return (0, i.jsxs)("div", {
        className: a()(V.kL, { [V.X_]: l }),
        children: [
            (0, i.jsx)(B, { toggleRequestToSpeakSidebar: t, chatOpen: l }),
            (0, i.jsx)(E.OZ, {
                className: V.hQ,
                sections: r,
                sectionHeight: function (e) {
                    return 40 * (1 === e);
                },
                rowHeight: function (e) {
                    switch (e) {
                        case 0:
                            return 66;
                        case 1:
                            if (0 === s.length) return 178;
                            return 48;
                    }
                    return 0;
                },
                renderRow: function (e) {
                    let { section: t, row: l } = e;
                    switch (t) {
                        case 0:
                            return (0, i.jsx)(Y, { channel: n }, "rts-toggle");
                        case 1: {
                            if (0 === s.length) return (0, i.jsx)(z, {}, "participants-empty");
                            let e = s[l];
                            return (0, i.jsx)(H, { channel: n, participant: e }, e.id);
                        }
                    }
                    return null;
                },
                renderSection: function (e) {
                    let { section: n } = e;
                    return 1 === n
                        ? (0, i.jsx)(
                              f.E,
                              {
                                  className: V.Vu,
                                  variant: "text-xs/bold",
                                  color: "text-default",
                                  children:
                                      s.length > 0
                                          ? U.intl.formatToPlainString(U.t["5z7q5a"], { numHands: s.length })
                                          : U.intl.string(U.t.TYZgzW),
                              },
                              "participants-section",
                          )
                        : null;
                },
            }),
        ],
    });
}
