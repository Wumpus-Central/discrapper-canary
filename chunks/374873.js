"use strict";
n.d(t, { A: () => G });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r),
    c = n(311907),
    d = n(990078),
    u = n(397927),
    h = n(442433),
    A = n(730134),
    p = n(964486),
    m = n(80682),
    g = n(58736),
    _ = n(967144),
    f = n(342296),
    x = n(696451),
    C = n(576705),
    E = n(290863),
    I = n(849736),
    N = n(113783),
    S = n(925931),
    b = n(105530),
    T = n(699970),
    v = n(345687),
    y = n(818348),
    j = n(985018),
    R = n(684205);
let O = s.memo(function (e) {
        let { toggleRequestToSpeakSidebar: t, chatOpen: n } = e,
            s = (0, i.jsx)(g.Ay.Icon, { icon: u.PGe, tooltip: j.intl.string(j.t.cpT0Cq), onClick: t });
        return (0, i.jsxs)(g.Ay, {
            toolbar: s,
            className: a()(R.N1, { [R.X_]: n }),
            children: [
                (0, i.jsx)(g.Ay.Icon, { icon: u.E7M, disabled: !0, "aria-label": j.intl.string(j.t.TYZgzW) }),
                (0, i.jsx)(g.Ay.Title, { children: j.intl.string(j.t.TYZgzW) }),
            ],
        });
    }),
    L = s.memo(function (e) {
        let { channel: t, participant: l, tempDisableOnInit: a = !1 } = e,
            r = s.useRef(null),
            [g, C] = s.useState(a);
        (0, p.Ay)(() => {
            if (!g) return;
            let e = setTimeout(() => C(!1), 1e3);
            return () => clearTimeout(e);
        });
        let N = t.getGuildId();
        o()(null != N, "Channel cannot be guildless");
        let { isMobile: T, status: v } = (0, c.cf)([E.A], () => ({
                isMobile: E.A.isMobileOnline(l.user.id),
                status: E.A.getStatus(l.user.id, N),
            })),
            y = (0, c.bG)([x.Ay], () => x.Ay.getMember(N, l.user.id)),
            O = (0, _.gn)(t.guild_id, y?.userId, y?.colorStrings ?? null),
            L = s.useMemo(() => ({ [N]: [l.user.id] }), [N, l.user.id]);
        (0, m.Eq)(L, "RequestToSpeakSidebar");
        let M = l.rtsState === b.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            D = (e) => {
                (0, h.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("97262"),
                        n.e("42128"),
                        n.e("84841"),
                        n.e("54266"),
                    ]).then(n.bind(n, 107632));
                    return (n) => (0, i.jsx)(e, { ...n, user: l.user, guildId: N, channel: t, showMediaItems: !0 });
                });
            };
        return (0, i.jsxs)("div", {
            className: R.fn,
            children: [
                (0, i.jsx)(f.A, {
                    targetElementRef: r,
                    user: l.user,
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
                                    user: l.user,
                                    isMobile: T,
                                    status: v,
                                }),
                                (0, i.jsxs)("div", {
                                    className: R.kH,
                                    children: [
                                        (0, i.jsx)(u.gyj, {
                                            name: l.userNick,
                                            colorString: y?.colorString ?? null,
                                            colorStrings: O,
                                            className: R.F8,
                                        }),
                                        (0, i.jsx)(u.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: (0, S.g)(l),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                }),
                (0, i.jsxs)("div", {
                    className: R.UD,
                    children: [
                        (0, i.jsx)(d.m, {
                            text: M ? j.intl.string(j.t.h9rsTd) : j.intl.string(j.t.f0T7hI),
                            asContainer: !0,
                            children: (0, i.jsx)(u.K0, {
                                onClick: function () {
                                    (0, I.lL)(t, l.user.id, !1);
                                },
                                disabled: M || g,
                                icon: u.LvC,
                                variant: "secondary",
                                "aria-label": M ? j.intl.string(j.t.h9rsTd) : j.intl.string(j.t.f0T7hI),
                            }),
                        }),
                        (0, i.jsx)(d.m, {
                            text: j.intl.string(j.t.moABMy),
                            asContainer: !0,
                            children: (0, i.jsx)(u.K0, {
                                "aria-label": j.intl.string(j.t.moABMy),
                                onClick: function () {
                                    (0, I.lL)(t, l.user.id, !0);
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
    M = s.memo(function (e) {
        let { channel: t } = e,
            [n, s] = (0, T.X)(t.id);
        return (0, i.jsx)(u.dOG, { label: j.intl.string(j.t.GYCh0W), checked: n, onChange: s });
    }),
    D = s.memo(function () {
        return (0, i.jsxs)("div", {
            className: R.y7,
            children: [
                (0, i.jsx)(v.A, {}),
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
function G(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: s } = e,
        l = (0, N.J2)(t.id),
        r = [
            +!!(0, c.bG)([C.A], () => C.A.can(y.xB.MANAGE_CHANNELS, t) || C.A.can(y.xB.MANAGE_ROLES, t)),
            Math.max(1, l.length),
        ];
    return (0, i.jsxs)("div", {
        className: a()(R.kL, { [R.X_]: s }),
        children: [
            (0, i.jsx)(O, { toggleRequestToSpeakSidebar: n, chatOpen: s }),
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
                            if (0 === l.length) return 178;
                            return 48;
                    }
                    return 0;
                },
                renderRow: function (e) {
                    let { section: n, row: s } = e;
                    switch (n) {
                        case 0:
                            return (0, i.jsx)(M, { channel: t }, "rts-toggle");
                        case 1: {
                            if (0 === l.length) return (0, i.jsx)(D, {}, "participants-empty");
                            let e = l[s];
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
                                      l.length > 0
                                          ? j.intl.formatToPlainString(j.t["5z7q5a"], { numHands: l.length })
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
