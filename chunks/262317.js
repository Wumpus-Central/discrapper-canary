n.d(t, {
    XX: () => F,
    ZP: () => Y,
    ul: () => V,
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(846519),
    l = n(481060),
    c = n(475179),
    u = n(239091),
    d = n(287734),
    f = n(872810),
    _ = n(888651),
    p = n(622822),
    h = n(100527),
    m = n(795318),
    g = n(258609),
    E = n(257115),
    b = n(569545),
    y = n(102172),
    O = n(525925),
    v = n(701362),
    I = n(224184),
    T = n(821415),
    S = n(670188),
    A = n(597998),
    N = n(314897),
    C = n(430824),
    R = n(496675),
    P = n(594174),
    w = n(979651),
    D = n(927923),
    L = n(70722),
    x = n(388032),
    M = n(92024);
function j(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
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
                j(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = Z(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function Z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function F(e) {
    let { numUsers: t } = e;
    return (0, r.jsx)("div", {
        className: M.moreContainer,
        children: (0, r.jsxs)(l.Text, {
            color: "text-muted",
            variant: "text-sm/medium",
            children: ["+", t],
        }),
    });
}
function V(e) {
    let { numAudience: t, collapsed: n } = e,
        i = n ? t : x.intl.formatToPlainString(x.t["+v2pNz"], { count: t });
    return (0, r.jsxs)("div", {
        className: a()(M.audienceContainer, { [M.audienceContainerCollapsed]: n }),
        children: [
            (0, r.jsx)("div", {
                className: M.audienceIconContainer,
                children: (0, r.jsx)(l.VWR, {
                    size: "md",
                    color: "currentColor",
                    className: M.audienceIcon,
                }),
            }),
            (0, r.jsx)(l.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: i,
            }),
        ],
    });
}
function H(e) {
    var t;
    let {
            collapsed: o,
            user: _,
            channel: j,
            mute: U,
            localMute: Z,
            localVideoDisabled: F,
            deaf: V,
            video: H,
            embeddedApplication: Y,
            serverMute: W,
            serverDeaf: K,
            nick: z,
            ringing: q,
            speaking: X,
            disconnected: Q,
            connectUserDragSource: J,
            canDrag: $,
            isStreaming: ee,
            isWatching: et,
            isGuest: en,
            priority: er,
            showPreview: ei,
            hidePreview: eo,
            shouldShowHoverPopout: ea,
            previewIsOpen: es,
            otherClientSessionType: el,
            voicePlatform: ec,
            isSelfOnOtherClient: eu = !1,
            tabIndex: ed,
            location: ef,
            isSelf: e_,
            application: ep,
            hangStatusActivity: eh,
            requestToStreamActivity: em,
            showHangStatus: eg,
        } = e,
        eE = i.useRef(null),
        [eb, ey] = i.useState(!1),
        [eO, ev] = i.useState(!1),
        eI = (null == em ? void 0 : em.session_id) != null,
        eT = () => {
            ey(!eb);
        },
        eS = () => {
            (ee || eg || eI) && (null == eo || eo(_.id));
        },
        eA = () => {
            (ee || eg || eI) && !eb && (null == ei || ei(_.id));
        },
        eN = i.useMemo(
            () =>
                new s.sW(500, () => {
                    ev(!0);
                }),
            [],
        ),
        eC = (e) => {
            e && es ? eN.delay() : !e && eN.isDelayed() && eN.cancel();
        },
        eR = (e) => {
            e && (eN.cancel(), ev(!1));
        },
        eP = () => ee && (0, y.p9)(j, w.Z, C.Z, R.Z, g.Z)[0],
        ew = () => {
            if (!eP()) return;
            let e = {
                streamType: L.lo.GUILD,
                ownerId: _.id,
                channelId: j.id,
                guildId: j.guild_id,
            };
            N.default.getId() !== _.id && d.default.selectVoiceChannel(j.id),
                et ? ((0, O.Z)(e), c.Z.selectParticipant(e.channelId, (0, b.V9)(e))) : (0, f.iV)(e),
                null == eo || eo(_.id);
        },
        eD = (e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("98783"),
                    n.e("8982"),
                    n.e("7717"),
                    n.e("96306"),
                ]).then(n.bind(n, 757387));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        G(k({}, t), {
                            user: _,
                            guildId: j.guild_id,
                            channel: j,
                            showMediaItems: !0,
                            showStageChannelItems: j.isGuildStageVoice(),
                            onInteraction: (0, m.u)("GuildChannelUserContextMenu", h.Z.VOICE_USER, {
                                targetUserId: _.id,
                            }),
                        }),
                    );
            });
        },
        eL = () =>
            (0, r.jsx)(I.Z, {
                previewIsOpen: es,
                channel: j,
                hangStatusActivity: eh,
                userId: _.id,
                targetElementRef: eE,
            }),
        ex = () =>
            (0, r.jsx)(T.Z, {
                userId: _.id,
                channel: j,
            }),
        eM = () =>
            (0, p.dl)() && (0, p.zd)(j.id)
                ? null
                : (0, r.jsx)(v.Z, {
                      user: _,
                      channel: j,
                      onWatch: ew,
                      previewIsOpen: es,
                      location: ef,
                  }),
        ej = (e) => {
            let t = D.al.has(null != el ? el : ""),
                n = {
                    user: _,
                    speaking: X,
                    disconnected: Q,
                    mute: U,
                    localMute: Z,
                    localVideoDisabled: F,
                    isStreaming: ee,
                    isGuest: en,
                    video: H,
                    priority: er,
                    ringing: q,
                    deaf: V,
                    nick: z,
                    collapsed: o,
                    overlap: o,
                    serverMute: W,
                    serverDeaf: K,
                    tabIndex: ed,
                    otherClientSessionType: el,
                    voicePlatform: ec,
                    embeddedApplication: Y,
                    avatarContainerClass: a()({ [M.userAvatar]: !0 }),
                    disabled: eu && !t,
                    selected: eb,
                    onClick: t ? void 0 : eT,
                    onDoubleClick: ew,
                    onContextMenu: eD,
                    guildId: j.guild_id,
                    isSelf: e_,
                    application: ep,
                    channelId: j.id,
                    hangStatusActivity: eh,
                    showHangStatus: eg,
                };
            if (eu) {
                var i;
                return (0, r.jsx)(l.ua7, {
                    text: null != (i = (0, E.Z)(el)) ? i : x.intl.string(x.t.IyYqqa),
                    children: (e) => {
                        var { onClick: t, onContextMenu: i } = e,
                            o = B(e, ["onClick", "onContextMenu"]);
                        return (0, r.jsx)(A.ZP, k({ ref: eE }, n, o));
                    },
                });
            }
            let s = () => null;
            return (
                eg && eO ? (s = eL) : ee ? (s = eM) : eI && _.id !== N.default.getId() && (s = ex),
                (0, r.jsx)(l.yRy, {
                    targetElementRef: eE,
                    position: "right",
                    renderPopout: s,
                    shouldShow: ea && !eb,
                    onRequestClose: eS,
                    spacing: 0,
                    children: () =>
                        (0, r.jsx)(
                            A.ZP,
                            G(k({}, n), {
                                ref: eE,
                                onMouseDown: e.onMouseDown,
                                onKeyDown: e.onKeyDown,
                                handleHoverHangStatus: eC,
                                handleHoverIcons: eR,
                            }),
                        ),
                })
            );
        },
        ek = (0, r.jsx)("div", {
            className: M.draggable,
            "data-dnd-name": j.name,
            onMouseEnter: eu ? void 0 : eA,
            onMouseLeave: eu ? void 0 : eS,
            children: (0, r.jsx)(S.Z, {
                clickTrap:
                    (null == _ ? void 0 : _.id) === (null == (t = P.default.getCurrentUser()) ? void 0 : t.id) && eb,
                targetElementRef: eE,
                user: _,
                guildId: j.guild_id,
                channelId: j.id,
                newAnalyticsLocations: [h.Z.VOICE_USER],
                shouldShow: eb,
                onRequestClose: () => ey(!1),
                children: (e) => ej(e),
            }),
        });
    return $ ? J(ek) : ek;
}
let Y = (0, _.$)(H);
