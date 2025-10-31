n.d(t, {
    XX: () => U,
    ZP: () => F,
    ul: () => B,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
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
    _ = n(257115),
    y = n(569545),
    C = n(102172),
    v = n(525925),
    O = n(701362),
    x = n(655018),
    E = n(83896),
    j = n(821415),
    S = n(670188),
    P = n(597998),
    I = n(314897),
    Z = n(430824),
    T = n(496675),
    N = n(594174),
    A = n(979651),
    w = n(927923),
    M = n(70722),
    R = n(388032),
    D = n(2628);
function L(e) {
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
function k(e, t) {
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
        className: D.moreContainer,
        children: (0, r.jsxs)(s.Text, {
            color: "text-muted",
            variant: "text-sm/medium",
            children: ["+", t],
        }),
    });
}
function B(e) {
    let { numAudience: t, collapsed: n } = e,
        i = n ? t : R.intl.formatToPlainString(R.t["+v2pN2"], { count: t });
    return (0, r.jsxs)("div", {
        className: a()(D.audienceContainer, { [D.audienceContainerCollapsed]: n }),
        children: [
            (0, r.jsx)("div", {
                className: D.audienceIconContainer,
                children: (0, r.jsx)(s.VWR, {
                    size: "md",
                    color: "currentColor",
                    className: D.audienceIcon,
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
let F = (0, f.$)(function (e) {
    var t;
    let {
            collapsed: l,
            user: f,
            channel: U,
            mute: B,
            localMute: F,
            localVideoDisabled: V,
            deaf: H,
            video: G,
            embeddedApplication: W,
            serverMute: z,
            serverDeaf: q,
            nick: Y,
            ringing: K,
            speaking: X,
            latched: J,
            disconnected: Q,
            connectUserDragSource: $,
            canDrag: ee,
            isStreaming: et,
            isWatching: en,
            isGuest: er,
            priority: ei,
            showPreview: el,
            hidePreview: ea,
            shouldShowHoverPopout: eo,
            previewIsOpen: es,
            otherClientSessionType: ec,
            voicePlatform: eu,
            isSelfOnOtherClient: ed = !1,
            tabIndex: ep,
            location: ef,
            isSelf: eh,
            application: em,
            hangStatusActivity: eg,
            requestToStreamActivity: eb,
            showHangStatus: e_,
        } = e,
        ey = i.useRef(null),
        [eC, ev] = i.useState(!1),
        eO = i.useRef(null),
        [ex, eE] = i.useState(!1),
        [ej, eS] = i.useState(!1),
        [eP, eI] = i.useState(!1),
        [eZ, eT] = i.useState(!1),
        eN = ej || eZ || eP,
        eA = ex || eN,
        ew = (null == eb ? void 0 : eb.session_id) != null,
        eM = () => {
            ev(!eC);
        },
        eR = (e, t) => {
            let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
            null != t && n.has(t) && (eP && eI(!1), ej && eS(!1)), eD();
        },
        eD = () => {
            (et || e_ || ew) && (null == ea || ea(f.id));
        },
        eL = (e) => {
            e
                ? (eO.current = setTimeout(() => {
                      eE(!0);
                  }, 150 * !!es))
                : clearTimeout(eO.current);
        };
    i.useEffect(() => () => clearTimeout(eO.current), []);
    let ek = (e) => {
            e && eE(!1);
        },
        eU = () => {
            if (!(et && (0, C.p9)(U, A.Z, Z.Z, T.Z, b.default)[0])) return;
            let e = {
                streamType: M.lo.GUILD,
                ownerId: f.id,
                channelId: U.id,
                guildId: U.guild_id,
            };
            I.default.getId() !== f.id && d.default.selectVoiceChannel(U.id),
                en ? ((0, v.Z)(e), c.Z.selectParticipant(e.channelId, (0, y.V9)(e))) : (0, p.iV)(e),
                null == ea || ea(f.id);
        },
        eB = (e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("98783"),
                    n.e("8982"),
                    n.e("7717"),
                    n.e("87157"),
                ]).then(n.bind(n, 757387));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        k(L({}, t), {
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
            eh
                ? (0, r.jsx)(
                      x.$,
                      k(L({}, e), {
                          channel: U,
                          setIsHangStatusInputFocused: eS,
                          setIsEmojiPickerOpen: eT,
                      }),
                  )
                : null != eg
                  ? (0, r.jsx)(
                        E.I,
                        k(L({}, e), {
                            hangStatusActivity: eg,
                            channel: U,
                            userId: f.id,
                        }),
                    )
                  : null,
        eV = () =>
            (0, r.jsx)(j.Z, {
                userId: f.id,
                channel: U,
            }),
        eH = () =>
            (0, h.dl)() && (0, h.zd)(U.id)
                ? null
                : (0, r.jsx)(O.Z, {
                      user: f,
                      channel: U,
                      onWatch: eU,
                      previewIsOpen: es,
                      location: ef,
                  }),
        eG = (0, r.jsx)("div", {
            className: D.draggable,
            "data-dnd-name": U.name,
            onMouseEnter: ed
                ? void 0
                : () => {
                      (et || e_ || ew) && !eC && (null == el || el(f.id));
                  },
            onMouseLeave: ed ? void 0 : eD,
            children: (0, r.jsx)(S.Z, {
                clickTrap:
                    (null == f ? void 0 : f.id) === (null == (t = N.default.getCurrentUser()) ? void 0 : t.id) && eC,
                targetElementRef: ey,
                user: f,
                guildId: U.guild_id,
                channelId: U.id,
                newAnalyticsLocations: [m.Z.VOICE_USER],
                shouldShow: eC,
                onRequestClose: () => ev(!1),
                children: (e) =>
                    ((e) => {
                        let t = w.al.has(null != ec ? ec : ""),
                            n = {
                                user: f,
                                speaking: X,
                                latched: J,
                                disconnected: Q,
                                mute: B,
                                localMute: F,
                                localVideoDisabled: V,
                                isStreaming: et,
                                isGuest: er,
                                video: G,
                                priority: ei,
                                ringing: K,
                                deaf: H,
                                nick: Y,
                                collapsed: l,
                                overlap: l,
                                serverMute: z,
                                serverDeaf: q,
                                tabIndex: ep,
                                otherClientSessionType: ec,
                                voicePlatform: eu,
                                embeddedApplication: W,
                                avatarContainerClass: a()({ [D.userAvatar]: !0 }),
                                disabled: ed && !t,
                                selected: eC,
                                onClick: t ? void 0 : eM,
                                onDoubleClick: eU,
                                onContextMenu: eB,
                                guildId: U.guild_id,
                                isSelf: eh,
                                application: em,
                                channelId: U.id,
                                hangStatusActivity: eg,
                                showHangStatus: e_,
                            };
                        if (ed) {
                            var i;
                            return (0, r.jsx)(o.u, {
                                text: null != (i = (0, _.Z)(ec)) ? i : R.intl.string(R.t.IyYqqY),
                                children: (0, r.jsx)(P.ZP, L({ ref: ey }, n)),
                            });
                        }
                        let c = () => null;
                        return (
                            e_ && eA
                                ? (c = eF)
                                : et
                                  ? (c = eH)
                                  : ew && f.id !== I.default.getId()
                                    ? (c = eV)
                                    : e_ && (c = eF),
                            (0, r.jsx)(s.yRy, {
                                targetElementRef: ey,
                                position: "right",
                                renderPopout: c,
                                shouldShow: (eo || (e_ && eN)) && !eC,
                                onRequestClose: eR,
                                align: e_ && eA && !eh ? "center" : void 0,
                                spacing: e_ && eA ? 8 : 0,
                                children: () =>
                                    (0, r.jsx)(
                                        P.ZP,
                                        k(L({}, n), {
                                            ref: ey,
                                            onMouseDown: e.onMouseDown,
                                            onKeyDown: e.onKeyDown,
                                            handleHoverHangStatus: eL,
                                            handleHoverIcons: ek,
                                            onAddHangStatusClicked: () => eI(!0),
                                        }),
                                    ),
                            })
                        );
                    })(e),
            }),
        });
    return ee ? $(eG) : eG;
});
