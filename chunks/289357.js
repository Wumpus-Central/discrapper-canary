n.d(t, { $i: () => $, Ay: () => Q, Qv: () => V, SY: () => z });
var i,
    l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(311907),
    d = n(397927),
    c = n(104171),
    u = n(47167),
    A = n(713654),
    h = n(976860),
    _ = n(323443),
    m = n(63995),
    g = n(69407),
    p = n(110618),
    E = n(446600),
    I = n(964175),
    f = n(576705),
    C = n(607567),
    T = n(954571),
    N = n(403362),
    S = n(707592),
    x = n(698441),
    v = n(935159),
    b = n(473019),
    y = n(11550),
    O = n(435328),
    L = n(539446),
    R = n(563312),
    P = n(508654),
    D = n(9448),
    j = n(974930),
    M = n(666394),
    w = n(988794),
    U = n(652215),
    G = n(985018),
    k = n(28164);
let V = a.memo(function (e) {
    let {
        heading: t,
        location: n,
        locationIcon: i,
        details: a,
        detailsIcon: r,
        topic: o,
        onClickCloseIcon: c,
        children: u,
    } = e;
    return (0, l.jsxs)("div", {
        className: k.kX,
        children: [
            (0, l.jsxs)("div", {
                className: s()(k.fI, k.pF),
                children: [
                    (0, l.jsx)("div", { className: k.Ok }),
                    (0, l.jsx)(d.Text, {
                        color: "text-feedback-positive",
                        variant: "text-xs/semibold",
                        className: k.U4,
                        children: t,
                    }),
                    null != c &&
                        (0, l.jsx)(d.DUT, {
                            onClick: c,
                            className: k.ut,
                            "aria-label": G.intl.string(G.t.cpT0Cq),
                            children: (0, l.jsx)(d.PGe, { size: "xs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, l.jsx)(d.Heading, {
                color: "text-strong",
                variant: "heading-md/semibold",
                className: k.eq,
                children: o,
            }),
            (0, l.jsxs)("div", {
                className: s()(k.fI, k.pF),
                children: [
                    i,
                    (0, l.jsx)(d.Text, { color: "none", variant: "text-xs/normal", className: k.HA, children: n }),
                    null != a &&
                        null != r &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(d.Text, {
                                    className: k.hY,
                                    color: "none",
                                    variant: "text-xs/normal",
                                    children: "•",
                                }),
                                r,
                                (0, l.jsx)(d.Text, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: k.zH,
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
function B(e) {
    let { guildEvent: t, channel: n } = e,
        i = (0, u.Ay)(n),
        a = (0, o.yK)(
            [C.Ay],
            () =>
                C.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        r = (0, A.gU)(n);
    return (0, l.jsx)(V, {
        onClickCloseIcon: () => (0, v.iF)({ eventId: t?.id }),
        heading: G.intl.string(G.t["X2K3/4"]),
        topic: t.name,
        location: i,
        locationIcon: null != r ? (0, l.jsx)(r, { size: "xs", color: "currentColor", className: k.uE }) : null,
        children: (0, l.jsx)($, { channel: n, speakers: a, voiceType: 1 }),
    });
}
function H(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, j.G3)(t),
        a = (0, o.bG)([x.Ay], () => x.Ay.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        r = (0, o.bG)([y.A], () => y.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        a || null != r || (0, v.pE)(t.id),
        (0, l.jsx)(d.Button, {
            onClick: function () {
                (0, M.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, v.Lx)(t.id), 1e3)),
                    T.default.track(U.HAw.CHANNEL_NOTICE_CTA_CLICKED, { guild_id: t.guild_id, notice_type: n });
            },
            text: G.intl.string(G.t.DlcqlU),
            icon: a ? d.A9s : d.XFE,
            variant: a ? "secondary" : "primary",
            size: "sm",
            fullWidth: !0,
        })
    );
}
function F(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, D.oF)(t),
        r = null != i ? (0, O.l)(i, !0) : null,
        o = (0, D.WN)(t),
        c = (0, u.Ay)(o),
        h = (0, A.gU)(o),
        { startTime: _, endTime: m } = (0, R.Ay)(t),
        { startDateTimeString: g, upcomingEvent: p, diffMinutes: E } = (0, j.CC)(_.toISOString(), m?.toISOString()),
        I = p
            ? E > 0
                ? G.intl.formatToPlainString(G.t.PQlCWk, { minutes: E })
                : G.intl.string(G.t.WINqKV)
            : G.intl.formatToPlainString(G.t.DC6h3G, { date: g });
    return (
        a.useEffect(() => {
            T.default.track(U.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: n, guild_id: t.guild_id });
        }, [t, n]),
        (0, l.jsxs)("div", {
            className: k.kX,
            children: [
                (0, l.jsxs)("div", {
                    className: k.fI,
                    children: [
                        (0, l.jsx)(d.DUT, {
                            onClick: () => (0, S.uR)({ eventId: t.id }),
                            className: k.oP,
                            children: (0, l.jsx)(d.Text, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                className: k.eq,
                                children: t.name,
                            }),
                        }),
                        (0, l.jsx)(d.DUT, {
                            onClick: () => {
                                T.default.track(U.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: n, guild_id: t.guild_id }),
                                    (0, v.Lx)(t.id);
                            },
                            className: k.ut,
                            "aria-label": G.intl.string(G.t.cpT0Cq),
                            children: (0, l.jsx)(d.PGe, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: s()(k.fI, k.pF),
                    children: [
                        (0, l.jsx)(d.CTc, {
                            size: "custom",
                            color: "currentColor",
                            className: k.uE,
                            width: 16,
                            height: 16,
                        }),
                        (0, l.jsx)(d.Text, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            className: k.Sv,
                            children: I,
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: s()(k.fI, k.pF),
                    children: [
                        null != h
                            ? (0, l.jsx)(h, { size: "xs", color: "currentColor", className: k.uE })
                            : (0, l.jsx)(d.BT6, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                                  className: k.uE,
                              }),
                        (0, l.jsx)(d.Text, {
                            color: "none",
                            variant: "text-xs/normal",
                            className: k.HA,
                            children: c ?? r,
                        }),
                    ],
                }),
                (0, l.jsx)(H, { guildEvent: t, noticeType: n }),
            ],
        })
    );
}
function Y(e) {
    let { guildEvent: t } = e,
        n = (0, D.oF)(t);
    return null == n
        ? null
        : (0, l.jsx)(V, {
              onClickCloseIcon: () => (0, v.iF)({ eventId: t?.id }),
              heading: G.intl.string(G.t["1+boPi"]),
              topic: t.name,
              location: (0, O.l)(n, !0),
              locationIcon: (0, l.jsx)(d.BT6, {
                  size: "custom",
                  color: "currentColor",
                  width: 16,
                  height: 16,
                  className: k.uE,
              }),
              children: (0, l.jsx)(W, { guildEvent: t }),
          });
}
function W(e) {
    let { guildEvent: t } = e,
        n = a.useCallback(() => {
            (0, S.uR)({ eventId: t.id });
        }, [t]);
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: k.PD,
        children: (0, l.jsx)(d.Button, {
            variant: "active",
            size: "sm",
            text: G.intl.string(G.t.z4FcDs),
            fullWidth: !0,
            onClick: n,
        }),
    });
}
function K(e) {
    let { channel: t, label: n } = e;
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: k.PD,
        children: (0, l.jsx)(d.Button, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: () => {
                null != t && null != t.getGuildId() && ((0, _.av)(t), (0, h.uh)(t.getGuildId(), t.id));
            },
        }),
    });
}
function q(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, u.Ay)(n),
        a = (0, o.yK)([m.A], () => [...new Set(m.A.getMutableParticipants(n.id, g.ip.SPEAKER).map((e) => e.user))], [
            n.id,
        ]),
        r = (0, o.bG)([m.A], () => m.A.getParticipantCount(n.id, g.ip.AUDIENCE), [n.id]),
        s = G.intl.formatToPlainString(G.t["+v2pN2"], { count: `${r}` });
    return (0, l.jsx)(V, {
        onClickCloseIcon: () => (0, v.iF)({ stageId: t?.id }),
        heading: G.intl.string(G.t["X2K3/4"]),
        location: i,
        details: s,
        detailsIcon: (0, l.jsx)(d.LoC, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: k.uE,
        }),
        locationIcon: (0, l.jsx)(d.qux, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: k.uE,
        }),
        topic: t.topic,
        children: (0, l.jsx)($, { channel: n, speakers: a, voiceType: 2 }),
    });
}
var z = (((i = {})[(i.VOICE = 1)] = "VOICE"), (i[(i.STAGE = 2)] = "STAGE"), (i[(i.STUDY_ROOM = 3)] = "STUDY_ROOM"), i);
function $(e) {
    let { channel: t, speakers: n, voiceType: i } = e,
        r = t.getGuildId(),
        u = a.useMemo(() => n.slice(0, 3), [n]),
        A = (0, o.bG)([f.A], () => f.A.can(U.xBc.CONNECT, t)),
        h = (0, I.A)(t.id),
        _ = G.intl.string(G.t.VJlc0S);
    switch (i) {
        case 1:
            _ = G.intl.string(G.t.VJlc0S);
            break;
        case 2:
            (_ = G.intl.string(G.t.ZYO5OK)),
                h?.speaker ? (_ = G.intl.string(G.t["/cnSFc"])) : null != h && (_ = G.intl.string(G.t.btSGOj));
            break;
        case 3:
            _ = G.intl.string(G.t.wBoE6L);
            break;
        default:
            (0, N.xb)(i);
    }
    return null == r
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  u.length > 0
                      ? (0, l.jsxs)("div", {
                            className: s()(k.fI, k.pF),
                            children: [
                                (0, l.jsx)(c.Ay, { guildId: r, users: u, showUserPopout: !0, size: c.DN.SIZE_16 }),
                                (0, l.jsx)(d.Text, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: k.c8,
                                    children: (0, p.c)(r, u, t?.id, n.length),
                                }),
                            ],
                        })
                      : null,
                  A && null == h && (0, l.jsx)(K, { channel: t, label: _ }),
              ],
          });
}
let Q = a.memo(function (e) {
    let { guild: t } = e,
        n = (0, L.V)(t.id),
        i = (0, P.BP)(t.id),
        a = (0, P.WG)(t.id),
        r = (0, o.bG)([E.A], () => E.A.getStageInstanceByChannel(n?.id), [n]),
        { isStageNoticeHidden: s, isEventNoticeHidden: d } = (0, o.cf)(
            [b.A],
            () => ({
                isStageNoticeHidden: b.A.isLiveChannelNoticeHidden({ stageId: r?.id }),
                isEventNoticeHidden: b.A.isLiveChannelNoticeHidden({ eventId: i?.id }),
            }),
            [r, i],
        ),
        c = null,
        u = null != r && null != n && !s;
    null == i || d
        ? u && (c = (0, l.jsx)(q, { stageInstance: r, channel: n }))
        : i.entity_type === w.Ps.STAGE_INSTANCE && u
          ? (c = (0, l.jsx)(q, { stageInstance: r, channel: n }))
          : i.entity_type === w.Ps.EXTERNAL
            ? (c = (0, l.jsx)(Y, { guildEvent: i }))
            : i.entity_type === w.Ps.VOICE && null != n && (c = (0, l.jsx)(B, { guildEvent: i, channel: n }));
    let A = t.features.has(U.GuildFeatures.COMMUNITY);
    if (null == c && null != a && !A) {
        let { upcomingEvent: e, noticeType: t } = a;
        c = (0, l.jsx)(F, { guildEvent: e, noticeType: t });
    }
    return c;
});
