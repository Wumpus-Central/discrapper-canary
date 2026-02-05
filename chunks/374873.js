n.d(t, { A: () => G });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(311907),
    c = n(990078),
    u = n(397927),
    h = n(442433),
    A = n(730134),
    g = n(964486),
    m = n(80682),
    p = n(58736),
    _ = n(967144),
    x = n(342296),
    f = n(696451),
    E = n(576705),
    C = n(290863),
    I = n(849736),
    S = n(113783),
    b = n(925931),
    N = n(105530),
    T = n(699970),
    j = n(345687),
    v = n(818348),
    y = n(985018),
    R = n(684205);
let O = l.memo(function (e) {
        let { toggleRequestToSpeakSidebar: t, chatOpen: n } = e,
            l = (0, i.jsx)(p.Ay.Icon, { icon: u.PGe, tooltip: y.intl.string(y.t.cpT0Cq), onClick: t });
        return (0, i.jsxs)(p.Ay, {
            toolbar: l,
            className: a()(R.N1, { [R.X_]: n }),
            children: [
                (0, i.jsx)(p.Ay.Icon, { icon: u.E7M, disabled: !0, "aria-label": y.intl.string(y.t.TYZgzW) }),
                (0, i.jsx)(p.Ay.Title, { children: y.intl.string(y.t.TYZgzW) }),
            ],
        });
    }),
    L = l.memo(function (e) {
        let { channel: t, participant: s, tempDisableOnInit: a = !1 } = e,
            r = l.useRef(null),
            [p, E] = l.useState(a);
        (0, g.Ay)(() => {
            if (!p) return;
            let e = setTimeout(() => E(!1), 1e3);
            return () => clearTimeout(e);
        });
        let S = t.getGuildId();
        o()(null != S, "Channel cannot be guildless");
        let { isMobile: T, status: j } = (0, d.cf)([C.A], () => ({
                isMobile: C.A.isMobileOnline(s.user.id),
                status: C.A.getStatus(s.user.id, S),
            })),
            v = (0, d.bG)([f.Ay], () => f.Ay.getMember(S, s.user.id)),
            O = (0, _.gn)(t.guild_id, v?.userId, v?.colorStrings ?? null),
            L = l.useMemo(() => ({ [S]: [s.user.id] }), [S, s.user.id]);
        (0, m.E)(L, "RequestToSpeakSidebar");
        let D = s.rtsState === N.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            M = (e) => {
                (0, h.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("97262"),
                        n.e("42128"),
                        n.e("84841"),
                        n.e("31885"),
                    ]).then(n.bind(n, 107632));
                    return (n) => (0, i.jsx)(e, { ...n, user: s.user, guildId: S, channel: t, showMediaItems: !0 });
                });
            };
        return (0, i.jsxs)("div", {
            className: R.fn,
            children: [
                (0, i.jsx)(x.A, {
                    targetElementRef: r,
                    user: s.user,
                    guildId: t.guild_id,
                    channelId: t.id,
                    position: "left",
                    spacing: 16,
                    clickTrap: !0,
                    children: (e) =>
                        (0, i.jsxs)(u.DUT, {
                            innerRef: r,
                            className: R.$u,
                            onContextMenu: M,
                            ...e,
                            children: [
                                (0, i.jsx)(A.A, {
                                    size: u._3J.SIZE_40,
                                    className: R.RB,
                                    user: s.user,
                                    isMobile: T,
                                    status: j,
                                }),
                                (0, i.jsxs)("div", {
                                    className: R.kH,
                                    children: [
                                        (0, i.jsx)(u.gyj, {
                                            name: s.userNick,
                                            colorString: v?.colorString ?? null,
                                            colorStrings: O,
                                            className: R.F8,
                                        }),
                                        (0, i.jsx)(u.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: (0, b.g)(s),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                }),
                (0, i.jsxs)("div", {
                    className: R.UD,
                    children: [
                        (0, i.jsx)(c.m, {
                            text: D ? y.intl.string(y.t.h9rsTd) : y.intl.string(y.t.f0T7hI),
                            asContainer: !0,
                            children: (0, i.jsx)(u.K0, {
                                onClick: function () {
                                    (0, I.lL)(t, s.user.id, !1);
                                },
                                disabled: D || p,
                                icon: u.LvC,
                                variant: "secondary",
                                "aria-label": D ? y.intl.string(y.t.h9rsTd) : y.intl.string(y.t.f0T7hI),
                            }),
                        }),
                        (0, i.jsx)(c.m, {
                            text: y.intl.string(y.t.moABMy),
                            asContainer: !0,
                            children: (0, i.jsx)(u.K0, {
                                "aria-label": y.intl.string(y.t.moABMy),
                                onClick: function () {
                                    (0, I.lL)(t, s.user.id, !0);
                                },
                                icon: u.PGe,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    D = l.memo(function (e) {
        let { channel: t } = e,
            [n, l] = (0, T.X)(t.id);
        return (0, i.jsx)(u.dOG, { label: y.intl.string(y.t.GYCh0W), checked: n, onChange: l });
    }),
    M = l.memo(function () {
        return (0, i.jsxs)("div", {
            className: R.y7,
            children: [
                (0, i.jsx)(j.A, {}),
                (0, i.jsx)(u.Text, {
                    className: R.vo,
                    variant: "text-lg/semibold",
                    color: "text-strong",
                    children: y.intl.string(y.t["7R24mX"]),
                }),
                (0, i.jsx)(u.Text, {
                    className: R.XG,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: y.intl.string(y.t.Rpr2s0),
                }),
            ],
        });
    });
function G(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: l } = e,
        s = (0, S.J2)(t.id),
        r = [
            +!!(0, d.bG)([E.A], () => E.A.can(v.xB.MANAGE_CHANNELS, t) || E.A.can(v.xB.MANAGE_ROLES, t)),
            Math.max(1, s.length),
        ];
    return (0, i.jsxs)("div", {
        className: a()(R.kL, { [R.X_]: l }),
        children: [
            (0, i.jsx)(O, { toggleRequestToSpeakSidebar: n, chatOpen: l }),
            (0, i.jsx)(u.B8B, {
                className: R.hQ,
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
                    let { section: n, row: l } = e;
                    switch (n) {
                        case 0:
                            return (0, i.jsx)(D, { channel: t }, "rts-toggle");
                        case 1: {
                            if (0 === s.length) return (0, i.jsx)(M, {}, "participants-empty");
                            let e = s[l];
                            return (0, i.jsx)(L, { channel: t, participant: e, tempDisableOnInit: !0 }, e.id);
                        }
                    }
                    return null;
                },
                renderSection: function (e) {
                    let { section: t } = e;
                    return 1 === t
                        ? (0, i.jsx)(
                              u.Text,
                              {
                                  className: R.Vu,
                                  variant: "text-xs/bold",
                                  color: "text-default",
                                  children:
                                      s.length > 0
                                          ? y.intl.formatToPlainString(y.t["5z7q5a"], { numHands: s.length })
                                          : y.intl.string(y.t.TYZgzW),
                              },
                              "participants-section",
                          )
                        : null;
                },
            }),
        ],
    });
}
