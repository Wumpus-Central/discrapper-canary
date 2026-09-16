(n.r(t), n.d(t, { StageChannelInviteButton: () => ih, default: () => ip }));
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(435558),
    o = n(17928),
    c = n(506774),
    d = n(192308),
    u = n(43990),
    h = n(228366),
    A = n(367513),
    p = n(148494),
    x = n(765671),
    g = n(964486),
    m = n(793574),
    f = n(688810),
    E = n(198052),
    C = n(520698),
    j = n(43189),
    N = n(518530),
    S = n(384059),
    T = n(267102),
    _ = n(574172),
    I = n(869146),
    y = n(976860),
    v = n(461782),
    b = n(20465),
    O = n(156652),
    R = n(128286),
    L = n(619344),
    P = n(821747),
    U = n(280450),
    w = n(249288),
    M = n(71393),
    k = n(576705),
    G = n(309010),
    D = n(723702),
    V = n(19575),
    z = n(790535),
    B = n(113783),
    q = n(518769),
    K = n(446600),
    H = n(571909),
    F = n(284009),
    Y = n.n(F),
    W = n(789645),
    Q = n(297152),
    X = n(939249),
    Z = n(778712),
    $ = n(463930),
    J = n(834730),
    ee = n(866665),
    et = n(408278),
    en = n(117723),
    ei = n(243721),
    el = n(475825),
    es = n(442433),
    ea = n(730134),
    er = n(80682),
    eo = n(58736),
    ec = n(967144),
    ed = n(342296),
    eu = n(696451),
    eh = n(290863),
    eA = n(849736),
    ep = n(927813),
    ex = n(427262),
    eg = n(375708);
let em = +ep.A.Millis.DAY;
var ef = n(105530),
    eE = n(734057),
    eC = n(488926),
    ej = n(652215),
    eN = n(451394),
    eS = n(710358),
    eT = n(151069);
function e_(e) {
    let { className: t } = e;
    return (0, i.jsx)(eS.A, {
        className: t,
        children: (0, i.jsx)("div", {
            className: eT.T,
            children: (0, i.jsx)(eN.q, {
                size: "custom",
                color: "currentColor",
                className: eT.C,
                width: 32,
                height: 32,
            }),
        }),
    });
}
var eI = n(818348),
    ey = n(888299);
let ev = l.memo(function (e) {
        let { toggleRequestToSpeakSidebar: t, chatOpen: n } = e,
            l = (0, i.jsx)(eo.Ay.Icon, { icon: W.P, tooltip: eg.intl.string(eg.t.cpT0Cq), onClick: t });
        return (0, i.jsxs)(eo.Ay, {
            toolbar: l,
            className: a()(ey.N1, { [ey.X_]: n }),
            children: [
                (0, i.jsx)(eo.Ay.Icon, { icon: Q.E, disabled: !0, "aria-label": eg.intl.string(eg.t.TYZgzW) }),
                (0, i.jsx)(eo.Ay.Title, { children: eg.intl.string(eg.t.TYZgzW) }),
            ],
        });
    }),
    eb = l.memo(function (e) {
        let { channel: t, participant: s, tempDisableOnInit: a = !1 } = e,
            r = l.useRef(null),
            [c, d] = l.useState(a);
        (0, g.Ay)(() => {
            if (!c) return;
            let e = setTimeout(() => d(!1), 1e3);
            return () => clearTimeout(e);
        });
        let u = t.getGuildId();
        Y()(null != u, "Channel cannot be guildless");
        let { isMobile: h, status: A } = (0, o.cf)([eh.A], () => ({
                isMobile: eh.A.isMobileOnline(s.user.id),
                status: eh.A.getStatus(s.user.id, u),
            })),
            p = (0, o.bG)([eu.Ay], () => eu.Ay.getMember(u, s.user.id)),
            x = (0, ec.gn)(t.guild_id, p?.userId, p?.colorStrings ?? null),
            m = l.useMemo(() => ({ [u]: [s.user.id] }), [u, s.user.id]);
        (0, er.Eq)(m, "RequestToSpeakSidebar");
        let f = s.rtsState === ef.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        function E(e) {
            null != u &&
                (0, es.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("866038"),
                        n.e("926132"),
                        n.e("146652"),
                        n.e("893190"),
                        n.e("189673"),
                        n.e("229787"),
                        n.e("882073"),
                        n.e("797558"),
                        n.e("691994"),
                        n.e("576665"),
                        n.e("624198"),
                        n.e("245996"),
                        n.e("823427"),
                        n.e("449145"),
                        n.e("529422"),
                        n.e("307059"),
                        n.e("343116"),
                        n.e("139103"),
                        n.e("470314"),
                        n.e("70515"),
                        n.e("404524"),
                        n.e("654148"),
                        n.e("666939"),
                        n.e("717334"),
                        n.e("184841"),
                    ]).then(n.bind(n, 107632));
                    return (n) => (0, i.jsx)(e, { ...n, user: s.user, guildId: u, channel: t, showMediaItems: !0 });
                });
        }
        return (0, i.jsxs)("div", {
            className: ey.fn,
            children: [
                (0, i.jsx)(ed.A, {
                    targetElementRef: r,
                    user: s.user,
                    guildId: t.guild_id,
                    channelId: t.id,
                    position: "left",
                    spacing: 16,
                    clickTrap: !0,
                    children: (e) =>
                        (0, i.jsxs)(X.D, {
                            innerRef: r,
                            className: ey.$u,
                            onContextMenu: E,
                            ...e,
                            children: [
                                (0, i.jsx)(ea.A, {
                                    size: Z._3.SIZE_40,
                                    className: ey.RB,
                                    user: s.user,
                                    isMobile: h,
                                    status: A,
                                }),
                                (0, i.jsxs)("div", {
                                    className: ey.kH,
                                    children: [
                                        (0, i.jsx)($.g, {
                                            name: s.userNick,
                                            colorString: p?.colorString ?? null,
                                            colorStrings: x,
                                            className: ey.F8,
                                        }),
                                        (0, i.jsx)(J.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: (function (e) {
                                                if ((0, ex.mv)(e.user)) return eg.intl.string(eg.t.VaCdhQ);
                                                let t = e.member?.joinedAt;
                                                return null == t
                                                    ? eg.intl.string(eg.t.CQmzib)
                                                    : null != e.member && e.member.roles.length > 0
                                                      ? (e.role?.name ?? eg.intl.string(eg.t["97/NdO"]))
                                                      : new Date().getTime() - Date.parse(t) < em
                                                        ? eg.intl.string(eg.t.IKE48n)
                                                        : eg.intl.string(eg.t.u0gUWt);
                                            })(s),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                }),
                (0, i.jsxs)("div", {
                    className: ey.UD,
                    children: [
                        (0, i.jsx)(ee.m, {
                            text: f ? eg.intl.string(eg.t.h9rsTd) : eg.intl.string(eg.t.f0T7hI),
                            asContainer: !0,
                            children: (0, i.jsx)(et.K, {
                                onClick: function () {
                                    (0, eA.lL)(t, s.user.id, !1);
                                },
                                disabled: f || c,
                                icon: en.L,
                                variant: "secondary",
                                "aria-label": f ? eg.intl.string(eg.t.h9rsTd) : eg.intl.string(eg.t.f0T7hI),
                            }),
                        }),
                        (0, i.jsx)(ee.m, {
                            text: eg.intl.string(eg.t.moABMy),
                            asContainer: !0,
                            children: (0, i.jsx)(et.K, {
                                "aria-label": eg.intl.string(eg.t.moABMy),
                                onClick: function () {
                                    (0, eA.lL)(t, s.user.id, !0);
                                },
                                icon: W.P,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    eO = l.memo(function (e) {
        let { channel: t } = e,
            [n, s] = (function (e) {
                let t = (0, o.bG)([eE.A], () => eE.A.getChannel(e), [e]),
                    n = eC.MJ(ej.xBc.REQUEST_TO_SPEAK, t),
                    [i, s] = l.useState(n);
                return (
                    n !== i && s(n),
                    [
                        i,
                        function (e) {
                            null != t && (s(e), (0, eA.b6)(t, ej.xBc.REQUEST_TO_SPEAK, e));
                        },
                    ]
                );
            })(t.id);
        return (0, i.jsx)(ei.d, { label: eg.intl.string(eg.t.GYCh0W), checked: n, onChange: s });
    }),
    eR = l.memo(function () {
        return (0, i.jsxs)("div", {
            className: ey.y7,
            children: [
                (0, i.jsx)(e_, {}),
                (0, i.jsx)(J.E, {
                    className: ey.vo,
                    variant: "text-lg/semibold",
                    color: "text-strong",
                    children: eg.intl.string(eg.t["7R24mX"]),
                }),
                (0, i.jsx)(J.E, {
                    className: ey.XG,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: eg.intl.string(eg.t.Rpr2s0),
                }),
            ],
        });
    });
function eL(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: l } = e,
        s = (0, B.J2)(t.id),
        r = [
            +!!(0, o.bG)([k.A], () => k.A.can(eI.xB.MANAGE_CHANNELS, t) || k.A.can(eI.xB.MANAGE_ROLES, t)),
            Math.max(1, s.length),
        ];
    return (0, i.jsxs)("div", {
        className: a()(ey.kL, { [ey.X_]: l }),
        children: [
            (0, i.jsx)(ev, { toggleRequestToSpeakSidebar: n, chatOpen: l }),
            (0, i.jsx)(el.OZ, {
                className: ey.hQ,
                sections: r,
                sectionHeight: function (e) {
                    return 40 * (1 === e);
                },
                rowHeight: function (e) {
                    switch (e) {
                        case 0:
                            return 66;
                        case 1:
                            if (0 === s.length) return 178;
                            return 48;
                    }
                    return 0;
                },
                renderRow: function (e) {
                    let { section: n, row: l } = e;
                    switch (n) {
                        case 0:
                            return (0, i.jsx)(eO, { channel: t }, "rts-toggle");
                        case 1: {
                            if (0 === s.length) return (0, i.jsx)(eR, {}, "participants-empty");
                            let e = s[l];
                            return (0, i.jsx)(eb, { channel: t, participant: e, tempDisableOnInit: !0 }, e.id);
                        }
                    }
                    return null;
                },
                renderSection: function (e) {
                    let { section: t } = e;
                    return 1 === t
                        ? (0, i.jsx)(
                              J.E,
                              {
                                  className: ey.Vu,
                                  variant: "text-xs/bold",
                                  color: "text-default",
                                  children:
                                      s.length > 0
                                          ? eg.intl.formatToPlainString(eg.t["5z7q5a"], { numHands: s.length })
                                          : eg.intl.string(eg.t.TYZgzW),
                              },
                              "participants-section",
                          )
                        : null;
                },
            }),
        ],
    });
}
var eP = n(297264),
    eU = n(821609),
    ew = n(730852),
    eM = n(164617),
    ek = n(47167),
    eG = n(202384),
    eD = n(51758),
    eV = n(175203),
    ez = n(426660),
    eB = n(403362),
    eq = n(110618),
    eK = n(853325);
let eH = function (e) {
    let { participants: t, channel: n, hasConnectPermission: s } = e,
        a = (0, eD.H)(n.guild_id),
        r = l.useCallback(() => {
            a ? (0, eG.Ze)(n.guild_id, () => ew.default.selectVoiceChannel(n.id)) : ew.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, a]),
        c = t.filter((e) => e.type === q.wY.VOICE),
        d = (0, ek.Ay)(n),
        u = 4 === c.length ? 2 : 3,
        h = (0, o.yK)([E.A], () => c.map((e) => E.A.getParticipant(n.id, e.id)).filter(eB.Vq), [n.id, c]);
    return (0, i.jsxs)("div", {
        className: eK.kL,
        children: [
            (0, i.jsx)(ez.A, {}),
            (0, i.jsx)("div", {
                className: eK.os,
                style: { maxWidth: 168 * u },
                children: h
                    .slice(0, 5)
                    .map((e) =>
                        (0, i.jsx)(
                            eV.Ay,
                            {
                                participant: e,
                                channel: n,
                                className: eK.Vs,
                                inCall: !0,
                                noVideoRender: !0,
                                popoutType: eM.N.NO_POPOUT,
                                width: 48,
                            },
                            e.id,
                        ),
                    ),
            }),
            (0, i.jsx)(eP.D, { className: eK.HA, variant: "heading-xxl/normal", children: d }),
            (0, i.jsx)("div", {
                className: eK.Nu,
                children: (0, i.jsx)(J.E, {
                    tag: "div",
                    color: "text-default",
                    variant: "heading-lg/normal",
                    children: (0, eq.DO)(n, c),
                }),
            }),
            (0, i.jsxs)("div", {
                className: eK.UD,
                children: [
                    (0, i.jsx)("div", {
                        className: eK.PD,
                        children: (0, i.jsx)(eU.$, {
                            variant: "overlay-primary",
                            text: s ? eg.intl.string(eg.t["7vb2cc"]) : eg.intl.string(eg.t.TVBCKZ),
                            onClick: r,
                            disabled: !s,
                        }),
                    }),
                    (0, i.jsx)(ih, { channel: n }),
                ],
            }),
        ],
    });
};
var eF = n(661531),
    eY = n(831544),
    eW = n(177953),
    eQ = n(689874),
    eX = n(878678),
    eZ = n(742589),
    e$ = n(977851),
    eJ = n(174459),
    e0 = n(776781),
    e1 = n(233993),
    e9 = n(132500),
    e2 = n(280056),
    e5 = n(204651),
    e4 = n(116108);
function e6(e) {
    let { width: t = 24, height: n = 24, isBadged: s = !1 } = e,
        [a] = l.useState(() => (0, e9.A)());
    return (0, i.jsxs)("svg", {
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("defs", {
                children: (0, i.jsxs)("mask", {
                    id: a,
                    children: [
                        (0, i.jsx)("rect", { fill: "white", width: "100%", height: "100%" }),
                        s && (0, i.jsx)("circle", { cx: "20", cy: "19", r: "10", fill: "black" }),
                    ],
                }),
            }),
            (0, i.jsx)("g", { mask: `url(#${a})`, children: (0, i.jsx)(e2.c, {}) }),
        ],
    });
}
function e3(e) {
    let { className: t, numRequestToSpeak: n } = e,
        l = n > 0;
    return (0, i.jsxs)("div", {
        className: a()(e4.v, t),
        children: [
            (0, i.jsx)(e6, { isBadged: l }),
            l ? (0, i.jsx)(J.E, { className: e4.F, variant: "text-xs/semibold", children: n > 99 ? "99+" : n }) : null,
        ],
    });
}
function e7(e) {
    let {
            toggleRequestToSpeakSidebar: t,
            showRequestToSpeakSidebar: n,
            className: s,
            numRequestToSpeak: a,
            onClick: r,
            ...o
        } = e,
        c = l.useCallback(() => {
            (r?.(), t());
        }, [r, t]);
    return (0, i.jsx)(e5.A, {
        onClick: c,
        label: n ? eg.intl.string(eg.t.gKGz7A) : eg.intl.string(eg.t.ImQ4dW),
        className: s,
        iconComponent: () => (0, i.jsx)(e3, { numRequestToSpeak: a, className: s }),
        ...o,
    });
}
var e8 = n(96566);
function te(e) {
    let t = (0, o.bG)([E.A], () => E.A.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
        n = (0, B.uy)(e.id),
        i = (0, B.zy)(e.id, q.ip.AUDIENCE),
        l = (0, e8.qT)(e.id),
        s = (0, o.bG)([M.A], () => M.A.getGuild(e.guild_id), [e.guild_id]),
        a = (0, o.bG)([k.A], () => k.A.can(e1.QY, e), [e]),
        r = s?.maxStageVideoChannelUsers ?? 0,
        c = !(null != s && s.features.has(ej.GuildFeatures.COMMUNITY)) && r > ej.uaN;
    return l && !t && a && !c && n + i >= r;
}
var tt = n(202541),
    tn = n(903489);
function ti(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: l } = e,
        { analyticsLocations: s, newestAnalyticsLocation: r } = (0, f.Ay)(m.A.VOICE_CHANNEL_HEADER),
        c = (0, o.bG)([E.A], () => E.A.getChatOpen(t.id), [t.id]),
        d = (0, e0.Ni)(t.id),
        u = (0, B.zy)(t.id, q.ip.REQUESTED_TO_SPEAK_ONLY);
    return (0, i.jsxs)(f.f5, {
        value: s,
        children: [
            (0, i.jsx)(eQ.A, { channelId: t.id }, "clips-enabled-indicator"),
            !l && d
                ? (0, i.jsx)("div", {
                      className: a()(tn.x6, { [tn.vc]: c }),
                      children: (0, i.jsx)(e7, {
                          toggleRequestToSpeakSidebar: function () {
                              (c && A.A.updateChatOpen(t.id, !1), (0, S.X)(r, S.O.OPEN_REQUEST_TO_SPEAK_SIDEBAR), n());
                          },
                          showRequestToSpeakSidebar: l,
                          numRequestToSpeak: u,
                      }),
                  })
                : null,
            !c &&
                (0, i.jsx)("div", {
                    className: a()(tn.x6, { [tn.vc]: l }),
                    children: (0, i.jsx)(e$.V, {
                        channelId: t.id,
                        showRequestToSpeakSidebar: l,
                        toggleRequestToSpeakSidebar: n,
                        iconClassName: tn.iA,
                    }),
                }),
        ],
    });
}
function tl(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: s } = e,
        r = (0, ek.Ay)(t),
        c = (0, o.bG)([K.A], () => K.A.getStageInstanceByChannel(t.id)),
        d = (0, B.uy)(t.id),
        h = (0, B.zy)(t.id, q.ip.AUDIENCE),
        p = (0, o.bG)([M.A], () => M.A.getGuild(t.guild_id), [t.guild_id]),
        x = p?.maxStageVideoChannelUsers ?? 0,
        g =
            null != p && p.features.has(ej.GuildFeatures.COMMUNITY)
                ? x < ej.p2C
                : p?.premiumTier !== ej.TVA.TIER_3 && x <= ej.nyz,
        m = te(t),
        f = (0, o.bG)([k.A], () => k.A.can(e1.QY, t));
    function E() {
        (A.A.updateStageVideoLimitBoostUpsellDismissed(t.id, !0),
            eJ.default.track(ej.HAw.BOOSTING_UPSELL_CLICKED, {
                guild_id: t.guild_id,
                type: tt.e.VIDEO_STAGE_LIMIT,
                is_moderator: f,
                action: tt.pd.DISMISS,
            }));
    }
    let C = { canModerate: f, audienceCount: h, channel: t, speakerCount: d },
        j = l.useRef(C);
    (l.useEffect(() => {
        j.current = C;
    }),
        l.useEffect(() => {
            let { canModerate: e, audienceCount: t, channel: n, speakerCount: i } = j.current;
            m &&
                eJ.default.track(ej.HAw.BOOSTING_UPSELL_VIEWED, {
                    guild_id: n.guild_id,
                    type: tt.e.VIDEO_STAGE_LIMIT,
                    is_moderator: e,
                    listener_count: i + t,
                });
        }, [m]));
    let N = (0, i.jsx)(u.N, {
        theme: ej.NJ8.DARK,
        children: (e) =>
            (0, i.jsxs)(eo.Ay, {
                toolbar: (0, i.jsx)(ti, { toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: s, channel: t }),
                onDoubleClick: eZ.I,
                transparent: !0,
                className: a()(e, tn.lF),
                children: [
                    (0, i.jsx)(eo.Ay.Icon, {
                        icon: eN.q,
                        disabled: !0,
                        "aria-label": eg.intl.string(eg.t.EErMzA),
                        className: tn.Kk,
                        color: null != c ? eF.A.colors.TEXT_MUTED.css : void 0,
                    }),
                    (0, i.jsx)(eo.Ay.Title, { className: tn.HA, wrapperClassName: tn.KD, children: c?.topic ?? r }),
                    (0, i.jsx)(eo.Ay.Divider, { className: tn.yF }),
                    (0, i.jsxs)(eo.Ay.Title, {
                        children: [
                            (0, i.jsx)(eY.MicrophoneIcon, { size: "xs", color: eF.A.colors.TEXT_MUTED.css }),
                            (0, i.jsx)(J.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: tn.N_,
                                children: eg.intl.format(eg.t.chmM9N, { count: d }),
                            }),
                            (0, i.jsx)(eW.n, { size: "xs", className: tn.Kk, color: "currentColor" }),
                            (0, i.jsx)(J.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: tn.N_,
                                children: eg.intl.format(eg.t["+v2pN2"], { count: h }),
                            }),
                        ],
                    }),
                ],
            }),
    });
    return m
        ? (0, i.jsxs)("div", {
              children: [
                  N,
                  (0, i.jsxs)("div", {
                      className: tn.bp,
                      children: [
                          (0, i.jsx)(ts, {}),
                          (0, i.jsxs)("div", {
                              className: tn.Qq,
                              children: [
                                  (0, i.jsx)(J.E, {
                                      variant: "text-md/medium",
                                      color: "text-strong",
                                      children: g ? eg.intl.string(eg.t["T+zF9M"]) : eg.intl.string(eg.t["IZ+SVv"]),
                                  }),
                                  (0, i.jsx)(J.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: g ? eg.intl.string(eg.t.Izgpmv) : eg.intl.string(eg.t["7FHbPG"]),
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: tn.Uo,
                              children: g
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(eU.$, {
                                                onClick: E,
                                                size: "sm",
                                                variant: "secondary",
                                                text: eg.intl.string(eg.t.L5eIZ2),
                                            }),
                                            (0, i.jsx)(eU.$, {
                                                variant: "expressive",
                                                onClick: function () {
                                                    ((0, eX.K4)({
                                                        guildId: t.guild_id,
                                                        location: { section: ej.JJy.STAGE_VIDEO_LIMIT },
                                                    }),
                                                        eJ.default.track(ej.HAw.BOOSTING_UPSELL_CLICKED, {
                                                            guild_id: t.guild_id,
                                                            type: tt.e.VIDEO_STAGE_LIMIT,
                                                            is_moderator: f,
                                                            action: tt.pd.BOOST,
                                                        }));
                                                },
                                                size: "sm",
                                                text: eg.intl.string(eg.t.Uj0md3),
                                            }),
                                        ],
                                    })
                                  : (0, i.jsx)(eU.$, {
                                        variant: "primary",
                                        onClick: E,
                                        size: "sm",
                                        text: eg.intl.string(eg.t.WAI6xu),
                                    }),
                          }),
                      ],
                  }),
              ],
          })
        : N;
}
function ts() {
    return (0, i.jsxs)("svg", {
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none",
        children: [
            (0, i.jsxs)("g", {
                clipPath: "url(#clip0_595_59940)",
                children: [
                    (0, i.jsx)("path", {
                        d: "M36 18C36 19.8 33.075 21.15 32.625 22.725C32.175 24.3 33.525 27.225 32.625 28.575C31.725 29.925 28.35 29.25 27 30.375C25.65 31.5 25.2 34.425 23.625 35.1C22.05 35.775 19.8 33.3 18 33.3C16.2 33.3 13.95 35.55 12.375 35.1C10.8 34.65 10.35 31.275 9 30.375C7.65 29.475 4.5 29.925 3.375 28.575C2.25 27.225 3.825 24.525 3.375 22.725C2.925 20.925 0 19.8 0 18C0 16.2 2.925 14.85 3.375 13.275C3.825 11.7 2.475 8.77497 3.375 7.42496C4.275 6.07497 7.65 6.74997 9 5.62497C10.35 4.49997 10.8 1.57497 12.375 0.899965C13.95 0.224965 16.2 2.69997 18 2.69997C19.8 2.69997 22.05 0.449965 23.625 0.899965C25.2 1.34997 25.65 4.49997 27 5.62497C28.35 6.74997 31.5 6.07497 32.625 7.42496C33.75 8.77497 32.175 11.475 32.625 13.275C33.075 15.075 36 16.2 36 18Z",
                        fill: "url(#paint0_linear_595_59940)",
                    }),
                    (0, i.jsx)("path", {
                        d: "M15.75 20.7001L18 22.9501L20.25 20.7001V15.3001L18 13.0501L15.75 15.3001V20.7001Z",
                        fill: "white",
                    }),
                    (0, i.jsx)("path", {
                        d: "M18 6.75L11.25 13.5V22.5L18 29.25L24.75 22.5V13.5L18 6.75ZM22.5 21.6L18 26.1L13.5 21.6V14.4L18 9.9L22.5 14.4V21.6Z",
                        fill: "white",
                    }),
                ],
            }),
            (0, i.jsxs)("defs", {
                children: [
                    (0, i.jsxs)("linearGradient", {
                        id: "paint0_linear_595_59940",
                        x1: "2.4046e-06",
                        y1: "35.2166",
                        x2: "35.7182",
                        y2: "-1.45185",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            (0, i.jsx)("stop", { stopColor: "#3E70DD" }),
                            (0, i.jsx)("stop", { offset: "1", stopColor: "#B377F3" }),
                        ],
                    }),
                    (0, i.jsx)("clipPath", {
                        id: "clip0_595_59940",
                        children: (0, i.jsx)("rect", { width: "36", height: "36", fill: "white" }),
                    }),
                ],
            }),
        ],
    });
}
var ta = n(456412),
    tr = n(63995);
n(321073);
var to = n(59520),
    tc = n(996439),
    td = n(562708),
    tu = n(428678),
    th = n(952270),
    tA = n(104510),
    tp = n(139286),
    tx = n(480890),
    tg = n(562153),
    tm = n(806931),
    tf = n(314243);
let tE = l.memo(function (e) {
        let { guildId: t, channelId: n, user: l, isPremium: s, isBlocked: a, isIgnored: r } = e;
        return (0, i.jsxs)("div", {
            className: tf.FS,
            children: [
                a ? (0, i.jsx)(tu.K, { size: "lg", className: tf.Q6, color: eF.A.unsafe_rawColors.RED_400.css }) : null,
                r ? (0, i.jsx)(th.EyeSlashIcon, { size: "lg", className: tf.Q6 }) : null,
                (0, i.jsx)(J.E, {
                    className: tf.Qq,
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: tg.Ay.getName(t, n, l),
                }),
                s ? (0, i.jsx)(tA._, { className: tf.EH, color: eF.A.unsafe_rawColors.GUILD_BOOSTING_PINK }) : null,
            ],
        });
    }),
    tC = l.memo(function (e) {
        let { participant: t, guildId: n, channel: l, isPremium: s } = e,
            { user: r, blocked: o, ignored: c, rtsState: d } = t,
            u = d === ef.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            h = d === ef.zF.REQUESTED_TO_SPEAK || u;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: tf.H,
                    children: [
                        h &&
                            (0, i.jsx)(Q.E, {
                                size: "md",
                                color: "currentColor",
                                className: a()(tf.Kk, { [tf.MD]: u }),
                            }),
                        (0, i.jsx)("img", {
                            src: r.getAvatarURL(l.guild_id, 56, !1) ?? void 0,
                            alt: r.username,
                            "aria-label": r.username,
                            className: a()(tf.my, { [tf.zj]: o || c }),
                        }),
                    ],
                }),
                (0, i.jsx)(tE, { guildId: n, channelId: l.id, user: r, isPremium: s, isBlocked: o, isIgnored: c }),
            ],
        });
    });
function tj() {
    return (0, i.jsx)("div", { className: tf.j8 });
}
let tN = l.memo(function (e) {
    let { participant: t, channel: s } = e,
        { user: r, blocked: c } = t,
        d = s.getGuildId(),
        u = U.default.getId(),
        { newestAnalyticsLocation: h } = (0, f.Ay)(m.A.AUDIENCE_TILE),
        A = (0, T.Us)(),
        p = (0, o.bG)([eu.Ay], () => null != d && eu.Ay.getMember(d, r.id)?.premiumSince != null, [d, r.id]),
        x = l.useRef(null);
    Y()(null != d, "Channel cannot be guildless");
    let g = l.useCallback(
        (e) => {
            ((0, tp.x)({
                type: td.ImpressionTypes.MENU,
                name: td.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                properties: { location: "AudienceTile", is_tile_owner: r.id === u, tile_type: tm.qs.USER },
            }),
                (0, es.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("866038"),
                            n.e("926132"),
                            n.e("146652"),
                            n.e("893190"),
                            n.e("189673"),
                            n.e("229787"),
                            n.e("882073"),
                            n.e("797558"),
                            n.e("691994"),
                            n.e("576665"),
                            n.e("624198"),
                            n.e("245996"),
                            n.e("823427"),
                            n.e("449145"),
                            n.e("529422"),
                            n.e("307059"),
                            n.e("343116"),
                            n.e("139103"),
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
                                user: r,
                                guildId: d,
                                channel: s,
                                showMediaItems: !0,
                                showStageChannelItems: !0,
                                showChatItems: !1,
                                onInteraction: (0, tx.s)("GuildChannelUserContextMenu", h, {
                                    targetUserId: r.id,
                                    tileType: tm.qs.USER,
                                }),
                            });
                    },
                    { context: A },
                ));
        },
        [r, u, A, d, s, h],
    );
    return (0, i.jsx)(ed.A, {
        targetElementRef: x,
        user: r,
        guildId: s.guild_id,
        channelId: s.id,
        clickTrap: !0,
        children: (e) =>
            (0, i.jsx)(X.D, {
                innerRef: x,
                className: a()(tf.iA, { [tf.wP]: p || c, [tf.fP]: p && c }),
                onContextMenu: g,
                ...e,
                children: (0, i.jsx)(tC, { participant: t, guildId: d, channel: s, isPremium: p }),
            }),
    });
});
var tS = n(784227);
let tT = l.memo(function (e) {
    let { channel: t, participants: n, maxTiles: l } = e;
    if (0 === n.length) return null;
    let s = [];
    for (let e = 0; e < l; e++)
        if (e < n.length) {
            let l = n[e];
            s.push((0, i.jsx)(tN, { channel: t, participant: l }, l.id));
        } else s.push((0, i.jsx)(tj, {}, e));
    return (0, i.jsx)("div", { className: tS.l, children: s });
});
var t_ = n(446837),
    tI = n(201001),
    ty = n(473530);
let tv = (0, tI.$)(ty.qZ, ty.Rv, "", window.ResizeObserver ?? t_.t);
var tb = n(844222),
    tO = n(401843),
    tR = n(643501),
    tL = n(652896),
    tP = n(279250),
    tU = n(51092),
    tw = n(326567),
    tM = n(616356),
    tk = n(977997),
    tG = n(312006),
    tD = n(544576),
    tV = n(756872);
function tz(e) {
    let { aspectRatio: t, className: n, children: l, width: s, ...a } = e,
        r = tD.Ay.getVideoComponent();
    return (0, i.jsx)("div", {
        style: { width: s },
        className: tV.A,
        children: (0, i.jsxs)("div", {
            className: tV.e,
            style: { aspectRatio: t },
            children: [(0, i.jsx)(eV.Ay, { className: n, videoComponent: r, width: s, ...a }), l],
        }),
    });
}
var tB = n(953727);
function tq(e) {
    let { width: t = 32, height: n = 32, color: l = "currentColor", foreground: s, ...a } = e;
    return (0, i.jsxs)("svg", {
        ...(0, tB.A)(a),
        width: t,
        height: n,
        viewBox: "0 0 32 32",
        children: [
            (0, i.jsx)("rect", { width: "32", height: "32", rx: "16", fill: l }),
            (0, i.jsx)("path", {
                d: "M23 9.99995C19.56 9.99995 16.826 6.43495 16.799 6.39795C16.421 5.89795 15.579 5.89795 15.201 6.39795C15.174 6.43495 12.44 9.99995 9 9.99995C8.447 9.99995 8 10.4479 8 10.9999V17.9999C8 21.8069 14.764 25.4779 15.534 25.8839C15.68 25.9609 15.84 25.9979 16 25.9979C16.16 25.9979 16.32 25.9599 16.466 25.8839C17.236 25.4779 24 21.8069 24 17.9999V10.9999C24 10.4479 23.553 9.99995 23 9.99995ZM19 19.9999L16 17.9999L13 19.9999L14 16.9999L12 14.9999H15L16 11.9999L17 14.9999H20L18 16.9999L19 19.9999Z",
                className: s,
            }),
        ],
    });
}
var tK = n(90075);
let tH = function () {
    return (0, i.jsx)(ee.m, {
        text: eg.intl.string(eg.t.GMZqSi),
        children: (0, i.jsx)("div", {
            className: tK.k,
            children: (0, i.jsx)(tq, { color: eF.A.unsafe_rawColors.WHITE.css }),
        }),
    });
};
var tF = n(145131);
let tY = 16 / 9;
function tW(e) {
    let {
            stageParticipant: t,
            rtcParticipant: n,
            channel: s,
            guildId: a,
            user: r,
            width: o,
            isModerator: c,
            onContextMenu: d,
            popoutType: u,
        } = e,
        h = l.useRef(null),
        { reducedMotion: A } = l.useContext(tb.C),
        { blocked: p, ignored: x, id: g } = t;
    return (0, i.jsx)(ed.A, {
        targetElementRef: h,
        user: r,
        guildId: a,
        channelId: s.id,
        clickTrap: !0,
        children: (e) =>
            (0, i.jsx)(X.D, {
                innerRef: h,
                onContextMenu: (e) => d(n, e),
                ...e,
                children: (0, i.jsx)(
                    tz,
                    {
                        participant: n,
                        aspectRatio: tY,
                        blocked: p,
                        ignored: x,
                        channel: s,
                        className: tF.V,
                        inCall: !0,
                        popoutType: u,
                        pulseSpeakingIndicator: !A.enabled,
                        width: o,
                        onContextMenu: d,
                        children: c && (0, i.jsx)(tH, {}),
                    },
                    g,
                ),
            }),
    });
}
function tQ(e) {
    let {
            stageParticipant: t,
            rtcParticipant: n,
            channel: s,
            width: a,
            isModerator: r,
            onContextMenu: c,
            popoutType: d,
        } = e,
        { reducedMotion: u } = l.useContext(tb.C),
        { id: h, blocked: p, ignored: x } = t,
        g = (0, o.yK)([tM.A], () => tM.A.getAllActiveStreams(), []),
        { selectedParticipant: m, largeStream: f } = (0, o.cf)([E.A], () => ({
            selectedParticipant: null != s ? E.A.getSelectedParticipant(s.id) : null,
            largeStream: null != s && E.A.getStageStreamSize(s.id),
        })),
        C = l.useCallback(
            (e, t) => {
                if (
                    e.type === tm.lp.STREAM &&
                    0 === g.filter((t) => (0, tL._z)(t) === e.id && t.state !== ej.XYD.ENDED).length
                ) {
                    if (!(0, tP.eo)(s, tk.A, M.A, k.A, tR.default)[0]) return;
                    (0, tO.A9)((0, tL.Iy)(e.id), { forceMultiple: t.shiftKey });
                }
                m?.id === e.id
                    ? f
                        ? (A.A.selectParticipant(s.id, null), A.A.updateStageStreamSize(s.id, !1))
                        : A.A.updateStageStreamSize(s.id, !0)
                    : (A.A.updateStageStreamSize(s.id, !1), A.A.selectParticipant(s.id, e.id));
            },
            [g, s, m, f],
        );
    return (0, i.jsx)(
        tz,
        {
            participant: n,
            aspectRatio: tY,
            fit: n.type === tm.lp.USER ? tU.$.COVER : void 0,
            blocked: p,
            ignored: x,
            channel: s,
            className: tF.V,
            inCall: !0,
            popoutType: d,
            onClick: C,
            onContextMenu: c,
            pulseSpeakingIndicator: !u.enabled,
            width: a,
            children: r && n.type === tm.lp.USER && (0, i.jsx)(tH, {}),
        },
        h,
    );
}
let tX = l.memo(function (e) {
    let { participant: t, channel: l, width: s, popoutType: a } = e,
        { newestAnalyticsLocation: r } = (0, f.Ay)(m.A.STAGE_TILE),
        c = (0, T.Us)(),
        d = l.getGuildId(),
        u = U.default.getId();
    Y()(null != d, "Channel cannot be guildless");
    let { user: h } = t,
        A = (0, o.bG)([E.A], () => E.A.getParticipant(l.id, t.id), [l.id, t.id]),
        p = (0, o.bG)([tG.Ay], () => tG.Ay.isModerator(h.id, l.id), [l.id, h.id]);
    if (null == A || A.type === tm.lp.ACTIVITY) return null;
    function x(e) {
        (0, tp.x)({
            type: td.ImpressionTypes.MENU,
            name: td.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: { location: "StageTile", is_tile_owner: h.id === u, tile_type: e },
        });
    }
    function g(e, t, s, a) {
        if (null != d)
            switch (e.type) {
                case tm.lp.HIDDEN_STREAM:
                case tm.lp.STREAM:
                    (x(tm.qs.STREAM),
                        (0, es.L3)(
                            t,
                            async () => {
                                let { default: t } = await Promise.all([
                                    n.e("189673"),
                                    n.e("245996"),
                                    n.e("529422"),
                                    n.e("58315"),
                                    n.e("870553"),
                                ]).then(n.bind(n, 744960));
                                return (n) =>
                                    (0, i.jsx)(t, {
                                        ...n,
                                        stream: e.stream,
                                        appContext: c,
                                        exitFullscreen: () => {},
                                        onInteraction: (0, tx.s)("StreamContextMenu", r, {
                                            entrypoint: a,
                                            targetUserId: h.id,
                                            tileType: tm.qs.STREAM,
                                        }),
                                    });
                            },
                            { context: c },
                        ));
                    return;
                case tm.lp.USER:
                default:
                    if ((x(tm.qs.USER), s))
                        return (0, tw.r)(t, h, l, { context: c }, (e, t) =>
                            (0, tx.Y)({
                                menuName: e,
                                menuItemProps: t,
                                entrypoint: tm.GK.THREE_DOT,
                                targetUserId: h.id,
                                location: r,
                                tileType: tm.qs.USER,
                            }),
                        );
                    (0, es.L3)(
                        t,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("866038"),
                                n.e("926132"),
                                n.e("146652"),
                                n.e("893190"),
                                n.e("189673"),
                                n.e("229787"),
                                n.e("882073"),
                                n.e("797558"),
                                n.e("691994"),
                                n.e("576665"),
                                n.e("624198"),
                                n.e("245996"),
                                n.e("823427"),
                                n.e("449145"),
                                n.e("529422"),
                                n.e("307059"),
                                n.e("343116"),
                                n.e("139103"),
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
                                    user: h,
                                    guildId: d,
                                    channel: l,
                                    showMediaItems: !0,
                                    showStageChannelItems: !0,
                                    showChatItems: !1,
                                    onInteraction: (0, tx.s)("GuildChannelUserContextMenu", r, {
                                        targetUserId: h.id,
                                        tileType: tm.qs.USER,
                                    }),
                                });
                        },
                        { context: c },
                    );
            }
    }
    return A.type !== tm.lp.USER || A.voiceState?.selfVideo
        ? (0, i.jsx)(tQ, {
              stageParticipant: t,
              rtcParticipant: A,
              channel: l,
              guildId: d,
              user: h,
              width: s,
              isModerator: p,
              onContextMenu: g,
              popoutType: a,
          })
        : (0, i.jsx)(tW, {
              stageParticipant: t,
              rtcParticipant: A,
              channel: l,
              guildId: d,
              user: h,
              width: s,
              isModerator: p,
              onContextMenu: g,
              popoutType: a,
          });
});
var tZ = n(239131);
let t$ = l.memo(function (e) {
    let { channel: t, participants: n, tileWidth: l, selectedParticipant: s, popoutType: a } = e;
    return (0, i.jsx)("div", {
        className: tZ.q,
        children: n.map((e) =>
            e.id === s?.id ? null : (0, i.jsx)(tX, { channel: t, participant: e, width: l, popoutType: a }, e.id),
        ),
    });
});
var tJ = n(847374),
    t0 = n(402216),
    t1 = n(97808),
    t9 = n(717558),
    t2 = n(636585),
    t5 = n(486020),
    t4 = n(799656);
function t6(e) {
    let { channel: t, speaker: s, className: r } = e,
        o = l.useRef(null),
        { newestAnalyticsLocation: c } = (0, f.Ay)(),
        d = (0, T.Us)(),
        { reducedMotion: u } = l.useContext(tb.C),
        h = (0, t9.A)({ userId: s.id }),
        A = null != s.member ? (0, t5.xT)(s.member) : null;
    function p(e) {
        (0, es.L3)(
            e,
            async () => {
                let { default: e } = await Promise.all([
                    n.e("866038"),
                    n.e("926132"),
                    n.e("146652"),
                    n.e("893190"),
                    n.e("189673"),
                    n.e("229787"),
                    n.e("882073"),
                    n.e("797558"),
                    n.e("691994"),
                    n.e("576665"),
                    n.e("624198"),
                    n.e("245996"),
                    n.e("823427"),
                    n.e("449145"),
                    n.e("529422"),
                    n.e("307059"),
                    n.e("343116"),
                    n.e("139103"),
                    n.e("470314"),
                    n.e("70515"),
                    n.e("404524"),
                    n.e("654148"),
                    n.e("666939"),
                    n.e("717334"),
                    n.e("184841"),
                ]).then(n.bind(n, 107632));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: s.user,
                        guildId: t.guild_id,
                        channel: t,
                        showMediaItems: !0,
                        showStageChannelItems: !0,
                        showChatItems: !1,
                        onInteraction: (0, tx.s)("GuildChannelUserContextMenu", c),
                    });
            },
            { context: d },
        );
    }
    return (0, i.jsx)(ed.A, {
        targetElementRef: o,
        user: s.user,
        guildId: t.guild_id,
        channelId: t.id,
        clickTrap: !0,
        children: (e) =>
            (0, i.jsx)(ee.m, {
                targetElementRef: o,
                __unsupportedReactNodeAsText: s.userNick,
                position: "bottom",
                children: (0, i.jsx)(X.D, {
                    ...e,
                    innerRef: o,
                    onClick: (t) => {
                        (t.stopPropagation(), e.onClick(t));
                    },
                    onContextMenu: p,
                    children: (0, i.jsx)(t1.eu, {
                        src: A ?? s.user.getAvatarURL(t.guild_id, 24),
                        size: Z._3.SIZE_24,
                        className: a()(t4.my, r),
                        "aria-label": s.userNick,
                        isSpeaking: h && !u.enabled,
                    }),
                }),
            }),
    });
}
function t3(e) {
    let { speakers: t, channel: n } = e;
    return (0, i.jsx)(t2.A, {
        className: t4.z,
        guildId: n.guild_id,
        users: t,
        max: 10,
        renderUser: (e, t, l) => (0, i.jsx)(t6, { channel: n, speaker: e, className: t }, l),
        renderMoreUsers: (e, t, n) => (0, i.jsx)("div", { className: a()(t4.$U, t), children: e }, n),
    });
}
var t7 = n(784269);
let t8 = l.memo(function (e) {
    let {
        label: t,
        participantCount: n,
        onClick: l,
        className: s,
        collapsed: r,
        speakers: o,
        channel: c,
        isStreamLive: d,
    } = e;
    return (0, i.jsxs)(X.D, {
        onClick: l,
        className: a()(t7.kL, s),
        children: [
            null == o
                ? (0, i.jsx)(eW.n, { size: "custom", color: "currentColor", width: 20, height: 20, className: t7.Vo })
                : (0, i.jsx)(eY.MicrophoneIcon, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                      className: t7.Vo,
                  }),
            (0, i.jsxs)(J.E, {
                color: "text-strong",
                variant: "text-md/semibold",
                className: t7.Qq,
                children: [t, " \u2014 ", n],
            }),
            r &&
                null != c &&
                null != o &&
                o.length > 0 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(t3, { channel: c, speakers: o }), d && (0, i.jsx)(t0.Ay, {})],
                }),
            (0, i.jsx)(tJ.a, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: a()(t7.mw, { [t7.VU]: r }),
            }),
        ],
    });
});
var ne = n(676553);
function nt(e) {
    return e.type === q.wY.VOICE;
}
let nn = (0, ta.A)(function (e) {
    let t,
        n,
        { channel: s, width: a, onScroll: c, popoutType: d } = e,
        {
            selectedParticipantId: u,
            largeStream: h,
            chatOpen: A,
        } = (0, o.cf)(
            [E.A],
            () => ({
                selectedParticipantId: E.A.getSelectedParticipantId(s.id),
                largeStream: E.A.getStageStreamSize(s.id),
                chatOpen: E.A.getChatOpen(s.id),
            }),
            [s.id],
        ),
        p = (0, B.uy)(s.id),
        x = (0, B.zy)(s.id, q.ip.AUDIENCE),
        g = (0, o.bG)([tr.A], () => (null != u ? tr.A.getParticipant(s.id, u) : null)),
        m = (0, B.E5)(s.id, q.ip.SPEAKER),
        f = m.filter(nt),
        C = null != m.find((e) => e.type === q.wY.STREAM),
        j = Math.floor((a - 32) / 102),
        N = a < 424 ? 1 : a < 624 ? 2 : a < 824 || A ? 3 : 4,
        S = { [q.ip.SPEAKER]: N, [q.ip.AUDIENCE]: j, [q.ip.SELECTED]: 1 },
        T = (function (e) {
            let t = (0, B.zy)(e, q.ip.AUDIENCE),
                [n, i] = l.useState(!1);
            return (
                l.useEffect(() => {
                    t > 100 ? i(!0) : t < 75 && i(!1);
                }, [t]),
                5e3 * !!n
            );
        })(s.id),
        [_, I] = (function (e, t, n) {
            let i,
                s,
                a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                c =
                    ((i = (0, o.bG)([tr.A], () => [e, tr.A.getParticipantsVersion(e)], [e], tc.D)),
                    (s = (0, o.bG)([E.A], () => E.A.getSelectedParticipantId(e), [e])),
                    l.useMemo(() => {
                        let n = [],
                            l = [],
                            o = -1,
                            c = [];
                        if (a)
                            for (let t of tr.A.getMutableParticipants(e, q.ip.SPEAKER))
                                if (t.type === q.wY.STREAM) (t.id !== s && c.push(t), o++);
                                else break;
                        function d(e, t, i) {
                            let a = i ? e.filter((e, t) => e.id !== s && t > o) : e,
                                c = (0, r.chunk)(a, t);
                            (l.push(c), n.push(c.length));
                        }
                        let u = null != s ? tr.A.getParticipant(e, s) : null;
                        return (
                            u?.speaker ? d([u], 1, !1) : d([], 1, !1),
                            [q.ip.SPEAKER, q.ip.AUDIENCE].forEach((e) => {
                                d(tr.A.getMutableParticipants(i[0], e), t[e], e === q.ip.SPEAKER);
                            }),
                            d(c, 1, !1),
                            [n, l]
                        );
                    }, [i, t, s, a, e])),
                [d, u] = c,
                [h, A] = (0, to.J)(c, n, [t[q.ip.AUDIENCE]]);
            return [
                [d[3 * !!a], d[1], h[2]],
                [u[3 * !!a], u[1], A[2]],
            ];
        })(s.id, S, T),
        y = [Math.max(_[0] ?? 1, 1), Math.max(_[1] ?? 1, 1), _[2]],
        { speakerTileWidth: v, speakerTileHeight: b } =
            ((n = Math.floor((t = Math.floor(a / N - 8)) / tY)), { speakerTileWidth: t, speakerTileHeight: n }),
        O = h ? a - 32 : Math.min(a - 64, 3 * v + 8);
    function R(e) {
        return e === _.length - 1 || (0 === x && 1 === e);
    }
    let [L, P] = l.useState(!1),
        [U, w] = l.useState(!1);
    return (0, i.jsx)(tv, {
        sections: y,
        renderSection: function (e) {
            let { section: t } = e;
            return 1 === t
                ? 0 === p
                    ? null
                    : (0, i.jsx)(
                          t8,
                          {
                              participantCount: p,
                              label: eg.intl.string(eg.t.CduOkx),
                              className: ne.wx,
                              onClick: () => P(!L),
                              collapsed: L,
                              speakers: f,
                              channel: s,
                              isStreamLive: C,
                          },
                          `speaker-header-${t}`,
                      )
                : 2 === t
                  ? 0 === x
                      ? null
                      : (0, i.jsx)(
                            t8,
                            {
                                participantCount: x,
                                label: eg.intl.string(eg.t["3foUu5"]),
                                className: ne.wx,
                                onClick: () => w(!U),
                                collapsed: U,
                                channel: s,
                            },
                            `audience-header-${t}`,
                        )
                  : null;
        },
        sectionHeight: function (e) {
            return 48;
        },
        renderRow: function (e) {
            let { section: t, row: n } = e,
                a = I[t][n];
            if (a?.length == null) return null;
            switch (t) {
                case 0:
                    if (0 === a.length || null == a[0]) return null;
                    return (0, i.jsx)(
                        "div",
                        {
                            className: ne.Od,
                            children: (0, i.jsx)(tX, { channel: s, participant: a[0], width: O, popoutType: d }),
                        },
                        "selected-participant",
                    );
                case 1:
                    if (L) return null;
                    return (0, i.jsx)(
                        l.Fragment,
                        {
                            children: (0, i.jsx)(t$, {
                                tileWidth: v,
                                channel: s,
                                participants: a,
                                selectedParticipant: g,
                                popoutType: d,
                            }),
                        },
                        `speakers-${t}-${n}`,
                    );
                case 2:
                    if (U) return null;
                    return (0, i.jsx)(tT, { channel: s, participants: a, maxTiles: j }, `audience-${t}-${n}`);
                default:
                    return null;
            }
        },
        rowHeight: function (e) {
            return null == I[e][0] ? 0 : 0 === e ? O / tY + 8 : 1 === e ? (L ? 0 : b) : 98 * !U;
        },
        renderFooter: function (e) {
            let { section: t } = e;
            return R(t) ? (0, i.jsx)("div", { className: ne.jH }, "bottom-spacer") : null;
        },
        footerHeight: function (e) {
            return 1 === e ? 8 : 0 === e ? 12 : 88 * !!R(e);
        },
        className: ne.XG,
        chunkSize: 60,
        onScroll: c,
    });
});
var ni = n(43105),
    nl = n(309796),
    ns = n(666654),
    na = n(922016),
    nr = n(980707),
    no = n(477782),
    nc = n(285796),
    nd = n(381844),
    nu = n(532676),
    nh = n(432017),
    nA = n(517461),
    np = n(379257),
    nx = n(306537),
    ng = n(385318),
    nm = n(329072),
    nf = n(183184),
    nE = n(880144),
    nC = n(698441),
    nj = n(394412),
    nN = n(993838),
    nS = n(418208),
    nT = n(47868);
function n_(e) {
    let { className: t, channel: n, highlight: l } = e,
        s = (0, T.Us)();
    return (0, nS.zU)()
        ? null
        : (0, i.jsx)(nT.A, {
              highlight: l ?? !1,
              className: t,
              icon: (0, i.jsx)(eN.q, { size: "custom", color: "currentColor", height: 20, width: 20 }),
              color: eF.A.unsafe_rawColors.GREEN_360.css,
              title: eg.intl.string(eg.t.OYbHfv),
              description: eg.intl.string(eg.t.yXwLMQ),
              onClick: function () {
                  (0, nN.tQ)(n, s);
              },
          });
}
var nI = n(931991),
    ny = n(151476),
    nv = n(405018),
    nb = n(704877),
    nO = n(173660),
    nR = n(105225),
    nL = n(579153),
    nP = n(222692),
    nU = n(246356),
    nw = n(404355),
    nM = n(577062),
    nk = n(970636),
    nG = n(287809),
    nD = n(302884),
    nV = n(30108),
    nz = n(39938),
    nB = n(106044);
function nq(e) {
    let t = (0, o.bG)([U.default], () => U.default.getId());
    return (0, ef.Ay)(t, e) === ef.zF.ON_STAGE;
}
var nK = n(505543);
function nH(e) {
    let t = (0, o.bG)([U.default], () => U.default.getId()),
        n = (0, ef.Ay)(t, e.id),
        i = n === ef.zF.REQUESTED_TO_SPEAK || n === ef.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
        [s, a] = l.useState(i);
    return (
        l.useEffect(() => {
            a(i);
        }, [i]),
        [
            s,
            function () {
                (0, nS.Cf)(e.id)
                    ? np.A.showAgeVerificationGetStartedModal({ entryPoint: nx.q1.STAGE_CHANNEL_RAISE_HAND })
                    : (n === ef.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, eA.e7)(e, !0) : (0, eA.J7)(e, !s),
                      a(!s));
            },
        ]
    );
}
var nF = n(328375),
    nY = n(117816);
function nW(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, f.Ay)(),
        s = nq(t.id),
        [a, r] = nH(t),
        c = (0, o.bG)([k.A], () => k.A.can(eI.xB.REQUEST_TO_SPEAK, t)),
        d = (0, nS.Vv)(),
        u = (0, nS.tp)(),
        h = l.useRef(null),
        [A, p] = (0, nA.V)("age-verification-stage-popover-dismissed", !1),
        x = l.useContext(v.vG);
    if (s) return null;
    let g = u && !A;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(e5.l, {
                ref: h,
                isTrayButton: !0,
                isActive: a,
                label: (function (e, t, n, i) {
                    let l = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                    return !l && i
                        ? null
                        : n
                          ? eg.intl.string(eg.t.NzITVo)
                          : e
                            ? eg.intl.string(eg.t.GCimTk)
                            : t
                              ? eg.intl.string(eg.t.hLbG5N)
                              : eg.intl.string(eg.t.e4WMvx);
                })(a, c, d, u, A),
                iconComponent: d ? nl._ : Q.E,
                onClick: () => {
                    ((0, S.X)(n, S.O.REQUEST_TO_SPEAK, !a),
                        p(!0),
                        d
                            ? np.A.showAgeVerificationGetStartedModal({ entryPoint: nx.q1.STAGE_CHANNEL_RAISE_HAND })
                            : r());
                },
                color: a ? "green" : void 0,
                disabled: !c && !a,
            }),
            g &&
                (0, i.jsx)(ni.A, {
                    targetElementRef: h,
                    graphic: { type: "image", src: nY.A },
                    gradientColor: "blue",
                    title: eg.intl.string(eg.t.zvubnM),
                    body: eg.intl.string(eg.t["/wx+J2"]),
                    shouldShow: !x,
                    actions: [
                        {
                            text: eg.intl.string(eg.t.KXVgjt),
                            onClick: () => {
                                (np.A.showAgeVerificationGetStartedModal({
                                    entryPoint: nx.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT,
                                }),
                                    p(!0));
                            },
                        },
                    ],
                    onRequestClose: () => p(!0),
                }),
        ],
    });
}
let nQ = l.memo(function (e) {
    let { channel: t } = e,
        n = (0, o.bG)([G.Ay], () => G.Ay.getVoiceChannelId() === t.id, [t.id]);
    return (0, i.jsxs)("div", {
        className: nF.kL,
        children: [
            (0, i.jsxs)("div", {
                className: nF.qi,
                children: [
                    (0, i.jsx)(nJ, { channelId: t.id }),
                    n ? (0, i.jsx)(nW, { channel: t }) : null,
                    (0, i.jsx)(nL.A, { channel: t }),
                ],
            }),
            (0, i.jsx)(nZ, { channel: t }),
        ],
    });
});
function nX(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, f.Ay)(),
        l = (0, nS.Vv)();
    return (0, i.jsx)(e5.l, {
        isTrayButton: !0,
        onClick: function () {
            ((0, S.X)(n, S.O.SPEAK_ON_STAGE), l)
                ? np.A.showAgeVerificationGetStartedModal({ entryPoint: nx.q1.STAGE_CHANNEL_RAISE_HAND })
                : (0, eA.e7)(t, !1);
        },
        iconComponent: l ? ns.O : en.L,
        label: eg.intl.string(l ? eg.t.NzITVo : eg.t["8Joh+p"]),
    });
}
function nZ(e) {
    let { channel: t, onSelect: n } = e,
        s = (0, T.Us)(),
        { canManageGuildEvent: a } = (0, nI.nr)(t),
        r = (0, o.bG)([K.A], () => K.A.getStageInstanceByChannel(t.id), [t.id]),
        c = (0, o.bG)([nC.Ay], () => nC.Ay.getGuildScheduledEvent(r?.guild_scheduled_event_id)),
        { suppress: d } = (0, nO.A)(t),
        u = U.default.getId(),
        [h] = nH(t),
        A = tG.Ay.isModerator(u, t.id),
        p = (0, e0.Ni)(t.id),
        x = a(c),
        { parentAnalyticsLocation: g } = (0, f.Ay)(),
        E = l.useRef(null);
    function C() {
        return (function (e) {
            let { channel: t, appContext: n } = e;
            ((0, S.X)(m.A.VOICE_CONTROL_TRAY, S.O.DISCONNECT), (0, nB.A)(t))
                ? (0, nN.j3)(t, n)
                : ew.default.disconnect();
        })({ channel: t, appContext: s });
    }
    return (A || x) && null != r
        ? (0, i.jsx)(na.Y, {
              targetElementRef: E,
              renderPopout: (e) => {
                  let { closePopout: l } = e;
                  return (0, i.jsx)(nU.A, {
                      children: (0, i.jsx)(nr.W, {
                          "data-menu-migrated": !0,
                          navId: "exit-options",
                          "aria-label": eg.intl.string(eg.t["3Uj+2p"]),
                          onClose: l,
                          onSelect: n,
                          onInteraction: (0, tx.s)("End Stage", g, { entrypoint: tm.GK.CARET }),
                          children: (0, i.jsx)(no.Dr, {
                              id: "end-stage",
                              color: "danger",
                              action: () => (0, nN.$q)(t, s),
                              label: eg.intl.string(eg.t["Fmx5y/"]),
                              icon: nc.a,
                              leadingAccessory: { type: "icon", icon: nc.a },
                          }),
                      }),
                  });
              },
              align: "center",
              position: "top",
              spacing: 16,
              animation: na.Y.Animation.FADE,
              children: (e, t) => {
                  let { onClick: n } = e,
                      { isShown: l } = t;
                  return (0, i.jsx)(nw.A, {
                      ref: E,
                      label: eg.intl.string(eg.t.c6qKwr),
                      onClick: C,
                      onPopoutClick: n,
                      popoutOpen: l,
                  });
              },
          })
        : (d && !p) || h
          ? (0, i.jsx)(nw.A, { label: eg.intl.string(eg.t.SMKyih), onClick: C })
          : (0, i.jsx)(nw.A, { label: eg.intl.string(eg.t.c6qKwr), onClick: C });
}
function n$(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, f.Ay)();
    return (0, i.jsx)(e5.l, {
        isTrayButton: !0,
        iconComponent: nd.U,
        label: eg.intl.string(eg.t.ezLpY6),
        onClick: function () {
            ((0, S.X)(n, S.O.MOVE_TO_AUDIENCE), (0, eA.Tf)(t));
        },
    });
}
function nJ(e) {
    let { channelId: t } = e,
        { parentAnalyticsLocation: n } = (0, f.Ay)(),
        l = (0, o.bG)([nz.A], () => nz.A.isMuted()),
        s = (0, nV.bF)(t),
        a = (0, o.bG)([nz.A], () => nz.A.shouldPlay());
    return s
        ? (0, i.jsx)(e5.l, {
              isTrayButton: !0,
              isActive: !l,
              label: l ? eg.intl.string(eg.t.ScHlfl) : eg.intl.string(eg.t.zqxfrf),
              iconComponent: l ? nu.C : nh.T,
              color: l ? void 0 : "green",
              onClick: () => {
                  ((0, S.X)(n, S.O.STAGE_MUSIC, l), (0, nD.k)(!l));
              },
          })
        : (0, i.jsx)(e5.l, {
              isTrayButton: !0,
              isActive: a,
              label: a ? eg.intl.string(eg.t.zqxfrf) : eg.intl.string(eg.t.ScHlfl),
              iconComponent: a ? nh.T : nu.C,
              color: a ? "green" : void 0,
              onClick: () => {
                  ((0, S.X)(n, S.O.STAGE_MUSIC, !a), (0, nD.C)(!a));
              },
          });
}
let n0 = l.memo(function (e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, f.Ay)(),
        { suppress: s, selfMute: a, mute: r } = (0, nO.A)(t),
        c = (0, e0.Ni)(t.id),
        d = (0, o.bG)([tR.default], () => null != tR.default.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: u, enabled: h } = (0, ny.A)(),
        A = (0, nb.A)(t),
        { limit: p, reachedLimit: x } = (0, nv.A)(t),
        g = (0, o.bG)([nG.default], () => nG.default.getCurrentUser()),
        m = (0, o.bG)([tD.Ay], () => (0, nE.A)(tD.Ay)),
        C = (0, o.bG)([G.Ay], () => G.Ay.getVoiceChannelId() === t.id, [t.id]),
        j = (0, o.bG)([E.A], () => E.A.getStreamParticipants(t.id)[0], [t.id]),
        N = (0, e8.qT)(t.id),
        S = p > 0,
        T = (x && !N) || (null != j && j.user.id !== g?.id),
        _ = (0, tx.s)("AudioDeviceMenu", n, { entrypoint: tm.GK.CARET }),
        I = l.useRef(null),
        y = l.useRef(null);
    if (null == g) return null;
    let v = (0, i.jsx)(na.Y, {
        targetElementRef: I,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(nU.A, {
                children: (0, i.jsx)(nm.A, {
                    onClose: t,
                    minimal: !0,
                    onInteraction: (0, tx.s)("VideoDeviceMenu", n, { entrypoint: tm.GK.CARET }),
                }),
            });
        },
        position: "top",
        align: "right",
        spacing: 16,
        animation: na.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(nk.A, {
                ref: I,
                centerButton: !0,
                hasPermission: A,
                enabled: h,
                cameraUnavailable: u,
                onChange: nR.SZ,
                onCameraUnavailable: nP.A,
                channelLimitReached: x,
                channelLimit: p,
                popoutOpen: l,
                onPopoutClick: n,
            });
        },
    });
    return (0, i.jsxs)("div", {
        className: nF.iE,
        children: [
            C && !s
                ? (0, i.jsxs)("div", {
                      className: nF.qi,
                      children: [
                          (0, i.jsx)(na.Y, {
                              targetElementRef: y,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, i.jsx)(nU.A, {
                                      children: (0, i.jsx)(ng.default, {
                                          onClose: t,
                                          renderInputDevices: !0,
                                          renderInputModes: !0,
                                          renderOutputDevices: !0,
                                          renderInputVolume: !0,
                                          renderOutputVolume: !0,
                                          renderDeafen: !0,
                                          minimal: !0,
                                          onInteraction: _,
                                      }),
                                  });
                              },
                              align: "right",
                              position: "top",
                              spacing: 16,
                              animation: na.Y.Animation.FADE,
                              children: (e, t) => {
                                  let { onClick: n } = e,
                                      { isShown: l } = t;
                                  return (0, i.jsx)(nM.A, {
                                      ref: y,
                                      centerButton: !0,
                                      onPopoutClick: n,
                                      selfMute: a,
                                      serverMute: r,
                                      suppress: s,
                                      popoutOpen: l,
                                      onClick: () => (0, nf.A)(r, s, "Stage Channel Controls"),
                                      awaitingRemote: d,
                                  });
                              },
                          }),
                          S && v,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: nF.qi,
                children: [
                    C && !s && S
                        ? (0, i.jsx)(nR.rP, {
                              channel: t,
                              currentUser: g,
                              exitFullScreen: () => null,
                              canGoLive: m,
                              hasPermission: A,
                              disabled: T,
                          })
                        : null,
                    (0, i.jsx)(nJ, { channelId: t.id }),
                    C && (0, i.jsx)(nW, { channel: t }),
                    C && c && s && (0, i.jsx)(nX, { channel: t }),
                    C && !s && (0, i.jsx)(n$, { channel: t }),
                    (0, i.jsx)(nL.A, { channel: t }),
                ],
            }),
            (0, i.jsx)(nZ, { channel: t }),
        ],
    });
});
function n1(e) {
    let { channel: t } = e;
    return (0, i.jsxs)("div", {
        className: nF.iE,
        children: [
            (0, i.jsx)("div", { className: nF.qi, children: (0, i.jsx)(nJ, { channelId: t.id }) }),
            (0, i.jsx)(nZ, { channel: t }),
        ],
    });
}
let n9 = l.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        l = nq(t.id),
        s = (0, e0.Ni)(t.id),
        a = (0, o.bG)([k.A], () => k.A.can(e1.QY, t), [t]),
        r = (0, nS.zU)(),
        c = (0, nK.A)(t.id),
        d = (0, o.bG)([E.A], () => (null != t ? E.A.getSelectedParticipant(t.id) : null)),
        u = !c && null == d;
    return n
        ? (0, i.jsx)(n1, { channel: t })
        : l || s
          ? (0, i.jsxs)("div", {
                className: nF.My,
                children: [
                    (0, i.jsxs)("div", {
                        className: nF.Ac,
                        children: [
                            u ? (0, i.jsx)(nj.A, { channelId: t?.id }) : null,
                            (0, i.jsx)("div", { className: nF.me }),
                            u && a && !r ? (0, i.jsx)(n_, { highlight: !0, channel: t }) : null,
                            (0, i.jsx)("div", { className: nF.me }),
                        ],
                    }),
                    (0, i.jsx)(n0, { channel: t }),
                ],
            })
          : (0, i.jsx)(nQ, { channel: t });
});
var n2 = n(520006);
function n5(e) {
    let {
            stream: t,
            applicationId: n,
            channel: l,
            exitFullScreen: s,
            appContext: a,
            analyticsLocation: r,
            className: c,
            size: d = "sm",
        } = e,
        u = l?.getGuildId(),
        h = l?.id,
        A = (0, o.bG)([M.A], () => (null != u ? M.A.getGuild(u) : null), [u]),
        p = (0, o.bG)([nC.Ay], () => nC.Ay.getActiveEventByChannel(h), [h]);
    if (!(null != A && null != l && k.A.can(ej.xBc.CREATE_INSTANT_INVITE, l))) return null;
    let x = eg.intl.string(eg.t.VINpSK);
    return (
        null != t ? (x = eg.intl.string(eg.t["6VQaqd"])) : null != n && (x = eg.intl.string(eg.t["OzOM/q"])),
        (0, i.jsx)("div", {
            className: c,
            children: (0, i.jsx)(eU.$, {
                size: d,
                variant: "secondary",
                text: x,
                onClick: () => {
                    (Y()(null != A, "guild cannot be null"),
                        Y()(null != l, "channel cannot be null"),
                        (0, n2.X)({
                            guild: A,
                            channel: l,
                            streamUserId: t?.ownerId,
                            applicationId: n,
                            appContext: a,
                            exitFullScreen: s,
                            analyticsLocation: r,
                            guildScheduledEvent: p,
                            source: ej.PE1.STAGE_CHANNEL,
                        }));
                },
            }),
        })
    );
}
var n4 = n(104171),
    n6 = n(81466),
    n3 = n(823508);
function n7(e) {
    let { className: t, guildId: l } = e,
        s = (0, n3.A)();
    return (0, i.jsx)(nT.A, {
        className: t,
        icon: (0, i.jsx)(n6.CalendarIcon, { size: "custom", color: "currentColor", height: 20, width: 20 }),
        color: eF.A.unsafe_rawColors.BRAND_500.css,
        title: eg.intl.string(eg.t["60lJ0C"]),
        description: eg.intl.string(eg.t["EYn7/y"]),
        onClick: function () {
            (0, d.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("489565"),
                    n.e("476227"),
                    n.e("998835"),
                    n.e("468555"),
                    n.e("862179"),
                    n.e("357625"),
                    n.e("936875"),
                    n.e("370017"),
                    n.e("730931"),
                    n.e("711162"),
                    n.e("948054"),
                    n.e("159957"),
                    n.e("728136"),
                    n.e("216084"),
                    n.e("409391"),
                    n.e("810262"),
                    n.e("756684"),
                    n.e("970644"),
                    n.e("752695"),
                    n.e("449347"),
                    n.e("853934"),
                    n.e("468248"),
                    n.e("469647"),
                    n.e("670089"),
                    n.e("870160"),
                    n.e("454450"),
                    n.e("560423"),
                ]).then(n.bind(n, 729398));
                return (t) => (0, i.jsx)(e, { ...t, guildId: l });
            }, s);
        },
    });
}
var n8 = n(269341);
function ie(e) {
    let { onClick: t, className: n } = e,
        l = eY.MicrophoneIcon;
    return (0, i.jsx)(nT.A, {
        iconContainerClassName: a()({ [n8.q8]: !1 }),
        icon: (0, i.jsx)(l, { size: "custom", color: "currentColor", className: n8.Pz, height: 20, width: 20 }),
        color: eF.A.unsafe_rawColors.PRIMARY_700.css,
        title: eg.intl.string(eg.t["jMLfp/"]),
        description: eg.intl.string(eg.t["Vd/rEX"]),
        onClick: t,
        className: n,
    });
}
function it(e) {
    let { channel: t } = e,
        { participants: n, usersInSummary: l } = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                [n] = (0, o.bG)(
                    [tr.A],
                    () => {
                        let n = tr.A.getMutableParticipants(e).filter((e) => e.type === q.wY.VOICE),
                            i = [];
                        for (let e of n) {
                            if (i.length >= t) break;
                            null == i.find((t) => t.id === e.user.id) && i.push(e.user);
                        }
                        return [{ participants: n, usersInSummary: i }, tr.A.getParticipantsVersion(e)];
                    },
                    [e, t],
                    tc.D,
                );
            return n;
        })(t.id);
    return (0, i.jsxs)("div", {
        className: n8.P1,
        children: [
            (0, i.jsx)(n4.Ay, { className: n8.Ip, guildId: t.guild_id, users: l, size: n4.DN.SIZE_16 }),
            (0, i.jsx)(J.E, {
                variant: "text-sm/normal",
                color: "text-default",
                children: (function (e) {
                    if (0 === e.length) return "";
                    if (1 === e.length) return eg.intl.formatToPlainString(eg.t["5ULgaQ"], { first: e[0].userNick });
                    if (2 === e.length)
                        return eg.intl.formatToPlainString(eg.t.BHK0Op, {
                            first: e[0].userNick,
                            second: e[1].userNick,
                        });
                    let t = e.length - 2;
                    return eg.intl.formatToPlainString(eg.t.T3MT4n, {
                        first: e[0].userNick,
                        second: e[1].userNick,
                        numOthers: t,
                    });
                })(n),
            }),
        ],
    });
}
function ii(e) {
    let { channel: t, onContinueClick: n } = e,
        s = (0, o.bG)([k.A], () => k.A.can(e1.QY, t), [t]),
        r = t.guild_id,
        { canCreateGuildEvent: c } = (0, nI.nr)(t),
        d = (0, nK.A)(t.id),
        u = l.useRef(null);
    return (0, i.jsxs)("div", {
        className: n8.kL,
        ref: u,
        children: [
            (0, i.jsx)(ez.A, { eventTargetRef: u }),
            (0, i.jsxs)("div", {
                className: n8.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: n8.N1,
                        children: [
                            (0, i.jsx)(eP.D, {
                                className: n8.__invalid_title,
                                variant: "heading-xxl/normal",
                                children: eg.intl.string(eg.t.QGnDLs),
                            }),
                            (0, i.jsx)(J.E, {
                                tag: "div",
                                className: n8.VA,
                                variant: "heading-lg/normal",
                                children: eg.intl.string(eg.t.djfK36),
                            }),
                        ],
                    }),
                    d ? null : (0, i.jsx)(nj.A, { channelId: t.id, showDismiss: !1 }),
                    s ? (0, i.jsx)(n_, { className: n8.fN, channel: t }) : null,
                    c ? (0, i.jsx)(n7, { className: n8.fN, guildId: r }) : null,
                    s ? (0, i.jsx)(ie, { className: a()({ [n8.fN]: !0 }), onClick: n }) : null,
                    (0, i.jsx)(it, { channel: t }),
                ],
            }),
        ],
    });
}
var il = n(95561),
    is = n(423562),
    ia = n(625494),
    ir = n(475815),
    io = n(44540);
let ic = "HasBeenInStageChannel";
function id(e) {
    ((0, S.X)(m.A.VOICE_CONTROL_TRAY, S.O.STAY_ON_TOP, e), _.setAlwaysOnTop(ej.MLl.CHANNEL_CALL_POPOUT, e));
}
function iu(e) {
    let {
            channel: t,
            appContext: n,
            popoutOpen: s,
            popoutWindow: a,
            popoutWindowAlwaysOnTop: r,
            selectedParticipant: c,
        } = e,
        { parentAnalyticsLocation: d } = (0, f.Ay)(),
        u = t.getGuildId(),
        p = (0, o.bG)([G.Ay], () => G.Ay.getMostRecentSelectedTextChannelId(u), [u]),
        x = U.default.getId(),
        g =
            !(0, o.bG)([E.A], () => E.A.isFullscreenInContext(n)) &&
            (!D.isPlatformEmbedded || V.Ay.supportsFeature(ej.BYE.POPOUT_WINDOWS)),
        m = null != c && c.type !== tm.lp.ACTIVITY && c.user.id !== x,
        j = l.useMemo(() => a?.window ?? window, [a]),
        N = (function (e) {
            let { channel: t, appContext: n, popoutOpen: s, popoutWindow: a, currentWindow: r } = e,
                { parentAnalyticsLocation: c } = (0, f.Ay)(),
                d = n === ej.BRT.POPOUT,
                u = l.useRef(null),
                { currentLayout: p, mode: x } = (0, o.cf)(
                    [E.A],
                    () => {
                        let e = E.A.getMode(t.id),
                            i = n === ej.BRT.POPOUT;
                        i && (e = ej._Of.VIDEO);
                        let l = e === ej._Of.VIDEO ? E.A.getLayout(t.id, n) : ej.DUB.MINIMUM;
                        return (i && l !== ej.DUB.FULL_SCREEN && (l = ej.DUB.NO_CHAT), { currentLayout: l, mode: e });
                    },
                    [t, n],
                ),
                g = (0, o.bG)([G.Ay], () => G.Ay.getVoiceChannelId() === t.id, [t.id]);
            l.useEffect(() => {
                u.current = x;
            });
            let m = l.useRef(p),
                { currentDocument: C, rootNode: j } = l.useMemo(() => {
                    let e = null != a && d ? a.document : document,
                        t = r.document.getElementById("app-mount");
                    return { currentWindow: r, currentDocument: e, rootNode: t };
                }, [a, d, r]),
                N = s && !d,
                T = x === ej._Of.VIDEO && g && !N,
                I = l.useCallback(
                    (e, i) => {
                        i !== e &&
                            (A.A.updateLayout(t.id, i, n),
                            i === ej.DUB.FULL_SCREEN && t.isPrivate() && ia._.dispatch(ej.jej.TEXTAREA_BLUR));
                    },
                    [n, t],
                ),
                y = l.useCallback(
                    (e) => {
                        null == j ||
                            (e === ej.DUB.FULL_SCREEN &&
                                (I(e, m.current),
                                (0, ir.sP)((e) => {
                                    m.current = e;
                                }, C)));
                    },
                    [C, I, j],
                ),
                v = l.useCallback(
                    (e) => () => {
                        null != j &&
                            ((0, S.X)(c, S.O.FULL_SCREEN, e !== ej.DUB.FULL_SCREEN),
                            e !== ej.DUB.FULL_SCREEN
                                ? ((m.current = e), I(e, ej.DUB.FULL_SCREEN), (0, ir.tl)(j))
                                : y(e));
                    },
                    [I, y, j, c],
                );
            l.useEffect(() => {
                function e() {
                    null != j && ((0, ir._U)(j, C) || p !== ej.DUB.FULL_SCREEN || v(p)());
                }
                return (
                    C.addEventListener(ir.Wb, e),
                    () => {
                        C.removeEventListener(ir.Wb, e);
                    }
                );
            }, [C, p, v, j]);
            let b = { channel: t, maybeLeaveFullScreen: y },
                O = l.useRef(b);
            return (l.useEffect(() => {
                O.current = b;
            }),
            l.useEffect(() => {
                let { channel: e, maybeLeaveFullScreen: t } = O.current;
                return (
                    eJ.default.track(ej.HAw.VIDEO_LAYOUT_TOGGLED, {
                        video_layout: d ? "popout" : p,
                        ...(0, il.QS)(e.id),
                    }),
                    () => {
                        (d && (0, D.isMac)()) || t(p);
                    }
                );
            }, [p, d]),
            l.useEffect(() => {
                null != j && u.current === ej._Of.VIDEO && x === ej._Of.VOICE && (0, ir.sP)(j, C);
            }, [C, x, u, j]),
            l.useEffect(() => {
                !g && d && h.h.wait(() => _.close(ej.MLl.CHANNEL_CALL_POPOUT));
            }, [g, d]),
            T)
                ? (0, i.jsx)(is.A, { themeable: !1, node: j, guestWindow: a, onClick: v(p) })
                : null;
        })({ channel: t, appContext: n, popoutOpen: s, popoutWindow: a, currentWindow: j }),
        T = n === ej.BRT.POPOUT && D.isPlatformEmbedded && V.Ay.supportsFeature(ej.BYE.POPOUT_WINDOWS);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            m
                ? (0, i.jsx)(P.A, {
                      context: (0, C.A)(c.type),
                      userId: c.user.id,
                      currentWindow: j,
                      sliderClassName: io.MQ,
                      location: d,
                  })
                : null,
            T ? (0, i.jsx)(L.A, { popoutWindowAlwaysOnTop: r, onToggleStayOnTop: id }) : null,
            g
                ? (0, i.jsx)(R.A, {
                      popoutOpen: s,
                      onOpenPopout: () => {
                          ((0, S.X)(d, S.O.POPOUT, !0),
                              (() => {
                                  let e = t.getGuildId();
                                  (null != e && null != p && (0, y.uh)(e, p), _.openChannelCallPopout(t));
                              })());
                      },
                      onClosePopout: () => {
                          ((0, S.X)(d, S.O.POPOUT, !1), h.h.wait(() => _.close(ej.MLl.CHANNEL_CALL_POPOUT)));
                      },
                  })
                : null,
            N,
        ],
    });
}
function ih(e) {
    let { channel: t } = e,
        n = (0, T.Us)(),
        l = (0, o.bG)([k.A], () => k.A.can(ej.xBc.CREATE_INSTANT_INVITE, t)),
        s = (0, o.bG)([M.A], () => M.A.getGuild(t.guild_id)),
        a = (0, o.bG)([K.A], () => K.A.getStageInstanceByChannel(t.id)),
        r = l || a?.invite_code != null;
    return null != s && r
        ? (0, i.jsx)(n5, { size: "md", channel: t, appContext: n, analyticsLocation: ej.liQ.GUILD_CHANNEL })
        : null;
}
function iA(e) {
    let t,
        {
            channel: n,
            toggleRequestToSpeakSidebar: s,
            showRequestToSpeakSidebar: c,
            popoutWindow: d,
            popoutWindowAlwaysOnTop: u,
            popoutOpen: h,
            popoutType: x,
            chatOpen: g,
            idleProps: C,
        } = e,
        { analyticsLocations: N } = (0, f.Ay)(m.A.VOICE_CONTROL_TRAY),
        S = (0, T.Us)(),
        _ = (0, o.bG)([G.Ay], () => G.Ay.getVoiceChannelId() === n.id, [n.id]),
        I = (0, o.bG)([k.A], () => k.A.can(ej.xBc.CONNECT, n)),
        y = (0, B.E5)(n.id, q.ip.SPEAKER),
        v = (0, o.bG)([E.A], () => E.A.getSelectedParticipant(n.id)),
        R = h && S !== ej.BRT.POPOUT,
        [L, P] = l.useState(0),
        U = l.useMemo(
            () =>
                (0, r.debounce)(
                    (e) => {
                        let { scrollTop: t } = e.target;
                        P(t);
                    },
                    1e3,
                    { leading: !0 },
                ),
            [],
        ),
        { isOnStartStageScreen: M } = (0, H.Ay)();
    (0, H.vI)(n);
    let D = (0, o.bG)([w.A], () => w.A.getToastsEnabled(n.id)),
        V = l.useCallback((e) => {
            (A.A.updateChatOpen(e.channel_id, !0),
                p.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
        }, []),
        K = te(n) ? (null != v ? "84px" : "124px") : null != v ? "0px" : "48px";
    return (
        M && (K = "0px"),
        (t = M
            ? (0, i.jsx)(ii, {
                  channel: n,
                  onContinueClick: () => {
                      ((0, H.ek)(!1), _ || (0, z.cy)(n));
                  },
              })
            : _
              ? (0, i.jsx)(nn, { channel: n, onScroll: U, popoutType: x })
              : (0, i.jsx)(eH, { participants: y, channel: n, hasConnectPermission: I })),
        (0, i.jsx)(O.A, {
            style: { height: `calc(100% - ${K})`, paddingTop: K },
            disableGradients: !_ || (0 === L && O.x.TOP),
            renderBottomCenter: () =>
                _
                    ? (0, i.jsx)(f.f5, { value: N, children: (0, i.jsx)(n9, { channel: n, isOnStartStageScreen: M }) })
                    : null,
            renderBottomRight: () =>
                _
                    ? (0, i.jsx)(f.f5, {
                          value: N,
                          children: (0, i.jsx)(iu, {
                              channel: n,
                              appContext: S,
                              popoutOpen: h,
                              popoutWindow: d,
                              popoutWindowAlwaysOnTop: u,
                              selectedParticipant: v,
                          }),
                      })
                    : null,
            renderHeader: () =>
                (0, i.jsx)(tl, { toggleRequestToSpeakSidebar: s, showRequestToSpeakSidebar: c, channel: n }),
            renderChatToasts: function () {
                return !D || g || R
                    ? null
                    : (0, i.jsx)(j.Ay, {
                          children: (0, i.jsx)(b.A, {
                              className: a()(io.T6, { [io.c3]: c }),
                              channelId: n.id,
                              onToastClick: V,
                          }),
                      });
            },
            screenMessage: R ? { mainText: eg.intl.string(eg.t.J5bXZU) } : null,
            ...C,
            children: !R && t,
        })
    );
}
function ip(e) {
    let { channel: t, popoutType: s } = e,
        [r, h] = l.useState(!1),
        A = l.useCallback(() => {
            h(!r);
        }, [r, h]),
        { popoutWindow: p, popoutWindowAlwaysOnTop: C } = (0, o.cf)([I.A], () => ({
            popoutWindow: I.A.getWindow(ej.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: I.A.getIsAlwaysOnTop(ej.MLl.CHANNEL_CALL_POPOUT),
        })),
        S = null != p && !p.closed,
        { analyticsLocations: _ } = (0, f.Ay)(m.A.STAGE_CHANNEL_CALL),
        y = (0, T.Us)(),
        b = (0, o.bG)([E.A], () => E.A.getChatOpen(t.id), [t.id]),
        O = (0, o.bG)([M.A], () => M.A.getGuild(t.guild_id), [t.guild_id]);
    (0, g.Ay)(() => {
        null == c.w.get(ic) &&
            ((0, d.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("97186"), n.e("756016")]).then(n.bind(n, 456947));
                return (t) => (0, i.jsx)(e, { ...t });
            }),
            c.w.set(ic, Date.now()));
    });
    let { width: R = 0, ref: L } = (0, x.Ay)(),
        P = !S || y === ej.BRT.POPOUT;
    return (0, i.jsx)(f.f5, {
        value: _,
        children: (0, i.jsxs)(j.qh, {
            children: [
                (0, i.jsxs)("div", {
                    className: io.kL,
                    ref: L,
                    children: [
                        (0, i.jsx)(u.N, {
                            theme: ej.NJ8.DARK,
                            children: (e) =>
                                (0, i.jsx)("div", {
                                    className: a()(io.ik, e, { [io.pR]: r, [io.gy]: r || b }),
                                    children: (0, i.jsx)(v.Ay, {
                                        timeout: 2e3,
                                        children: (e) =>
                                            (0, i.jsx)(iA, {
                                                channel: t,
                                                toggleRequestToSpeakSidebar: A,
                                                showRequestToSpeakSidebar: r,
                                                popoutWindow: p,
                                                popoutWindowAlwaysOnTop: C,
                                                popoutOpen: S,
                                                popoutType: s,
                                                chatOpen: b,
                                                idleProps: e,
                                            }),
                                    }),
                                }),
                        }),
                        r ? (0, i.jsx)(eL, { channel: t, toggleRequestToSpeakSidebar: A, chatOpen: b }) : null,
                        (0, i.jsx)("div", {
                            className: io.B2,
                            children: b && P && (0, i.jsx)(N.A, { channel: t, guild: O, maxWidth: R - 550 }),
                        }),
                    ],
                }),
                (0, i.jsx)(j.WD, {}),
            ],
        }),
    });
}
