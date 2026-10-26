t.d(i, { Ay: () => U, LR: () => R, aI: () => M });
var n = t(477900),
    l = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(834730),
    d = t(597601),
    o = t(866665),
    u = t(265872),
    c = t(367513),
    A = t(442433),
    m = t(730852),
    g = t(401843),
    h = t(296216),
    p = t(793574),
    f = t(480890),
    I = t(47167),
    v = t(643501),
    S = t(916641),
    x = t(652896),
    _ = t(279250),
    E = t(346846),
    N = t(342296),
    y = t(936520),
    C = t(280450),
    b = t(71393),
    j = t(576705),
    T = t(287809),
    O = t(977997),
    G = t(772800);
t(281405);
var V = t(544105),
    P = t(325278),
    w = t(105292),
    k = t(321313);
function R(e) {
    let { numUsers: i } = e;
    return (0, n.jsx)("div", {
        className: k.BN,
        children: (0, n.jsxs)(r.E, { color: "text-muted", variant: "text-sm/medium", children: ["+", i] }),
    });
}
function M(e) {
    let { numAudience: i, collapsed: t } = e,
        l = t ? i : w.intl.formatToPlainString(w.t["+v2pN2"], { count: i });
    return (0, n.jsxs)("div", {
        className: a()(k.yJ, { [k.Nr]: t }),
        children: [
            (0, n.jsx)("div", {
                className: k.$L,
                children: (0, n.jsx)(d.L, { size: "md", color: "currentColor", className: k.wG }),
            }),
            (0, n.jsx)(r.E, { color: "text-muted", variant: "text-sm/medium", children: l }),
        ],
    });
}
let U = (0, h.J)(function (e) {
    let {
            collapsed: i,
            user: s,
            channel: r,
            mute: d,
            localMute: h,
            localVideoDisabled: R,
            deaf: M,
            video: U,
            embeddedApplication: D,
            serverMute: L,
            serverDeaf: F,
            nick: z,
            ringing: B,
            speaking: K,
            playingSoundboard: Y,
            disconnected: q,
            connecting: $,
            connectUserDragSource: H,
            canDrag: W,
            isStreaming: Z,
            isWatching: J,
            isGuest: X,
            priority: Q,
            showPreview: ee,
            hidePreview: ei,
            shouldShowHoverPopout: et,
            otherClientSessionType: en,
            voicePlatform: el,
            isSelfOnOtherClient: es = !1,
            tabIndex: ea,
            isSelf: er,
            application: ed,
            game: eo,
            soundboardMuted: eu,
        } = e,
        ec = (0, I.Ay)(r),
        eA = l.useRef(null),
        [em, eg] = l.useState(!1),
        eh = l.useRef(null);
    function ep() {
        eg(!em);
    }
    function ef(e) {
        eI();
    }
    function eI() {
        (clearTimeout(eh.current), ei?.(s.id));
    }
    let ev = W
        ? null
        : {
              draggable: !0,
              onDragStart: function (e) {
                  (e.preventDefault(), e.stopPropagation());
              },
          };
    function eS() {
        if (!Z || !(0, _.eo)(r, O.A, b.A, j.A, v.default)[0]) return;
        let e = { streamType: P.U4.GUILD, ownerId: s.id, channelId: r.id, guildId: r.guild_id };
        (C.default.getId() !== s.id && m.default.selectVoiceChannel(r.id),
            J ? ((0, E.A)(e), c.A.selectParticipant(e.channelId, (0, x._z)(e))) : (0, g.Nl)(e),
            ei?.(s.id));
    }
    function ex(e) {
        (0, A.L3)(e, async () => {
            let { default: e } = await Promise.all([
                t.e("339715"),
                t.e("142033"),
                t.e("622936"),
                t.e("216947"),
                t.e("463317"),
                t.e("834552"),
                t.e("993103"),
                t.e("708757"),
                t.e("893190"),
                t.e("585968"),
                t.e("28102"),
                t.e("189673"),
                t.e("21921"),
                t.e("882073"),
                t.e("797558"),
                t.e("571210"),
                t.e("676418"),
                t.e("691994"),
                t.e("229787"),
                t.e("166495"),
                t.e("576665"),
                t.e("88342"),
                t.e("311802"),
                t.e("698965"),
                t.e("235313"),
                t.e("624198"),
                t.e("715038"),
                t.e("436564"),
                t.e("245996"),
                t.e("252229"),
                t.e("939171"),
                t.e("700792"),
                t.e("592822"),
                t.e("529422"),
                t.e("823427"),
                t.e("242204"),
                t.e("307059"),
                t.e("309291"),
                t.e("449145"),
                t.e("343116"),
                t.e("951811"),
                t.e("470314"),
                t.e("70515"),
                t.e("404524"),
                t.e("654148"),
                t.e("666939"),
                t.e("717334"),
                t.e("184841"),
            ]).then(t.bind(t, 107632));
            return (i) =>
                (0, n.jsx)(e, {
                    ...i,
                    user: s,
                    guildId: r.guild_id,
                    channel: r,
                    showMediaItems: !0,
                    showStageChannelItems: r.isGuildStageVoice(),
                    onInteraction: (0, f.s)("GuildChannelUserContextMenu", p.A.VOICE_USER, { targetUserId: s.id }),
                });
        });
    }
    l.useEffect(
        () => () => {
            clearTimeout(eh.current);
        },
        [],
    );
    let e_ = (0, n.jsx)("div", {
        className: k.kZ,
        "data-dnd-name": ec,
        ...ev,
        onMouseEnter: es
            ? void 0
            : function () {
                  em || (eh.current = setTimeout(() => ee?.(s.id), 100));
              },
        onMouseLeave: es ? void 0 : eI,
        children: (0, n.jsx)(N.A, {
            clickTrap: s?.id === T.default.getCurrentUser()?.id && em,
            targetElementRef: eA,
            user: s,
            guildId: r.guild_id,
            channelId: r.id,
            newAnalyticsLocations: [p.A.VOICE_USER],
            shouldShow: em,
            onRequestClose: () => eg(!1),
            children: (e) => {
                let t, l;
                return (
                    (t = V.hv.has(en ?? "")),
                    (l = {
                        user: s,
                        speaking: K,
                        playingSoundboard: Y,
                        disconnected: q,
                        connecting: $,
                        mute: d,
                        localMute: h,
                        localVideoDisabled: R,
                        isStreaming: Z,
                        isGuest: X,
                        video: U,
                        priority: Q,
                        ringing: B,
                        deaf: M,
                        nick: z,
                        collapsed: i,
                        overlap: i,
                        serverMute: L,
                        serverDeaf: F,
                        tabIndex: ea,
                        otherClientSessionType: en,
                        voicePlatform: el,
                        embeddedApplication: D,
                        avatarContainerClass: a()({ [k.dj]: !0 }),
                        disabled: es && !t,
                        selected: em,
                        onClick: t ? void 0 : ep,
                        onDoubleClick: eS,
                        onContextMenu: ex,
                        guildId: r.guild_id,
                        isSelf: er,
                        application: ed,
                        game: eo,
                        channelId: r.id,
                        soundboardMuted: eu,
                    }),
                    es
                        ? (0, n.jsx)(o.m, {
                              text: (0, S.A)(en) ?? w.intl.string(w.t.IyYqqY),
                              children: (0, n.jsx)(y.Ay, { ref: eA, ...l }),
                          })
                        : (0, n.jsx)(u.Y, {
                              targetElementRef: eA,
                              position: "right",
                              renderPopout: (e) => {
                                  let { setPopoutRef: i } = e;
                                  return (0, n.jsx)(G.A, {
                                      channel: r,
                                      user: s,
                                      onAction: eI,
                                      onWatchStream: Z ? eS : void 0,
                                      setPopoutRef: i,
                                  });
                              },
                              shouldShow: et && !em,
                              onRequestClose: ef,
                              spacing: 17,
                              children: () =>
                                  (0, n.jsx)(y.Ay, {
                                      ...l,
                                      ref: eA,
                                      onMouseDown: e.onMouseDown,
                                      onKeyDown: e.onKeyDown,
                                  }),
                          })
                );
            },
        }),
    });
    return W ? H(e_) : e_;
});
