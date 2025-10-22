n.d(t, {
    XX: () => U,
    ZP: () => H,
    ul: () => B,
}),
    n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(28664),
    s = n(481060),
    c = n(475179),
    u = n(239091),
    d = n(287734),
    p = n(872810),
    h = n(888651),
    f = n(622822),
    m = n(100527),
    g = n(795318),
    b = n(258609),
    C = n(257115),
    y = n(569545),
    _ = n(102172),
    v = n(525925),
    x = n(701362),
    O = n(655018),
    j = n(83896),
    E = n(821415),
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
    L = n(2628);
function D(e) {
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
function k(e, t) {
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
        className: L.moreContainer,
        children: (0, i.jsxs)(s.Text, {
            color: "text-muted",
            variant: "text-sm/medium",
            children: ["+", t],
        }),
    });
}
function B(e) {
    let { numAudience: t, collapsed: n } = e,
        r = n ? t : R.intl.formatToPlainString(R.t["+v2pN2"], { count: t });
    return (0, i.jsxs)("div", {
        className: a()(L.audienceContainer, { [L.audienceContainerCollapsed]: n }),
        children: [
            (0, i.jsx)("div", {
                className: L.audienceIconContainer,
                children: (0, i.jsx)(s.VWR, {
                    size: "md",
                    color: "currentColor",
                    className: L.audienceIcon,
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
let H = (0, h.$)(function (e) {
    var t;
    let {
            collapsed: l,
            user: h,
            channel: U,
            mute: B,
            localMute: H,
            localVideoDisabled: V,
            deaf: F,
            video: G,
            embeddedApplication: z,
            serverMute: W,
            serverDeaf: q,
            nick: Y,
            ringing: K,
            speaking: X,
            disconnected: J,
            connectUserDragSource: Q,
            canDrag: $,
            isStreaming: ee,
            isWatching: et,
            isGuest: en,
            priority: ei,
            showPreview: er,
            hidePreview: el,
            shouldShowHoverPopout: ea,
            previewIsOpen: eo,
            otherClientSessionType: es,
            voicePlatform: ec,
            isSelfOnOtherClient: eu = !1,
            tabIndex: ed,
            location: ep,
            isSelf: eh,
            application: ef,
            hangStatusActivity: em,
            requestToStreamActivity: eg,
            showHangStatus: eb,
        } = e,
        eC = r.useRef(null),
        [ey, e_] = r.useState(!1),
        ev = r.useRef(null),
        [ex, eO] = r.useState(!1),
        [ej, eE] = r.useState(!1),
        [eS, eP] = r.useState(!1),
        eI = ej || eS,
        eZ = ex || eI,
        eT = (null == eg ? void 0 : eg.session_id) != null,
        eN = () => {
            e_(!ey);
        },
        eA = (e, t) => {
            let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
            null != t && n.has(t) && (eS && eP(!1), ej && eE(!1)), ew();
        },
        ew = () => {
            (ee || eb || eT) && (null == el || el(h.id));
        },
        eM = (e) => {
            e
                ? (ev.current = setTimeout(() => {
                      eO(!0);
                  }, 150 * !!eo))
                : clearTimeout(ev.current);
        };
    r.useEffect(() => () => clearTimeout(ev.current), []);
    let eR = (e) => {
            e && eO(!1);
        },
        eL = () => {
            if (!(ee && (0, _.p9)(U, A.Z, Z.Z, T.Z, b.default)[0])) return;
            let e = {
                streamType: M.lo.GUILD,
                ownerId: h.id,
                channelId: U.id,
                guildId: U.guild_id,
            };
            I.default.getId() !== h.id && d.default.selectVoiceChannel(U.id),
                et ? ((0, v.Z)(e), c.Z.selectParticipant(e.channelId, (0, y.V9)(e))) : (0, p.iV)(e),
                null == el || el(h.id);
        },
        eD = (e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("98783"),
                    n.e("8982"),
                    n.e("7717"),
                    n.e("87157"),
                ]).then(n.bind(n, 757387));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        k(D({}, t), {
                            user: h,
                            guildId: U.guild_id,
                            channel: U,
                            showMediaItems: !0,
                            showStageChannelItems: U.isGuildStageVoice(),
                            onInteraction: (0, g.u)("GuildChannelUserContextMenu", m.Z.VOICE_USER, {
                                targetUserId: h.id,
                            }),
                        }),
                    );
            });
        },
        ek = (e) =>
            eh
                ? (0, i.jsx)(
                      O.$,
                      k(D({}, e), {
                          channel: U,
                          setIsHangStatusInputFocused: eE,
                      }),
                  )
                : null != em
                  ? (0, i.jsx)(
                        j.I,
                        k(D({}, e), {
                            hangStatusActivity: em,
                            channel: U,
                            userId: h.id,
                        }),
                    )
                  : null,
        eU = () =>
            (0, i.jsx)(E.Z, {
                userId: h.id,
                channel: U,
            }),
        eB = () =>
            (0, f.dl)() && (0, f.zd)(U.id)
                ? null
                : (0, i.jsx)(x.Z, {
                      user: h,
                      channel: U,
                      onWatch: eL,
                      previewIsOpen: eo,
                      location: ep,
                  }),
        eH = (0, i.jsx)("div", {
            className: L.draggable,
            "data-dnd-name": U.name,
            onMouseEnter: eu
                ? void 0
                : () => {
                      (ee || eb || eT) && !ey && (null == er || er(h.id));
                  },
            onMouseLeave: eu ? void 0 : ew,
            children: (0, i.jsx)(S.Z, {
                clickTrap:
                    (null == h ? void 0 : h.id) === (null == (t = N.default.getCurrentUser()) ? void 0 : t.id) && ey,
                targetElementRef: eC,
                user: h,
                guildId: U.guild_id,
                channelId: U.id,
                newAnalyticsLocations: [m.Z.VOICE_USER],
                shouldShow: ey,
                onRequestClose: () => e_(!1),
                children: (e) =>
                    ((e) => {
                        let t = w.al.has(null != es ? es : ""),
                            n = {
                                user: h,
                                speaking: X,
                                disconnected: J,
                                mute: B,
                                localMute: H,
                                localVideoDisabled: V,
                                isStreaming: ee,
                                isGuest: en,
                                video: G,
                                priority: ei,
                                ringing: K,
                                deaf: F,
                                nick: Y,
                                collapsed: l,
                                overlap: l,
                                serverMute: W,
                                serverDeaf: q,
                                tabIndex: ed,
                                otherClientSessionType: es,
                                voicePlatform: ec,
                                embeddedApplication: z,
                                avatarContainerClass: a()({ [L.userAvatar]: !0 }),
                                disabled: eu && !t,
                                selected: ey,
                                onClick: t ? void 0 : eN,
                                onDoubleClick: eL,
                                onContextMenu: eD,
                                guildId: U.guild_id,
                                isSelf: eh,
                                application: ef,
                                channelId: U.id,
                                hangStatusActivity: em,
                                showHangStatus: eb,
                            };
                        if (eu) {
                            var r;
                            return (0, i.jsx)(o.u, {
                                text: null != (r = (0, C.Z)(es)) ? r : R.intl.string(R.t.IyYqqY),
                                children: (0, i.jsx)(P.ZP, D({ ref: eC }, n)),
                            });
                        }
                        let c = () => null;
                        return (
                            eb && eZ
                                ? (c = ek)
                                : ee
                                  ? (c = eB)
                                  : eT && h.id !== I.default.getId()
                                    ? (c = eU)
                                    : eb && (c = ek),
                            (0, i.jsx)(s.yRy, {
                                targetElementRef: eC,
                                position: "right",
                                renderPopout: c,
                                shouldShow: (ea || (eb && eI)) && !ey,
                                onRequestClose: eA,
                                align: eb && eZ && !eh ? "center" : void 0,
                                spacing: eb && eZ ? 8 : 0,
                                children: () =>
                                    (0, i.jsx)(
                                        P.ZP,
                                        k(D({}, n), {
                                            ref: eC,
                                            onMouseDown: e.onMouseDown,
                                            onKeyDown: e.onKeyDown,
                                            handleHoverHangStatus: eM,
                                            handleHoverIcons: eR,
                                            onAddHangStatusClicked: () => eP(!0),
                                        }),
                                    ),
                            })
                        );
                    })(e),
            }),
        });
    return $ ? Q(eH) : eH;
});
