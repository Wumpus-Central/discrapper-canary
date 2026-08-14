t.d(i, { Ay: () => U, LR: () => w, aI: () => D });
var n = t(477900),
    l = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(834730),
    d = t(597601),
    u = t(866665),
    o = t(922016),
    c = t(367513),
    A = t(442433),
    m = t(730852),
    g = t(401843),
    h = t(296216),
    p = t(793574),
    f = t(480890),
    I = t(47167),
    v = t(643501),
    x = t(916641),
    S = t(652896),
    _ = t(279250),
    E = t(346846),
    N = t(342296),
    y = t(481947),
    C = t(280450),
    b = t(71393),
    j = t(576705),
    T = t(287809),
    G = t(977997),
    O = t(772800);
t(281405);
var P = t(544105),
    k = t(325278),
    V = t(375708),
    R = t(55678);
function w(e) {
    let { numUsers: i } = e;
    return (0, n.jsx)("div", {
        className: R.BN,
        children: (0, n.jsxs)(r.E, { color: "text-muted", variant: "text-sm/medium", children: ["+", i] }),
    });
}
function D(e) {
    let { numAudience: i, collapsed: t } = e,
        l = t ? i : V.intl.formatToPlainString(V.t["+v2pN2"], { count: i });
    return (0, n.jsxs)("div", {
        className: a()(R.yJ, { [R.Nr]: t }),
        children: [
            (0, n.jsx)("div", {
                className: R.$L,
                children: (0, n.jsx)(d.L, { size: "md", color: "currentColor", className: R.wG }),
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
            localVideoDisabled: w,
            deaf: D,
            video: U,
            embeddedApplication: M,
            serverMute: L,
            serverDeaf: F,
            nick: z,
            ringing: K,
            speaking: B,
            disconnected: Y,
            connectUserDragSource: q,
            canDrag: $,
            isStreaming: H,
            isWatching: W,
            isGuest: Z,
            priority: J,
            showPreview: X,
            hidePreview: Q,
            shouldShowHoverPopout: ee,
            otherClientSessionType: ei,
            voicePlatform: et,
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
        clearTimeout(eA.current), Q?.(s.id);
    }
    let ep = $
        ? null
        : {
              draggable: !0,
              onDragStart: function (e) {
                  e.preventDefault(), e.stopPropagation();
              },
          };
    function ef() {
        if (!H || !(0, _.eo)(r, G.A, b.A, j.A, v.default)[0]) return;
        let e = { streamType: k.U4.GUILD, ownerId: s.id, channelId: r.id, guildId: r.guild_id };
        C.default.getId() !== s.id && m.default.selectVoiceChannel(r.id),
            W ? ((0, E.A)(e), c.A.selectParticipant(e.channelId, (0, S._z)(e))) : (0, g.Nl)(e),
            Q?.(s.id);
    }
    function eI(e) {
        (0, A.L3)(e, async () => {
            let { default: e } = await Promise.all([
                t.e("943630"),
                t.e("676279"),
                t.e("545309"),
                t.e("397705"),
                t.e("926132"),
                t.e("146652"),
                t.e("993103"),
                t.e("893190"),
                t.e("834552"),
                t.e("708757"),
                t.e("21921"),
                t.e("585968"),
                t.e("189673"),
                t.e("571210"),
                t.e("468403"),
                t.e("676418"),
                t.e("229787"),
                t.e("166495"),
                t.e("88342"),
                t.e("882073"),
                t.e("797558"),
                t.e("691994"),
                t.e("311802"),
                t.e("698965"),
                t.e("576665"),
                t.e("235313"),
                t.e("624198"),
                t.e("939171"),
                t.e("436564"),
                t.e("252229"),
                t.e("245996"),
                t.e("700792"),
                t.e("592822"),
                t.e("823427"),
                t.e("449145"),
                t.e("529422"),
                t.e("309291"),
                t.e("307059"),
                t.e("343116"),
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
            clearTimeout(eA.current);
        },
        [],
    );
    let ev = (0, n.jsx)("div", {
        className: R.kZ,
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
                let t, l;
                return (
                    (t = P.hv.has(ei ?? "")),
                    (l = {
                        user: s,
                        speaking: B,
                        disconnected: Y,
                        mute: d,
                        localMute: h,
                        localVideoDisabled: w,
                        isStreaming: H,
                        isGuest: Z,
                        video: U,
                        priority: J,
                        ringing: K,
                        deaf: D,
                        nick: z,
                        collapsed: i,
                        overlap: i,
                        serverMute: L,
                        serverDeaf: F,
                        tabIndex: el,
                        otherClientSessionType: ei,
                        voicePlatform: et,
                        embeddedApplication: M,
                        avatarContainerClass: a()({ [R.dj]: !0 }),
                        disabled: en && !t,
                        selected: eo,
                        onClick: t ? void 0 : em,
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
                              text: (0, x.A)(ei) ?? V.intl.string(V.t.IyYqqY),
                              children: (0, n.jsx)(y.Ay, { ref: eu, ...l }),
                          })
                        : (0, n.jsx)(o.Y, {
                              targetElementRef: eu,
                              position: "right",
                              renderPopout: (e) => {
                                  let { setPopoutRef: i } = e;
                                  return (0, n.jsx)(O.A, {
                                      channel: r,
                                      user: s,
                                      onAction: eh,
                                      onWatchStream: H ? ef : void 0,
                                      setPopoutRef: i,
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
