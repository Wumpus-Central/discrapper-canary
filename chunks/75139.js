n.d(t, { A: () => Q });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(91871),
    o = n.n(r),
    c = n(562708),
    d = n(17928),
    u = n(661531),
    h = n(939249),
    p = n(97808),
    m = n(778712),
    A = n(834730),
    f = n(428678),
    x = n(952270),
    g = n(104510),
    C = n(789645),
    j = n(177953),
    y = n(683438),
    I = n(475825),
    N = n(367513),
    E = n(442433),
    v = n(59520),
    b = n(793574),
    S = n(688810),
    _ = n(139286),
    T = n(43189),
    R = n(480890),
    O = n(812771),
    L = n(58736),
    P = n(267102),
    M = n(342296),
    w = n(280450),
    U = n(696451),
    D = n(576705),
    V = n(996439),
    k = n(63995),
    G = n(113783),
    B = n(518769),
    F = n(776781),
    z = n(105530),
    H = n(224648),
    W = n(374873);
n(276831);
var Y = n(806931),
    $ = n(818348),
    K = n(549420),
    X = n(105292),
    q = n(645265);
let Z = l.memo(function (e) {
    let { participant: t, channel: a, guildId: r, showRequestToSpeakActions: o = !1 } = e,
        { user: C, userNick: j, blocked: y, ignored: I, rtsState: N } = t,
        v = l.useRef(null),
        T = (0, P.Us)(),
        { newestAnalyticsLocation: O } = (0, S.Ay)(b.A.AUDIENCE_TILE),
        L = (0, d.bG)([U.Ay], () => U.Ay.getMember(r, C.id)?.premiumSince != null, [r, C.id]),
        D = N === z.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
    function V(e) {
        ((0, _.x)({
            type: c.ImpressionTypes.MENU,
            name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: {
                location: "StageAudienceSidebar",
                is_tile_owner: C.id === w.default.getId(),
                tile_type: Y.qs.USER,
            },
        }),
            (0, E.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("463317"),
                        n.e("893190"),
                        n.e("189673"),
                        n.e("882073"),
                        n.e("797558"),
                        n.e("691994"),
                        n.e("229787"),
                        n.e("576665"),
                        n.e("624198"),
                        n.e("715038"),
                        n.e("245996"),
                        n.e("529422"),
                        n.e("823427"),
                        n.e("242204"),
                        n.e("307059"),
                        n.e("449145"),
                        n.e("343116"),
                        n.e("470314"),
                        n.e("70515"),
                        n.e("404524"),
                        n.e("654148"),
                        n.e("666939"),
                        n.e("717334"),
                        n.e("184841"),
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
                            onInteraction: (0, R.s)("GuildChannelUserContextMenu", O, {
                                targetUserId: C.id,
                                tileType: Y.qs.USER,
                            }),
                        });
                },
                { context: T },
            ));
    }
    return (0, i.jsx)(M.A, {
        targetElementRef: v,
        user: C,
        guildId: r,
        channelId: a.id,
        position: "left",
        spacing: 16,
        clickTrap: !0,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: q.Z8,
                children: [
                    (0, i.jsxs)(h.D, {
                        innerRef: v,
                        className: q.VU,
                        onContextMenu: V,
                        ...e,
                        children: [
                            (0, i.jsx)(p.eu, {
                                src: C.getAvatarURL(r, 32, !1),
                                size: m._3.SIZE_32,
                                className: s()(q.e$, { [q.zj]: y || I }),
                                "aria-hidden": !0,
                            }),
                            (0, i.jsx)(A.E, {
                                className: q.wR,
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: j,
                            }),
                            y ? (0, i.jsx)(f.K, { size: "xs", color: u.A.colors.TEXT_FEEDBACK_CRITICAL }) : null,
                            I ? (0, i.jsx)(x.EyeSlashIcon, { size: "xs", color: u.A.colors.ICON_MUTED }) : null,
                            L ? (0, i.jsx)(g._, { size: "xs", color: u.A.unsafe_rawColors.GUILD_BOOSTING_PINK }) : null,
                        ],
                    }),
                    o ? (0, i.jsx)(W.s6, { channel: a, userId: C.id, awaitingUserAck: D }) : null,
                ],
            }),
    });
});
function Q(e) {
    var t;
    let n,
        a,
        { channel: s, guildId: r, maxWidth: c } = e,
        u = (0, F.Ni)(s.id),
        h = (0, d.bG)([D.A], () => D.A.can($.xB.MANAGE_CHANNELS, s) || D.A.can($.xB.MANAGE_ROLES, s)),
        p = (0, G.J2)(s.id),
        m =
            ((t = s.id),
            (n = (0, d.bG)([k.A], () => [t, k.A.getParticipantsVersion(t)], [t], V.D)),
            (a = l.useMemo(() => [...k.A.getMutableParticipants(n[0], B.ip.AUDIENCE)], [n])),
            (0, v.J)(a, (0, H.Uo)(t))),
        [f, x] = l.useState(""),
        g = l.useDeferredValue(f),
        E = u ? g.trim() : "",
        b = "" !== E,
        S = l.useMemo(() => {
            if ("" === E) return m;
            let e = E.toLowerCase();
            return m.filter(
                (t) =>
                    o()(e, t.user.username.toLowerCase()) ||
                    (null != t.user.globalName && o()(e, t.user.globalName.toLowerCase())) ||
                    o()(e, t.userNick.toLowerCase()),
            );
        }, [m, E]),
        _ = [p.length, Math.max(1, S.length)],
        R = (0, i.jsx)(L.Ay.Icon, {
            icon: C.P,
            tooltip: X.intl.string(X.t.cpT0Cq),
            onClick: () => N.A.updateStageAudienceSidebarOpen(s.id, !1),
        });
    return (0, i.jsx)(O.A, {
        sidebarType: O.X.StageAudienceSidebar,
        maxWidth: c,
        minWidth: 240,
        floatingLayer: T.Ay,
        children: (0, i.jsxs)("div", {
            className: q.kL,
            children: [
                (0, i.jsxs)(L.Ay, {
                    toolbar: R,
                    "aria-label": X.intl.string(X.t.suRApw),
                    children: [
                        (0, i.jsx)(L.Ay.ChannelIcon, { icon: j.n, "aria-label": X.intl.string(X.t.suRApw) }),
                        (0, i.jsx)(L.Ay.Title, { children: X.intl.string(X.t.suRApw) }),
                    ],
                }),
                h || u
                    ? (0, i.jsxs)("div", {
                          className: q.ne,
                          children: [
                              h ? (0, i.jsx)(W.d1, { useVerboseLabel: !0, channel: s }) : null,
                              u
                                  ? (0, i.jsx)(y.I, {
                                        query: f,
                                        onChange: x,
                                        onClear: () => x(""),
                                        "aria-label": X.intl.string(K.default.sFXd49),
                                        placeholder: X.intl.string(K.default.sFXd49),
                                    })
                                  : null,
                          ],
                      })
                    : null,
                (0, i.jsx)(I.OZ, {
                    className: q.p_,
                    sections: _,
                    sectionHeight: function (e) {
                        switch (e) {
                            case 0:
                                return 40 * (p.length > 0);
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
                                return S.length > 0 ? 40 : 88;
                        }
                        return 0;
                    },
                    renderRow: function (e) {
                        let { section: t, row: n } = e;
                        switch (t) {
                            case 0: {
                                let e = p[n];
                                return (0, i.jsx)(
                                    Z,
                                    { participant: e, channel: s, guildId: r, showRequestToSpeakActions: u },
                                    `request-${e.id}`,
                                );
                            }
                            case 1: {
                                if (0 === S.length)
                                    return (0, i.jsxs)(
                                        "div",
                                        {
                                            className: q.p$,
                                            children: [
                                                (0, i.jsx)(A.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    children: b
                                                        ? X.intl.string(K.default.Hn6jKn)
                                                        : X.intl.string(X.t.FsP3VU),
                                                }),
                                                (0, i.jsx)(A.E, {
                                                    className: q.XG,
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    children: b
                                                        ? X.intl.format(K.default["0lYpuQ"], { query: E })
                                                        : X.intl.string(K.default.eo2IxJ),
                                                }),
                                            ],
                                        },
                                        "audience-empty",
                                    );
                                let e = S[n];
                                return (0, i.jsx)(Z, { participant: e, channel: s, guildId: r }, `audience-${e.id}`);
                            }
                        }
                        return null;
                    },
                    renderSection: function (e) {
                        let { section: t } = e;
                        switch (t) {
                            case 0:
                                if (0 === p.length) break;
                                return (0, i.jsx)(
                                    A.E,
                                    {
                                        className: q.bV,
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: X.intl.formatToPlainString(X.t["5z7q5a"], { numHands: p.length }),
                                    },
                                    "requests-section",
                                );
                            case 1:
                                return (0, i.jsx)(
                                    A.E,
                                    {
                                        className: q.bV,
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: b
                                            ? X.intl.formatToPlainString(K.default.C6rvri, {
                                                  filteredSize: S.length,
                                                  totalSize: m.length,
                                              })
                                            : X.intl.formatToPlainString(X.t.vUrsZ9, { audienceSize: m.length }),
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
}
