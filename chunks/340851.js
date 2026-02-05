n.d(t, { Ay: () => W, LR: () => F, aI: () => Y });
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
    O = n(979016),
    L = n(961350),
    D = n(71393),
    M = n(576705),
    G = n(287809),
    U = n(977997),
    P = n(338234),
    k = n(376696),
    w = n(544105),
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
function Y(e) {
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
let W = (0, g.J)(function (e) {
    let {
            collapsed: t,
            user: s,
            channel: g,
            mute: F,
            localMute: Y,
            localVideoDisabled: W,
            deaf: K,
            video: z,
            embeddedApplication: X,
            serverMute: q,
            serverDeaf: J,
            nick: Q,
            ringing: Z,
            speaking: $,
            latched: ee,
            disconnected: et,
            connectUserDragSource: en,
            canDrag: ei,
            isStreaming: el,
            isWatching: es,
            isGuest: ea,
            priority: er,
            showPreview: eo,
            hidePreview: ed,
            shouldShowHoverPopout: ec,
            previewIsOpen: eu,
            otherClientSessionType: eh,
            voicePlatform: eA,
            isSelfOnOtherClient: eg = !1,
            tabIndex: em,
            location: ep,
            isSelf: e_,
            application: ex,
            hangStatusActivity: ef,
            requestToStreamActivity: eE,
            showHangStatus: eC,
        } = e,
        { enableUserHoverActivities: eI } = (0, P.fC)({ guildId: g.guild_id, location: "VoiceUser" }),
        eS = l.useRef(null),
        [eb, eN] = l.useState(!1),
        eT = l.useRef(null),
        [ej, ev] = l.useState(!1),
        [ey, eR] = l.useState(!1),
        [eO, eL] = l.useState(!1),
        [eD, eM] = l.useState(!1),
        eG = ey || eD || eO,
        eU = ej || eG,
        eP = eE?.session_id != null,
        ek = (0, r.bG)([R.A], () => R.A.hasVoiceDareForUserId(s.id), [s.id]),
        ew = (0, y.Uk)("VoiceUser") && ek,
        eV = () => {
            eN(!eb);
        },
        eB = (e, t) => {
            let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
            null != t && n.has(t) && (eO && eL(!1), ey && eR(!1)), eH();
        },
        eH = () => {
            ew && (clearTimeout(eT.current), (eT.current = null), ev(!1)), ed?.(s.id);
        },
        eF = (e) => {
            (!eI || e_) &&
                (e
                    ? (eT.current = setTimeout(() => {
                          ev(!0);
                      }, 150 * !!eu))
                    : clearTimeout(eT.current));
        };
    l.useEffect(() => () => clearTimeout(eT.current), []);
    let eY = (e) => {
            e && ev(!1);
        },
        eW = () => {
            if (!(el && (0, C.eo)(g, U.A, D.A, M.A, x.default)[0])) return;
            let e = { streamType: V.U4.GUILD, ownerId: s.id, channelId: g.id, guildId: g.guild_id };
            L.default.getId() !== s.id && h.default.selectVoiceChannel(g.id),
                es ? ((0, I.A)(e), c.A.selectParticipant(e.channelId, (0, E._z)(e))) : (0, A.Nl)(e),
                ed?.(s.id);
        },
        eK = (e) => {
            (0, u.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("97262"),
                    n.e("42128"),
                    n.e("82892"),
                    n.e("84841"),
                    n.e("52458"),
                ]).then(n.bind(n, 107632));
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
        ez = (e) =>
            e_
                ? (0, i.jsx)(b.h, { ...e, channel: g, setIsHangStatusInputFocused: eR, setIsEmojiPickerOpen: eM })
                : null != ef
                  ? (0, i.jsx)(N.E, { ...e, hangStatusActivity: ef, channel: g, userId: s.id })
                  : null,
        eX = () => (0, i.jsx)(T.A, { userId: s.id, channel: g }),
        eq = () => (0, i.jsx)(O.A, { userId: s.id }),
        eJ = () =>
            (0, m.r9)() && (0, m.UK)(g.id)
                ? null
                : (0, i.jsx)(S.A, { user: s, channel: g, onWatch: eW, previewIsOpen: eu, location: ep }),
        eQ = (0, i.jsx)("div", {
            className: H.kZ,
            "data-dnd-name": g.name,
            onMouseEnter: eg
                ? void 0
                : () => {
                      eI
                          ? (e_ && eC && !eb && !eU && ev(!0), eb || eo?.(s.id))
                          : (el || eC || eP || ew) && !eb && eo?.(s.id);
                  },
            onMouseLeave: eg ? void 0 : eH,
            children: (0, i.jsx)(j.A, {
                clickTrap: s?.id === G.default.getCurrentUser()?.id && eb,
                targetElementRef: eS,
                user: s,
                guildId: g.guild_id,
                channelId: g.id,
                newAnalyticsLocations: [p.A.VOICE_USER],
                shouldShow: eb,
                onRequestClose: () => eN(!1),
                children: (e) =>
                    ((e) => {
                        let n = w.hv.has(eh ?? ""),
                            l = {
                                user: s,
                                speaking: $,
                                latched: ee,
                                disconnected: et,
                                mute: F,
                                localMute: Y,
                                localVideoDisabled: W,
                                isStreaming: el,
                                isGuest: ea,
                                video: z,
                                priority: er,
                                ringing: Z,
                                deaf: K,
                                nick: Q,
                                collapsed: t,
                                overlap: t,
                                serverMute: q,
                                serverDeaf: J,
                                tabIndex: em,
                                otherClientSessionType: eh,
                                voicePlatform: eA,
                                embeddedApplication: X,
                                avatarContainerClass: a()({ [H.dj]: !0 }),
                                disabled: eg && !n,
                                selected: eb,
                                onClick: n ? void 0 : eV,
                                onDoubleClick: eW,
                                onContextMenu: eK,
                                guildId: g.guild_id,
                                isSelf: e_,
                                application: ex,
                                channelId: g.id,
                                hangStatusActivity: ef,
                                showHangStatus: eC,
                            };
                        if (eg)
                            return (0, i.jsx)(o.m, {
                                text: (0, f.A)(eh) ?? B.intl.string(B.t.IyYqqY),
                                children: (0, i.jsx)(v.Ay, { ref: eS, ...l }),
                            });
                        let r = () => null;
                        return (
                            eC && eU && (!eI || e_)
                                ? (r = ez)
                                : eI
                                  ? (r =
                                        e_ && eC
                                            ? ez
                                            : () =>
                                                  (0, i.jsx)(k.A, {
                                                      channel: g,
                                                      user: s,
                                                      onAction: eH,
                                                      onWatchStream: el ? eW : void 0,
                                                      hangStatusActivity: ef,
                                                  }))
                                  : el
                                    ? (r = eJ)
                                    : eP && s.id !== L.default.getId()
                                      ? (r = eX)
                                      : ew
                                        ? (r = eq)
                                        : eC && (r = ez),
                            (0, i.jsx)(d.YNO, {
                                targetElementRef: eS,
                                position: "right",
                                renderPopout: r,
                                shouldShow: (ec || (eC && eG && (!eI || e_))) && !eb,
                                onRequestClose: eB,
                                align: eC && eU && !e_ && !eI ? "center" : void 0,
                                spacing: eC && eU && (!eI || e_) ? 8 : 0,
                                children: () =>
                                    (0, i.jsx)(v.Ay, {
                                        ...l,
                                        ref: eS,
                                        onMouseDown: e.onMouseDown,
                                        onKeyDown: e.onKeyDown,
                                        handleHoverHangStatus: eF,
                                        handleHoverIcons: eY,
                                        onAddHangStatusClicked: () => eL(!0),
                                    }),
                            })
                        );
                    })(e),
            }),
        });
    return ei ? en(eQ) : eQ;
});
