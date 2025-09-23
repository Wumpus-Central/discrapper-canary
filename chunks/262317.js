n.d(t, {
    XX: () => D,
    ZP: () => B,
    ul: () => U,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
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
    y = n(569545),
    C = n(102172),
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
    T = n(594174),
    N = n(979651),
    A = n(927923),
    w = n(70722),
    M = n(388032),
    R = n(2628);
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
function D(e) {
    let { numUsers: t } = e;
    return (0, r.jsx)("div", {
        className: R.moreContainer,
        children: (0, r.jsxs)(o.Text, {
            color: "text-muted",
            variant: "text-sm/medium",
            children: ["+", t],
        }),
    });
}
function U(e) {
    let { numAudience: t, collapsed: n } = e,
        i = n ? t : M.intl.formatToPlainString(M.t["+v2pNz"], { count: t });
    return (0, r.jsxs)("div", {
        className: a()(R.audienceContainer, { [R.audienceContainerCollapsed]: n }),
        children: [
            (0, r.jsx)("div", {
                className: R.audienceIconContainer,
                children: (0, r.jsx)(o.VWR, {
                    size: "md",
                    color: "currentColor",
                    className: R.audienceIcon,
                }),
            }),
            (0, r.jsx)(o.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: i,
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
            localVideoDisabled: F,
            deaf: V,
            video: H,
            embeddedApplication: G,
            serverMute: z,
            serverDeaf: W,
            nick: q,
            ringing: Y,
            speaking: K,
            disconnected: X,
            connectUserDragSource: J,
            canDrag: Q,
            isStreaming: $,
            isWatching: ee,
            isGuest: et,
            priority: en,
            showPreview: er,
            hidePreview: ei,
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
        eb = i.useRef(null),
        [ey, eC] = i.useState(!1),
        [e_, ev] = i.useState(!1),
        [ex, eO] = i.useState(!1),
        ej = e_ || ex,
        eE = (null == em ? void 0 : em.session_id) != null,
        eS = () => {
            eC(!ey);
        },
        eP = () => {
            ($ || eg || eE) && (null == ei || ei(p.id));
        },
        eI = (e) => {
            e && ea && ev(!0);
        },
        eZ = (e) => {
            e && ev(!1);
        },
        eT = () => {
            if (!($ && (0, C.p9)(D, N.Z, I.Z, Z.Z, g.Z)[0])) return;
            let e = {
                streamType: w.lo.GUILD,
                ownerId: p.id,
                channelId: D.id,
                guildId: D.guild_id,
            };
            P.default.getId() !== p.id && u.default.selectVoiceChannel(D.id),
                ee ? ((0, _.Z)(e), s.Z.selectParticipant(e.channelId, (0, y.V9)(e))) : (0, d.iV)(e),
                null == ei || ei(p.id);
        },
        eN = (e) => {
            (0, c.jW)(e, async () => {
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
        eA = (e) =>
            ep
                ? (0, r.jsx)(
                      x.$,
                      L(k({}, e), {
                          channel: D,
                          setIsHangStatusInputFocused: eO,
                      }),
                  )
                : null != ef
                  ? (0, r.jsx)(
                        O.I,
                        L(k({}, e), {
                            hangStatusActivity: ef,
                            channel: D,
                            userId: p.id,
                        }),
                    )
                  : null,
        ew = () =>
            (0, r.jsx)(j.Z, {
                userId: p.id,
                channel: D,
            }),
        eM = () =>
            (0, h.dl)() && (0, h.zd)(D.id)
                ? null
                : (0, r.jsx)(v.Z, {
                      user: p,
                      channel: D,
                      onWatch: eT,
                      previewIsOpen: ea,
                      location: ed,
                  }),
        eR = (0, r.jsx)("div", {
            className: R.draggable,
            "data-dnd-name": D.name,
            onMouseEnter: ec
                ? void 0
                : () => {
                      ($ || eg || eE) && !ey && (null == er || er(p.id));
                  },
            onMouseLeave: ec ? void 0 : eP,
            children: (0, r.jsx)(E.Z, {
                clickTrap:
                    (null == p ? void 0 : p.id) === (null == (t = T.default.getCurrentUser()) ? void 0 : t.id) && ey,
                targetElementRef: eb,
                user: p,
                guildId: D.guild_id,
                channelId: D.id,
                newAnalyticsLocations: [f.Z.VOICE_USER],
                shouldShow: ey,
                onRequestClose: () => eC(!1),
                children: (e) =>
                    ((e) => {
                        let t = A.al.has(null != eo ? eo : ""),
                            n = {
                                user: p,
                                speaking: K,
                                disconnected: X,
                                mute: U,
                                localMute: B,
                                localVideoDisabled: F,
                                isStreaming: $,
                                isGuest: et,
                                video: H,
                                priority: en,
                                ringing: Y,
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
                                selected: ey,
                                onClick: t ? void 0 : eS,
                                onDoubleClick: eT,
                                onContextMenu: eN,
                                guildId: D.guild_id,
                                isSelf: ep,
                                application: eh,
                                channelId: D.id,
                                hangStatusActivity: ef,
                                showHangStatus: eg,
                            };
                        if (ec) {
                            var i;
                            return (0, r.jsx)(o.ua7, {
                                text: null != (i = (0, b.Z)(eo)) ? i : M.intl.string(M.t.IyYqqa),
                                children: (e) => {
                                    var { onClick: t, onContextMenu: i } = e,
                                        l = (function (e, t) {
                                            if (null == e) return {};
                                            var n,
                                                r,
                                                i = (function (e, t) {
                                                    if (null == e) return {};
                                                    var n,
                                                        r,
                                                        i = {},
                                                        l = Object.keys(e);
                                                    for (r = 0; r < l.length; r++)
                                                        (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                    return i;
                                                })(e, t);
                                            if (Object.getOwnPropertySymbols) {
                                                var l = Object.getOwnPropertySymbols(e);
                                                for (r = 0; r < l.length; r++)
                                                    (n = l[r]),
                                                        !(t.indexOf(n) >= 0) &&
                                                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                            (i[n] = e[n]);
                                            }
                                            return i;
                                        })(e, ["onClick", "onContextMenu"]);
                                    return (0, r.jsx)(S.ZP, k({ ref: eb }, n, l));
                                },
                            });
                        }
                        let s = () => null;
                        return (
                            eg && ej ? (s = eA) : $ ? (s = eM) : eE && p.id !== P.default.getId() && (s = ew),
                            (0, r.jsx)(o.yRy, {
                                targetElementRef: eb,
                                position: "right",
                                renderPopout: s,
                                shouldShow: (el || (eg && ex)) && !ey,
                                onRequestClose: eP,
                                align: eg && ej && !ep ? "center" : void 0,
                                spacing: eg && ej ? 8 : 0,
                                children: () =>
                                    (0, r.jsx)(
                                        S.ZP,
                                        L(k({}, n), {
                                            ref: eb,
                                            onMouseDown: e.onMouseDown,
                                            onKeyDown: e.onKeyDown,
                                            handleHoverHangStatus: eI,
                                            handleHoverIcons: eZ,
                                        }),
                                    ),
                            })
                        );
                    })(e),
            }),
        });
    return Q ? J(eR) : eR;
});
