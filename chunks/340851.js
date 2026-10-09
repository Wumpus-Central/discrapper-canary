i.d(t, { Ay: () => M, LR: () => R, aI: () => D });
var n = i(477900),
    l = i(582128),
    s = i(503698),
    a = i.n(s),
    r = i(834730),
    d = i(597601),
    u = i(866665),
    o = i(922016),
    c = i(367513),
    A = i(442433),
    m = i(730852),
    g = i(401843),
    h = i(296216),
    p = i(793574),
    f = i(480890),
    I = i(47167),
    v = i(643501),
    S = i(916641),
    x = i(652896),
    _ = i(279250),
    E = i(346846),
    N = i(342296),
    y = i(936520),
    C = i(280450),
    b = i(71393),
    j = i(576705),
    T = i(287809),
    O = i(977997),
    G = i(772800);
i(281405);
var V = i(544105),
    P = i(325278),
    w = i(660183),
    k = i(321313);
function R(e) {
    let { numUsers: t } = e;
    return (0, n.jsx)("div", {
        className: k.BN,
        children: (0, n.jsxs)(r.E, { color: "text-muted", variant: "text-sm/medium", children: ["+", t] }),
    });
}
function D(e) {
    let { numAudience: t, collapsed: i } = e,
        l = i ? t : w.intl.formatToPlainString(w.t["+v2pN2"], { count: t });
    return (0, n.jsxs)("div", {
        className: a()(k.yJ, { [k.Nr]: i }),
        children: [
            (0, n.jsx)("div", {
                className: k.$L,
                children: (0, n.jsx)(d.L, { size: "md", color: "currentColor", className: k.wG }),
            }),
            (0, n.jsx)(r.E, { color: "text-muted", variant: "text-sm/medium", children: l }),
        ],
    });
}
let M = (0, h.J)(function (e) {
    let {
            collapsed: t,
            user: s,
            channel: r,
            mute: d,
            localMute: h,
            localVideoDisabled: R,
            deaf: D,
            video: M,
            embeddedApplication: U,
            serverMute: L,
            serverDeaf: F,
            nick: z,
            ringing: B,
            speaking: K,
            disconnected: Y,
            connecting: q,
            connectUserDragSource: $,
            canDrag: W,
            isStreaming: H,
            isWatching: Z,
            isGuest: J,
            priority: X,
            showPreview: Q,
            hidePreview: ee,
            shouldShowHoverPopout: et,
            otherClientSessionType: ei,
            voicePlatform: en,
            isSelfOnOtherClient: el = !1,
            tabIndex: es,
            isSelf: ea,
            application: er,
            game: ed,
        } = e,
        eu = (0, I.Ay)(r),
        eo = l.useRef(null),
        [ec, eA] = l.useState(!1),
        em = l.useRef(null);
    function eg() {
        eA(!ec);
    }
    function eh(e) {
        ep();
    }
    function ep() {
        (clearTimeout(em.current), ee?.(s.id));
    }
    let ef = W
        ? null
        : {
              draggable: !0,
              onDragStart: function (e) {
                  (e.preventDefault(), e.stopPropagation());
              },
          };
    function eI() {
        if (!H || !(0, _.eo)(r, O.A, b.A, j.A, v.default)[0]) return;
        let e = { streamType: P.U4.GUILD, ownerId: s.id, channelId: r.id, guildId: r.guild_id };
        (C.default.getId() !== s.id && m.default.selectVoiceChannel(r.id),
            Z ? ((0, E.A)(e), c.A.selectParticipant(e.channelId, (0, x._z)(e))) : (0, g.Nl)(e),
            ee?.(s.id));
    }
    function ev(e) {
        (0, A.L3)(e, async () => {
            let { default: e } = await Promise.all([
                i.e("339715"),
                i.e("819113"),
                i.e("622936"),
                i.e("216947"),
                i.e("463317"),
                i.e("834552"),
                i.e("993103"),
                i.e("708757"),
                i.e("893190"),
                i.e("585968"),
                i.e("189673"),
                i.e("21921"),
                i.e("28102"),
                i.e("882073"),
                i.e("797558"),
                i.e("571210"),
                i.e("676418"),
                i.e("691994"),
                i.e("229787"),
                i.e("166495"),
                i.e("576665"),
                i.e("88342"),
                i.e("311802"),
                i.e("698965"),
                i.e("235313"),
                i.e("624198"),
                i.e("715038"),
                i.e("436564"),
                i.e("245996"),
                i.e("252229"),
                i.e("939171"),
                i.e("700792"),
                i.e("592822"),
                i.e("529422"),
                i.e("823427"),
                i.e("242204"),
                i.e("307059"),
                i.e("309291"),
                i.e("449145"),
                i.e("343116"),
                i.e("951811"),
                i.e("470314"),
                i.e("70515"),
                i.e("404524"),
                i.e("654148"),
                i.e("666939"),
                i.e("717334"),
                i.e("184841"),
            ]).then(i.bind(i, 107632));
            return (t) =>
                (0, n.jsx)(e, {
                    ...t,
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
            clearTimeout(em.current);
        },
        [],
    );
    let eS = (0, n.jsx)("div", {
        className: k.kZ,
        "data-dnd-name": eu,
        ...ef,
        onMouseEnter: el
            ? void 0
            : function () {
                  ec || (em.current = setTimeout(() => Q?.(s.id), 100));
              },
        onMouseLeave: el ? void 0 : ep,
        children: (0, n.jsx)(N.A, {
            clickTrap: s?.id === T.default.getCurrentUser()?.id && ec,
            targetElementRef: eo,
            user: s,
            guildId: r.guild_id,
            channelId: r.id,
            newAnalyticsLocations: [p.A.VOICE_USER],
            shouldShow: ec,
            onRequestClose: () => eA(!1),
            children: (e) => {
                let i, l;
                return (
                    (i = V.hv.has(ei ?? "")),
                    (l = {
                        user: s,
                        speaking: K,
                        disconnected: Y,
                        connecting: q,
                        mute: d,
                        localMute: h,
                        localVideoDisabled: R,
                        isStreaming: H,
                        isGuest: J,
                        video: M,
                        priority: X,
                        ringing: B,
                        deaf: D,
                        nick: z,
                        collapsed: t,
                        overlap: t,
                        serverMute: L,
                        serverDeaf: F,
                        tabIndex: es,
                        otherClientSessionType: ei,
                        voicePlatform: en,
                        embeddedApplication: U,
                        avatarContainerClass: a()({ [k.dj]: !0 }),
                        disabled: el && !i,
                        selected: ec,
                        onClick: i ? void 0 : eg,
                        onDoubleClick: eI,
                        onContextMenu: ev,
                        guildId: r.guild_id,
                        isSelf: ea,
                        application: er,
                        game: ed,
                        channelId: r.id,
                    }),
                    el
                        ? (0, n.jsx)(u.m, {
                              text: (0, S.A)(ei) ?? w.intl.string(w.t.IyYqqY),
                              children: (0, n.jsx)(y.Ay, { ref: eo, ...l }),
                          })
                        : (0, n.jsx)(o.Y, {
                              targetElementRef: eo,
                              position: "right",
                              renderPopout: (e) => {
                                  let { setPopoutRef: t } = e;
                                  return (0, n.jsx)(G.A, {
                                      channel: r,
                                      user: s,
                                      onAction: ep,
                                      onWatchStream: H ? eI : void 0,
                                      setPopoutRef: t,
                                  });
                              },
                              shouldShow: et && !ec,
                              onRequestClose: eh,
                              spacing: 17,
                              children: () =>
                                  (0, n.jsx)(y.Ay, {
                                      ...l,
                                      ref: eo,
                                      onMouseDown: e.onMouseDown,
                                      onKeyDown: e.onKeyDown,
                                  }),
                          })
                );
            },
        }),
    });
    return W ? $(eS) : eS;
});
