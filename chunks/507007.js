(n.r(t), n.d(t, { default: () => tL }));
var l = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(435558),
    o = n(17928),
    c = n(43990),
    d = n(73153),
    u = n(367513),
    p = n(148494),
    h = n(765671),
    A = n(793574),
    m = n(688810),
    x = n(198052),
    g = n(520698),
    E = n(43189),
    C = n(518530),
    f = n(384059),
    j = n(267102),
    T = n(574172),
    S = n(869146),
    N = n(976860),
    I = n(461782),
    _ = n(20465),
    y = n(156652),
    O = n(128286),
    R = n(619344),
    U = n(821747),
    w = n(280450),
    b = n(249288),
    P = n(71393),
    L = n(576705),
    k = n(309010),
    v = n(723702),
    M = n(19575),
    D = n(747376),
    G = n(113783),
    B = n(518769),
    q = n(571909),
    z = n(374873),
    F = n(623413),
    V = n(661531),
    W = n(451394),
    H = n(831544),
    K = n(834730),
    X = n(177953),
    Y = n(47167),
    Q = n(689874),
    $ = n(58736),
    Z = n(742589),
    J = n(977851),
    ee = n(776781),
    et = n(446600),
    en = n(132500),
    el = n(280056),
    es = n(204651),
    ei = n(660183),
    ea = n(116108);
function er(e) {
    let { width: t = 24, height: n = 24, isBadged: i = !1 } = e,
        [a] = s.useState(() => (0, en.A)());
    return (0, l.jsxs)("svg", {
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: [
            (0, l.jsx)("defs", {
                children: (0, l.jsxs)("mask", {
                    id: a,
                    children: [
                        (0, l.jsx)("rect", { fill: "white", width: "100%", height: "100%" }),
                        i && (0, l.jsx)("circle", { cx: "20", cy: "19", r: "10", fill: "black" }),
                    ],
                }),
            }),
            (0, l.jsx)("g", { mask: `url(#${a})`, children: (0, l.jsx)(el.c, {}) }),
        ],
    });
}
function eo(e) {
    let { className: t, numRequestToSpeak: n } = e,
        s = n > 0;
    return (0, l.jsxs)("div", {
        className: a()(ea.v, t),
        children: [
            (0, l.jsx)(er, { isBadged: s }),
            s ? (0, l.jsx)(K.E, { className: ea.F, variant: "text-xs/semibold", children: n > 99 ? "99+" : n }) : null,
        ],
    });
}
function ec(e) {
    let {
            toggleRequestToSpeakSidebar: t,
            showRequestToSpeakSidebar: n,
            className: i,
            numRequestToSpeak: a,
            onClick: r,
            ...o
        } = e,
        c = s.useCallback(() => {
            (r?.(), t());
        }, [r, t]);
    return (0, l.jsx)(es.A, {
        onClick: c,
        label: n ? ei.intl.string(ei.t.gKGz7A) : ei.intl.string(ei.t.ImQ4dW),
        className: i,
        iconComponent: () => (0, l.jsx)(eo, { numRequestToSpeak: a, className: i }),
        ...o,
    });
}
var ed = n(366265),
    eu = n(533233),
    ep = n(652215),
    eh = n(903489);
function eA(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: s } = e,
        { analyticsLocations: i, newestAnalyticsLocation: r } = (0, m.Ay)(A.A.VOICE_CHANNEL_HEADER),
        c = (0, o.bG)([x.A], () => x.A.getChatOpen(t.id), [t.id]),
        d = (0, ee.Ni)(t.id),
        p = (0, G.zy)(t.id, B.ip.REQUESTED_TO_SPEAK_ONLY);
    return (0, l.jsxs)(m.f5, {
        value: i,
        children: [
            (0, l.jsx)(Q.A, { channelId: t.id }, "clips-enabled-indicator"),
            !s && d
                ? (0, l.jsx)("div", {
                      className: a()(eh.x6, { [eh.vc]: c }),
                      children: (0, l.jsx)(ec, {
                          toggleRequestToSpeakSidebar: function () {
                              (c && u.A.updateChatOpen(t.id, !1), (0, f.X)(r, f.O.OPEN_REQUEST_TO_SPEAK_SIDEBAR), n());
                          },
                          showRequestToSpeakSidebar: s,
                          numRequestToSpeak: p,
                      }),
                  })
                : null,
            !c &&
                (0, l.jsx)("div", {
                    className: a()(eh.x6, { [eh.vc]: s }),
                    children: (0, l.jsx)(J.V, {
                        channelId: t.id,
                        showRequestToSpeakSidebar: s,
                        toggleRequestToSpeakSidebar: n,
                        iconClassName: eh.iA,
                    }),
                }),
        ],
    });
}
function em(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: s } = e,
        i = (0, Y.Ay)(t),
        r = (0, o.bG)([et.A], () => et.A.getStageInstanceByChannel(t.id)),
        d = (0, G.uy)(t.id),
        u = (0, G.zy)(t.id, B.ip.AUDIENCE),
        p = (0, eu.A)(t),
        h = (0, l.jsx)(c.N, {
            theme: ep.NJ8.DARK,
            children: (e) =>
                (0, l.jsxs)($.Ay, {
                    toolbar: (0, l.jsx)(eA, {
                        toggleRequestToSpeakSidebar: n,
                        showRequestToSpeakSidebar: s,
                        channel: t,
                    }),
                    onDoubleClick: Z.I,
                    transparent: !0,
                    className: a()(e, eh.lF),
                    children: [
                        (0, l.jsx)($.Ay.Icon, {
                            icon: W.q,
                            disabled: !0,
                            "aria-label": ei.intl.string(ei.t.EErMzA),
                            className: eh.Kk,
                            color: null != r ? V.A.colors.TEXT_MUTED.css : void 0,
                        }),
                        (0, l.jsx)($.Ay.Title, { className: eh.HA, wrapperClassName: eh.KD, children: r?.topic ?? i }),
                        (0, l.jsx)($.Ay.Divider, { className: eh.yF }),
                        (0, l.jsxs)($.Ay.Title, {
                            children: [
                                (0, l.jsx)(H.MicrophoneIcon, { size: "xs", color: V.A.colors.TEXT_MUTED.css }),
                                (0, l.jsx)(K.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: eh.N_,
                                    children: ei.intl.format(ei.t.chmM9N, { count: d }),
                                }),
                                (0, l.jsx)(X.n, { size: "xs", className: eh.Kk, color: "currentColor" }),
                                (0, l.jsx)(K.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: eh.N_,
                                    children: ei.intl.format(ei.t["+v2pN2"], { count: u }),
                                }),
                            ],
                        }),
                    ],
                }),
        });
    return p ? (0, l.jsxs)("div", { children: [h, (0, l.jsx)(ed.A, { channel: t })] }) : h;
}
var ex = n(456412),
    eg = n(63995),
    eE = n(224648);
n(321073);
var eC = n(284009),
    ef = n.n(eC),
    ej = n(562708),
    eT = n(428678),
    eS = n(952270),
    eN = n(104510),
    eI = n(297152),
    e_ = n(939249),
    ey = n(442433),
    eO = n(139286),
    eR = n(480890),
    eU = n(342296),
    ew = n(696451),
    eb = n(562153),
    eP = n(105530),
    eL = n(806931),
    ek = n(314243);
let ev = s.memo(function (e) {
        let { guildId: t, channelId: n, user: s, isPremium: i, isBlocked: a, isIgnored: r } = e;
        return (0, l.jsxs)("div", {
            className: ek.FS,
            children: [
                a ? (0, l.jsx)(eT.K, { size: "lg", className: ek.Q6, color: V.A.unsafe_rawColors.RED_400.css }) : null,
                r ? (0, l.jsx)(eS.EyeSlashIcon, { size: "lg", className: ek.Q6 }) : null,
                (0, l.jsx)(K.E, {
                    className: ek.Qq,
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: eb.Ay.getName(t, n, s),
                }),
                i ? (0, l.jsx)(eN._, { className: ek.EH, color: V.A.unsafe_rawColors.GUILD_BOOSTING_PINK }) : null,
            ],
        });
    }),
    eM = s.memo(function (e) {
        let { participant: t, guildId: n, channel: s, isPremium: i } = e,
            { user: r, blocked: o, ignored: c, rtsState: d } = t,
            u = d === eP.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            p = d === eP.zF.REQUESTED_TO_SPEAK || u;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: ek.H,
                    children: [
                        p &&
                            (0, l.jsx)(eI.E, {
                                size: "md",
                                color: "currentColor",
                                className: a()(ek.Kk, { [ek.MD]: u }),
                            }),
                        (0, l.jsx)("img", {
                            src: r.getAvatarURL(s.guild_id, 56, !1) ?? void 0,
                            alt: r.username,
                            "aria-label": r.username,
                            className: a()(ek.my, { [ek.zj]: o || c }),
                        }),
                    ],
                }),
                (0, l.jsx)(ev, { guildId: n, channelId: s.id, user: r, isPremium: i, isBlocked: o, isIgnored: c }),
            ],
        });
    });
function eD() {
    return (0, l.jsx)("div", { className: ek.j8 });
}
let eG = s.memo(function (e) {
    let { participant: t, channel: i } = e,
        { user: r, blocked: c } = t,
        d = i.getGuildId(),
        u = w.default.getId(),
        { newestAnalyticsLocation: p } = (0, m.Ay)(A.A.AUDIENCE_TILE),
        h = (0, j.Us)(),
        x = (0, o.bG)([ew.Ay], () => null != d && ew.Ay.getMember(d, r.id)?.premiumSince != null, [d, r.id]),
        g = s.useRef(null);
    ef()(null != d, "Channel cannot be guildless");
    let E = s.useCallback(
        (e) => {
            ((0, eO.x)({
                type: ej.ImpressionTypes.MENU,
                name: ej.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                properties: { location: "AudienceTile", is_tile_owner: r.id === u, tile_type: eL.qs.USER },
            }),
                (0, ey.L3)(
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
                            n.e("245996"),
                            n.e("529422"),
                            n.e("823427"),
                            n.e("307059"),
                            n.e("449145"),
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
                            (0, l.jsx)(e, {
                                ...t,
                                user: r,
                                guildId: d,
                                channel: i,
                                showMediaItems: !0,
                                showStageChannelItems: !0,
                                showChatItems: !1,
                                onInteraction: (0, eR.s)("GuildChannelUserContextMenu", p, {
                                    targetUserId: r.id,
                                    tileType: eL.qs.USER,
                                }),
                            });
                    },
                    { context: h },
                ));
        },
        [r, u, h, d, i, p],
    );
    return (0, l.jsx)(eU.A, {
        targetElementRef: g,
        user: r,
        guildId: i.guild_id,
        channelId: i.id,
        clickTrap: !0,
        children: (e) =>
            (0, l.jsx)(e_.D, {
                innerRef: g,
                className: a()(ek.iA, { [ek.wP]: x || c, [ek.fP]: x && c }),
                onContextMenu: E,
                ...e,
                children: (0, l.jsx)(eM, { participant: t, guildId: d, channel: i, isPremium: x }),
            }),
    });
});
var eB = n(784227);
let eq = s.memo(function (e) {
    let { channel: t, participants: n, maxTiles: s } = e;
    if (0 === n.length) return null;
    let i = [];
    for (let e = 0; e < s; e++)
        if (e < n.length) {
            let s = n[e];
            i.push((0, l.jsx)(eG, { channel: t, participant: s }, s.id));
        } else i.push((0, l.jsx)(eD, {}, e));
    return (0, l.jsx)("div", { className: eB.l, children: i });
});
var ez = n(446837),
    eF = n(201001),
    eV = n(473530);
let eW = (0, eF.$)(eV.qZ, eV.Rv, "", window.ResizeObserver ?? ez.t);
var eH = n(844222),
    eK = n(401843),
    eX = n(643501),
    eY = n(652896),
    eQ = n(279250),
    e$ = n(51092),
    eZ = n(326567),
    eJ = n(616356),
    e0 = n(977997),
    e1 = n(312006),
    e4 = n(175203),
    e2 = n(192820),
    e6 = n(756872);
function e3(e) {
    let { aspectRatio: t, className: n, children: s, width: i, ...a } = e,
        r = e2.Ay.getVideoComponent();
    return (0, l.jsx)("div", {
        style: { width: i },
        className: e6.A,
        children: (0, l.jsxs)("div", {
            className: e6.e,
            style: { aspectRatio: t },
            children: [(0, l.jsx)(e4.Ay, { className: n, videoComponent: r, width: i, ...a }), s],
        }),
    });
}
var e5 = n(866665),
    e7 = n(786889),
    e9 = n(90075);
let e8 = function () {
    return (0, l.jsx)(e5.m, {
        text: ei.intl.string(ei.t.GMZqSi),
        children: (0, l.jsx)("div", {
            className: e9.k,
            children: (0, l.jsx)(e7.A, { color: V.A.unsafe_rawColors.WHITE.css }),
        }),
    });
};
var te = n(145131);
let tt = 16 / 9;
function tn(e) {
    let {
            stageParticipant: t,
            rtcParticipant: n,
            channel: i,
            guildId: a,
            user: r,
            width: o,
            isModerator: c,
            onContextMenu: d,
            popoutType: u,
        } = e,
        p = s.useRef(null),
        { reducedMotion: h } = s.useContext(eH.C),
        { blocked: A, ignored: m, id: x } = t;
    return (0, l.jsx)(eU.A, {
        targetElementRef: p,
        user: r,
        guildId: a,
        channelId: i.id,
        clickTrap: !0,
        children: (e) =>
            (0, l.jsx)(e_.D, {
                innerRef: p,
                onContextMenu: (e) => d(n, e),
                ...e,
                children: (0, l.jsx)(
                    e3,
                    {
                        participant: n,
                        aspectRatio: tt,
                        blocked: A,
                        ignored: m,
                        channel: i,
                        className: te.V,
                        inCall: !0,
                        popoutType: u,
                        pulseSpeakingIndicator: !h.enabled,
                        width: o,
                        onContextMenu: d,
                        children: c && (0, l.jsx)(e8, {}),
                    },
                    x,
                ),
            }),
    });
}
function tl(e) {
    let {
            stageParticipant: t,
            rtcParticipant: n,
            channel: i,
            width: a,
            isModerator: r,
            onContextMenu: c,
            popoutType: d,
        } = e,
        { reducedMotion: p } = s.useContext(eH.C),
        { id: h, blocked: A, ignored: m } = t,
        g = (0, o.yK)([eJ.A], () => eJ.A.getAllActiveStreams(), []),
        { selectedParticipant: E, largeStream: C } = (0, o.cf)([x.A], () => ({
            selectedParticipant: null != i ? x.A.getSelectedParticipant(i.id) : null,
            largeStream: null != i && x.A.getStageStreamSize(i.id),
        })),
        f = s.useCallback(
            (e, t) => {
                if (
                    e.type === eL.lp.STREAM &&
                    0 === g.filter((t) => (0, eY._z)(t) === e.id && t.state !== ep.XYD.ENDED).length
                ) {
                    if (!(0, eQ.eo)(i, e0.A, P.A, L.A, eX.default)[0]) return;
                    (0, eK.A9)((0, eY.Iy)(e.id), { forceMultiple: t.shiftKey });
                }
                E?.id === e.id
                    ? C
                        ? (u.A.selectParticipant(i.id, null), u.A.updateStageStreamSize(i.id, !1))
                        : u.A.updateStageStreamSize(i.id, !0)
                    : (u.A.updateStageStreamSize(i.id, !1), u.A.selectParticipant(i.id, e.id));
            },
            [g, i, E, C],
        );
    return (0, l.jsx)(
        e3,
        {
            participant: n,
            aspectRatio: tt,
            fit: n.type === eL.lp.USER ? e$.$.COVER : void 0,
            blocked: A,
            ignored: m,
            channel: i,
            className: te.V,
            inCall: !0,
            popoutType: d,
            onClick: f,
            onContextMenu: c,
            pulseSpeakingIndicator: !p.enabled,
            width: a,
            children: r && n.type === eL.lp.USER && (0, l.jsx)(e8, {}),
        },
        h,
    );
}
let ts = s.memo(function (e) {
    let { participant: t, channel: s, width: i, popoutType: a } = e,
        { newestAnalyticsLocation: r } = (0, m.Ay)(A.A.STAGE_TILE),
        c = (0, j.Us)(),
        d = s.getGuildId(),
        u = w.default.getId();
    ef()(null != d, "Channel cannot be guildless");
    let { user: p } = t,
        h = (0, o.bG)([x.A], () => x.A.getParticipant(s.id, t.id), [s.id, t.id]),
        g = (0, o.bG)([e1.Ay], () => e1.Ay.isModerator(p.id, s.id), [s.id, p.id]);
    if (null == h || h.type === eL.lp.ACTIVITY) return null;
    function E(e) {
        (0, eO.x)({
            type: ej.ImpressionTypes.MENU,
            name: ej.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: { location: "StageTile", is_tile_owner: p.id === u, tile_type: e },
        });
    }
    function C(e, t, i, a) {
        if (null != d)
            switch (e.type) {
                case eL.lp.HIDDEN_STREAM:
                case eL.lp.STREAM:
                    (E(eL.qs.STREAM),
                        (0, ey.L3)(
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
                                    (0, l.jsx)(t, {
                                        ...n,
                                        stream: e.stream,
                                        appContext: c,
                                        exitFullscreen: () => {},
                                        onInteraction: (0, eR.s)("StreamContextMenu", r, {
                                            entrypoint: a,
                                            targetUserId: p.id,
                                            tileType: eL.qs.STREAM,
                                        }),
                                    });
                            },
                            { context: c },
                        ));
                    return;
                case eL.lp.USER:
                default:
                    if ((E(eL.qs.USER), i))
                        return (0, eZ.r)(t, p, s, { context: c }, (e, t) =>
                            (0, eR.Y)({
                                menuName: e,
                                menuItemProps: t,
                                entrypoint: eL.GK.THREE_DOT,
                                targetUserId: p.id,
                                location: r,
                                tileType: eL.qs.USER,
                            }),
                        );
                    (0, ey.L3)(
                        t,
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
                                n.e("245996"),
                                n.e("529422"),
                                n.e("823427"),
                                n.e("307059"),
                                n.e("449145"),
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
                                (0, l.jsx)(e, {
                                    ...t,
                                    user: p,
                                    guildId: d,
                                    channel: s,
                                    showMediaItems: !0,
                                    showStageChannelItems: !0,
                                    showChatItems: !1,
                                    onInteraction: (0, eR.s)("GuildChannelUserContextMenu", r, {
                                        targetUserId: p.id,
                                        tileType: eL.qs.USER,
                                    }),
                                });
                        },
                        { context: c },
                    );
            }
    }
    return h.type !== eL.lp.USER || h.voiceState?.selfVideo
        ? (0, l.jsx)(tl, {
              stageParticipant: t,
              rtcParticipant: h,
              channel: s,
              guildId: d,
              user: p,
              width: i,
              isModerator: g,
              onContextMenu: C,
              popoutType: a,
          })
        : (0, l.jsx)(tn, {
              stageParticipant: t,
              rtcParticipant: h,
              channel: s,
              guildId: d,
              user: p,
              width: i,
              isModerator: g,
              onContextMenu: C,
              popoutType: a,
          });
});
var ti = n(239131);
let ta = s.memo(function (e) {
    let { channel: t, participants: n, tileWidth: s, selectedParticipant: i, popoutType: a } = e;
    return (0, l.jsx)("div", {
        className: ti.q,
        children: n.map((e) =>
            e.id === i?.id ? null : (0, l.jsx)(ts, { channel: t, participant: e, width: s, popoutType: a }, e.id),
        ),
    });
});
var tr = n(847374),
    to = n(402216),
    tc = n(97808),
    td = n(778712),
    tu = n(717558),
    tp = n(636585),
    th = n(486020),
    tA = n(799656);
function tm(e) {
    let { channel: t, speaker: i, className: r } = e,
        o = s.useRef(null),
        { newestAnalyticsLocation: c } = (0, m.Ay)(),
        d = (0, j.Us)(),
        { reducedMotion: u } = s.useContext(eH.C),
        p = (0, tu.A)({ userId: i.id }),
        h = null != i.member ? (0, th.xT)(i.member) : null;
    function A(e) {
        (0, ey.L3)(
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
                    n.e("245996"),
                    n.e("529422"),
                    n.e("823427"),
                    n.e("307059"),
                    n.e("449145"),
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
                    (0, l.jsx)(e, {
                        ...n,
                        user: i.user,
                        guildId: t.guild_id,
                        channel: t,
                        showMediaItems: !0,
                        showStageChannelItems: !0,
                        showChatItems: !1,
                        onInteraction: (0, eR.s)("GuildChannelUserContextMenu", c),
                    });
            },
            { context: d },
        );
    }
    return (0, l.jsx)(eU.A, {
        targetElementRef: o,
        user: i.user,
        guildId: t.guild_id,
        channelId: t.id,
        clickTrap: !0,
        children: (e) =>
            (0, l.jsx)(e5.m, {
                targetElementRef: o,
                __unsupportedReactNodeAsText: i.userNick,
                position: "bottom",
                children: (0, l.jsx)(e_.D, {
                    ...e,
                    innerRef: o,
                    onClick: (t) => {
                        (t.stopPropagation(), e.onClick(t));
                    },
                    onContextMenu: A,
                    children: (0, l.jsx)(tc.eu, {
                        src: h ?? i.user.getAvatarURL(t.guild_id, 24),
                        size: td._3.SIZE_24,
                        className: a()(tA.my, r),
                        "aria-label": i.userNick,
                        isSpeaking: p && !u.enabled,
                    }),
                }),
            }),
    });
}
function tx(e) {
    let { speakers: t, channel: n } = e;
    return (0, l.jsx)(tp.A, {
        className: tA.z,
        guildId: n.guild_id,
        users: t,
        max: 10,
        renderUser: (e, t, s) => (0, l.jsx)(tm, { channel: n, speaker: e, className: t }, s),
        renderMoreUsers: (e, t, n) => (0, l.jsx)("div", { className: a()(tA.$U, t), children: e }, n),
    });
}
var tg = n(784269);
let tE = s.memo(function (e) {
    let {
        label: t,
        participantCount: n,
        onClick: s,
        className: i,
        collapsed: r,
        speakers: o,
        channel: c,
        isStreamLive: d,
    } = e;
    return (0, l.jsxs)(e_.D, {
        onClick: s,
        className: a()(tg.kL, i),
        children: [
            null == o
                ? (0, l.jsx)(X.n, { size: "custom", color: "currentColor", width: 20, height: 20, className: tg.Vo })
                : (0, l.jsx)(H.MicrophoneIcon, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                      className: tg.Vo,
                  }),
            (0, l.jsxs)(K.E, {
                color: "text-strong",
                variant: "text-md/semibold",
                className: tg.Qq,
                children: [t, " \u2014 ", n],
            }),
            r &&
                null != c &&
                null != o &&
                o.length > 0 &&
                (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(tx, { channel: c, speakers: o }), d && (0, l.jsx)(to.Ay, {})],
                }),
            (0, l.jsx)(tr.a, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: a()(tg.mw, { [tg.VU]: r }),
            }),
        ],
    });
});
var tC = n(676553);
function tf(e) {
    return e.type === B.wY.VOICE;
}
let tj = (0, ex.A)(function (e) {
    let t,
        n,
        { channel: i, width: a, onScroll: r, popoutType: c } = e,
        {
            selectedParticipantId: d,
            largeStream: u,
            chatOpen: p,
        } = (0, o.cf)(
            [x.A],
            () => ({
                selectedParticipantId: x.A.getSelectedParticipantId(i.id),
                largeStream: x.A.getStageStreamSize(i.id),
                chatOpen: x.A.getChatOpen(i.id),
            }),
            [i.id],
        ),
        h = (0, G.uy)(i.id),
        A = (0, G.zy)(i.id, B.ip.AUDIENCE),
        m = (0, o.bG)([eg.A], () => (null != d ? eg.A.getParticipant(i.id, d) : null)),
        g = (0, G.E5)(i.id, B.ip.SPEAKER),
        E = g.filter(tf),
        C = null != g.find((e) => e.type === B.wY.STREAM),
        f = Math.floor((a - 32) / 102),
        j = a < 424 ? 1 : a < 624 ? 2 : a < 824 || p ? 3 : 4,
        T = { [B.ip.SPEAKER]: j, [B.ip.AUDIENCE]: f, [B.ip.SELECTED]: 1 },
        S = (0, eE.Uo)(i.id),
        [N, I] = (0, eE.RG)(i.id, T, S),
        _ = [Math.max(N[0] ?? 1, 1), Math.max(N[1] ?? 1, 1), N[2]],
        { speakerTileWidth: y, speakerTileHeight: O } =
            ((n = Math.floor((t = Math.floor(a / j - 8)) / tt)), { speakerTileWidth: t, speakerTileHeight: n }),
        R = u ? a - 32 : Math.min(a - 64, 3 * y + 8);
    function U(e) {
        return e === N.length - 1 || (0 === A && 1 === e);
    }
    let [w, b] = s.useState(!1),
        [P, L] = s.useState(!1);
    return (0, l.jsx)(eW, {
        sections: _,
        renderSection: function (e) {
            let { section: t } = e;
            return 1 === t
                ? 0 === h
                    ? null
                    : (0, l.jsx)(
                          tE,
                          {
                              participantCount: h,
                              label: ei.intl.string(ei.t.CduOkx),
                              className: tC.wx,
                              onClick: () => b(!w),
                              collapsed: w,
                              speakers: E,
                              channel: i,
                              isStreamLive: C,
                          },
                          `speaker-header-${t}`,
                      )
                : 2 === t
                  ? 0 === A
                      ? null
                      : (0, l.jsx)(
                            tE,
                            {
                                participantCount: A,
                                label: ei.intl.string(ei.t["3foUu5"]),
                                className: tC.wx,
                                onClick: () => L(!P),
                                collapsed: P,
                                channel: i,
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
                    return (0, l.jsx)(
                        "div",
                        {
                            className: tC.Od,
                            children: (0, l.jsx)(ts, { channel: i, participant: a[0], width: R, popoutType: c }),
                        },
                        "selected-participant",
                    );
                case 1:
                    if (w) return null;
                    return (0, l.jsx)(
                        s.Fragment,
                        {
                            children: (0, l.jsx)(ta, {
                                tileWidth: y,
                                channel: i,
                                participants: a,
                                selectedParticipant: m,
                                popoutType: c,
                            }),
                        },
                        `speakers-${t}-${n}`,
                    );
                case 2:
                    if (P) return null;
                    return (0, l.jsx)(eq, { channel: i, participants: a, maxTiles: f }, `audience-${t}-${n}`);
                default:
                    return null;
            }
        },
        rowHeight: function (e) {
            return null == I[e][0] ? 0 : 0 === e ? R / tt + 8 : 1 === e ? (w ? 0 : O) : 98 * !P;
        },
        renderFooter: function (e) {
            let { section: t } = e;
            return U(t) ? (0, l.jsx)("div", { className: tC.jH }, "bottom-spacer") : null;
        },
        footerHeight: function (e) {
            return 1 === e ? 8 : 0 === e ? 12 : 88 * !!U(e);
        },
        className: tC.XG,
        chunkSize: 60,
        onScroll: r,
    });
});
var tT = n(717965),
    tS = n(895903),
    tN = n(666860),
    tI = n(423562),
    t_ = n(174459),
    ty = n(625494),
    tO = n(475815),
    tR = n(940518),
    tU = n(44540);
function tw(e) {
    ((0, f.X)(A.A.VOICE_CONTROL_TRAY, f.O.STAY_ON_TOP, e), T.setAlwaysOnTop(ep.MLl.CHANNEL_CALL_POPOUT, e));
}
function tb(e) {
    let {
            channel: t,
            appContext: n,
            popoutOpen: i,
            popoutWindow: a,
            popoutWindowAlwaysOnTop: r,
            selectedParticipant: c,
        } = e,
        { parentAnalyticsLocation: p } = (0, m.Ay)(),
        h = t.getGuildId(),
        A = (0, o.bG)([k.Ay], () => k.Ay.getMostRecentSelectedTextChannelId(h), [h]),
        E = w.default.getId(),
        C =
            !(0, o.bG)([x.A], () => x.A.isFullscreenInContext(n)) &&
            (!v.isPlatformEmbedded || M.Ay.supportsFeature(ep.BYE.POPOUT_WINDOWS)),
        j = null != c && c.type !== eL.lp.ACTIVITY && c.user.id !== E,
        S = s.useMemo(() => a?.window ?? window, [a]),
        I = (function (e) {
            let { channel: t, appContext: n, popoutOpen: i, popoutWindow: a, currentWindow: r } = e,
                { parentAnalyticsLocation: c } = (0, m.Ay)(),
                p = n === ep.BRT.POPOUT,
                h = s.useRef(null),
                { currentLayout: A, mode: g } = (0, o.cf)(
                    [x.A],
                    () => {
                        let e = x.A.getMode(t.id),
                            l = n === ep.BRT.POPOUT;
                        l && (e = ep._Of.VIDEO);
                        let s = e === ep._Of.VIDEO ? x.A.getLayout(t.id, n) : ep.DUB.MINIMUM;
                        return (l && s !== ep.DUB.FULL_SCREEN && (s = ep.DUB.NO_CHAT), { currentLayout: s, mode: e });
                    },
                    [t, n],
                ),
                E = (0, o.bG)([k.Ay], () => k.Ay.getVoiceChannelId() === t.id, [t.id]);
            s.useEffect(() => {
                h.current = g;
            });
            let C = s.useRef(A),
                { currentDocument: j, rootNode: S } = s.useMemo(() => {
                    let e = null != a && p ? a.document : document,
                        t = r.document.getElementById("app-mount");
                    return { currentWindow: r, currentDocument: e, rootNode: t };
                }, [a, p, r]),
                N = i && !p,
                I = g === ep._Of.VIDEO && E && !N,
                _ = s.useCallback(
                    (e, l) => {
                        l !== e &&
                            (u.A.updateLayout(t.id, l, n),
                            l === ep.DUB.FULL_SCREEN && t.isPrivate() && ty._.dispatch(ep.jej.TEXTAREA_BLUR));
                    },
                    [n, t],
                ),
                y = s.useCallback(
                    (e) => {
                        null == S ||
                            (e === ep.DUB.FULL_SCREEN &&
                                (_(e, C.current),
                                (0, tO.sP)((e) => {
                                    C.current = e;
                                }, j)));
                    },
                    [j, _, S],
                ),
                O = s.useCallback(
                    (e) => () => {
                        null != S &&
                            ((0, f.X)(c, f.O.FULL_SCREEN, e !== ep.DUB.FULL_SCREEN),
                            e !== ep.DUB.FULL_SCREEN
                                ? ((C.current = e), _(e, ep.DUB.FULL_SCREEN), (0, tO.tl)(S))
                                : y(e));
                    },
                    [_, y, S, c],
                );
            s.useEffect(() => {
                function e() {
                    null != S && ((0, tO._U)(S, j) || A !== ep.DUB.FULL_SCREEN || O(A)());
                }
                return (
                    j.addEventListener(tO.Wb, e),
                    () => {
                        j.removeEventListener(tO.Wb, e);
                    }
                );
            }, [j, A, O, S]);
            let R = { channel: t, maybeLeaveFullScreen: y },
                U = s.useRef(R);
            return (s.useEffect(() => {
                U.current = R;
            }),
            s.useEffect(() => {
                let { channel: e, maybeLeaveFullScreen: t } = U.current;
                return (
                    t_.default.track(ep.HAw.VIDEO_LAYOUT_TOGGLED, {
                        video_layout: p ? "popout" : A,
                        ...(0, tN.QS)(e.id),
                    }),
                    () => {
                        (p && (0, v.isMac)()) || t(A);
                    }
                );
            }, [A, p]),
            s.useEffect(() => {
                null != S && h.current === ep._Of.VIDEO && g === ep._Of.VOICE && (0, tO.sP)(S, j);
            }, [j, g, h, S]),
            s.useEffect(() => {
                !E && p && d.h.wait(() => T.close(ep.MLl.CHANNEL_CALL_POPOUT));
            }, [E, p]),
            I)
                ? (0, l.jsx)(tI.A, { themeable: !1, node: S, guestWindow: a, onClick: O(A) })
                : null;
        })({ channel: t, appContext: n, popoutOpen: i, popoutWindow: a, currentWindow: S }),
        _ = n === ep.BRT.POPOUT && v.isPlatformEmbedded && M.Ay.supportsFeature(ep.BYE.POPOUT_WINDOWS);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            j
                ? (0, l.jsx)(U.A, {
                      context: (0, g.A)(c.type),
                      userId: c.user.id,
                      currentWindow: S,
                      sliderClassName: tU.MQ,
                      location: p,
                  })
                : null,
            _ ? (0, l.jsx)(R.A, { popoutWindowAlwaysOnTop: r, onToggleStayOnTop: tw }) : null,
            C
                ? (0, l.jsx)(O.A, {
                      popoutOpen: i,
                      onOpenPopout: () => {
                          ((0, f.X)(p, f.O.POPOUT, !0),
                              (() => {
                                  let e = t.getGuildId();
                                  (null != e && null != A && (0, N.uh)(e, A), T.openChannelCallPopout(t));
                              })());
                      },
                      onClosePopout: () => {
                          ((0, f.X)(p, f.O.POPOUT, !1), d.h.wait(() => T.close(ep.MLl.CHANNEL_CALL_POPOUT)));
                      },
                  })
                : null,
            I,
        ],
    });
}
function tP(e) {
    let t,
        {
            channel: n,
            toggleRequestToSpeakSidebar: i,
            showRequestToSpeakSidebar: c,
            popoutWindow: d,
            popoutWindowAlwaysOnTop: h,
            popoutOpen: g,
            popoutType: C,
            chatOpen: f,
            idleProps: T,
        } = e,
        { analyticsLocations: S } = (0, m.Ay)(A.A.VOICE_CONTROL_TRAY),
        N = (0, j.Us)(),
        I = (0, o.bG)([k.Ay], () => k.Ay.getVoiceChannelId() === n.id, [n.id]),
        O = (0, o.bG)([L.A], () => L.A.can(ep.xBc.CONNECT, n)),
        R = (0, G.E5)(n.id, B.ip.SPEAKER),
        U = (0, o.bG)([x.A], () => x.A.getSelectedParticipant(n.id)),
        w = g && N !== ep.BRT.POPOUT,
        [P, v] = s.useState(0),
        M = s.useMemo(
            () =>
                (0, r.debounce)(
                    (e) => {
                        let { scrollTop: t } = e.target;
                        v(t);
                    },
                    1e3,
                    { leading: !0 },
                ),
            [],
        ),
        { isOnStartStageScreen: z } = (0, q.Ay)();
    (0, q.vI)(n);
    let V = (0, o.bG)([b.A], () => b.A.getToastsEnabled(n.id)),
        W = s.useCallback((e) => {
            (u.A.updateChatOpen(e.channel_id, !0),
                p.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
        }, []),
        H = (0, eu.A)(n) ? (null != U ? "84px" : "124px") : null != U ? "0px" : "48px";
    return (
        z && (H = "0px"),
        (t = z
            ? (0, l.jsx)(tS.A, {
                  channel: n,
                  onContinueClick: () => {
                      ((0, q.ek)(!1), I || (0, D.cy)(n));
                  },
              })
            : I
              ? (0, l.jsx)(tj, { channel: n, onScroll: M, popoutType: C })
              : (0, l.jsx)(F.A, { participants: R, channel: n, hasConnectPermission: O })),
        (0, l.jsx)(y.A, {
            style: { height: `calc(100% - ${H})`, paddingTop: H },
            disableGradients: !I || (0 === P && y.x.TOP),
            renderBottomCenter: () =>
                I
                    ? (0, l.jsx)(m.f5, {
                          value: S,
                          children: (0, l.jsx)(tT.A, { channel: n, isOnStartStageScreen: z }),
                      })
                    : null,
            renderBottomRight: () =>
                I
                    ? (0, l.jsx)(m.f5, {
                          value: S,
                          children: (0, l.jsx)(tb, {
                              channel: n,
                              appContext: N,
                              popoutOpen: g,
                              popoutWindow: d,
                              popoutWindowAlwaysOnTop: h,
                              selectedParticipant: U,
                          }),
                      })
                    : null,
            renderHeader: () =>
                (0, l.jsx)(em, { toggleRequestToSpeakSidebar: i, showRequestToSpeakSidebar: c, channel: n }),
            renderChatToasts: function () {
                return !V || f || w
                    ? null
                    : (0, l.jsx)(E.Ay, {
                          children: (0, l.jsx)(_.A, {
                              className: a()(tU.T6, { [tU.c3]: c }),
                              channelId: n.id,
                              onToastClick: W,
                          }),
                      });
            },
            screenMessage: w ? { mainText: ei.intl.string(ei.t.J5bXZU) } : null,
            ...T,
            children: !w && t,
        })
    );
}
function tL(e) {
    let { channel: t, popoutType: n } = e,
        [i, r] = s.useState(!1),
        d = s.useCallback(() => {
            r(!i);
        }, [i, r]),
        { popoutWindow: u, popoutWindowAlwaysOnTop: p } = (0, o.cf)([S.A], () => ({
            popoutWindow: S.A.getWindow(ep.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: S.A.getIsAlwaysOnTop(ep.MLl.CHANNEL_CALL_POPOUT),
        })),
        g = null != u && !u.closed,
        { analyticsLocations: f } = (0, m.Ay)(A.A.STAGE_CHANNEL_CALL),
        T = (0, j.Us)(),
        N = (0, o.bG)([x.A], () => x.A.getChatOpen(t.id), [t.id]),
        _ = (0, o.bG)([P.A], () => P.A.getGuild(t.guild_id), [t.guild_id]);
    (0, tR.A)();
    let { width: y = 0, ref: O } = (0, h.Ay)(),
        R = !g || T === ep.BRT.POPOUT;
    return (0, l.jsx)(m.f5, {
        value: f,
        children: (0, l.jsxs)(E.qh, {
            children: [
                (0, l.jsxs)("div", {
                    className: tU.kL,
                    ref: O,
                    children: [
                        (0, l.jsx)(c.N, {
                            theme: ep.NJ8.DARK,
                            children: (e) =>
                                (0, l.jsx)("div", {
                                    className: a()(tU.ik, e, { [tU.pR]: i, [tU.gy]: i || N }),
                                    children: (0, l.jsx)(I.Ay, {
                                        timeout: 2e3,
                                        children: (e) =>
                                            (0, l.jsx)(tP, {
                                                channel: t,
                                                toggleRequestToSpeakSidebar: d,
                                                showRequestToSpeakSidebar: i,
                                                popoutWindow: u,
                                                popoutWindowAlwaysOnTop: p,
                                                popoutOpen: g,
                                                popoutType: n,
                                                chatOpen: N,
                                                idleProps: e,
                                            }),
                                    }),
                                }),
                        }),
                        i ? (0, l.jsx)(z.Ay, { channel: t, toggleRequestToSpeakSidebar: d, chatOpen: N }) : null,
                        (0, l.jsx)("div", {
                            className: tU.B2,
                            children: N && R && (0, l.jsx)(C.A, { channel: t, guild: _, maxWidth: y - 550 }),
                        }),
                    ],
                }),
                (0, l.jsx)(E.WD, {}),
            ],
        }),
    });
}
