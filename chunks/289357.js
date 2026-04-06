n.d(t, { $i: () => z, Ay: () => $, Qv: () => k, SY: () => q });
var i,
    a = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    o = n(311907),
    d = n(397927),
    c = n(104171),
    u = n(713654),
    A = n(976860),
    h = n(323443),
    _ = n(63995),
    m = n(69407),
    p = n(110618),
    g = n(446600),
    E = n(964175),
    I = n(576705),
    f = n(607567),
    C = n(954571),
    T = n(403362),
    N = n(707592),
    S = n(698441),
    x = n(935159),
    v = n(473019),
    b = n(11550),
    y = n(435328),
    O = n(539446),
    L = n(563312),
    R = n(508654),
    P = n(9448),
    D = n(974930),
    M = n(666394),
    j = n(988794),
    w = n(652215),
    U = n(985018),
    G = n(999476);
let k = r.memo(function (e) {
    let {
        heading: t,
        location: n,
        locationIcon: i,
        details: r,
        detailsIcon: l,
        topic: o,
        onClickCloseIcon: c,
        children: u,
    } = e;
    return (0, a.jsxs)("div", {
        className: G.kX,
        children: [
            (0, a.jsxs)("div", {
                className: s()(G.fI, G.pF),
                children: [
                    (0, a.jsx)("div", { className: G.Ok }),
                    (0, a.jsx)(d.Text, {
                        color: "text-feedback-positive",
                        variant: "text-xs/semibold",
                        className: G.U4,
                        children: t,
                    }),
                    null != c &&
                        (0, a.jsx)(d.DUT, {
                            onClick: c,
                            className: G.ut,
                            "aria-label": U.intl.string(U.t.cpT0Cq),
                            children: (0, a.jsx)(d.PGe, { size: "xs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, a.jsx)(d.Heading, {
                color: "text-strong",
                variant: "heading-md/semibold",
                className: G.eq,
                children: o,
            }),
            (0, a.jsxs)("div", {
                className: s()(G.fI, G.pF),
                children: [
                    i,
                    (0, a.jsx)(d.Text, { color: "none", variant: "text-xs/normal", className: G.HA, children: n }),
                    null != r &&
                        null != l &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(d.Text, {
                                    className: G.hY,
                                    color: "none",
                                    variant: "text-xs/normal",
                                    children: "•",
                                }),
                                l,
                                (0, a.jsx)(d.Text, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: G.zH,
                                    children: r,
                                }),
                            ],
                        }),
                ],
            }),
            u,
        ],
    });
});
function V(e) {
    let { guildEvent: t, channel: n } = e,
        i = (0, o.yK)(
            [f.Ay],
            () =>
                f.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        r = (0, u.gU)(n);
    return (0, a.jsx)(k, {
        onClickCloseIcon: () => (0, x.iF)({ eventId: t?.id }),
        heading: U.intl.string(U.t["X2K3/4"]),
        topic: t.name,
        location: n.name,
        locationIcon: null != r ? (0, a.jsx)(r, { size: "xs", color: "currentColor", className: G.uE }) : null,
        children: (0, a.jsx)(z, { channel: n, speakers: i, voiceType: 1 }),
    });
}
function B(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, D.G3)(t),
        r = (0, o.bG)([S.Ay], () => S.Ay.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        l = (0, o.bG)([b.A], () => b.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        r || null != l || (0, x.pE)(t.id),
        (0, a.jsx)(d.Button, {
            onClick: function () {
                (0, M.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, x.Lx)(t.id), 1e3)),
                    C.default.track(w.HAw.CHANNEL_NOTICE_CTA_CLICKED, { guild_id: t.guild_id, notice_type: n });
            },
            text: U.intl.string(U.t.DlcqlU),
            icon: r ? d.A9s : d.XFE,
            variant: r ? "secondary" : "primary",
            size: "sm",
            fullWidth: !0,
        })
    );
}
function H(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, P.oF)(t),
        l = null != i ? (0, y.l)(i, !0) : null,
        o = (0, P.WN)(t),
        c = (0, u.gU)(o),
        { startTime: A, endTime: h } = (0, L.Ay)(t),
        { startDateTimeString: _, upcomingEvent: m, diffMinutes: p } = (0, D.CC)(A.toISOString(), h?.toISOString()),
        g = m
            ? p > 0
                ? U.intl.formatToPlainString(U.t.PQlCWk, { minutes: p })
                : U.intl.string(U.t.WINqKV)
            : U.intl.formatToPlainString(U.t.DC6h3G, { date: _ });
    return (
        r.useEffect(() => {
            C.default.track(w.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: n, guild_id: t.guild_id });
        }, [t, n]),
        (0, a.jsxs)("div", {
            className: G.kX,
            children: [
                (0, a.jsxs)("div", {
                    className: G.fI,
                    children: [
                        (0, a.jsx)(d.DUT, {
                            onClick: () => (0, N.uR)({ eventId: t.id }),
                            className: G.oP,
                            children: (0, a.jsx)(d.Text, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                className: G.eq,
                                children: t.name,
                            }),
                        }),
                        (0, a.jsx)(d.DUT, {
                            onClick: () => {
                                C.default.track(w.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: n, guild_id: t.guild_id }),
                                    (0, x.Lx)(t.id);
                            },
                            className: G.ut,
                            "aria-label": U.intl.string(U.t.cpT0Cq),
                            children: (0, a.jsx)(d.PGe, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: s()(G.fI, G.pF),
                    children: [
                        (0, a.jsx)(d.CTc, {
                            size: "custom",
                            color: "currentColor",
                            className: G.uE,
                            width: 16,
                            height: 16,
                        }),
                        (0, a.jsx)(d.Text, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            className: G.Sv,
                            children: g,
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: s()(G.fI, G.pF),
                    children: [
                        null != c
                            ? (0, a.jsx)(c, { size: "xs", color: "currentColor", className: G.uE })
                            : (0, a.jsx)(d.BT6, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                                  className: G.uE,
                              }),
                        (0, a.jsx)(d.Text, {
                            color: "none",
                            variant: "text-xs/normal",
                            className: G.HA,
                            children: o?.name ?? l,
                        }),
                    ],
                }),
                (0, a.jsx)(B, { guildEvent: t, noticeType: n }),
            ],
        })
    );
}
function F(e) {
    let { guildEvent: t } = e,
        n = (0, P.oF)(t);
    return null == n
        ? null
        : (0, a.jsx)(k, {
              onClickCloseIcon: () => (0, x.iF)({ eventId: t?.id }),
              heading: U.intl.string(U.t["1+boPi"]),
              topic: t.name,
              location: (0, y.l)(n, !0),
              locationIcon: (0, a.jsx)(d.BT6, {
                  size: "custom",
                  color: "currentColor",
                  width: 16,
                  height: 16,
                  className: G.uE,
              }),
              children: (0, a.jsx)(Y, { guildEvent: t }),
          });
}
function Y(e) {
    let { guildEvent: t } = e,
        n = r.useCallback(() => {
            (0, N.uR)({ eventId: t.id });
        }, [t]);
    return (0, a.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: G.PD,
        children: (0, a.jsx)(d.Button, {
            variant: "active",
            size: "sm",
            text: U.intl.string(U.t.z4FcDs),
            fullWidth: !0,
            onClick: n,
        }),
    });
}
function W(e) {
    let { channel: t, label: n } = e;
    return (0, a.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: G.PD,
        children: (0, a.jsx)(d.Button, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: () => {
                null != t && null != t.getGuildId() && ((0, h.av)(t), (0, A.uh)(t.getGuildId(), t.id));
            },
        }),
    });
}
function K(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, o.yK)([_.A], () => [...new Set(_.A.getMutableParticipants(n.id, m.ip.SPEAKER).map((e) => e.user))], [
            n.id,
        ]),
        r = (0, o.bG)([_.A], () => _.A.getParticipantCount(n.id, m.ip.AUDIENCE), [n.id]),
        l = U.intl.formatToPlainString(U.t["+v2pN2"], { count: `${r}` });
    return (0, a.jsx)(k, {
        onClickCloseIcon: () => (0, x.iF)({ stageId: t?.id }),
        heading: U.intl.string(U.t["X2K3/4"]),
        location: n.name,
        details: l,
        detailsIcon: (0, a.jsx)(d.LoC, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: G.uE,
        }),
        locationIcon: (0, a.jsx)(d.qux, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: G.uE,
        }),
        topic: t.topic,
        children: (0, a.jsx)(z, { channel: n, speakers: i, voiceType: 2 }),
    });
}
var q = (((i = {})[(i.VOICE = 1)] = "VOICE"), (i[(i.STAGE = 2)] = "STAGE"), (i[(i.STUDY_ROOM = 3)] = "STUDY_ROOM"), i);
function z(e) {
    let { channel: t, speakers: n, voiceType: i } = e,
        l = t.getGuildId(),
        u = r.useMemo(() => n.slice(0, 3), [n]),
        A = (0, o.bG)([I.A], () => I.A.can(w.xBc.CONNECT, t)),
        h = (0, E.A)(t.id),
        _ = U.intl.string(U.t.VJlc0S);
    switch (i) {
        case 1:
            _ = U.intl.string(U.t.VJlc0S);
            break;
        case 2:
            (_ = U.intl.string(U.t.ZYO5OK)),
                h?.speaker ? (_ = U.intl.string(U.t["/cnSFc"])) : null != h && (_ = U.intl.string(U.t.btSGOj));
            break;
        case 3:
            _ = U.intl.string(U.t.wBoE6L);
            break;
        default:
            (0, T.xb)(i);
    }
    return null == l
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  u.length > 0
                      ? (0, a.jsxs)("div", {
                            className: s()(G.fI, G.pF),
                            children: [
                                (0, a.jsx)(c.Ay, { guildId: l, users: u, showUserPopout: !0, size: c.DN.SIZE_16 }),
                                (0, a.jsx)(d.Text, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: G.c8,
                                    children: (0, p.c)(l, u, t?.id, n.length),
                                }),
                            ],
                        })
                      : null,
                  A && null == h && (0, a.jsx)(W, { channel: t, label: _ }),
              ],
          });
}
let $ = r.memo(function (e) {
    let { guild: t } = e,
        n = (0, O.V)(t.id),
        i = (0, R.BP)(t.id),
        r = (0, R.WG)(t.id),
        l = (0, o.bG)([g.A], () => g.A.getStageInstanceByChannel(n?.id), [n]),
        { isStageNoticeHidden: s, isEventNoticeHidden: d } = (0, o.cf)(
            [v.A],
            () => ({
                isStageNoticeHidden: v.A.isLiveChannelNoticeHidden({ stageId: l?.id }),
                isEventNoticeHidden: v.A.isLiveChannelNoticeHidden({ eventId: i?.id }),
            }),
            [l, i],
        ),
        c = null,
        u = null != l && null != n && !s;
    null == i || d
        ? u && (c = (0, a.jsx)(K, { stageInstance: l, channel: n }))
        : i.entity_type === j.Ps.STAGE_INSTANCE && u
          ? (c = (0, a.jsx)(K, { stageInstance: l, channel: n }))
          : i.entity_type === j.Ps.EXTERNAL
            ? (c = (0, a.jsx)(F, { guildEvent: i }))
            : i.entity_type === j.Ps.VOICE && null != n && (c = (0, a.jsx)(V, { guildEvent: i, channel: n }));
    let A = t.features.has(w.GuildFeatures.COMMUNITY);
    if (null == c && null != r && !A) {
        let { upcomingEvent: e, noticeType: t } = r;
        c = (0, a.jsx)(H, { guildEvent: e, noticeType: t });
    }
    return c;
});
