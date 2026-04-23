n.r(t), n.d(t, { StageChannelInviteButton: () => iu, default: () => ip });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(735438),
    o = n(17928),
    c = n(506774),
    d = n(192308),
    u = n(43990),
    _ = n(228366),
    p = n(765671),
    h = n(964486),
    A = n(793574),
    m = n(688810),
    g = n(313961),
    x = n(520698),
    f = n(43189),
    C = n(518530),
    E = n(384059),
    j = n(267102),
    b = n(574172),
    N = n(869146),
    T = n(976860),
    I = n(461782),
    S = n(20465),
    v = n(156652),
    y = n(128286),
    O = n(619344),
    L = n(821747),
    R = n(495544),
    U = n(249288),
    w = n(71393),
    P = n(576705),
    k = n(309010),
    M = n(723702),
    D = n(19575),
    G = n(790535),
    V = n(113783),
    B = n(69407),
    z = n(446600),
    K = n(571909),
    q = n(284009),
    H = n.n(q),
    F = n(990078),
    Q = n(789645),
    Y = n(297152),
    W = n(939249),
    X = n(778712),
    Z = n(463930),
    $ = n(834730),
    J = n(408278),
    ee = n(117723),
    et = n(243721),
    en = n(475825),
    ei = n(442433),
    el = n(730134),
    ea = n(80682),
    es = n(58736),
    er = n(967144),
    eo = n(342296),
    ec = n(696451),
    ed = n(290863),
    eu = n(849736),
    e_ = n(927813),
    ep = n(427262),
    eh = n(985018);
let eA = +e_.A.Millis.DAY;
var em = n(105530),
    eg = n(734057),
    ex = n(488926),
    ef = n(652215),
    eC = n(451394),
    eE = n(710358),
    ej = n(681434);
function eb(e) {
    let { className: t } = e;
    return (0, i.jsx)(eE.A, {
        className: t,
        children: (0, i.jsx)("div", {
            className: ej.T,
            children: (0, i.jsx)(eC.q, {
                size: "custom",
                color: "currentColor",
                className: ej.C,
                width: 32,
                height: 32,
            }),
        }),
    });
}
var eN = n(818348),
    eT = n(821182);
let eI = l.memo(function (e) {
        let { toggleRequestToSpeakSidebar: t, chatOpen: n } = e,
            l = (0, i.jsx)(es.Ay.Icon, { icon: Q.P, tooltip: eh.intl.string(eh.t.cpT0Cq), onClick: t });
        return (0, i.jsxs)(es.Ay, {
            toolbar: l,
            className: s()(eT.N1, { [eT.X_]: n }),
            children: [
                (0, i.jsx)(es.Ay.Icon, { icon: Y.E, disabled: !0, "aria-label": eh.intl.string(eh.t.TYZgzW) }),
                (0, i.jsx)(es.Ay.Title, { children: eh.intl.string(eh.t.TYZgzW) }),
            ],
        });
    }),
    eS = l.memo(function (e) {
        let { channel: t, participant: a, tempDisableOnInit: s = !1 } = e,
            r = l.useRef(null),
            [c, d] = l.useState(s);
        (0, h.Ay)(() => {
            if (!c) return;
            let e = setTimeout(() => d(!1), 1e3);
            return () => clearTimeout(e);
        });
        let u = t.getGuildId();
        H()(null != u, "Channel cannot be guildless");
        let { isMobile: _, status: p } = (0, o.cf)([ed.A], () => ({
                isMobile: ed.A.isMobileOnline(a.user.id),
                status: ed.A.getStatus(a.user.id, u),
            })),
            A = (0, o.bG)([ec.Ay], () => ec.Ay.getMember(u, a.user.id)),
            m = (0, er.gn)(t.guild_id, A?.userId, A?.colorStrings ?? null),
            g = l.useMemo(() => ({ [u]: [a.user.id] }), [u, a.user.id]);
        (0, ea.Eq)(g, "RequestToSpeakSidebar");
        let x = a.rtsState === em.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            f = (e) => {
                (0, ei.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("97262"),
                        n.e("84442"),
                        n.e("84841"),
                        n.e("79842"),
                    ]).then(n.bind(n, 107632));
                    return (n) => (0, i.jsx)(e, { ...n, user: a.user, guildId: u, channel: t, showMediaItems: !0 });
                });
            };
        return (0, i.jsxs)("div", {
            className: eT.fn,
            children: [
                (0, i.jsx)(eo.A, {
                    targetElementRef: r,
                    user: a.user,
                    guildId: t.guild_id,
                    channelId: t.id,
                    position: "left",
                    spacing: 16,
                    clickTrap: !0,
                    children: (e) =>
                        (0, i.jsxs)(W.D, {
                            innerRef: r,
                            className: eT.$u,
                            onContextMenu: f,
                            ...e,
                            children: [
                                (0, i.jsx)(el.A, {
                                    size: X._3.SIZE_40,
                                    className: eT.RB,
                                    user: a.user,
                                    isMobile: _,
                                    status: p,
                                }),
                                (0, i.jsxs)("div", {
                                    className: eT.kH,
                                    children: [
                                        (0, i.jsx)(Z.g, {
                                            name: a.userNick,
                                            colorString: A?.colorString ?? null,
                                            colorStrings: m,
                                            className: eT.F8,
                                        }),
                                        (0, i.jsx)($.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: (function (e) {
                                                if ((0, ep.mv)(e.user)) return eh.intl.string(eh.t.VaCdhQ);
                                                let t = e.member?.joinedAt;
                                                return null == t
                                                    ? eh.intl.string(eh.t.CQmzib)
                                                    : null != e.member && e.member.roles.length > 0
                                                      ? (e.role?.name ?? eh.intl.string(eh.t["97/NdO"]))
                                                      : new Date().getTime() - Date.parse(t) < eA
                                                        ? eh.intl.string(eh.t.IKE48n)
                                                        : eh.intl.string(eh.t.u0gUWt);
                                            })(a),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                }),
                (0, i.jsxs)("div", {
                    className: eT.UD,
                    children: [
                        (0, i.jsx)(F.m, {
                            text: x ? eh.intl.string(eh.t.h9rsTd) : eh.intl.string(eh.t.f0T7hI),
                            asContainer: !0,
                            children: (0, i.jsx)(J.K, {
                                onClick: function () {
                                    (0, eu.lL)(t, a.user.id, !1);
                                },
                                disabled: x || c,
                                icon: ee.L,
                                variant: "secondary",
                                "aria-label": x ? eh.intl.string(eh.t.h9rsTd) : eh.intl.string(eh.t.f0T7hI),
                            }),
                        }),
                        (0, i.jsx)(F.m, {
                            text: eh.intl.string(eh.t.moABMy),
                            asContainer: !0,
                            children: (0, i.jsx)(J.K, {
                                "aria-label": eh.intl.string(eh.t.moABMy),
                                onClick: function () {
                                    (0, eu.lL)(t, a.user.id, !0);
                                },
                                icon: Q.P,
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
            [n, a] = (function (e) {
                let t = (0, o.bG)([eg.A], () => eg.A.getChannel(e), [e]),
                    n = ex.MJ(ef.xBc.REQUEST_TO_SPEAK, t),
                    [i, a] = l.useState(n);
                return (
                    n !== i && a(n),
                    [
                        i,
                        (e) => {
                            null != t && (a(e), (0, eu.b6)(t, ef.xBc.REQUEST_TO_SPEAK, e));
                        },
                    ]
                );
            })(t.id);
        return (0, i.jsx)(et.d, { label: eh.intl.string(eh.t.GYCh0W), checked: n, onChange: a });
    }),
    ey = l.memo(function () {
        return (0, i.jsxs)("div", {
            className: eT.y7,
            children: [
                (0, i.jsx)(eb, {}),
                (0, i.jsx)($.E, {
                    className: eT.vo,
                    variant: "text-lg/semibold",
                    color: "text-strong",
                    children: eh.intl.string(eh.t["7R24mX"]),
                }),
                (0, i.jsx)($.E, {
                    className: eT.XG,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: eh.intl.string(eh.t.Rpr2s0),
                }),
            ],
        });
    });
function eO(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: l } = e,
        a = (0, V.J2)(t.id),
        r = [
            +!!(0, o.bG)([P.A], () => P.A.can(eN.xB.MANAGE_CHANNELS, t) || P.A.can(eN.xB.MANAGE_ROLES, t)),
            Math.max(1, a.length),
        ];
    return (0, i.jsxs)("div", {
        className: s()(eT.kL, { [eT.X_]: l }),
        children: [
            (0, i.jsx)(eI, { toggleRequestToSpeakSidebar: n, chatOpen: l }),
            (0, i.jsx)(en.OZ, {
                className: eT.hQ,
                sections: r,
                sectionHeight: function (e) {
                    return 40 * (1 === e);
                },
                rowHeight: function (e) {
                    switch (e) {
                        case 0:
                            return 66;
                        case 1:
                            if (0 === a.length) return 178;
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
                            if (0 === a.length) return (0, i.jsx)(ey, {}, "participants-empty");
                            let e = a[l];
                            return (0, i.jsx)(eS, { channel: t, participant: e, tempDisableOnInit: !0 }, e.id);
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
                                  className: eT.Vu,
                                  variant: "text-xs/bold",
                                  color: "text-default",
                                  children:
                                      a.length > 0
                                          ? eh.intl.formatToPlainString(eh.t["5z7q5a"], { numHands: a.length })
                                          : eh.intl.string(eh.t.TYZgzW),
                              },
                              "participants-section",
                          )
                        : null;
                },
            }),
        ],
    });
}
var eL = n(534514),
    eR = n(821609),
    eU = n(956793),
    ew = n(164617),
    eP = n(47167),
    ek = n(202384),
    eM = n(51758),
    eD = n(175203),
    eG = n(426660),
    eV = n(403362),
    eB = n(110618),
    ez = n(376460);
let eK = function (e) {
    let { participants: t, channel: n, hasConnectPermission: a } = e,
        s = (0, eM.H)(n.guild_id),
        r = l.useCallback(() => {
            s ? (0, ek.Ze)(n.guild_id, () => eU.default.selectVoiceChannel(n.id)) : eU.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, s]),
        c = t.filter((e) => e.type === B.wY.VOICE),
        d = (0, eP.Ay)(n),
        u = 4 === c.length ? 2 : 3,
        _ = (0, o.yK)([g.A], () => c.map((e) => g.A.getParticipant(n.id, e.id)).filter(eV.Vq), [n.id, c]);
    return (0, i.jsxs)("div", {
        className: ez.kL,
        children: [
            (0, i.jsx)(eG.A, {}),
            (0, i.jsx)("div", {
                className: ez.os,
                style: { maxWidth: 168 * u },
                children: _.slice(0, 5).map((e) =>
                    (0, i.jsx)(
                        eD.Ay,
                        {
                            participant: e,
                            channel: n,
                            className: ez.Vs,
                            inCall: !0,
                            noVideoRender: !0,
                            popoutType: ew.N.NO_POPOUT,
                            width: 48,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, i.jsx)(eL.D, { className: ez.HA, variant: "heading-xxl/normal", children: d }),
            (0, i.jsx)("div", {
                className: ez.Nu,
                children: (0, i.jsx)($.E, {
                    tag: "div",
                    color: "text-default",
                    variant: "heading-lg/normal",
                    children: (0, eB.DO)(n, c),
                }),
            }),
            (0, i.jsxs)("div", {
                className: ez.UD,
                children: [
                    (0, i.jsx)("div", {
                        className: ez.PD,
                        children: (0, i.jsx)(eR.$, {
                            variant: "overlay-primary",
                            text: a ? eh.intl.string(eh.t["7vb2cc"]) : eh.intl.string(eh.t.TVBCKZ),
                            onClick: r,
                            disabled: !a,
                        }),
                    }),
                    (0, i.jsx)(iu, { channel: n }),
                ],
            }),
        ],
    });
};
var eq = n(661531),
    eH = n(831544),
    eF = n(177953),
    eQ = n(367513),
    eY = n(689874),
    eW = n(509536),
    eX = n(742589),
    eZ = n(580034),
    e$ = n(954571),
    eJ = n(776781),
    e0 = n(233993),
    e1 = n(132500),
    e2 = n(280056),
    e6 = n(709562),
    e9 = n(489643);
function e5(e) {
    let { width: t = 24, height: n = 24, isBadged: a = !1 } = e,
        [s] = l.useState(() => (0, e1.A)());
    return (0, i.jsxs)("svg", {
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("defs", {
                children: (0, i.jsxs)("mask", {
                    id: s,
                    children: [
                        (0, i.jsx)("rect", { fill: "white", width: "100%", height: "100%" }),
                        a && (0, i.jsx)("circle", { cx: "20", cy: "19", r: "10", fill: "black" }),
                    ],
                }),
            }),
            (0, i.jsx)("g", { mask: `url(#${s})`, children: (0, i.jsx)(e2.c, {}) }),
        ],
    });
}
function e4(e) {
    let { className: t, numRequestToSpeak: n } = e,
        l = n > 0;
    return (0, i.jsxs)("div", {
        className: s()(e9.v, t),
        children: [
            (0, i.jsx)(e5, { isBadged: l }),
            l ? (0, i.jsx)($.E, { className: e9.F, variant: "text-xs/semibold", children: n > 99 ? "99+" : n }) : null,
        ],
    });
}
function e3(e) {
    let {
            toggleRequestToSpeakSidebar: t,
            showRequestToSpeakSidebar: n,
            className: a,
            numRequestToSpeak: s,
            onClick: r,
            ...o
        } = e,
        c = l.useCallback(() => {
            r?.(), t();
        }, [r, t]);
    return (0, i.jsx)(e6.A, {
        onClick: c,
        label: n ? eh.intl.string(eh.t.gKGz7A) : eh.intl.string(eh.t.ImQ4dW),
        className: a,
        iconComponent: () => (0, i.jsx)(e4, { numRequestToSpeak: s, className: a }),
        ...o,
    });
}
var e7 = n(96566);
function e8(e) {
    let t = (0, o.bG)([g.A], () => g.A.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
        n = (0, V.uy)(e.id),
        i = (0, V.zy)(e.id, B.ip.AUDIENCE),
        l = (0, e7.qT)(e.id),
        a = (0, o.bG)([w.A], () => w.A.getGuild(e.guild_id), [e.guild_id]),
        s = (0, o.bG)([P.A], () => P.A.can(e0.QY, e), [e]),
        r = a?.maxStageVideoChannelUsers ?? 0,
        c = !(null != a && a.features.has(ef.GuildFeatures.COMMUNITY)) && r > ef.uaN;
    return l && !t && s && !c && n + i >= r;
}
var te = n(788868),
    tt = n(322646);
function tn(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: l } = e,
        { analyticsLocations: a, newestAnalyticsLocation: r } = (0, m.Ay)(A.A.VOICE_CHANNEL_HEADER),
        c = (0, o.bG)([g.A], () => g.A.getChatOpen(t.id), [t.id]),
        d = (0, eJ.Ni)(t.id),
        u = (0, V.zy)(t.id, B.ip.REQUESTED_TO_SPEAK_ONLY);
    return (0, i.jsxs)(m.f5, {
        value: a,
        children: [
            (0, i.jsx)(eY.A, { channelId: t.id }, "clips-enabled-indicator"),
            !l && d
                ? (0, i.jsx)("div", {
                      className: s()(tt.x6, { [tt.vc]: c }),
                      children: (0, i.jsx)(e3, {
                          toggleRequestToSpeakSidebar: () => {
                              c && eQ.A.updateChatOpen(t.id, !1), (0, E.X)(r, E.O.OPEN_REQUEST_TO_SPEAK_SIDEBAR), n();
                          },
                          showRequestToSpeakSidebar: l,
                          numRequestToSpeak: u,
                      }),
                  })
                : null,
            !c &&
                (0, i.jsx)("div", {
                    className: s()(tt.x6, { [tt.vc]: l }),
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
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: a } = e,
        r = (0, eP.Ay)(t),
        c = (0, o.bG)([z.A], () => z.A.getStageInstanceByChannel(t.id)),
        d = (0, V.uy)(t.id),
        _ = (0, V.zy)(t.id, B.ip.AUDIENCE),
        p = (0, o.bG)([w.A], () => w.A.getGuild(t.guild_id), [t.guild_id]),
        h = p?.maxStageVideoChannelUsers ?? 0,
        A =
            null != p && p.features.has(ef.GuildFeatures.COMMUNITY)
                ? h < ef.p2C
                : p?.premiumTier !== ef.TVA.TIER_3 && h <= ef.nyz,
        m = e8(t),
        g = (0, o.bG)([P.A], () => P.A.can(e0.QY, t)),
        x = () => {
            eQ.A.updateStageVideoLimitBoostUpsellDismissed(t.id, !0),
                e$.default.track(ef.HAw.BOOSTING_UPSELL_CLICKED, {
                    guild_id: t.guild_id,
                    type: te.e.VIDEO_STAGE_LIMIT,
                    is_moderator: g,
                    action: te.pd.DISMISS,
                });
        },
        f = { canModerate: g, audienceCount: _, channel: t, speakerCount: d },
        C = l.useRef(f);
    l.useEffect(() => {
        C.current = f;
    }),
        l.useEffect(() => {
            let { canModerate: e, audienceCount: t, channel: n, speakerCount: i } = C.current;
            m &&
                e$.default.track(ef.HAw.BOOSTING_UPSELL_VIEWED, {
                    guild_id: n.guild_id,
                    type: te.e.VIDEO_STAGE_LIMIT,
                    is_moderator: e,
                    listener_count: i + t,
                });
        }, [m]);
    let E = (0, i.jsx)(u.N, {
        theme: ef.NJ8.DARK,
        children: (e) =>
            (0, i.jsxs)(es.Ay, {
                toolbar: (0, i.jsx)(tn, { toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: a, channel: t }),
                onDoubleClick: eX.I,
                transparent: !0,
                className: s()(e, tt.lF),
                children: [
                    (0, i.jsx)(es.Ay.Icon, {
                        icon: eC.q,
                        disabled: !0,
                        "aria-label": eh.intl.string(eh.t.EErMzA),
                        className: tt.Kk,
                        color: null != c ? eq.A.colors.TEXT_MUTED.css : void 0,
                    }),
                    (0, i.jsx)(es.Ay.Title, { className: tt.HA, wrapperClassName: tt.KD, children: c?.topic ?? r }),
                    (0, i.jsx)(es.Ay.Divider, { className: tt.yF }),
                    (0, i.jsxs)(es.Ay.Title, {
                        children: [
                            (0, i.jsx)(eH.c, { size: "xs", color: eq.A.colors.TEXT_MUTED.css }),
                            (0, i.jsx)($.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: tt.N_,
                                children: eh.intl.format(eh.t.chmM9N, { count: d }),
                            }),
                            (0, i.jsx)(eF.n, { size: "xs", className: tt.Kk, color: "currentColor" }),
                            (0, i.jsx)($.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: tt.N_,
                                children: eh.intl.format(eh.t["+v2pN2"], { count: _ }),
                            }),
                        ],
                    }),
                ],
            }),
    });
    return m
        ? (0, i.jsxs)("div", {
              children: [
                  E,
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
                                      children: A ? eh.intl.string(eh.t["T+zF9M"]) : eh.intl.string(eh.t["IZ+SVv"]),
                                  }),
                                  (0, i.jsx)($.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: A ? eh.intl.string(eh.t.Izgpmv) : eh.intl.string(eh.t["7FHbPG"]),
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: tt.Uo,
                              children: A
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(eR.$, {
                                                onClick: x,
                                                size: "sm",
                                                variant: "secondary",
                                                text: eh.intl.string(eh.t.L5eIZ2),
                                            }),
                                            (0, i.jsx)(eR.$, {
                                                variant: "expressive",
                                                onClick: () => {
                                                    (0, eW.K4)({
                                                        guildId: t.guild_id,
                                                        location: { section: ef.JJy.STAGE_VIDEO_LIMIT },
                                                    }),
                                                        e$.default.track(ef.HAw.BOOSTING_UPSELL_CLICKED, {
                                                            guild_id: t.guild_id,
                                                            type: te.e.VIDEO_STAGE_LIMIT,
                                                            is_moderator: g,
                                                            action: te.pd.BOOST,
                                                        });
                                                },
                                                size: "sm",
                                                text: eh.intl.string(eh.t.Uj0md3),
                                            }),
                                        ],
                                    })
                                  : (0, i.jsx)(eR.$, {
                                        variant: "primary",
                                        onClick: x,
                                        size: "sm",
                                        text: eh.intl.string(eh.t.WAI6xu),
                                    }),
                          }),
                      ],
                  }),
              ],
          })
        : E;
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
var ta = n(456412),
    ts = n(63995);
n(321073);
var tr = n(59520),
    to = n(996439),
    tc = n(110259),
    td = n(428678),
    tu = n(952270),
    t_ = n(104510),
    tp = n(139286),
    th = n(480890),
    tA = n(562153),
    tm = n(806931),
    tg = n(394552);
let tx = l.memo(function (e) {
        let { guildId: t, channelId: n, user: l, isPremium: a, isBlocked: s, isIgnored: r } = e;
        return (0, i.jsxs)("div", {
            className: tg.FS,
            children: [
                s ? (0, i.jsx)(td.K, { size: "lg", className: tg.Q6, color: eq.A.unsafe_rawColors.RED_400.css }) : null,
                r ? (0, i.jsx)(tu.G, { size: "lg", className: tg.Q6 }) : null,
                (0, i.jsx)($.E, {
                    className: tg.Qq,
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: tA.Ay.getName(t, n, l),
                }),
                a ? (0, i.jsx)(t_._, { className: tg.EH, color: eq.A.unsafe_rawColors.GUILD_BOOSTING_PINK }) : null,
            ],
        });
    }),
    tf = l.memo(function (e) {
        let { participant: t, guildId: n, channel: l, isPremium: a } = e,
            { user: r, blocked: o, ignored: c, rtsState: d } = t,
            u = d === em.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            _ = d === em.zF.REQUESTED_TO_SPEAK || u;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: tg.H,
                    children: [
                        _ &&
                            (0, i.jsx)(Y.E, {
                                size: "md",
                                color: "currentColor",
                                className: s()(tg.Kk, { [tg.MD]: u }),
                            }),
                        (0, i.jsx)("img", {
                            src: r.getAvatarURL(l.guild_id, 56, !1) ?? void 0,
                            alt: r.username,
                            "aria-label": r.username,
                            className: s()(tg.my, { [tg.zj]: o || c }),
                        }),
                    ],
                }),
                (0, i.jsx)(tx, { guildId: n, channelId: l.id, user: r, isPremium: a, isBlocked: o, isIgnored: c }),
            ],
        });
    }),
    tC = () => (0, i.jsx)("div", { className: tg.j8 }),
    tE = l.memo(function (e) {
        let { participant: t, channel: a } = e,
            { user: r, blocked: c } = t,
            d = a.getGuildId(),
            u = R.default.getId(),
            { newestAnalyticsLocation: _ } = (0, m.Ay)(A.A.AUDIENCE_TILE),
            p = (0, j.Us)(),
            h = (0, o.bG)([ec.Ay], () => null != d && ec.Ay.getMember(d, r.id)?.premiumSince != null, [d, r.id]),
            g = l.useRef(null);
        H()(null != d, "Channel cannot be guildless");
        let x = l.useCallback(
            (e) => {
                (0, tp.x)({
                    type: tc.ImpressionTypes.MENU,
                    name: tc.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: { location: "AudienceTile", is_tile_owner: r.id === u, tile_type: tm.qs.USER },
                }),
                    (0, ei.L3)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("97262"),
                                n.e("84442"),
                                n.e("84841"),
                                n.e("79842"),
                            ]).then(n.bind(n, 107632));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    user: r,
                                    guildId: d,
                                    channel: a,
                                    showMediaItems: !0,
                                    showStageChannelItems: !0,
                                    showChatItems: !1,
                                    onInteraction: (0, th.s)("GuildChannelUserContextMenu", _, {
                                        targetUserId: r.id,
                                        tileType: tm.qs.USER,
                                    }),
                                });
                        },
                        { context: p },
                    );
            },
            [r, u, p, d, a, _],
        );
        return (0, i.jsx)(eo.A, {
            targetElementRef: g,
            user: r,
            guildId: a.guild_id,
            channelId: a.id,
            clickTrap: !0,
            children: (e) =>
                (0, i.jsx)(W.D, {
                    innerRef: g,
                    className: s()(tg.iA, { [tg.wP]: h || c, [tg.fP]: h && c }),
                    onContextMenu: x,
                    ...e,
                    children: (0, i.jsx)(tf, { participant: t, guildId: d, channel: a, isPremium: h }),
                }),
        });
    });
var tj = n(444830);
let tb = l.memo(function (e) {
    let { channel: t, participants: n, maxTiles: l } = e;
    if (0 === n.length) return null;
    let a = [];
    for (let e = 0; e < l; e++)
        if (e < n.length) {
            let l = n[e];
            a.push((0, i.jsx)(tE, { channel: t, participant: l }, l.id));
        } else a.push((0, i.jsx)(tC, {}, e));
    return (0, i.jsx)("div", { className: tj.l, children: a });
});
var tN = n(446837),
    tT = n(201001),
    tI = n(936589);
let tS = (0, tT.$)(tI.qZ, tI.Rv, "", window.ResizeObserver ?? tN.t);
var tv = n(844222),
    ty = n(401843),
    tO = n(643501),
    tL = n(652896),
    tR = n(279250),
    tU = n(51092),
    tw = n(326567),
    tP = n(616356),
    tk = n(977997),
    tM = n(312006),
    tD = n(969341),
    tG = n(636359);
function tV(e) {
    let { aspectRatio: t, className: n, children: l, width: a, ...s } = e,
        r = tD.Ay.getVideoComponent();
    return (0, i.jsx)("div", {
        style: { width: a },
        className: tG.A,
        children: (0, i.jsxs)("div", {
            className: tG.e,
            style: { aspectRatio: t },
            children: [(0, i.jsx)(eD.Ay, { className: n, videoComponent: r, width: a, ...s }), l],
        }),
    });
}
var tB = n(953727);
function tz(e) {
    let { width: t = 32, height: n = 32, color: l = "currentColor", foreground: a, ...s } = e;
    return (0, i.jsxs)("svg", {
        ...(0, tB.A)(s),
        width: t,
        height: n,
        viewBox: "0 0 32 32",
        children: [
            (0, i.jsx)("rect", { width: "32", height: "32", rx: "16", fill: l }),
            (0, i.jsx)("path", {
                d: "M23 9.99995C19.56 9.99995 16.826 6.43495 16.799 6.39795C16.421 5.89795 15.579 5.89795 15.201 6.39795C15.174 6.43495 12.44 9.99995 9 9.99995C8.447 9.99995 8 10.4479 8 10.9999V17.9999C8 21.8069 14.764 25.4779 15.534 25.8839C15.68 25.9609 15.84 25.9979 16 25.9979C16.16 25.9979 16.32 25.9599 16.466 25.8839C17.236 25.4779 24 21.8069 24 17.9999V10.9999C24 10.4479 23.553 9.99995 23 9.99995ZM19 19.9999L16 17.9999L13 19.9999L14 16.9999L12 14.9999H15L16 11.9999L17 14.9999H20L18 16.9999L19 19.9999Z",
                className: a,
            }),
        ],
    });
}
var tK = n(353256);
let tq = () =>
    (0, i.jsx)(F.m, {
        text: eh.intl.string(eh.t.GMZqSi),
        children: (0, i.jsx)("div", {
            className: tK.k,
            children: (0, i.jsx)(tz, { color: eq.A.unsafe_rawColors.WHITE.css }),
        }),
    });
var tH = n(578758);
let tF = 16 / 9,
    tQ = (e) => {
        let {
                stageParticipant: t,
                rtcParticipant: n,
                channel: a,
                guildId: s,
                user: r,
                width: o,
                isModerator: c,
                onContextMenu: d,
                popoutType: u,
            } = e,
            _ = l.useRef(null),
            { reducedMotion: p } = l.useContext(tv.C),
            { blocked: h, ignored: A, id: m } = t;
        return (0, i.jsx)(eo.A, {
            targetElementRef: _,
            user: r,
            guildId: s,
            channelId: a.id,
            clickTrap: !0,
            children: (e) =>
                (0, i.jsx)(W.D, {
                    innerRef: _,
                    onContextMenu: (e) => d(n, e),
                    ...e,
                    children: (0, i.jsx)(
                        tV,
                        {
                            participant: n,
                            aspectRatio: tF,
                            blocked: h,
                            ignored: A,
                            channel: a,
                            className: tH.V,
                            inCall: !0,
                            popoutType: u,
                            pulseSpeakingIndicator: !p.enabled,
                            width: o,
                            onContextMenu: d,
                            children: c && (0, i.jsx)(tq, {}),
                        },
                        m,
                    ),
                }),
        });
    },
    tY = (e) => {
        let {
                stageParticipant: t,
                rtcParticipant: n,
                channel: a,
                width: s,
                isModerator: r,
                onContextMenu: c,
                popoutType: d,
            } = e,
            { reducedMotion: u } = l.useContext(tv.C),
            { id: _, blocked: p, ignored: h } = t,
            A = (0, o.yK)([tP.A], () => tP.A.getAllActiveStreams(), []),
            { selectedParticipant: m, largeStream: x } = (0, o.cf)([g.A], () => ({
                selectedParticipant: null != a ? g.A.getSelectedParticipant(a.id) : null,
                largeStream: null != a && g.A.getStageStreamSize(a.id),
            })),
            f = l.useCallback(
                (e, t) => {
                    if (
                        e.type === tm.lp.STREAM &&
                        0 === A.filter((t) => (0, tL._z)(t) === e.id && t.state !== ef.XYD.ENDED).length
                    ) {
                        if (!(0, tR.eo)(a, tk.A, w.A, P.A, tO.default)[0]) return;
                        (0, ty.A9)((0, tL.Iy)(e.id), { forceMultiple: t.shiftKey });
                    }
                    m?.id === e.id
                        ? x
                            ? (eQ.A.selectParticipant(a.id, null), eQ.A.updateStageStreamSize(a.id, !1))
                            : eQ.A.updateStageStreamSize(a.id, !0)
                        : (eQ.A.updateStageStreamSize(a.id, !1), eQ.A.selectParticipant(a.id, e.id));
                },
                [A, a, m, x],
            );
        return (0, i.jsx)(
            tV,
            {
                participant: n,
                aspectRatio: tF,
                fit: n.type === tm.lp.USER ? tU.$.COVER : void 0,
                blocked: p,
                ignored: h,
                channel: a,
                className: tH.V,
                inCall: !0,
                popoutType: d,
                onClick: f,
                onContextMenu: c,
                pulseSpeakingIndicator: !u.enabled,
                width: s,
                children: r && n.type === tm.lp.USER && (0, i.jsx)(tq, {}),
            },
            _,
        );
    },
    tW = l.memo(function (e) {
        let { participant: t, channel: l, width: a, popoutType: s } = e,
            { newestAnalyticsLocation: r } = (0, m.Ay)(A.A.STAGE_TILE),
            c = (0, j.Us)(),
            d = l.getGuildId(),
            u = R.default.getId();
        H()(null != d, "Channel cannot be guildless");
        let { user: _ } = t,
            p = (0, o.bG)([g.A], () => g.A.getParticipant(l.id, t.id), [l.id, t.id]),
            h = (0, o.bG)([tM.Ay], () => tM.Ay.isModerator(_.id, l.id), [l.id, _.id]);
        if (null == p || p.type === tm.lp.ACTIVITY) return null;
        let x = (e) => {
                (0, tp.x)({
                    type: tc.ImpressionTypes.MENU,
                    name: tc.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: { location: "StageTile", is_tile_owner: _.id === u, tile_type: e },
                });
            },
            f = (e, t, a, s) => {
                switch (e.type) {
                    case tm.lp.HIDDEN_STREAM:
                    case tm.lp.STREAM:
                        x(tm.qs.STREAM),
                            (0, ei.L3)(
                                t,
                                async () => {
                                    let { default: t } = await n.e("66692").then(n.bind(n, 796175));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            stream: e.stream,
                                            appContext: c,
                                            exitFullscreen: () => {},
                                            onInteraction: (0, th.s)("StreamContextMenu", r, {
                                                entrypoint: s,
                                                targetUserId: _.id,
                                                tileType: tm.qs.STREAM,
                                            }),
                                        });
                                },
                                { context: c },
                            );
                        return;
                    case tm.lp.USER:
                    default:
                        if ((x(tm.qs.USER), a))
                            return (0, tw.r)(t, _, l, { context: c }, (e, t) =>
                                (0, th.Y)({
                                    menuName: e,
                                    menuItemProps: t,
                                    entrypoint: tm.GK.THREE_DOT,
                                    targetUserId: _.id,
                                    location: r,
                                    tileType: tm.qs.USER,
                                }),
                            );
                        (0, ei.L3)(
                            t,
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("97262"),
                                    n.e("84442"),
                                    n.e("84841"),
                                    n.e("79842"),
                                ]).then(n.bind(n, 107632));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        user: _,
                                        guildId: d,
                                        channel: l,
                                        showMediaItems: !0,
                                        showStageChannelItems: !0,
                                        showChatItems: !1,
                                        onInteraction: (0, th.s)("GuildChannelUserContextMenu", r, {
                                            targetUserId: _.id,
                                            tileType: tm.qs.USER,
                                        }),
                                    });
                            },
                            { context: c },
                        );
                }
            };
        return p.type !== tm.lp.USER || p.voiceState?.selfVideo
            ? (0, i.jsx)(tY, {
                  stageParticipant: t,
                  rtcParticipant: p,
                  channel: l,
                  guildId: d,
                  user: _,
                  width: a,
                  isModerator: h,
                  onContextMenu: f,
                  popoutType: s,
              })
            : (0, i.jsx)(tQ, {
                  stageParticipant: t,
                  rtcParticipant: p,
                  channel: l,
                  guildId: d,
                  user: _,
                  width: a,
                  isModerator: h,
                  onContextMenu: f,
                  popoutType: s,
              });
    });
var tX = n(210548);
let tZ = l.memo(function (e) {
    let { channel: t, participants: n, tileWidth: l, selectedParticipant: a, popoutType: s } = e;
    return (0, i.jsx)("div", {
        className: tX.q,
        children: n.map((e) =>
            e.id === a?.id ? null : (0, i.jsx)(tW, { channel: t, participant: e, width: l, popoutType: s }, e.id),
        ),
    });
});
var t$ = n(847374),
    tJ = n(402216),
    t0 = n(97808),
    t1 = n(717558),
    t2 = n(636585),
    t6 = n(486020),
    t9 = n(711865);
function t5(e) {
    let { channel: t, speaker: a, className: r } = e,
        o = l.useRef(null),
        { newestAnalyticsLocation: c } = (0, m.Ay)(),
        d = (0, j.Us)(),
        { reducedMotion: u } = l.useContext(tv.C),
        _ = (0, t1.A)({ userId: a.id }),
        p = null != a.member ? (0, t6.xT)(a.member) : null,
        h = (e) => {
            (0, ei.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("97262"),
                        n.e("84442"),
                        n.e("84841"),
                        n.e("79842"),
                    ]).then(n.bind(n, 107632));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            user: a.user,
                            guildId: t.guild_id,
                            channel: t,
                            showMediaItems: !0,
                            showStageChannelItems: !0,
                            showChatItems: !1,
                            onInteraction: (0, th.s)("GuildChannelUserContextMenu", c),
                        });
                },
                { context: d },
            );
        };
    return (0, i.jsx)(eo.A, {
        targetElementRef: o,
        user: a.user,
        guildId: t.guild_id,
        channelId: t.id,
        clickTrap: !0,
        children: (e) =>
            (0, i.jsx)(F.m, {
                targetElementRef: o,
                __unsupportedReactNodeAsText: a.userNick,
                position: "bottom",
                children: (0, i.jsx)(W.D, {
                    ...e,
                    innerRef: o,
                    onClick: (t) => {
                        t.stopPropagation(), e.onClick(t);
                    },
                    onContextMenu: h,
                    children: (0, i.jsx)(t0.eu, {
                        src: p ?? a.user.getAvatarURL(t.guild_id, 24),
                        size: X._3.SIZE_24,
                        className: s()(t9.my, r),
                        "aria-label": a.userNick,
                        isSpeaking: _ && !u.enabled,
                    }),
                }),
            }),
    });
}
function t4(e) {
    let { speakers: t, channel: n } = e;
    return (0, i.jsx)(t2.A, {
        className: t9.z,
        guildId: n.guild_id,
        users: t,
        max: 10,
        renderUser: (e, t, l) => (0, i.jsx)(t5, { channel: n, speaker: e, className: t }, l),
        renderMoreUsers: (e, t, n) => (0, i.jsx)("div", { className: s()(t9.$U, t), children: e }, n),
    });
}
var t3 = n(947790);
let t7 = l.memo(function (e) {
    let {
        label: t,
        participantCount: n,
        onClick: l,
        className: a,
        collapsed: r,
        speakers: o,
        channel: c,
        isStreamLive: d,
    } = e;
    return (0, i.jsxs)(W.D, {
        onClick: l,
        className: s()(t3.kL, a),
        children: [
            null == o
                ? (0, i.jsx)(eF.n, { size: "custom", color: "currentColor", width: 20, height: 20, className: t3.Vo })
                : (0, i.jsx)(eH.c, { size: "custom", color: "currentColor", width: 20, height: 20, className: t3.Vo }),
            (0, i.jsxs)($.E, {
                color: "text-strong",
                variant: "text-md/semibold",
                className: t3.Qq,
                children: [t, " — ", n],
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
                className: s()(t3.mw, { [t3.VU]: r }),
            }),
        ],
    });
});
var t8 = n(639622);
function ne(e) {
    return e.type === B.wY.VOICE;
}
let nt = (0, ta.A)((e) => {
    let t,
        n,
        { channel: a, width: s, onScroll: c, popoutType: d } = e,
        {
            selectedParticipantId: u,
            largeStream: _,
            chatOpen: p,
        } = (0, o.cf)(
            [g.A],
            () => ({
                selectedParticipantId: g.A.getSelectedParticipantId(a.id),
                largeStream: g.A.getStageStreamSize(a.id),
                chatOpen: g.A.getChatOpen(a.id),
            }),
            [a.id],
        ),
        h = (0, V.uy)(a.id),
        A = (0, V.zy)(a.id, B.ip.AUDIENCE),
        m = (0, o.bG)([ts.A], () => (null != u ? ts.A.getParticipant(a.id, u) : null)),
        x = (0, V.E5)(a.id, B.ip.SPEAKER),
        f = x.filter(ne),
        C = null != x.find((e) => e.type === B.wY.STREAM),
        E = Math.floor((s - 32) / 102),
        j = s < 424 ? 1 : s < 624 ? 2 : s < 824 || p ? 3 : 4,
        b = { [B.ip.SPEAKER]: j, [B.ip.AUDIENCE]: E, [B.ip.SELECTED]: 1 },
        N = (function (e) {
            let t = (0, V.zy)(e, B.ip.AUDIENCE),
                [n, i] = l.useState(!1);
            return (
                l.useEffect(() => {
                    t > 100 ? i(!0) : t < 75 && i(!1);
                }, [t]),
                5e3 * !!n
            );
        })(a.id),
        [T, I] = (function (e, t, n) {
            let i,
                a,
                s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                c =
                    ((i = (0, o.bG)([ts.A], () => [e, ts.A.getParticipantsVersion(e)], [e], to.D)),
                    (a = (0, o.bG)([g.A], () => g.A.getSelectedParticipantId(e), [e])),
                    l.useMemo(() => {
                        let n = [],
                            l = [],
                            o = -1,
                            c = [];
                        if (s)
                            for (let t of ts.A.getMutableParticipants(e, B.ip.SPEAKER))
                                if (t.type === B.wY.STREAM) t.id !== a && c.push(t), o++;
                                else break;
                        let d = (e, t, i) => {
                                let s = i ? e.filter((e, t) => e.id !== a && t > o) : e,
                                    c = (0, r.chunk)(s, t);
                                l.push(c), n.push(c.length);
                            },
                            u = null != a ? ts.A.getParticipant(e, a) : null;
                        return (
                            u?.speaker ? d([u], 1, !1) : d([], 1, !1),
                            [B.ip.SPEAKER, B.ip.AUDIENCE].forEach((e) => {
                                d(ts.A.getMutableParticipants(i[0], e), t[e], e === B.ip.SPEAKER);
                            }),
                            d(c, 1, !1),
                            [n, l]
                        );
                    }, [i, t, a, s, e])),
                [d, u] = c,
                [_, p] = (0, tr.J)(c, n, [t[B.ip.AUDIENCE]]);
            return [
                [d[3 * !!s], d[1], _[2]],
                [u[3 * !!s], u[1], p[2]],
            ];
        })(a.id, b, N),
        S = [Math.max(T[0] ?? 1, 1), Math.max(T[1] ?? 1, 1), T[2]],
        { speakerTileWidth: v, speakerTileHeight: y } =
            ((n = Math.floor((t = Math.floor(s / j - 8)) / tF)), { speakerTileWidth: t, speakerTileHeight: n }),
        O = _ ? s - 32 : Math.min(s - 64, 3 * v + 8),
        L = (e) => e === T.length - 1 || (0 === A && 1 === e),
        [R, U] = l.useState(!1),
        [w, P] = l.useState(!1);
    return (0, i.jsx)(tS, {
        sections: S,
        renderSection: (e) => {
            let { section: t } = e;
            return 1 === t
                ? 0 === h
                    ? null
                    : (0, i.jsx)(
                          t7,
                          {
                              participantCount: h,
                              label: eh.intl.string(eh.t.CduOkx),
                              className: t8.wx,
                              onClick: () => U(!R),
                              collapsed: R,
                              speakers: f,
                              channel: a,
                              isStreamLive: C,
                          },
                          `speaker-header-${t}`,
                      )
                : 2 === t
                  ? 0 === A
                      ? null
                      : (0, i.jsx)(
                            t7,
                            {
                                participantCount: A,
                                label: eh.intl.string(eh.t["3foUu5"]),
                                className: t8.wx,
                                onClick: () => P(!w),
                                collapsed: w,
                                channel: a,
                            },
                            `audience-header-${t}`,
                        )
                  : null;
        },
        sectionHeight: (e) => 48,
        renderRow: (e) => {
            let { section: t, row: n } = e,
                s = I[t][n];
            if (s?.length == null) return null;
            switch (t) {
                case 0:
                    if (0 === s.length || null == s[0]) return null;
                    return (0, i.jsx)(
                        "div",
                        {
                            className: t8.Od,
                            children: (0, i.jsx)(tW, { channel: a, participant: s[0], width: O, popoutType: d }),
                        },
                        "selected-participant",
                    );
                case 1:
                    if (R) return null;
                    return (0, i.jsx)(
                        l.Fragment,
                        {
                            children: (0, i.jsx)(tZ, {
                                tileWidth: v,
                                channel: a,
                                participants: s,
                                selectedParticipant: m,
                                popoutType: d,
                            }),
                        },
                        `speakers-${t}-${n}`,
                    );
                case 2:
                    if (w) return null;
                    return (0, i.jsx)(tb, { channel: a, participants: s, maxTiles: E }, `audience-${t}-${n}`);
                default:
                    return null;
            }
        },
        rowHeight: (e) => (null == I[e][0] ? 0 : 0 === e ? O / tF + 8 : 1 === e ? (R ? 0 : y) : 98 * !w),
        renderFooter: (e) => {
            let { section: t } = e;
            return L(t) ? (0, i.jsx)("div", { className: t8.jH }, "bottom-spacer") : null;
        },
        footerHeight: (e) => (1 === e ? 8 : 0 === e ? 12 : 88 * !!L(e)),
        className: t8.XG,
        chunkSize: 60,
        onScroll: c,
    });
});
var nn = n(43105),
    ni = n(309796),
    nl = n(666654),
    na = n(922016),
    ns = n(550079),
    nr = n(477782),
    no = n(285796),
    nc = n(381844),
    nd = n(532676),
    nu = n(432017),
    n_ = n(517461),
    np = n(139716),
    nh = n(847599),
    nA = n(385318),
    nm = n(329072),
    ng = n(183184),
    nx = n(880144),
    nf = n(698441),
    nC = n(540157),
    nE = n(993838),
    nj = n(418208),
    nb = n(47868);
function nN(e) {
    let { className: t, channel: n, highlight: l } = e,
        a = (0, j.Us)();
    return (0, nj.zU)()
        ? null
        : (0, i.jsx)(nb.A, {
              highlight: l ?? !1,
              className: t,
              icon: (0, i.jsx)(eC.q, { size: "custom", color: "currentColor", height: 20, width: 20 }),
              color: eq.A.unsafe_rawColors.GREEN_360.css,
              title: eh.intl.string(eh.t.OYbHfv),
              description: eh.intl.string(eh.t.yXwLMQ),
              onClick: function () {
                  (0, nE.tQ)(n, a);
              },
          });
}
var nT = n(931991),
    nI = n(151476),
    nS = n(405018),
    nv = n(704877),
    ny = n(173660),
    nO = n(105225),
    nL = n(530679),
    nR = n(222692),
    nU = n(246356),
    nw = n(404355),
    nP = n(577062),
    nk = n(970636),
    nM = n(287809),
    nD = n(302884),
    nG = n(30108),
    nV = n(39938),
    nB = n(106044);
function nz(e) {
    let t = (0, o.bG)([R.default], () => R.default.getId());
    return (0, em.Ay)(t, e) === em.zF.ON_STAGE;
}
var nK = n(505543);
function nq(e) {
    let t = (0, o.bG)([R.default], () => R.default.getId()),
        n = (0, em.Ay)(t, e.id),
        i = n === em.zF.REQUESTED_TO_SPEAK || n === em.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
        [a, s] = l.useState(i);
    return (
        l.useEffect(() => {
            s(i);
        }, [i]),
        [
            a,
            function () {
                (0, nj.Cf)(e.id)
                    ? np.A.showAgeVerificationGetStartedModal({ entryPoint: nh.q1.STAGE_CHANNEL_RAISE_HAND })
                    : (n === em.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, eu.e7)(e, !0) : (0, eu.J7)(e, !a),
                      s(!a));
            },
        ]
    );
}
var nH = n(515354),
    nF = n(117816);
function nQ(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, m.Ay)(),
        a = nz(t.id),
        [s, r] = nq(t),
        c = (0, o.bG)([P.A], () => P.A.can(eN.xB.REQUEST_TO_SPEAK, t)),
        d = (0, nj.Vv)(),
        u = (0, nj.tp)(),
        _ = l.useRef(null),
        [p, h] = (0, n_.V)("age-verification-stage-popover-dismissed", !1),
        A = l.useContext(I.vG);
    if (a) return null;
    let g = u && !p;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(e6.l, {
                ref: _,
                isTrayButton: !0,
                isActive: s,
                label: (function (e, t, n, i) {
                    let l = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                    return !l && i
                        ? null
                        : n
                          ? eh.intl.string(eh.t.NzITVo)
                          : e
                            ? eh.intl.string(eh.t.GCimTk)
                            : t
                              ? eh.intl.string(eh.t.hLbG5N)
                              : eh.intl.string(eh.t.e4WMvx);
                })(s, c, d, u, p),
                iconComponent: d ? ni._ : Y.E,
                onClick: () => {
                    (0, E.X)(n, E.O.REQUEST_TO_SPEAK, !s),
                        h(!0),
                        d
                            ? np.A.showAgeVerificationGetStartedModal({ entryPoint: nh.q1.STAGE_CHANNEL_RAISE_HAND })
                            : r();
                },
                color: s ? "green" : void 0,
                disabled: !c && !s,
            }),
            g &&
                (0, i.jsx)(nn.A, {
                    targetElementRef: _,
                    graphic: { type: "image", src: nF.A },
                    gradientColor: "blue",
                    title: eh.intl.string(eh.t.zvubnM),
                    body: eh.intl.string(eh.t["/wx+J2"]),
                    shouldShow: !A,
                    actions: [
                        {
                            text: eh.intl.string(eh.t.KXVgjt),
                            onClick: () => {
                                np.A.showAgeVerificationGetStartedModal({
                                    entryPoint: nh.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT,
                                }),
                                    h(!0);
                            },
                        },
                    ],
                    onRequestClose: () => h(!0),
                }),
        ],
    });
}
let nY = l.memo(function (e) {
    let { channel: t } = e,
        n = (0, o.bG)([k.A], () => k.A.getVoiceChannelId() === t.id, [t.id]);
    return (0, i.jsxs)("div", {
        className: nH.kL,
        children: [
            (0, i.jsxs)("div", {
                className: nH.qi,
                children: [
                    (0, i.jsx)(n$, { channelId: t.id }),
                    n ? (0, i.jsx)(nQ, { channel: t }) : null,
                    (0, i.jsx)(nL.A, { channel: t }),
                ],
            }),
            (0, i.jsx)(nX, { channel: t }),
        ],
    });
});
function nW(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, m.Ay)(),
        l = (0, nj.Vv)();
    return (0, i.jsx)(e6.l, {
        isTrayButton: !0,
        onClick: () => {
            ((0, E.X)(n, E.O.SPEAK_ON_STAGE), l)
                ? np.A.showAgeVerificationGetStartedModal({ entryPoint: nh.q1.STAGE_CHANNEL_RAISE_HAND })
                : (0, eu.e7)(t, !1);
        },
        iconComponent: l ? nl.O : ee.L,
        label: eh.intl.string(l ? eh.t.NzITVo : eh.t["8Joh+p"]),
    });
}
function nX(e) {
    let { channel: t, onSelect: n } = e,
        a = (0, j.Us)(),
        { canManageGuildEvent: s } = (0, nT.nr)(t),
        r = (0, o.bG)([z.A], () => z.A.getStageInstanceByChannel(t.id), [t.id]),
        c = (0, o.bG)([nf.Ay], () => nf.Ay.getGuildScheduledEvent(r?.guild_scheduled_event_id)),
        { suppress: d } = (0, ny.A)(t),
        u = R.default.getId(),
        [_] = nq(t),
        p = tM.Ay.isModerator(u, t.id),
        h = (0, eJ.Ni)(t.id),
        g = s(c),
        { parentAnalyticsLocation: x } = (0, m.Ay)(),
        f = l.useRef(null),
        C = () =>
            (function (e) {
                let { channel: t, appContext: n } = e;
                ((0, E.X)(A.A.VOICE_CONTROL_TRAY, E.O.DISCONNECT), (0, nB.A)(t))
                    ? (0, nE.j3)(t, n)
                    : eU.default.disconnect();
            })({ channel: t, appContext: a });
    return (p || g) && null != r
        ? (0, i.jsx)(na.Y, {
              targetElementRef: f,
              renderPopout: (e) => {
                  let { closePopout: l } = e;
                  return (0, i.jsx)(nU.A, {
                      children: (0, i.jsx)(ns.W, {
                          "data-menu-migrated": !0,
                          navId: "exit-options",
                          "aria-label": eh.intl.string(eh.t["3Uj+2p"]),
                          onClose: l,
                          onSelect: n,
                          onInteraction: (0, th.s)("End Stage", x, { entrypoint: tm.GK.CARET }),
                          children: (0, i.jsx)(nr.Dr, {
                              id: "end-stage",
                              color: "danger",
                              action: () => (0, nE.$q)(t, a),
                              label: eh.intl.string(eh.t["Fmx5y/"]),
                              icon: no.a,
                              leadingAccessory: { type: "icon", icon: no.a },
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
                      ref: f,
                      label: eh.intl.string(eh.t.c6qKwr),
                      onClick: C,
                      onPopoutClick: n,
                      popoutOpen: l,
                  });
              },
          })
        : (d && !h) || _
          ? (0, i.jsx)(nw.A, { label: eh.intl.string(eh.t.SMKyih), onClick: C })
          : (0, i.jsx)(nw.A, { label: eh.intl.string(eh.t.c6qKwr), onClick: C });
}
function nZ(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, m.Ay)();
    return (0, i.jsx)(e6.l, {
        isTrayButton: !0,
        iconComponent: nc.U,
        label: eh.intl.string(eh.t.ezLpY6),
        onClick: () => {
            (0, E.X)(n, E.O.MOVE_TO_AUDIENCE), (0, eu.Tf)(t);
        },
    });
}
function n$(e) {
    let { channelId: t } = e,
        { parentAnalyticsLocation: n } = (0, m.Ay)(),
        l = (0, o.bG)([nV.A], () => nV.A.isMuted()),
        a = (0, nG.bF)(t),
        s = (0, o.bG)([nV.A], () => nV.A.shouldPlay());
    return a
        ? (0, i.jsx)(e6.l, {
              isTrayButton: !0,
              isActive: !l,
              label: l ? eh.intl.string(eh.t.ScHlfl) : eh.intl.string(eh.t.zqxfrf),
              iconComponent: l ? nd.C : nu.T,
              color: l ? void 0 : "green",
              onClick: () => {
                  (0, E.X)(n, E.O.STAGE_MUSIC, l), (0, nD.k)(!l);
              },
          })
        : (0, i.jsx)(e6.l, {
              isTrayButton: !0,
              isActive: s,
              label: s ? eh.intl.string(eh.t.zqxfrf) : eh.intl.string(eh.t.ScHlfl),
              iconComponent: s ? nu.T : nd.C,
              color: s ? "green" : void 0,
              onClick: () => {
                  (0, E.X)(n, E.O.STAGE_MUSIC, !s), (0, nD.C)(!s);
              },
          });
}
let nJ = l.memo(function (e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, m.Ay)(),
        { suppress: a, selfMute: s, mute: r } = (0, ny.A)(t),
        c = (0, eJ.Ni)(t.id),
        d = (0, o.bG)([tO.default], () => null != tO.default.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: u, enabled: _ } = (0, nI.A)(),
        p = (0, nv.A)(t),
        { limit: h, reachedLimit: A } = (0, nS.A)(t),
        x = (0, o.bG)([nM.default], () => nM.default.getCurrentUser()),
        f = (0, o.bG)([tD.Ay], () => (0, nx.A)(tD.Ay)),
        C = (0, o.bG)([k.A], () => k.A.getVoiceChannelId() === t.id, [t.id]),
        E = (0, o.bG)([g.A], () => g.A.getStreamParticipants(t.id)[0], [t.id]),
        j = (0, e7.qT)(t.id),
        b = h > 0,
        N = (A && !j) || (null != E && E.user.id !== x?.id),
        T = (0, th.s)("AudioDeviceMenu", n, { entrypoint: tm.GK.CARET }),
        I = l.useRef(null),
        S = l.useRef(null);
    if (null == x) return null;
    let v = (0, i.jsx)(na.Y, {
        targetElementRef: I,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(nU.A, {
                children: (0, i.jsx)(nm.A, {
                    onClose: t,
                    minimal: !0,
                    onInteraction: (0, th.s)("VideoDeviceMenu", n, { entrypoint: tm.GK.CARET }),
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
                hasPermission: p,
                enabled: _,
                cameraUnavailable: u,
                onChange: nO.SZ,
                onCameraUnavailable: nR.A,
                channelLimitReached: A,
                channelLimit: h,
                popoutOpen: l,
                onPopoutClick: n,
            });
        },
    });
    return (0, i.jsxs)("div", {
        className: nH.iE,
        children: [
            C && !a
                ? (0, i.jsxs)("div", {
                      className: nH.qi,
                      children: [
                          (0, i.jsx)(na.Y, {
                              targetElementRef: S,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, i.jsx)(nU.A, {
                                      children: (0, i.jsx)(nA.default, {
                                          onClose: t,
                                          renderInputDevices: !0,
                                          renderInputModes: !0,
                                          renderOutputDevices: !0,
                                          renderInputVolume: !0,
                                          renderOutputVolume: !0,
                                          renderDeafen: !0,
                                          minimal: !0,
                                          onInteraction: T,
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
                                  return (0, i.jsx)(nP.A, {
                                      ref: S,
                                      centerButton: !0,
                                      onPopoutClick: n,
                                      selfMute: s,
                                      serverMute: r,
                                      suppress: a,
                                      popoutOpen: l,
                                      onClick: () => (0, ng.A)(r, a, "Stage Channel Controls"),
                                      awaitingRemote: d,
                                  });
                              },
                          }),
                          b && v,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: nH.qi,
                children: [
                    C && !a && b
                        ? (0, i.jsx)(nO.rP, {
                              channel: t,
                              currentUser: x,
                              exitFullScreen: () => null,
                              canGoLive: f,
                              hasPermission: p,
                              disabled: N,
                          })
                        : null,
                    (0, i.jsx)(n$, { channelId: t.id }),
                    C && (0, i.jsx)(nQ, { channel: t }),
                    C && c && a && (0, i.jsx)(nW, { channel: t }),
                    C && !a && (0, i.jsx)(nZ, { channel: t }),
                    (0, i.jsx)(nL.A, { channel: t }),
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
        l = nz(t.id),
        a = (0, eJ.Ni)(t.id),
        s = (0, o.bG)([P.A], () => P.A.can(e0.QY, t), [t]),
        r = (0, nj.zU)(),
        c = (0, nK.A)(t.id),
        d = (0, o.bG)([g.A], () => (null != t ? g.A.getSelectedParticipant(t.id) : null)),
        u = !c && null == d;
    return n
        ? (0, i.jsx)(n0, { channel: t })
        : l || a
          ? (0, i.jsxs)("div", {
                className: nH.My,
                children: [
                    (0, i.jsxs)("div", {
                        className: nH.Ac,
                        children: [
                            u ? (0, i.jsx)(nC.A, { channelId: t?.id }) : null,
                            (0, i.jsx)("div", { className: nH.me }),
                            u && s && !r ? (0, i.jsx)(nN, { highlight: !0, channel: t }) : null,
                            (0, i.jsx)("div", { className: nH.me }),
                        ],
                    }),
                    (0, i.jsx)(nJ, { channel: t }),
                ],
            })
          : (0, i.jsx)(nY, { channel: t });
});
var n2 = n(520006);
function n6(e) {
    let {
            stream: t,
            applicationId: n,
            channel: l,
            exitFullScreen: a,
            appContext: s,
            analyticsLocation: r,
            className: c,
            size: d = "sm",
        } = e,
        u = l?.getGuildId(),
        _ = l?.id,
        p = (0, o.bG)([w.A], () => (null != u ? w.A.getGuild(u) : null), [u]),
        h = (0, o.bG)([nf.Ay], () => nf.Ay.getActiveEventByChannel(_), [_]);
    if (!(null != p && null != l && P.A.can(ef.xBc.CREATE_INSTANT_INVITE, l))) return null;
    let A = eh.intl.string(eh.t.VINpSK);
    return (
        null != t ? (A = eh.intl.string(eh.t["6VQaqd"])) : null != n && (A = eh.intl.string(eh.t["OzOM/q"])),
        (0, i.jsx)("div", {
            className: c,
            children: (0, i.jsx)(eR.$, {
                size: d,
                variant: "secondary",
                text: A,
                onClick: () => {
                    H()(null != p, "guild cannot be null"),
                        H()(null != l, "channel cannot be null"),
                        (0, n2.X)({
                            guild: p,
                            channel: l,
                            streamUserId: t?.ownerId,
                            applicationId: n,
                            appContext: s,
                            exitFullScreen: a,
                            analyticsLocation: r,
                            guildScheduledEvent: h,
                            source: ef.PE1.STAGE_CHANNEL,
                        });
                },
            }),
        })
    );
}
var n9 = n(104171),
    n5 = n(81466),
    n4 = n(823508);
function n3(e) {
    let { className: t, guildId: l } = e,
        a = (0, n4.A)();
    return (0, i.jsx)(nb.A, {
        className: t,
        icon: (0, i.jsx)(n5.C, { size: "custom", color: "currentColor", height: 20, width: 20 }),
        color: eq.A.unsafe_rawColors.BRAND_500.css,
        title: eh.intl.string(eh.t["60lJ0C"]),
        description: eh.intl.string(eh.t["EYn7/y"]),
        onClick: function () {
            (0, d.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("28136"),
                    n.e("68587"),
                    n.e("22021"),
                    n.e("60423"),
                    n.e("94644"),
                ]).then(n.bind(n, 729398));
                return (t) => (0, i.jsx)(e, { ...t, guildId: l });
            }, a);
        },
    });
}
var n7 = n(601964);
function n8(e) {
    let { onClick: t, className: n } = e,
        l = eH.c;
    return (0, i.jsx)(nb.A, {
        iconContainerClassName: s()({ [n7.q8]: !1 }),
        icon: (0, i.jsx)(l, { size: "custom", color: "currentColor", className: n7.Pz, height: 20, width: 20 }),
        color: eq.A.unsafe_rawColors.PRIMARY_700.css,
        title: eh.intl.string(eh.t["jMLfp/"]),
        description: eh.intl.string(eh.t["Vd/rEX"]),
        onClick: t,
        className: n,
    });
}
function ie(e) {
    let { channel: t } = e,
        { participants: n, usersInSummary: l } = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                [n] = (0, o.bG)(
                    [ts.A],
                    () => {
                        let n = ts.A.getMutableParticipants(e).filter((e) => e.type === B.wY.VOICE),
                            i = [];
                        for (let e of n) {
                            if (i.length >= t) break;
                            null == i.find((t) => t.id === e.user.id) && i.push(e.user);
                        }
                        return [{ participants: n, usersInSummary: i }, ts.A.getParticipantsVersion(e)];
                    },
                    [e, t],
                    to.D,
                );
            return n;
        })(t.id);
    return (0, i.jsxs)("div", {
        className: n7.P1,
        children: [
            (0, i.jsx)(n9.Ay, { className: n7.Ip, guildId: t.guild_id, users: l, size: n9.DN.SIZE_16 }),
            (0, i.jsx)($.E, {
                variant: "text-sm/normal",
                color: "text-default",
                children: (function (e) {
                    if (0 === e.length) return "";
                    if (1 === e.length) return eh.intl.formatToPlainString(eh.t["5ULgaQ"], { first: e[0].userNick });
                    if (2 === e.length)
                        return eh.intl.formatToPlainString(eh.t.BHK0Op, {
                            first: e[0].userNick,
                            second: e[1].userNick,
                        });
                    let t = e.length - 2;
                    return eh.intl.formatToPlainString(eh.t.T3MT4n, {
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
        a = (0, o.bG)([P.A], () => P.A.can(e0.QY, t), [t]),
        r = t.guild_id,
        { canCreateGuildEvent: c } = (0, nT.nr)(t),
        d = (0, nK.A)(t.id),
        u = l.useRef(null);
    return (0, i.jsxs)("div", {
        className: n7.kL,
        ref: u,
        children: [
            (0, i.jsx)(eG.A, { eventTargetRef: u }),
            (0, i.jsxs)("div", {
                className: n7.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: n7.N1,
                        children: [
                            (0, i.jsx)(eL.D, {
                                className: n7.__invalid_title,
                                variant: "heading-xxl/normal",
                                children: eh.intl.string(eh.t.QGnDLs),
                            }),
                            (0, i.jsx)($.E, {
                                tag: "div",
                                className: n7.VA,
                                variant: "heading-lg/normal",
                                children: eh.intl.string(eh.t.djfK36),
                            }),
                        ],
                    }),
                    d ? null : (0, i.jsx)(nC.A, { channelId: t.id, showDismiss: !1 }),
                    a ? (0, i.jsx)(nN, { className: n7.fN, channel: t }) : null,
                    c ? (0, i.jsx)(n3, { className: n7.fN, guildId: r }) : null,
                    a ? (0, i.jsx)(n8, { className: s()({ [n7.fN]: !0 }), onClick: n }) : null,
                    (0, i.jsx)(ie, { channel: t }),
                ],
            }),
        ],
    });
}
var ii = n(58149),
    il = n(423562),
    ia = n(625494),
    is = n(475815),
    ir = n(678671);
let io = "HasBeenInStageChannel",
    ic = (e) => {
        (0, E.X)(A.A.VOICE_CONTROL_TRAY, E.O.STAY_ON_TOP, e), b.setAlwaysOnTop(ef.MLl.CHANNEL_CALL_POPOUT, e);
    };
function id(e) {
    let {
            channel: t,
            appContext: n,
            popoutOpen: a,
            popoutWindow: s,
            popoutWindowAlwaysOnTop: r,
            selectedParticipant: c,
        } = e,
        { parentAnalyticsLocation: d } = (0, m.Ay)(),
        u = t.getGuildId(),
        p = (0, o.bG)([k.A], () => k.A.getMostRecentSelectedTextChannelId(u), [u]),
        h = R.default.getId(),
        A =
            !(0, o.bG)([g.A], () => g.A.isFullscreenInContext(n)) &&
            (!M.isPlatformEmbedded || D.Ay.supportsFeature(ef.BYE.POPOUT_WINDOWS)),
        f = null != c && c.type !== tm.lp.ACTIVITY && c.user.id !== h,
        C = l.useMemo(() => s?.window ?? window, [s]),
        j = (function (e) {
            let { channel: t, appContext: n, popoutOpen: a, popoutWindow: s, currentWindow: r } = e,
                { parentAnalyticsLocation: c } = (0, m.Ay)(),
                d = n === ef.BRT.POPOUT,
                u = l.useRef(null),
                { currentLayout: p, mode: h } = (0, o.cf)([g.A], () => {
                    let e = g.A.getMode(t.id),
                        i = n === ef.BRT.POPOUT;
                    i && (e = ef._Of.VIDEO);
                    let l = e === ef._Of.VIDEO ? g.A.getLayout(t.id, n) : ef.DUB.MINIMUM;
                    return i && l !== ef.DUB.FULL_SCREEN && (l = ef.DUB.NO_CHAT), { currentLayout: l, mode: e };
                }, [t, n]),
                A = (0, o.bG)([k.A], () => k.A.getVoiceChannelId() === t.id, [t.id]);
            l.useEffect(() => {
                u.current = h;
            });
            let x = l.useRef(p),
                { currentDocument: f, rootNode: C } = l.useMemo(() => {
                    let e = null != s && d ? s.document : document,
                        t = r.document.getElementById("app-mount");
                    return { currentWindow: r, currentDocument: e, rootNode: t };
                }, [s, d, r]),
                j = a && !d,
                N = h === ef._Of.VIDEO && A && !j,
                T = l.useCallback(
                    (e, i) => {
                        i !== e &&
                            (eQ.A.updateLayout(t.id, i, n),
                            i === ef.DUB.FULL_SCREEN && t.isPrivate() && ia._.dispatch(ef.jej.TEXTAREA_BLUR));
                    },
                    [n, t],
                ),
                I = l.useCallback(
                    (e) => {
                        null == C ||
                            (e === ef.DUB.FULL_SCREEN &&
                                (T(e, x.current),
                                (0, is.sP)((e) => {
                                    x.current = e;
                                }, f)));
                    },
                    [f, T, C],
                ),
                S = l.useCallback(
                    (e) => () => {
                        null != C &&
                            ((0, E.X)(c, E.O.FULL_SCREEN, e !== ef.DUB.FULL_SCREEN),
                            e !== ef.DUB.FULL_SCREEN
                                ? ((x.current = e), T(e, ef.DUB.FULL_SCREEN), (0, is.tl)(C))
                                : I(e));
                    },
                    [T, I, C, c],
                );
            l.useEffect(() => {
                let e = () => {
                    null != C && ((0, is._U)(C, f) || p !== ef.DUB.FULL_SCREEN || S(p)());
                };
                return (
                    f.addEventListener(is.Wb, e),
                    () => {
                        f.removeEventListener(is.Wb, e);
                    }
                );
            }, [f, p, S, C]);
            let v = { channel: t, maybeLeaveFullScreen: I },
                y = l.useRef(v);
            return (l.useEffect(() => {
                y.current = v;
            }),
            l.useEffect(() => {
                let { channel: e, maybeLeaveFullScreen: t } = y.current;
                return (
                    e$.default.track(ef.HAw.VIDEO_LAYOUT_TOGGLED, {
                        video_layout: d ? "popout" : p,
                        ...(0, ii.QS)(e.id),
                    }),
                    () => {
                        (d && (0, M.isMac)()) || t(p);
                    }
                );
            }, [p, d]),
            l.useEffect(() => {
                null != C && u.current === ef._Of.VIDEO && h === ef._Of.VOICE && (0, is.sP)(C, f);
            }, [f, h, u, C]),
            l.useEffect(() => {
                !A && d && _.h.wait(() => b.close(ef.MLl.CHANNEL_CALL_POPOUT));
            }, [A, d]),
            N)
                ? (0, i.jsx)(il.A, { themeable: !1, node: C, guestWindow: s, onClick: S(p) })
                : null;
        })({ channel: t, appContext: n, popoutOpen: a, popoutWindow: s, currentWindow: C }),
        N = n === ef.BRT.POPOUT && M.isPlatformEmbedded && D.Ay.supportsFeature(ef.BYE.POPOUT_WINDOWS);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            f
                ? (0, i.jsx)(L.A, {
                      context: (0, x.A)(c.type),
                      userId: c.user.id,
                      currentWindow: C,
                      sliderClassName: ir.MQ,
                      location: d,
                  })
                : null,
            N ? (0, i.jsx)(O.A, { popoutWindowAlwaysOnTop: r, onToggleStayOnTop: ic }) : null,
            A
                ? (0, i.jsx)(y.A, {
                      popoutOpen: a,
                      onOpenPopout: () => {
                          (0, E.X)(d, E.O.POPOUT, !0),
                              (() => {
                                  let e = t.getGuildId();
                                  null != e && null != p && (0, T.uh)(e, p), b.openChannelCallPopout(t);
                              })();
                      },
                      onClosePopout: () => {
                          (0, E.X)(d, E.O.POPOUT, !1), _.h.wait(() => b.close(ef.MLl.CHANNEL_CALL_POPOUT));
                      },
                  })
                : null,
            j,
        ],
    });
}
function iu(e) {
    let { channel: t } = e,
        n = (0, j.Us)(),
        l = (0, o.bG)([P.A], () => P.A.can(ef.xBc.CREATE_INSTANT_INVITE, t)),
        a = (0, o.bG)([w.A], () => w.A.getGuild(t.guild_id)),
        s = (0, o.bG)([z.A], () => z.A.getStageInstanceByChannel(t.id)),
        r = l || s?.invite_code != null;
    return null != a && r
        ? (0, i.jsx)(n6, { size: "md", channel: t, appContext: n, analyticsLocation: ef.liQ.GUILD_CHANNEL })
        : null;
}
function i_(e) {
    let t,
        {
            channel: n,
            toggleRequestToSpeakSidebar: a,
            showRequestToSpeakSidebar: c,
            popoutWindow: d,
            popoutWindowAlwaysOnTop: u,
            popoutOpen: _,
            popoutType: p,
            chatOpen: h,
            idleProps: x,
        } = e,
        { analyticsLocations: C } = (0, m.Ay)(A.A.VOICE_CONTROL_TRAY),
        E = (0, j.Us)(),
        b = (0, o.bG)([k.A], () => k.A.getVoiceChannelId() === n.id, [n.id]),
        N = (0, o.bG)([P.A], () => P.A.can(ef.xBc.CONNECT, n)),
        T = (0, V.E5)(n.id, B.ip.SPEAKER),
        I = (0, o.bG)([g.A], () => g.A.getSelectedParticipant(n.id)),
        y = _ && E !== ef.BRT.POPOUT,
        [O, L] = l.useState(0),
        R = l.useMemo(
            () =>
                (0, r.debounce)(
                    (e) => {
                        let { scrollTop: t } = e.target;
                        L(t);
                    },
                    1e3,
                    { leading: !0 },
                ),
            [],
        ),
        { isOnStartStageScreen: w } = (0, K.Ay)();
    (0, K.vI)(n);
    let M = (0, o.bG)([U.A], () => U.A.getToastsEnabled(n.id)),
        D = e8(n) ? (null != I ? "84px" : "124px") : null != I ? "0px" : "48px";
    return (
        w && (D = "0px"),
        (t = w
            ? (0, i.jsx)(it, {
                  channel: n,
                  onContinueClick: () => {
                      (0, K.ek)(!1), b || (0, G.cy)(n);
                  },
              })
            : b
              ? (0, i.jsx)(nt, { channel: n, onScroll: R, popoutType: p })
              : (0, i.jsx)(eK, { participants: T, channel: n, hasConnectPermission: N })),
        (0, i.jsx)(v.A, {
            style: { height: `calc(100% - ${D})`, paddingTop: D },
            disableGradients: !b || (0 === O && v.x.TOP),
            renderBottomCenter: () =>
                b
                    ? (0, i.jsx)(m.f5, { value: C, children: (0, i.jsx)(n1, { channel: n, isOnStartStageScreen: w }) })
                    : null,
            renderBottomRight: () =>
                b
                    ? (0, i.jsx)(m.f5, {
                          value: C,
                          children: (0, i.jsx)(id, {
                              channel: n,
                              appContext: E,
                              popoutOpen: _,
                              popoutWindow: d,
                              popoutWindowAlwaysOnTop: u,
                              selectedParticipant: I,
                          }),
                      })
                    : null,
            renderHeader: () =>
                (0, i.jsx)(ti, { toggleRequestToSpeakSidebar: a, showRequestToSpeakSidebar: c, channel: n }),
            renderChatToasts: () =>
                !M || h || y
                    ? null
                    : (0, i.jsx)(f.Ay, {
                          children: (0, i.jsx)(S.A, { className: s()(ir.T6, { [ir.c3]: c }), channelId: n.id }),
                      }),
            screenMessage: y ? { mainText: eh.intl.string(eh.t.J5bXZU) } : null,
            ...x,
            children: !y && t,
        })
    );
}
function ip(e) {
    let { channel: t, popoutType: a } = e,
        [r, _] = l.useState(!1),
        x = l.useCallback(() => {
            _(!r);
        }, [r, _]),
        { popoutWindow: E, popoutWindowAlwaysOnTop: b } = (0, o.cf)([N.A], () => ({
            popoutWindow: N.A.getWindow(ef.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: N.A.getIsAlwaysOnTop(ef.MLl.CHANNEL_CALL_POPOUT),
        })),
        T = null != E && !E.closed,
        { analyticsLocations: S } = (0, m.Ay)(A.A.STAGE_CHANNEL_CALL),
        v = (0, j.Us)(),
        y = (0, o.bG)([g.A], () => g.A.getChatOpen(t.id), [t.id]),
        O = (0, o.bG)([w.A], () => w.A.getGuild(t.guild_id), [t.guild_id]);
    (0, h.Ay)(() => {
        null == c.w.get(io) &&
            ((0, d.openModalLazy)(async () => {
                let { default: e } = await n.e("56016").then(n.bind(n, 456947));
                return (t) => (0, i.jsx)(e, { ...t });
            }),
            c.w.set(io, Date.now()));
    });
    let { width: L = 0, ref: R } = (0, p.Ay)(),
        U = !T || v === ef.BRT.POPOUT;
    return (0, i.jsx)(m.f5, {
        value: S,
        children: (0, i.jsxs)(f.qh, {
            children: [
                (0, i.jsxs)("div", {
                    className: ir.kL,
                    ref: R,
                    children: [
                        (0, i.jsx)(u.N, {
                            theme: ef.NJ8.DARK,
                            children: (e) =>
                                (0, i.jsx)("div", {
                                    className: s()(ir.ik, e, { [ir.pR]: r, [ir.gy]: r || y }),
                                    children: (0, i.jsx)(I.Ay, {
                                        timeout: 2e3,
                                        children: (e) =>
                                            (0, i.jsx)(i_, {
                                                channel: t,
                                                toggleRequestToSpeakSidebar: x,
                                                showRequestToSpeakSidebar: r,
                                                popoutWindow: E,
                                                popoutWindowAlwaysOnTop: b,
                                                popoutOpen: T,
                                                popoutType: a,
                                                chatOpen: y,
                                                idleProps: e,
                                            }),
                                    }),
                                }),
                        }),
                        r ? (0, i.jsx)(eO, { channel: t, toggleRequestToSpeakSidebar: x, chatOpen: y }) : null,
                        (0, i.jsx)("div", {
                            className: ir.B2,
                            children: y && U && (0, i.jsx)(C.A, { channel: t, guild: O, maxWidth: L - 550 }),
                        }),
                    ],
                }),
                (0, i.jsx)(f.WD, {}),
            ],
        }),
    });
}
