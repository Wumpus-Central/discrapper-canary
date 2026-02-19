n.d(t, { Ay: () => W, LR: () => F, aI: () => K });
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
    p = n(296216),
    m = n(323073),
    g = n(793574),
    _ = n(480890),
    f = n(643501),
    x = n(916641),
    C = n(652896),
    E = n(279250),
    I = n(346846),
    b = n(142524),
    N = n(958140),
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
    U = n(644836),
    P = n(338234),
    w = n(376696),
    k = n(544105),
    V = n(502075),
    B = n(985018),
    H = n(861379);
function F(e) {
    let { numUsers: t } = e;
    return (0, i.jsx)("div", {
        className: H.BN,
        children: (0, i.jsxs)(d.Text, { color: "text-muted", variant: "text-sm/medium", children: ["+", t] }),
    });
}
function K(e) {
    let { numAudience: t, collapsed: n } = e,
        l = n ? t : B.intl.formatToPlainString(B.t["+v2pN2"], { count: t });
    return (0, i.jsxs)("div", {
        className: a()(H.yJ, { [H.Nr]: n }),
        children: [
            (0, i.jsx)("div", {
                className: H.$L,
                children: (0, i.jsx)(d.LoC, { size: "md", color: "currentColor", className: H.wG }),
            }),
            (0, i.jsx)(d.Text, { color: "text-muted", variant: "text-sm/medium", children: l }),
        ],
    });
}
let W = (0, p.J)(function (e) {
    let {
            collapsed: t,
            user: s,
            channel: p,
            mute: F,
            localMute: K,
            localVideoDisabled: W,
            deaf: Y,
            video: z,
            embeddedApplication: X,
            serverMute: q,
            serverDeaf: J,
            nick: Q,
            ringing: $,
            speaking: Z,
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
            tabIndex: ep,
            location: em,
            isSelf: eg,
            application: e_,
            hangStatusActivity: ef,
            requestToStreamActivity: ex,
            showHangStatus: eC,
        } = e,
        { enableUserHoverActivities: eE } = (0, P.fC)({ guildId: p.guild_id, location: "VoiceUser" }),
        { standardPopoverGap: eI } = (0, U.FS)({ guildId: p.guild_id, location: "VoiceUser" }),
        eb = l.useRef(null),
        [eN, eS] = l.useState(!1),
        eT = l.useRef(null),
        [ev, ey] = l.useState(!1),
        [ej, eR] = l.useState(!1),
        [eO, eL] = l.useState(!1),
        [eM, eD] = l.useState(!1),
        eG = ej || eM || eO,
        eU = ev || eG,
        eP = ex?.session_id != null,
        ew = (0, r.bG)([R.A], () => R.A.hasVoiceDareForUserId(s.id), [s.id]),
        ek = (0, j.Uk)("VoiceUser") && ew,
        eV = () => {
            eS(!eN);
        },
        eB = (e, t) => {
            let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
            null != t && n.has(t) && (eO && eL(!1), ej && eR(!1)), eH();
        },
        eH = () => {
            eo?.(s.id);
        },
        eF = (e) => {
            (!eE || eg) &&
                (e
                    ? (eT.current = setTimeout(() => {
                          ey(!0);
                      }, 150 * !!ec))
                    : clearTimeout(eT.current));
        };
    l.useEffect(() => () => clearTimeout(eT.current), []);
    let eK = (e) => {
            e && ey(!1);
        },
        eW = () => {
            if (!(ei && (0, E.eo)(p, G.A, L.A, M.A, f.default)[0])) return;
            let e = { streamType: V.U4.GUILD, ownerId: s.id, channelId: p.id, guildId: p.guild_id };
            O.default.getId() !== s.id && h.default.selectVoiceChannel(p.id),
                el ? ((0, I.A)(e), c.A.selectParticipant(e.channelId, (0, C._z)(e))) : (0, A.Nl)(e),
                eo?.(s.id);
        },
        eY = (e) => {
            (0, u.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("84841"), n.e("54266")]).then(
                    n.bind(n, 107632),
                );
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        user: s,
                        guildId: p.guild_id,
                        channel: p,
                        showMediaItems: !0,
                        showStageChannelItems: p.isGuildStageVoice(),
                        onInteraction: (0, _.s)("GuildChannelUserContextMenu", g.A.VOICE_USER, { targetUserId: s.id }),
                    });
            });
        },
        ez = (e) =>
            eg
                ? (0, i.jsx)(N.h, { ...e, channel: p, setIsHangStatusInputFocused: eR, setIsEmojiPickerOpen: eD })
                : null != ef
                  ? (0, i.jsx)(S.E, { ...e, hangStatusActivity: ef, channel: p, userId: s.id })
                  : null,
        eX = () => (0, i.jsx)(T.A, { userId: s.id, channel: p }),
        eq = () =>
            (0, m.r9)() && (0, m.UK)(p.id)
                ? null
                : (0, i.jsx)(b.A, {
                      user: s,
                      channel: p,
                      onWatch: eW,
                      previewIsOpen: ec,
                      location: em,
                      isStandardGap: null != eI,
                  }),
        eJ = (0, i.jsx)("div", {
            className: H.kZ,
            "data-dnd-name": p.name,
            onMouseEnter: eA
                ? void 0
                : () => {
                      eE
                          ? (!eg || !eC || eE || eN || eU || ey(!0), eN || er?.(s.id))
                          : (ei || eC || eP || ek) && !eN && er?.(s.id);
                  },
            onMouseLeave: eA ? void 0 : eH,
            children: (0, i.jsx)(v.A, {
                clickTrap: s?.id === D.default.getCurrentUser()?.id && eN,
                targetElementRef: eb,
                user: s,
                guildId: p.guild_id,
                channelId: p.id,
                newAnalyticsLocations: [g.A.VOICE_USER],
                shouldShow: eN,
                onRequestClose: () => eS(!1),
                children: (e) =>
                    ((e) => {
                        let n = k.hv.has(eu ?? ""),
                            l = {
                                user: s,
                                speaking: Z,
                                disconnected: ee,
                                mute: F,
                                localMute: K,
                                localVideoDisabled: W,
                                isStreaming: ei,
                                isGuest: es,
                                video: z,
                                priority: ea,
                                ringing: $,
                                deaf: Y,
                                nick: Q,
                                collapsed: t,
                                overlap: t,
                                serverMute: q,
                                serverDeaf: J,
                                tabIndex: ep,
                                otherClientSessionType: eu,
                                voicePlatform: eh,
                                embeddedApplication: X,
                                avatarContainerClass: a()({ [H.dj]: !0 }),
                                disabled: eA && !n,
                                selected: eN,
                                onClick: n ? void 0 : eV,
                                onDoubleClick: eW,
                                onContextMenu: eY,
                                guildId: p.guild_id,
                                isSelf: eg,
                                application: e_,
                                channelId: p.id,
                                hangStatusActivity: ef,
                                showHangStatus: eC,
                            };
                        if (eA)
                            return (0, i.jsx)(o.m, {
                                text: (0, x.A)(eu) ?? B.intl.string(B.t.IyYqqY),
                                children: (0, i.jsx)(y.Ay, { ref: eb, ...l }),
                            });
                        let r = () => null;
                        return (
                            eC && eU && !eE
                                ? (r = ez)
                                : eE
                                  ? (r = () =>
                                        (0, i.jsx)(w.A, {
                                            channel: p,
                                            user: s,
                                            onAction: eH,
                                            onWatchStream: ei ? eW : void 0,
                                            hangStatusActivity: ef,
                                            renderSelfHangStatus: ez,
                                        }))
                                  : ei
                                    ? (r = eq)
                                    : eP && s.id !== O.default.getId()
                                      ? (r = eX)
                                      : eC && (r = ez),
                            (0, i.jsx)(d.YNO, {
                                targetElementRef: eb,
                                position: "right",
                                renderPopout: r,
                                shouldShow: (ed || (eC && eG && (!eE || eg))) && !eN,
                                onRequestClose: eB,
                                align: eC && eU && !eg && !eE ? "center" : void 0,
                                spacing: eI ?? (eC && eU && (!eE || eg) ? 8 : 0),
                                children: () =>
                                    (0, i.jsx)(y.Ay, {
                                        ...l,
                                        ref: eb,
                                        onMouseDown: e.onMouseDown,
                                        onKeyDown: e.onKeyDown,
                                        handleHoverHangStatus: eF,
                                        handleHoverIcons: eK,
                                        onAddHangStatusClicked: () => eL(!0),
                                    }),
                            })
                        );
                    })(e),
            }),
        });
    return en ? et(eJ) : eJ;
});
