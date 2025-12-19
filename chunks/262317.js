n.d(t, {
    XX: () => U,
    ZP: () => H,
    ul: () => V,
}),
    n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(28664),
    s = n(481060),
    c = n(475179),
    u = n(239091),
    d = n(287734),
    p = n(872810),
    f = n(888651),
    h = n(622822),
    m = n(100527),
    g = n(795318),
    b = n(258609),
    y = n(257115),
    C = n(569545),
    v = n(102172),
    x = n(525925),
    O = n(701362),
    E = n(655018),
    j = n(83896),
    S = n(821415),
    _ = n(670188),
    P = n(597998),
    I = n(314897),
    Z = n(430824),
    T = n(496675),
    N = n(594174),
    A = n(979651),
    w = n(927923),
    M = n(70722),
    R = n(388032),
    D = n(932732);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function U(e) {
    let { numUsers: t } = e;
    return (0, i.jsx)("div", {
        className: D.moreContainer,
        children: (0, i.jsxs)(s.Text, {
            color: "text-muted",
            variant: "text-sm/medium",
            children: ["+", t],
        }),
    });
}
function V(e) {
    let { numAudience: t, collapsed: n } = e,
        r = n ? t : R.intl.formatToPlainString(R.t["+v2pN2"], { count: t });
    return (0, i.jsxs)("div", {
        className: a()(D.audienceContainer, { [D.audienceContainerCollapsed]: n }),
        children: [
            (0, i.jsx)("div", {
                className: D.audienceIconContainer,
                children: (0, i.jsx)(s.VWR, {
                    size: "md",
                    color: "currentColor",
                    className: D.audienceIcon,
                }),
            }),
            (0, i.jsx)(s.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: r,
            }),
        ],
    });
}
let H = (0, f.$)(function (e) {
    var t;
    let {
            collapsed: l,
            user: f,
            channel: U,
            mute: V,
            localMute: H,
            localVideoDisabled: F,
            deaf: B,
            video: G,
            embeddedApplication: W,
            serverMute: z,
            serverDeaf: q,
            nick: K,
            ringing: Y,
            speaking: X,
            voiceDb: J,
            latched: Q,
            disconnected: $,
            connectUserDragSource: ee,
            canDrag: et,
            isStreaming: en,
            isWatching: ei,
            isGuest: er,
            priority: el,
            showPreview: ea,
            hidePreview: eo,
            shouldShowHoverPopout: es,
            previewIsOpen: ec,
            otherClientSessionType: eu,
            voicePlatform: ed,
            isSelfOnOtherClient: ep = !1,
            tabIndex: ef,
            location: eh,
            isSelf: em,
            application: eg,
            hangStatusActivity: eb,
            requestToStreamActivity: ey,
            showHangStatus: eC,
        } = e,
        ev = r.useRef(null),
        [ex, eO] = r.useState(!1),
        eE = r.useRef(null),
        [ej, eS] = r.useState(!1),
        [e_, eP] = r.useState(!1),
        [eI, eZ] = r.useState(!1),
        [eT, eN] = r.useState(!1),
        eA = e_ || eT || eI,
        ew = ej || eA,
        eM = (null == ey ? void 0 : ey.session_id) != null,
        eR = () => {
            eO(!ex);
        },
        eD = (e, t) => {
            let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
            null != t && n.has(t) && (eI && eZ(!1), e_ && eP(!1)), ek();
        },
        ek = () => {
            (en || eC || eM) && (null == eo || eo(f.id));
        },
        eL = (e) => {
            e
                ? (eE.current = setTimeout(() => {
                      eS(!0);
                  }, 150 * !!ec))
                : clearTimeout(eE.current);
        };
    r.useEffect(() => () => clearTimeout(eE.current), []);
    let eU = (e) => {
            e && eS(!1);
        },
        eV = () => {
            if (!(en && (0, v.p9)(U, A.Z, Z.Z, T.Z, b.default)[0])) return;
            let e = {
                streamType: M.lo.GUILD,
                ownerId: f.id,
                channelId: U.id,
                guildId: U.guild_id,
            };
            I.default.getId() !== f.id && d.default.selectVoiceChannel(U.id),
                ei ? ((0, x.Z)(e), c.Z.selectParticipant(e.channelId, (0, C.V9)(e))) : (0, p.iV)(e),
                null == eo || eo(f.id);
        },
        eH = (e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("66165"),
                    n.e("8982"),
                    n.e("7717"),
                    n.e("96253"),
                ]).then(n.bind(n, 757387));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        L(k({}, t), {
                            user: f,
                            guildId: U.guild_id,
                            channel: U,
                            showMediaItems: !0,
                            showStageChannelItems: U.isGuildStageVoice(),
                            onInteraction: (0, g.u)("GuildChannelUserContextMenu", m.Z.VOICE_USER, {
                                targetUserId: f.id,
                            }),
                        }),
                    );
            });
        },
        eF = (e) =>
            em
                ? (0, i.jsx)(
                      E.$,
                      L(k({}, e), {
                          channel: U,
                          setIsHangStatusInputFocused: eP,
                          setIsEmojiPickerOpen: eN,
                      }),
                  )
                : null != eb
                  ? (0, i.jsx)(
                        j.I,
                        L(k({}, e), {
                            hangStatusActivity: eb,
                            channel: U,
                            userId: f.id,
                        }),
                    )
                  : null,
        eB = () =>
            (0, i.jsx)(S.Z, {
                userId: f.id,
                channel: U,
            }),
        eG = () =>
            (0, h.dl)() && (0, h.zd)(U.id)
                ? null
                : (0, i.jsx)(O.Z, {
                      user: f,
                      channel: U,
                      onWatch: eV,
                      previewIsOpen: ec,
                      location: eh,
                  }),
        eW = (0, i.jsx)("div", {
            className: D.draggable,
            "data-dnd-name": U.name,
            onMouseEnter: ep
                ? void 0
                : () => {
                      (en || eC || eM) && !ex && (null == ea || ea(f.id));
                  },
            onMouseLeave: ep ? void 0 : ek,
            children: (0, i.jsx)(_.Z, {
                clickTrap:
                    (null == f ? void 0 : f.id) === (null == (t = N.default.getCurrentUser()) ? void 0 : t.id) && ex,
                targetElementRef: ev,
                user: f,
                guildId: U.guild_id,
                channelId: U.id,
                newAnalyticsLocations: [m.Z.VOICE_USER],
                shouldShow: ex,
                onRequestClose: () => eO(!1),
                children: (e) =>
                    ((e) => {
                        let t = w.al.has(null != eu ? eu : ""),
                            n = {
                                user: f,
                                speaking: X,
                                voiceDb: J,
                                latched: Q,
                                disconnected: $,
                                mute: V,
                                localMute: H,
                                localVideoDisabled: F,
                                isStreaming: en,
                                isGuest: er,
                                video: G,
                                priority: el,
                                ringing: Y,
                                deaf: B,
                                nick: K,
                                collapsed: l,
                                overlap: l,
                                serverMute: z,
                                serverDeaf: q,
                                tabIndex: ef,
                                otherClientSessionType: eu,
                                voicePlatform: ed,
                                embeddedApplication: W,
                                avatarContainerClass: a()({ [D.userAvatar]: !0 }),
                                disabled: ep && !t,
                                selected: ex,
                                onClick: t ? void 0 : eR,
                                onDoubleClick: eV,
                                onContextMenu: eH,
                                guildId: U.guild_id,
                                isSelf: em,
                                application: eg,
                                channelId: U.id,
                                hangStatusActivity: eb,
                                showHangStatus: eC,
                            };
                        if (ep) {
                            var r;
                            return (0, i.jsx)(o.u, {
                                text: null != (r = (0, y.Z)(eu)) ? r : R.intl.string(R.t.IyYqqY),
                                children: (0, i.jsx)(P.ZP, k({ ref: ev }, n)),
                            });
                        }
                        let c = () => null;
                        return (
                            eC && ew
                                ? (c = eF)
                                : en
                                  ? (c = eG)
                                  : eM && f.id !== I.default.getId()
                                    ? (c = eB)
                                    : eC && (c = eF),
                            (0, i.jsx)(s.yRy, {
                                targetElementRef: ev,
                                position: "right",
                                renderPopout: c,
                                shouldShow: (es || (eC && eA)) && !ex,
                                onRequestClose: eD,
                                align: eC && ew && !em ? "center" : void 0,
                                spacing: eC && ew ? 8 : 0,
                                children: () =>
                                    (0, i.jsx)(
                                        P.ZP,
                                        L(k({}, n), {
                                            ref: ev,
                                            onMouseDown: e.onMouseDown,
                                            onKeyDown: e.onKeyDown,
                                            handleHoverHangStatus: eL,
                                            handleHoverIcons: eU,
                                            onAddHangStatusClicked: () => eZ(!0),
                                        }),
                                    ),
                            })
                        );
                    })(e),
            }),
        });
    return et ? ee(eW) : eW;
});
