t.d(i, { Ay: () => M, LR: () => R, aI: () => D });
var n = t(477900),
    l = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(834730),
    d = t(597601),
    u = t(866665),
    o = t(265872),
    c = t(367513),
    A = t(442433),
    m = t(730852),
    g = t(401843),
    h = t(296216),
    f = t(793574),
    p = t(480890),
    I = t(47167),
    v = t(643501),
    S = t(916641),
    x = t(652896),
    _ = t(279250),
    E = t(346846),
    N = t(342296),
    y = t(936520),
    C = t(280450),
    j = t(71393),
    b = t(576705),
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
function D(e) {
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
let M = (0, h.J)(function (e) {
    let {
            collapsed: i,
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
            canDrag: H,
            isStreaming: W,
            isWatching: Z,
            isGuest: J,
            priority: X,
            showPreview: Q,
            hidePreview: ee,
            shouldShowHoverPopout: ei,
            otherClientSessionType: et,
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
        ef();
    }
    function ef() {
        (clearTimeout(em.current), ee?.(s.id));
    }
    let ep = H
        ? null
        : {
              draggable: !0,
              onDragStart: function (e) {
                  (e.preventDefault(), e.stopPropagation());
              },
          };
    function eI() {
        if (!W || !(0, _.eo)(r, O.A, j.A, b.A, v.default)[0]) return;
        let e = { streamType: P.U4.GUILD, ownerId: s.id, channelId: r.id, guildId: r.guild_id };
        (C.default.getId() !== s.id && m.default.selectVoiceChannel(r.id),
            Z ? ((0, E.A)(e), c.A.selectParticipant(e.channelId, (0, x._z)(e))) : (0, g.Nl)(e),
            ee?.(s.id));
    }
    function ev(e) {
        (0, A.L3)(e, async () => {
            let { default: e } = await Promise.all([
                t.e("339715"),
                t.e("774723"),
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
                    onInteraction: (0, p.s)("GuildChannelUserContextMenu", f.A.VOICE_USER, { targetUserId: s.id }),
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
        ...ep,
        onMouseEnter: el
            ? void 0
            : function () {
                  ec || (em.current = setTimeout(() => Q?.(s.id), 100));
              },
        onMouseLeave: el ? void 0 : ef,
        children: (0, n.jsx)(N.A, {
            clickTrap: s?.id === T.default.getCurrentUser()?.id && ec,
            targetElementRef: eo,
            user: s,
            guildId: r.guild_id,
            channelId: r.id,
            newAnalyticsLocations: [f.A.VOICE_USER],
            shouldShow: ec,
            onRequestClose: () => eA(!1),
            children: (e) => {
                let t, l;
                return (
                    (t = V.hv.has(et ?? "")),
                    (l = {
                        user: s,
                        speaking: K,
                        disconnected: Y,
                        connecting: q,
                        mute: d,
                        localMute: h,
                        localVideoDisabled: R,
                        isStreaming: W,
                        isGuest: J,
                        video: M,
                        priority: X,
                        ringing: B,
                        deaf: D,
                        nick: z,
                        collapsed: i,
                        overlap: i,
                        serverMute: L,
                        serverDeaf: F,
                        tabIndex: es,
                        otherClientSessionType: et,
                        voicePlatform: en,
                        embeddedApplication: U,
                        avatarContainerClass: a()({ [k.dj]: !0 }),
                        disabled: el && !t,
                        selected: ec,
                        onClick: t ? void 0 : eg,
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
                              text: (0, S.A)(et) ?? w.intl.string(w.t.IyYqqY),
                              children: (0, n.jsx)(y.Ay, { ref: eo, ...l }),
                          })
                        : (0, n.jsx)(o.Y, {
                              targetElementRef: eo,
                              position: "right",
                              renderPopout: (e) => {
                                  let { setPopoutRef: i } = e;
                                  return (0, n.jsx)(G.A, {
                                      channel: r,
                                      user: s,
                                      onAction: ef,
                                      onWatchStream: W ? eI : void 0,
                                      setPopoutRef: i,
                                  });
                              },
                              shouldShow: ei && !ec,
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
    return H ? $(eS) : eS;
});
