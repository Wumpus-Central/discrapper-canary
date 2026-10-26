(n.r(t), n.d(t, { default: () => tP }));
var l = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(435558),
    o = n(17928),
    c = n(43990),
    d = n(367513),
    u = n(148494),
    p = n(765671),
    h = n(793574),
    A = n(688810),
    m = n(198052),
    x = n(520698),
    E = n(43189),
    g = n(518530),
    C = n(384059),
    f = n(267102),
    T = n(574172),
    j = n(869146),
    S = n(976860),
    N = n(461782),
    I = n(20465),
    _ = n(156652),
    y = n(128286),
    O = n(619344),
    R = n(821747),
    U = n(280450),
    b = n(249288),
    w = n(71393),
    P = n(576705),
    L = n(309010),
    v = n(723702),
    k = n(19575),
    M = n(747376),
    D = n(113783),
    G = n(518769),
    B = n(571909),
    q = n(374873),
    z = n(623413),
    F = n(661531),
    V = n(451394),
    W = n(831544),
    H = n(834730),
    K = n(177953),
    X = n(47167),
    Y = n(689874),
    Q = n(58736),
    $ = n(742589),
    Z = n(977851),
    J = n(776781),
    ee = n(446600),
    et = n(132500),
    en = n(280056),
    el = n(204651),
    es = n(105292),
    ei = n(116108);
function ea(e) {
    let { width: t = 24, height: n = 24, isBadged: i = !1 } = e,
        [a] = s.useState(() => (0, et.A)());
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
            (0, l.jsx)("g", { mask: `url(#${a})`, children: (0, l.jsx)(en.c, {}) }),
        ],
    });
}
function er(e) {
    let { className: t, numRequestToSpeak: n } = e,
        s = n > 0;
    return (0, l.jsxs)("div", {
        className: a()(ei.v, t),
        children: [
            (0, l.jsx)(ea, { isBadged: s }),
            s ? (0, l.jsx)(H.E, { className: ei.F, variant: "text-xs/semibold", children: n > 99 ? "99+" : n }) : null,
        ],
    });
}
function eo(e) {
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
    return (0, l.jsx)(el.A, {
        onClick: c,
        label: n ? es.intl.string(es.t.gKGz7A) : es.intl.string(es.t.ImQ4dW),
        className: i,
        iconComponent: () => (0, l.jsx)(er, { numRequestToSpeak: a, className: i }),
        ...o,
    });
}
var ec = n(366265),
    ed = n(533233),
    eu = n(652215),
    ep = n(903489);
function eh(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: s } = e,
        { analyticsLocations: i, newestAnalyticsLocation: r } = (0, A.Ay)(h.A.VOICE_CHANNEL_HEADER),
        c = (0, o.bG)([m.A], () => m.A.getChatOpen(t.id), [t.id]),
        u = (0, J.Ni)(t.id),
        p = (0, D.zy)(t.id, G.ip.REQUESTED_TO_SPEAK_ONLY);
    return (0, l.jsxs)(A.f5, {
        value: i,
        children: [
            (0, l.jsx)(Y.A, { channelId: t.id }, "clips-enabled-indicator"),
            !s && u
                ? (0, l.jsx)("div", {
                      className: a()(ep.x6, { [ep.vc]: c }),
                      children: (0, l.jsx)(eo, {
                          toggleRequestToSpeakSidebar: function () {
                              (c && d.A.updateChatOpen(t.id, !1), (0, C.X)(r, C.O.OPEN_REQUEST_TO_SPEAK_SIDEBAR), n());
                          },
                          showRequestToSpeakSidebar: s,
                          numRequestToSpeak: p,
                      }),
                  })
                : null,
            !c &&
                (0, l.jsx)("div", {
                    className: a()(ep.x6, { [ep.vc]: s }),
                    children: (0, l.jsx)(Z.V, {
                        channelId: t.id,
                        showRequestToSpeakSidebar: s,
                        toggleRequestToSpeakSidebar: n,
                        iconClassName: ep.iA,
                    }),
                }),
        ],
    });
}
function eA(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: s } = e,
        i = (0, X.Ay)(t),
        r = (0, o.bG)([ee.A], () => ee.A.getStageInstanceByChannel(t.id)),
        d = (0, D.uy)(t.id),
        u = (0, D.zy)(t.id, G.ip.AUDIENCE),
        p = (0, ed.A)(t),
        h = (0, l.jsx)(c.N, {
            theme: eu.NJ8.DARK,
            children: (e) =>
                (0, l.jsxs)(Q.Ay, {
                    toolbar: (0, l.jsx)(eh, {
                        toggleRequestToSpeakSidebar: n,
                        showRequestToSpeakSidebar: s,
                        channel: t,
                    }),
                    onDoubleClick: $.I,
                    transparent: !0,
                    className: a()(e, ep.lF),
                    children: [
                        (0, l.jsx)(Q.Ay.Icon, {
                            icon: V.q,
                            disabled: !0,
                            "aria-label": es.intl.string(es.t.EErMzA),
                            className: ep.Kk,
                            color: null != r ? F.A.colors.TEXT_MUTED.css : void 0,
                        }),
                        (0, l.jsx)(Q.Ay.Title, { className: ep.HA, wrapperClassName: ep.KD, children: r?.topic ?? i }),
                        (0, l.jsx)(Q.Ay.Divider, { className: ep.yF }),
                        (0, l.jsxs)(Q.Ay.Title, {
                            children: [
                                (0, l.jsx)(W.MicrophoneIcon, { size: "xs", color: F.A.colors.TEXT_MUTED.css }),
                                (0, l.jsx)(H.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: ep.N_,
                                    children: es.intl.format(es.t.chmM9N, { count: d }),
                                }),
                                (0, l.jsx)(K.n, { size: "xs", className: ep.Kk, color: "currentColor" }),
                                (0, l.jsx)(H.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: ep.N_,
                                    children: es.intl.format(es.t["+v2pN2"], { count: u }),
                                }),
                            ],
                        }),
                    ],
                }),
        });
    return p ? (0, l.jsxs)("div", { children: [h, (0, l.jsx)(ec.A, { channel: t })] }) : h;
}
var em = n(456412),
    ex = n(63995),
    eE = n(224648);
n(321073);
var eg = n(284009),
    eC = n.n(eg),
    ef = n(562708),
    eT = n(428678),
    ej = n(952270),
    eS = n(104510),
    eN = n(297152),
    eI = n(939249),
    e_ = n(442433),
    ey = n(139286),
    eO = n(480890),
    eR = n(342296),
    eU = n(696451),
    eb = n(562153),
    ew = n(105530),
    eP = n(806931),
    eL = n(314243);
let ev = s.memo(function (e) {
        let { guildId: t, channelId: n, user: s, isPremium: i, isBlocked: a, isIgnored: r } = e;
        return (0, l.jsxs)("div", {
            className: eL.FS,
            children: [
                a ? (0, l.jsx)(eT.K, { size: "lg", className: eL.Q6, color: F.A.unsafe_rawColors.RED_400.css }) : null,
                r ? (0, l.jsx)(ej.EyeSlashIcon, { size: "lg", className: eL.Q6 }) : null,
                (0, l.jsx)(H.E, {
                    className: eL.Qq,
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: eb.Ay.getName(t, n, s),
                }),
                i ? (0, l.jsx)(eS._, { className: eL.EH, color: F.A.unsafe_rawColors.GUILD_BOOSTING_PINK }) : null,
            ],
        });
    }),
    ek = s.memo(function (e) {
        let { participant: t, guildId: n, channel: s, isPremium: i } = e,
            { user: r, blocked: o, ignored: c, rtsState: d } = t,
            u = d === ew.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            p = d === ew.zF.REQUESTED_TO_SPEAK || u;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: eL.H,
                    children: [
                        p &&
                            (0, l.jsx)(eN.E, {
                                size: "md",
                                color: "currentColor",
                                className: a()(eL.Kk, { [eL.MD]: u }),
                            }),
                        (0, l.jsx)("img", {
                            src: r.getAvatarURL(s.guild_id, 56, !1) ?? void 0,
                            alt: r.username,
                            "aria-label": r.username,
                            className: a()(eL.my, { [eL.zj]: o || c }),
                        }),
                    ],
                }),
                (0, l.jsx)(ev, { guildId: n, channelId: s.id, user: r, isPremium: i, isBlocked: o, isIgnored: c }),
            ],
        });
    });
function eM() {
    return (0, l.jsx)("div", { className: eL.j8 });
}
let eD = s.memo(function (e) {
    let { participant: t, channel: i } = e,
        { user: r, blocked: c } = t,
        d = i.getGuildId(),
        u = U.default.getId(),
        { newestAnalyticsLocation: p } = (0, A.Ay)(h.A.AUDIENCE_TILE),
        m = (0, f.Us)(),
        x = (0, o.bG)([eU.Ay], () => null != d && eU.Ay.getMember(d, r.id)?.premiumSince != null, [d, r.id]),
        E = s.useRef(null);
    eC()(null != d, "Channel cannot be guildless");
    let g = s.useCallback(
        (e) => {
            ((0, ey.x)({
                type: ef.ImpressionTypes.MENU,
                name: ef.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                properties: { location: "AudienceTile", is_tile_owner: r.id === u, tile_type: eP.qs.USER },
            }),
                (0, e_.L3)(
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
                            n.e("78247"),
                            n.e("470314"),
                            n.e("70515"),
                            n.e("404524"),
                            n.e("654148"),
                            n.e("666939"),
                            n.e("281165"),
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
                                onInteraction: (0, eO.s)("GuildChannelUserContextMenu", p, {
                                    targetUserId: r.id,
                                    tileType: eP.qs.USER,
                                }),
                            });
                    },
                    { context: m },
                ));
        },
        [r, u, m, d, i, p],
    );
    return (0, l.jsx)(eR.A, {
        targetElementRef: E,
        user: r,
        guildId: i.guild_id,
        channelId: i.id,
        clickTrap: !0,
        children: (e) =>
            (0, l.jsx)(eI.D, {
                innerRef: E,
                className: a()(eL.iA, { [eL.wP]: x || c, [eL.fP]: x && c }),
                onContextMenu: g,
                ...e,
                children: (0, l.jsx)(ek, { participant: t, guildId: d, channel: i, isPremium: x }),
            }),
    });
});
var eG = n(784227);
let eB = s.memo(function (e) {
    let { channel: t, participants: n, maxTiles: s } = e;
    if (0 === n.length) return null;
    let i = [];
    for (let e = 0; e < s; e++)
        if (e < n.length) {
            let s = n[e];
            i.push((0, l.jsx)(eD, { channel: t, participant: s }, s.id));
        } else i.push((0, l.jsx)(eM, {}, e));
    return (0, l.jsx)("div", { className: eG.l, children: i });
});
var eq = n(446837),
    ez = n(201001),
    eF = n(473530);
let eV = (0, ez.$)(eF.qZ, eF.Rv, "", window.ResizeObserver ?? eq.t);
var eW = n(844222),
    eH = n(401843),
    eK = n(643501),
    eX = n(652896),
    eY = n(279250),
    eQ = n(51092),
    e$ = n(326567),
    eZ = n(616356),
    eJ = n(977997),
    e0 = n(312006),
    e1 = n(175203),
    e4 = n(360906),
    e2 = n(756872);
function e6(e) {
    let { aspectRatio: t, className: n, children: s, width: i, ...a } = e,
        r = e4.Ay.getVideoComponent();
    return (0, l.jsx)("div", {
        style: { width: i },
        className: e2.A,
        children: (0, l.jsxs)("div", {
            className: e2.e,
            style: { aspectRatio: t },
            children: [(0, l.jsx)(e1.Ay, { className: n, videoComponent: r, width: i, ...a }), s],
        }),
    });
}
var e5 = n(866665),
    e7 = n(786889),
    e8 = n(90075);
let e9 = function () {
    return (0, l.jsx)(e5.m, {
        text: es.intl.string(es.t.GMZqSi),
        children: (0, l.jsx)("div", {
            className: e8.k,
            children: (0, l.jsx)(e7.A, { color: F.A.unsafe_rawColors.WHITE.css }),
        }),
    });
};
var e3 = n(145131);
let te = 16 / 9;
function tt(e) {
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
        { reducedMotion: h } = s.useContext(eW.C),
        { blocked: A, ignored: m, id: x } = t;
    return (0, l.jsx)(eR.A, {
        targetElementRef: p,
        user: r,
        guildId: a,
        channelId: i.id,
        clickTrap: !0,
        children: (e) =>
            (0, l.jsx)(eI.D, {
                innerRef: p,
                onContextMenu: (e) => d(n, e),
                ...e,
                children: (0, l.jsx)(
                    e6,
                    {
                        participant: n,
                        aspectRatio: te,
                        blocked: A,
                        ignored: m,
                        channel: i,
                        className: e3.V,
                        inCall: !0,
                        popoutType: u,
                        pulseSpeakingIndicator: !h.enabled,
                        width: o,
                        onContextMenu: d,
                        children: c && (0, l.jsx)(e9, {}),
                    },
                    x,
                ),
            }),
    });
}
function tn(e) {
    let {
            stageParticipant: t,
            rtcParticipant: n,
            channel: i,
            width: a,
            isModerator: r,
            onContextMenu: c,
            popoutType: u,
        } = e,
        { reducedMotion: p } = s.useContext(eW.C),
        { id: h, blocked: A, ignored: x } = t,
        E = (0, o.yK)([eZ.A], () => eZ.A.getAllActiveStreams(), []),
        { selectedParticipant: g, largeStream: C } = (0, o.cf)([m.A], () => ({
            selectedParticipant: null != i ? m.A.getSelectedParticipant(i.id) : null,
            largeStream: null != i && m.A.getStageStreamSize(i.id),
        })),
        f = s.useCallback(
            (e, t) => {
                if (
                    e.type === eP.lp.STREAM &&
                    0 === E.filter((t) => (0, eX._z)(t) === e.id && t.state !== eu.XYD.ENDED).length
                ) {
                    if (!(0, eY.eo)(i, eJ.A, w.A, P.A, eK.default)[0]) return;
                    (0, eH.A9)((0, eX.Iy)(e.id), { forceMultiple: t.shiftKey });
                }
                g?.id === e.id
                    ? C
                        ? (d.A.selectParticipant(i.id, null), d.A.updateStageStreamSize(i.id, !1))
                        : d.A.updateStageStreamSize(i.id, !0)
                    : (d.A.updateStageStreamSize(i.id, !1), d.A.selectParticipant(i.id, e.id));
            },
            [E, i, g, C],
        );
    return (0, l.jsx)(
        e6,
        {
            participant: n,
            aspectRatio: te,
            fit: n.type === eP.lp.USER ? eQ.$.COVER : void 0,
            blocked: A,
            ignored: x,
            channel: i,
            className: e3.V,
            inCall: !0,
            popoutType: u,
            onClick: f,
            onContextMenu: c,
            pulseSpeakingIndicator: !p.enabled,
            width: a,
            children: r && n.type === eP.lp.USER && (0, l.jsx)(e9, {}),
        },
        h,
    );
}
let tl = s.memo(function (e) {
    let { participant: t, channel: s, width: i, popoutType: a } = e,
        { newestAnalyticsLocation: r } = (0, A.Ay)(h.A.STAGE_TILE),
        c = (0, f.Us)(),
        d = s.getGuildId(),
        u = U.default.getId();
    eC()(null != d, "Channel cannot be guildless");
    let { user: p } = t,
        x = (0, o.bG)([m.A], () => m.A.getParticipant(s.id, t.id), [s.id, t.id]),
        E = (0, o.bG)([e0.Ay], () => e0.Ay.isModerator(p.id, s.id), [s.id, p.id]);
    if (null == x || x.type === eP.lp.ACTIVITY) return null;
    function g(e) {
        (0, ey.x)({
            type: ef.ImpressionTypes.MENU,
            name: ef.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: { location: "StageTile", is_tile_owner: p.id === u, tile_type: e },
        });
    }
    function C(e, t, i, a) {
        if (null != d)
            switch (e.type) {
                case eP.lp.HIDDEN_STREAM:
                case eP.lp.STREAM:
                    (g(eP.qs.STREAM),
                        (0, e_.L3)(
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
                                        onInteraction: (0, eO.s)("StreamContextMenu", r, {
                                            entrypoint: a,
                                            targetUserId: p.id,
                                            tileType: eP.qs.STREAM,
                                        }),
                                    });
                            },
                            { context: c },
                        ));
                    return;
                case eP.lp.USER:
                default:
                    if ((g(eP.qs.USER), i))
                        return (0, e$.r)(t, p, s, { context: c }, (e, t) =>
                            (0, eO.Y)({
                                menuName: e,
                                menuItemProps: t,
                                entrypoint: eP.GK.THREE_DOT,
                                targetUserId: p.id,
                                location: r,
                                tileType: eP.qs.USER,
                            }),
                        );
                    (0, e_.L3)(
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
                                n.e("78247"),
                                n.e("470314"),
                                n.e("70515"),
                                n.e("404524"),
                                n.e("654148"),
                                n.e("666939"),
                                n.e("281165"),
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
                                    onInteraction: (0, eO.s)("GuildChannelUserContextMenu", r, {
                                        targetUserId: p.id,
                                        tileType: eP.qs.USER,
                                    }),
                                });
                        },
                        { context: c },
                    );
            }
    }
    return x.type !== eP.lp.USER || x.voiceState?.selfVideo
        ? (0, l.jsx)(tn, {
              stageParticipant: t,
              rtcParticipant: x,
              channel: s,
              guildId: d,
              user: p,
              width: i,
              isModerator: E,
              onContextMenu: C,
              popoutType: a,
          })
        : (0, l.jsx)(tt, {
              stageParticipant: t,
              rtcParticipant: x,
              channel: s,
              guildId: d,
              user: p,
              width: i,
              isModerator: E,
              onContextMenu: C,
              popoutType: a,
          });
});
var ts = n(239131);
let ti = s.memo(function (e) {
    let { channel: t, participants: n, tileWidth: s, selectedParticipant: i, popoutType: a } = e;
    return (0, l.jsx)("div", {
        className: ts.q,
        children: n.map((e) =>
            e.id === i?.id ? null : (0, l.jsx)(tl, { channel: t, participant: e, width: s, popoutType: a }, e.id),
        ),
    });
});
var ta = n(847374),
    tr = n(402216),
    to = n(97808),
    tc = n(778712),
    td = n(717558),
    tu = n(636585),
    tp = n(486020),
    th = n(799656);
function tA(e) {
    let { channel: t, speaker: i, className: r } = e,
        o = s.useRef(null),
        { newestAnalyticsLocation: c } = (0, A.Ay)(),
        d = (0, f.Us)(),
        { reducedMotion: u } = s.useContext(eW.C),
        p = (0, td.A)({ userId: i.id }),
        h = null != i.member ? (0, tp.xT)(i.member) : null;
    function m(e) {
        (0, e_.L3)(
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
                    n.e("78247"),
                    n.e("470314"),
                    n.e("70515"),
                    n.e("404524"),
                    n.e("654148"),
                    n.e("666939"),
                    n.e("281165"),
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
                        onInteraction: (0, eO.s)("GuildChannelUserContextMenu", c),
                    });
            },
            { context: d },
        );
    }
    return (0, l.jsx)(eR.A, {
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
                children: (0, l.jsx)(eI.D, {
                    ...e,
                    innerRef: o,
                    onClick: (t) => {
                        (t.stopPropagation(), e.onClick(t));
                    },
                    onContextMenu: m,
                    children: (0, l.jsx)(to.eu, {
                        src: h ?? i.user.getAvatarURL(t.guild_id, 24),
                        size: tc._3.SIZE_24,
                        className: a()(th.my, r),
                        "aria-label": i.userNick,
                        voiceStatus: p && !u.enabled ? tc.T2.SPEAKING : null,
                    }),
                }),
            }),
    });
}
function tm(e) {
    let { speakers: t, channel: n } = e;
    return (0, l.jsx)(tu.A, {
        className: th.z,
        guildId: n.guild_id,
        users: t,
        max: 10,
        renderUser: (e, t, s) => (0, l.jsx)(tA, { channel: n, speaker: e, className: t }, s),
        renderMoreUsers: (e, t, n) => (0, l.jsx)("div", { className: a()(th.$U, t), children: e }, n),
    });
}
var tx = n(784269);
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
    return (0, l.jsxs)(eI.D, {
        onClick: s,
        className: a()(tx.kL, i),
        children: [
            null == o
                ? (0, l.jsx)(K.n, { size: "custom", color: "currentColor", width: 20, height: 20, className: tx.Vo })
                : (0, l.jsx)(W.MicrophoneIcon, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                      className: tx.Vo,
                  }),
            (0, l.jsxs)(H.E, {
                color: "text-strong",
                variant: "text-md/semibold",
                className: tx.Qq,
                children: [t, " \u2014 ", n],
            }),
            r &&
                null != c &&
                null != o &&
                o.length > 0 &&
                (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(tm, { channel: c, speakers: o }), d && (0, l.jsx)(tr.Ay, {})],
                }),
            (0, l.jsx)(ta.a, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: a()(tx.mw, { [tx.VU]: r }),
            }),
        ],
    });
});
var tg = n(676553);
function tC(e) {
    return e.type === G.wY.VOICE;
}
let tf = (0, em.A)(function (e) {
    let t,
        n,
        { channel: i, width: a, onScroll: r, popoutType: c } = e,
        {
            selectedParticipantId: d,
            largeStream: u,
            chatOpen: p,
        } = (0, o.cf)(
            [m.A],
            () => ({
                selectedParticipantId: m.A.getSelectedParticipantId(i.id),
                largeStream: m.A.getStageStreamSize(i.id),
                chatOpen: m.A.getChatOpen(i.id),
            }),
            [i.id],
        ),
        h = (0, D.uy)(i.id),
        A = (0, D.zy)(i.id, G.ip.AUDIENCE),
        x = (0, o.bG)([ex.A], () => (null != d ? ex.A.getParticipant(i.id, d) : null)),
        E = (0, D.E5)(i.id, G.ip.SPEAKER),
        g = E.filter(tC),
        C = null != E.find((e) => e.type === G.wY.STREAM),
        f = Math.floor((a - 32) / 102),
        T = a < 424 ? 1 : a < 624 ? 2 : a < 824 || p ? 3 : 4,
        j = { [G.ip.SPEAKER]: T, [G.ip.AUDIENCE]: f, [G.ip.SELECTED]: 1 },
        S = (0, eE.Uo)(i.id),
        [N, I] = (0, eE.RG)(i.id, j, S),
        _ = [Math.max(N[0] ?? 1, 1), Math.max(N[1] ?? 1, 1), N[2]],
        { speakerTileWidth: y, speakerTileHeight: O } =
            ((n = Math.floor((t = Math.floor(a / T - 8)) / te)), { speakerTileWidth: t, speakerTileHeight: n }),
        R = u ? a - 32 : Math.min(a - 64, 3 * y + 8);
    function U(e) {
        return e === N.length - 1 || (0 === A && 1 === e);
    }
    let [b, w] = s.useState(!1),
        [P, L] = s.useState(!1);
    return (0, l.jsx)(eV, {
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
                              label: es.intl.string(es.t.CduOkx),
                              className: tg.wx,
                              onClick: () => w(!b),
                              collapsed: b,
                              speakers: g,
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
                                label: es.intl.string(es.t["3foUu5"]),
                                className: tg.wx,
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
                            className: tg.Od,
                            children: (0, l.jsx)(tl, { channel: i, participant: a[0], width: R, popoutType: c }),
                        },
                        "selected-participant",
                    );
                case 1:
                    if (b) return null;
                    return (0, l.jsx)(
                        s.Fragment,
                        {
                            children: (0, l.jsx)(ti, {
                                tileWidth: y,
                                channel: i,
                                participants: a,
                                selectedParticipant: x,
                                popoutType: c,
                            }),
                        },
                        `speakers-${t}-${n}`,
                    );
                case 2:
                    if (P) return null;
                    return (0, l.jsx)(eB, { channel: i, participants: a, maxTiles: f }, `audience-${t}-${n}`);
                default:
                    return null;
            }
        },
        rowHeight: function (e) {
            return null == I[e][0] ? 0 : 0 === e ? R / te + 8 : 1 === e ? (b ? 0 : O) : 98 * !P;
        },
        renderFooter: function (e) {
            let { section: t } = e;
            return U(t) ? (0, l.jsx)("div", { className: tg.jH }, "bottom-spacer") : null;
        },
        footerHeight: function (e) {
            return 1 === e ? 8 : 0 === e ? 12 : 88 * !!U(e);
        },
        className: tg.XG,
        chunkSize: 60,
        onScroll: r,
    });
});
var tT = n(717965),
    tj = n(895903),
    tS = n(666860),
    tN = n(423562),
    tI = n(174459),
    t_ = n(625494),
    ty = n(475815),
    tO = n(940518),
    tR = n(44540);
function tU(e) {
    ((0, C.X)(h.A.VOICE_CONTROL_TRAY, C.O.STAY_ON_TOP, e), T.setAlwaysOnTop(eu.MLl.CHANNEL_CALL_POPOUT, e));
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
        { parentAnalyticsLocation: u } = (0, A.Ay)(),
        p = t.getGuildId(),
        h = (0, o.bG)([L.Ay], () => L.Ay.getMostRecentSelectedTextChannelId(p), [p]),
        E = U.default.getId(),
        g =
            !(0, o.bG)([m.A], () => m.A.isFullscreenInContext(n)) &&
            (!v.isPlatformEmbedded || k.Ay.supportsFeature(eu.BYE.POPOUT_WINDOWS)),
        f = null != c && c.type !== eP.lp.ACTIVITY && c.user.id !== E,
        j = s.useMemo(() => a?.window ?? window, [a]),
        N = (function (e) {
            let { channel: t, appContext: n, popoutOpen: i, popoutWindow: a, currentWindow: r } = e,
                { parentAnalyticsLocation: c } = (0, A.Ay)(),
                u = n === eu.BRT.POPOUT,
                p = s.useRef(null),
                { currentLayout: h, mode: x } = (0, o.cf)(
                    [m.A],
                    () => {
                        let e = m.A.getMode(t.id),
                            l = n === eu.BRT.POPOUT;
                        l && (e = eu._Of.VIDEO);
                        let s = e === eu._Of.VIDEO ? m.A.getLayout(t.id, n) : eu.DUB.MINIMUM;
                        return (l && s !== eu.DUB.FULL_SCREEN && (s = eu.DUB.NO_CHAT), { currentLayout: s, mode: e });
                    },
                    [t, n],
                ),
                E = (0, o.bG)([L.Ay], () => L.Ay.getVoiceChannelId() === t.id, [t.id]);
            s.useEffect(() => {
                p.current = x;
            });
            let g = s.useRef(h),
                { currentDocument: f, rootNode: j } = s.useMemo(() => {
                    let e = null != a && u ? a.document : document,
                        t = r.document.getElementById("app-mount");
                    return { currentWindow: r, currentDocument: e, rootNode: t };
                }, [a, u, r]),
                S = i && !u,
                N = x === eu._Of.VIDEO && E && !S,
                I = s.useCallback(
                    (e, l) => {
                        l !== e &&
                            (d.A.updateLayout(t.id, l, n),
                            l === eu.DUB.FULL_SCREEN && t.isPrivate() && t_._.dispatch(eu.jej.TEXTAREA_BLUR));
                    },
                    [n, t],
                ),
                _ = s.useCallback(
                    (e) => {
                        null == j ||
                            (e === eu.DUB.FULL_SCREEN &&
                                (I(e, g.current),
                                (0, ty.sP)((e) => {
                                    g.current = e;
                                }, f)));
                    },
                    [f, I, j],
                ),
                y = s.useCallback(
                    (e) => () => {
                        null != j &&
                            ((0, C.X)(c, C.O.FULL_SCREEN, e !== eu.DUB.FULL_SCREEN),
                            e !== eu.DUB.FULL_SCREEN
                                ? ((g.current = e), I(e, eu.DUB.FULL_SCREEN), (0, ty.tl)(j))
                                : _(e));
                    },
                    [I, _, j, c],
                );
            s.useEffect(() => {
                function e() {
                    null != j && ((0, ty._U)(j, f) || h !== eu.DUB.FULL_SCREEN || y(h)());
                }
                return (
                    f.addEventListener(ty.Wb, e),
                    () => {
                        f.removeEventListener(ty.Wb, e);
                    }
                );
            }, [f, h, y, j]);
            let O = { channel: t, maybeLeaveFullScreen: _ },
                R = s.useRef(O);
            return (s.useEffect(() => {
                R.current = O;
            }),
            s.useEffect(() => {
                let { channel: e, maybeLeaveFullScreen: t } = R.current;
                return (
                    tI.default.track(eu.HAw.VIDEO_LAYOUT_TOGGLED, {
                        video_layout: u ? "popout" : h,
                        ...(0, tS.QS)(e.id),
                    }),
                    () => {
                        (u && (0, v.isMac)()) || t(h);
                    }
                );
            }, [h, u]),
            s.useEffect(() => {
                null != j && p.current === eu._Of.VIDEO && x === eu._Of.VOICE && (0, ty.sP)(j, f);
            }, [f, x, p, j]),
            s.useEffect(() => {
                !E && u && T.close(eu.MLl.CHANNEL_CALL_POPOUT);
            }, [E, u]),
            N)
                ? (0, l.jsx)(tN.A, { themeable: !1, node: j, guestWindow: a, onClick: y(h) })
                : null;
        })({ channel: t, appContext: n, popoutOpen: i, popoutWindow: a, currentWindow: j }),
        I = n === eu.BRT.POPOUT && v.isPlatformEmbedded && k.Ay.supportsFeature(eu.BYE.POPOUT_WINDOWS);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            f
                ? (0, l.jsx)(R.A, {
                      context: (0, x.A)(c.type),
                      userId: c.user.id,
                      currentWindow: j,
                      sliderClassName: tR.MQ,
                      location: u,
                  })
                : null,
            I ? (0, l.jsx)(O.A, { popoutWindowAlwaysOnTop: r, onToggleStayOnTop: tU }) : null,
            g
                ? (0, l.jsx)(y.A, {
                      popoutOpen: i,
                      onOpenPopout: () => {
                          ((0, C.X)(u, C.O.POPOUT, !0),
                              (() => {
                                  let e = t.getGuildId();
                                  (null != e && null != h && (0, S.uh)(e, h), T.openChannelCallPopout(t));
                              })());
                      },
                      onClosePopout: () => {
                          ((0, C.X)(u, C.O.POPOUT, !1), T.close(eu.MLl.CHANNEL_CALL_POPOUT));
                      },
                  })
                : null,
            N,
        ],
    });
}
function tw(e) {
    let t,
        {
            channel: n,
            toggleRequestToSpeakSidebar: i,
            showRequestToSpeakSidebar: c,
            popoutWindow: p,
            popoutWindowAlwaysOnTop: x,
            popoutOpen: g,
            popoutType: C,
            chatOpen: T,
            idleProps: j,
        } = e,
        { analyticsLocations: S } = (0, A.Ay)(h.A.VOICE_CONTROL_TRAY),
        N = (0, f.Us)(),
        y = (0, o.bG)([L.Ay], () => L.Ay.getVoiceChannelId() === n.id, [n.id]),
        O = (0, o.bG)([P.A], () => P.A.can(eu.xBc.CONNECT, n)),
        R = (0, D.E5)(n.id, G.ip.SPEAKER),
        U = (0, o.bG)([m.A], () => m.A.getSelectedParticipant(n.id)),
        w = g && N !== eu.BRT.POPOUT,
        [v, k] = s.useState(0),
        q = s.useMemo(
            () =>
                (0, r.debounce)(
                    (e) => {
                        let { scrollTop: t } = e.target;
                        k(t);
                    },
                    1e3,
                    { leading: !0 },
                ),
            [],
        ),
        { isOnStartStageScreen: F } = (0, B.Ay)();
    (0, B.vI)(n);
    let V = (0, o.bG)([b.A], () => b.A.getToastsEnabled(n.id)),
        W = s.useCallback((e) => {
            (d.A.updateChatOpen(e.channel_id, !0),
                u.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
        }, []),
        H = (0, ed.A)(n) ? (null != U ? "84px" : "124px") : null != U ? "0px" : "48px";
    return (
        F && (H = "0px"),
        (t = F
            ? (0, l.jsx)(tj.A, {
                  channel: n,
                  onContinueClick: () => {
                      ((0, B.ek)(!1), y || (0, M.cy)(n));
                  },
              })
            : y
              ? (0, l.jsx)(tf, { channel: n, onScroll: q, popoutType: C })
              : (0, l.jsx)(z.A, { participants: R, channel: n, hasConnectPermission: O })),
        (0, l.jsx)(_.A, {
            style: { height: `calc(100% - ${H})`, paddingTop: H },
            disableGradients: !y || (0 === v && _.x.TOP),
            renderBottomCenter: () =>
                y
                    ? (0, l.jsx)(A.f5, {
                          value: S,
                          children: (0, l.jsx)(tT.A, { channel: n, isOnStartStageScreen: F }),
                      })
                    : null,
            renderBottomRight: () =>
                y
                    ? (0, l.jsx)(A.f5, {
                          value: S,
                          children: (0, l.jsx)(tb, {
                              channel: n,
                              appContext: N,
                              popoutOpen: g,
                              popoutWindow: p,
                              popoutWindowAlwaysOnTop: x,
                              selectedParticipant: U,
                          }),
                      })
                    : null,
            renderHeader: () =>
                (0, l.jsx)(eA, { toggleRequestToSpeakSidebar: i, showRequestToSpeakSidebar: c, channel: n }),
            renderChatToasts: function () {
                return !V || T || w
                    ? null
                    : (0, l.jsx)(E.Ay, {
                          children: (0, l.jsx)(I.A, {
                              className: a()(tR.T6, { [tR.c3]: c }),
                              channelId: n.id,
                              onToastClick: W,
                          }),
                      });
            },
            screenMessage: w ? { mainText: es.intl.string(es.t.J5bXZU) } : null,
            ...j,
            children: !w && t,
        })
    );
}
function tP(e) {
    let { channel: t, popoutType: n } = e,
        [i, r] = s.useState(!1),
        d = s.useCallback(() => {
            r(!i);
        }, [i, r]),
        { popoutWindow: u, popoutWindowAlwaysOnTop: x } = (0, o.cf)([j.A], () => ({
            popoutWindow: j.A.getWindow(eu.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: j.A.getIsAlwaysOnTop(eu.MLl.CHANNEL_CALL_POPOUT),
        })),
        C = null != u && !u.closed,
        { analyticsLocations: T } = (0, A.Ay)(h.A.STAGE_CHANNEL_CALL),
        S = (0, f.Us)(),
        I = (0, o.bG)([m.A], () => m.A.getChatOpen(t.id), [t.id]),
        _ = (0, o.bG)([w.A], () => w.A.getGuild(t.guild_id), [t.guild_id]);
    (0, tO.A)();
    let { width: y = 0, ref: O } = (0, p.Ay)(),
        R = !C || S === eu.BRT.POPOUT;
    return (0, l.jsx)(A.f5, {
        value: T,
        children: (0, l.jsxs)(E.qh, {
            children: [
                (0, l.jsxs)("div", {
                    className: tR.kL,
                    ref: O,
                    children: [
                        (0, l.jsx)(c.N, {
                            theme: eu.NJ8.DARK,
                            children: (e) =>
                                (0, l.jsx)("div", {
                                    className: a()(tR.ik, e, { [tR.pR]: i, [tR.gy]: i || I }),
                                    children: (0, l.jsx)(N.Ay, {
                                        timeout: 2e3,
                                        children: (e) =>
                                            (0, l.jsx)(tw, {
                                                channel: t,
                                                toggleRequestToSpeakSidebar: d,
                                                showRequestToSpeakSidebar: i,
                                                popoutWindow: u,
                                                popoutWindowAlwaysOnTop: x,
                                                popoutOpen: C,
                                                popoutType: n,
                                                chatOpen: I,
                                                idleProps: e,
                                            }),
                                    }),
                                }),
                        }),
                        i ? (0, l.jsx)(q.Ay, { channel: t, toggleRequestToSpeakSidebar: d, chatOpen: I }) : null,
                        (0, l.jsx)("div", {
                            className: tR.B2,
                            children: I && R && (0, l.jsx)(g.A, { channel: t, guild: _, maxWidth: y - 550 }),
                        }),
                    ],
                }),
                (0, l.jsx)(E.WD, {}),
            ],
        }),
    });
}
