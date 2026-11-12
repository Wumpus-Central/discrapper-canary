var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(91871),
    o = n.n(r),
    c = n(613412),
    d = n(855986),
    u = n(646514),
    h = n(939249),
    p = n(97808),
    m = n(778712),
    A = n(834730),
    f = n(428678),
    g = n(952270),
    x = n(104510),
    C = n(789645),
    y = n(177953),
    I = n(683438),
    j = n(475825),
    v = n(367513),
    N = n(442433),
    E = n(793574),
    b = n(688810),
    S = n(139286),
    T = n(43189),
    _ = n(480890),
    R = n(812771),
    O = n(58736),
    L = n(267102),
    P = n(342296),
    w = n(46653),
    M = n(696451),
    U = n(113783),
    D = n(776781),
    V = n(105530),
    G = n(224648),
    k = n(374873);
n(276831);
var B = n(806931),
    F = n(383899),
    z = n(792996),
    H = n(645265);
let W = l.memo(function (e) {
    let { participant: t, channel: a, guildId: r, showRequestToSpeakActions: o = !1 } = e,
        { user: C, userNick: y, blocked: I, ignored: j, rtsState: v } = t,
        T = l.useRef(null),
        R = (0, L.Us)(),
        { newestAnalyticsLocation: O } = (0, b.Ay)(E.A.AUDIENCE_TILE),
        U = (0, d.bG)([M.Ay], () => M.Ay.getMember(r, C.id)?.premiumSince != null, [r, C.id]),
        D = v === V.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
    function G(e) {
        ((0, S.x)({
            type: c.ImpressionTypes.MENU,
            name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: {
                location: "StageAudienceSidebar",
                is_tile_owner: C.id === w.default.getId(),
                tile_type: B.qs.USER,
            },
        }),
            (0, N.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([
                        n.e(463317),
                        n.e(893190),
                        n.e(189673),
                        n.e(576432),
                        n.e(797558),
                        n.e(451162),
                        n.e(229787),
                        n.e(576665),
                        n.e(624198),
                        n.e(715038),
                        n.e(245996),
                        n.e(144472),
                        n.e(529422),
                        n.e(823427),
                        n.e(242204),
                        n.e(307059),
                        n.e(495861),
                        n.e(343116),
                        n.e(470314),
                        n.e(70515),
                        n.e(404524),
                        n.e(654148),
                        n.e(666939),
                        n.e(281165),
                        n.e(184841),
                    ]).then(n.bind(n, 107632));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            user: C,
                            guildId: r,
                            channel: a,
                            showMediaItems: !0,
                            showStageChannelItems: !0,
                            showChatItems: !1,
                            onInteraction: (0, _.s)("GuildChannelUserContextMenu", O, {
                                targetUserId: C.id,
                                tileType: B.qs.USER,
                            }),
                        });
                },
                { context: R },
            ));
    }
    return (0, i.jsx)(P.A, {
        targetElementRef: T,
        user: C,
        guildId: r,
        channelId: a.id,
        position: "left",
        spacing: 16,
        clickTrap: !0,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: H.Z8,
                children: [
                    (0, i.jsxs)(h.D, {
                        innerRef: T,
                        className: H.VU,
                        onContextMenu: G,
                        ...e,
                        children: [
                            (0, i.jsx)(p.eu, {
                                src: C.getAvatarURL(r, 32, !1),
                                size: m._3.SIZE_32,
                                className: s()(H.e$, { [H.zj]: I || j }),
                                "aria-hidden": !0,
                            }),
                            (0, i.jsx)(A.E, {
                                className: H.wR,
                                variant: "body-sm/medium",
                                color: "text-strong",
                                children: y,
                            }),
                            I ? (0, i.jsx)(f.DenyIcon, { size: "xs", color: u.A.colors.TEXT_FEEDBACK_CRITICAL }) : null,
                            j ? (0, i.jsx)(g.EyeSlashIcon, { size: "xs", color: u.A.colors.ICON_MUTED }) : null,
                            U
                                ? (0, i.jsx)(x.BoostGemIcon, {
                                      size: "xs",
                                      color: u.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                  })
                                : null,
                        ],
                    }),
                    o ? (0, i.jsx)(k.s6, { channel: a, userId: C.id, awaitingUserAck: D }) : null,
                ],
            }),
    });
});
n.d(
    t,
    {},
    {
        A: function (e) {
            let { channel: t, guildId: n, maxWidth: a } = e,
                s = (0, D.Ni)(t.id),
                r = (0, D.Oq)(t),
                c = (0, U.J2)(t.id),
                d = (0, G.wB)(t.id),
                [u, h] = l.useState(""),
                p = l.useDeferredValue(u),
                m = s ? p.trim() : "",
                f = "" !== m,
                g = l.useMemo(() => {
                    if ("" === m) return d;
                    let e = m.toLowerCase();
                    return d.filter(
                        (t) =>
                            o()(e, t.user.username.toLowerCase()) ||
                            (null != t.user.globalName && o()(e, t.user.globalName.toLowerCase())) ||
                            o()(e, t.userNick.toLowerCase()),
                    );
                }, [d, m]),
                x = [c.length, Math.max(1, g.length)],
                N = (0, i.jsx)(O.Ay.Icon, {
                    icon: C.XSmallIcon,
                    tooltip: z.intl.string(z.t.cpT0Cq),
                    onClick: () => v.A.updateStageAudienceSidebarOpen(t.id, !1),
                });
            return (0, i.jsx)(R.A, {
                sidebarType: R.X.StageAudienceSidebar,
                maxWidth: a,
                minWidth: 240,
                floatingLayer: T.Ay,
                children: (0, i.jsxs)("div", {
                    className: H.kL,
                    children: [
                        (0, i.jsxs)(O.Ay, {
                            toolbar: N,
                            "aria-label": z.intl.string(z.t.suRApw),
                            children: [
                                (0, i.jsx)(O.Ay.ChannelIcon, {
                                    icon: y.GroupIcon,
                                    "aria-label": z.intl.string(z.t.suRApw),
                                }),
                                (0, i.jsx)(O.Ay.Title, { children: z.intl.string(z.t.suRApw) }),
                            ],
                        }),
                        r || s
                            ? (0, i.jsxs)("div", {
                                  className: H.ne,
                                  children: [
                                      r ? (0, i.jsx)(k.d1, { useVerboseLabel: !0, channel: t }) : null,
                                      s
                                          ? (0, i.jsx)(I.I, {
                                                query: u,
                                                onChange: h,
                                                onClear: () => h(""),
                                                "aria-label": z.intl.string(F.default.sFXd49),
                                                placeholder: z.intl.string(F.default.sFXd49),
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        (0, i.jsx)(j.OZ, {
                            className: H.p_,
                            sections: x,
                            sectionHeight: function (e) {
                                switch (e) {
                                    case 0:
                                        return 40 * (c.length > 0);
                                    case 1:
                                        return 40;
                                }
                                return 0;
                            },
                            rowHeight: function (e) {
                                switch (e) {
                                    case 0:
                                        return 40;
                                    case 1:
                                        return g.length > 0 ? 40 : 88;
                                }
                                return 0;
                            },
                            renderRow: function (e) {
                                let { section: l, row: a } = e;
                                switch (l) {
                                    case 0: {
                                        let e = c[a];
                                        return (0, i.jsx)(
                                            W,
                                            { participant: e, channel: t, guildId: n, showRequestToSpeakActions: s },
                                            `request-${e.id}`,
                                        );
                                    }
                                    case 1: {
                                        if (0 === g.length)
                                            return (0, i.jsxs)(
                                                "div",
                                                {
                                                    className: H.p$,
                                                    children: [
                                                        (0, i.jsx)(A.E, {
                                                            variant: "body-lg/semibold",
                                                            color: "text-strong",
                                                            children: f
                                                                ? z.intl.string(F.default.Hn6jKn)
                                                                : z.intl.string(z.t.FsP3VU),
                                                        }),
                                                        (0, i.jsx)(A.E, {
                                                            className: H.XG,
                                                            variant: "body-sm/normal",
                                                            color: "text-default",
                                                            children: f
                                                                ? z.intl.format(F.default["0lYpuQ"], { query: m })
                                                                : z.intl.string(F.default.eo2IxJ),
                                                        }),
                                                    ],
                                                },
                                                "audience-empty",
                                            );
                                        let e = g[a];
                                        return (0, i.jsx)(
                                            W,
                                            { participant: e, channel: t, guildId: n },
                                            `audience-${e.id}`,
                                        );
                                    }
                                }
                                return null;
                            },
                            renderSection: function (e) {
                                let { section: t } = e;
                                switch (t) {
                                    case 0:
                                        if (0 === c.length) break;
                                        return (0, i.jsx)(
                                            A.E,
                                            {
                                                className: H.bV,
                                                variant: "body-xs/semibold",
                                                color: "text-muted",
                                                children: z.intl.formatToPlainString(z.t["5z7q5a"], {
                                                    numHands: c.length,
                                                }),
                                            },
                                            "requests-section",
                                        );
                                    case 1:
                                        return (0, i.jsx)(
                                            A.E,
                                            {
                                                className: H.bV,
                                                variant: "body-xs/semibold",
                                                color: "text-muted",
                                                children: f
                                                    ? z.intl.formatToPlainString(F.default.C6rvri, {
                                                          filteredSize: g.length,
                                                          totalSize: d.length,
                                                      })
                                                    : z.intl.formatToPlainString(z.t.vUrsZ9, {
                                                          audienceSize: d.length,
                                                      }),
                                            },
                                            "audience-section",
                                        );
                                }
                                return null;
                            },
                        }),
                    ],
                }),
            });
        },
    },
);
