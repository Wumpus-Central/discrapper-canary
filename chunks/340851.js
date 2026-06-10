t.d(i, { Ay: () => U, LR: () => w, aI: () => D });
var n = t(627968),
    l = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(990078),
    d = t(834730),
    u = t(597601),
    c = t(922016),
    o = t(367513),
    m = t(442433),
    A = t(730852),
    g = t(401843),
    h = t(296216),
    p = t(793574),
    I = t(480890),
    v = t(47167),
    f = t(643501),
    x = t(916641),
    S = t(652896),
    _ = t(279250),
    E = t(346846),
    N = t(342296),
    y = t(481947),
    C = t(495544),
    b = t(71393),
    j = t(576705),
    T = t(287809),
    O = t(977997),
    G = t(772800);
t(281405);
var k = t(544105),
    V = t(325278),
    P = t(375708),
    R = t(976358);
function w(e) {
    let { numUsers: i } = e;
    return (0, n.jsx)("div", {
        className: R.BN,
        children: (0, n.jsxs)(d.E, { color: "text-muted", variant: "text-sm/medium", children: ["+", i] }),
    });
}
function D(e) {
    let { numAudience: i, collapsed: t } = e,
        l = t ? i : P.intl.formatToPlainString(P.t["+v2pN2"], { count: i });
    return (0, n.jsxs)("div", {
        className: a()(R.yJ, { [R.Nr]: t }),
        children: [
            (0, n.jsx)("div", {
                className: R.$L,
                children: (0, n.jsx)(u.L, { size: "md", color: "currentColor", className: R.wG }),
            }),
            (0, n.jsx)(d.E, { color: "text-muted", variant: "text-sm/medium", children: l }),
        ],
    });
}
let U = (0, h.J)(function (e) {
    let {
            collapsed: i,
            user: s,
            channel: d,
            mute: u,
            localMute: h,
            localVideoDisabled: w,
            deaf: D,
            video: U,
            embeddedApplication: M,
            serverMute: F,
            serverDeaf: L,
            nick: z,
            ringing: K,
            speaking: B,
            disconnected: Y,
            connectUserDragSource: q,
            canDrag: H,
            isStreaming: $,
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
        ed = (0, v.Ay)(d),
        eu = l.useRef(null),
        [ec, eo] = l.useState(!1),
        em = l.useRef(null),
        eA = () => {
            eo(!ec);
        },
        eg = (e) => {
            eh();
        },
        eh = () => {
            clearTimeout(em.current), Q?.(s.id);
        },
        ep = H
            ? null
            : {
                  draggable: !0,
                  onDragStart: (e) => {
                      e.preventDefault(), e.stopPropagation();
                  },
              };
    l.useEffect(
        () => () => {
            clearTimeout(em.current);
        },
        [],
    );
    let eI = () => {
            if (!$ || !(0, _.eo)(d, O.A, b.A, j.A, f.default)[0]) return;
            let e = { streamType: V.U4.GUILD, ownerId: s.id, channelId: d.id, guildId: d.guild_id };
            C.default.getId() !== s.id && A.default.selectVoiceChannel(d.id),
                W ? ((0, E.A)(e), o.A.selectParticipant(e.channelId, (0, S._z)(e))) : (0, g.Nl)(e),
                Q?.(s.id);
        },
        ev = (e) => {
            (0, m.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e("29439"),
                    t.e("81030"),
                    t.e("94881"),
                    t.e("26132"),
                    t.e("46652"),
                    t.e("93103"),
                    t.e("93190"),
                    t.e("34552"),
                    t.e("21921"),
                    t.e("8757"),
                    t.e("76418"),
                    t.e("85968"),
                    t.e("89673"),
                    t.e("66495"),
                    t.e("71210"),
                    t.e("68403"),
                    t.e("29787"),
                    t.e("88342"),
                    t.e("82073"),
                    t.e("97558"),
                    t.e("89421"),
                    t.e("98965"),
                    t.e("91994"),
                    t.e("76665"),
                    t.e("35313"),
                    t.e("24198"),
                    t.e("39171"),
                    t.e("36564"),
                    t.e("52229"),
                    t.e("45996"),
                    t.e("792"),
                    t.e("92822"),
                    t.e("23427"),
                    t.e("49145"),
                    t.e("29422"),
                    t.e("9291"),
                    t.e("7059"),
                    t.e("43116"),
                    t.e("70314"),
                    t.e("70515"),
                    t.e("27435"),
                    t.e("66939"),
                    t.e("17334"),
                    t.e("84841"),
                ]).then(t.bind(t, 107632));
                return (i) =>
                    (0, n.jsx)(e, {
                        ...i,
                        user: s,
                        guildId: d.guild_id,
                        channel: d,
                        showMediaItems: !0,
                        showStageChannelItems: d.isGuildStageVoice(),
                        onInteraction: (0, I.s)("GuildChannelUserContextMenu", p.A.VOICE_USER, { targetUserId: s.id }),
                    });
            });
        },
        ef = (0, n.jsx)("div", {
            className: R.kZ,
            "data-dnd-name": ed,
            ...ep,
            onMouseEnter: en
                ? void 0
                : () => {
                      ec || (em.current = setTimeout(() => X?.(s.id), 100));
                  },
            onMouseLeave: en ? void 0 : eh,
            children: (0, n.jsx)(N.A, {
                clickTrap: s?.id === T.default.getCurrentUser()?.id && ec,
                targetElementRef: eu,
                user: s,
                guildId: d.guild_id,
                channelId: d.id,
                newAnalyticsLocations: [p.A.VOICE_USER],
                shouldShow: ec,
                onRequestClose: () => eo(!1),
                children: (e) => {
                    let t, l;
                    return (
                        (t = k.hv.has(ei ?? "")),
                        (l = {
                            user: s,
                            speaking: B,
                            disconnected: Y,
                            mute: u,
                            localMute: h,
                            localVideoDisabled: w,
                            isStreaming: $,
                            isGuest: Z,
                            video: U,
                            priority: J,
                            ringing: K,
                            deaf: D,
                            nick: z,
                            collapsed: i,
                            overlap: i,
                            serverMute: F,
                            serverDeaf: L,
                            tabIndex: el,
                            otherClientSessionType: ei,
                            voicePlatform: et,
                            embeddedApplication: M,
                            avatarContainerClass: a()({ [R.dj]: !0 }),
                            disabled: en && !t,
                            selected: ec,
                            onClick: t ? void 0 : eA,
                            onDoubleClick: eI,
                            onContextMenu: ev,
                            guildId: d.guild_id,
                            isSelf: es,
                            application: ea,
                            game: er,
                            channelId: d.id,
                        }),
                        en
                            ? (0, n.jsx)(r.m, {
                                  text: (0, x.A)(ei) ?? P.intl.string(P.t.IyYqqY),
                                  children: (0, n.jsx)(y.Ay, { ref: eu, ...l }),
                              })
                            : (0, n.jsx)(c.Y, {
                                  targetElementRef: eu,
                                  position: "right",
                                  renderPopout: () =>
                                      (0, n.jsx)(G.A, {
                                          channel: d,
                                          user: s,
                                          onAction: eh,
                                          onWatchStream: $ ? eI : void 0,
                                      }),
                                  shouldShow: ee && !ec,
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
    return H ? q(ef) : ef;
});
