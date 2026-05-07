i.d(t, { Ay: () => D, LR: () => P, aI: () => U });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(990078),
    d = i(834730),
    o = i(597601),
    u = i(922016),
    c = i(367513),
    m = i(442433),
    h = i(730852),
    g = i(401843),
    A = i(296216),
    p = i(793574),
    I = i(480890),
    x = i(47167),
    v = i(643501),
    f = i(916641),
    E = i(652896),
    N = i(279250),
    _ = i(346846),
    S = i(342296),
    y = i(481947),
    C = i(495544),
    j = i(71393),
    b = i(576705),
    T = i(287809),
    O = i(977997),
    G = i(772800);
i(281405);
var V = i(544105),
    k = i(325278),
    R = i(375708),
    w = i(976358);
function P(e) {
    let { numUsers: t } = e;
    return (0, n.jsx)("div", {
        className: w.BN,
        children: (0, n.jsxs)(d.E, { color: "text-muted", variant: "text-sm/medium", children: ["+", t] }),
    });
}
function U(e) {
    let { numAudience: t, collapsed: i } = e,
        l = i ? t : R.intl.formatToPlainString(R.t["+v2pN2"], { count: t });
    return (0, n.jsxs)("div", {
        className: a()(w.yJ, { [w.Nr]: i }),
        children: [
            (0, n.jsx)("div", {
                className: w.$L,
                children: (0, n.jsx)(o.L, { size: "md", color: "currentColor", className: w.wG }),
            }),
            (0, n.jsx)(d.E, { color: "text-muted", variant: "text-sm/medium", children: l }),
        ],
    });
}
let D = (0, A.J)(function (e) {
    let {
            collapsed: t,
            user: s,
            channel: d,
            mute: o,
            localMute: A,
            localVideoDisabled: P,
            deaf: U,
            video: D,
            embeddedApplication: M,
            serverMute: L,
            serverDeaf: H,
            nick: F,
            ringing: z,
            speaking: K,
            disconnected: Y,
            connectUserDragSource: q,
            canDrag: B,
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
        } = e,
        er = (0, x.Ay)(d),
        ed = l.useRef(null),
        [eo, eu] = l.useState(!1),
        ec = l.useRef(null),
        em = () => {
            eu(!eo);
        },
        eh = (e) => {
            eg();
        },
        eg = () => {
            clearTimeout(ec.current), Q?.(s.id);
        };
    l.useEffect(
        () => () => {
            clearTimeout(ec.current);
        },
        [],
    );
    let eA = () => {
            if (!W || !(0, N.eo)(d, O.A, j.A, b.A, v.default)[0]) return;
            let e = { streamType: k.U4.GUILD, ownerId: s.id, channelId: d.id, guildId: d.guild_id };
            C.default.getId() !== s.id && h.default.selectVoiceChannel(d.id),
                $ ? ((0, _.A)(e), c.A.selectParticipant(e.channelId, (0, E._z)(e))) : (0, g.Nl)(e),
                Q?.(s.id);
        },
        ep = (e) => {
            (0, m.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    i.e("758"),
                    i.e("27107"),
                    i.e("19960"),
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
                    i.e("91007"),
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
        eI = (0, n.jsx)("div", {
            className: w.kZ,
            "data-dnd-name": er,
            onMouseEnter: en
                ? void 0
                : () => {
                      eo || (ec.current = setTimeout(() => X?.(s.id), 100));
                  },
            onMouseLeave: en ? void 0 : eg,
            children: (0, n.jsx)(S.A, {
                clickTrap: s?.id === T.default.getCurrentUser()?.id && eo,
                targetElementRef: ed,
                user: s,
                guildId: d.guild_id,
                channelId: d.id,
                newAnalyticsLocations: [p.A.VOICE_USER],
                shouldShow: eo,
                onRequestClose: () => eu(!1),
                children: (e) => {
                    let i, l;
                    return (
                        (i = V.hv.has(et ?? "")),
                        (l = {
                            user: s,
                            speaking: K,
                            disconnected: Y,
                            mute: o,
                            localMute: A,
                            localVideoDisabled: P,
                            isStreaming: W,
                            isGuest: Z,
                            video: D,
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
                            avatarContainerClass: a()({ [w.dj]: !0 }),
                            disabled: en && !i,
                            selected: eo,
                            onClick: i ? void 0 : em,
                            onDoubleClick: eA,
                            onContextMenu: ep,
                            guildId: d.guild_id,
                            isSelf: es,
                            application: ea,
                            channelId: d.id,
                        }),
                        en
                            ? (0, n.jsx)(r.m, {
                                  text: (0, f.A)(et) ?? R.intl.string(R.t.IyYqqY),
                                  children: (0, n.jsx)(y.Ay, { ref: ed, ...l }),
                              })
                            : (0, n.jsx)(u.Y, {
                                  targetElementRef: ed,
                                  position: "right",
                                  renderPopout: () =>
                                      (0, n.jsx)(G.A, {
                                          channel: d,
                                          user: s,
                                          onAction: eg,
                                          onWatchStream: W ? eA : void 0,
                                      }),
                                  shouldShow: ee && !eo,
                                  onRequestClose: eh,
                                  spacing: 17,
                                  children: () =>
                                      (0, n.jsx)(y.Ay, {
                                          ...l,
                                          ref: ed,
                                          onMouseDown: e.onMouseDown,
                                          onKeyDown: e.onKeyDown,
                                      }),
                              })
                    );
                },
            }),
        });
    return B ? q(eI) : eI;
});
