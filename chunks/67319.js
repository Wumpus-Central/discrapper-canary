n.r(t), n.d(t, { StageChannelInviteButton: () => iu, default: () => iA });
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
    A = n(765671),
    p = n(964486),
    x = n(793574),
    g = n(688810),
    m = n(198052),
    f = n(520698),
    E = n(43189),
    C = n(518530),
    j = n(384059),
    N = n(267102),
    S = n(574172),
    T = n(869146),
    _ = n(976860),
    I = n(461782),
    y = n(20465),
    v = n(156652),
    b = n(128286),
    O = n(619344),
    R = n(821747),
    L = n(280450),
    P = n(249288),
    U = n(71393),
    w = n(576705),
    M = n(309010),
    k = n(723702),
    G = n(19575),
    D = n(790535),
    V = n(113783),
    z = n(518769),
    B = n(446600),
    q = n(571909),
    K = n(284009),
    H = n.n(K),
    F = n(789645),
    Y = n(297152),
    W = n(939249),
    Q = n(778712),
    X = n(463930),
    Z = n(834730),
    $ = n(866665),
    J = n(408278),
    ee = n(117723),
    et = n(243721),
    en = n(475825),
    ei = n(442433),
    el = n(730134),
    es = n(80682),
    ea = n(58736),
    er = n(967144),
    eo = n(342296),
    ec = n(696451),
    ed = n(290863),
    eu = n(849736),
    eh = n(927813),
    eA = n(427262),
    ep = n(375708);
let ex = +eh.A.Millis.DAY;
var eg = n(105530),
    em = n(734057),
    ef = n(488926),
    eE = n(652215),
    eC = n(451394),
    ej = n(710358),
    eN = n(151069);
function eS(e) {
    let { className: t } = e;
    return (0, i.jsx)(ej.A, {
        className: t,
        children: (0, i.jsx)("div", {
            className: eN.T,
            children: (0, i.jsx)(eC.q, {
                size: "custom",
                color: "currentColor",
                className: eN.C,
                width: 32,
                height: 32,
            }),
        }),
    });
}
var eT = n(818348),
    e_ = n(888299);
let eI = l.memo(function (e) {
        let { toggleRequestToSpeakSidebar: t, chatOpen: n } = e,
            l = (0, i.jsx)(ea.Ay.Icon, { icon: F.P, tooltip: ep.intl.string(ep.t.cpT0Cq), onClick: t });
        return (0, i.jsxs)(ea.Ay, {
            toolbar: l,
            className: a()(e_.N1, { [e_.X_]: n }),
            children: [
                (0, i.jsx)(ea.Ay.Icon, { icon: Y.E, disabled: !0, "aria-label": ep.intl.string(ep.t.TYZgzW) }),
                (0, i.jsx)(ea.Ay.Title, { children: ep.intl.string(ep.t.TYZgzW) }),
            ],
        });
    }),
    ey = l.memo(function (e) {
        let { channel: t, participant: s, tempDisableOnInit: a = !1 } = e,
            r = l.useRef(null),
            [c, d] = l.useState(a);
        (0, p.Ay)(() => {
            if (!c) return;
            let e = setTimeout(() => d(!1), 1e3);
            return () => clearTimeout(e);
        });
        let u = t.getGuildId();
        H()(null != u, "Channel cannot be guildless");
        let { isMobile: h, status: A } = (0, o.cf)([ed.A], () => ({
                isMobile: ed.A.isMobileOnline(s.user.id),
                status: ed.A.getStatus(s.user.id, u),
            })),
            x = (0, o.bG)([ec.Ay], () => ec.Ay.getMember(u, s.user.id)),
            g = (0, er.gn)(t.guild_id, x?.userId, x?.colorStrings ?? null),
            m = l.useMemo(() => ({ [u]: [s.user.id] }), [u, s.user.id]);
        (0, es.Eq)(m, "RequestToSpeakSidebar");
        let f = s.rtsState === eg.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        function E(e) {
            null != u &&
                (0, ei.L3)(e, async () => {
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
            className: e_.fn,
            children: [
                (0, i.jsx)(eo.A, {
                    targetElementRef: r,
                    user: s.user,
                    guildId: t.guild_id,
                    channelId: t.id,
                    position: "left",
                    spacing: 16,
                    clickTrap: !0,
                    children: (e) =>
                        (0, i.jsxs)(W.D, {
                            innerRef: r,
                            className: e_.$u,
                            onContextMenu: E,
                            ...e,
                            children: [
                                (0, i.jsx)(el.A, {
                                    size: Q._3.SIZE_40,
                                    className: e_.RB,
                                    user: s.user,
                                    isMobile: h,
                                    status: A,
                                }),
                                (0, i.jsxs)("div", {
                                    className: e_.kH,
                                    children: [
                                        (0, i.jsx)(X.g, {
                                            name: s.userNick,
                                            colorString: x?.colorString ?? null,
                                            colorStrings: g,
                                            className: e_.F8,
                                        }),
                                        (0, i.jsx)(Z.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: (function (e) {
                                                if ((0, eA.mv)(e.user)) return ep.intl.string(ep.t.VaCdhQ);
                                                let t = e.member?.joinedAt;
                                                return null == t
                                                    ? ep.intl.string(ep.t.CQmzib)
                                                    : null != e.member && e.member.roles.length > 0
                                                      ? (e.role?.name ?? ep.intl.string(ep.t["97/NdO"]))
                                                      : new Date().getTime() - Date.parse(t) < ex
                                                        ? ep.intl.string(ep.t.IKE48n)
                                                        : ep.intl.string(ep.t.u0gUWt);
                                            })(s),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                }),
                (0, i.jsxs)("div", {
                    className: e_.UD,
                    children: [
                        (0, i.jsx)($.m, {
                            text: f ? ep.intl.string(ep.t.h9rsTd) : ep.intl.string(ep.t.f0T7hI),
                            asContainer: !0,
                            children: (0, i.jsx)(J.K, {
                                onClick: function () {
                                    (0, eu.lL)(t, s.user.id, !1);
                                },
                                disabled: f || c,
                                icon: ee.L,
                                variant: "secondary",
                                "aria-label": f ? ep.intl.string(ep.t.h9rsTd) : ep.intl.string(ep.t.f0T7hI),
                            }),
                        }),
                        (0, i.jsx)($.m, {
                            text: ep.intl.string(ep.t.moABMy),
                            asContainer: !0,
                            children: (0, i.jsx)(J.K, {
                                "aria-label": ep.intl.string(ep.t.moABMy),
                                onClick: function () {
                                    (0, eu.lL)(t, s.user.id, !0);
                                },
                                icon: F.P,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    ev = l.memo(function (e) {
        let { channel: t } = e,
            [n, s] = (function (e) {
                let t = (0, o.bG)([em.A], () => em.A.getChannel(e), [e]),
                    n = ef.MJ(eE.xBc.REQUEST_TO_SPEAK, t),
                    [i, s] = l.useState(n);
                return (
                    n !== i && s(n),
                    [
                        i,
                        function (e) {
                            null != t && (s(e), (0, eu.b6)(t, eE.xBc.REQUEST_TO_SPEAK, e));
                        },
                    ]
                );
            })(t.id);
        return (0, i.jsx)(et.d, { label: ep.intl.string(ep.t.GYCh0W), checked: n, onChange: s });
    }),
    eb = l.memo(function () {
        return (0, i.jsxs)("div", {
            className: e_.y7,
            children: [
                (0, i.jsx)(eS, {}),
                (0, i.jsx)(Z.E, {
                    className: e_.vo,
                    variant: "text-lg/semibold",
                    color: "text-strong",
                    children: ep.intl.string(ep.t["7R24mX"]),
                }),
                (0, i.jsx)(Z.E, {
                    className: e_.XG,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ep.intl.string(ep.t.Rpr2s0),
                }),
            ],
        });
    });
function eO(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: l } = e,
        s = (0, V.J2)(t.id),
        r = [
            +!!(0, o.bG)([w.A], () => w.A.can(eT.xB.MANAGE_CHANNELS, t) || w.A.can(eT.xB.MANAGE_ROLES, t)),
            Math.max(1, s.length),
        ];
    return (0, i.jsxs)("div", {
        className: a()(e_.kL, { [e_.X_]: l }),
        children: [
            (0, i.jsx)(eI, { toggleRequestToSpeakSidebar: n, chatOpen: l }),
            (0, i.jsx)(en.OZ, {
                className: e_.hQ,
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
                            return (0, i.jsx)(ev, { channel: t }, "rts-toggle");
                        case 1: {
                            if (0 === s.length) return (0, i.jsx)(eb, {}, "participants-empty");
                            let e = s[l];
                            return (0, i.jsx)(ey, { channel: t, participant: e, tempDisableOnInit: !0 }, e.id);
                        }
                    }
                    return null;
                },
                renderSection: function (e) {
                    let { section: t } = e;
                    return 1 === t
                        ? (0, i.jsx)(
                              Z.E,
                              {
                                  className: e_.Vu,
                                  variant: "text-xs/bold",
                                  color: "text-default",
                                  children:
                                      s.length > 0
                                          ? ep.intl.formatToPlainString(ep.t["5z7q5a"], { numHands: s.length })
                                          : ep.intl.string(ep.t.TYZgzW),
                              },
                              "participants-section",
                          )
                        : null;
                },
            }),
        ],
    });
}
var eR = n(297264),
    eL = n(821609),
    eP = n(730852),
    eU = n(164617),
    ew = n(47167),
    eM = n(202384),
    ek = n(51758),
    eG = n(175203),
    eD = n(426660),
    eV = n(403362),
    ez = n(110618),
    eB = n(853325);
let eq = function (e) {
    let { participants: t, channel: n, hasConnectPermission: s } = e,
        a = (0, ek.H)(n.guild_id),
        r = l.useCallback(() => {
            a ? (0, eM.Ze)(n.guild_id, () => eP.default.selectVoiceChannel(n.id)) : eP.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, a]),
        c = t.filter((e) => e.type === z.wY.VOICE),
        d = (0, ew.Ay)(n),
        u = 4 === c.length ? 2 : 3,
        h = (0, o.yK)([m.A], () => c.map((e) => m.A.getParticipant(n.id, e.id)).filter(eV.Vq), [n.id, c]);
    return (0, i.jsxs)("div", {
        className: eB.kL,
        children: [
            (0, i.jsx)(eD.A, {}),
            (0, i.jsx)("div", {
                className: eB.os,
                style: { maxWidth: 168 * u },
                children: h
                    .slice(0, 5)
                    .map((e) =>
                        (0, i.jsx)(
                            eG.Ay,
                            {
                                participant: e,
                                channel: n,
                                className: eB.Vs,
                                inCall: !0,
                                noVideoRender: !0,
                                popoutType: eU.N.NO_POPOUT,
                                width: 48,
                            },
                            e.id,
                        ),
                    ),
            }),
            (0, i.jsx)(eR.D, { className: eB.HA, variant: "heading-xxl/normal", children: d }),
            (0, i.jsx)("div", {
                className: eB.Nu,
                children: (0, i.jsx)(Z.E, {
                    tag: "div",
                    color: "text-default",
                    variant: "heading-lg/normal",
                    children: (0, ez.DO)(n, c),
                }),
            }),
            (0, i.jsxs)("div", {
                className: eB.UD,
                children: [
                    (0, i.jsx)("div", {
                        className: eB.PD,
                        children: (0, i.jsx)(eL.$, {
                            variant: "overlay-primary",
                            text: s ? ep.intl.string(ep.t["7vb2cc"]) : ep.intl.string(ep.t.TVBCKZ),
                            onClick: r,
                            disabled: !s,
                        }),
                    }),
                    (0, i.jsx)(iu, { channel: n }),
                ],
            }),
        ],
    });
};
var eK = n(661531),
    eH = n(831544),
    eF = n(177953),
    eY = n(367513),
    eW = n(689874),
    eQ = n(878678),
    eX = n(742589),
    eZ = n(977851),
    e$ = n(174459),
    eJ = n(776781),
    e0 = n(233993),
    e1 = n(132500),
    e9 = n(280056),
    e2 = n(204651),
    e5 = n(116108);
function e3(e) {
    let { width: t = 24, height: n = 24, isBadged: s = !1 } = e,
        [a] = l.useState(() => (0, e1.A)());
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
            (0, i.jsx)("g", { mask: `url(#${a})`, children: (0, i.jsx)(e9.c, {}) }),
        ],
    });
}
function e4(e) {
    let { className: t, numRequestToSpeak: n } = e,
        l = n > 0;
    return (0, i.jsxs)("div", {
        className: a()(e5.v, t),
        children: [
            (0, i.jsx)(e3, { isBadged: l }),
            l ? (0, i.jsx)(Z.E, { className: e5.F, variant: "text-xs/semibold", children: n > 99 ? "99+" : n }) : null,
        ],
    });
}
function e6(e) {
    let {
            toggleRequestToSpeakSidebar: t,
            showRequestToSpeakSidebar: n,
            className: s,
            numRequestToSpeak: a,
            onClick: r,
            ...o
        } = e,
        c = l.useCallback(() => {
            r?.(), t();
        }, [r, t]);
    return (0, i.jsx)(e2.A, {
        onClick: c,
        label: n ? ep.intl.string(ep.t.gKGz7A) : ep.intl.string(ep.t.ImQ4dW),
        className: s,
        iconComponent: () => (0, i.jsx)(e4, { numRequestToSpeak: a, className: s }),
        ...o,
    });
}
var e7 = n(96566);
function e8(e) {
    let t = (0, o.bG)([m.A], () => m.A.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
        n = (0, V.uy)(e.id),
        i = (0, V.zy)(e.id, z.ip.AUDIENCE),
        l = (0, e7.qT)(e.id),
        s = (0, o.bG)([U.A], () => U.A.getGuild(e.guild_id), [e.guild_id]),
        a = (0, o.bG)([w.A], () => w.A.can(e0.QY, e), [e]),
        r = s?.maxStageVideoChannelUsers ?? 0,
        c = !(null != s && s.features.has(eE.GuildFeatures.COMMUNITY)) && r > eE.uaN;
    return l && !t && a && !c && n + i >= r;
}
var te = n(202541),
    tt = n(903489);
function tn(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: l } = e,
        { analyticsLocations: s, newestAnalyticsLocation: r } = (0, g.Ay)(x.A.VOICE_CHANNEL_HEADER),
        c = (0, o.bG)([m.A], () => m.A.getChatOpen(t.id), [t.id]),
        d = (0, eJ.Ni)(t.id),
        u = (0, V.zy)(t.id, z.ip.REQUESTED_TO_SPEAK_ONLY);
    return (0, i.jsxs)(g.f5, {
        value: s,
        children: [
            (0, i.jsx)(eW.A, { channelId: t.id }, "clips-enabled-indicator"),
            !l && d
                ? (0, i.jsx)("div", {
                      className: a()(tt.x6, { [tt.vc]: c }),
                      children: (0, i.jsx)(e6, {
                          toggleRequestToSpeakSidebar: function () {
                              c && eY.A.updateChatOpen(t.id, !1), (0, j.X)(r, j.O.OPEN_REQUEST_TO_SPEAK_SIDEBAR), n();
                          },
                          showRequestToSpeakSidebar: l,
                          numRequestToSpeak: u,
                      }),
                  })
                : null,
            !c &&
                (0, i.jsx)("div", {
                    className: a()(tt.x6, { [tt.vc]: l }),
                    children: (0, i.jsx)(eZ.V, {
                        channelId: t.id,
                        showRequestToSpeakSidebar: l,
                        toggleRequestToSpeakSidebar: n,
                        iconClassName: tt.iA,
                    }),
                }),
        ],
    });
}
function ti(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: s } = e,
        r = (0, ew.Ay)(t),
        c = (0, o.bG)([B.A], () => B.A.getStageInstanceByChannel(t.id)),
        d = (0, V.uy)(t.id),
        h = (0, V.zy)(t.id, z.ip.AUDIENCE),
        A = (0, o.bG)([U.A], () => U.A.getGuild(t.guild_id), [t.guild_id]),
        p = A?.maxStageVideoChannelUsers ?? 0,
        x =
            null != A && A.features.has(eE.GuildFeatures.COMMUNITY)
                ? p < eE.p2C
                : A?.premiumTier !== eE.TVA.TIER_3 && p <= eE.nyz,
        g = e8(t),
        m = (0, o.bG)([w.A], () => w.A.can(e0.QY, t));
    function f() {
        eY.A.updateStageVideoLimitBoostUpsellDismissed(t.id, !0),
            e$.default.track(eE.HAw.BOOSTING_UPSELL_CLICKED, {
                guild_id: t.guild_id,
                type: te.e.VIDEO_STAGE_LIMIT,
                is_moderator: m,
                action: te.pd.DISMISS,
            });
    }
    let E = { canModerate: m, audienceCount: h, channel: t, speakerCount: d },
        C = l.useRef(E);
    l.useEffect(() => {
        C.current = E;
    }),
        l.useEffect(() => {
            let { canModerate: e, audienceCount: t, channel: n, speakerCount: i } = C.current;
            g &&
                e$.default.track(eE.HAw.BOOSTING_UPSELL_VIEWED, {
                    guild_id: n.guild_id,
                    type: te.e.VIDEO_STAGE_LIMIT,
                    is_moderator: e,
                    listener_count: i + t,
                });
        }, [g]);
    let j = (0, i.jsx)(u.N, {
        theme: eE.NJ8.DARK,
        children: (e) =>
            (0, i.jsxs)(ea.Ay, {
                toolbar: (0, i.jsx)(tn, { toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: s, channel: t }),
                onDoubleClick: eX.I,
                transparent: !0,
                className: a()(e, tt.lF),
                children: [
                    (0, i.jsx)(ea.Ay.Icon, {
                        icon: eC.q,
                        disabled: !0,
                        "aria-label": ep.intl.string(ep.t.EErMzA),
                        className: tt.Kk,
                        color: null != c ? eK.A.colors.TEXT_MUTED.css : void 0,
                    }),
                    (0, i.jsx)(ea.Ay.Title, { className: tt.HA, wrapperClassName: tt.KD, children: c?.topic ?? r }),
                    (0, i.jsx)(ea.Ay.Divider, { className: tt.yF }),
                    (0, i.jsxs)(ea.Ay.Title, {
                        children: [
                            (0, i.jsx)(eH.MicrophoneIcon, { size: "xs", color: eK.A.colors.TEXT_MUTED.css }),
                            (0, i.jsx)(Z.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: tt.N_,
                                children: ep.intl.format(ep.t.chmM9N, { count: d }),
                            }),
                            (0, i.jsx)(eF.n, { size: "xs", className: tt.Kk, color: "currentColor" }),
                            (0, i.jsx)(Z.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: tt.N_,
                                children: ep.intl.format(ep.t["+v2pN2"], { count: h }),
                            }),
                        ],
                    }),
                ],
            }),
    });
    return g
        ? (0, i.jsxs)("div", {
              children: [
                  j,
                  (0, i.jsxs)("div", {
                      className: tt.bp,
                      children: [
                          (0, i.jsx)(tl, {}),
                          (0, i.jsxs)("div", {
                              className: tt.Qq,
                              children: [
                                  (0, i.jsx)(Z.E, {
                                      variant: "text-md/medium",
                                      color: "text-strong",
                                      children: x ? ep.intl.string(ep.t["T+zF9M"]) : ep.intl.string(ep.t["IZ+SVv"]),
                                  }),
                                  (0, i.jsx)(Z.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: x ? ep.intl.string(ep.t.Izgpmv) : ep.intl.string(ep.t["7FHbPG"]),
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: tt.Uo,
                              children: x
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(eL.$, {
                                                onClick: f,
                                                size: "sm",
                                                variant: "secondary",
                                                text: ep.intl.string(ep.t.L5eIZ2),
                                            }),
                                            (0, i.jsx)(eL.$, {
                                                variant: "expressive",
                                                onClick: function () {
                                                    (0, eQ.K4)({
                                                        guildId: t.guild_id,
                                                        location: { section: eE.JJy.STAGE_VIDEO_LIMIT },
                                                    }),
                                                        e$.default.track(eE.HAw.BOOSTING_UPSELL_CLICKED, {
                                                            guild_id: t.guild_id,
                                                            type: te.e.VIDEO_STAGE_LIMIT,
                                                            is_moderator: m,
                                                            action: te.pd.BOOST,
                                                        });
                                                },
                                                size: "sm",
                                                text: ep.intl.string(ep.t.Uj0md3),
                                            }),
                                        ],
                                    })
                                  : (0, i.jsx)(eL.$, {
                                        variant: "primary",
                                        onClick: f,
                                        size: "sm",
                                        text: ep.intl.string(ep.t.WAI6xu),
                                    }),
                          }),
                      ],
                  }),
              ],
          })
        : j;
}
function tl() {
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
var ts = n(456412),
    ta = n(63995);
n(321073);
var tr = n(59520),
    to = n(996439),
    tc = n(562708),
    td = n(428678),
    tu = n(952270),
    th = n(104510),
    tA = n(139286),
    tp = n(480890),
    tx = n(562153),
    tg = n(806931),
    tm = n(314243);
let tf = l.memo(function (e) {
        let { guildId: t, channelId: n, user: l, isPremium: s, isBlocked: a, isIgnored: r } = e;
        return (0, i.jsxs)("div", {
            className: tm.FS,
            children: [
                a ? (0, i.jsx)(td.K, { size: "lg", className: tm.Q6, color: eK.A.unsafe_rawColors.RED_400.css }) : null,
                r ? (0, i.jsx)(tu.EyeSlashIcon, { size: "lg", className: tm.Q6 }) : null,
                (0, i.jsx)(Z.E, {
                    className: tm.Qq,
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: tx.Ay.getName(t, n, l),
                }),
                s ? (0, i.jsx)(th._, { className: tm.EH, color: eK.A.unsafe_rawColors.GUILD_BOOSTING_PINK }) : null,
            ],
        });
    }),
    tE = l.memo(function (e) {
        let { participant: t, guildId: n, channel: l, isPremium: s } = e,
            { user: r, blocked: o, ignored: c, rtsState: d } = t,
            u = d === eg.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            h = d === eg.zF.REQUESTED_TO_SPEAK || u;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: tm.H,
                    children: [
                        h &&
                            (0, i.jsx)(Y.E, {
                                size: "md",
                                color: "currentColor",
                                className: a()(tm.Kk, { [tm.MD]: u }),
                            }),
                        (0, i.jsx)("img", {
                            src: r.getAvatarURL(l.guild_id, 56, !1) ?? void 0,
                            alt: r.username,
                            "aria-label": r.username,
                            className: a()(tm.my, { [tm.zj]: o || c }),
                        }),
                    ],
                }),
                (0, i.jsx)(tf, { guildId: n, channelId: l.id, user: r, isPremium: s, isBlocked: o, isIgnored: c }),
            ],
        });
    });
function tC() {
    return (0, i.jsx)("div", { className: tm.j8 });
}
let tj = l.memo(function (e) {
    let { participant: t, channel: s } = e,
        { user: r, blocked: c } = t,
        d = s.getGuildId(),
        u = L.default.getId(),
        { newestAnalyticsLocation: h } = (0, g.Ay)(x.A.AUDIENCE_TILE),
        A = (0, N.Us)(),
        p = (0, o.bG)([ec.Ay], () => null != d && ec.Ay.getMember(d, r.id)?.premiumSince != null, [d, r.id]),
        m = l.useRef(null);
    H()(null != d, "Channel cannot be guildless");
    let f = l.useCallback(
        (e) => {
            (0, tA.x)({
                type: tc.ImpressionTypes.MENU,
                name: tc.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                properties: { location: "AudienceTile", is_tile_owner: r.id === u, tile_type: tg.qs.USER },
            }),
                (0, ei.L3)(
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
                                onInteraction: (0, tp.s)("GuildChannelUserContextMenu", h, {
                                    targetUserId: r.id,
                                    tileType: tg.qs.USER,
                                }),
                            });
                    },
                    { context: A },
                );
        },
        [r, u, A, d, s, h],
    );
    return (0, i.jsx)(eo.A, {
        targetElementRef: m,
        user: r,
        guildId: s.guild_id,
        channelId: s.id,
        clickTrap: !0,
        children: (e) =>
            (0, i.jsx)(W.D, {
                innerRef: m,
                className: a()(tm.iA, { [tm.wP]: p || c, [tm.fP]: p && c }),
                onContextMenu: f,
                ...e,
                children: (0, i.jsx)(tE, { participant: t, guildId: d, channel: s, isPremium: p }),
            }),
    });
});
var tN = n(784227);
let tS = l.memo(function (e) {
    let { channel: t, participants: n, maxTiles: l } = e;
    if (0 === n.length) return null;
    let s = [];
    for (let e = 0; e < l; e++)
        if (e < n.length) {
            let l = n[e];
            s.push((0, i.jsx)(tj, { channel: t, participant: l }, l.id));
        } else s.push((0, i.jsx)(tC, {}, e));
    return (0, i.jsx)("div", { className: tN.l, children: s });
});
var tT = n(446837),
    t_ = n(201001),
    tI = n(473530);
let ty = (0, t_.$)(tI.qZ, tI.Rv, "", window.ResizeObserver ?? tT.t);
var tv = n(844222),
    tb = n(401843),
    tO = n(643501),
    tR = n(652896),
    tL = n(279250),
    tP = n(51092),
    tU = n(326567),
    tw = n(616356),
    tM = n(977997),
    tk = n(312006),
    tG = n(45630),
    tD = n(756872);
function tV(e) {
    let { aspectRatio: t, className: n, children: l, width: s, ...a } = e,
        r = tG.Ay.getVideoComponent();
    return (0, i.jsx)("div", {
        style: { width: s },
        className: tD.A,
        children: (0, i.jsxs)("div", {
            className: tD.e,
            style: { aspectRatio: t },
            children: [(0, i.jsx)(eG.Ay, { className: n, videoComponent: r, width: s, ...a }), l],
        }),
    });
}
var tz = n(953727);
function tB(e) {
    let { width: t = 32, height: n = 32, color: l = "currentColor", foreground: s, ...a } = e;
    return (0, i.jsxs)("svg", {
        ...(0, tz.A)(a),
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
var tq = n(90075);
let tK = function () {
    return (0, i.jsx)($.m, {
        text: ep.intl.string(ep.t.GMZqSi),
        children: (0, i.jsx)("div", {
            className: tq.k,
            children: (0, i.jsx)(tB, { color: eK.A.unsafe_rawColors.WHITE.css }),
        }),
    });
};
var tH = n(145131);
let tF = 16 / 9;
function tY(e) {
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
        { reducedMotion: A } = l.useContext(tv.C),
        { blocked: p, ignored: x, id: g } = t;
    return (0, i.jsx)(eo.A, {
        targetElementRef: h,
        user: r,
        guildId: a,
        channelId: s.id,
        clickTrap: !0,
        children: (e) =>
            (0, i.jsx)(W.D, {
                innerRef: h,
                onContextMenu: (e) => d(n, e),
                ...e,
                children: (0, i.jsx)(
                    tV,
                    {
                        participant: n,
                        aspectRatio: tF,
                        blocked: p,
                        ignored: x,
                        channel: s,
                        className: tH.V,
                        inCall: !0,
                        popoutType: u,
                        pulseSpeakingIndicator: !A.enabled,
                        width: o,
                        onContextMenu: d,
                        children: c && (0, i.jsx)(tK, {}),
                    },
                    g,
                ),
            }),
    });
}
function tW(e) {
    let {
            stageParticipant: t,
            rtcParticipant: n,
            channel: s,
            width: a,
            isModerator: r,
            onContextMenu: c,
            popoutType: d,
        } = e,
        { reducedMotion: u } = l.useContext(tv.C),
        { id: h, blocked: A, ignored: p } = t,
        x = (0, o.yK)([tw.A], () => tw.A.getAllActiveStreams(), []),
        { selectedParticipant: g, largeStream: f } = (0, o.cf)([m.A], () => ({
            selectedParticipant: null != s ? m.A.getSelectedParticipant(s.id) : null,
            largeStream: null != s && m.A.getStageStreamSize(s.id),
        })),
        E = l.useCallback(
            (e, t) => {
                if (
                    e.type === tg.lp.STREAM &&
                    0 === x.filter((t) => (0, tR._z)(t) === e.id && t.state !== eE.XYD.ENDED).length
                ) {
                    if (!(0, tL.eo)(s, tM.A, U.A, w.A, tO.default)[0]) return;
                    (0, tb.A9)((0, tR.Iy)(e.id), { forceMultiple: t.shiftKey });
                }
                g?.id === e.id
                    ? f
                        ? (eY.A.selectParticipant(s.id, null), eY.A.updateStageStreamSize(s.id, !1))
                        : eY.A.updateStageStreamSize(s.id, !0)
                    : (eY.A.updateStageStreamSize(s.id, !1), eY.A.selectParticipant(s.id, e.id));
            },
            [x, s, g, f],
        );
    return (0, i.jsx)(
        tV,
        {
            participant: n,
            aspectRatio: tF,
            fit: n.type === tg.lp.USER ? tP.$.COVER : void 0,
            blocked: A,
            ignored: p,
            channel: s,
            className: tH.V,
            inCall: !0,
            popoutType: d,
            onClick: E,
            onContextMenu: c,
            pulseSpeakingIndicator: !u.enabled,
            width: a,
            children: r && n.type === tg.lp.USER && (0, i.jsx)(tK, {}),
        },
        h,
    );
}
let tQ = l.memo(function (e) {
    let { participant: t, channel: l, width: s, popoutType: a } = e,
        { newestAnalyticsLocation: r } = (0, g.Ay)(x.A.STAGE_TILE),
        c = (0, N.Us)(),
        d = l.getGuildId(),
        u = L.default.getId();
    H()(null != d, "Channel cannot be guildless");
    let { user: h } = t,
        A = (0, o.bG)([m.A], () => m.A.getParticipant(l.id, t.id), [l.id, t.id]),
        p = (0, o.bG)([tk.Ay], () => tk.Ay.isModerator(h.id, l.id), [l.id, h.id]);
    if (null == A || A.type === tg.lp.ACTIVITY) return null;
    function f(e) {
        (0, tA.x)({
            type: tc.ImpressionTypes.MENU,
            name: tc.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: { location: "StageTile", is_tile_owner: h.id === u, tile_type: e },
        });
    }
    function E(e, t, s, a) {
        if (null != d)
            switch (e.type) {
                case tg.lp.HIDDEN_STREAM:
                case tg.lp.STREAM:
                    f(tg.qs.STREAM),
                        (0, ei.L3)(
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
                                        onInteraction: (0, tp.s)("StreamContextMenu", r, {
                                            entrypoint: a,
                                            targetUserId: h.id,
                                            tileType: tg.qs.STREAM,
                                        }),
                                    });
                            },
                            { context: c },
                        );
                    return;
                case tg.lp.USER:
                default:
                    if ((f(tg.qs.USER), s))
                        return (0, tU.r)(t, h, l, { context: c }, (e, t) =>
                            (0, tp.Y)({
                                menuName: e,
                                menuItemProps: t,
                                entrypoint: tg.GK.THREE_DOT,
                                targetUserId: h.id,
                                location: r,
                                tileType: tg.qs.USER,
                            }),
                        );
                    (0, ei.L3)(
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
                                    onInteraction: (0, tp.s)("GuildChannelUserContextMenu", r, {
                                        targetUserId: h.id,
                                        tileType: tg.qs.USER,
                                    }),
                                });
                        },
                        { context: c },
                    );
            }
    }
    return A.type !== tg.lp.USER || A.voiceState?.selfVideo
        ? (0, i.jsx)(tW, {
              stageParticipant: t,
              rtcParticipant: A,
              channel: l,
              guildId: d,
              user: h,
              width: s,
              isModerator: p,
              onContextMenu: E,
              popoutType: a,
          })
        : (0, i.jsx)(tY, {
              stageParticipant: t,
              rtcParticipant: A,
              channel: l,
              guildId: d,
              user: h,
              width: s,
              isModerator: p,
              onContextMenu: E,
              popoutType: a,
          });
});
var tX = n(239131);
let tZ = l.memo(function (e) {
    let { channel: t, participants: n, tileWidth: l, selectedParticipant: s, popoutType: a } = e;
    return (0, i.jsx)("div", {
        className: tX.q,
        children: n.map((e) =>
            e.id === s?.id ? null : (0, i.jsx)(tQ, { channel: t, participant: e, width: l, popoutType: a }, e.id),
        ),
    });
});
var t$ = n(847374),
    tJ = n(402216),
    t0 = n(97808),
    t1 = n(717558),
    t9 = n(636585),
    t2 = n(486020),
    t5 = n(799656);
function t3(e) {
    let { channel: t, speaker: s, className: r } = e,
        o = l.useRef(null),
        { newestAnalyticsLocation: c } = (0, g.Ay)(),
        d = (0, N.Us)(),
        { reducedMotion: u } = l.useContext(tv.C),
        h = (0, t1.A)({ userId: s.id }),
        A = null != s.member ? (0, t2.xT)(s.member) : null;
    function p(e) {
        (0, ei.L3)(
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
                        onInteraction: (0, tp.s)("GuildChannelUserContextMenu", c),
                    });
            },
            { context: d },
        );
    }
    return (0, i.jsx)(eo.A, {
        targetElementRef: o,
        user: s.user,
        guildId: t.guild_id,
        channelId: t.id,
        clickTrap: !0,
        children: (e) =>
            (0, i.jsx)($.m, {
                targetElementRef: o,
                __unsupportedReactNodeAsText: s.userNick,
                position: "bottom",
                children: (0, i.jsx)(W.D, {
                    ...e,
                    innerRef: o,
                    onClick: (t) => {
                        t.stopPropagation(), e.onClick(t);
                    },
                    onContextMenu: p,
                    children: (0, i.jsx)(t0.eu, {
                        src: A ?? s.user.getAvatarURL(t.guild_id, 24),
                        size: Q._3.SIZE_24,
                        className: a()(t5.my, r),
                        "aria-label": s.userNick,
                        isSpeaking: h && !u.enabled,
                    }),
                }),
            }),
    });
}
function t4(e) {
    let { speakers: t, channel: n } = e;
    return (0, i.jsx)(t9.A, {
        className: t5.z,
        guildId: n.guild_id,
        users: t,
        max: 10,
        renderUser: (e, t, l) => (0, i.jsx)(t3, { channel: n, speaker: e, className: t }, l),
        renderMoreUsers: (e, t, n) => (0, i.jsx)("div", { className: a()(t5.$U, t), children: e }, n),
    });
}
var t6 = n(784269);
let t7 = l.memo(function (e) {
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
    return (0, i.jsxs)(W.D, {
        onClick: l,
        className: a()(t6.kL, s),
        children: [
            null == o
                ? (0, i.jsx)(eF.n, { size: "custom", color: "currentColor", width: 20, height: 20, className: t6.Vo })
                : (0, i.jsx)(eH.MicrophoneIcon, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                      className: t6.Vo,
                  }),
            (0, i.jsxs)(Z.E, {
                color: "text-strong",
                variant: "text-md/semibold",
                className: t6.Qq,
                children: [t, " \u2014 ", n],
            }),
            r &&
                null != c &&
                null != o &&
                o.length > 0 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(t4, { channel: c, speakers: o }), d && (0, i.jsx)(tJ.Ay, {})],
                }),
            (0, i.jsx)(t$.a, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: a()(t6.mw, { [t6.VU]: r }),
            }),
        ],
    });
});
var t8 = n(676553);
function ne(e) {
    return e.type === z.wY.VOICE;
}
let nt = (0, ts.A)(function (e) {
    let t,
        n,
        { channel: s, width: a, onScroll: c, popoutType: d } = e,
        {
            selectedParticipantId: u,
            largeStream: h,
            chatOpen: A,
        } = (0, o.cf)(
            [m.A],
            () => ({
                selectedParticipantId: m.A.getSelectedParticipantId(s.id),
                largeStream: m.A.getStageStreamSize(s.id),
                chatOpen: m.A.getChatOpen(s.id),
            }),
            [s.id],
        ),
        p = (0, V.uy)(s.id),
        x = (0, V.zy)(s.id, z.ip.AUDIENCE),
        g = (0, o.bG)([ta.A], () => (null != u ? ta.A.getParticipant(s.id, u) : null)),
        f = (0, V.E5)(s.id, z.ip.SPEAKER),
        E = f.filter(ne),
        C = null != f.find((e) => e.type === z.wY.STREAM),
        j = Math.floor((a - 32) / 102),
        N = a < 424 ? 1 : a < 624 ? 2 : a < 824 || A ? 3 : 4,
        S = { [z.ip.SPEAKER]: N, [z.ip.AUDIENCE]: j, [z.ip.SELECTED]: 1 },
        T = (function (e) {
            let t = (0, V.zy)(e, z.ip.AUDIENCE),
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
                    ((i = (0, o.bG)([ta.A], () => [e, ta.A.getParticipantsVersion(e)], [e], to.D)),
                    (s = (0, o.bG)([m.A], () => m.A.getSelectedParticipantId(e), [e])),
                    l.useMemo(() => {
                        let n = [],
                            l = [],
                            o = -1,
                            c = [];
                        if (a)
                            for (let t of ta.A.getMutableParticipants(e, z.ip.SPEAKER))
                                if (t.type === z.wY.STREAM) t.id !== s && c.push(t), o++;
                                else break;
                        function d(e, t, i) {
                            let a = i ? e.filter((e, t) => e.id !== s && t > o) : e,
                                c = (0, r.chunk)(a, t);
                            l.push(c), n.push(c.length);
                        }
                        let u = null != s ? ta.A.getParticipant(e, s) : null;
                        return (
                            u?.speaker ? d([u], 1, !1) : d([], 1, !1),
                            [z.ip.SPEAKER, z.ip.AUDIENCE].forEach((e) => {
                                d(ta.A.getMutableParticipants(i[0], e), t[e], e === z.ip.SPEAKER);
                            }),
                            d(c, 1, !1),
                            [n, l]
                        );
                    }, [i, t, s, a, e])),
                [d, u] = c,
                [h, A] = (0, tr.J)(c, n, [t[z.ip.AUDIENCE]]);
            return [
                [d[3 * !!a], d[1], h[2]],
                [u[3 * !!a], u[1], A[2]],
            ];
        })(s.id, S, T),
        y = [Math.max(_[0] ?? 1, 1), Math.max(_[1] ?? 1, 1), _[2]],
        { speakerTileWidth: v, speakerTileHeight: b } =
            ((n = Math.floor((t = Math.floor(a / N - 8)) / tF)), { speakerTileWidth: t, speakerTileHeight: n }),
        O = h ? a - 32 : Math.min(a - 64, 3 * v + 8);
    function R(e) {
        return e === _.length - 1 || (0 === x && 1 === e);
    }
    let [L, P] = l.useState(!1),
        [U, w] = l.useState(!1);
    return (0, i.jsx)(ty, {
        sections: y,
        renderSection: function (e) {
            let { section: t } = e;
            return 1 === t
                ? 0 === p
                    ? null
                    : (0, i.jsx)(
                          t7,
                          {
                              participantCount: p,
                              label: ep.intl.string(ep.t.CduOkx),
                              className: t8.wx,
                              onClick: () => P(!L),
                              collapsed: L,
                              speakers: E,
                              channel: s,
                              isStreamLive: C,
                          },
                          `speaker-header-${t}`,
                      )
                : 2 === t
                  ? 0 === x
                      ? null
                      : (0, i.jsx)(
                            t7,
                            {
                                participantCount: x,
                                label: ep.intl.string(ep.t["3foUu5"]),
                                className: t8.wx,
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
                            className: t8.Od,
                            children: (0, i.jsx)(tQ, { channel: s, participant: a[0], width: O, popoutType: d }),
                        },
                        "selected-participant",
                    );
                case 1:
                    if (L) return null;
                    return (0, i.jsx)(
                        l.Fragment,
                        {
                            children: (0, i.jsx)(tZ, {
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
                    return (0, i.jsx)(tS, { channel: s, participants: a, maxTiles: j }, `audience-${t}-${n}`);
                default:
                    return null;
            }
        },
        rowHeight: function (e) {
            return null == I[e][0] ? 0 : 0 === e ? O / tF + 8 : 1 === e ? (L ? 0 : b) : 98 * !U;
        },
        renderFooter: function (e) {
            let { section: t } = e;
            return R(t) ? (0, i.jsx)("div", { className: t8.jH }, "bottom-spacer") : null;
        },
        footerHeight: function (e) {
            return 1 === e ? 8 : 0 === e ? 12 : 88 * !!R(e);
        },
        className: t8.XG,
        chunkSize: 60,
        onScroll: c,
    });
});
var nn = n(43105),
    ni = n(309796),
    nl = n(666654),
    ns = n(922016),
    na = n(980707),
    nr = n(477782),
    no = n(285796),
    nc = n(381844),
    nd = n(532676),
    nu = n(432017),
    nh = n(517461),
    nA = n(379257),
    np = n(847599),
    nx = n(385318),
    ng = n(329072),
    nm = n(183184),
    nf = n(880144),
    nE = n(698441),
    nC = n(394412),
    nj = n(993838),
    nN = n(418208),
    nS = n(47868);
function nT(e) {
    let { className: t, channel: n, highlight: l } = e,
        s = (0, N.Us)();
    return (0, nN.zU)()
        ? null
        : (0, i.jsx)(nS.A, {
              highlight: l ?? !1,
              className: t,
              icon: (0, i.jsx)(eC.q, { size: "custom", color: "currentColor", height: 20, width: 20 }),
              color: eK.A.unsafe_rawColors.GREEN_360.css,
              title: ep.intl.string(ep.t.OYbHfv),
              description: ep.intl.string(ep.t.yXwLMQ),
              onClick: function () {
                  (0, nj.tQ)(n, s);
              },
          });
}
var n_ = n(931991),
    nI = n(151476),
    ny = n(405018),
    nv = n(704877),
    nb = n(173660),
    nO = n(105225),
    nR = n(579153),
    nL = n(222692),
    nP = n(246356),
    nU = n(404355),
    nw = n(577062),
    nM = n(970636),
    nk = n(287809),
    nG = n(302884),
    nD = n(30108),
    nV = n(39938),
    nz = n(106044);
function nB(e) {
    let t = (0, o.bG)([L.default], () => L.default.getId());
    return (0, eg.Ay)(t, e) === eg.zF.ON_STAGE;
}
var nq = n(505543);
function nK(e) {
    let t = (0, o.bG)([L.default], () => L.default.getId()),
        n = (0, eg.Ay)(t, e.id),
        i = n === eg.zF.REQUESTED_TO_SPEAK || n === eg.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
        [s, a] = l.useState(i);
    return (
        l.useEffect(() => {
            a(i);
        }, [i]),
        [
            s,
            function () {
                (0, nN.Cf)(e.id)
                    ? nA.A.showAgeVerificationGetStartedModal({ entryPoint: np.q1.STAGE_CHANNEL_RAISE_HAND })
                    : (n === eg.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, eu.e7)(e, !0) : (0, eu.J7)(e, !s),
                      a(!s));
            },
        ]
    );
}
var nH = n(328375),
    nF = n(117816);
function nY(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, g.Ay)(),
        s = nB(t.id),
        [a, r] = nK(t),
        c = (0, o.bG)([w.A], () => w.A.can(eT.xB.REQUEST_TO_SPEAK, t)),
        d = (0, nN.Vv)(),
        u = (0, nN.tp)(),
        h = l.useRef(null),
        [A, p] = (0, nh.V)("age-verification-stage-popover-dismissed", !1),
        x = l.useContext(I.vG);
    if (s) return null;
    let m = u && !A;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(e2.l, {
                ref: h,
                isTrayButton: !0,
                isActive: a,
                label: (function (e, t, n, i) {
                    let l = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                    return !l && i
                        ? null
                        : n
                          ? ep.intl.string(ep.t.NzITVo)
                          : e
                            ? ep.intl.string(ep.t.GCimTk)
                            : t
                              ? ep.intl.string(ep.t.hLbG5N)
                              : ep.intl.string(ep.t.e4WMvx);
                })(a, c, d, u, A),
                iconComponent: d ? ni._ : Y.E,
                onClick: () => {
                    (0, j.X)(n, j.O.REQUEST_TO_SPEAK, !a),
                        p(!0),
                        d
                            ? nA.A.showAgeVerificationGetStartedModal({ entryPoint: np.q1.STAGE_CHANNEL_RAISE_HAND })
                            : r();
                },
                color: a ? "green" : void 0,
                disabled: !c && !a,
            }),
            m &&
                (0, i.jsx)(nn.A, {
                    targetElementRef: h,
                    graphic: { type: "image", src: nF.A },
                    gradientColor: "blue",
                    title: ep.intl.string(ep.t.zvubnM),
                    body: ep.intl.string(ep.t["/wx+J2"]),
                    shouldShow: !x,
                    actions: [
                        {
                            text: ep.intl.string(ep.t.KXVgjt),
                            onClick: () => {
                                nA.A.showAgeVerificationGetStartedModal({
                                    entryPoint: np.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT,
                                }),
                                    p(!0);
                            },
                        },
                    ],
                    onRequestClose: () => p(!0),
                }),
        ],
    });
}
let nW = l.memo(function (e) {
    let { channel: t } = e,
        n = (0, o.bG)([M.Ay], () => M.Ay.getVoiceChannelId() === t.id, [t.id]);
    return (0, i.jsxs)("div", {
        className: nH.kL,
        children: [
            (0, i.jsxs)("div", {
                className: nH.qi,
                children: [
                    (0, i.jsx)(n$, { channelId: t.id }),
                    n ? (0, i.jsx)(nY, { channel: t }) : null,
                    (0, i.jsx)(nR.A, { channel: t }),
                ],
            }),
            (0, i.jsx)(nX, { channel: t }),
        ],
    });
});
function nQ(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, g.Ay)(),
        l = (0, nN.Vv)();
    return (0, i.jsx)(e2.l, {
        isTrayButton: !0,
        onClick: function () {
            ((0, j.X)(n, j.O.SPEAK_ON_STAGE), l)
                ? nA.A.showAgeVerificationGetStartedModal({ entryPoint: np.q1.STAGE_CHANNEL_RAISE_HAND })
                : (0, eu.e7)(t, !1);
        },
        iconComponent: l ? nl.O : ee.L,
        label: ep.intl.string(l ? ep.t.NzITVo : ep.t["8Joh+p"]),
    });
}
function nX(e) {
    let { channel: t, onSelect: n } = e,
        s = (0, N.Us)(),
        { canManageGuildEvent: a } = (0, n_.nr)(t),
        r = (0, o.bG)([B.A], () => B.A.getStageInstanceByChannel(t.id), [t.id]),
        c = (0, o.bG)([nE.Ay], () => nE.Ay.getGuildScheduledEvent(r?.guild_scheduled_event_id)),
        { suppress: d } = (0, nb.A)(t),
        u = L.default.getId(),
        [h] = nK(t),
        A = tk.Ay.isModerator(u, t.id),
        p = (0, eJ.Ni)(t.id),
        m = a(c),
        { parentAnalyticsLocation: f } = (0, g.Ay)(),
        E = l.useRef(null);
    function C() {
        return (function (e) {
            let { channel: t, appContext: n } = e;
            ((0, j.X)(x.A.VOICE_CONTROL_TRAY, j.O.DISCONNECT), (0, nz.A)(t))
                ? (0, nj.j3)(t, n)
                : eP.default.disconnect();
        })({ channel: t, appContext: s });
    }
    return (A || m) && null != r
        ? (0, i.jsx)(ns.Y, {
              targetElementRef: E,
              renderPopout: (e) => {
                  let { closePopout: l } = e;
                  return (0, i.jsx)(nP.A, {
                      children: (0, i.jsx)(na.W, {
                          "data-menu-migrated": !0,
                          navId: "exit-options",
                          "aria-label": ep.intl.string(ep.t["3Uj+2p"]),
                          onClose: l,
                          onSelect: n,
                          onInteraction: (0, tp.s)("End Stage", f, { entrypoint: tg.GK.CARET }),
                          children: (0, i.jsx)(nr.Dr, {
                              id: "end-stage",
                              color: "danger",
                              action: () => (0, nj.$q)(t, s),
                              label: ep.intl.string(ep.t["Fmx5y/"]),
                              icon: no.a,
                              leadingAccessory: { type: "icon", icon: no.a },
                          }),
                      }),
                  });
              },
              align: "center",
              position: "top",
              spacing: 16,
              animation: ns.Y.Animation.FADE,
              children: (e, t) => {
                  let { onClick: n } = e,
                      { isShown: l } = t;
                  return (0, i.jsx)(nU.A, {
                      ref: E,
                      label: ep.intl.string(ep.t.c6qKwr),
                      onClick: C,
                      onPopoutClick: n,
                      popoutOpen: l,
                  });
              },
          })
        : (d && !p) || h
          ? (0, i.jsx)(nU.A, { label: ep.intl.string(ep.t.SMKyih), onClick: C })
          : (0, i.jsx)(nU.A, { label: ep.intl.string(ep.t.c6qKwr), onClick: C });
}
function nZ(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, g.Ay)();
    return (0, i.jsx)(e2.l, {
        isTrayButton: !0,
        iconComponent: nc.U,
        label: ep.intl.string(ep.t.ezLpY6),
        onClick: function () {
            (0, j.X)(n, j.O.MOVE_TO_AUDIENCE), (0, eu.Tf)(t);
        },
    });
}
function n$(e) {
    let { channelId: t } = e,
        { parentAnalyticsLocation: n } = (0, g.Ay)(),
        l = (0, o.bG)([nV.A], () => nV.A.isMuted()),
        s = (0, nD.bF)(t),
        a = (0, o.bG)([nV.A], () => nV.A.shouldPlay());
    return s
        ? (0, i.jsx)(e2.l, {
              isTrayButton: !0,
              isActive: !l,
              label: l ? ep.intl.string(ep.t.ScHlfl) : ep.intl.string(ep.t.zqxfrf),
              iconComponent: l ? nd.C : nu.T,
              color: l ? void 0 : "green",
              onClick: () => {
                  (0, j.X)(n, j.O.STAGE_MUSIC, l), (0, nG.k)(!l);
              },
          })
        : (0, i.jsx)(e2.l, {
              isTrayButton: !0,
              isActive: a,
              label: a ? ep.intl.string(ep.t.zqxfrf) : ep.intl.string(ep.t.ScHlfl),
              iconComponent: a ? nu.T : nd.C,
              color: a ? "green" : void 0,
              onClick: () => {
                  (0, j.X)(n, j.O.STAGE_MUSIC, !a), (0, nG.C)(!a);
              },
          });
}
let nJ = l.memo(function (e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, g.Ay)(),
        { suppress: s, selfMute: a, mute: r } = (0, nb.A)(t),
        c = (0, eJ.Ni)(t.id),
        d = (0, o.bG)([tO.default], () => null != tO.default.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: u, enabled: h } = (0, nI.A)(),
        A = (0, nv.A)(t),
        { limit: p, reachedLimit: x } = (0, ny.A)(t),
        f = (0, o.bG)([nk.default], () => nk.default.getCurrentUser()),
        E = (0, o.bG)([tG.Ay], () => (0, nf.A)(tG.Ay)),
        C = (0, o.bG)([M.Ay], () => M.Ay.getVoiceChannelId() === t.id, [t.id]),
        j = (0, o.bG)([m.A], () => m.A.getStreamParticipants(t.id)[0], [t.id]),
        N = (0, e7.qT)(t.id),
        S = p > 0,
        T = (x && !N) || (null != j && j.user.id !== f?.id),
        _ = (0, tp.s)("AudioDeviceMenu", n, { entrypoint: tg.GK.CARET }),
        I = l.useRef(null),
        y = l.useRef(null);
    if (null == f) return null;
    let v = (0, i.jsx)(ns.Y, {
        targetElementRef: I,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(nP.A, {
                children: (0, i.jsx)(ng.A, {
                    onClose: t,
                    minimal: !0,
                    onInteraction: (0, tp.s)("VideoDeviceMenu", n, { entrypoint: tg.GK.CARET }),
                }),
            });
        },
        position: "top",
        align: "right",
        spacing: 16,
        animation: ns.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(nM.A, {
                ref: I,
                centerButton: !0,
                hasPermission: A,
                enabled: h,
                cameraUnavailable: u,
                onChange: nO.SZ,
                onCameraUnavailable: nL.A,
                channelLimitReached: x,
                channelLimit: p,
                popoutOpen: l,
                onPopoutClick: n,
            });
        },
    });
    return (0, i.jsxs)("div", {
        className: nH.iE,
        children: [
            C && !s
                ? (0, i.jsxs)("div", {
                      className: nH.qi,
                      children: [
                          (0, i.jsx)(ns.Y, {
                              targetElementRef: y,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, i.jsx)(nP.A, {
                                      children: (0, i.jsx)(nx.default, {
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
                              animation: ns.Y.Animation.FADE,
                              children: (e, t) => {
                                  let { onClick: n } = e,
                                      { isShown: l } = t;
                                  return (0, i.jsx)(nw.A, {
                                      ref: y,
                                      centerButton: !0,
                                      onPopoutClick: n,
                                      selfMute: a,
                                      serverMute: r,
                                      suppress: s,
                                      popoutOpen: l,
                                      onClick: () => (0, nm.A)(r, s, "Stage Channel Controls"),
                                      awaitingRemote: d,
                                  });
                              },
                          }),
                          S && v,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: nH.qi,
                children: [
                    C && !s && S
                        ? (0, i.jsx)(nO.rP, {
                              channel: t,
                              currentUser: f,
                              exitFullScreen: () => null,
                              canGoLive: E,
                              hasPermission: A,
                              disabled: T,
                          })
                        : null,
                    (0, i.jsx)(n$, { channelId: t.id }),
                    C && (0, i.jsx)(nY, { channel: t }),
                    C && c && s && (0, i.jsx)(nQ, { channel: t }),
                    C && !s && (0, i.jsx)(nZ, { channel: t }),
                    (0, i.jsx)(nR.A, { channel: t }),
                ],
            }),
            (0, i.jsx)(nX, { channel: t }),
        ],
    });
});
function n0(e) {
    let { channel: t } = e;
    return (0, i.jsxs)("div", {
        className: nH.iE,
        children: [
            (0, i.jsx)("div", { className: nH.qi, children: (0, i.jsx)(n$, { channelId: t.id }) }),
            (0, i.jsx)(nX, { channel: t }),
        ],
    });
}
let n1 = l.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        l = nB(t.id),
        s = (0, eJ.Ni)(t.id),
        a = (0, o.bG)([w.A], () => w.A.can(e0.QY, t), [t]),
        r = (0, nN.zU)(),
        c = (0, nq.A)(t.id),
        d = (0, o.bG)([m.A], () => (null != t ? m.A.getSelectedParticipant(t.id) : null)),
        u = !c && null == d;
    return n
        ? (0, i.jsx)(n0, { channel: t })
        : l || s
          ? (0, i.jsxs)("div", {
                className: nH.My,
                children: [
                    (0, i.jsxs)("div", {
                        className: nH.Ac,
                        children: [
                            u ? (0, i.jsx)(nC.A, { channelId: t?.id }) : null,
                            (0, i.jsx)("div", { className: nH.me }),
                            u && a && !r ? (0, i.jsx)(nT, { highlight: !0, channel: t }) : null,
                            (0, i.jsx)("div", { className: nH.me }),
                        ],
                    }),
                    (0, i.jsx)(nJ, { channel: t }),
                ],
            })
          : (0, i.jsx)(nW, { channel: t });
});
var n9 = n(520006);
function n2(e) {
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
        A = (0, o.bG)([U.A], () => (null != u ? U.A.getGuild(u) : null), [u]),
        p = (0, o.bG)([nE.Ay], () => nE.Ay.getActiveEventByChannel(h), [h]);
    if (!(null != A && null != l && w.A.can(eE.xBc.CREATE_INSTANT_INVITE, l))) return null;
    let x = ep.intl.string(ep.t.VINpSK);
    return (
        null != t ? (x = ep.intl.string(ep.t["6VQaqd"])) : null != n && (x = ep.intl.string(ep.t["OzOM/q"])),
        (0, i.jsx)("div", {
            className: c,
            children: (0, i.jsx)(eL.$, {
                size: d,
                variant: "secondary",
                text: x,
                onClick: () => {
                    H()(null != A, "guild cannot be null"),
                        H()(null != l, "channel cannot be null"),
                        (0, n9.X)({
                            guild: A,
                            channel: l,
                            streamUserId: t?.ownerId,
                            applicationId: n,
                            appContext: a,
                            exitFullScreen: s,
                            analyticsLocation: r,
                            guildScheduledEvent: p,
                            source: eE.PE1.STAGE_CHANNEL,
                        });
                },
            }),
        })
    );
}
var n5 = n(104171),
    n3 = n(81466),
    n4 = n(823508);
function n6(e) {
    let { className: t, guildId: l } = e,
        s = (0, n4.A)();
    return (0, i.jsx)(nS.A, {
        className: t,
        icon: (0, i.jsx)(n3.CalendarIcon, { size: "custom", color: "currentColor", height: 20, width: 20 }),
        color: eK.A.unsafe_rawColors.BRAND_500.css,
        title: ep.intl.string(ep.t["60lJ0C"]),
        description: ep.intl.string(ep.t["EYn7/y"]),
        onClick: function () {
            (0, d.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("489565"),
                    n.e("931937"),
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
                    n.e("670089"),
                    n.e("870160"),
                    n.e("469647"),
                    n.e("454450"),
                    n.e("560423"),
                ]).then(n.bind(n, 729398));
                return (t) => (0, i.jsx)(e, { ...t, guildId: l });
            }, s);
        },
    });
}
var n7 = n(269341);
function n8(e) {
    let { onClick: t, className: n } = e,
        l = eH.MicrophoneIcon;
    return (0, i.jsx)(nS.A, {
        iconContainerClassName: a()({ [n7.q8]: !1 }),
        icon: (0, i.jsx)(l, { size: "custom", color: "currentColor", className: n7.Pz, height: 20, width: 20 }),
        color: eK.A.unsafe_rawColors.PRIMARY_700.css,
        title: ep.intl.string(ep.t["jMLfp/"]),
        description: ep.intl.string(ep.t["Vd/rEX"]),
        onClick: t,
        className: n,
    });
}
function ie(e) {
    let { channel: t } = e,
        { participants: n, usersInSummary: l } = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                [n] = (0, o.bG)(
                    [ta.A],
                    () => {
                        let n = ta.A.getMutableParticipants(e).filter((e) => e.type === z.wY.VOICE),
                            i = [];
                        for (let e of n) {
                            if (i.length >= t) break;
                            null == i.find((t) => t.id === e.user.id) && i.push(e.user);
                        }
                        return [{ participants: n, usersInSummary: i }, ta.A.getParticipantsVersion(e)];
                    },
                    [e, t],
                    to.D,
                );
            return n;
        })(t.id);
    return (0, i.jsxs)("div", {
        className: n7.P1,
        children: [
            (0, i.jsx)(n5.Ay, { className: n7.Ip, guildId: t.guild_id, users: l, size: n5.DN.SIZE_16 }),
            (0, i.jsx)(Z.E, {
                variant: "text-sm/normal",
                color: "text-default",
                children: (function (e) {
                    if (0 === e.length) return "";
                    if (1 === e.length) return ep.intl.formatToPlainString(ep.t["5ULgaQ"], { first: e[0].userNick });
                    if (2 === e.length)
                        return ep.intl.formatToPlainString(ep.t.BHK0Op, {
                            first: e[0].userNick,
                            second: e[1].userNick,
                        });
                    let t = e.length - 2;
                    return ep.intl.formatToPlainString(ep.t.T3MT4n, {
                        first: e[0].userNick,
                        second: e[1].userNick,
                        numOthers: t,
                    });
                })(n),
            }),
        ],
    });
}
function it(e) {
    let { channel: t, onContinueClick: n } = e,
        s = (0, o.bG)([w.A], () => w.A.can(e0.QY, t), [t]),
        r = t.guild_id,
        { canCreateGuildEvent: c } = (0, n_.nr)(t),
        d = (0, nq.A)(t.id),
        u = l.useRef(null);
    return (0, i.jsxs)("div", {
        className: n7.kL,
        ref: u,
        children: [
            (0, i.jsx)(eD.A, { eventTargetRef: u }),
            (0, i.jsxs)("div", {
                className: n7.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: n7.N1,
                        children: [
                            (0, i.jsx)(eR.D, {
                                className: n7.__invalid_title,
                                variant: "heading-xxl/normal",
                                children: ep.intl.string(ep.t.QGnDLs),
                            }),
                            (0, i.jsx)(Z.E, {
                                tag: "div",
                                className: n7.VA,
                                variant: "heading-lg/normal",
                                children: ep.intl.string(ep.t.djfK36),
                            }),
                        ],
                    }),
                    d ? null : (0, i.jsx)(nC.A, { channelId: t.id, showDismiss: !1 }),
                    s ? (0, i.jsx)(nT, { className: n7.fN, channel: t }) : null,
                    c ? (0, i.jsx)(n6, { className: n7.fN, guildId: r }) : null,
                    s ? (0, i.jsx)(n8, { className: a()({ [n7.fN]: !0 }), onClick: n }) : null,
                    (0, i.jsx)(ie, { channel: t }),
                ],
            }),
        ],
    });
}
var ii = n(95561),
    il = n(423562),
    is = n(625494),
    ia = n(475815),
    ir = n(44540);
let io = "HasBeenInStageChannel";
function ic(e) {
    (0, j.X)(x.A.VOICE_CONTROL_TRAY, j.O.STAY_ON_TOP, e), S.setAlwaysOnTop(eE.MLl.CHANNEL_CALL_POPOUT, e);
}
function id(e) {
    let {
            channel: t,
            appContext: n,
            popoutOpen: s,
            popoutWindow: a,
            popoutWindowAlwaysOnTop: r,
            selectedParticipant: c,
        } = e,
        { parentAnalyticsLocation: d } = (0, g.Ay)(),
        u = t.getGuildId(),
        A = (0, o.bG)([M.Ay], () => M.Ay.getMostRecentSelectedTextChannelId(u), [u]),
        p = L.default.getId(),
        x =
            !(0, o.bG)([m.A], () => m.A.isFullscreenInContext(n)) &&
            (!k.isPlatformEmbedded || G.Ay.supportsFeature(eE.BYE.POPOUT_WINDOWS)),
        E = null != c && c.type !== tg.lp.ACTIVITY && c.user.id !== p,
        C = l.useMemo(() => a?.window ?? window, [a]),
        N = (function (e) {
            let { channel: t, appContext: n, popoutOpen: s, popoutWindow: a, currentWindow: r } = e,
                { parentAnalyticsLocation: c } = (0, g.Ay)(),
                d = n === eE.BRT.POPOUT,
                u = l.useRef(null),
                { currentLayout: A, mode: p } = (0, o.cf)([m.A], () => {
                    let e = m.A.getMode(t.id),
                        i = n === eE.BRT.POPOUT;
                    i && (e = eE._Of.VIDEO);
                    let l = e === eE._Of.VIDEO ? m.A.getLayout(t.id, n) : eE.DUB.MINIMUM;
                    return i && l !== eE.DUB.FULL_SCREEN && (l = eE.DUB.NO_CHAT), { currentLayout: l, mode: e };
                }, [t, n]),
                x = (0, o.bG)([M.Ay], () => M.Ay.getVoiceChannelId() === t.id, [t.id]);
            l.useEffect(() => {
                u.current = p;
            });
            let f = l.useRef(A),
                { currentDocument: E, rootNode: C } = l.useMemo(() => {
                    let e = null != a && d ? a.document : document,
                        t = r.document.getElementById("app-mount");
                    return { currentWindow: r, currentDocument: e, rootNode: t };
                }, [a, d, r]),
                N = s && !d,
                T = p === eE._Of.VIDEO && x && !N,
                _ = l.useCallback(
                    (e, i) => {
                        i !== e &&
                            (eY.A.updateLayout(t.id, i, n),
                            i === eE.DUB.FULL_SCREEN && t.isPrivate() && is._.dispatch(eE.jej.TEXTAREA_BLUR));
                    },
                    [n, t],
                ),
                I = l.useCallback(
                    (e) => {
                        null == C ||
                            (e === eE.DUB.FULL_SCREEN &&
                                (_(e, f.current),
                                (0, ia.sP)((e) => {
                                    f.current = e;
                                }, E)));
                    },
                    [E, _, C],
                ),
                y = l.useCallback(
                    (e) => () => {
                        null != C &&
                            ((0, j.X)(c, j.O.FULL_SCREEN, e !== eE.DUB.FULL_SCREEN),
                            e !== eE.DUB.FULL_SCREEN
                                ? ((f.current = e), _(e, eE.DUB.FULL_SCREEN), (0, ia.tl)(C))
                                : I(e));
                    },
                    [_, I, C, c],
                );
            l.useEffect(() => {
                function e() {
                    null != C && ((0, ia._U)(C, E) || A !== eE.DUB.FULL_SCREEN || y(A)());
                }
                return (
                    E.addEventListener(ia.Wb, e),
                    () => {
                        E.removeEventListener(ia.Wb, e);
                    }
                );
            }, [E, A, y, C]);
            let v = { channel: t, maybeLeaveFullScreen: I },
                b = l.useRef(v);
            return (l.useEffect(() => {
                b.current = v;
            }),
            l.useEffect(() => {
                let { channel: e, maybeLeaveFullScreen: t } = b.current;
                return (
                    e$.default.track(eE.HAw.VIDEO_LAYOUT_TOGGLED, {
                        video_layout: d ? "popout" : A,
                        ...(0, ii.QS)(e.id),
                    }),
                    () => {
                        (d && (0, k.isMac)()) || t(A);
                    }
                );
            }, [A, d]),
            l.useEffect(() => {
                null != C && u.current === eE._Of.VIDEO && p === eE._Of.VOICE && (0, ia.sP)(C, E);
            }, [E, p, u, C]),
            l.useEffect(() => {
                !x && d && h.h.wait(() => S.close(eE.MLl.CHANNEL_CALL_POPOUT));
            }, [x, d]),
            T)
                ? (0, i.jsx)(il.A, { themeable: !1, node: C, guestWindow: a, onClick: y(A) })
                : null;
        })({ channel: t, appContext: n, popoutOpen: s, popoutWindow: a, currentWindow: C }),
        T = n === eE.BRT.POPOUT && k.isPlatformEmbedded && G.Ay.supportsFeature(eE.BYE.POPOUT_WINDOWS);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            E
                ? (0, i.jsx)(R.A, {
                      context: (0, f.A)(c.type),
                      userId: c.user.id,
                      currentWindow: C,
                      sliderClassName: ir.MQ,
                      location: d,
                  })
                : null,
            T ? (0, i.jsx)(O.A, { popoutWindowAlwaysOnTop: r, onToggleStayOnTop: ic }) : null,
            x
                ? (0, i.jsx)(b.A, {
                      popoutOpen: s,
                      onOpenPopout: () => {
                          (0, j.X)(d, j.O.POPOUT, !0),
                              (() => {
                                  let e = t.getGuildId();
                                  null != e && null != A && (0, _.uh)(e, A), S.openChannelCallPopout(t);
                              })();
                      },
                      onClosePopout: () => {
                          (0, j.X)(d, j.O.POPOUT, !1), h.h.wait(() => S.close(eE.MLl.CHANNEL_CALL_POPOUT));
                      },
                  })
                : null,
            N,
        ],
    });
}
function iu(e) {
    let { channel: t } = e,
        n = (0, N.Us)(),
        l = (0, o.bG)([w.A], () => w.A.can(eE.xBc.CREATE_INSTANT_INVITE, t)),
        s = (0, o.bG)([U.A], () => U.A.getGuild(t.guild_id)),
        a = (0, o.bG)([B.A], () => B.A.getStageInstanceByChannel(t.id)),
        r = l || a?.invite_code != null;
    return null != s && r
        ? (0, i.jsx)(n2, { size: "md", channel: t, appContext: n, analyticsLocation: eE.liQ.GUILD_CHANNEL })
        : null;
}
function ih(e) {
    let t,
        {
            channel: n,
            toggleRequestToSpeakSidebar: s,
            showRequestToSpeakSidebar: c,
            popoutWindow: d,
            popoutWindowAlwaysOnTop: u,
            popoutOpen: h,
            popoutType: A,
            chatOpen: p,
            idleProps: f,
        } = e,
        { analyticsLocations: C } = (0, g.Ay)(x.A.VOICE_CONTROL_TRAY),
        j = (0, N.Us)(),
        S = (0, o.bG)([M.Ay], () => M.Ay.getVoiceChannelId() === n.id, [n.id]),
        T = (0, o.bG)([w.A], () => w.A.can(eE.xBc.CONNECT, n)),
        _ = (0, V.E5)(n.id, z.ip.SPEAKER),
        I = (0, o.bG)([m.A], () => m.A.getSelectedParticipant(n.id)),
        b = h && j !== eE.BRT.POPOUT,
        [O, R] = l.useState(0),
        L = l.useMemo(
            () =>
                (0, r.debounce)(
                    (e) => {
                        let { scrollTop: t } = e.target;
                        R(t);
                    },
                    1e3,
                    { leading: !0 },
                ),
            [],
        ),
        { isOnStartStageScreen: U } = (0, q.Ay)();
    (0, q.vI)(n);
    let k = (0, o.bG)([P.A], () => P.A.getToastsEnabled(n.id)),
        G = e8(n) ? (null != I ? "84px" : "124px") : null != I ? "0px" : "48px";
    return (
        U && (G = "0px"),
        (t = U
            ? (0, i.jsx)(it, {
                  channel: n,
                  onContinueClick: () => {
                      (0, q.ek)(!1), S || (0, D.cy)(n);
                  },
              })
            : S
              ? (0, i.jsx)(nt, { channel: n, onScroll: L, popoutType: A })
              : (0, i.jsx)(eq, { participants: _, channel: n, hasConnectPermission: T })),
        (0, i.jsx)(v.A, {
            style: { height: `calc(100% - ${G})`, paddingTop: G },
            disableGradients: !S || (0 === O && v.x.TOP),
            renderBottomCenter: () =>
                S
                    ? (0, i.jsx)(g.f5, { value: C, children: (0, i.jsx)(n1, { channel: n, isOnStartStageScreen: U }) })
                    : null,
            renderBottomRight: () =>
                S
                    ? (0, i.jsx)(g.f5, {
                          value: C,
                          children: (0, i.jsx)(id, {
                              channel: n,
                              appContext: j,
                              popoutOpen: h,
                              popoutWindow: d,
                              popoutWindowAlwaysOnTop: u,
                              selectedParticipant: I,
                          }),
                      })
                    : null,
            renderHeader: () =>
                (0, i.jsx)(ti, { toggleRequestToSpeakSidebar: s, showRequestToSpeakSidebar: c, channel: n }),
            renderChatToasts: function () {
                return !k || p || b
                    ? null
                    : (0, i.jsx)(E.Ay, {
                          children: (0, i.jsx)(y.A, { className: a()(ir.T6, { [ir.c3]: c }), channelId: n.id }),
                      });
            },
            screenMessage: b ? { mainText: ep.intl.string(ep.t.J5bXZU) } : null,
            ...f,
            children: !b && t,
        })
    );
}
function iA(e) {
    let { channel: t, popoutType: s } = e,
        [r, h] = l.useState(!1),
        f = l.useCallback(() => {
            h(!r);
        }, [r, h]),
        { popoutWindow: j, popoutWindowAlwaysOnTop: S } = (0, o.cf)([T.A], () => ({
            popoutWindow: T.A.getWindow(eE.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: T.A.getIsAlwaysOnTop(eE.MLl.CHANNEL_CALL_POPOUT),
        })),
        _ = null != j && !j.closed,
        { analyticsLocations: y } = (0, g.Ay)(x.A.STAGE_CHANNEL_CALL),
        v = (0, N.Us)(),
        b = (0, o.bG)([m.A], () => m.A.getChatOpen(t.id), [t.id]),
        O = (0, o.bG)([U.A], () => U.A.getGuild(t.guild_id), [t.guild_id]);
    (0, p.Ay)(() => {
        null == c.w.get(io) &&
            ((0, d.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("97186"), n.e("756016")]).then(n.bind(n, 456947));
                return (t) => (0, i.jsx)(e, { ...t });
            }),
            c.w.set(io, Date.now()));
    });
    let { width: R = 0, ref: L } = (0, A.Ay)(),
        P = !_ || v === eE.BRT.POPOUT;
    return (0, i.jsx)(g.f5, {
        value: y,
        children: (0, i.jsxs)(E.qh, {
            children: [
                (0, i.jsxs)("div", {
                    className: ir.kL,
                    ref: L,
                    children: [
                        (0, i.jsx)(u.N, {
                            theme: eE.NJ8.DARK,
                            children: (e) =>
                                (0, i.jsx)("div", {
                                    className: a()(ir.ik, e, { [ir.pR]: r, [ir.gy]: r || b }),
                                    children: (0, i.jsx)(I.Ay, {
                                        timeout: 2e3,
                                        children: (e) =>
                                            (0, i.jsx)(ih, {
                                                channel: t,
                                                toggleRequestToSpeakSidebar: f,
                                                showRequestToSpeakSidebar: r,
                                                popoutWindow: j,
                                                popoutWindowAlwaysOnTop: S,
                                                popoutOpen: _,
                                                popoutType: s,
                                                chatOpen: b,
                                                idleProps: e,
                                            }),
                                    }),
                                }),
                        }),
                        r ? (0, i.jsx)(eO, { channel: t, toggleRequestToSpeakSidebar: f, chatOpen: b }) : null,
                        (0, i.jsx)("div", {
                            className: ir.B2,
                            children: b && P && (0, i.jsx)(C.A, { channel: t, guild: O, maxWidth: R - 550 }),
                        }),
                    ],
                }),
                (0, i.jsx)(E.WD, {}),
            ],
        }),
    });
}
