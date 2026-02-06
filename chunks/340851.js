n.d(t, { Ay: () => K, LR: () => H, aI: () => F });
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
    m = n(296216),
    p = n(323073),
    g = n(793574),
    _ = n(480890),
    f = n(643501),
    x = n(916641),
    C = n(652896),
    E = n(279250),
    I = n(346846),
    N = n(142524),
    b = n(958140),
    S = n(721931),
    T = n(766319),
    v = n(342296),
    y = n(481947),
    j = n(430363),
    R = n(823854),
    O = n(961350),
    L = n(71393),
    M = n(576705),
    D = n(287809),
    G = n(977997),
    U = n(338234),
    P = n(376696),
    w = n(544105),
    k = n(502075),
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
let K = (0, m.J)(function (e) {
    let {
            collapsed: t,
            user: s,
            channel: m,
            mute: H,
            localMute: F,
            localVideoDisabled: K,
            deaf: W,
            video: Y,
            embeddedApplication: z,
            serverMute: q,
            serverDeaf: X,
            nick: J,
            ringing: Q,
            speaking: $,
            latched: Z,
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
            tabIndex: em,
            location: ep,
            isSelf: eg,
            application: e_,
            hangStatusActivity: ef,
            requestToStreamActivity: ex,
            showHangStatus: eC,
        } = e,
        { enableUserHoverActivities: eE } = (0, U.fC)({ guildId: m.guild_id, location: "VoiceUser" }),
        eI = l.useRef(null),
        [eN, eb] = l.useState(!1),
        eS = l.useRef(null),
        [eT, ev] = l.useState(!1),
        [ey, ej] = l.useState(!1),
        [eR, eO] = l.useState(!1),
        [eL, eM] = l.useState(!1),
        eD = ey || eL || eR,
        eG = eT || eD,
        eU = ex?.session_id != null,
        eP = (0, r.bG)([R.A], () => R.A.hasVoiceDareForUserId(s.id), [s.id]),
        ew = (0, j.Uk)("VoiceUser") && eP,
        ek = () => {
            eb(!eN);
        },
        eV = (e, t) => {
            let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
            null != t && n.has(t) && (eR && eO(!1), ey && ej(!1)), eB();
        },
        eB = () => {
            eo?.(s.id);
        },
        eH = (e) => {
            (!eE || eg) &&
                (e
                    ? (eS.current = setTimeout(() => {
                          ev(!0);
                      }, 150 * !!ec))
                    : clearTimeout(eS.current));
        };
    l.useEffect(() => () => clearTimeout(eS.current), []);
    let eF = (e) => {
            e && ev(!1);
        },
        eK = () => {
            if (!(ei && (0, E.eo)(m, G.A, L.A, M.A, f.default)[0])) return;
            let e = { streamType: k.U4.GUILD, ownerId: s.id, channelId: m.id, guildId: m.guild_id };
            O.default.getId() !== s.id && h.default.selectVoiceChannel(m.id),
                el ? ((0, I.A)(e), c.A.selectParticipant(e.channelId, (0, C._z)(e))) : (0, A.Nl)(e),
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
                        guildId: m.guild_id,
                        channel: m,
                        showMediaItems: !0,
                        showStageChannelItems: m.isGuildStageVoice(),
                        onInteraction: (0, _.s)("GuildChannelUserContextMenu", g.A.VOICE_USER, { targetUserId: s.id }),
                    });
            });
        },
        eY = (e) =>
            eg
                ? (0, i.jsx)(b.h, { ...e, channel: m, setIsHangStatusInputFocused: ej, setIsEmojiPickerOpen: eM })
                : null != ef
                  ? (0, i.jsx)(S.E, { ...e, hangStatusActivity: ef, channel: m, userId: s.id })
                  : null,
        ez = () => (0, i.jsx)(T.A, { userId: s.id, channel: m }),
        eq = () =>
            (0, p.r9)() && (0, p.UK)(m.id)
                ? null
                : (0, i.jsx)(N.A, { user: s, channel: m, onWatch: eK, previewIsOpen: ec, location: ep }),
        eX = (0, i.jsx)("div", {
            className: B.kZ,
            "data-dnd-name": m.name,
            onMouseEnter: eA
                ? void 0
                : () => {
                      eE
                          ? (eg && eC && !eN && !eG && ev(!0), eN || er?.(s.id))
                          : (ei || eC || eU || ew) && !eN && er?.(s.id);
                  },
            onMouseLeave: eA ? void 0 : eB,
            children: (0, i.jsx)(v.A, {
                clickTrap: s?.id === D.default.getCurrentUser()?.id && eN,
                targetElementRef: eI,
                user: s,
                guildId: m.guild_id,
                channelId: m.id,
                newAnalyticsLocations: [g.A.VOICE_USER],
                shouldShow: eN,
                onRequestClose: () => eb(!1),
                children: (e) =>
                    ((e) => {
                        let n = w.hv.has(eu ?? ""),
                            l = {
                                user: s,
                                speaking: $,
                                latched: Z,
                                disconnected: ee,
                                mute: H,
                                localMute: F,
                                localVideoDisabled: K,
                                isStreaming: ei,
                                isGuest: es,
                                video: Y,
                                priority: ea,
                                ringing: Q,
                                deaf: W,
                                nick: J,
                                collapsed: t,
                                overlap: t,
                                serverMute: q,
                                serverDeaf: X,
                                tabIndex: em,
                                otherClientSessionType: eu,
                                voicePlatform: eh,
                                embeddedApplication: z,
                                avatarContainerClass: a()({ [B.dj]: !0 }),
                                disabled: eA && !n,
                                selected: eN,
                                onClick: n ? void 0 : ek,
                                onDoubleClick: eK,
                                onContextMenu: eW,
                                guildId: m.guild_id,
                                isSelf: eg,
                                application: e_,
                                channelId: m.id,
                                hangStatusActivity: ef,
                                showHangStatus: eC,
                            };
                        if (eA)
                            return (0, i.jsx)(o.m, {
                                text: (0, x.A)(eu) ?? V.intl.string(V.t.IyYqqY),
                                children: (0, i.jsx)(y.Ay, { ref: eI, ...l }),
                            });
                        let r = () => null;
                        return (
                            eC && eG && (!eE || eg)
                                ? (r = eY)
                                : eE
                                  ? (r =
                                        eg && eC
                                            ? eY
                                            : () =>
                                                  (0, i.jsx)(P.A, {
                                                      channel: m,
                                                      user: s,
                                                      onAction: eB,
                                                      onWatchStream: ei ? eK : void 0,
                                                      hangStatusActivity: ef,
                                                  }))
                                  : ei
                                    ? (r = eq)
                                    : eU && s.id !== O.default.getId()
                                      ? (r = ez)
                                      : eC && (r = eY),
                            (0, i.jsx)(d.YNO, {
                                targetElementRef: eI,
                                position: "right",
                                renderPopout: r,
                                shouldShow: (ed || (eC && eD && (!eE || eg))) && !eN,
                                onRequestClose: eV,
                                align: eC && eG && !eg && !eE ? "center" : void 0,
                                spacing: eC && eG && (!eE || eg) ? 8 : 0,
                                children: () =>
                                    (0, i.jsx)(y.Ay, {
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
    return en ? et(eX) : eX;
});
