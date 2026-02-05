n.d(t, { $i: () => Q, Ay: () => X, Qv: () => B, SY: () => $ });
var i,
    r = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    o = n(311907),
    d = n(397927),
    c = n(104171),
    u = n(713654),
    A = n(83241),
    h = n(214884),
    _ = n(976860),
    m = n(323443),
    p = n(63995),
    g = n(69407),
    E = n(110618),
    f = n(446600),
    I = n(964175),
    C = n(576705),
    N = n(607567),
    T = n(954571),
    S = n(403362),
    x = n(707592),
    v = n(698441),
    b = n(935159),
    y = n(473019),
    L = n(11550),
    O = n(435328),
    R = n(539446),
    P = n(563312),
    j = n(508654),
    D = n(9448),
    w = n(974930),
    M = n(666394),
    U = n(988794),
    G = n(652215),
    k = n(985018),
    V = n(177865);
let B = a.memo(function (e) {
    let {
        heading: t,
        location: n,
        locationIcon: i,
        details: a,
        detailsIcon: l,
        topic: o,
        onClickCloseIcon: c,
        children: u,
    } = e;
    return (0, r.jsxs)("div", {
        className: V.kX,
        children: [
            (0, r.jsxs)("div", {
                className: s()(V.fI, V.pF),
                children: [
                    (0, r.jsx)("div", { className: V.Ok }),
                    (0, r.jsx)(d.Text, {
                        color: "text-feedback-positive",
                        variant: "text-xs/semibold",
                        className: V.U4,
                        children: t,
                    }),
                    null != c &&
                        (0, r.jsx)(d.DUT, {
                            onClick: c,
                            className: V.ut,
                            "aria-label": k.intl.string(k.t.cpT0Cq),
                            children: (0, r.jsx)(d.PGe, { size: "xs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, r.jsx)(d.Heading, {
                color: "text-strong",
                variant: "heading-md/semibold",
                className: V.eq,
                children: o,
            }),
            (0, r.jsxs)("div", {
                className: s()(V.fI, V.pF),
                children: [
                    i,
                    (0, r.jsx)(d.Text, { color: "none", variant: "text-xs/normal", className: V.HA, children: n }),
                    null != a &&
                        null != l &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.Text, {
                                    className: V.hY,
                                    color: "none",
                                    variant: "text-xs/normal",
                                    children: "•",
                                }),
                                l,
                                (0, r.jsx)(d.Text, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: V.zH,
                                    children: a,
                                }),
                            ],
                        }),
                ],
            }),
            u,
        ],
    });
});
function H(e) {
    let { guildEvent: t, channel: n } = e,
        i = (0, o.yK)(
            [N.Ay],
            () =>
                N.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        a = (0, u.gU)(n);
    return (0, r.jsx)(B, {
        onClickCloseIcon: () => (0, b.iF)({ eventId: t?.id }),
        heading: k.intl.string(k.t["X2K3/4"]),
        topic: t.name,
        location: n.name,
        locationIcon: null != a ? (0, r.jsx)(a, { size: "xs", color: "currentColor", className: V.uE }) : null,
        children: (0, r.jsx)(Q, { channel: n, speakers: i, voiceType: 1 }),
    });
}
function F(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, w.G3)(t),
        a = (0, o.bG)([v.Ay], () => v.Ay.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        l = (0, o.bG)([L.A], () => L.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        a || null != l || (0, b.pE)(t.id),
        (0, r.jsx)(d.Button, {
            onClick: function () {
                (0, M.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, b.Lx)(t.id), 1e3)),
                    T.default.track(G.HAw.CHANNEL_NOTICE_CTA_CLICKED, { guild_id: t.guild_id, notice_type: n });
            },
            text: k.intl.string(k.t.DlcqlU),
            icon: a ? d.A9s : d.XFE,
            variant: a ? "secondary" : "primary",
            size: "sm",
            fullWidth: !0,
        })
    );
}
function Y(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, D.oF)(t),
        l = null != i ? (0, O.l)(i, !0) : null,
        o = (0, D.WN)(t),
        c = (0, u.gU)(o),
        { startTime: A, endTime: h } = (0, P.Ay)(t),
        { startDateTimeString: _, upcomingEvent: m, diffMinutes: p } = (0, w.CC)(A.toISOString(), h?.toISOString()),
        g = m
            ? p > 0
                ? k.intl.formatToPlainString(k.t.PQlCWk, { minutes: p })
                : k.intl.string(k.t.WINqKV)
            : k.intl.formatToPlainString(k.t.DC6h3G, { date: _ });
    return (
        a.useEffect(() => {
            T.default.track(G.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: n, guild_id: t.guild_id });
        }, [t, n]),
        (0, r.jsxs)("div", {
            className: V.kX,
            children: [
                (0, r.jsxs)("div", {
                    className: V.fI,
                    children: [
                        (0, r.jsx)(d.DUT, {
                            onClick: () => (0, x.uR)({ eventId: t.id }),
                            className: V.oP,
                            children: (0, r.jsx)(d.Text, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                className: V.eq,
                                children: t.name,
                            }),
                        }),
                        (0, r.jsx)(d.DUT, {
                            onClick: () => {
                                T.default.track(G.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: n, guild_id: t.guild_id }),
                                    (0, b.Lx)(t.id);
                            },
                            className: V.ut,
                            "aria-label": k.intl.string(k.t.cpT0Cq),
                            children: (0, r.jsx)(d.PGe, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: s()(V.fI, V.pF),
                    children: [
                        (0, r.jsx)(d.CTc, {
                            size: "custom",
                            color: "currentColor",
                            className: V.uE,
                            width: 16,
                            height: 16,
                        }),
                        (0, r.jsx)(d.Text, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            className: V.Sv,
                            children: g,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: s()(V.fI, V.pF),
                    children: [
                        null != c
                            ? (0, r.jsx)(c, { size: "xs", color: "currentColor", className: V.uE })
                            : (0, r.jsx)(d.BT6, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                                  className: V.uE,
                              }),
                        (0, r.jsx)(d.Text, {
                            color: "none",
                            variant: "text-xs/normal",
                            className: V.HA,
                            children: o?.name ?? l,
                        }),
                    ],
                }),
                (0, r.jsx)(F, { guildEvent: t, noticeType: n }),
            ],
        })
    );
}
function W(e) {
    let { guildEvent: t } = e,
        n = (0, D.oF)(t);
    return null == n
        ? null
        : (0, r.jsx)(B, {
              onClickCloseIcon: () => (0, b.iF)({ eventId: t?.id }),
              heading: k.intl.string(k.t["1+boPi"]),
              topic: t.name,
              location: (0, O.l)(n, !0),
              locationIcon: (0, r.jsx)(d.BT6, {
                  size: "custom",
                  color: "currentColor",
                  width: 16,
                  height: 16,
                  className: V.uE,
              }),
              children: (0, r.jsx)(q, { guildEvent: t }),
          });
}
function q(e) {
    let { guildEvent: t } = e,
        n = a.useCallback(() => {
            (0, x.uR)({ eventId: t.id });
        }, [t]);
    return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: V.PD,
        children: (0, r.jsx)(d.Button, {
            variant: "active",
            size: "sm",
            text: k.intl.string(k.t.z4FcDs),
            fullWidth: !0,
            onClick: n,
        }),
    });
}
function z(e) {
    let { channel: t, label: n } = e;
    return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: V.PD,
        children: (0, r.jsx)(d.Button, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: () => {
                null != t && null != t.getGuildId() && ((0, m.av)(t), (0, _.uh)(t.getGuildId(), t.id));
            },
        }),
    });
}
function K(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, o.yK)([p.A], () => [...new Set(p.A.getMutableParticipants(n.id, g.ip.SPEAKER).map((e) => e.user))], [
            n.id,
        ]),
        a = (0, o.bG)([p.A], () => p.A.getParticipantCount(n.id, g.ip.AUDIENCE), [n.id]),
        l = k.intl.formatToPlainString(k.t["+v2pN2"], { count: `${a}` });
    return (0, r.jsx)(B, {
        onClickCloseIcon: () => (0, b.iF)({ stageId: t?.id }),
        heading: k.intl.string(k.t["X2K3/4"]),
        location: n.name,
        details: l,
        detailsIcon: (0, r.jsx)(d.LoC, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: V.uE,
        }),
        locationIcon: (0, r.jsx)(d.qux, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: V.uE,
        }),
        topic: t.topic,
        children: (0, r.jsx)(Q, { channel: n, speakers: i, voiceType: 2 }),
    });
}
var $ = (((i = {})[(i.VOICE = 1)] = "VOICE"), (i[(i.STAGE = 2)] = "STAGE"), (i[(i.STUDY_ROOM = 3)] = "STUDY_ROOM"), i);
function Q(e) {
    let { channel: t, speakers: n, voiceType: i } = e,
        l = t.getGuildId(),
        u = a.useMemo(() => n.slice(0, 3), [n]),
        A = (0, o.bG)([C.A], () => C.A.can(G.xBc.CONNECT, t)),
        h = (0, I.A)(t.id),
        _ = k.intl.string(k.t.VJlc0S);
    switch (i) {
        case 1:
            _ = k.intl.string(k.t.VJlc0S);
            break;
        case 2:
            (_ = k.intl.string(k.t.ZYO5OK)),
                h?.speaker ? (_ = k.intl.string(k.t["/cnSFc"])) : null != h && (_ = k.intl.string(k.t.btSGOj));
            break;
        case 3:
            _ = k.intl.string(k.t.wBoE6L);
            break;
        default:
            (0, S.xb)(i);
    }
    return null == l
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  u.length > 0
                      ? (0, r.jsxs)("div", {
                            className: s()(V.fI, V.pF),
                            children: [
                                (0, r.jsx)(c.Ay, { guildId: l, users: u, showUserPopout: !0, size: c.DN.SIZE_16 }),
                                (0, r.jsx)(d.Text, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: V.c8,
                                    children: (0, E.c)(l, u, t?.id, n.length),
                                }),
                            ],
                        })
                      : null,
                  A && null == h && (0, r.jsx)(z, { channel: t, label: _ }),
              ],
          });
}
let X = a.memo(function (e) {
    let { guild: t } = e,
        { showRedesignedLiveChannelNotice: n } = (0, A.P)(!0),
        i = (0, R.V)(t.id),
        a = (0, j.BP)(t.id),
        l = (0, j.WG)(t.id),
        s = (0, o.bG)([f.A], () => f.A.getStageInstanceByChannel(i?.id), [i]),
        { isStageNoticeHidden: d, isEventNoticeHidden: c } = (0, o.cf)(
            [y.A],
            () => ({
                isStageNoticeHidden: y.A.isLiveChannelNoticeHidden({ stageId: s?.id }),
                isEventNoticeHidden: y.A.isLiveChannelNoticeHidden({ eventId: a?.id }),
            }),
            [s, a],
        ),
        u = null,
        _ = null != s && null != i && !d;
    if (n) return (0, r.jsx)(h.A, { guild: t });
    null == a || c
        ? _ && (u = (0, r.jsx)(K, { stageInstance: s, channel: i }))
        : a.entity_type === U.Ps.STAGE_INSTANCE && _
          ? (u = (0, r.jsx)(K, { stageInstance: s, channel: i }))
          : a.entity_type === U.Ps.EXTERNAL
            ? (u = (0, r.jsx)(W, { guildEvent: a }))
            : a.entity_type === U.Ps.VOICE && null != i && (u = (0, r.jsx)(H, { guildEvent: a, channel: i }));
    let m = t.features.has(G.GuildFeatures.COMMUNITY);
    if (null == u && null != l && !m) {
        let { upcomingEvent: e, noticeType: t } = l;
        u = (0, r.jsx)(Y, { guildEvent: e, noticeType: t });
    }
    return u;
});
