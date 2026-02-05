n.d(t, { Ay: () => Y, LR: () => H, aI: () => F });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(367513),
    u = n(442433),
    h = n(956793),
    A = n(401843),
    g = n(296216),
    m = n(323073),
    p = n(793574),
    _ = n(480890),
    x = n(643501),
    f = n(916641),
    E = n(652896),
    C = n(279250),
    I = n(346846),
    S = n(142524),
    b = n(958140),
    N = n(721931),
    T = n(766319),
    j = n(342296),
    v = n(481947),
    y = n(430363),
    R = n(823854),
    O = n(961350),
    L = n(71393),
    D = n(576705),
    M = n(287809),
    G = n(977997),
    U = n(338234),
    P = n(376696),
    k = n(544105),
    w = n(502075),
    V = n(985018),
    B = n(861379);
function H(e) {
    let { numUsers: t } = e;
    return (0, i.jsx)("div", {
        className: B.BN,
        children: (0, i.jsxs)(d.Text, { color: "text-muted", variant: "text-sm/medium", children: ["+", t] }),
    });
}
function F(e) {
    let { numAudience: t, collapsed: n } = e,
        l = n ? t : V.intl.formatToPlainString(V.t["+v2pN2"], { count: t });
    return (0, i.jsxs)("div", {
        className: a()(B.yJ, { [B.Nr]: n }),
        children: [
            (0, i.jsx)("div", {
                className: B.$L,
                children: (0, i.jsx)(d.LoC, { size: "md", color: "currentColor", className: B.wG }),
            }),
            (0, i.jsx)(d.Text, { color: "text-muted", variant: "text-sm/medium", children: l }),
        ],
    });
}
let Y = (0, g.J)(function (e) {
    let {
            collapsed: t,
            user: s,
            channel: g,
            mute: H,
            localMute: F,
            localVideoDisabled: Y,
            deaf: W,
            video: K,
            embeddedApplication: z,
            serverMute: X,
            serverDeaf: q,
            nick: J,
            ringing: Q,
            speaking: Z,
            latched: $,
            disconnected: ee,
            connectUserDragSource: et,
            canDrag: en,
            isStreaming: ei,
            isWatching: el,
            isGuest: es,
            priority: ea,
            showPreview: er,
            hidePreview: eo,
            shouldShowHoverPopout: ed,
            previewIsOpen: ec,
            otherClientSessionType: eu,
            voicePlatform: eh,
            isSelfOnOtherClient: eA = !1,
            tabIndex: eg,
            location: em,
            isSelf: ep,
            application: e_,
            hangStatusActivity: ex,
            requestToStreamActivity: ef,
            showHangStatus: eE,
        } = e,
        { enableUserHoverActivities: eC } = (0, U.fC)({ guildId: g.guild_id, location: "VoiceUser" }),
        eI = l.useRef(null),
        [eS, eb] = l.useState(!1),
        eN = l.useRef(null),
        [eT, ej] = l.useState(!1),
        [ev, ey] = l.useState(!1),
        [eR, eO] = l.useState(!1),
        [eL, eD] = l.useState(!1),
        eM = ev || eL || eR,
        eG = eT || eM,
        eU = ef?.session_id != null,
        eP = (0, r.bG)([R.A], () => R.A.hasVoiceDareForUserId(s.id), [s.id]),
        ek = (0, y.Uk)("VoiceUser") && eP,
        ew = () => {
            eb(!eS);
        },
        eV = (e, t) => {
            let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
            null != t && n.has(t) && (eR && eO(!1), ev && ey(!1)), eB();
        },
        eB = () => {
            eo?.(s.id);
        },
        eH = (e) => {
            (!eC || ep) &&
                (e
                    ? (eN.current = setTimeout(() => {
                          ej(!0);
                      }, 150 * !!ec))
                    : clearTimeout(eN.current));
        };
    l.useEffect(() => () => clearTimeout(eN.current), []);
    let eF = (e) => {
            e && ej(!1);
        },
        eY = () => {
            if (!(ei && (0, C.eo)(g, G.A, L.A, D.A, x.default)[0])) return;
            let e = { streamType: w.U4.GUILD, ownerId: s.id, channelId: g.id, guildId: g.guild_id };
            O.default.getId() !== s.id && h.default.selectVoiceChannel(g.id),
                el ? ((0, I.A)(e), c.A.selectParticipant(e.channelId, (0, E._z)(e))) : (0, A.Nl)(e),
                eo?.(s.id);
        },
        eW = (e) => {
            (0, u.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("84841"), n.e("52458")]).then(
                    n.bind(n, 107632),
                );
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        user: s,
                        guildId: g.guild_id,
                        channel: g,
                        showMediaItems: !0,
                        showStageChannelItems: g.isGuildStageVoice(),
                        onInteraction: (0, _.s)("GuildChannelUserContextMenu", p.A.VOICE_USER, { targetUserId: s.id }),
                    });
            });
        },
        eK = (e) =>
            ep
                ? (0, i.jsx)(b.h, { ...e, channel: g, setIsHangStatusInputFocused: ey, setIsEmojiPickerOpen: eD })
                : null != ex
                  ? (0, i.jsx)(N.E, { ...e, hangStatusActivity: ex, channel: g, userId: s.id })
                  : null,
        ez = () => (0, i.jsx)(T.A, { userId: s.id, channel: g }),
        eX = () =>
            (0, m.r9)() && (0, m.UK)(g.id)
                ? null
                : (0, i.jsx)(S.A, { user: s, channel: g, onWatch: eY, previewIsOpen: ec, location: em }),
        eq = (0, i.jsx)("div", {
            className: B.kZ,
            "data-dnd-name": g.name,
            onMouseEnter: eA
                ? void 0
                : () => {
                      eC
                          ? (ep && eE && !eS && !eG && ej(!0), eS || er?.(s.id))
                          : (ei || eE || eU || ek) && !eS && er?.(s.id);
                  },
            onMouseLeave: eA ? void 0 : eB,
            children: (0, i.jsx)(j.A, {
                clickTrap: s?.id === M.default.getCurrentUser()?.id && eS,
                targetElementRef: eI,
                user: s,
                guildId: g.guild_id,
                channelId: g.id,
                newAnalyticsLocations: [p.A.VOICE_USER],
                shouldShow: eS,
                onRequestClose: () => eb(!1),
                children: (e) =>
                    ((e) => {
                        let n = k.hv.has(eu ?? ""),
                            l = {
                                user: s,
                                speaking: Z,
                                latched: $,
                                disconnected: ee,
                                mute: H,
                                localMute: F,
                                localVideoDisabled: Y,
                                isStreaming: ei,
                                isGuest: es,
                                video: K,
                                priority: ea,
                                ringing: Q,
                                deaf: W,
                                nick: J,
                                collapsed: t,
                                overlap: t,
                                serverMute: X,
                                serverDeaf: q,
                                tabIndex: eg,
                                otherClientSessionType: eu,
                                voicePlatform: eh,
                                embeddedApplication: z,
                                avatarContainerClass: a()({ [B.dj]: !0 }),
                                disabled: eA && !n,
                                selected: eS,
                                onClick: n ? void 0 : ew,
                                onDoubleClick: eY,
                                onContextMenu: eW,
                                guildId: g.guild_id,
                                isSelf: ep,
                                application: e_,
                                channelId: g.id,
                                hangStatusActivity: ex,
                                showHangStatus: eE,
                            };
                        if (eA)
                            return (0, i.jsx)(o.m, {
                                text: (0, f.A)(eu) ?? V.intl.string(V.t.IyYqqY),
                                children: (0, i.jsx)(v.Ay, { ref: eI, ...l }),
                            });
                        let r = () => null;
                        return (
                            eE && eG && (!eC || ep)
                                ? (r = eK)
                                : eC
                                  ? (r =
                                        ep && eE
                                            ? eK
                                            : () =>
                                                  (0, i.jsx)(P.A, {
                                                      channel: g,
                                                      user: s,
                                                      onAction: eB,
                                                      onWatchStream: ei ? eY : void 0,
                                                      hangStatusActivity: ex,
                                                  }))
                                  : ei
                                    ? (r = eX)
                                    : eU && s.id !== O.default.getId()
                                      ? (r = ez)
                                      : eE && (r = eK),
                            (0, i.jsx)(d.YNO, {
                                targetElementRef: eI,
                                position: "right",
                                renderPopout: r,
                                shouldShow: (ed || (eE && eM && (!eC || ep))) && !eS,
                                onRequestClose: eV,
                                align: eE && eG && !ep && !eC ? "center" : void 0,
                                spacing: eE && eG && (!eC || ep) ? 8 : 0,
                                children: () =>
                                    (0, i.jsx)(v.Ay, {
                                        ...l,
                                        ref: eI,
                                        onMouseDown: e.onMouseDown,
                                        onKeyDown: e.onKeyDown,
                                        handleHoverHangStatus: eH,
                                        handleHoverIcons: eF,
                                        onAddHangStatusClicked: () => eO(!0),
                                    }),
                            })
                        );
                    })(e),
            }),
        });
    return en ? et(eq) : eq;
});
