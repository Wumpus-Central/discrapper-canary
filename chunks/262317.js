n.d(t, {
    XX: () => U,
    ZP: () => F,
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
    C = n(257115),
    y = n(569545),
    v = n(102172),
    O = n(525925),
    x = n(701362),
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
    L = n(932732);
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
function V(e) {
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
let F = (0, f.$)(function (e) {
    var t;
    let {
            collapsed: l,
            user: f,
            channel: U,
            mute: V,
            localMute: F,
            localVideoDisabled: B,
            deaf: H,
            video: G,
            embeddedApplication: z,
            serverMute: W,
            serverDeaf: q,
            nick: K,
            ringing: Y,
            speaking: X,
            latched: J,
            disconnected: Q,
            connectUserDragSource: $,
            canDrag: ee,
            isStreaming: et,
            isWatching: en,
            isGuest: ei,
            priority: er,
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
            showHangStatus: eC,
        } = e,
        ey = r.useRef(null),
        [ev, eO] = r.useState(!1),
        ex = r.useRef(null),
        [eE, ej] = r.useState(!1),
        [eS, e_] = r.useState(!1),
        [eP, eI] = r.useState(!1),
        [eZ, eT] = r.useState(!1),
        eN = eS || eZ || eP,
        eA = eE || eN,
        ew = (null == eb ? void 0 : eb.session_id) != null,
        eM = () => {
            eO(!ev);
        },
        eR = (e, t) => {
            let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
            null != t && n.has(t) && (eP && eI(!1), eS && e_(!1)), eL();
        },
        eL = () => {
            (et || eC || ew) && (null == ea || ea(f.id));
        },
        eD = (e) => {
            e
                ? (ex.current = setTimeout(() => {
                      ej(!0);
                  }, 150 * !!es))
                : clearTimeout(ex.current);
        };
    r.useEffect(() => () => clearTimeout(ex.current), []);
    let ek = (e) => {
            e && ej(!1);
        },
        eU = () => {
            if (!(et && (0, v.p9)(U, A.Z, Z.Z, T.Z, b.default)[0])) return;
            let e = {
                streamType: M.lo.GUILD,
                ownerId: f.id,
                channelId: U.id,
                guildId: U.guild_id,
            };
            I.default.getId() !== f.id && d.default.selectVoiceChannel(U.id),
                en ? ((0, O.Z)(e), c.Z.selectParticipant(e.channelId, (0, y.V9)(e))) : (0, p.iV)(e),
                null == ea || ea(f.id);
        },
        eV = (e) => {
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
                        k(D({}, t), {
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
                ? (0, i.jsx)(
                      E.$,
                      k(D({}, e), {
                          channel: U,
                          setIsHangStatusInputFocused: e_,
                          setIsEmojiPickerOpen: eT,
                      }),
                  )
                : null != eg
                  ? (0, i.jsx)(
                        j.I,
                        k(D({}, e), {
                            hangStatusActivity: eg,
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
        eH = () =>
            (0, h.dl)() && (0, h.zd)(U.id)
                ? null
                : (0, i.jsx)(x.Z, {
                      user: f,
                      channel: U,
                      onWatch: eU,
                      previewIsOpen: es,
                      location: ef,
                  }),
        eG = (0, i.jsx)("div", {
            className: L.draggable,
            "data-dnd-name": U.name,
            onMouseEnter: ed
                ? void 0
                : () => {
                      (et || eC || ew) && !ev && (null == el || el(f.id));
                  },
            onMouseLeave: ed ? void 0 : eL,
            children: (0, i.jsx)(_.Z, {
                clickTrap:
                    (null == f ? void 0 : f.id) === (null == (t = N.default.getCurrentUser()) ? void 0 : t.id) && ev,
                targetElementRef: ey,
                user: f,
                guildId: U.guild_id,
                channelId: U.id,
                newAnalyticsLocations: [m.Z.VOICE_USER],
                shouldShow: ev,
                onRequestClose: () => eO(!1),
                children: (e) =>
                    ((e) => {
                        let t = w.al.has(null != ec ? ec : ""),
                            n = {
                                user: f,
                                speaking: X,
                                latched: J,
                                disconnected: Q,
                                mute: V,
                                localMute: F,
                                localVideoDisabled: B,
                                isStreaming: et,
                                isGuest: ei,
                                video: G,
                                priority: er,
                                ringing: Y,
                                deaf: H,
                                nick: K,
                                collapsed: l,
                                overlap: l,
                                serverMute: W,
                                serverDeaf: q,
                                tabIndex: ep,
                                otherClientSessionType: ec,
                                voicePlatform: eu,
                                embeddedApplication: z,
                                avatarContainerClass: a()({ [L.userAvatar]: !0 }),
                                disabled: ed && !t,
                                selected: ev,
                                onClick: t ? void 0 : eM,
                                onDoubleClick: eU,
                                onContextMenu: eV,
                                guildId: U.guild_id,
                                isSelf: eh,
                                application: em,
                                channelId: U.id,
                                hangStatusActivity: eg,
                                showHangStatus: eC,
                            };
                        if (ed) {
                            var r;
                            return (0, i.jsx)(o.u, {
                                text: null != (r = (0, C.Z)(ec)) ? r : R.intl.string(R.t.IyYqqY),
                                children: (0, i.jsx)(P.ZP, D({ ref: ey }, n)),
                            });
                        }
                        let c = () => null;
                        return (
                            eC && eA
                                ? (c = eF)
                                : et
                                  ? (c = eH)
                                  : ew && f.id !== I.default.getId()
                                    ? (c = eB)
                                    : eC && (c = eF),
                            (0, i.jsx)(s.yRy, {
                                targetElementRef: ey,
                                position: "right",
                                renderPopout: c,
                                shouldShow: (eo || (eC && eN)) && !ev,
                                onRequestClose: eR,
                                align: eC && eA && !eh ? "center" : void 0,
                                spacing: eC && eA ? 8 : 0,
                                children: () =>
                                    (0, i.jsx)(
                                        P.ZP,
                                        k(D({}, n), {
                                            ref: ey,
                                            onMouseDown: e.onMouseDown,
                                            onKeyDown: e.onKeyDown,
                                            handleHoverHangStatus: eD,
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
