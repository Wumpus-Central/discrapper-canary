n.d(t, { Ay: () => G, LR: () => D, aI: () => U });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(990078),
    o = n(397927),
    d = n(367513),
    c = n(442433),
    u = n(956793),
    h = n(401843),
    A = n(296216),
    _ = n(793574),
    m = n(480890),
    p = n(47167),
    g = n(643501),
    f = n(916641),
    E = n(652896),
    x = n(279250),
    I = n(346846),
    C = n(342296),
    N = n(481947),
    T = n(961350),
    S = n(71393),
    b = n(576705),
    y = n(287809),
    v = n(977997),
    j = n(376696);
n(281405);
var R = n(544105),
    O = n(502075),
    L = n(985018),
    M = n(437942);
function D(e) {
    let { numUsers: t } = e;
    return (0, i.jsx)("div", {
        className: M.BN,
        children: (0, i.jsxs)(o.Text, { color: "text-muted", variant: "text-sm/medium", children: ["+", t] }),
    });
}
function U(e) {
    let { numAudience: t, collapsed: n } = e,
        l = n ? t : L.intl.formatToPlainString(L.t["+v2pN2"], { count: t });
    return (0, i.jsxs)("div", {
        className: a()(M.yJ, { [M.Nr]: n }),
        children: [
            (0, i.jsx)("div", {
                className: M.$L,
                children: (0, i.jsx)(o.LoC, { size: "md", color: "currentColor", className: M.wG }),
            }),
            (0, i.jsx)(o.Text, { color: "text-muted", variant: "text-sm/medium", children: l }),
        ],
    });
}
let G = (0, A.J)(function (e) {
    let {
            collapsed: t,
            user: s,
            channel: A,
            mute: D,
            localMute: U,
            localVideoDisabled: G,
            deaf: P,
            video: k,
            embeddedApplication: w,
            serverMute: B,
            serverDeaf: V,
            nick: H,
            ringing: F,
            speaking: W,
            disconnected: K,
            connectUserDragSource: Y,
            canDrag: z,
            isStreaming: X,
            isWatching: q,
            isGuest: $,
            priority: Q,
            showPreview: J,
            hidePreview: Z,
            shouldShowHoverPopout: ee,
            otherClientSessionType: et,
            voicePlatform: en,
            isSelfOnOtherClient: ei = !1,
            tabIndex: el,
            isSelf: es,
            application: ea,
            hangStatusActivity: er,
            showHangStatus: eo,
        } = e,
        ed = (0, p.Ay)(A),
        ec = l.useRef(null),
        [eu, eh] = l.useState(!1),
        eA = l.useRef(null),
        [e_, em] = l.useState(!1),
        [ep, eg] = l.useState(!1),
        [ef, eE] = l.useState(!1),
        ex = e_ || ef || ep,
        eI = () => {
            eh(!eu);
        },
        eC = (e, t) => {
            let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
            null != t && n.has(t) && (ep && eg(!1), e_ && em(!1)), eN();
        },
        eN = () => {
            clearTimeout(eA.current), Z?.(s.id);
        };
    l.useEffect(
        () => () => {
            clearTimeout(eA.current);
        },
        [],
    );
    let eT = () => {
            if (!X || !(0, x.eo)(A, v.A, S.A, b.A, g.default)[0]) return;
            let e = { streamType: O.U4.GUILD, ownerId: s.id, channelId: A.id, guildId: A.guild_id };
            T.default.getId() !== s.id && u.default.selectVoiceChannel(A.id),
                q ? ((0, I.A)(e), d.A.selectParticipant(e.channelId, (0, E._z)(e))) : (0, h.Nl)(e),
                Z?.(s.id);
        },
        eS = (e) => {
            (0, c.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("84841"), n.e("50970")]).then(
                    n.bind(n, 107632),
                );
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        user: s,
                        guildId: A.guild_id,
                        channel: A,
                        showMediaItems: !0,
                        showStageChannelItems: A.isGuildStageVoice(),
                        onInteraction: (0, m.s)("GuildChannelUserContextMenu", _.A.VOICE_USER, { targetUserId: s.id }),
                    });
            });
        },
        eb = (0, i.jsx)("div", {
            className: M.kZ,
            "data-dnd-name": ed,
            onMouseEnter: ei
                ? void 0
                : () => {
                      eu || (eA.current = setTimeout(() => J?.(s.id), 100));
                  },
            onMouseLeave: ei ? void 0 : eN,
            children: (0, i.jsx)(C.default, {
                clickTrap: s?.id === y.default.getCurrentUser()?.id && eu,
                targetElementRef: ec,
                user: s,
                guildId: A.guild_id,
                channelId: A.id,
                newAnalyticsLocations: [_.A.VOICE_USER],
                shouldShow: eu,
                onRequestClose: () => eh(!1),
                children: (e) => {
                    let n, l;
                    return (
                        (n = R.hv.has(et ?? "")),
                        (l = {
                            user: s,
                            speaking: W,
                            disconnected: K,
                            mute: D,
                            localMute: U,
                            localVideoDisabled: G,
                            isStreaming: X,
                            isGuest: $,
                            video: k,
                            priority: Q,
                            ringing: F,
                            deaf: P,
                            nick: H,
                            collapsed: t,
                            overlap: t,
                            serverMute: B,
                            serverDeaf: V,
                            tabIndex: el,
                            otherClientSessionType: et,
                            voicePlatform: en,
                            embeddedApplication: w,
                            avatarContainerClass: a()({ [M.dj]: !0 }),
                            disabled: ei && !n,
                            selected: eu,
                            onClick: n ? void 0 : eI,
                            onDoubleClick: eT,
                            onContextMenu: eS,
                            guildId: A.guild_id,
                            isSelf: es,
                            application: ea,
                            channelId: A.id,
                            hangStatusActivity: er,
                            showHangStatus: eo,
                        }),
                        ei
                            ? (0, i.jsx)(r.m, {
                                  text: (0, f.A)(et) ?? L.intl.string(L.t.IyYqqY),
                                  children: (0, i.jsx)(N.Ay, { ref: ec, ...l }),
                              })
                            : (0, i.jsx)(o.YNO, {
                                  targetElementRef: ec,
                                  position: "right",
                                  renderPopout: () =>
                                      (0, i.jsx)(j.A, {
                                          channel: A,
                                          user: s,
                                          onAction: eN,
                                          onWatchStream: X ? eT : void 0,
                                          hangStatusActivity: er,
                                          setIsHangStatusInputFocused: em,
                                          setIsHangStatusEmojiPickerOpen: eE,
                                      }),
                                  shouldShow: (ee || (eo && ex && es)) && !eu,
                                  onRequestClose: eC,
                                  spacing: 17,
                                  children: () =>
                                      (0, i.jsx)(N.Ay, {
                                          ...l,
                                          ref: ec,
                                          onMouseDown: e.onMouseDown,
                                          onKeyDown: e.onKeyDown,
                                          onAddHangStatusClicked: () => eg(!0),
                                      }),
                              })
                    );
                },
            }),
        });
    return z ? Y(eb) : eb;
});
