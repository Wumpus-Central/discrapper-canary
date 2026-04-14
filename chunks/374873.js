n.d(t, { A: () => U });
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
    _ = n(964486),
    m = n(80682),
    p = n(58736),
    g = n(967144),
    f = n(342296),
    E = n(696451),
    x = n(576705),
    I = n(290863),
    C = n(849736),
    N = n(113783),
    T = n(925931),
    S = n(105530),
    b = n(699970),
    y = n(345687),
    v = n(818348),
    j = n(985018),
    R = n(142126);
let O = l.memo(function (e) {
        let { toggleRequestToSpeakSidebar: t, chatOpen: n } = e,
            l = (0, i.jsx)(p.Ay.Icon, { icon: u.PGe, tooltip: j.intl.string(j.t.cpT0Cq), onClick: t });
        return (0, i.jsxs)(p.Ay, {
            toolbar: l,
            className: a()(R.N1, { [R.X_]: n }),
            children: [
                (0, i.jsx)(p.Ay.Icon, { icon: u.E7M, disabled: !0, "aria-label": j.intl.string(j.t.TYZgzW) }),
                (0, i.jsx)(p.Ay.Title, { children: j.intl.string(j.t.TYZgzW) }),
            ],
        });
    }),
    L = l.memo(function (e) {
        let { channel: t, participant: s, tempDisableOnInit: a = !1 } = e,
            r = l.useRef(null),
            [p, x] = l.useState(a);
        (0, _.Ay)(() => {
            if (!p) return;
            let e = setTimeout(() => x(!1), 1e3);
            return () => clearTimeout(e);
        });
        let N = t.getGuildId();
        o()(null != N, "Channel cannot be guildless");
        let { isMobile: b, status: y } = (0, d.cf)([I.A], () => ({
                isMobile: I.A.isMobileOnline(s.user.id),
                status: I.A.getStatus(s.user.id, N),
            })),
            v = (0, d.bG)([E.Ay], () => E.Ay.getMember(N, s.user.id)),
            O = (0, g.gn)(t.guild_id, v?.userId, v?.colorStrings ?? null),
            L = l.useMemo(() => ({ [N]: [s.user.id] }), [N, s.user.id]);
        (0, m.Eq)(L, "RequestToSpeakSidebar");
        let M = s.rtsState === S.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            D = (e) => {
                (0, h.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("97262"),
                        n.e("42128"),
                        n.e("84841"),
                        n.e("50970"),
                    ]).then(n.bind(n, 107632));
                    return (n) => (0, i.jsx)(e, { ...n, user: s.user, guildId: N, channel: t, showMediaItems: !0 });
                });
            };
        return (0, i.jsxs)("div", {
            className: R.fn,
            children: [
                (0, i.jsx)(f.A, {
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
                            onContextMenu: D,
                            ...e,
                            children: [
                                (0, i.jsx)(A.A, {
                                    size: u._3J.SIZE_40,
                                    className: R.RB,
                                    user: s.user,
                                    isMobile: b,
                                    status: y,
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
                                            children: (0, T.g)(s),
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
                            text: M ? j.intl.string(j.t.h9rsTd) : j.intl.string(j.t.f0T7hI),
                            asContainer: !0,
                            children: (0, i.jsx)(u.K0, {
                                onClick: function () {
                                    (0, C.lL)(t, s.user.id, !1);
                                },
                                disabled: M || p,
                                icon: u.LvC,
                                variant: "secondary",
                                "aria-label": M ? j.intl.string(j.t.h9rsTd) : j.intl.string(j.t.f0T7hI),
                            }),
                        }),
                        (0, i.jsx)(c.m, {
                            text: j.intl.string(j.t.moABMy),
                            asContainer: !0,
                            children: (0, i.jsx)(u.K0, {
                                "aria-label": j.intl.string(j.t.moABMy),
                                onClick: function () {
                                    (0, C.lL)(t, s.user.id, !0);
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
    M = l.memo(function (e) {
        let { channel: t } = e,
            [n, l] = (0, b.X)(t.id);
        return (0, i.jsx)(u.dOG, { label: j.intl.string(j.t.GYCh0W), checked: n, onChange: l });
    }),
    D = l.memo(function () {
        return (0, i.jsxs)("div", {
            className: R.y7,
            children: [
                (0, i.jsx)(y.A, {}),
                (0, i.jsx)(u.Text, {
                    className: R.vo,
                    variant: "text-lg/semibold",
                    color: "text-strong",
                    children: j.intl.string(j.t["7R24mX"]),
                }),
                (0, i.jsx)(u.Text, {
                    className: R.XG,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: j.intl.string(j.t.Rpr2s0),
                }),
            ],
        });
    });
function U(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: l } = e,
        s = (0, N.J2)(t.id),
        r = [
            +!!(0, d.bG)([x.A], () => x.A.can(v.xB.MANAGE_CHANNELS, t) || x.A.can(v.xB.MANAGE_ROLES, t)),
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
                            return (0, i.jsx)(M, { channel: t }, "rts-toggle");
                        case 1: {
                            if (0 === s.length) return (0, i.jsx)(D, {}, "participants-empty");
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
                                          ? j.intl.formatToPlainString(j.t["5z7q5a"], { numHands: s.length })
                                          : j.intl.string(j.t.TYZgzW),
                              },
                              "participants-section",
                          )
                        : null;
                },
            }),
        ],
    });
}
