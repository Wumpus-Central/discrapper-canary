n.r(t), n.d(t, { StageChannelInviteButton: () => iu, default: () => iA });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n(17928),
    c = n(506774),
    d = n(192308),
    u = n(43990),
    h = n(228366),
    A = n(765671),
    x = n(964486),
    p = n(793574),
    g = n(688810),
    m = n(313961),
    E = n(520698),
    C = n(43189),
    f = n(518530),
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
    L = n(495544),
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
    F = n(990078),
    Y = n(789645),
    W = n(297152),
    Q = n(939249),
    X = n(778712),
    Z = n(463930),
    $ = n(834730),
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
    ex = n(375708);
let ep = +eh.A.Millis.DAY;
var eg = n(105530),
    em = n(734057),
    eE = n(488926),
    eC = n(652215),
    ef = n(451394),
    ej = n(710358),
    eN = n(681434);
function eS(e) {
    let { className: t } = e;
    return (0, i.jsx)(ej.A, {
        className: t,
        children: (0, i.jsx)("div", {
            className: eN.T,
            children: (0, i.jsx)(ef.q, {
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
    e_ = n(821182);
let eI = l.memo(function (e) {
        let { toggleRequestToSpeakSidebar: t, chatOpen: n } = e,
            l = (0, i.jsx)(ea.Ay.Icon, { icon: Y.P, tooltip: ex.intl.string(ex.t.cpT0Cq), onClick: t });
        return (0, i.jsxs)(ea.Ay, {
            toolbar: l,
            className: a()(e_.N1, { [e_.X_]: n }),
            children: [
                (0, i.jsx)(ea.Ay.Icon, { icon: W.E, disabled: !0, "aria-label": ex.intl.string(ex.t.TYZgzW) }),
                (0, i.jsx)(ea.Ay.Title, { children: ex.intl.string(ex.t.TYZgzW) }),
            ],
        });
    }),
    ey = l.memo(function (e) {
        let { channel: t, participant: s, tempDisableOnInit: a = !1 } = e,
            r = l.useRef(null),
            [c, d] = l.useState(a);
        (0, x.Ay)(() => {
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
            p = (0, o.bG)([ec.Ay], () => ec.Ay.getMember(u, s.user.id)),
            g = (0, er.gn)(t.guild_id, p?.userId, p?.colorStrings ?? null),
            m = l.useMemo(() => ({ [u]: [s.user.id] }), [u, s.user.id]);
        (0, es.Eq)(m, "RequestToSpeakSidebar");
        let E = s.rtsState === eg.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            C = (e) => {
                (0, ei.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("12697"),
                        n.e("74389"),
                        n.e("26132"),
                        n.e("46652"),
                        n.e("93190"),
                        n.e("8757"),
                        n.e("89673"),
                        n.e("85968"),
                        n.e("60195"),
                        n.e("29787"),
                        n.e("97558"),
                        n.e("94000"),
                        n.e("91994"),
                        n.e("76665"),
                        n.e("24198"),
                        n.e("45996"),
                        n.e("23427"),
                        n.e("49145"),
                        n.e("29422"),
                        n.e("7059"),
                        n.e("43116"),
                        n.e("11617"),
                        n.e("70314"),
                        n.e("70515"),
                        n.e("27435"),
                        n.e("66939"),
                        n.e("17334"),
                        n.e("84841"),
                    ]).then(n.bind(n, 107632));
                    return (n) => (0, i.jsx)(e, { ...n, user: s.user, guildId: u, channel: t, showMediaItems: !0 });
                });
            };
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
                        (0, i.jsxs)(Q.D, {
                            innerRef: r,
                            className: e_.$u,
                            onContextMenu: C,
                            ...e,
                            children: [
                                (0, i.jsx)(el.A, {
                                    size: X._3.SIZE_40,
                                    className: e_.RB,
                                    user: s.user,
                                    isMobile: h,
                                    status: A,
                                }),
                                (0, i.jsxs)("div", {
                                    className: e_.kH,
                                    children: [
                                        (0, i.jsx)(Z.g, {
                                            name: s.userNick,
                                            colorString: p?.colorString ?? null,
                                            colorStrings: g,
                                            className: e_.F8,
                                        }),
                                        (0, i.jsx)($.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: (function (e) {
                                                if ((0, eA.mv)(e.user)) return ex.intl.string(ex.t.VaCdhQ);
                                                let t = e.member?.joinedAt;
                                                return null == t
                                                    ? ex.intl.string(ex.t.CQmzib)
                                                    : null != e.member && e.member.roles.length > 0
                                                      ? (e.role?.name ?? ex.intl.string(ex.t["97/NdO"]))
                                                      : new Date().getTime() - Date.parse(t) < ep
                                                        ? ex.intl.string(ex.t.IKE48n)
                                                        : ex.intl.string(ex.t.u0gUWt);
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
                        (0, i.jsx)(F.m, {
                            text: E ? ex.intl.string(ex.t.h9rsTd) : ex.intl.string(ex.t.f0T7hI),
                            asContainer: !0,
                            children: (0, i.jsx)(J.K, {
                                onClick: function () {
                                    (0, eu.lL)(t, s.user.id, !1);
                                },
                                disabled: E || c,
                                icon: ee.L,
                                variant: "secondary",
                                "aria-label": E ? ex.intl.string(ex.t.h9rsTd) : ex.intl.string(ex.t.f0T7hI),
                            }),
                        }),
                        (0, i.jsx)(F.m, {
                            text: ex.intl.string(ex.t.moABMy),
                            asContainer: !0,
                            children: (0, i.jsx)(J.K, {
                                "aria-label": ex.intl.string(ex.t.moABMy),
                                onClick: function () {
                                    (0, eu.lL)(t, s.user.id, !0);
                                },
                                icon: Y.P,
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
                    n = eE.MJ(eC.xBc.REQUEST_TO_SPEAK, t),
                    [i, s] = l.useState(n);
                return (
                    n !== i && s(n),
                    [
                        i,
                        (e) => {
                            null != t && (s(e), (0, eu.b6)(t, eC.xBc.REQUEST_TO_SPEAK, e));
                        },
                    ]
                );
            })(t.id);
        return (0, i.jsx)(et.d, { label: ex.intl.string(ex.t.GYCh0W), checked: n, onChange: s });
    }),
    eb = l.memo(function () {
        return (0, i.jsxs)("div", {
            className: e_.y7,
            children: [
                (0, i.jsx)(eS, {}),
                (0, i.jsx)($.E, {
                    className: e_.vo,
                    variant: "text-lg/semibold",
                    color: "text-strong",
                    children: ex.intl.string(ex.t["7R24mX"]),
                }),
                (0, i.jsx)($.E, {
                    className: e_.XG,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ex.intl.string(ex.t.Rpr2s0),
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
                              $.E,
                              {
                                  className: e_.Vu,
                                  variant: "text-xs/bold",
                                  color: "text-default",
                                  children:
                                      s.length > 0
                                          ? ex.intl.formatToPlainString(ex.t["5z7q5a"], { numHands: s.length })
                                          : ex.intl.string(ex.t.TYZgzW),
                              },
                              "participants-section",
                          )
                        : null;
                },
            }),
        ],
    });
}
var eR = n(534514),
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
    eB = n(376460);
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
                children: (0, i.jsx)($.E, {
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
                            text: s ? ex.intl.string(ex.t["7vb2cc"]) : ex.intl.string(ex.t.TVBCKZ),
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
    eQ = n(509536),
    eX = n(742589),
    eZ = n(977851),
    e$ = n(174459),
    eJ = n(776781),
    e0 = n(233993),
    e9 = n(835245),
    e1 = n(280056),
    e2 = n(204651),
    e5 = n(489643);
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
            (0, i.jsx)("g", { mask: `url(#${a})`, children: (0, i.jsx)(e1.c, {}) }),
        ],
    });
}
function e7(e) {
    let { className: t, numRequestToSpeak: n } = e,
        l = n > 0;
    return (0, i.jsxs)("div", {
        className: a()(e5.v, t),
        children: [
            (0, i.jsx)(e6, { isBadged: l }),
            l ? (0, i.jsx)($.E, { className: e5.F, variant: "text-xs/semibold", children: n > 99 ? "99+" : n }) : null,
        ],
    });
}
function e3(e) {
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
        label: n ? ex.intl.string(ex.t.gKGz7A) : ex.intl.string(ex.t.ImQ4dW),
        className: s,
        iconComponent: () => (0, i.jsx)(e7, { numRequestToSpeak: a, className: s }),
        ...o,
    });
}
var e4 = n(96566);
function e8(e) {
    let t = (0, o.bG)([m.A], () => m.A.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
        n = (0, V.uy)(e.id),
        i = (0, V.zy)(e.id, z.ip.AUDIENCE),
        l = (0, e4.qT)(e.id),
        s = (0, o.bG)([U.A], () => U.A.getGuild(e.guild_id), [e.guild_id]),
        a = (0, o.bG)([w.A], () => w.A.can(e0.QY, e), [e]),
        r = s?.maxStageVideoChannelUsers ?? 0,
        c = !(null != s && s.features.has(eC.GuildFeatures.COMMUNITY)) && r > eC.uaN;
    return l && !t && a && !c && n + i >= r;
}
var te = n(788868),
    tt = n(322646);
function tn(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: l } = e,
        { analyticsLocations: s, newestAnalyticsLocation: r } = (0, g.Ay)(p.A.VOICE_CHANNEL_HEADER),
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
                      children: (0, i.jsx)(e3, {
                          toggleRequestToSpeakSidebar: () => {
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
        x = A?.maxStageVideoChannelUsers ?? 0,
        p =
            null != A && A.features.has(eC.GuildFeatures.COMMUNITY)
                ? x < eC.p2C
                : A?.premiumTier !== eC.TVA.TIER_3 && x <= eC.nyz,
        g = e8(t),
        m = (0, o.bG)([w.A], () => w.A.can(e0.QY, t)),
        E = () => {
            eY.A.updateStageVideoLimitBoostUpsellDismissed(t.id, !0),
                e$.default.track(eC.HAw.BOOSTING_UPSELL_CLICKED, {
                    guild_id: t.guild_id,
                    type: te.e.VIDEO_STAGE_LIMIT,
                    is_moderator: m,
                    action: te.pd.DISMISS,
                });
        },
        C = { canModerate: m, audienceCount: h, channel: t, speakerCount: d },
        f = l.useRef(C);
    l.useEffect(() => {
        f.current = C;
    }),
        l.useEffect(() => {
            let { canModerate: e, audienceCount: t, channel: n, speakerCount: i } = f.current;
            g &&
                e$.default.track(eC.HAw.BOOSTING_UPSELL_VIEWED, {
                    guild_id: n.guild_id,
                    type: te.e.VIDEO_STAGE_LIMIT,
                    is_moderator: e,
                    listener_count: i + t,
                });
        }, [g]);
    let j = (0, i.jsx)(u.N, {
        theme: eC.NJ8.DARK,
        children: (e) =>
            (0, i.jsxs)(ea.Ay, {
                toolbar: (0, i.jsx)(tn, { toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: s, channel: t }),
                onDoubleClick: eX.I,
                transparent: !0,
                className: a()(e, tt.lF),
                children: [
                    (0, i.jsx)(ea.Ay.Icon, {
                        icon: ef.q,
                        disabled: !0,
                        "aria-label": ex.intl.string(ex.t.EErMzA),
                        className: tt.Kk,
                        color: null != c ? eK.A.colors.TEXT_MUTED.css : void 0,
                    }),
                    (0, i.jsx)(ea.Ay.Title, { className: tt.HA, wrapperClassName: tt.KD, children: c?.topic ?? r }),
                    (0, i.jsx)(ea.Ay.Divider, { className: tt.yF }),
                    (0, i.jsxs)(ea.Ay.Title, {
                        children: [
                            (0, i.jsx)(eH.c, { size: "xs", color: eK.A.colors.TEXT_MUTED.css }),
                            (0, i.jsx)($.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: tt.N_,
                                children: ex.intl.format(ex.t.chmM9N, { count: d }),
                            }),
                            (0, i.jsx)(eF.n, { size: "xs", className: tt.Kk, color: "currentColor" }),
                            (0, i.jsx)($.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: tt.N_,
                                children: ex.intl.format(ex.t["+v2pN2"], { count: h }),
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
                                  (0, i.jsx)($.E, {
                                      variant: "text-md/medium",
                                      color: "text-strong",
                                      children: p ? ex.intl.string(ex.t["T+zF9M"]) : ex.intl.string(ex.t["IZ+SVv"]),
                                  }),
                                  (0, i.jsx)($.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: p ? ex.intl.string(ex.t.Izgpmv) : ex.intl.string(ex.t["7FHbPG"]),
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: tt.Uo,
                              children: p
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(eL.$, {
                                                onClick: E,
                                                size: "sm",
                                                variant: "secondary",
                                                text: ex.intl.string(ex.t.L5eIZ2),
                                            }),
                                            (0, i.jsx)(eL.$, {
                                                variant: "expressive",
                                                onClick: () => {
                                                    (0, eQ.K4)({
                                                        guildId: t.guild_id,
                                                        location: { section: eC.JJy.STAGE_VIDEO_LIMIT },
                                                    }),
                                                        e$.default.track(eC.HAw.BOOSTING_UPSELL_CLICKED, {
                                                            guild_id: t.guild_id,
                                                            type: te.e.VIDEO_STAGE_LIMIT,
                                                            is_moderator: m,
                                                            action: te.pd.BOOST,
                                                        });
                                                },
                                                size: "sm",
                                                text: ex.intl.string(ex.t.Uj0md3),
                                            }),
                                        ],
                                    })
                                  : (0, i.jsx)(eL.$, {
                                        variant: "primary",
                                        onClick: E,
                                        size: "sm",
                                        text: ex.intl.string(ex.t.WAI6xu),
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
    tx = n(480890),
    tp = n(562153),
    tg = n(806931),
    tm = n(394552);
let tE = l.memo(function (e) {
        let { guildId: t, channelId: n, user: l, isPremium: s, isBlocked: a, isIgnored: r } = e;
        return (0, i.jsxs)("div", {
            className: tm.FS,
            children: [
                a ? (0, i.jsx)(td.K, { size: "lg", className: tm.Q6, color: eK.A.unsafe_rawColors.RED_400.css }) : null,
                r ? (0, i.jsx)(tu.G, { size: "lg", className: tm.Q6 }) : null,
                (0, i.jsx)($.E, {
                    className: tm.Qq,
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: tp.Ay.getName(t, n, l),
                }),
                s ? (0, i.jsx)(th._, { className: tm.EH, color: eK.A.unsafe_rawColors.GUILD_BOOSTING_PINK }) : null,
            ],
        });
    }),
    tC = l.memo(function (e) {
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
                            (0, i.jsx)(W.E, {
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
                (0, i.jsx)(tE, { guildId: n, channelId: l.id, user: r, isPremium: s, isBlocked: o, isIgnored: c }),
            ],
        });
    }),
    tf = () => (0, i.jsx)("div", { className: tm.j8 }),
    tj = l.memo(function (e) {
        let { participant: t, channel: s } = e,
            { user: r, blocked: c } = t,
            d = s.getGuildId(),
            u = L.default.getId(),
            { newestAnalyticsLocation: h } = (0, g.Ay)(p.A.AUDIENCE_TILE),
            A = (0, N.Us)(),
            x = (0, o.bG)([ec.Ay], () => null != d && ec.Ay.getMember(d, r.id)?.premiumSince != null, [d, r.id]),
            m = l.useRef(null);
        H()(null != d, "Channel cannot be guildless");
        let E = l.useCallback(
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
                                n.e("12697"),
                                n.e("74389"),
                                n.e("26132"),
                                n.e("46652"),
                                n.e("93190"),
                                n.e("8757"),
                                n.e("89673"),
                                n.e("85968"),
                                n.e("60195"),
                                n.e("29787"),
                                n.e("97558"),
                                n.e("94000"),
                                n.e("91994"),
                                n.e("76665"),
                                n.e("24198"),
                                n.e("45996"),
                                n.e("23427"),
                                n.e("49145"),
                                n.e("29422"),
                                n.e("7059"),
                                n.e("43116"),
                                n.e("11617"),
                                n.e("70314"),
                                n.e("70515"),
                                n.e("27435"),
                                n.e("66939"),
                                n.e("17334"),
                                n.e("84841"),
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
                (0, i.jsx)(Q.D, {
                    innerRef: m,
                    className: a()(tm.iA, { [tm.wP]: x || c, [tm.fP]: x && c }),
                    onContextMenu: E,
                    ...e,
                    children: (0, i.jsx)(tC, { participant: t, guildId: d, channel: s, isPremium: x }),
                }),
        });
    });
var tN = n(444830);
let tS = l.memo(function (e) {
    let { channel: t, participants: n, maxTiles: l } = e;
    if (0 === n.length) return null;
    let s = [];
    for (let e = 0; e < l; e++)
        if (e < n.length) {
            let l = n[e];
            s.push((0, i.jsx)(tj, { channel: t, participant: l }, l.id));
        } else s.push((0, i.jsx)(tf, {}, e));
    return (0, i.jsx)("div", { className: tN.l, children: s });
});
var tT = n(446837),
    t_ = n(201001),
    tI = n(936589);
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
    tG = n(235058),
    tD = n(636359);
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
var tq = n(353256);
let tK = () =>
    (0, i.jsx)(F.m, {
        text: ex.intl.string(ex.t.GMZqSi),
        children: (0, i.jsx)("div", {
            className: tq.k,
            children: (0, i.jsx)(tB, { color: eK.A.unsafe_rawColors.WHITE.css }),
        }),
    });
var tH = n(578758);
let tF = 16 / 9,
    tY = (e) => {
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
            { blocked: x, ignored: p, id: g } = t;
        return (0, i.jsx)(eo.A, {
            targetElementRef: h,
            user: r,
            guildId: a,
            channelId: s.id,
            clickTrap: !0,
            children: (e) =>
                (0, i.jsx)(Q.D, {
                    innerRef: h,
                    onContextMenu: (e) => d(n, e),
                    ...e,
                    children: (0, i.jsx)(
                        tV,
                        {
                            participant: n,
                            aspectRatio: tF,
                            blocked: x,
                            ignored: p,
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
    },
    tW = (e) => {
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
            { id: h, blocked: A, ignored: x } = t,
            p = (0, o.yK)([tw.A], () => tw.A.getAllActiveStreams(), []),
            { selectedParticipant: g, largeStream: E } = (0, o.cf)([m.A], () => ({
                selectedParticipant: null != s ? m.A.getSelectedParticipant(s.id) : null,
                largeStream: null != s && m.A.getStageStreamSize(s.id),
            })),
            C = l.useCallback(
                (e, t) => {
                    if (
                        e.type === tg.lp.STREAM &&
                        0 === p.filter((t) => (0, tR._z)(t) === e.id && t.state !== eC.XYD.ENDED).length
                    ) {
                        if (!(0, tL.eo)(s, tM.A, U.A, w.A, tO.default)[0]) return;
                        (0, tb.A9)((0, tR.Iy)(e.id), { forceMultiple: t.shiftKey });
                    }
                    g?.id === e.id
                        ? E
                            ? (eY.A.selectParticipant(s.id, null), eY.A.updateStageStreamSize(s.id, !1))
                            : eY.A.updateStageStreamSize(s.id, !0)
                        : (eY.A.updateStageStreamSize(s.id, !1), eY.A.selectParticipant(s.id, e.id));
                },
                [p, s, g, E],
            );
        return (0, i.jsx)(
            tV,
            {
                participant: n,
                aspectRatio: tF,
                fit: n.type === tg.lp.USER ? tP.$.COVER : void 0,
                blocked: A,
                ignored: x,
                channel: s,
                className: tH.V,
                inCall: !0,
                popoutType: d,
                onClick: C,
                onContextMenu: c,
                pulseSpeakingIndicator: !u.enabled,
                width: a,
                children: r && n.type === tg.lp.USER && (0, i.jsx)(tK, {}),
            },
            h,
        );
    },
    tQ = l.memo(function (e) {
        let { participant: t, channel: l, width: s, popoutType: a } = e,
            { newestAnalyticsLocation: r } = (0, g.Ay)(p.A.STAGE_TILE),
            c = (0, N.Us)(),
            d = l.getGuildId(),
            u = L.default.getId();
        H()(null != d, "Channel cannot be guildless");
        let { user: h } = t,
            A = (0, o.bG)([m.A], () => m.A.getParticipant(l.id, t.id), [l.id, t.id]),
            x = (0, o.bG)([tk.Ay], () => tk.Ay.isModerator(h.id, l.id), [l.id, h.id]);
        if (null == A || A.type === tg.lp.ACTIVITY) return null;
        let E = (e) => {
                (0, tA.x)({
                    type: tc.ImpressionTypes.MENU,
                    name: tc.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: { location: "StageTile", is_tile_owner: h.id === u, tile_type: e },
                });
            },
            C = (e, t, s, a) => {
                switch (e.type) {
                    case tg.lp.HIDDEN_STREAM:
                    case tg.lp.STREAM:
                        E(tg.qs.STREAM),
                            (0, ei.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("89673"),
                                        n.e("45996"),
                                        n.e("29422"),
                                        n.e("58315"),
                                        n.e("66692"),
                                    ]).then(n.bind(n, 796175));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            stream: e.stream,
                                            appContext: c,
                                            exitFullscreen: () => {},
                                            onInteraction: (0, tx.s)("StreamContextMenu", r, {
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
                        if ((E(tg.qs.USER), s))
                            return (0, tU.r)(t, h, l, { context: c }, (e, t) =>
                                (0, tx.Y)({
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
                                    n.e("12697"),
                                    n.e("74389"),
                                    n.e("26132"),
                                    n.e("46652"),
                                    n.e("93190"),
                                    n.e("8757"),
                                    n.e("89673"),
                                    n.e("85968"),
                                    n.e("60195"),
                                    n.e("29787"),
                                    n.e("97558"),
                                    n.e("94000"),
                                    n.e("91994"),
                                    n.e("76665"),
                                    n.e("24198"),
                                    n.e("45996"),
                                    n.e("23427"),
                                    n.e("49145"),
                                    n.e("29422"),
                                    n.e("7059"),
                                    n.e("43116"),
                                    n.e("11617"),
                                    n.e("70314"),
                                    n.e("70515"),
                                    n.e("27435"),
                                    n.e("66939"),
                                    n.e("17334"),
                                    n.e("84841"),
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
                                            tileType: tg.qs.USER,
                                        }),
                                    });
                            },
                            { context: c },
                        );
                }
            };
        return A.type !== tg.lp.USER || A.voiceState?.selfVideo
            ? (0, i.jsx)(tW, {
                  stageParticipant: t,
                  rtcParticipant: A,
                  channel: l,
                  guildId: d,
                  user: h,
                  width: s,
                  isModerator: x,
                  onContextMenu: C,
                  popoutType: a,
              })
            : (0, i.jsx)(tY, {
                  stageParticipant: t,
                  rtcParticipant: A,
                  channel: l,
                  guildId: d,
                  user: h,
                  width: s,
                  isModerator: x,
                  onContextMenu: C,
                  popoutType: a,
              });
    });
var tX = n(210548);
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
    t9 = n(717558),
    t1 = n(636585),
    t2 = n(486020),
    t5 = n(711865);
function t6(e) {
    let { channel: t, speaker: s, className: r } = e,
        o = l.useRef(null),
        { newestAnalyticsLocation: c } = (0, g.Ay)(),
        d = (0, N.Us)(),
        { reducedMotion: u } = l.useContext(tv.C),
        h = (0, t9.A)({ userId: s.id }),
        A = null != s.member ? (0, t2.xT)(s.member) : null,
        x = (e) => {
            (0, ei.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("12697"),
                        n.e("74389"),
                        n.e("26132"),
                        n.e("46652"),
                        n.e("93190"),
                        n.e("8757"),
                        n.e("89673"),
                        n.e("85968"),
                        n.e("60195"),
                        n.e("29787"),
                        n.e("97558"),
                        n.e("94000"),
                        n.e("91994"),
                        n.e("76665"),
                        n.e("24198"),
                        n.e("45996"),
                        n.e("23427"),
                        n.e("49145"),
                        n.e("29422"),
                        n.e("7059"),
                        n.e("43116"),
                        n.e("11617"),
                        n.e("70314"),
                        n.e("70515"),
                        n.e("27435"),
                        n.e("66939"),
                        n.e("17334"),
                        n.e("84841"),
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
        };
    return (0, i.jsx)(eo.A, {
        targetElementRef: o,
        user: s.user,
        guildId: t.guild_id,
        channelId: t.id,
        clickTrap: !0,
        children: (e) =>
            (0, i.jsx)(F.m, {
                targetElementRef: o,
                __unsupportedReactNodeAsText: s.userNick,
                position: "bottom",
                children: (0, i.jsx)(Q.D, {
                    ...e,
                    innerRef: o,
                    onClick: (t) => {
                        t.stopPropagation(), e.onClick(t);
                    },
                    onContextMenu: x,
                    children: (0, i.jsx)(t0.eu, {
                        src: A ?? s.user.getAvatarURL(t.guild_id, 24),
                        size: X._3.SIZE_24,
                        className: a()(t5.my, r),
                        "aria-label": s.userNick,
                        isSpeaking: h && !u.enabled,
                    }),
                }),
            }),
    });
}
function t7(e) {
    let { speakers: t, channel: n } = e;
    return (0, i.jsx)(t1.A, {
        className: t5.z,
        guildId: n.guild_id,
        users: t,
        max: 10,
        renderUser: (e, t, l) => (0, i.jsx)(t6, { channel: n, speaker: e, className: t }, l),
        renderMoreUsers: (e, t, n) => (0, i.jsx)("div", { className: a()(t5.$U, t), children: e }, n),
    });
}
var t3 = n(947790);
let t4 = l.memo(function (e) {
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
    return (0, i.jsxs)(Q.D, {
        onClick: l,
        className: a()(t3.kL, s),
        children: [
            null == o
                ? (0, i.jsx)(eF.n, { size: "custom", color: "currentColor", width: 20, height: 20, className: t3.Vo })
                : (0, i.jsx)(eH.c, { size: "custom", color: "currentColor", width: 20, height: 20, className: t3.Vo }),
            (0, i.jsxs)($.E, {
                color: "text-strong",
                variant: "text-md/semibold",
                className: t3.Qq,
                children: [t, " \u2014 ", n],
            }),
            r &&
                null != c &&
                null != o &&
                o.length > 0 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(t7, { channel: c, speakers: o }), d && (0, i.jsx)(tJ.Ay, {})],
                }),
            (0, i.jsx)(t$.a, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: a()(t3.mw, { [t3.VU]: r }),
            }),
        ],
    });
});
var t8 = n(639622);
function ne(e) {
    return e.type === z.wY.VOICE;
}
let nt = (0, ts.A)((e) => {
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
        x = (0, V.uy)(s.id),
        p = (0, V.zy)(s.id, z.ip.AUDIENCE),
        g = (0, o.bG)([ta.A], () => (null != u ? ta.A.getParticipant(s.id, u) : null)),
        E = (0, V.E5)(s.id, z.ip.SPEAKER),
        C = E.filter(ne),
        f = null != E.find((e) => e.type === z.wY.STREAM),
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
                        let d = (e, t, i) => {
                                let a = i ? e.filter((e, t) => e.id !== s && t > o) : e,
                                    c = (0, r.chunk)(a, t);
                                l.push(c), n.push(c.length);
                            },
                            u = null != s ? ta.A.getParticipant(e, s) : null;
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
        O = h ? a - 32 : Math.min(a - 64, 3 * v + 8),
        R = (e) => e === _.length - 1 || (0 === p && 1 === e),
        [L, P] = l.useState(!1),
        [U, w] = l.useState(!1);
    return (0, i.jsx)(ty, {
        sections: y,
        renderSection: (e) => {
            let { section: t } = e;
            return 1 === t
                ? 0 === x
                    ? null
                    : (0, i.jsx)(
                          t4,
                          {
                              participantCount: x,
                              label: ex.intl.string(ex.t.CduOkx),
                              className: t8.wx,
                              onClick: () => P(!L),
                              collapsed: L,
                              speakers: C,
                              channel: s,
                              isStreamLive: f,
                          },
                          `speaker-header-${t}`,
                      )
                : 2 === t
                  ? 0 === p
                      ? null
                      : (0, i.jsx)(
                            t4,
                            {
                                participantCount: p,
                                label: ex.intl.string(ex.t["3foUu5"]),
                                className: t8.wx,
                                onClick: () => w(!U),
                                collapsed: U,
                                channel: s,
                            },
                            `audience-header-${t}`,
                        )
                  : null;
        },
        sectionHeight: (e) => 48,
        renderRow: (e) => {
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
        rowHeight: (e) => (null == I[e][0] ? 0 : 0 === e ? O / tF + 8 : 1 === e ? (L ? 0 : b) : 98 * !U),
        renderFooter: (e) => {
            let { section: t } = e;
            return R(t) ? (0, i.jsx)("div", { className: t8.jH }, "bottom-spacer") : null;
        },
        footerHeight: (e) => (1 === e ? 8 : 0 === e ? 12 : 88 * !!R(e)),
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
    nA = n(139716),
    nx = n(847599),
    np = n(385318),
    ng = n(329072),
    nm = n(183184),
    nE = n(880144),
    nC = n(698441),
    nf = n(394412),
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
              icon: (0, i.jsx)(ef.q, { size: "custom", color: "currentColor", height: 20, width: 20 }),
              color: eK.A.unsafe_rawColors.GREEN_360.css,
              title: ex.intl.string(ex.t.OYbHfv),
              description: ex.intl.string(ex.t.yXwLMQ),
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
                    ? nA.A.showAgeVerificationGetStartedModal({ entryPoint: nx.q1.STAGE_CHANNEL_RAISE_HAND })
                    : (n === eg.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, eu.e7)(e, !0) : (0, eu.J7)(e, !s),
                      a(!s));
            },
        ]
    );
}
var nH = n(515354),
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
        [A, x] = (0, nh.V)("age-verification-stage-popover-dismissed", !1),
        p = l.useContext(I.vG);
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
                          ? ex.intl.string(ex.t.NzITVo)
                          : e
                            ? ex.intl.string(ex.t.GCimTk)
                            : t
                              ? ex.intl.string(ex.t.hLbG5N)
                              : ex.intl.string(ex.t.e4WMvx);
                })(a, c, d, u, A),
                iconComponent: d ? ni._ : W.E,
                onClick: () => {
                    (0, j.X)(n, j.O.REQUEST_TO_SPEAK, !a),
                        x(!0),
                        d
                            ? nA.A.showAgeVerificationGetStartedModal({ entryPoint: nx.q1.STAGE_CHANNEL_RAISE_HAND })
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
                    title: ex.intl.string(ex.t.zvubnM),
                    body: ex.intl.string(ex.t["/wx+J2"]),
                    shouldShow: !p,
                    actions: [
                        {
                            text: ex.intl.string(ex.t.KXVgjt),
                            onClick: () => {
                                nA.A.showAgeVerificationGetStartedModal({
                                    entryPoint: nx.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT,
                                }),
                                    x(!0);
                            },
                        },
                    ],
                    onRequestClose: () => x(!0),
                }),
        ],
    });
}
let nW = l.memo(function (e) {
    let { channel: t } = e,
        n = (0, o.bG)([M.A], () => M.A.getVoiceChannelId() === t.id, [t.id]);
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
        onClick: () => {
            ((0, j.X)(n, j.O.SPEAK_ON_STAGE), l)
                ? nA.A.showAgeVerificationGetStartedModal({ entryPoint: nx.q1.STAGE_CHANNEL_RAISE_HAND })
                : (0, eu.e7)(t, !1);
        },
        iconComponent: l ? nl.O : ee.L,
        label: ex.intl.string(l ? ex.t.NzITVo : ex.t["8Joh+p"]),
    });
}
function nX(e) {
    let { channel: t, onSelect: n } = e,
        s = (0, N.Us)(),
        { canManageGuildEvent: a } = (0, n_.nr)(t),
        r = (0, o.bG)([B.A], () => B.A.getStageInstanceByChannel(t.id), [t.id]),
        c = (0, o.bG)([nC.Ay], () => nC.Ay.getGuildScheduledEvent(r?.guild_scheduled_event_id)),
        { suppress: d } = (0, nb.A)(t),
        u = L.default.getId(),
        [h] = nK(t),
        A = tk.Ay.isModerator(u, t.id),
        x = (0, eJ.Ni)(t.id),
        m = a(c),
        { parentAnalyticsLocation: E } = (0, g.Ay)(),
        C = l.useRef(null),
        f = () =>
            (function (e) {
                let { channel: t, appContext: n } = e;
                ((0, j.X)(p.A.VOICE_CONTROL_TRAY, j.O.DISCONNECT), (0, nz.A)(t))
                    ? (0, nj.j3)(t, n)
                    : eP.default.disconnect();
            })({ channel: t, appContext: s });
    return (A || m) && null != r
        ? (0, i.jsx)(ns.Y, {
              targetElementRef: C,
              renderPopout: (e) => {
                  let { closePopout: l } = e;
                  return (0, i.jsx)(nP.A, {
                      children: (0, i.jsx)(na.W, {
                          "data-menu-migrated": !0,
                          navId: "exit-options",
                          "aria-label": ex.intl.string(ex.t["3Uj+2p"]),
                          onClose: l,
                          onSelect: n,
                          onInteraction: (0, tx.s)("End Stage", E, { entrypoint: tg.GK.CARET }),
                          children: (0, i.jsx)(nr.Dr, {
                              id: "end-stage",
                              color: "danger",
                              action: () => (0, nj.$q)(t, s),
                              label: ex.intl.string(ex.t["Fmx5y/"]),
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
                      ref: C,
                      label: ex.intl.string(ex.t.c6qKwr),
                      onClick: f,
                      onPopoutClick: n,
                      popoutOpen: l,
                  });
              },
          })
        : (d && !x) || h
          ? (0, i.jsx)(nU.A, { label: ex.intl.string(ex.t.SMKyih), onClick: f })
          : (0, i.jsx)(nU.A, { label: ex.intl.string(ex.t.c6qKwr), onClick: f });
}
function nZ(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, g.Ay)();
    return (0, i.jsx)(e2.l, {
        isTrayButton: !0,
        iconComponent: nc.U,
        label: ex.intl.string(ex.t.ezLpY6),
        onClick: () => {
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
              label: l ? ex.intl.string(ex.t.ScHlfl) : ex.intl.string(ex.t.zqxfrf),
              iconComponent: l ? nd.C : nu.T,
              color: l ? void 0 : "green",
              onClick: () => {
                  (0, j.X)(n, j.O.STAGE_MUSIC, l), (0, nG.k)(!l);
              },
          })
        : (0, i.jsx)(e2.l, {
              isTrayButton: !0,
              isActive: a,
              label: a ? ex.intl.string(ex.t.zqxfrf) : ex.intl.string(ex.t.ScHlfl),
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
        { limit: x, reachedLimit: p } = (0, ny.A)(t),
        E = (0, o.bG)([nk.default], () => nk.default.getCurrentUser()),
        C = (0, o.bG)([tG.Ay], () => (0, nE.A)(tG.Ay)),
        f = (0, o.bG)([M.A], () => M.A.getVoiceChannelId() === t.id, [t.id]),
        j = (0, o.bG)([m.A], () => m.A.getStreamParticipants(t.id)[0], [t.id]),
        N = (0, e4.qT)(t.id),
        S = x > 0,
        T = (p && !N) || (null != j && j.user.id !== E?.id),
        _ = (0, tx.s)("AudioDeviceMenu", n, { entrypoint: tg.GK.CARET }),
        I = l.useRef(null),
        y = l.useRef(null);
    if (null == E) return null;
    let v = (0, i.jsx)(ns.Y, {
        targetElementRef: I,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(nP.A, {
                children: (0, i.jsx)(ng.A, {
                    onClose: t,
                    minimal: !0,
                    onInteraction: (0, tx.s)("VideoDeviceMenu", n, { entrypoint: tg.GK.CARET }),
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
                channelLimitReached: p,
                channelLimit: x,
                popoutOpen: l,
                onPopoutClick: n,
            });
        },
    });
    return (0, i.jsxs)("div", {
        className: nH.iE,
        children: [
            f && !s
                ? (0, i.jsxs)("div", {
                      className: nH.qi,
                      children: [
                          (0, i.jsx)(ns.Y, {
                              targetElementRef: y,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, i.jsx)(nP.A, {
                                      children: (0, i.jsx)(np.default, {
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
                    f && !s && S
                        ? (0, i.jsx)(nO.rP, {
                              channel: t,
                              currentUser: E,
                              exitFullScreen: () => null,
                              canGoLive: C,
                              hasPermission: A,
                              disabled: T,
                          })
                        : null,
                    (0, i.jsx)(n$, { channelId: t.id }),
                    f && (0, i.jsx)(nY, { channel: t }),
                    f && c && s && (0, i.jsx)(nQ, { channel: t }),
                    f && !s && (0, i.jsx)(nZ, { channel: t }),
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
let n9 = l.memo(function (e) {
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
                            u ? (0, i.jsx)(nf.A, { channelId: t?.id }) : null,
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
var n1 = n(520006);
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
        x = (0, o.bG)([nC.Ay], () => nC.Ay.getActiveEventByChannel(h), [h]);
    if (!(null != A && null != l && w.A.can(eC.xBc.CREATE_INSTANT_INVITE, l))) return null;
    let p = ex.intl.string(ex.t.VINpSK);
    return (
        null != t ? (p = ex.intl.string(ex.t["6VQaqd"])) : null != n && (p = ex.intl.string(ex.t["OzOM/q"])),
        (0, i.jsx)("div", {
            className: c,
            children: (0, i.jsx)(eL.$, {
                size: d,
                variant: "secondary",
                text: p,
                onClick: () => {
                    H()(null != A, "guild cannot be null"),
                        H()(null != l, "channel cannot be null"),
                        (0, n1.X)({
                            guild: A,
                            channel: l,
                            streamUserId: t?.ownerId,
                            applicationId: n,
                            appContext: a,
                            exitFullScreen: s,
                            analyticsLocation: r,
                            guildScheduledEvent: x,
                            source: eC.PE1.STAGE_CHANNEL,
                        });
                },
            }),
        })
    );
}
var n5 = n(104171),
    n6 = n(81466),
    n7 = n(823508);
function n3(e) {
    let { className: t, guildId: l } = e,
        s = (0, n7.A)();
    return (0, i.jsx)(nS.A, {
        className: t,
        icon: (0, i.jsx)(n6.C, { size: "custom", color: "currentColor", height: 20, width: 20 }),
        color: eK.A.unsafe_rawColors.BRAND_500.css,
        title: ex.intl.string(ex.t["60lJ0C"]),
        description: ex.intl.string(ex.t["EYn7/y"]),
        onClick: function () {
            (0, d.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("39666"),
                    n.e("79924"),
                    n.e("43908"),
                    n.e("19675"),
                    n.e("74389"),
                    n.e("59957"),
                    n.e("28136"),
                    n.e("16084"),
                    n.e("10262"),
                    n.e("71329"),
                    n.e("70644"),
                    n.e("52695"),
                    n.e("49347"),
                    n.e("53934"),
                    n.e("68248"),
                    n.e("70089"),
                    n.e("70160"),
                    n.e("69647"),
                    n.e("54450"),
                    n.e("60423"),
                ]).then(n.bind(n, 729398));
                return (t) => (0, i.jsx)(e, { ...t, guildId: l });
            }, s);
        },
    });
}
var n4 = n(601964);
function n8(e) {
    let { onClick: t, className: n } = e,
        l = eH.c;
    return (0, i.jsx)(nS.A, {
        iconContainerClassName: a()({ [n4.q8]: !1 }),
        icon: (0, i.jsx)(l, { size: "custom", color: "currentColor", className: n4.Pz, height: 20, width: 20 }),
        color: eK.A.unsafe_rawColors.PRIMARY_700.css,
        title: ex.intl.string(ex.t["jMLfp/"]),
        description: ex.intl.string(ex.t["Vd/rEX"]),
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
        className: n4.P1,
        children: [
            (0, i.jsx)(n5.Ay, { className: n4.Ip, guildId: t.guild_id, users: l, size: n5.DN.SIZE_16 }),
            (0, i.jsx)($.E, {
                variant: "text-sm/normal",
                color: "text-default",
                children: (function (e) {
                    if (0 === e.length) return "";
                    if (1 === e.length) return ex.intl.formatToPlainString(ex.t["5ULgaQ"], { first: e[0].userNick });
                    if (2 === e.length)
                        return ex.intl.formatToPlainString(ex.t.BHK0Op, {
                            first: e[0].userNick,
                            second: e[1].userNick,
                        });
                    let t = e.length - 2;
                    return ex.intl.formatToPlainString(ex.t.T3MT4n, {
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
        className: n4.kL,
        ref: u,
        children: [
            (0, i.jsx)(eD.A, { eventTargetRef: u }),
            (0, i.jsxs)("div", {
                className: n4.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: n4.N1,
                        children: [
                            (0, i.jsx)(eR.D, {
                                className: n4.__invalid_title,
                                variant: "heading-xxl/normal",
                                children: ex.intl.string(ex.t.QGnDLs),
                            }),
                            (0, i.jsx)($.E, {
                                tag: "div",
                                className: n4.VA,
                                variant: "heading-lg/normal",
                                children: ex.intl.string(ex.t.djfK36),
                            }),
                        ],
                    }),
                    d ? null : (0, i.jsx)(nf.A, { channelId: t.id, showDismiss: !1 }),
                    s ? (0, i.jsx)(nT, { className: n4.fN, channel: t }) : null,
                    c ? (0, i.jsx)(n3, { className: n4.fN, guildId: r }) : null,
                    s ? (0, i.jsx)(n8, { className: a()({ [n4.fN]: !0 }), onClick: n }) : null,
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
    ir = n(678671);
let io = "HasBeenInStageChannel",
    ic = (e) => {
        (0, j.X)(p.A.VOICE_CONTROL_TRAY, j.O.STAY_ON_TOP, e), S.setAlwaysOnTop(eC.MLl.CHANNEL_CALL_POPOUT, e);
    };
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
        A = (0, o.bG)([M.A], () => M.A.getMostRecentSelectedTextChannelId(u), [u]),
        x = L.default.getId(),
        p =
            !(0, o.bG)([m.A], () => m.A.isFullscreenInContext(n)) &&
            (!k.isPlatformEmbedded || G.Ay.supportsFeature(eC.BYE.POPOUT_WINDOWS)),
        C = null != c && c.type !== tg.lp.ACTIVITY && c.user.id !== x,
        f = l.useMemo(() => a?.window ?? window, [a]),
        N = (function (e) {
            let { channel: t, appContext: n, popoutOpen: s, popoutWindow: a, currentWindow: r } = e,
                { parentAnalyticsLocation: c } = (0, g.Ay)(),
                d = n === eC.BRT.POPOUT,
                u = l.useRef(null),
                { currentLayout: A, mode: x } = (0, o.cf)([m.A], () => {
                    let e = m.A.getMode(t.id),
                        i = n === eC.BRT.POPOUT;
                    i && (e = eC._Of.VIDEO);
                    let l = e === eC._Of.VIDEO ? m.A.getLayout(t.id, n) : eC.DUB.MINIMUM;
                    return i && l !== eC.DUB.FULL_SCREEN && (l = eC.DUB.NO_CHAT), { currentLayout: l, mode: e };
                }, [t, n]),
                p = (0, o.bG)([M.A], () => M.A.getVoiceChannelId() === t.id, [t.id]);
            l.useEffect(() => {
                u.current = x;
            });
            let E = l.useRef(A),
                { currentDocument: C, rootNode: f } = l.useMemo(() => {
                    let e = null != a && d ? a.document : document,
                        t = r.document.getElementById("app-mount");
                    return { currentWindow: r, currentDocument: e, rootNode: t };
                }, [a, d, r]),
                N = s && !d,
                T = x === eC._Of.VIDEO && p && !N,
                _ = l.useCallback(
                    (e, i) => {
                        i !== e &&
                            (eY.A.updateLayout(t.id, i, n),
                            i === eC.DUB.FULL_SCREEN && t.isPrivate() && is._.dispatch(eC.jej.TEXTAREA_BLUR));
                    },
                    [n, t],
                ),
                I = l.useCallback(
                    (e) => {
                        null == f ||
                            (e === eC.DUB.FULL_SCREEN &&
                                (_(e, E.current),
                                (0, ia.sP)((e) => {
                                    E.current = e;
                                }, C)));
                    },
                    [C, _, f],
                ),
                y = l.useCallback(
                    (e) => () => {
                        null != f &&
                            ((0, j.X)(c, j.O.FULL_SCREEN, e !== eC.DUB.FULL_SCREEN),
                            e !== eC.DUB.FULL_SCREEN
                                ? ((E.current = e), _(e, eC.DUB.FULL_SCREEN), (0, ia.tl)(f))
                                : I(e));
                    },
                    [_, I, f, c],
                );
            l.useEffect(() => {
                let e = () => {
                    null != f && ((0, ia._U)(f, C) || A !== eC.DUB.FULL_SCREEN || y(A)());
                };
                return (
                    C.addEventListener(ia.Wb, e),
                    () => {
                        C.removeEventListener(ia.Wb, e);
                    }
                );
            }, [C, A, y, f]);
            let v = { channel: t, maybeLeaveFullScreen: I },
                b = l.useRef(v);
            return (l.useEffect(() => {
                b.current = v;
            }),
            l.useEffect(() => {
                let { channel: e, maybeLeaveFullScreen: t } = b.current;
                return (
                    e$.default.track(eC.HAw.VIDEO_LAYOUT_TOGGLED, {
                        video_layout: d ? "popout" : A,
                        ...(0, ii.QS)(e.id),
                    }),
                    () => {
                        (d && (0, k.isMac)()) || t(A);
                    }
                );
            }, [A, d]),
            l.useEffect(() => {
                null != f && u.current === eC._Of.VIDEO && x === eC._Of.VOICE && (0, ia.sP)(f, C);
            }, [C, x, u, f]),
            l.useEffect(() => {
                !p && d && h.h.wait(() => S.close(eC.MLl.CHANNEL_CALL_POPOUT));
            }, [p, d]),
            T)
                ? (0, i.jsx)(il.A, { themeable: !1, node: f, guestWindow: a, onClick: y(A) })
                : null;
        })({ channel: t, appContext: n, popoutOpen: s, popoutWindow: a, currentWindow: f }),
        T = n === eC.BRT.POPOUT && k.isPlatformEmbedded && G.Ay.supportsFeature(eC.BYE.POPOUT_WINDOWS);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            C
                ? (0, i.jsx)(R.A, {
                      context: (0, E.A)(c.type),
                      userId: c.user.id,
                      currentWindow: f,
                      sliderClassName: ir.MQ,
                      location: d,
                  })
                : null,
            T ? (0, i.jsx)(O.A, { popoutWindowAlwaysOnTop: r, onToggleStayOnTop: ic }) : null,
            p
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
                          (0, j.X)(d, j.O.POPOUT, !1), h.h.wait(() => S.close(eC.MLl.CHANNEL_CALL_POPOUT));
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
        l = (0, o.bG)([w.A], () => w.A.can(eC.xBc.CREATE_INSTANT_INVITE, t)),
        s = (0, o.bG)([U.A], () => U.A.getGuild(t.guild_id)),
        a = (0, o.bG)([B.A], () => B.A.getStageInstanceByChannel(t.id)),
        r = l || a?.invite_code != null;
    return null != s && r
        ? (0, i.jsx)(n2, { size: "md", channel: t, appContext: n, analyticsLocation: eC.liQ.GUILD_CHANNEL })
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
            chatOpen: x,
            idleProps: E,
        } = e,
        { analyticsLocations: f } = (0, g.Ay)(p.A.VOICE_CONTROL_TRAY),
        j = (0, N.Us)(),
        S = (0, o.bG)([M.A], () => M.A.getVoiceChannelId() === n.id, [n.id]),
        T = (0, o.bG)([w.A], () => w.A.can(eC.xBc.CONNECT, n)),
        _ = (0, V.E5)(n.id, z.ip.SPEAKER),
        I = (0, o.bG)([m.A], () => m.A.getSelectedParticipant(n.id)),
        b = h && j !== eC.BRT.POPOUT,
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
                    ? (0, i.jsx)(g.f5, { value: f, children: (0, i.jsx)(n9, { channel: n, isOnStartStageScreen: U }) })
                    : null,
            renderBottomRight: () =>
                S
                    ? (0, i.jsx)(g.f5, {
                          value: f,
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
            renderChatToasts: () =>
                !k || x || b
                    ? null
                    : (0, i.jsx)(C.Ay, {
                          children: (0, i.jsx)(y.A, { className: a()(ir.T6, { [ir.c3]: c }), channelId: n.id }),
                      }),
            screenMessage: b ? { mainText: ex.intl.string(ex.t.J5bXZU) } : null,
            ...E,
            children: !b && t,
        })
    );
}
function iA(e) {
    let { channel: t, popoutType: s } = e,
        [r, h] = l.useState(!1),
        E = l.useCallback(() => {
            h(!r);
        }, [r, h]),
        { popoutWindow: j, popoutWindowAlwaysOnTop: S } = (0, o.cf)([T.A], () => ({
            popoutWindow: T.A.getWindow(eC.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: T.A.getIsAlwaysOnTop(eC.MLl.CHANNEL_CALL_POPOUT),
        })),
        _ = null != j && !j.closed,
        { analyticsLocations: y } = (0, g.Ay)(p.A.STAGE_CHANNEL_CALL),
        v = (0, N.Us)(),
        b = (0, o.bG)([m.A], () => m.A.getChatOpen(t.id), [t.id]),
        O = (0, o.bG)([U.A], () => U.A.getGuild(t.guild_id), [t.guild_id]);
    (0, x.Ay)(() => {
        null == c.w.get(io) &&
            ((0, d.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("28483"), n.e("56016")]).then(n.bind(n, 456947));
                return (t) => (0, i.jsx)(e, { ...t });
            }),
            c.w.set(io, Date.now()));
    });
    let { width: R = 0, ref: L } = (0, A.Ay)(),
        P = !_ || v === eC.BRT.POPOUT;
    return (0, i.jsx)(g.f5, {
        value: y,
        children: (0, i.jsxs)(C.qh, {
            children: [
                (0, i.jsxs)("div", {
                    className: ir.kL,
                    ref: L,
                    children: [
                        (0, i.jsx)(u.N, {
                            theme: eC.NJ8.DARK,
                            children: (e) =>
                                (0, i.jsx)("div", {
                                    className: a()(ir.ik, e, { [ir.pR]: r, [ir.gy]: r || b }),
                                    children: (0, i.jsx)(I.Ay, {
                                        timeout: 2e3,
                                        children: (e) =>
                                            (0, i.jsx)(ih, {
                                                channel: t,
                                                toggleRequestToSpeakSidebar: E,
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
                        r ? (0, i.jsx)(eO, { channel: t, toggleRequestToSpeakSidebar: E, chatOpen: b }) : null,
                        (0, i.jsx)("div", {
                            className: ir.B2,
                            children: b && P && (0, i.jsx)(f.A, { channel: t, guild: O, maxWidth: R - 550 }),
                        }),
                    ],
                }),
                (0, i.jsx)(C.WD, {}),
            ],
        }),
    });
}
