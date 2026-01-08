n.d(t, {
    XX: () => U,
    ZP: () => B,
    ul: () => G,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
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
    g = n(100527),
    m = n(795318),
    b = n(258609),
    y = n(257115),
    v = n(569545),
    O = n(102172),
    j = n(525925),
    x = n(701362),
    C = n(655018),
    E = n(83896),
    S = n(821415),
    _ = n(670188),
    I = n(597998),
    P = n(314897),
    Z = n(430824),
    N = n(496675),
    T = n(594174),
    A = n(979651),
    w = n(927923),
    R = n(70722),
    D = n(388032),
    M = n(932732);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
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
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
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
    return (0, r.jsx)("div", {
        className: M.moreContainer,
        children: (0, r.jsxs)(s.Text, {
            color: "text-muted",
            variant: "text-sm/medium",
            children: ["+", t],
        }),
    });
}
function G(e) {
    let { numAudience: t, collapsed: n } = e,
        i = n ? t : D.intl.formatToPlainString(D.t["+v2pN2"], { count: t });
    return (0, r.jsxs)("div", {
        className: a()(M.audienceContainer, { [M.audienceContainerCollapsed]: n }),
        children: [
            (0, r.jsx)("div", {
                className: M.audienceIconContainer,
                children: (0, r.jsx)(s.VWR, {
                    size: "md",
                    color: "currentColor",
                    className: M.audienceIcon,
                }),
            }),
            (0, r.jsx)(s.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: i,
            }),
        ],
    });
}
let B = (0, f.$)(function (e) {
    var t;
    let {
            collapsed: l,
            user: f,
            channel: U,
            mute: G,
            localMute: B,
            localVideoDisabled: F,
            deaf: H,
            video: V,
            embeddedApplication: z,
            serverMute: W,
            serverDeaf: K,
            nick: Y,
            ringing: q,
            speaking: X,
            voiceDb: Q,
            latched: J,
            disconnected: $,
            connectUserDragSource: ee,
            canDrag: et,
            isStreaming: en,
            isWatching: er,
            isGuest: ei,
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
            isSelf: eg,
            application: em,
            hangStatusActivity: eb,
            requestToStreamActivity: ey,
            showHangStatus: ev,
        } = e,
        eO = i.useRef(null),
        [ej, ex] = i.useState(!1),
        eC = i.useRef(null),
        [eE, eS] = i.useState(!1),
        [e_, eI] = i.useState(!1),
        [eP, eZ] = i.useState(!1),
        [eN, eT] = i.useState(!1),
        eA = e_ || eN || eP,
        ew = eE || eA,
        eR = (null == ey ? void 0 : ey.session_id) != null,
        eD = () => {
            ex(!ej);
        },
        eM = (e, t) => {
            let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
            null != t && n.has(t) && (eP && eZ(!1), e_ && eI(!1)), ek();
        },
        ek = () => {
            (en || ev || eR) && (null == eo || eo(f.id));
        },
        eL = (e) => {
            e
                ? (eC.current = setTimeout(() => {
                      eS(!0);
                  }, 150 * !!ec))
                : clearTimeout(eC.current);
        };
    i.useEffect(() => () => clearTimeout(eC.current), []);
    let eU = (e) => {
            e && eS(!1);
        },
        eG = () => {
            if (!(en && (0, O.p9)(U, A.Z, Z.Z, N.Z, b.default)[0])) return;
            let e = {
                streamType: R.lo.GUILD,
                ownerId: f.id,
                channelId: U.id,
                guildId: U.guild_id,
            };
            P.default.getId() !== f.id && d.default.selectVoiceChannel(U.id),
                er ? ((0, j.Z)(e), c.Z.selectParticipant(e.channelId, (0, v.V9)(e))) : (0, p.iV)(e),
                null == eo || eo(f.id);
        },
        eB = (e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("4040"),
                    n.e("92524"),
                    n.e("7717"),
                    n.e("96253"),
                ]).then(n.bind(n, 757387));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        L(k({}, t), {
                            user: f,
                            guildId: U.guild_id,
                            channel: U,
                            showMediaItems: !0,
                            showStageChannelItems: U.isGuildStageVoice(),
                            onInteraction: (0, m.u)("GuildChannelUserContextMenu", g.Z.VOICE_USER, {
                                targetUserId: f.id,
                            }),
                        }),
                    );
            });
        },
        eF = (e) =>
            eg
                ? (0, r.jsx)(
                      C.$,
                      L(k({}, e), {
                          channel: U,
                          setIsHangStatusInputFocused: eI,
                          setIsEmojiPickerOpen: eT,
                      }),
                  )
                : null != eb
                  ? (0, r.jsx)(
                        E.I,
                        L(k({}, e), {
                            hangStatusActivity: eb,
                            channel: U,
                            userId: f.id,
                        }),
                    )
                  : null,
        eH = () =>
            (0, r.jsx)(S.Z, {
                userId: f.id,
                channel: U,
            }),
        eV = () =>
            (0, h.dl)() && (0, h.zd)(U.id)
                ? null
                : (0, r.jsx)(x.Z, {
                      user: f,
                      channel: U,
                      onWatch: eG,
                      previewIsOpen: ec,
                      location: eh,
                  }),
        ez = (0, r.jsx)("div", {
            className: M.draggable,
            "data-dnd-name": U.name,
            onMouseEnter: ep
                ? void 0
                : () => {
                      (en || ev || eR) && !ej && (null == ea || ea(f.id));
                  },
            onMouseLeave: ep ? void 0 : ek,
            children: (0, r.jsx)(_.Z, {
                clickTrap:
                    (null == f ? void 0 : f.id) === (null == (t = T.default.getCurrentUser()) ? void 0 : t.id) && ej,
                targetElementRef: eO,
                user: f,
                guildId: U.guild_id,
                channelId: U.id,
                newAnalyticsLocations: [g.Z.VOICE_USER],
                shouldShow: ej,
                onRequestClose: () => ex(!1),
                children: (e) =>
                    ((e) => {
                        let t = w.al.has(null != eu ? eu : ""),
                            n = {
                                user: f,
                                speaking: X,
                                voiceDb: Q,
                                latched: J,
                                disconnected: $,
                                mute: G,
                                localMute: B,
                                localVideoDisabled: F,
                                isStreaming: en,
                                isGuest: ei,
                                video: V,
                                priority: el,
                                ringing: q,
                                deaf: H,
                                nick: Y,
                                collapsed: l,
                                overlap: l,
                                serverMute: W,
                                serverDeaf: K,
                                tabIndex: ef,
                                otherClientSessionType: eu,
                                voicePlatform: ed,
                                embeddedApplication: z,
                                avatarContainerClass: a()({ [M.userAvatar]: !0 }),
                                disabled: ep && !t,
                                selected: ej,
                                onClick: t ? void 0 : eD,
                                onDoubleClick: eG,
                                onContextMenu: eB,
                                guildId: U.guild_id,
                                isSelf: eg,
                                application: em,
                                channelId: U.id,
                                hangStatusActivity: eb,
                                showHangStatus: ev,
                            };
                        if (ep) {
                            var i;
                            return (0, r.jsx)(o.u, {
                                text: null != (i = (0, y.Z)(eu)) ? i : D.intl.string(D.t.IyYqqY),
                                children: (0, r.jsx)(I.ZP, k({ ref: eO }, n)),
                            });
                        }
                        let c = () => null;
                        return (
                            ev && ew
                                ? (c = eF)
                                : en
                                  ? (c = eV)
                                  : eR && f.id !== P.default.getId()
                                    ? (c = eH)
                                    : ev && (c = eF),
                            (0, r.jsx)(s.yRy, {
                                targetElementRef: eO,
                                position: "right",
                                renderPopout: c,
                                shouldShow: (es || (ev && eA)) && !ej,
                                onRequestClose: eM,
                                align: ev && ew && !eg ? "center" : void 0,
                                spacing: ev && ew ? 8 : 0,
                                children: () =>
                                    (0, r.jsx)(
                                        I.ZP,
                                        L(k({}, n), {
                                            ref: eO,
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
    return et ? ee(ez) : ez;
});
