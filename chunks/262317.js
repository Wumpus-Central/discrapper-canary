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
            disconnected: J,
            connectUserDragSource: Q,
            canDrag: $,
            isStreaming: ee,
            isWatching: et,
            isGuest: en,
            priority: er,
            showPreview: ei,
            hidePreview: el,
            shouldShowHoverPopout: ea,
            previewIsOpen: eo,
            otherClientSessionType: es,
            voicePlatform: ec,
            isSelfOnOtherClient: eu = !1,
            tabIndex: ed,
            location: ep,
            isSelf: ef,
            application: eh,
            hangStatusActivity: em,
            requestToStreamActivity: eg,
            showHangStatus: eb,
        } = e,
        e_ = i.useRef(null),
        [ey, eC] = i.useState(!1),
        ev = i.useRef(null),
        [eO, ex] = i.useState(!1),
        [eE, ej] = i.useState(!1),
        [eS, eP] = i.useState(!1),
        [eI, eZ] = i.useState(!1),
        eT = eE || eI || eS,
        eN = eO || eT,
        eA = (null == eg ? void 0 : eg.session_id) != null,
        ew = () => {
            eC(!ey);
        },
        eM = (e, t) => {
            let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
            null != t && n.has(t) && (eS && eP(!1), eE && ej(!1)), eR();
        },
        eR = () => {
            (ee || eb || eA) && (null == el || el(f.id));
        },
        eD = (e) => {
            e
                ? (ev.current = setTimeout(() => {
                      ex(!0);
                  }, 150 * !!eo))
                : clearTimeout(ev.current);
        };
    i.useEffect(() => () => clearTimeout(ev.current), []);
    let eL = (e) => {
            e && ex(!1);
        },
        ek = () => {
            if (!(ee && (0, C.p9)(U, A.Z, Z.Z, T.Z, b.default)[0])) return;
            let e = {
                streamType: M.lo.GUILD,
                ownerId: f.id,
                channelId: U.id,
                guildId: U.guild_id,
            };
            I.default.getId() !== f.id && d.default.selectVoiceChannel(U.id),
                et ? ((0, v.Z)(e), c.Z.selectParticipant(e.channelId, (0, y.V9)(e))) : (0, p.iV)(e),
                null == el || el(f.id);
        },
        eU = (e) => {
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
        eB = (e) =>
            ef
                ? (0, r.jsx)(
                      x.$,
                      k(L({}, e), {
                          channel: U,
                          setIsHangStatusInputFocused: ej,
                          setIsEmojiPickerOpen: eZ,
                      }),
                  )
                : null != em
                  ? (0, r.jsx)(
                        E.I,
                        k(L({}, e), {
                            hangStatusActivity: em,
                            channel: U,
                            userId: f.id,
                        }),
                    )
                  : null,
        eF = () =>
            (0, r.jsx)(j.Z, {
                userId: f.id,
                channel: U,
            }),
        eV = () =>
            (0, h.dl)() && (0, h.zd)(U.id)
                ? null
                : (0, r.jsx)(O.Z, {
                      user: f,
                      channel: U,
                      onWatch: ek,
                      previewIsOpen: eo,
                      location: ep,
                  }),
        eH = (0, r.jsx)("div", {
            className: D.draggable,
            "data-dnd-name": U.name,
            onMouseEnter: eu
                ? void 0
                : () => {
                      (ee || eb || eA) && !ey && (null == ei || ei(f.id));
                  },
            onMouseLeave: eu ? void 0 : eR,
            children: (0, r.jsx)(S.Z, {
                clickTrap:
                    (null == f ? void 0 : f.id) === (null == (t = N.default.getCurrentUser()) ? void 0 : t.id) && ey,
                targetElementRef: e_,
                user: f,
                guildId: U.guild_id,
                channelId: U.id,
                newAnalyticsLocations: [m.Z.VOICE_USER],
                shouldShow: ey,
                onRequestClose: () => eC(!1),
                children: (e) =>
                    ((e) => {
                        let t = w.al.has(null != es ? es : ""),
                            n = {
                                user: f,
                                speaking: X,
                                disconnected: J,
                                mute: B,
                                localMute: F,
                                localVideoDisabled: V,
                                isStreaming: ee,
                                isGuest: en,
                                video: G,
                                priority: er,
                                ringing: K,
                                deaf: H,
                                nick: Y,
                                collapsed: l,
                                overlap: l,
                                serverMute: z,
                                serverDeaf: q,
                                tabIndex: ed,
                                otherClientSessionType: es,
                                voicePlatform: ec,
                                embeddedApplication: W,
                                avatarContainerClass: a()({ [D.userAvatar]: !0 }),
                                disabled: eu && !t,
                                selected: ey,
                                onClick: t ? void 0 : ew,
                                onDoubleClick: ek,
                                onContextMenu: eU,
                                guildId: U.guild_id,
                                isSelf: ef,
                                application: eh,
                                channelId: U.id,
                                hangStatusActivity: em,
                                showHangStatus: eb,
                            };
                        if (eu) {
                            var i;
                            return (0, r.jsx)(o.u, {
                                text: null != (i = (0, _.Z)(es)) ? i : R.intl.string(R.t.IyYqqY),
                                children: (0, r.jsx)(P.ZP, L({ ref: e_ }, n)),
                            });
                        }
                        let c = () => null;
                        return (
                            eb && eN
                                ? (c = eB)
                                : ee
                                  ? (c = eV)
                                  : eA && f.id !== I.default.getId()
                                    ? (c = eF)
                                    : eb && (c = eB),
                            (0, r.jsx)(s.yRy, {
                                targetElementRef: e_,
                                position: "right",
                                renderPopout: c,
                                shouldShow: (ea || (eb && eT)) && !ey,
                                onRequestClose: eM,
                                align: eb && eN && !ef ? "center" : void 0,
                                spacing: eb && eN ? 8 : 0,
                                children: () =>
                                    (0, r.jsx)(
                                        P.ZP,
                                        k(L({}, n), {
                                            ref: e_,
                                            onMouseDown: e.onMouseDown,
                                            onKeyDown: e.onKeyDown,
                                            handleHoverHangStatus: eD,
                                            handleHoverIcons: eL,
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
