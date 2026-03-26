"use strict";
n.d(t, { Ay: () => G, LR: () => M, aI: () => D });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(990078),
    o = n(397927),
    c = n(367513),
    d = n(442433),
    u = n(956793),
    h = n(401843),
    A = n(296216),
    m = n(793574),
    p = n(480890),
    g = n(643501),
    _ = n(916641),
    f = n(652896),
    x = n(279250),
    C = n(346846),
    E = n(342296),
    I = n(481947),
    N = n(961350),
    b = n(71393),
    S = n(576705),
    T = n(287809),
    v = n(977997),
    y = n(376696);
n(281405);
var j = n(544105),
    R = n(502075),
    O = n(985018),
    L = n(861379);
function M(e) {
    let { numUsers: t } = e;
    return (0, i.jsx)("div", {
        className: L.BN,
        children: (0, i.jsxs)(o.Text, { color: "text-muted", variant: "text-sm/medium", children: ["+", t] }),
    });
}
function D(e) {
    let { numAudience: t, collapsed: n } = e,
        s = n ? t : O.intl.formatToPlainString(O.t["+v2pN2"], { count: t });
    return (0, i.jsxs)("div", {
        className: r()(L.yJ, { [L.Nr]: n }),
        children: [
            (0, i.jsx)("div", {
                className: L.$L,
                children: (0, i.jsx)(o.LoC, { size: "md", color: "currentColor", className: L.wG }),
            }),
            (0, i.jsx)(o.Text, { color: "text-muted", variant: "text-sm/medium", children: s }),
        ],
    });
}
let G = (0, A.J)(function (e) {
    let {
            collapsed: t,
            user: l,
            channel: A,
            mute: M,
            localMute: D,
            localVideoDisabled: G,
            deaf: U,
            video: P,
            embeddedApplication: k,
            serverMute: w,
            serverDeaf: V,
            nick: B,
            ringing: H,
            speaking: F,
            disconnected: K,
            connectUserDragSource: W,
            canDrag: Y,
            isStreaming: z,
            isWatching: q,
            isGuest: X,
            priority: J,
            showPreview: Q,
            hidePreview: $,
            shouldShowHoverPopout: Z,
            otherClientSessionType: ee,
            voicePlatform: et,
            isSelfOnOtherClient: en = !1,
            tabIndex: ei,
            isSelf: es,
            application: el,
            hangStatusActivity: er,
            showHangStatus: ea,
        } = e,
        eo = s.useRef(null),
        [ec, ed] = s.useState(!1),
        eu = s.useRef(null),
        [eh, eA] = s.useState(!1),
        [em, ep] = s.useState(!1),
        [eg, e_] = s.useState(!1),
        ef = eh || eg || em,
        ex = () => {
            ed(!ec);
        },
        eC = (e, t) => {
            let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
            null != t && n.has(t) && (em && ep(!1), eh && eA(!1)), eE();
        },
        eE = () => {
            clearTimeout(eu.current), $?.(l.id);
        };
    s.useEffect(
        () => () => {
            clearTimeout(eu.current);
        },
        [],
    );
    let eI = () => {
            if (!z || !(0, x.eo)(A, v.A, b.A, S.A, g.default)[0]) return;
            let e = { streamType: R.U4.GUILD, ownerId: l.id, channelId: A.id, guildId: A.guild_id };
            N.default.getId() !== l.id && u.default.selectVoiceChannel(A.id),
                q ? ((0, C.A)(e), c.A.selectParticipant(e.channelId, (0, f._z)(e))) : (0, h.Nl)(e),
                $?.(l.id);
        },
        eN = (e) => {
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
                        onInteraction: (0, p.s)("GuildChannelUserContextMenu", m.A.VOICE_USER, { targetUserId: l.id }),
                    });
            });
        },
        eb = (0, i.jsx)("div", {
            className: L.kZ,
            "data-dnd-name": A.name,
            onMouseEnter: en
                ? void 0
                : () => {
                      ec || (eu.current = setTimeout(() => Q?.(l.id), 100));
                  },
            onMouseLeave: en ? void 0 : eE,
            children: (0, i.jsx)(E.A, {
                clickTrap: l?.id === T.default.getCurrentUser()?.id && ec,
                targetElementRef: eo,
                user: l,
                guildId: A.guild_id,
                channelId: A.id,
                newAnalyticsLocations: [m.A.VOICE_USER],
                shouldShow: ec,
                onRequestClose: () => ed(!1),
                children: (e) => {
                    let n, s;
                    return (
                        (n = j.hv.has(ee ?? "")),
                        (s = {
                            user: l,
                            speaking: F,
                            disconnected: K,
                            mute: M,
                            localMute: D,
                            localVideoDisabled: G,
                            isStreaming: z,
                            isGuest: X,
                            video: P,
                            priority: J,
                            ringing: H,
                            deaf: U,
                            nick: B,
                            collapsed: t,
                            overlap: t,
                            serverMute: w,
                            serverDeaf: V,
                            tabIndex: ei,
                            otherClientSessionType: ee,
                            voicePlatform: et,
                            embeddedApplication: k,
                            avatarContainerClass: r()({ [L.dj]: !0 }),
                            disabled: en && !n,
                            selected: ec,
                            onClick: n ? void 0 : ex,
                            onDoubleClick: eI,
                            onContextMenu: eN,
                            guildId: A.guild_id,
                            isSelf: es,
                            application: el,
                            channelId: A.id,
                            hangStatusActivity: er,
                            showHangStatus: ea,
                        }),
                        en
                            ? (0, i.jsx)(a.m, {
                                  text: (0, _.A)(ee) ?? O.intl.string(O.t.IyYqqY),
                                  children: (0, i.jsx)(I.Ay, { ref: eo, ...s }),
                              })
                            : (0, i.jsx)(o.YNO, {
                                  targetElementRef: eo,
                                  position: "right",
                                  renderPopout: () =>
                                      (0, i.jsx)(y.A, {
                                          channel: A,
                                          user: l,
                                          onAction: eE,
                                          onWatchStream: z ? eI : void 0,
                                          hangStatusActivity: er,
                                          setIsHangStatusInputFocused: eA,
                                          setIsHangStatusEmojiPickerOpen: e_,
                                      }),
                                  shouldShow: (Z || (ea && ef && es)) && !ec,
                                  onRequestClose: eC,
                                  spacing: 17,
                                  children: () =>
                                      (0, i.jsx)(I.Ay, {
                                          ...s,
                                          ref: eo,
                                          onMouseDown: e.onMouseDown,
                                          onKeyDown: e.onKeyDown,
                                          onAddHangStatusClicked: () => ep(!0),
                                      }),
                              })
                    );
                },
            }),
        });
    return Y ? W(eb) : eb;
});
