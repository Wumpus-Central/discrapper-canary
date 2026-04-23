n.d(t, { $i: () => ea, Ay: () => el, Qv: () => X, SY: () => er });
var i,
    r = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    o = n(311907),
    d = n(834730),
    u = n(939249),
    c = n(789645),
    A = n(534514),
    h = n(821609),
    _ = n(933832),
    E = n(782603),
    p = n(81466),
    m = n(116085),
    g = n(597601),
    I = n(451394),
    C = n(104171),
    f = n(47167),
    T = n(713654),
    S = n(976860),
    N = n(323443),
    O = n(63995),
    L = n(69407),
    y = n(110618),
    v = n(446600),
    b = n(964175),
    D = n(576705),
    R = n(607567),
    P = n(954571),
    w = n(403362),
    M = n(707592),
    U = n(698441),
    x = n(935159),
    G = n(473019),
    k = n(11550),
    j = n(435328),
    V = n(539446),
    H = n(563312),
    B = n(508654),
    F = n(9448),
    Y = n(974930),
    K = n(666394),
    z = n(988794),
    W = n(652215),
    $ = n(985018),
    q = n(28164);
let X = a.memo(function (e) {
    let {
        heading: t,
        location: n,
        locationIcon: i,
        details: a,
        detailsIcon: l,
        topic: o,
        onClickCloseIcon: h,
        children: _,
    } = e;
    return (0, r.jsxs)("div", {
        className: q.kX,
        children: [
            (0, r.jsxs)("div", {
                className: s()(q.fI, q.pF),
                children: [
                    (0, r.jsx)("div", { className: q.Ok }),
                    (0, r.jsx)(d.E, {
                        color: "text-feedback-positive",
                        variant: "text-xs/semibold",
                        className: q.U4,
                        children: t,
                    }),
                    null != h &&
                        (0, r.jsx)(u.D, {
                            onClick: h,
                            className: q.ut,
                            "aria-label": $.intl.string($.t.cpT0Cq),
                            children: (0, r.jsx)(c.P, { size: "xs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, r.jsx)(A.D, { color: "text-strong", variant: "heading-md/semibold", className: q.eq, children: o }),
            (0, r.jsxs)("div", {
                className: s()(q.fI, q.pF),
                children: [
                    i,
                    (0, r.jsx)(d.E, { color: "none", variant: "text-xs/normal", className: q.HA, children: n }),
                    null != a &&
                        null != l &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.E, {
                                    className: q.hY,
                                    color: "none",
                                    variant: "text-xs/normal",
                                    children: "•",
                                }),
                                l,
                                (0, r.jsx)(d.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: q.zH,
                                    children: a,
                                }),
                            ],
                        }),
                ],
            }),
            _,
        ],
    });
});
function Q(e) {
    let { guildEvent: t, channel: n } = e,
        i = (0, f.Ay)(n),
        a = (0, o.yK)(
            [R.Ay],
            () =>
                R.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        l = (0, T.gU)(n);
    return (0, r.jsx)(X, {
        onClickCloseIcon: () => (0, x.iF)({ eventId: t?.id }),
        heading: $.intl.string($.t["X2K3/4"]),
        topic: t.name,
        location: i,
        locationIcon: null != l ? (0, r.jsx)(l, { size: "xs", color: "currentColor", className: q.uE }) : null,
        children: (0, r.jsx)(ea, { channel: n, speakers: a, voiceType: 1 }),
    });
}
function Z(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, Y.G3)(t),
        a = (0, o.bG)([U.Ay], () => U.Ay.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        l = (0, o.bG)([k.A], () => k.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        a || null != l || (0, x.pE)(t.id),
        (0, r.jsx)(h.$, {
            onClick: function () {
                (0, K.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, x.Lx)(t.id), 1e3)),
                    P.default.track(W.HAw.CHANNEL_NOTICE_CTA_CLICKED, { guild_id: t.guild_id, notice_type: n });
            },
            text: $.intl.string($.t.DlcqlU),
            icon: a ? _.A : E.X,
            variant: a ? "secondary" : "primary",
            size: "sm",
            fullWidth: !0,
        })
    );
}
function J(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, F.oF)(t),
        l = null != i ? (0, j.l)(i, !0) : null,
        o = (0, F.WN)(t),
        A = (0, f.Ay)(o),
        h = (0, T.gU)(o),
        { startTime: _, endTime: E } = (0, H.Ay)(t),
        { startDateTimeString: g, upcomingEvent: I, diffMinutes: C } = (0, Y.CC)(_.toISOString(), E?.toISOString()),
        S = I
            ? C > 0
                ? $.intl.formatToPlainString($.t.PQlCWk, { minutes: C })
                : $.intl.string($.t.WINqKV)
            : $.intl.formatToPlainString($.t.DC6h3G, { date: g });
    return (
        a.useEffect(() => {
            P.default.track(W.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: n, guild_id: t.guild_id });
        }, [t, n]),
        (0, r.jsxs)("div", {
            className: q.kX,
            children: [
                (0, r.jsxs)("div", {
                    className: q.fI,
                    children: [
                        (0, r.jsx)(u.D, {
                            onClick: () => (0, M.uR)({ eventId: t.id }),
                            className: q.oP,
                            children: (0, r.jsx)(d.E, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                className: q.eq,
                                children: t.name,
                            }),
                        }),
                        (0, r.jsx)(u.D, {
                            onClick: () => {
                                P.default.track(W.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: n, guild_id: t.guild_id }),
                                    (0, x.Lx)(t.id);
                            },
                            className: q.ut,
                            "aria-label": $.intl.string($.t.cpT0Cq),
                            children: (0, r.jsx)(c.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: s()(q.fI, q.pF),
                    children: [
                        (0, r.jsx)(p.C, {
                            size: "custom",
                            color: "currentColor",
                            className: q.uE,
                            width: 16,
                            height: 16,
                        }),
                        (0, r.jsx)(d.E, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            className: q.Sv,
                            children: S,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: s()(q.fI, q.pF),
                    children: [
                        null != h
                            ? (0, r.jsx)(h, { size: "xs", color: "currentColor", className: q.uE })
                            : (0, r.jsx)(m.B, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                                  className: q.uE,
                              }),
                        (0, r.jsx)(d.E, {
                            color: "none",
                            variant: "text-xs/normal",
                            className: q.HA,
                            children: A ?? l,
                        }),
                    ],
                }),
                (0, r.jsx)(Z, { guildEvent: t, noticeType: n }),
            ],
        })
    );
}
function ee(e) {
    let { guildEvent: t } = e,
        n = (0, F.oF)(t);
    return null == n
        ? null
        : (0, r.jsx)(X, {
              onClickCloseIcon: () => (0, x.iF)({ eventId: t?.id }),
              heading: $.intl.string($.t["1+boPi"]),
              topic: t.name,
              location: (0, j.l)(n, !0),
              locationIcon: (0, r.jsx)(m.B, {
                  size: "custom",
                  color: "currentColor",
                  width: 16,
                  height: 16,
                  className: q.uE,
              }),
              children: (0, r.jsx)(et, { guildEvent: t }),
          });
}
function et(e) {
    let { guildEvent: t } = e,
        n = a.useCallback(() => {
            (0, M.uR)({ eventId: t.id });
        }, [t]);
    return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: q.PD,
        children: (0, r.jsx)(h.$, {
            variant: "active",
            size: "sm",
            text: $.intl.string($.t.z4FcDs),
            fullWidth: !0,
            onClick: n,
        }),
    });
}
function en(e) {
    let { channel: t, label: n } = e;
    return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: q.PD,
        children: (0, r.jsx)(h.$, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: () => {
                null != t && null != t.getGuildId() && ((0, N.av)(t), (0, S.uh)(t.getGuildId(), t.id));
            },
        }),
    });
}
function ei(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, f.Ay)(n),
        a = (0, o.yK)([O.A], () => [...new Set(O.A.getMutableParticipants(n.id, L.ip.SPEAKER).map((e) => e.user))], [
            n.id,
        ]),
        l = (0, o.bG)([O.A], () => O.A.getParticipantCount(n.id, L.ip.AUDIENCE), [n.id]),
        s = $.intl.formatToPlainString($.t["+v2pN2"], { count: `${l}` });
    return (0, r.jsx)(X, {
        onClickCloseIcon: () => (0, x.iF)({ stageId: t?.id }),
        heading: $.intl.string($.t["X2K3/4"]),
        location: i,
        details: s,
        detailsIcon: (0, r.jsx)(g.L, { size: "custom", color: "currentColor", width: 14, height: 14, className: q.uE }),
        locationIcon: (0, r.jsx)(I.q, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: q.uE,
        }),
        topic: t.topic,
        children: (0, r.jsx)(ea, { channel: n, speakers: a, voiceType: 2 }),
    });
}
var er = (((i = {})[(i.VOICE = 1)] = "VOICE"), (i[(i.STAGE = 2)] = "STAGE"), (i[(i.STUDY_ROOM = 3)] = "STUDY_ROOM"), i);
function ea(e) {
    let { channel: t, speakers: n, voiceType: i } = e,
        l = t.getGuildId(),
        u = a.useMemo(() => n.slice(0, 3), [n]),
        c = (0, o.bG)([D.A], () => D.A.can(W.xBc.CONNECT, t)),
        A = (0, b.A)(t.id),
        h = $.intl.string($.t.VJlc0S);
    switch (i) {
        case 1:
            h = $.intl.string($.t.VJlc0S);
            break;
        case 2:
            (h = $.intl.string($.t.ZYO5OK)),
                A?.speaker ? (h = $.intl.string($.t["/cnSFc"])) : null != A && (h = $.intl.string($.t.btSGOj));
            break;
        case 3:
            h = $.intl.string($.t.wBoE6L);
            break;
        default:
            (0, w.xb)(i);
    }
    return null == l
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  u.length > 0
                      ? (0, r.jsxs)("div", {
                            className: s()(q.fI, q.pF),
                            children: [
                                (0, r.jsx)(C.Ay, { guildId: l, users: u, showUserPopout: !0, size: C.DN.SIZE_16 }),
                                (0, r.jsx)(d.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: q.c8,
                                    children: (0, y.c)(l, u, t?.id, n.length),
                                }),
                            ],
                        })
                      : null,
                  c && null == A && (0, r.jsx)(en, { channel: t, label: h }),
              ],
          });
}
let el = a.memo(function (e) {
    let { guild: t } = e,
        n = (0, V.V)(t.id),
        i = (0, B.BP)(t.id),
        a = (0, B.WG)(t.id),
        l = (0, o.bG)([v.A], () => v.A.getStageInstanceByChannel(n?.id), [n]),
        { isStageNoticeHidden: s, isEventNoticeHidden: d } = (0, o.cf)(
            [G.A],
            () => ({
                isStageNoticeHidden: G.A.isLiveChannelNoticeHidden({ stageId: l?.id }),
                isEventNoticeHidden: G.A.isLiveChannelNoticeHidden({ eventId: i?.id }),
            }),
            [l, i],
        ),
        u = null,
        c = null != l && null != n && !s;
    null == i || d
        ? c && (u = (0, r.jsx)(ei, { stageInstance: l, channel: n }))
        : i.entity_type === z.Ps.STAGE_INSTANCE && c
          ? (u = (0, r.jsx)(ei, { stageInstance: l, channel: n }))
          : i.entity_type === z.Ps.EXTERNAL
            ? (u = (0, r.jsx)(ee, { guildEvent: i }))
            : i.entity_type === z.Ps.VOICE && null != n && (u = (0, r.jsx)(Q, { guildEvent: i, channel: n }));
    let A = t.features.has(W.GuildFeatures.COMMUNITY);
    if (null == u && null != a && !A) {
        let { upcomingEvent: e, noticeType: t } = a;
        u = (0, r.jsx)(J, { guildEvent: e, noticeType: t });
    }
    return u;
});
