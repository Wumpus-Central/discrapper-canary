n.d(t, {
    XX: () => U,
    ZP: () => G,
    ul: () => B,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(846519),
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
    y = n(257115),
    _ = n(569545),
    C = n(102172),
    v = n(525925),
    x = n(701362),
    O = n(655018),
    j = n(83896),
    E = n(821415),
    S = n(670188),
    I = n(597998),
    P = n(314897),
    Z = n(430824),
    T = n(496675),
    N = n(594174),
    A = n(979651),
    w = n(927923),
    R = n(70722),
    M = n(388032),
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
        i = n ? t : M.intl.formatToPlainString(M.t["+v2pNz"], { count: t });
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
let G = (0, h.$)(function (e) {
    var t;
    let {
            collapsed: l,
            user: h,
            channel: U,
            mute: B,
            localMute: G,
            localVideoDisabled: H,
            deaf: F,
            video: V,
            embeddedApplication: z,
            serverMute: W,
            serverDeaf: q,
            nick: Y,
            ringing: K,
            speaking: X,
            disconnected: Q,
            connectUserDragSource: J,
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
            isSelf: eh,
            application: ef,
            hangStatusActivity: em,
            requestToStreamActivity: eg,
            showHangStatus: eb,
        } = e,
        ey = i.useRef(null),
        [e_, eC] = i.useState(!1),
        [ev, ex] = i.useState(!1),
        eO = (null == eg ? void 0 : eg.session_id) != null,
        ej = () => {
            eC(!e_);
        },
        eE = () => {
            (ee || eb || eO) && (null == el || el(h.id));
        },
        eS = i.useMemo(
            () =>
                new o.sW(500, () => {
                    ex(!0);
                }),
            [],
        ),
        eI = (e) => {
            e && eo ? eS.delay() : !e && eS.isDelayed() && eS.cancel();
        },
        eP = (e) => {
            e && (eS.cancel(), ex(!1));
        },
        eZ = () => {
            if (!(ee && (0, C.p9)(U, A.Z, Z.Z, T.Z, b.Z)[0])) return;
            let e = {
                streamType: R.lo.GUILD,
                ownerId: h.id,
                channelId: U.id,
                guildId: U.guild_id,
            };
            P.default.getId() !== h.id && d.default.selectVoiceChannel(U.id),
                et ? ((0, v.Z)(e), c.Z.selectParticipant(e.channelId, (0, _.V9)(e))) : (0, p.iV)(e),
                null == el || el(h.id);
        },
        eT = (e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("98783"),
                    n.e("8982"),
                    n.e("7717"),
                    n.e("19848"),
                ]).then(n.bind(n, 757387));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        k(L({}, t), {
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
        eN = (e) =>
            eh
                ? (0, r.jsx)(O.$, k(L({}, e), { channel: U }))
                : null != em
                  ? (0, r.jsx)(
                        j.I,
                        k(L({}, e), {
                            hangStatusActivity: em,
                            channel: U,
                        }),
                    )
                  : null,
        eA = () =>
            (0, r.jsx)(E.Z, {
                userId: h.id,
                channel: U,
            }),
        ew = () =>
            (0, f.dl)() && (0, f.zd)(U.id)
                ? null
                : (0, r.jsx)(x.Z, {
                      user: h,
                      channel: U,
                      onWatch: eZ,
                      previewIsOpen: eo,
                      location: ep,
                  }),
        eR = (0, r.jsx)("div", {
            className: D.draggable,
            "data-dnd-name": U.name,
            onMouseEnter: eu
                ? void 0
                : () => {
                      (ee || eb || eO) && !e_ && (null == ei || ei(h.id));
                  },
            onMouseLeave: eu ? void 0 : eE,
            children: (0, r.jsx)(S.Z, {
                clickTrap:
                    (null == h ? void 0 : h.id) === (null == (t = N.default.getCurrentUser()) ? void 0 : t.id) && e_,
                targetElementRef: ey,
                user: h,
                guildId: U.guild_id,
                channelId: U.id,
                newAnalyticsLocations: [m.Z.VOICE_USER],
                shouldShow: e_,
                onRequestClose: () => eC(!1),
                children: (e) =>
                    ((e) => {
                        let t = w.al.has(null != es ? es : ""),
                            n = {
                                user: h,
                                speaking: X,
                                disconnected: Q,
                                mute: B,
                                localMute: G,
                                localVideoDisabled: H,
                                isStreaming: ee,
                                isGuest: en,
                                video: V,
                                priority: er,
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
                                avatarContainerClass: a()({ [D.userAvatar]: !0 }),
                                disabled: eu && !t,
                                selected: e_,
                                onClick: t ? void 0 : ej,
                                onDoubleClick: eZ,
                                onContextMenu: eT,
                                guildId: U.guild_id,
                                isSelf: eh,
                                application: ef,
                                channelId: U.id,
                                hangStatusActivity: em,
                                showHangStatus: eb,
                            };
                        if (eu) {
                            var i;
                            return (0, r.jsx)(s.ua7, {
                                text: null != (i = (0, y.Z)(es)) ? i : M.intl.string(M.t.IyYqqa),
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
                                    return (0, r.jsx)(I.ZP, L({ ref: ey }, n, l));
                                },
                            });
                        }
                        let o = () => null;
                        return (
                            eb && ev ? (o = eN) : ee ? (o = ew) : eO && h.id !== P.default.getId() && (o = eA),
                            (0, r.jsx)(s.yRy, {
                                targetElementRef: ey,
                                position: "right",
                                renderPopout: o,
                                shouldShow: ea && !e_,
                                onRequestClose: eE,
                                align: eb && ev && !eh ? "center" : void 0,
                                spacing: eb && ev ? 8 : 0,
                                children: () =>
                                    (0, r.jsx)(
                                        I.ZP,
                                        k(L({}, n), {
                                            ref: ey,
                                            onMouseDown: e.onMouseDown,
                                            onKeyDown: e.onKeyDown,
                                            handleHoverHangStatus: eI,
                                            handleHoverIcons: eP,
                                        }),
                                    ),
                            })
                        );
                    })(e),
            }),
        });
    return $ ? J(eR) : eR;
});
