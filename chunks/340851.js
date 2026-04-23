n.d(t, { Ay: () => w, LR: () => U, aI: () => P });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(990078),
    o = n(834730),
    d = n(597601),
    c = n(265872),
    u = n(367513),
    h = n(442433),
    A = n(956793),
    _ = n(401843),
    m = n(296216),
    g = n(793574),
    p = n(480890),
    f = n(47167),
    E = n(643501),
    x = n(916641),
    I = n(652896),
    C = n(279250),
    b = n(346846),
    N = n(342296),
    S = n(481947),
    v = n(961350),
    T = n(71393),
    y = n(576705),
    j = n(287809),
    R = n(977997),
    L = n(772800);
n(281405);
var O = n(544105),
    G = n(502075),
    M = n(985018),
    D = n(976358);
function U(e) {
    let { numUsers: t } = e;
    return (0, i.jsx)("div", {
        className: D.BN,
        children: (0, i.jsxs)(o.E, { color: "text-muted", variant: "text-sm/medium", children: ["+", t] }),
    });
}
function P(e) {
    let { numAudience: t, collapsed: n } = e,
        l = n ? t : M.intl.formatToPlainString(M.t["+v2pN2"], { count: t });
    return (0, i.jsxs)("div", {
        className: a()(D.yJ, { [D.Nr]: n }),
        children: [
            (0, i.jsx)("div", {
                className: D.$L,
                children: (0, i.jsx)(d.L, { size: "md", color: "currentColor", className: D.wG }),
            }),
            (0, i.jsx)(o.E, { color: "text-muted", variant: "text-sm/medium", children: l }),
        ],
    });
}
let w = (0, m.J)(function (e) {
    let {
            collapsed: t,
            user: s,
            channel: o,
            mute: d,
            localMute: m,
            localVideoDisabled: U,
            deaf: P,
            video: w,
            embeddedApplication: k,
            serverMute: V,
            serverDeaf: B,
            nick: H,
            ringing: F,
            speaking: W,
            disconnected: Y,
            connectUserDragSource: K,
            canDrag: z,
            isStreaming: q,
            isWatching: X,
            isGuest: Q,
            priority: Z,
            showPreview: J,
            hidePreview: $,
            shouldShowHoverPopout: ee,
            otherClientSessionType: et,
            voicePlatform: en,
            isSelfOnOtherClient: ei = !1,
            tabIndex: el,
            isSelf: es,
            application: ea,
        } = e,
        er = (0, f.Ay)(o),
        eo = l.useRef(null),
        [ed, ec] = l.useState(!1),
        eu = l.useRef(null),
        eh = () => {
            ec(!ed);
        },
        eA = (e) => {
            e_();
        },
        e_ = () => {
            clearTimeout(eu.current), $?.(s.id);
        };
    l.useEffect(
        () => () => {
            clearTimeout(eu.current);
        },
        [],
    );
    let em = () => {
            if (!q || !(0, C.eo)(o, R.A, T.A, y.A, E.default)[0]) return;
            let e = { streamType: G.U4.GUILD, ownerId: s.id, channelId: o.id, guildId: o.guild_id };
            v.default.getId() !== s.id && A.default.selectVoiceChannel(o.id),
                X ? ((0, b.A)(e), u.A.selectParticipant(e.channelId, (0, I._z)(e))) : (0, _.Nl)(e),
                $?.(s.id);
        },
        eg = (e) => {
            (0, h.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("84841"), n.e("96474")]).then(
                    n.bind(n, 107632),
                );
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        user: s,
                        guildId: o.guild_id,
                        channel: o,
                        showMediaItems: !0,
                        showStageChannelItems: o.isGuildStageVoice(),
                        onInteraction: (0, p.s)("GuildChannelUserContextMenu", g.A.VOICE_USER, { targetUserId: s.id }),
                    });
            });
        },
        ep = (0, i.jsx)("div", {
            className: D.kZ,
            "data-dnd-name": er,
            onMouseEnter: ei
                ? void 0
                : () => {
                      ed || (eu.current = setTimeout(() => J?.(s.id), 100));
                  },
            onMouseLeave: ei ? void 0 : e_,
            children: (0, i.jsx)(N.A, {
                clickTrap: s?.id === j.default.getCurrentUser()?.id && ed,
                targetElementRef: eo,
                user: s,
                guildId: o.guild_id,
                channelId: o.id,
                newAnalyticsLocations: [g.A.VOICE_USER],
                shouldShow: ed,
                onRequestClose: () => ec(!1),
                children: (e) => {
                    let n, l;
                    return (
                        (n = O.hv.has(et ?? "")),
                        (l = {
                            user: s,
                            speaking: W,
                            disconnected: Y,
                            mute: d,
                            localMute: m,
                            localVideoDisabled: U,
                            isStreaming: q,
                            isGuest: Q,
                            video: w,
                            priority: Z,
                            ringing: F,
                            deaf: P,
                            nick: H,
                            collapsed: t,
                            overlap: t,
                            serverMute: V,
                            serverDeaf: B,
                            tabIndex: el,
                            otherClientSessionType: et,
                            voicePlatform: en,
                            embeddedApplication: k,
                            avatarContainerClass: a()({ [D.dj]: !0 }),
                            disabled: ei && !n,
                            selected: ed,
                            onClick: n ? void 0 : eh,
                            onDoubleClick: em,
                            onContextMenu: eg,
                            guildId: o.guild_id,
                            isSelf: es,
                            application: ea,
                            channelId: o.id,
                        }),
                        ei
                            ? (0, i.jsx)(r.m, {
                                  text: (0, x.A)(et) ?? M.intl.string(M.t.IyYqqY),
                                  children: (0, i.jsx)(S.Ay, { ref: eo, ...l }),
                              })
                            : (0, i.jsx)(c.Y, {
                                  targetElementRef: eo,
                                  position: "right",
                                  renderPopout: () =>
                                      (0, i.jsx)(L.A, {
                                          channel: o,
                                          user: s,
                                          onAction: e_,
                                          onWatchStream: q ? em : void 0,
                                      }),
                                  shouldShow: ee && !ed,
                                  onRequestClose: eA,
                                  spacing: 17,
                                  children: () =>
                                      (0, i.jsx)(S.Ay, {
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
    return z ? K(ep) : ep;
});
