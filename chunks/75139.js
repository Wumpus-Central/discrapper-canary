n.d(t, { A: () => J });
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
    y = n(95477),
    I = n(7689),
    N = n(475825),
    E = n(367513),
    v = n(442433),
    b = n(59520),
    _ = n(793574),
    S = n(688810),
    T = n(139286),
    R = n(43189),
    O = n(480890),
    L = n(812771),
    P = n(58736),
    M = n(267102),
    w = n(342296),
    U = n(280450),
    D = n(696451),
    V = n(576705),
    G = n(996439),
    k = n(63995),
    B = n(113783),
    F = n(518769),
    z = n(776781),
    H = n(105530),
    W = n(224648),
    Y = n(374873);
n(276831);
var $ = n(806931),
    K = n(818348),
    X = n(549420),
    q = n(660183),
    Z = n(645265);
let Q = l.memo(function (e) {
    let { participant: t, channel: a, guildId: r, showRequestToSpeakActions: o = !1 } = e,
        { user: C, userNick: j, blocked: y, ignored: I, rtsState: N } = t,
        E = l.useRef(null),
        b = (0, M.Us)(),
        { newestAnalyticsLocation: R } = (0, S.Ay)(_.A.AUDIENCE_TILE),
        L = (0, d.bG)([D.Ay], () => D.Ay.getMember(r, C.id)?.premiumSince != null, [r, C.id]),
        P = N === H.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
    function V(e) {
        ((0, T.x)({
            type: c.ImpressionTypes.MENU,
            name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: {
                location: "StageAudienceSidebar",
                is_tile_owner: C.id === U.default.getId(),
                tile_type: $.qs.USER,
            },
        }),
            (0, v.L3)(
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
                            onInteraction: (0, O.s)("GuildChannelUserContextMenu", R, {
                                targetUserId: C.id,
                                tileType: $.qs.USER,
                            }),
                        });
                },
                { context: b },
            ));
    }
    return (0, i.jsx)(w.A, {
        targetElementRef: E,
        user: C,
        guildId: r,
        channelId: a.id,
        position: "left",
        spacing: 16,
        clickTrap: !0,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: Z.Z8,
                children: [
                    (0, i.jsxs)(h.D, {
                        innerRef: E,
                        className: Z.VU,
                        onContextMenu: V,
                        ...e,
                        children: [
                            (0, i.jsx)(p.eu, {
                                src: C.getAvatarURL(r, 32, !1),
                                size: m._3.SIZE_32,
                                className: s()(Z.e$, { [Z.zj]: y || I }),
                                "aria-hidden": !0,
                            }),
                            (0, i.jsx)(A.E, {
                                className: Z.wR,
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: j,
                            }),
                            y ? (0, i.jsx)(f.K, { size: "xs", color: u.A.colors.TEXT_FEEDBACK_CRITICAL }) : null,
                            I ? (0, i.jsx)(x.EyeSlashIcon, { size: "xs", color: u.A.colors.ICON_MUTED }) : null,
                            L ? (0, i.jsx)(g._, { size: "xs", color: u.A.unsafe_rawColors.GUILD_BOOSTING_PINK }) : null,
                        ],
                    }),
                    o ? (0, i.jsx)(Y.s6, { channel: a, userId: C.id, awaitingUserAck: P }) : null,
                ],
            }),
    });
});
function J(e) {
    var t;
    let n,
        a,
        { channel: s, guildId: r, maxWidth: c } = e,
        u = (0, z.Ni)(s.id),
        h = (0, d.bG)([V.A], () => V.A.can(K.xB.MANAGE_CHANNELS, s) || V.A.can(K.xB.MANAGE_ROLES, s)),
        p = (0, B.J2)(s.id),
        m =
            ((t = s.id),
            (n = (0, d.bG)([k.A], () => [t, k.A.getParticipantsVersion(t)], [t], G.D)),
            (a = l.useMemo(() => [...k.A.getMutableParticipants(n[0], F.ip.AUDIENCE)], [n])),
            (0, b.J)(a, (0, W.Uo)(t))),
        [f, x] = l.useState(""),
        g = l.useDeferredValue(f),
        v = u ? g.trim() : "",
        _ = "" !== v,
        S = l.useMemo(() => {
            if ("" === v) return m;
            let e = v.toLowerCase();
            return m.filter(
                (t) =>
                    o()(e, t.user.username.toLowerCase()) ||
                    (null != t.user.globalName && o()(e, t.user.globalName.toLowerCase())) ||
                    o()(e, t.userNick.toLowerCase()),
            );
        }, [m, v]),
        T = [p.length, Math.max(1, S.length)],
        O = (0, i.jsx)(P.Ay.Icon, {
            icon: C.P,
            tooltip: q.intl.string(q.t.cpT0Cq),
            onClick: () => E.A.updateStageAudienceSidebarOpen(s.id, !1),
        });
    return (0, i.jsx)(L.A, {
        sidebarType: L.X.StageAudienceSidebar,
        maxWidth: c,
        minWidth: 240,
        floatingLayer: R.Ay,
        children: (0, i.jsxs)("div", {
            className: Z.kL,
            children: [
                (0, i.jsxs)(P.Ay, {
                    toolbar: O,
                    "aria-label": q.intl.string(q.t.suRApw),
                    children: [
                        (0, i.jsx)(P.Ay.ChannelIcon, { icon: j.n, "aria-label": q.intl.string(q.t.suRApw) }),
                        (0, i.jsx)(P.Ay.Title, { children: q.intl.string(q.t.suRApw) }),
                    ],
                }),
                h || u
                    ? (0, i.jsxs)("div", {
                          className: Z.ne,
                          children: [
                              h ? (0, i.jsx)(Y.d1, { channel: s }) : null,
                              u
                                  ? (0, i.jsx)(y.k, {
                                        value: f,
                                        clearable: !0,
                                        "aria-label": q.intl.string(X.default.sFXd49),
                                        placeholder: q.intl.string(X.default.sFXd49),
                                        leading: I.MagnifyingGlassIcon,
                                        onChange: x,
                                    })
                                  : null,
                          ],
                      })
                    : null,
                (0, i.jsx)(N.OZ, {
                    className: Z.p_,
                    sections: T,
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
                                    Q,
                                    { participant: e, channel: s, guildId: r, showRequestToSpeakActions: u },
                                    `request-${e.id}`,
                                );
                            }
                            case 1: {
                                if (0 === S.length)
                                    return (0, i.jsxs)(
                                        "div",
                                        {
                                            className: Z.p$,
                                            children: [
                                                (0, i.jsx)(A.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    children: _
                                                        ? q.intl.string(X.default.Hn6jKn)
                                                        : q.intl.string(q.t.FsP3VU),
                                                }),
                                                (0, i.jsx)(A.E, {
                                                    className: Z.XG,
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    children: _
                                                        ? q.intl.format(X.default["0lYpuQ"], { query: v })
                                                        : q.intl.string(X.default.eo2IxJ),
                                                }),
                                            ],
                                        },
                                        "audience-empty",
                                    );
                                let e = S[n];
                                return (0, i.jsx)(Q, { participant: e, channel: s, guildId: r }, `audience-${e.id}`);
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
                                        className: Z.bV,
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: q.intl.formatToPlainString(q.t["5z7q5a"], { numHands: p.length }),
                                    },
                                    "requests-section",
                                );
                            case 1:
                                return (0, i.jsx)(
                                    A.E,
                                    {
                                        className: Z.bV,
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: _
                                            ? q.intl.formatToPlainString(X.default.C6rvri, {
                                                  filteredSize: S.length,
                                                  totalSize: m.length,
                                              })
                                            : q.intl.formatToPlainString(q.t.vUrsZ9, { audienceSize: m.length }),
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
