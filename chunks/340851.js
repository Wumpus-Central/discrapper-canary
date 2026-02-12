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
    m = n(296216),
    p = n(323073),
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
let W = (0, m.J)(function (e) {
    let {
            collapsed: t,
            user: s,
            channel: m,
            mute: F,
            localMute: K,
            localVideoDisabled: W,
            deaf: Y,
            video: z,
            embeddedApplication: q,
            serverMute: X,
            serverDeaf: J,
            nick: Q,
            ringing: $,
            speaking: Z,
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
            isSelfOnOtherClient: em = !1,
            tabIndex: ep,
            location: eg,
            isSelf: e_,
            application: ef,
            hangStatusActivity: ex,
            requestToStreamActivity: eC,
            showHangStatus: eE,
        } = e,
        { enableUserHoverActivities: eI } = (0, P.fC)({ guildId: m.guild_id, location: "VoiceUser" }),
        { standardPopoverGap: eb } = (0, U.FS)({ guildId: m.guild_id, location: "VoiceUser" }),
        eN = l.useRef(null),
        [eS, eT] = l.useState(!1),
        ev = l.useRef(null),
        [ey, ej] = l.useState(!1),
        [eR, eO] = l.useState(!1),
        [eL, eM] = l.useState(!1),
        [eD, eG] = l.useState(!1),
        eU = eR || eD || eL,
        eP = ey || eU,
        ew = eC?.session_id != null,
        ek = (0, r.bG)([R.A], () => R.A.hasVoiceDareForUserId(s.id), [s.id]),
        eV = (0, j.Uk)("VoiceUser") && ek,
        eB = () => {
            eT(!eS);
        },
        eH = (e, t) => {
            let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
            null != t && n.has(t) && (eL && eM(!1), eR && eO(!1)), eF();
        },
        eF = () => {
            ed?.(s.id);
        },
        eK = (e) => {
            (!eI || e_) &&
                (e
                    ? (ev.current = setTimeout(() => {
                          ej(!0);
                      }, 150 * !!eu))
                    : clearTimeout(ev.current));
        };
    l.useEffect(() => () => clearTimeout(ev.current), []);
    let eW = (e) => {
            e && ej(!1);
        },
        eY = () => {
            if (!(el && (0, E.eo)(m, G.A, L.A, M.A, f.default)[0])) return;
            let e = { streamType: V.U4.GUILD, ownerId: s.id, channelId: m.id, guildId: m.guild_id };
            O.default.getId() !== s.id && h.default.selectVoiceChannel(m.id),
                es ? ((0, I.A)(e), c.A.selectParticipant(e.channelId, (0, C._z)(e))) : (0, A.Nl)(e),
                ed?.(s.id);
        },
        ez = (e) => {
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
        eq = (e) =>
            e_
                ? (0, i.jsx)(N.h, { ...e, channel: m, setIsHangStatusInputFocused: eO, setIsEmojiPickerOpen: eG })
                : null != ex
                  ? (0, i.jsx)(S.E, { ...e, hangStatusActivity: ex, channel: m, userId: s.id })
                  : null,
        eX = () => (0, i.jsx)(T.A, { userId: s.id, channel: m }),
        eJ = () =>
            (0, p.r9)() && (0, p.UK)(m.id)
                ? null
                : (0, i.jsx)(b.A, {
                      user: s,
                      channel: m,
                      onWatch: eY,
                      previewIsOpen: eu,
                      location: eg,
                      isStandardGap: null != eb,
                  }),
        eQ = (0, i.jsx)("div", {
            className: H.kZ,
            "data-dnd-name": m.name,
            onMouseEnter: em
                ? void 0
                : () => {
                      eI
                          ? (!e_ || !eE || eI || eS || eP || ej(!0), eS || eo?.(s.id))
                          : (el || eE || ew || eV) && !eS && eo?.(s.id);
                  },
            onMouseLeave: em ? void 0 : eF,
            children: (0, i.jsx)(v.A, {
                clickTrap: s?.id === D.default.getCurrentUser()?.id && eS,
                targetElementRef: eN,
                user: s,
                guildId: m.guild_id,
                channelId: m.id,
                newAnalyticsLocations: [g.A.VOICE_USER],
                shouldShow: eS,
                onRequestClose: () => eT(!1),
                children: (e) =>
                    ((e) => {
                        let n = k.hv.has(eh ?? ""),
                            l = {
                                user: s,
                                speaking: Z,
                                latched: ee,
                                disconnected: et,
                                mute: F,
                                localMute: K,
                                localVideoDisabled: W,
                                isStreaming: el,
                                isGuest: ea,
                                video: z,
                                priority: er,
                                ringing: $,
                                deaf: Y,
                                nick: Q,
                                collapsed: t,
                                overlap: t,
                                serverMute: X,
                                serverDeaf: J,
                                tabIndex: ep,
                                otherClientSessionType: eh,
                                voicePlatform: eA,
                                embeddedApplication: q,
                                avatarContainerClass: a()({ [H.dj]: !0 }),
                                disabled: em && !n,
                                selected: eS,
                                onClick: n ? void 0 : eB,
                                onDoubleClick: eY,
                                onContextMenu: ez,
                                guildId: m.guild_id,
                                isSelf: e_,
                                application: ef,
                                channelId: m.id,
                                hangStatusActivity: ex,
                                showHangStatus: eE,
                            };
                        if (em)
                            return (0, i.jsx)(o.m, {
                                text: (0, x.A)(eh) ?? B.intl.string(B.t.IyYqqY),
                                children: (0, i.jsx)(y.Ay, { ref: eN, ...l }),
                            });
                        let r = () => null;
                        return (
                            eE && eP && !eI
                                ? (r = eq)
                                : eI
                                  ? (r = () =>
                                        (0, i.jsx)(w.A, {
                                            channel: m,
                                            user: s,
                                            onAction: eF,
                                            onWatchStream: el ? eY : void 0,
                                            hangStatusActivity: ex,
                                            renderSelfHangStatus: eq,
                                            isHoveringHangStatus: ey,
                                        }))
                                  : el
                                    ? (r = eJ)
                                    : ew && s.id !== O.default.getId()
                                      ? (r = eX)
                                      : eE && (r = eq),
                            (0, i.jsx)(d.YNO, {
                                targetElementRef: eN,
                                position: "right",
                                renderPopout: r,
                                shouldShow: (ec || (eE && eU && (!eI || e_))) && !eS,
                                onRequestClose: eH,
                                align: eE && eP && !e_ && !eI ? "center" : void 0,
                                spacing: eb ?? (eE && eP && (!eI || e_) ? 8 : 0),
                                children: () =>
                                    (0, i.jsx)(y.Ay, {
                                        ...l,
                                        ref: eN,
                                        onMouseDown: e.onMouseDown,
                                        onKeyDown: e.onKeyDown,
                                        handleHoverHangStatus: eK,
                                        handleHoverIcons: eW,
                                        onAddHangStatusClicked: () => eM(!0),
                                    }),
                            })
                        );
                    })(e),
            }),
        });
    return ei ? en(eQ) : eQ;
});
