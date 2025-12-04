n.d(t, { Z: () => O }), n(388685), n(997841);
var i = n(54381),
    s = n(473749),
    l = n(120356),
    r = n.n(l),
    a = n(399606),
    o = n(199849),
    d = n(28664),
    c = n(481060),
    u = n(87051),
    h = n(9156),
    g = n(621600),
    m = n(113449),
    x = n(748756),
    p = n(732760),
    j = n(686660),
    v = n(981631),
    f = n(490897),
    N = n(526761),
    b = n(388032),
    S = n(407937),
    E = n(650455);
function O(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([h.ZP], () => h.ZP.getGuildFlags(t)),
        l = (0, a.e7)([h.ZP], () => {
            let e = h.ZP.getGuildUnreadSetting(t),
                n = h.ZP.getMessageNotifications(t);
            return e === f.i.UNSET ? (n === v.bL.ALL_MESSAGES ? f.i.ALL_MESSAGES : f.i.ONLY_MENTIONS) : e;
        }),
        r = (0, a.e7)([h.ZP], () => h.ZP.getMessageNotifications(t)),
        [E, O] = (0, s.useState)(!1),
        L = E ? j.s8.CUSTOM : (0, j.gs)(l, r);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)("div", {
                className: S.segmentedControlsContainer,
                children: (0, i.jsx)(c.sY7, {
                    value: L,
                    options: [
                        {
                            value: j.s8.ALL_MESSAGES,
                            name: b.intl.string(b.t.hZrr6k),
                        },
                        {
                            value: j.s8.MENTIONS,
                            name: b.intl.string(b.t.y59NJm),
                        },
                        {
                            value: j.s8.NOTHING,
                            name: b.intl.string(b.t["pGn/bJ"]),
                        },
                        {
                            value: j.s8.CUSTOM,
                            name: b.intl.string(b.t["32yow9"]),
                        },
                    ],
                    onChange: (e) => {
                        let { value: n } = e;
                        return n === j.s8.CUSTOM ? void O(!0) : (O(!1), void (0, x.V)(t, n));
                    },
                    className: S.segmentedControl,
                    look: "pill",
                }),
            }),
            (0, i.jsx)("div", { className: S.presetSeparator }),
            (0, i.jsxs)("div", {
                className: S.customPresetsContainer,
                children: [
                    (0, i.jsxs)("div", {
                        className: S.grid,
                        children: [(0, i.jsx)(C, { unreadSetting: l }), (0, i.jsx)(Z, { notificationSetting: r })],
                    }),
                    (0, i.jsxs)("div", {
                        className: S.grid,
                        children: [
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-sm/semibold",
                                        color: "header-primary",
                                        children: b.intl.string(b.t.Tqd1Af),
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: b.intl.string(b.t.RpQgm5),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-sm/semibold",
                                        color: "header-primary",
                                        children: b.intl.string(b.t["1m22ZB"]),
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: b.intl.string(b.t["4bP2ZZ"]),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: S.grid,
                        children: [
                            (0, i.jsx)(o.y6, {
                                value: l,
                                className: S.input,
                                onChange: (e) => {
                                    O(!1),
                                        u.Z.updateGuildNotificationSettings(
                                            t,
                                            {
                                                flags: (0, m.Q4)(
                                                    n,
                                                    e === f.i.ALL_MESSAGES
                                                        ? N.vc.UNREADS_ALL_MESSAGES
                                                        : N.vc.UNREADS_ONLY_MENTIONS,
                                                ),
                                            },
                                            g.UE.unreads(e),
                                        );
                                },
                                options: (0, p.y)({ notificationSetting: r }),
                                renderOptionLabel: (e) => {
                                    let t = e.disabled && e.value === f.i.ONLY_MENTIONS && l !== f.i.ONLY_MENTIONS;
                                    return (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)("div", {
                                                children: (0, i.jsx)(c.Text, {
                                                    variant: "text-md/normal",
                                                    color: e.disabled ? "text-muted" : void 0,
                                                    children: e.label,
                                                }),
                                            }),
                                            t &&
                                                (0, i.jsx)(d.u, {
                                                    text: b.intl.string(b.t.eP8yWU),
                                                    children: (0, i.jsx)(c.t6m, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        className: S.muted,
                                                    }),
                                                }),
                                        ],
                                    });
                                },
                            }),
                            (0, i.jsx)(o.y6, {
                                className: S.input,
                                value: r,
                                onChange: (e) => {
                                    O(!1);
                                    let n = { message_notifications: e };
                                    e === v.bL.ALL_MESSAGES &&
                                        l !== f.i.ALL_MESSAGES &&
                                        (n.flags = (0, m.Q4)(h.ZP.getGuildFlags(t), N.vc.UNREADS_ALL_MESSAGES)),
                                        u.Z.updateGuildNotificationSettings(t, n, g.UE.notifications(e));
                                },
                                options: (0, p.d)({ notificationSetting: r }),
                                renderOptionLabel: (e) => {
                                    let t =
                                        e.value === v.bL.ALL_MESSAGES &&
                                        l !== f.i.ALL_MESSAGES &&
                                        r !== v.bL.ALL_MESSAGES;
                                    return (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(c.Text, {
                                                variant: "text-md/normal",
                                                children: e.label,
                                            }),
                                            t &&
                                                (0, i.jsx)(d.u, {
                                                    text: b.intl.string(b.t.idXSbI),
                                                    children: (0, i.jsx)(c.d3s, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        className: S.muted,
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
function C(e) {
    let { unreadSetting: t } = e,
        n = [
            {
                badged: !0,
                unread: !0,
                muted: !1,
                name: b.intl.string(b.t.EjLobP),
            },
            {
                badged: !1,
                unread: !0,
                muted: !0,
                name: b.intl.string(b.t.Wgpwpp),
            },
            {
                badged: !1,
                unread: !1,
                muted: !0,
                name: b.intl.string(b.t.g9VImh),
            },
        ];
    return (
        t === f.i.ALL_MESSAGES && (n[1].muted = !1),
        (0, i.jsx)("div", {
            className: S.channeList,
            children: n.map((e) =>
                (0, i.jsxs)(
                    "div",
                    {
                        className: S.channelListChannel,
                        children: [
                            (0, i.jsxs)("div", {
                                className: S.channelListChannelName,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: r()(S.unread, {
                                            [S.hidden]: !e.unread,
                                            [S.unreadMuted]: e.muted,
                                        }),
                                    }),
                                    (0, i.jsx)(c.VL1, {
                                        size: "xxs",
                                        color: "currentColor",
                                        className: r()(S.channelListChannelIcon, { [S.muted]: e.muted }),
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-xs/normal",
                                        color: e.muted ? "text-muted" : void 0,
                                        children: e.name,
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: r()(S.badge, { [S.hidden]: !e.badged }),
                                children: (0, i.jsx)(c.mAB, { count: 1 }),
                            }),
                        ],
                    },
                    e.name,
                ),
            ),
        })
    );
}
function Z(e) {
    return (0, i.jsxs)("div", {
        className: S.mockMessage,
        children: [
            e.notificationSetting === v.bL.NO_MESSAGES && (0, i.jsx)("div", { className: S.mockMessageDisabled }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)("img", {
                    className: S.mockMessageAvatar,
                    src: E,
                    alt: "",
                }),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        children: b.intl.string(b.t.qSq0tD),
                    }),
                    e.notificationSetting === v.bL.ALL_MESSAGES &&
                        (0, i.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: b.intl.string(b.t.WYyzI5),
                        }),
                    e.notificationSetting !== v.bL.ALL_MESSAGES &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-link",
                                    tag: "span",
                                    children: ["@Roka", " "],
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    tag: "span",
                                    children: b.intl.string(b.t.WYyzI5),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
