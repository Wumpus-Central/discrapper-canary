n.d(t, {
    XX: () => D,
    ZP: () => B,
    ul: () => U,
}),
    n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(475179),
    c = n(239091),
    u = n(287734),
    d = n(872810),
    p = n(888651),
    h = n(622822),
    f = n(100527),
    m = n(795318),
    g = n(258609),
    b = n(257115),
    C = n(569545),
    y = n(102172),
    _ = n(525925),
    v = n(701362),
    x = n(655018),
    O = n(83896),
    j = n(821415),
    E = n(670188),
    S = n(597998),
    P = n(314897),
    I = n(430824),
    Z = n(496675),
    N = n(594174),
    T = n(979651),
    A = n(927923),
    w = n(70722),
    M = n(388032),
    R = n(2628);
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
function D(e) {
    let { numUsers: t } = e;
    return (0, i.jsx)("div", {
        className: R.moreContainer,
        children: (0, i.jsxs)(o.Text, {
            color: "text-muted",
            variant: "text-sm/medium",
            children: ["+", t],
        }),
    });
}
function U(e) {
    let { numAudience: t, collapsed: n } = e,
        r = n ? t : M.intl.formatToPlainString(M.t["+v2pNz"], { count: t });
    return (0, i.jsxs)("div", {
        className: a()(R.audienceContainer, { [R.audienceContainerCollapsed]: n }),
        children: [
            (0, i.jsx)("div", {
                className: R.audienceIconContainer,
                children: (0, i.jsx)(o.VWR, {
                    size: "md",
                    color: "currentColor",
                    className: R.audienceIcon,
                }),
            }),
            (0, i.jsx)(o.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: r,
            }),
        ],
    });
}
let B = (0, p.$)(function (e) {
    var t;
    let {
            collapsed: l,
            user: p,
            channel: D,
            mute: U,
            localMute: B,
            localVideoDisabled: H,
            deaf: V,
            video: F,
            embeddedApplication: G,
            serverMute: z,
            serverDeaf: W,
            nick: q,
            ringing: K,
            speaking: Y,
            disconnected: X,
            connectUserDragSource: J,
            canDrag: Q,
            isStreaming: $,
            isWatching: ee,
            isGuest: et,
            priority: en,
            showPreview: ei,
            hidePreview: er,
            shouldShowHoverPopout: el,
            previewIsOpen: ea,
            otherClientSessionType: eo,
            voicePlatform: es,
            isSelfOnOtherClient: ec = !1,
            tabIndex: eu,
            location: ed,
            isSelf: ep,
            application: eh,
            hangStatusActivity: ef,
            requestToStreamActivity: em,
            showHangStatus: eg,
        } = e,
        eb = r.useRef(null),
        [eC, ey] = r.useState(!1),
        [e_, ev] = r.useState(!1),
        [ex, eO] = r.useState(!1),
        [ej, eE] = r.useState(!1),
        eS = ex || ej,
        eP = e_ || eS,
        eI = (null == em ? void 0 : em.session_id) != null,
        eZ = () => {
            ey(!eC);
        },
        eN = (e, t) => {
            let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
            ej && null != t && n.has(t) && eE(!1), eT();
        },
        eT = () => {
            ($ || eg || eI) && (null == er || er(p.id));
        },
        eA = (e) => {
            e && ea && ev(!0);
        },
        ew = (e) => {
            e && ev(!1);
        },
        eM = () => {
            if (!($ && (0, y.p9)(D, T.Z, I.Z, Z.Z, g.Z)[0])) return;
            let e = {
                streamType: w.lo.GUILD,
                ownerId: p.id,
                channelId: D.id,
                guildId: D.guild_id,
            };
            P.default.getId() !== p.id && u.default.selectVoiceChannel(D.id),
                ee ? ((0, _.Z)(e), s.Z.selectParticipant(e.channelId, (0, C.V9)(e))) : (0, d.iV)(e),
                null == er || er(p.id);
        },
        eR = (e) => {
            (0, c.jW)(e, async () => {
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
                        L(k({}, t), {
                            user: p,
                            guildId: D.guild_id,
                            channel: D,
                            showMediaItems: !0,
                            showStageChannelItems: D.isGuildStageVoice(),
                            onInteraction: (0, m.u)("GuildChannelUserContextMenu", f.Z.VOICE_USER, {
                                targetUserId: p.id,
                            }),
                        }),
                    );
            });
        },
        ek = (e) =>
            ep
                ? (0, i.jsx)(
                      x.$,
                      L(k({}, e), {
                          channel: D,
                          setIsHangStatusInputFocused: eO,
                      }),
                  )
                : null != ef
                  ? (0, i.jsx)(
                        O.I,
                        L(k({}, e), {
                            hangStatusActivity: ef,
                            channel: D,
                            userId: p.id,
                        }),
                    )
                  : null,
        eL = () =>
            (0, i.jsx)(j.Z, {
                userId: p.id,
                channel: D,
            }),
        eD = () =>
            (0, h.dl)() && (0, h.zd)(D.id)
                ? null
                : (0, i.jsx)(v.Z, {
                      user: p,
                      channel: D,
                      onWatch: eM,
                      previewIsOpen: ea,
                      location: ed,
                  }),
        eU = (0, i.jsx)("div", {
            className: R.draggable,
            "data-dnd-name": D.name,
            onMouseEnter: ec
                ? void 0
                : () => {
                      ($ || eg || eI) && !eC && (null == ei || ei(p.id));
                  },
            onMouseLeave: ec ? void 0 : eT,
            children: (0, i.jsx)(E.Z, {
                clickTrap:
                    (null == p ? void 0 : p.id) === (null == (t = N.default.getCurrentUser()) ? void 0 : t.id) && eC,
                targetElementRef: eb,
                user: p,
                guildId: D.guild_id,
                channelId: D.id,
                newAnalyticsLocations: [f.Z.VOICE_USER],
                shouldShow: eC,
                onRequestClose: () => ey(!1),
                children: (e) =>
                    ((e) => {
                        let t = A.al.has(null != eo ? eo : ""),
                            n = {
                                user: p,
                                speaking: Y,
                                disconnected: X,
                                mute: U,
                                localMute: B,
                                localVideoDisabled: H,
                                isStreaming: $,
                                isGuest: et,
                                video: F,
                                priority: en,
                                ringing: K,
                                deaf: V,
                                nick: q,
                                collapsed: l,
                                overlap: l,
                                serverMute: z,
                                serverDeaf: W,
                                tabIndex: eu,
                                otherClientSessionType: eo,
                                voicePlatform: es,
                                embeddedApplication: G,
                                avatarContainerClass: a()({ [R.userAvatar]: !0 }),
                                disabled: ec && !t,
                                selected: eC,
                                onClick: t ? void 0 : eZ,
                                onDoubleClick: eM,
                                onContextMenu: eR,
                                guildId: D.guild_id,
                                isSelf: ep,
                                application: eh,
                                channelId: D.id,
                                hangStatusActivity: ef,
                                showHangStatus: eg,
                            };
                        if (ec) {
                            var r;
                            return (0, i.jsx)(o.ua7, {
                                text: null != (r = (0, b.Z)(eo)) ? r : M.intl.string(M.t.IyYqqa),
                                children: (e) => {
                                    var { onClick: t, onContextMenu: r } = e,
                                        l = (function (e, t) {
                                            if (null == e) return {};
                                            var n,
                                                i,
                                                r = (function (e, t) {
                                                    if (null == e) return {};
                                                    var n,
                                                        i,
                                                        r = {},
                                                        l = Object.keys(e);
                                                    for (i = 0; i < l.length; i++)
                                                        (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                                    return r;
                                                })(e, t);
                                            if (Object.getOwnPropertySymbols) {
                                                var l = Object.getOwnPropertySymbols(e);
                                                for (i = 0; i < l.length; i++)
                                                    (n = l[i]),
                                                        !(t.indexOf(n) >= 0) &&
                                                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                            (r[n] = e[n]);
                                            }
                                            return r;
                                        })(e, ["onClick", "onContextMenu"]);
                                    return (0, i.jsx)(S.ZP, k({ ref: eb }, n, l));
                                },
                            });
                        }
                        let s = () => null;
                        return (
                            eg && eP ? (s = ek) : $ ? (s = eD) : eI && p.id !== P.default.getId() && (s = eL),
                            (0, i.jsx)(o.yRy, {
                                targetElementRef: eb,
                                position: "right",
                                renderPopout: s,
                                shouldShow: (el || (eg && eS)) && !eC,
                                onRequestClose: eN,
                                align: eg && eP && !ep ? "center" : void 0,
                                spacing: eg && eP ? 8 : 0,
                                children: () =>
                                    (0, i.jsx)(
                                        S.ZP,
                                        L(k({}, n), {
                                            ref: eb,
                                            onMouseDown: e.onMouseDown,
                                            onKeyDown: e.onKeyDown,
                                            handleHoverHangStatus: eA,
                                            handleHoverIcons: ew,
                                            onAddHangStatusClicked: () => eE(!0),
                                        }),
                                    ),
                            })
                        );
                    })(e),
            }),
        });
    return Q ? J(eU) : eU;
});
