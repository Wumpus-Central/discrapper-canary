"use strict";
n.d(t, { Ay: () => P, LR: () => G, aI: () => U });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(990078),
    o = n(397927),
    c = n(367513),
    d = n(442433),
    u = n(956793),
    h = n(401843),
    A = n(296216),
    m = n(793574),
    _ = n(480890),
    p = n(643501),
    g = n(916641),
    f = n(652896),
    x = n(279250),
    C = n(346846),
    E = n(958140),
    I = n(721931),
    N = n(342296),
    b = n(481947),
    S = n(961350),
    T = n(71393),
    v = n(576705),
    y = n(287809),
    j = n(977997),
    R = n(376696);
n(281405);
var O = n(544105),
    L = n(502075),
    M = n(985018),
    D = n(861379);
function G(e) {
    let { numUsers: t } = e;
    return (0, i.jsx)("div", {
        className: D.BN,
        children: (0, i.jsxs)(o.Text, { color: "text-muted", variant: "text-sm/medium", children: ["+", t] }),
    });
}
function U(e) {
    let { numAudience: t, collapsed: n } = e,
        s = n ? t : M.intl.formatToPlainString(M.t["+v2pN2"], { count: t });
    return (0, i.jsxs)("div", {
        className: a()(D.yJ, { [D.Nr]: n }),
        children: [
            (0, i.jsx)("div", {
                className: D.$L,
                children: (0, i.jsx)(o.LoC, { size: "md", color: "currentColor", className: D.wG }),
            }),
            (0, i.jsx)(o.Text, { color: "text-muted", variant: "text-sm/medium", children: s }),
        ],
    });
}
let P = (0, A.J)(function (e) {
    let {
            collapsed: t,
            user: l,
            channel: A,
            mute: G,
            localMute: U,
            localVideoDisabled: P,
            deaf: k,
            video: w,
            embeddedApplication: V,
            serverMute: B,
            serverDeaf: H,
            nick: F,
            ringing: K,
            speaking: W,
            disconnected: Y,
            connectUserDragSource: z,
            canDrag: q,
            isStreaming: X,
            isWatching: J,
            isGuest: Q,
            priority: $,
            showPreview: Z,
            hidePreview: ee,
            shouldShowHoverPopout: et,
            otherClientSessionType: en,
            voicePlatform: ei,
            isSelfOnOtherClient: es = !1,
            tabIndex: el,
            isSelf: ea,
            application: er,
            hangStatusActivity: eo,
            showHangStatus: ec,
        } = e,
        ed = s.useRef(null),
        [eu, eh] = s.useState(!1),
        eA = s.useRef(null),
        [em, e_] = s.useState(!1),
        [ep, eg] = s.useState(!1),
        [ef, ex] = s.useState(!1),
        eC = em || ef || ep,
        eE = () => {
            eh(!eu);
        },
        eI = (e, t) => {
            let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
            null != t && n.has(t) && (ep && eg(!1), em && e_(!1)), eN();
        },
        eN = () => {
            clearTimeout(eA.current), ee?.(l.id);
        };
    s.useEffect(
        () => () => {
            clearTimeout(eA.current);
        },
        [],
    );
    let eb = () => {
            if (!X || !(0, x.eo)(A, j.A, T.A, v.A, p.default)[0]) return;
            let e = { streamType: L.U4.GUILD, ownerId: l.id, channelId: A.id, guildId: A.guild_id };
            S.default.getId() !== l.id && u.default.selectVoiceChannel(A.id),
                J ? ((0, C.A)(e), c.A.selectParticipant(e.channelId, (0, f._z)(e))) : (0, h.Nl)(e),
                ee?.(l.id);
        },
        eS = (e) => {
            (0, d.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("84841"), n.e("54266")]).then(
                    n.bind(n, 107632),
                );
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        user: l,
                        guildId: A.guild_id,
                        channel: A,
                        showMediaItems: !0,
                        showStageChannelItems: A.isGuildStageVoice(),
                        onInteraction: (0, _.s)("GuildChannelUserContextMenu", m.A.VOICE_USER, { targetUserId: l.id }),
                    });
            });
        },
        eT = (e) =>
            ea
                ? (0, i.jsx)(E.h, { ...e, channel: A, setIsHangStatusInputFocused: e_, setIsEmojiPickerOpen: ex })
                : null != eo
                  ? (0, i.jsx)(I.E, { ...e, hangStatusActivity: eo, channel: A, userId: l.id })
                  : null,
        ev = (0, i.jsx)("div", {
            className: D.kZ,
            "data-dnd-name": A.name,
            onMouseEnter: es
                ? void 0
                : () => {
                      eu || (eA.current = setTimeout(() => Z?.(l.id), 100));
                  },
            onMouseLeave: es ? void 0 : eN,
            children: (0, i.jsx)(N.A, {
                clickTrap: l?.id === y.default.getCurrentUser()?.id && eu,
                targetElementRef: ed,
                user: l,
                guildId: A.guild_id,
                channelId: A.id,
                newAnalyticsLocations: [m.A.VOICE_USER],
                shouldShow: eu,
                onRequestClose: () => eh(!1),
                children: (e) => {
                    let n, s;
                    return (
                        (n = O.hv.has(en ?? "")),
                        (s = {
                            user: l,
                            speaking: W,
                            disconnected: Y,
                            mute: G,
                            localMute: U,
                            localVideoDisabled: P,
                            isStreaming: X,
                            isGuest: Q,
                            video: w,
                            priority: $,
                            ringing: K,
                            deaf: k,
                            nick: F,
                            collapsed: t,
                            overlap: t,
                            serverMute: B,
                            serverDeaf: H,
                            tabIndex: el,
                            otherClientSessionType: en,
                            voicePlatform: ei,
                            embeddedApplication: V,
                            avatarContainerClass: a()({ [D.dj]: !0 }),
                            disabled: es && !n,
                            selected: eu,
                            onClick: n ? void 0 : eE,
                            onDoubleClick: eb,
                            onContextMenu: eS,
                            guildId: A.guild_id,
                            isSelf: ea,
                            application: er,
                            channelId: A.id,
                            hangStatusActivity: eo,
                            showHangStatus: ec,
                        }),
                        es
                            ? (0, i.jsx)(r.m, {
                                  text: (0, g.A)(en) ?? M.intl.string(M.t.IyYqqY),
                                  children: (0, i.jsx)(b.Ay, { ref: ed, ...s }),
                              })
                            : (0, i.jsx)(o.YNO, {
                                  targetElementRef: ed,
                                  position: "right",
                                  renderPopout: () =>
                                      (0, i.jsx)(R.A, {
                                          channel: A,
                                          user: l,
                                          onAction: eN,
                                          onWatchStream: X ? eb : void 0,
                                          hangStatusActivity: eo,
                                          renderSelfHangStatus: eT,
                                      }),
                                  shouldShow: (et || (ec && eC && ea)) && !eu,
                                  onRequestClose: eI,
                                  spacing: 17,
                                  children: () =>
                                      (0, i.jsx)(b.Ay, {
                                          ...s,
                                          ref: ed,
                                          onMouseDown: e.onMouseDown,
                                          onKeyDown: e.onKeyDown,
                                          onAddHangStatusClicked: () => eg(!0),
                                      }),
                              })
                    );
                },
            }),
        });
    return q ? z(ev) : ev;
});
