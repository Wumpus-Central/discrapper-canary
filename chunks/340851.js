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
    y = i(669335),
    C = i(280450),
    j = i(71393),
    b = i(576705),
    T = i(287809),
    O = i(977997),
    G = i(772800);
i(281405);
var P = i(544105),
    V = i(325278),
    k = i(375708),
    w = i(321313);
function R(e) {
    let { numUsers: t } = e;
    return (0, n.jsx)("div", {
        className: w.BN,
        children: (0, n.jsxs)(r.E, { color: "text-muted", variant: "text-sm/medium", children: ["+", t] }),
    });
}
function D(e) {
    let { numAudience: t, collapsed: i } = e,
        l = i ? t : k.intl.formatToPlainString(k.t["+v2pN2"], { count: t });
    return (0, n.jsxs)("div", {
        className: a()(w.yJ, { [w.Nr]: i }),
        children: [
            (0, n.jsx)("div", {
                className: w.$L,
                children: (0, n.jsx)(d.L, { size: "md", color: "currentColor", className: w.wG }),
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
            connectUserDragSource: q,
            canDrag: $,
            isStreaming: W,
            isWatching: H,
            isGuest: Z,
            priority: J,
            showPreview: X,
            hidePreview: Q,
            shouldShowHoverPopout: ee,
            otherClientSessionType: et,
            voicePlatform: ei,
            isSelfOnOtherClient: en = !1,
            tabIndex: el,
            isSelf: es,
            application: ea,
            game: er,
        } = e,
        ed = (0, I.Ay)(r),
        eu = l.useRef(null),
        [eo, ec] = l.useState(!1),
        eA = l.useRef(null);
    function em() {
        ec(!eo);
    }
    function eg(e) {
        eh();
    }
    function eh() {
        (clearTimeout(eA.current), Q?.(s.id));
    }
    let ep = $
        ? null
        : {
              draggable: !0,
              onDragStart: function (e) {
                  (e.preventDefault(), e.stopPropagation());
              },
          };
    function ef() {
        if (!W || !(0, _.eo)(r, O.A, j.A, b.A, v.default)[0]) return;
        let e = { streamType: V.U4.GUILD, ownerId: s.id, channelId: r.id, guildId: r.guild_id };
        (C.default.getId() !== s.id && m.default.selectVoiceChannel(r.id),
            H ? ((0, E.A)(e), c.A.selectParticipant(e.channelId, (0, x._z)(e))) : (0, g.Nl)(e),
            Q?.(s.id));
    }
    function eI(e) {
        (0, A.L3)(e, async () => {
            let { default: e } = await Promise.all([
                i.e("207322"),
                i.e("622936"),
                i.e("216947"),
                i.e("463317"),
                i.e("926132"),
                i.e("146652"),
                i.e("834552"),
                i.e("708757"),
                i.e("993103"),
                i.e("585968"),
                i.e("893190"),
                i.e("21921"),
                i.e("676418"),
                i.e("571210"),
                i.e("166495"),
                i.e("88342"),
                i.e("189673"),
                i.e("311802"),
                i.e("229787"),
                i.e("698965"),
                i.e("882073"),
                i.e("797558"),
                i.e("691994"),
                i.e("235313"),
                i.e("576665"),
                i.e("436564"),
                i.e("939171"),
                i.e("624198"),
                i.e("252229"),
                i.e("245996"),
                i.e("700792"),
                i.e("592822"),
                i.e("449145"),
                i.e("529422"),
                i.e("823427"),
                i.e("309291"),
                i.e("307059"),
                i.e("343116"),
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
            clearTimeout(eA.current);
        },
        [],
    );
    let ev = (0, n.jsx)("div", {
        className: w.kZ,
        "data-dnd-name": ed,
        ...ep,
        onMouseEnter: en
            ? void 0
            : function () {
                  eo || (eA.current = setTimeout(() => X?.(s.id), 100));
              },
        onMouseLeave: en ? void 0 : eh,
        children: (0, n.jsx)(N.A, {
            clickTrap: s?.id === T.default.getCurrentUser()?.id && eo,
            targetElementRef: eu,
            user: s,
            guildId: r.guild_id,
            channelId: r.id,
            newAnalyticsLocations: [p.A.VOICE_USER],
            shouldShow: eo,
            onRequestClose: () => ec(!1),
            children: (e) => {
                let i, l;
                return (
                    (i = P.hv.has(et ?? "")),
                    (l = {
                        user: s,
                        speaking: K,
                        disconnected: Y,
                        mute: d,
                        localMute: h,
                        localVideoDisabled: R,
                        isStreaming: W,
                        isGuest: Z,
                        video: M,
                        priority: J,
                        ringing: B,
                        deaf: D,
                        nick: z,
                        collapsed: t,
                        overlap: t,
                        serverMute: L,
                        serverDeaf: F,
                        tabIndex: el,
                        otherClientSessionType: et,
                        voicePlatform: ei,
                        embeddedApplication: U,
                        avatarContainerClass: a()({ [w.dj]: !0 }),
                        disabled: en && !i,
                        selected: eo,
                        onClick: i ? void 0 : em,
                        onDoubleClick: ef,
                        onContextMenu: eI,
                        guildId: r.guild_id,
                        isSelf: es,
                        application: ea,
                        game: er,
                        channelId: r.id,
                    }),
                    en
                        ? (0, n.jsx)(u.m, {
                              text: (0, S.A)(et) ?? k.intl.string(k.t.IyYqqY),
                              children: (0, n.jsx)(y.Ay, { ref: eu, ...l }),
                          })
                        : (0, n.jsx)(o.Y, {
                              targetElementRef: eu,
                              position: "right",
                              renderPopout: (e) => {
                                  let { setPopoutRef: t } = e;
                                  return (0, n.jsx)(G.A, {
                                      channel: r,
                                      user: s,
                                      onAction: eh,
                                      onWatchStream: W ? ef : void 0,
                                      setPopoutRef: t,
                                  });
                              },
                              shouldShow: ee && !eo,
                              onRequestClose: eg,
                              spacing: 17,
                              children: () =>
                                  (0, n.jsx)(y.Ay, {
                                      ...l,
                                      ref: eu,
                                      onMouseDown: e.onMouseDown,
                                      onKeyDown: e.onKeyDown,
                                  }),
                          })
                );
            },
        }),
    });
    return $ ? q(ev) : ev;
});
