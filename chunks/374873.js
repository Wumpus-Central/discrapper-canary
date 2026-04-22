n.d(t, { A: () => q });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(284009),
    o = n.n(r),
    c = n(311907),
    d = n(990078),
    u = n(789645),
    _ = n(297152),
    A = n(939249),
    p = n(778712),
    h = n(463930),
    g = n(834730),
    m = n(408278),
    x = n(117723),
    f = n(243721),
    C = n(475825),
    E = n(442433),
    j = n(730134),
    b = n(964486),
    N = n(80682),
    T = n(58736),
    I = n(967144),
    v = n(342296),
    S = n(696451),
    y = n(576705),
    O = n(290863),
    L = n(849736),
    R = n(113783),
    U = n(925931),
    w = n(105530),
    P = n(699970),
    k = n(345687),
    M = n(818348),
    G = n(985018),
    D = n(821182);
let V = l.memo(function (e) {
        let { toggleRequestToSpeakSidebar: t, chatOpen: n } = e,
            l = (0, i.jsx)(T.Ay.Icon, { icon: u.P, tooltip: G.intl.string(G.t.cpT0Cq), onClick: t });
        return (0, i.jsxs)(T.Ay, {
            toolbar: l,
            className: s()(D.N1, { [D.X_]: n }),
            children: [
                (0, i.jsx)(T.Ay.Icon, { icon: _.E, disabled: !0, "aria-label": G.intl.string(G.t.TYZgzW) }),
                (0, i.jsx)(T.Ay.Title, { children: G.intl.string(G.t.TYZgzW) }),
            ],
        });
    }),
    B = l.memo(function (e) {
        let { channel: t, participant: a, tempDisableOnInit: s = !1 } = e,
            r = l.useRef(null),
            [_, f] = l.useState(s);
        (0, b.Ay)(() => {
            if (!_) return;
            let e = setTimeout(() => f(!1), 1e3);
            return () => clearTimeout(e);
        });
        let C = t.getGuildId();
        o()(null != C, "Channel cannot be guildless");
        let { isMobile: T, status: y } = (0, c.cf)([O.A], () => ({
                isMobile: O.A.isMobileOnline(a.user.id),
                status: O.A.getStatus(a.user.id, C),
            })),
            R = (0, c.bG)([S.Ay], () => S.Ay.getMember(C, a.user.id)),
            P = (0, I.gn)(t.guild_id, R?.userId, R?.colorStrings ?? null),
            k = l.useMemo(() => ({ [C]: [a.user.id] }), [C, a.user.id]);
        (0, N.Eq)(k, "RequestToSpeakSidebar");
        let M = a.rtsState === w.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            V = (e) => {
                (0, E.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("97262"),
                        n.e("42128"),
                        n.e("84841"),
                        n.e("79842"),
                    ]).then(n.bind(n, 107632));
                    return (n) => (0, i.jsx)(e, { ...n, user: a.user, guildId: C, channel: t, showMediaItems: !0 });
                });
            };
        return (0, i.jsxs)("div", {
            className: D.fn,
            children: [
                (0, i.jsx)(v.A, {
                    targetElementRef: r,
                    user: a.user,
                    guildId: t.guild_id,
                    channelId: t.id,
                    position: "left",
                    spacing: 16,
                    clickTrap: !0,
                    children: (e) =>
                        (0, i.jsxs)(A.D, {
                            innerRef: r,
                            className: D.$u,
                            onContextMenu: V,
                            ...e,
                            children: [
                                (0, i.jsx)(j.A, {
                                    size: p._3.SIZE_40,
                                    className: D.RB,
                                    user: a.user,
                                    isMobile: T,
                                    status: y,
                                }),
                                (0, i.jsxs)("div", {
                                    className: D.kH,
                                    children: [
                                        (0, i.jsx)(h.g, {
                                            name: a.userNick,
                                            colorString: R?.colorString ?? null,
                                            colorStrings: P,
                                            className: D.F8,
                                        }),
                                        (0, i.jsx)(g.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: (0, U.g)(a),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                }),
                (0, i.jsxs)("div", {
                    className: D.UD,
                    children: [
                        (0, i.jsx)(d.m, {
                            text: M ? G.intl.string(G.t.h9rsTd) : G.intl.string(G.t.f0T7hI),
                            asContainer: !0,
                            children: (0, i.jsx)(m.K, {
                                onClick: function () {
                                    (0, L.lL)(t, a.user.id, !1);
                                },
                                disabled: M || _,
                                icon: x.L,
                                variant: "secondary",
                                "aria-label": M ? G.intl.string(G.t.h9rsTd) : G.intl.string(G.t.f0T7hI),
                            }),
                        }),
                        (0, i.jsx)(d.m, {
                            text: G.intl.string(G.t.moABMy),
                            asContainer: !0,
                            children: (0, i.jsx)(m.K, {
                                "aria-label": G.intl.string(G.t.moABMy),
                                onClick: function () {
                                    (0, L.lL)(t, a.user.id, !0);
                                },
                                icon: u.P,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    z = l.memo(function (e) {
        let { channel: t } = e,
            [n, l] = (0, P.X)(t.id);
        return (0, i.jsx)(f.d, { label: G.intl.string(G.t.GYCh0W), checked: n, onChange: l });
    }),
    K = l.memo(function () {
        return (0, i.jsxs)("div", {
            className: D.y7,
            children: [
                (0, i.jsx)(k.A, {}),
                (0, i.jsx)(g.E, {
                    className: D.vo,
                    variant: "text-lg/semibold",
                    color: "text-strong",
                    children: G.intl.string(G.t["7R24mX"]),
                }),
                (0, i.jsx)(g.E, {
                    className: D.XG,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: G.intl.string(G.t.Rpr2s0),
                }),
            ],
        });
    });
function q(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: l } = e,
        a = (0, R.J2)(t.id),
        r = [
            +!!(0, c.bG)([y.A], () => y.A.can(M.xB.MANAGE_CHANNELS, t) || y.A.can(M.xB.MANAGE_ROLES, t)),
            Math.max(1, a.length),
        ];
    return (0, i.jsxs)("div", {
        className: s()(D.kL, { [D.X_]: l }),
        children: [
            (0, i.jsx)(V, { toggleRequestToSpeakSidebar: n, chatOpen: l }),
            (0, i.jsx)(C.OZ, {
                className: D.hQ,
                sections: r,
                sectionHeight: function (e) {
                    return 40 * (1 === e);
                },
                rowHeight: function (e) {
                    switch (e) {
                        case 0:
                            return 66;
                        case 1:
                            if (0 === a.length) return 178;
                            return 48;
                    }
                    return 0;
                },
                renderRow: function (e) {
                    let { section: n, row: l } = e;
                    switch (n) {
                        case 0:
                            return (0, i.jsx)(z, { channel: t }, "rts-toggle");
                        case 1: {
                            if (0 === a.length) return (0, i.jsx)(K, {}, "participants-empty");
                            let e = a[l];
                            return (0, i.jsx)(B, { channel: t, participant: e, tempDisableOnInit: !0 }, e.id);
                        }
                    }
                    return null;
                },
                renderSection: function (e) {
                    let { section: t } = e;
                    return 1 === t
                        ? (0, i.jsx)(
                              g.E,
                              {
                                  className: D.Vu,
                                  variant: "text-xs/bold",
                                  color: "text-default",
                                  children:
                                      a.length > 0
                                          ? G.intl.formatToPlainString(G.t["5z7q5a"], { numHands: a.length })
                                          : G.intl.string(G.t.TYZgzW),
                              },
                              "participants-section",
                          )
                        : null;
                },
            }),
        ],
    });
}
