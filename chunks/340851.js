n.d(t, { Ay: () => U, LR: () => M, aI: () => D });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(990078),
    o = n(397927),
    c = n(367513),
    d = n(442433),
    u = n(956793),
    h = n(401843),
    A = n(296216),
    _ = n(793574),
    m = n(480890),
    g = n(643501),
    p = n(916641),
    f = n(652896),
    x = n(279250),
    E = n(346846),
    I = n(342296),
    C = n(481947),
    N = n(961350),
    T = n(71393),
    S = n(576705),
    b = n(287809),
    y = n(977997),
    v = n(376696);
n(281405);
var j = n(544105),
    R = n(502075),
    O = n(985018),
    L = n(437942);
function M(e) {
    let { numUsers: t } = e;
    return (0, i.jsx)("div", {
        className: L.BN,
        children: (0, i.jsxs)(o.Text, { color: "text-muted", variant: "text-sm/medium", children: ["+", t] }),
    });
}
function D(e) {
    let { numAudience: t, collapsed: n } = e,
        l = n ? t : O.intl.formatToPlainString(O.t["+v2pN2"], { count: t });
    return (0, i.jsxs)("div", {
        className: a()(L.yJ, { [L.Nr]: n }),
        children: [
            (0, i.jsx)("div", {
                className: L.$L,
                children: (0, i.jsx)(o.LoC, { size: "md", color: "currentColor", className: L.wG }),
            }),
            (0, i.jsx)(o.Text, { color: "text-muted", variant: "text-sm/medium", children: l }),
        ],
    });
}
let U = (0, A.J)(function (e) {
    let {
            collapsed: t,
            user: s,
            channel: A,
            mute: M,
            localMute: D,
            localVideoDisabled: U,
            deaf: G,
            video: P,
            embeddedApplication: k,
            serverMute: w,
            serverDeaf: B,
            nick: V,
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
            isSelf: el,
            application: es,
            hangStatusActivity: ea,
            showHangStatus: er,
        } = e,
        eo = l.useRef(null),
        [ec, ed] = l.useState(!1),
        eu = l.useRef(null),
        [eh, eA] = l.useState(!1),
        [e_, em] = l.useState(!1),
        [eg, ep] = l.useState(!1),
        ef = eh || eg || e_,
        ex = () => {
            ed(!ec);
        },
        eE = (e, t) => {
            let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
            null != t && n.has(t) && (e_ && em(!1), eh && eA(!1)), eI();
        },
        eI = () => {
            clearTimeout(eu.current), $?.(s.id);
        };
    l.useEffect(
        () => () => {
            clearTimeout(eu.current);
        },
        [],
    );
    let eC = () => {
            if (!z || !(0, x.eo)(A, y.A, T.A, S.A, g.default)[0]) return;
            let e = { streamType: R.U4.GUILD, ownerId: s.id, channelId: A.id, guildId: A.guild_id };
            N.default.getId() !== s.id && u.default.selectVoiceChannel(A.id),
                q ? ((0, E.A)(e), c.A.selectParticipant(e.channelId, (0, f._z)(e))) : (0, h.Nl)(e),
                $?.(s.id);
        },
        eN = (e) => {
            (0, d.L3)(e, async () => {
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
        eT = (0, i.jsx)("div", {
            className: L.kZ,
            "data-dnd-name": A.name,
            onMouseEnter: en
                ? void 0
                : () => {
                      ec || (eu.current = setTimeout(() => Q?.(s.id), 100));
                  },
            onMouseLeave: en ? void 0 : eI,
            children: (0, i.jsx)(I.A, {
                clickTrap: s?.id === b.default.getCurrentUser()?.id && ec,
                targetElementRef: eo,
                user: s,
                guildId: A.guild_id,
                channelId: A.id,
                newAnalyticsLocations: [_.A.VOICE_USER],
                shouldShow: ec,
                onRequestClose: () => ed(!1),
                children: (e) => {
                    let n, l;
                    return (
                        (n = j.hv.has(ee ?? "")),
                        (l = {
                            user: s,
                            speaking: F,
                            disconnected: K,
                            mute: M,
                            localMute: D,
                            localVideoDisabled: U,
                            isStreaming: z,
                            isGuest: X,
                            video: P,
                            priority: J,
                            ringing: H,
                            deaf: G,
                            nick: V,
                            collapsed: t,
                            overlap: t,
                            serverMute: w,
                            serverDeaf: B,
                            tabIndex: ei,
                            otherClientSessionType: ee,
                            voicePlatform: et,
                            embeddedApplication: k,
                            avatarContainerClass: a()({ [L.dj]: !0 }),
                            disabled: en && !n,
                            selected: ec,
                            onClick: n ? void 0 : ex,
                            onDoubleClick: eC,
                            onContextMenu: eN,
                            guildId: A.guild_id,
                            isSelf: el,
                            application: es,
                            channelId: A.id,
                            hangStatusActivity: ea,
                            showHangStatus: er,
                        }),
                        en
                            ? (0, i.jsx)(r.m, {
                                  text: (0, p.A)(ee) ?? O.intl.string(O.t.IyYqqY),
                                  children: (0, i.jsx)(C.Ay, { ref: eo, ...l }),
                              })
                            : (0, i.jsx)(o.YNO, {
                                  targetElementRef: eo,
                                  position: "right",
                                  renderPopout: () =>
                                      (0, i.jsx)(v.A, {
                                          channel: A,
                                          user: s,
                                          onAction: eI,
                                          onWatchStream: z ? eC : void 0,
                                          hangStatusActivity: ea,
                                          setIsHangStatusInputFocused: eA,
                                          setIsHangStatusEmojiPickerOpen: ep,
                                      }),
                                  shouldShow: (Z || (er && ef && el)) && !ec,
                                  onRequestClose: eE,
                                  spacing: 17,
                                  children: () =>
                                      (0, i.jsx)(C.Ay, {
                                          ...l,
                                          ref: eo,
                                          onMouseDown: e.onMouseDown,
                                          onKeyDown: e.onKeyDown,
                                          onAddHangStatusClicked: () => em(!0),
                                      }),
                              })
                    );
                },
            }),
        });
    return Y ? W(eT) : eT;
});
