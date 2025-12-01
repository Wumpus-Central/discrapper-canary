n.d(t, { Z: () => E }), n(388685), n(997841);
var i = n(54381),
    s = n(473749),
    l = n(120356),
    r = n.n(l),
    a = n(399606),
    o = n(28664),
    d = n(481060),
    c = n(87051),
    u = n(9156),
    h = n(621600),
    g = n(113449),
    m = n(748756),
    x = n(732760),
    p = n(686660),
    j = n(981631),
    v = n(490897),
    f = n(526761),
    N = n(388032),
    b = n(407937),
    S = n(650455);
function E(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([u.ZP], () => u.ZP.getGuildFlags(t)),
        l = (0, a.e7)([u.ZP], () => {
            let e = u.ZP.getGuildUnreadSetting(t),
                n = u.ZP.getMessageNotifications(t);
            return e === v.i.UNSET ? (n === j.bL.ALL_MESSAGES ? v.i.ALL_MESSAGES : v.i.ONLY_MENTIONS) : e;
        }),
        r = (0, a.e7)([u.ZP], () => u.ZP.getMessageNotifications(t)),
        [S, E] = (0, s.useState)(!1),
        Z = S ? p.s8.CUSTOM : (0, p.gs)(l, r);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)("div", {
                className: b.segmentedControlsContainer,
                children: (0, i.jsx)(d.sY7, {
                    value: Z,
                    options: [
                        {
                            value: p.s8.ALL_MESSAGES,
                            name: N.intl.string(N.t.hZrr6k),
                        },
                        {
                            value: p.s8.MENTIONS,
                            name: N.intl.string(N.t.y59NJm),
                        },
                        {
                            value: p.s8.NOTHING,
                            name: N.intl.string(N.t["pGn/bJ"]),
                        },
                        {
                            value: p.s8.CUSTOM,
                            name: N.intl.string(N.t["32yow9"]),
                        },
                    ],
                    onChange: (e) => {
                        let { value: n } = e;
                        return n === p.s8.CUSTOM ? void E(!0) : (E(!1), void (0, m.V)(t, n));
                    },
                    className: b.segmentedControl,
                    look: "pill",
                }),
            }),
            (0, i.jsx)("div", { className: b.presetSeparator }),
            (0, i.jsxs)("div", {
                className: b.customPresetsContainer,
                children: [
                    (0, i.jsxs)("div", {
                        className: b.grid,
                        children: [(0, i.jsx)(O, { unreadSetting: l }), (0, i.jsx)(C, { notificationSetting: r })],
                    }),
                    (0, i.jsxs)("div", {
                        className: b.grid,
                        children: [
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(d.Text, {
                                        variant: "text-sm/semibold",
                                        color: "header-primary",
                                        children: N.intl.string(N.t.Tqd1Af),
                                    }),
                                    (0, i.jsx)(d.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: N.intl.string(N.t.RpQgm5),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(d.Text, {
                                        variant: "text-sm/semibold",
                                        color: "header-primary",
                                        children: N.intl.string(N.t["1m22ZB"]),
                                    }),
                                    (0, i.jsx)(d.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: N.intl.string(N.t["4bP2ZZ"]),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: b.grid,
                        children: [
                            (0, i.jsx)(d.q4e, {
                                value: l,
                                className: b.input,
                                onChange: (e) => {
                                    E(!1),
                                        c.Z.updateGuildNotificationSettings(
                                            t,
                                            {
                                                flags: (0, g.Q4)(
                                                    n,
                                                    e === v.i.ALL_MESSAGES
                                                        ? f.vc.UNREADS_ALL_MESSAGES
                                                        : f.vc.UNREADS_ONLY_MENTIONS,
                                                ),
                                            },
                                            h.UE.unreads(e),
                                        );
                                },
                                options: (0, x.y)({ notificationSetting: r }),
                                renderOptionLabel: (e) => {
                                    let t = e.disabled && e.value === v.i.ONLY_MENTIONS && l !== v.i.ONLY_MENTIONS;
                                    return (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)("div", {
                                                children: (0, i.jsx)(d.Text, {
                                                    variant: "text-md/normal",
                                                    color: e.disabled ? "text-muted" : void 0,
                                                    children: e.label,
                                                }),
                                            }),
                                            t &&
                                                (0, i.jsx)(o.u, {
                                                    text: N.intl.string(N.t.eP8yWU),
                                                    children: (0, i.jsx)(d.t6m, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        className: b.muted,
                                                    }),
                                                }),
                                        ],
                                    });
                                },
                            }),
                            (0, i.jsx)(d.q4e, {
                                className: b.input,
                                value: r,
                                onChange: (e) => {
                                    E(!1);
                                    let n = { message_notifications: e };
                                    e === j.bL.ALL_MESSAGES &&
                                        l !== v.i.ALL_MESSAGES &&
                                        (n.flags = (0, g.Q4)(u.ZP.getGuildFlags(t), f.vc.UNREADS_ALL_MESSAGES)),
                                        c.Z.updateGuildNotificationSettings(t, n, h.UE.notifications(e));
                                },
                                options: (0, x.d)({ notificationSetting: r }),
                                renderOptionLabel: (e) => {
                                    let t =
                                        e.value === j.bL.ALL_MESSAGES &&
                                        l !== v.i.ALL_MESSAGES &&
                                        r !== j.bL.ALL_MESSAGES;
                                    return (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(d.Text, {
                                                variant: "text-md/normal",
                                                children: e.label,
                                            }),
                                            t &&
                                                (0, i.jsx)(o.u, {
                                                    text: N.intl.string(N.t.idXSbI),
                                                    children: (0, i.jsx)(d.d3s, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        className: b.muted,
                                                    }),
                                                }),
                                        ],
                                    });
                                },
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function O(e) {
    let { unreadSetting: t } = e,
        n = [
            {
                badged: !0,
                unread: !0,
                muted: !1,
                name: N.intl.string(N.t.EjLobP),
            },
            {
                badged: !1,
                unread: !0,
                muted: !0,
                name: N.intl.string(N.t.Wgpwpp),
            },
            {
                badged: !1,
                unread: !1,
                muted: !0,
                name: N.intl.string(N.t.g9VImh),
            },
        ];
    return (
        t === v.i.ALL_MESSAGES && (n[1].muted = !1),
        (0, i.jsx)("div", {
            className: b.channeList,
            children: n.map((e) =>
                (0, i.jsxs)(
                    "div",
                    {
                        className: b.channelListChannel,
                        children: [
                            (0, i.jsxs)("div", {
                                className: b.channelListChannelName,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: r()(b.unread, {
                                            [b.hidden]: !e.unread,
                                            [b.unreadMuted]: e.muted,
                                        }),
                                    }),
                                    (0, i.jsx)(d.VL1, {
                                        size: "xxs",
                                        color: "currentColor",
                                        className: r()(b.channelListChannelIcon, { [b.muted]: e.muted }),
                                    }),
                                    (0, i.jsx)(d.Text, {
                                        variant: "text-xs/normal",
                                        color: e.muted ? "text-muted" : void 0,
                                        children: e.name,
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: r()(b.badge, { [b.hidden]: !e.badged }),
                                children: (0, i.jsx)(d.mAB, { count: 1 }),
                            }),
                        ],
                    },
                    e.name,
                ),
            ),
        })
    );
}
function C(e) {
    return (0, i.jsxs)("div", {
        className: b.mockMessage,
        children: [
            e.notificationSetting === j.bL.NO_MESSAGES && (0, i.jsx)("div", { className: b.mockMessageDisabled }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)("img", {
                    className: b.mockMessageAvatar,
                    src: S,
                    alt: "",
                }),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: "text-xs/medium",
                        children: N.intl.string(N.t.qSq0tD),
                    }),
                    e.notificationSetting === j.bL.ALL_MESSAGES &&
                        (0, i.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: N.intl.string(N.t.WYyzI5),
                        }),
                    e.notificationSetting !== j.bL.ALL_MESSAGES &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-link",
                                    tag: "span",
                                    children: ["@Roka", " "],
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    tag: "span",
                                    children: N.intl.string(N.t.WYyzI5),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
