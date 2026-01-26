n.d(t, {
    Ay: () => H,
    LR: () => V,
    aI: () => F,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(990078),
    o = n(397927),
    c = n(367513),
    u = n(442433),
    d = n(956793),
    p = n(401843),
    h = n(296216),
    f = n(323073),
    g = n(793574),
    m = n(480890),
    b = n(643501),
    A = n(916641),
    y = n(652896),
    _ = n(279250),
    O = n(346846),
    j = n(142524),
    v = n(958140),
    x = n(721931),
    E = n(766319),
    C = n(342296),
    S = n(481947),
    I = n(961350),
    N = n(71393),
    T = n(576705),
    P = n(287809),
    w = n(977997),
    R = n(338234),
    D = n(376696),
    M = n(544105),
    L = n(502075),
    k = n(985018),
    G = n(861379);

function U(e) {
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

function B(e, t) {
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

function V(e) {
    let { numUsers: t } = e;
    return (0, r.jsx)("div", {
        className: G.BN,
        children: (0, r.jsxs)(o.Text, {
            color: "text-muted",
            variant: "text-sm/medium",
            children: ["+", t],
        }),
    });
}

function F(e) {
    let { numAudience: t, collapsed: n } = e,
        l = n
            ? t
            : k.intl.formatToPlainString(k.t["+v2pN2"], {
                  count: t,
              });
    return (0, r.jsxs)("div", {
        className: s()(G.yJ, {
            [G.Nr]: n,
        }),
        children: [
            (0, r.jsx)("div", {
                className: G.$L,
                children: (0, r.jsx)(o.LoC, {
                    size: "md",
                    color: "currentColor",
                    className: G.wG,
                }),
            }),
            (0, r.jsx)(o.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: l,
            }),
        ],
    });
}
let H = (0, h.J)(function (e) {
    var t;
    let {
            collapsed: i,
            user: h,
            channel: V,
            mute: F,
            localMute: H,
            localVideoDisabled: K,
            deaf: W,
            video: z,
            embeddedApplication: Y,
            serverMute: q,
            serverDeaf: X,
            nick: J,
            ringing: Q,
            speaking: Z,
            latched: $,
            disconnected: ee,
            connectUserDragSource: et,
            canDrag: en,
            isStreaming: er,
            isWatching: el,
            isGuest: ei,
            priority: es,
            showPreview: ea,
            hidePreview: eo,
            shouldShowHoverPopout: ec,
            previewIsOpen: eu,
            otherClientSessionType: ed,
            voicePlatform: ep,
            isSelfOnOtherClient: eh = !1,
            tabIndex: ef,
            location: eg,
            isSelf: em,
            application: eb,
            hangStatusActivity: eA,
            requestToStreamActivity: ey,
            showHangStatus: e_,
        } = e,
        { enableUserHoverActivities: eO } = (0, R.fC)({
            guildId: V.guild_id,
            location: "VoiceUser",
        }),
        ej = l.useRef(null),
        [ev, ex] = l.useState(!1),
        eE = l.useRef(null),
        [eC, eS] = l.useState(!1),
        [eI, eN] = l.useState(!1),
        [eT, eP] = l.useState(!1),
        [ew, eR] = l.useState(!1),
        eD = eI || ew || eT,
        eM = eC || eD,
        eL = (null == ey ? void 0 : ey.session_id) != null,
        ek = () => {
            ex(!ev);
        },
        eG = (e, t) => {
            let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
            null != t && n.has(t) && (eT && eP(!1), eI && eN(!1)), eU();
        },
        eU = () => {
            null == eo || eo(h.id);
        },
        eB = (e) => {
            (!eO || em) &&
                (e
                    ? (eE.current = setTimeout(() => {
                          eS(!0);
                      }, 150 * !!eu))
                    : clearTimeout(eE.current));
        };
    l.useEffect(() => () => clearTimeout(eE.current), []);
    let eV = (e) => {
            e && eS(!1);
        },
        eF = () => {
            if (!(er && (0, _.eo)(V, w.A, N.A, T.A, b.default)[0])) return;
            let e = {
                streamType: L.U4.GUILD,
                ownerId: h.id,
                channelId: V.id,
                guildId: V.guild_id,
            };
            I.default.getId() !== h.id && d.default.selectVoiceChannel(V.id),
                el ? ((0, O.A)(e), c.A.selectParticipant(e.channelId, (0, y._z)(e))) : (0, p.Nl)(e),
                null == eo || eo(h.id);
        },
        eH = (e) => {
            (0, u.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("97262"),
                    n.e("29534"),
                    n.e("55296"),
                    n.e("84841"),
                    n.e("52458"),
                ]).then(n.bind(n, 107632));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        B(U({}, t), {
                            user: h,
                            guildId: V.guild_id,
                            channel: V,
                            showMediaItems: !0,
                            showStageChannelItems: V.isGuildStageVoice(),
                            onInteraction: (0, m.s)("GuildChannelUserContextMenu", g.A.VOICE_USER, {
                                targetUserId: h.id,
                            }),
                        }),
                    );
            });
        },
        eK = (e) =>
            em
                ? (0, r.jsx)(
                      v.h,
                      B(U({}, e), {
                          channel: V,
                          setIsHangStatusInputFocused: eN,
                          setIsEmojiPickerOpen: eR,
                      }),
                  )
                : null != eA
                  ? (0, r.jsx)(
                        x.E,
                        B(U({}, e), {
                            hangStatusActivity: eA,
                            channel: V,
                            userId: h.id,
                        }),
                    )
                  : null,
        eW = () =>
            (0, r.jsx)(E.A, {
                userId: h.id,
                channel: V,
            }),
        ez = () =>
            (0, f.r9)() && (0, f.UK)(V.id)
                ? null
                : (0, r.jsx)(j.A, {
                      user: h,
                      channel: V,
                      onWatch: eF,
                      previewIsOpen: eu,
                      location: eg,
                  }),
        eY = (0, r.jsx)("div", {
            className: G.kZ,
            "data-dnd-name": V.name,
            onMouseEnter: eh
                ? void 0
                : () => {
                      eO
                          ? (em && e_ && !ev && !eM && eS(!0), ev || null == ea || ea(h.id))
                          : (er || e_ || eL) && !ev && (null == ea || ea(h.id));
                  },
            onMouseLeave: eh ? void 0 : eU,
            children: (0, r.jsx)(C.A, {
                clickTrap:
                    (null == h ? void 0 : h.id) === (null == (t = P.default.getCurrentUser()) ? void 0 : t.id) && ev,
                targetElementRef: ej,
                user: h,
                guildId: V.guild_id,
                channelId: V.id,
                newAnalyticsLocations: [g.A.VOICE_USER],
                shouldShow: ev,
                onRequestClose: () => ex(!1),
                children: (e) =>
                    ((e) => {
                        let t = M.hv.has(null != ed ? ed : ""),
                            n = {
                                user: h,
                                speaking: Z,
                                latched: $,
                                disconnected: ee,
                                mute: F,
                                localMute: H,
                                localVideoDisabled: K,
                                isStreaming: er,
                                isGuest: ei,
                                video: z,
                                priority: es,
                                ringing: Q,
                                deaf: W,
                                nick: J,
                                collapsed: i,
                                overlap: i,
                                serverMute: q,
                                serverDeaf: X,
                                tabIndex: ef,
                                otherClientSessionType: ed,
                                voicePlatform: ep,
                                embeddedApplication: Y,
                                avatarContainerClass: s()({
                                    [G.dj]: !0,
                                }),
                                disabled: eh && !t,
                                selected: ev,
                                onClick: t ? void 0 : ek,
                                onDoubleClick: eF,
                                onContextMenu: eH,
                                guildId: V.guild_id,
                                isSelf: em,
                                application: eb,
                                channelId: V.id,
                                hangStatusActivity: eA,
                                showHangStatus: e_,
                            };
                        if (eh) {
                            var l;
                            return (0, r.jsx)(a.m, {
                                text: null != (l = (0, A.A)(ed)) ? l : k.intl.string(k.t.IyYqqY),
                                children: (0, r.jsx)(
                                    S.Ay,
                                    U(
                                        {
                                            ref: ej,
                                        },
                                        n,
                                    ),
                                ),
                            });
                        }
                        let c = () => null;
                        return (
                            e_ && eM && (!eO || em)
                                ? (c = eK)
                                : eO
                                  ? (c =
                                        em && e_
                                            ? eK
                                            : () =>
                                                  (0, r.jsx)(D.A, {
                                                      channel: V,
                                                      user: h,
                                                      onAction: eU,
                                                      onWatchStream: er ? eF : void 0,
                                                      previewIsOpen: eu,
                                                      hangStatusActivity: eA,
                                                  }))
                                  : er
                                    ? (c = ez)
                                    : eL && h.id !== I.default.getId()
                                      ? (c = eW)
                                      : e_ && (c = eK),
                            (0, r.jsx)(o.YNO, {
                                targetElementRef: ej,
                                position: "right",
                                renderPopout: c,
                                shouldShow: (ec || (e_ && eD && (!eO || em))) && !ev,
                                onRequestClose: eG,
                                align: e_ && eM && !em && !eO ? "center" : void 0,
                                spacing: e_ && eM && (!eO || em) ? 8 : 0,
                                children: () =>
                                    (0, r.jsx)(
                                        S.Ay,
                                        B(U({}, n), {
                                            ref: ej,
                                            onMouseDown: e.onMouseDown,
                                            onKeyDown: e.onKeyDown,
                                            handleHoverHangStatus: eB,
                                            handleHoverIcons: eV,
                                            onAddHangStatusClicked: () => eP(!0),
                                        }),
                                    ),
                            })
                        );
                    })(e),
            }),
        });
    return en ? et(eY) : eY;
});
