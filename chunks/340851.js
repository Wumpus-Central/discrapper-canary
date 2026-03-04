"use strict";
n.d(t, { Ay: () => K, LR: () => H, aI: () => F });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(367513),
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
    S = n(958140),
    b = n(721931),
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
    P = n(376696);
n(281405);
var w = n(544105),
    k = n(502075),
    V = n(985018),
    B = n(861379);
function H(e) {
    let { numUsers: t } = e;
    return (0, i.jsx)("div", {
        className: B.BN,
        children: (0, i.jsxs)(c.Text, { color: "text-muted", variant: "text-sm/medium", children: ["+", t] }),
    });
}
function F(e) {
    let { numAudience: t, collapsed: n } = e,
        s = n ? t : V.intl.formatToPlainString(V.t["+v2pN2"], { count: t });
    return (0, i.jsxs)("div", {
        className: r()(B.yJ, { [B.Nr]: n }),
        children: [
            (0, i.jsx)("div", {
                className: B.$L,
                children: (0, i.jsx)(c.LoC, { size: "md", color: "currentColor", className: B.wG }),
            }),
            (0, i.jsx)(c.Text, { color: "text-muted", variant: "text-sm/medium", children: s }),
        ],
    });
}
let K = (0, m.J)(function (e) {
    let {
            collapsed: t,
            user: l,
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
            disconnected: Z,
            connectUserDragSource: ee,
            canDrag: et,
            isStreaming: en,
            isWatching: ei,
            isGuest: es,
            priority: el,
            showPreview: er,
            hidePreview: ea,
            shouldShowHoverPopout: eo,
            previewIsOpen: ec,
            otherClientSessionType: ed,
            voicePlatform: eu,
            isSelfOnOtherClient: eh = !1,
            tabIndex: eA,
            location: em,
            isSelf: ep,
            application: eg,
            hangStatusActivity: e_,
            requestToStreamActivity: ef,
            showHangStatus: ex,
        } = e,
        { enableUserHoverActivities: eC } = (0, U.fC)({ guildId: m.guild_id, location: "VoiceUser" }),
        eE = s.useRef(null),
        [eI, eN] = s.useState(!1),
        eS = s.useRef(null),
        [eb, eT] = s.useState(!1),
        [ev, ey] = s.useState(!1),
        [ej, eR] = s.useState(!1),
        [eO, eL] = s.useState(!1),
        eM = ev || eO || ej,
        eD = eb || eM,
        eG = ef?.session_id != null,
        eU = (0, a.bG)([R.A], () => R.A.hasVoiceDareForUserId(l.id), [l.id]),
        eP = (0, j.Uk)("VoiceUser") && eU,
        ew = () => {
            eN(!eI);
        },
        ek = (e, t) => {
            let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
            null != t && n.has(t) && (ej && eR(!1), ev && ey(!1)), eV();
        },
        eV = () => {
            ea?.(l.id);
        },
        eB = (e) => {
            (!eC || ep) &&
                (e
                    ? (eS.current = setTimeout(() => {
                          eT(!0);
                      }, 150 * !!ec))
                    : clearTimeout(eS.current));
        };
    s.useEffect(() => () => clearTimeout(eS.current), []);
    let eH = (e) => {
            e && eT(!1);
        },
        eF = () => {
            if (!(en && (0, E.eo)(m, G.A, L.A, M.A, f.default)[0])) return;
            let e = { streamType: k.U4.GUILD, ownerId: l.id, channelId: m.id, guildId: m.guild_id };
            O.default.getId() !== l.id && h.default.selectVoiceChannel(m.id),
                ei ? ((0, I.A)(e), d.A.selectParticipant(e.channelId, (0, C._z)(e))) : (0, A.Nl)(e),
                ea?.(l.id);
        },
        eK = (e) => {
            (0, u.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("84841"), n.e("54266")]).then(
                    n.bind(n, 107632),
                );
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        user: l,
                        guildId: m.guild_id,
                        channel: m,
                        showMediaItems: !0,
                        showStageChannelItems: m.isGuildStageVoice(),
                        onInteraction: (0, _.s)("GuildChannelUserContextMenu", g.A.VOICE_USER, { targetUserId: l.id }),
                    });
            });
        },
        eW = (e) =>
            ep
                ? (0, i.jsx)(S.h, { ...e, channel: m, setIsHangStatusInputFocused: ey, setIsEmojiPickerOpen: eL })
                : null != e_
                  ? (0, i.jsx)(b.E, { ...e, hangStatusActivity: e_, channel: m, userId: l.id })
                  : null,
        eY = () => (0, i.jsx)(T.A, { userId: l.id, channel: m }),
        ez = () =>
            (0, p.r9)() && (0, p.UK)(m.id)
                ? null
                : (0, i.jsx)(N.A, { user: l, channel: m, onWatch: eF, previewIsOpen: ec, location: em }),
        eq = (0, i.jsx)("div", {
            className: B.kZ,
            "data-dnd-name": m.name,
            onMouseEnter: eh
                ? void 0
                : () => {
                      eC
                          ? (!ep || !ex || eC || eI || eD || eT(!0), eI || er?.(l.id))
                          : (en || ex || eG || eP) && !eI && er?.(l.id);
                  },
            onMouseLeave: eh ? void 0 : eV,
            children: (0, i.jsx)(v.A, {
                clickTrap: l?.id === D.default.getCurrentUser()?.id && eI,
                targetElementRef: eE,
                user: l,
                guildId: m.guild_id,
                channelId: m.id,
                newAnalyticsLocations: [g.A.VOICE_USER],
                shouldShow: eI,
                onRequestClose: () => eN(!1),
                children: (e) =>
                    ((e) => {
                        let n = w.hv.has(ed ?? ""),
                            s = {
                                user: l,
                                speaking: $,
                                disconnected: Z,
                                mute: H,
                                localMute: F,
                                localVideoDisabled: K,
                                isStreaming: en,
                                isGuest: es,
                                video: Y,
                                priority: el,
                                ringing: Q,
                                deaf: W,
                                nick: J,
                                collapsed: t,
                                overlap: t,
                                serverMute: q,
                                serverDeaf: X,
                                tabIndex: eA,
                                otherClientSessionType: ed,
                                voicePlatform: eu,
                                embeddedApplication: z,
                                avatarContainerClass: r()({ [B.dj]: !0 }),
                                disabled: eh && !n,
                                selected: eI,
                                onClick: n ? void 0 : ew,
                                onDoubleClick: eF,
                                onContextMenu: eK,
                                guildId: m.guild_id,
                                isSelf: ep,
                                application: eg,
                                channelId: m.id,
                                hangStatusActivity: e_,
                                showHangStatus: ex,
                            };
                        if (eh)
                            return (0, i.jsx)(o.m, {
                                text: (0, x.A)(ed) ?? V.intl.string(V.t.IyYqqY),
                                children: (0, i.jsx)(y.Ay, { ref: eE, ...s }),
                            });
                        let a = () => null;
                        return (
                            ex && eD && !eC
                                ? (a = eW)
                                : eC
                                  ? (a = () =>
                                        (0, i.jsx)(P.A, {
                                            channel: m,
                                            user: l,
                                            onAction: eV,
                                            onWatchStream: en ? eF : void 0,
                                            hangStatusActivity: e_,
                                            renderSelfHangStatus: eW,
                                        }))
                                  : en
                                    ? (a = ez)
                                    : eG && l.id !== O.default.getId()
                                      ? (a = eY)
                                      : ex && (a = eW),
                            (0, i.jsx)(c.YNO, {
                                targetElementRef: eE,
                                position: "right",
                                renderPopout: a,
                                shouldShow: (eo || (ex && eM && (!eC || ep))) && !eI,
                                onRequestClose: ek,
                                align: ex && eD && !ep && !eC ? "center" : void 0,
                                spacing: 17,
                                children: () =>
                                    (0, i.jsx)(y.Ay, {
                                        ...s,
                                        ref: eE,
                                        onMouseDown: e.onMouseDown,
                                        onKeyDown: e.onKeyDown,
                                        handleHoverHangStatus: eB,
                                        handleHoverIcons: eH,
                                        onAddHangStatusClicked: () => eR(!0),
                                    }),
                            })
                        );
                    })(e),
            }),
        });
    return et ? ee(eq) : eq;
});
