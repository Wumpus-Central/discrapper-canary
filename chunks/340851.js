i.d(t, { Ay: () => w, LR: () => D, aI: () => U });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(990078),
    d = i(834730),
    u = i(597601),
    c = i(922016),
    o = i(367513),
    m = i(442433),
    h = i(730852),
    A = i(401843),
    g = i(296216),
    p = i(793574),
    I = i(480890),
    x = i(47167),
    v = i(643501),
    f = i(916641),
    E = i(652896),
    _ = i(279250),
    N = i(346846),
    S = i(342296),
    C = i(481947),
    y = i(495544),
    j = i(71393),
    T = i(576705),
    b = i(287809),
    O = i(977997),
    G = i(772800);
i(281405);
var V = i(544105),
    R = i(325278),
    k = i(375708),
    P = i(976358);
function D(e) {
    let { numUsers: t } = e;
    return (0, n.jsx)("div", {
        className: P.BN,
        children: (0, n.jsxs)(d.E, { color: "text-muted", variant: "text-sm/medium", children: ["+", t] }),
    });
}
function U(e) {
    let { numAudience: t, collapsed: i } = e,
        l = i ? t : k.intl.formatToPlainString(k.t["+v2pN2"], { count: t });
    return (0, n.jsxs)("div", {
        className: a()(P.yJ, { [P.Nr]: i }),
        children: [
            (0, n.jsx)("div", {
                className: P.$L,
                children: (0, n.jsx)(u.L, { size: "md", color: "currentColor", className: P.wG }),
            }),
            (0, n.jsx)(d.E, { color: "text-muted", variant: "text-sm/medium", children: l }),
        ],
    });
}
let w = (0, g.J)(function (e) {
    let {
            collapsed: t,
            user: s,
            channel: d,
            mute: u,
            localMute: g,
            localVideoDisabled: D,
            deaf: U,
            video: w,
            embeddedApplication: M,
            serverMute: L,
            serverDeaf: H,
            nick: F,
            ringing: z,
            speaking: Y,
            disconnected: B,
            connectUserDragSource: K,
            canDrag: q,
            isStreaming: W,
            isWatching: $,
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
        ed = (0, x.Ay)(d),
        eu = l.useRef(null),
        [ec, eo] = l.useState(!1),
        em = l.useRef(null),
        eh = () => {
            eo(!ec);
        },
        eA = (e) => {
            eg();
        },
        eg = () => {
            clearTimeout(em.current), Q?.(s.id);
        };
    l.useEffect(
        () => () => {
            clearTimeout(em.current);
        },
        [],
    );
    let ep = () => {
            if (!W || !(0, _.eo)(d, O.A, j.A, T.A, v.default)[0]) return;
            let e = { streamType: R.U4.GUILD, ownerId: s.id, channelId: d.id, guildId: d.guild_id };
            y.default.getId() !== s.id && h.default.selectVoiceChannel(d.id),
                $ ? ((0, N.A)(e), o.A.selectParticipant(e.channelId, (0, E._z)(e))) : (0, A.Nl)(e),
                Q?.(s.id);
        },
        eI = (e) => {
            (0, m.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    i.e("8516"),
                    i.e("23531"),
                    i.e("94881"),
                    i.e("26132"),
                    i.e("46652"),
                    i.e("93190"),
                    i.e("34552"),
                    i.e("93103"),
                    i.e("8757"),
                    i.e("89673"),
                    i.e("85968"),
                    i.e("60195"),
                    i.e("21921"),
                    i.e("68403"),
                    i.e("76418"),
                    i.e("29787"),
                    i.e("71210"),
                    i.e("97558"),
                    i.e("94000"),
                    i.e("66495"),
                    i.e("88342"),
                    i.e("91994"),
                    i.e("42451"),
                    i.e("76665"),
                    i.e("98965"),
                    i.e("35313"),
                    i.e("24198"),
                    i.e("39171"),
                    i.e("36564"),
                    i.e("45996"),
                    i.e("52229"),
                    i.e("792"),
                    i.e("92822"),
                    i.e("23427"),
                    i.e("49145"),
                    i.e("29422"),
                    i.e("9291"),
                    i.e("7059"),
                    i.e("43116"),
                    i.e("70314"),
                    i.e("70515"),
                    i.e("27435"),
                    i.e("66939"),
                    i.e("17334"),
                    i.e("84841"),
                ]).then(i.bind(i, 107632));
                return (t) =>
                    (0, n.jsx)(e, {
                        ...t,
                        user: s,
                        guildId: d.guild_id,
                        channel: d,
                        showMediaItems: !0,
                        showStageChannelItems: d.isGuildStageVoice(),
                        onInteraction: (0, I.s)("GuildChannelUserContextMenu", p.A.VOICE_USER, { targetUserId: s.id }),
                    });
            });
        },
        ex = (0, n.jsx)("div", {
            className: P.kZ,
            "data-dnd-name": ed,
            onMouseEnter: en
                ? void 0
                : () => {
                      ec || (em.current = setTimeout(() => X?.(s.id), 100));
                  },
            onMouseLeave: en ? void 0 : eg,
            children: (0, n.jsx)(S.A, {
                clickTrap: s?.id === b.default.getCurrentUser()?.id && ec,
                targetElementRef: eu,
                user: s,
                guildId: d.guild_id,
                channelId: d.id,
                newAnalyticsLocations: [p.A.VOICE_USER],
                shouldShow: ec,
                onRequestClose: () => eo(!1),
                children: (e) => {
                    let i, l;
                    return (
                        (i = V.hv.has(et ?? "")),
                        (l = {
                            user: s,
                            speaking: Y,
                            disconnected: B,
                            mute: u,
                            localMute: g,
                            localVideoDisabled: D,
                            isStreaming: W,
                            isGuest: Z,
                            video: w,
                            priority: J,
                            ringing: z,
                            deaf: U,
                            nick: F,
                            collapsed: t,
                            overlap: t,
                            serverMute: L,
                            serverDeaf: H,
                            tabIndex: el,
                            otherClientSessionType: et,
                            voicePlatform: ei,
                            embeddedApplication: M,
                            avatarContainerClass: a()({ [P.dj]: !0 }),
                            disabled: en && !i,
                            selected: ec,
                            onClick: i ? void 0 : eh,
                            onDoubleClick: ep,
                            onContextMenu: eI,
                            guildId: d.guild_id,
                            isSelf: es,
                            application: ea,
                            game: er,
                            channelId: d.id,
                        }),
                        en
                            ? (0, n.jsx)(r.m, {
                                  text: (0, f.A)(et) ?? k.intl.string(k.t.IyYqqY),
                                  children: (0, n.jsx)(C.Ay, { ref: eu, ...l }),
                              })
                            : (0, n.jsx)(c.Y, {
                                  targetElementRef: eu,
                                  position: "right",
                                  renderPopout: () =>
                                      (0, n.jsx)(G.A, {
                                          channel: d,
                                          user: s,
                                          onAction: eg,
                                          onWatchStream: W ? ep : void 0,
                                      }),
                                  shouldShow: ee && !ec,
                                  onRequestClose: eA,
                                  spacing: 17,
                                  children: () =>
                                      (0, n.jsx)(C.Ay, {
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
    return q ? K(ex) : ex;
});
