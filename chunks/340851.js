n.d(t, {
    Ay: () => F,
    LR: () => U,
    aI: () => V,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(397927),
    c = n(367513),
    u = n(442433),
    d = n(956793),
    f = n(401843),
    p = n(296216),
    h = n(323073),
    b = n(793574),
    g = n(480890),
    m = n(643501),
    A = n(916641),
    y = n(652896),
    O = n(279250),
    j = n(346846),
    v = n(142524),
    x = n(958140),
    E = n(721931),
    _ = n(766319),
    C = n(342296),
    S = n(481947),
    I = n(961350),
    N = n(71393),
    T = n(576705),
    P = n(287809),
    w = n(977997),
    R = n(544105),
    D = n(502075),
    M = n(985018),
    L = n(861379);
function G(e) {
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
        className: L.BN,
        children: (0, r.jsxs)(o.Text, {
            color: "text-muted",
            variant: "text-sm/medium",
            children: ["+", t],
        }),
    });
}
function V(e) {
    let { numAudience: t, collapsed: n } = e,
        l = n ? t : M.intl.formatToPlainString(M.t["+v2pN2"], { count: t });
    return (0, r.jsxs)("div", {
        className: a()(L.yJ, { [L.Nr]: n }),
        children: [
            (0, r.jsx)("div", {
                className: L.$L,
                children: (0, r.jsx)(o.LoC, {
                    size: "md",
                    color: "currentColor",
                    className: L.wG,
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
let F = (0, p.J)(function (e) {
    var t;
    let {
            collapsed: i,
            user: p,
            channel: U,
            mute: V,
            localMute: F,
            localVideoDisabled: H,
            deaf: B,
            video: K,
            embeddedApplication: W,
            serverMute: z,
            serverDeaf: Y,
            nick: q,
            ringing: X,
            speaking: J,
            voiceDb: Q,
            latched: Z,
            disconnected: $,
            connectUserDragSource: ee,
            canDrag: et,
            isStreaming: en,
            isWatching: er,
            isGuest: el,
            priority: ei,
            showPreview: ea,
            hidePreview: es,
            shouldShowHoverPopout: eo,
            previewIsOpen: ec,
            otherClientSessionType: eu,
            voicePlatform: ed,
            isSelfOnOtherClient: ef = !1,
            tabIndex: ep,
            location: eh,
            isSelf: eb,
            application: eg,
            hangStatusActivity: em,
            requestToStreamActivity: eA,
            showHangStatus: ey,
        } = e,
        eO = l.useRef(null),
        [ej, ev] = l.useState(!1),
        ex = l.useRef(null),
        [eE, e_] = l.useState(!1),
        [eC, eS] = l.useState(!1),
        [eI, eN] = l.useState(!1),
        [eT, eP] = l.useState(!1),
        ew = eC || eT || eI,
        eR = eE || ew,
        eD = (null == eA ? void 0 : eA.session_id) != null,
        eM = () => {
            ev(!ej);
        },
        eL = (e, t) => {
            let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
            null != t && n.has(t) && (eI && eN(!1), eC && eS(!1)), eG();
        },
        eG = () => {
            (en || ey || eD) && (null == es || es(p.id));
        },
        ek = (e) => {
            e
                ? (ex.current = setTimeout(() => {
                      e_(!0);
                  }, 150 * !!ec))
                : clearTimeout(ex.current);
        };
    l.useEffect(() => () => clearTimeout(ex.current), []);
    let eU = (e) => {
            e && e_(!1);
        },
        eV = () => {
            if (!(en && (0, O.eo)(U, w.A, N.A, T.A, m.default)[0])) return;
            let e = {
                streamType: D.U4.GUILD,
                ownerId: p.id,
                channelId: U.id,
                guildId: U.guild_id,
            };
            I.default.getId() !== p.id && d.default.selectVoiceChannel(U.id),
                er ? ((0, j.A)(e), c.A.selectParticipant(e.channelId, (0, y._z)(e))) : (0, f.Nl)(e),
                null == es || es(p.id);
        },
        eF = (e) => {
            (0, u.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("97262"),
                    n.e("29534"),
                    n.e("55296"),
                    n.e("84841"),
                    n.e("61641"),
                ]).then(n.bind(n, 107632));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        k(G({}, t), {
                            user: p,
                            guildId: U.guild_id,
                            channel: U,
                            showMediaItems: !0,
                            showStageChannelItems: U.isGuildStageVoice(),
                            onInteraction: (0, g.s)("GuildChannelUserContextMenu", b.A.VOICE_USER, {
                                targetUserId: p.id,
                            }),
                        }),
                    );
            });
        },
        eH = (e) =>
            eb
                ? (0, r.jsx)(
                      x.h,
                      k(G({}, e), {
                          channel: U,
                          setIsHangStatusInputFocused: eS,
                          setIsEmojiPickerOpen: eP,
                      }),
                  )
                : null != em
                  ? (0, r.jsx)(
                        E.E,
                        k(G({}, e), {
                            hangStatusActivity: em,
                            channel: U,
                            userId: p.id,
                        }),
                    )
                  : null,
        eB = () =>
            (0, r.jsx)(_.A, {
                userId: p.id,
                channel: U,
            }),
        eK = () =>
            (0, h.r9)() && (0, h.UK)(U.id)
                ? null
                : (0, r.jsx)(v.A, {
                      user: p,
                      channel: U,
                      onWatch: eV,
                      previewIsOpen: ec,
                      location: eh,
                  }),
        eW = (0, r.jsx)("div", {
            className: L.kZ,
            "data-dnd-name": U.name,
            onMouseEnter: ef
                ? void 0
                : () => {
                      (en || ey || eD) && !ej && (null == ea || ea(p.id));
                  },
            onMouseLeave: ef ? void 0 : eG,
            children: (0, r.jsx)(C.A, {
                clickTrap:
                    (null == p ? void 0 : p.id) === (null == (t = P.default.getCurrentUser()) ? void 0 : t.id) && ej,
                targetElementRef: eO,
                user: p,
                guildId: U.guild_id,
                channelId: U.id,
                newAnalyticsLocations: [b.A.VOICE_USER],
                shouldShow: ej,
                onRequestClose: () => ev(!1),
                children: (e) =>
                    ((e) => {
                        let t = R.hv.has(null != eu ? eu : ""),
                            n = {
                                user: p,
                                speaking: J,
                                voiceDb: Q,
                                latched: Z,
                                disconnected: $,
                                mute: V,
                                localMute: F,
                                localVideoDisabled: H,
                                isStreaming: en,
                                isGuest: el,
                                video: K,
                                priority: ei,
                                ringing: X,
                                deaf: B,
                                nick: q,
                                collapsed: i,
                                overlap: i,
                                serverMute: z,
                                serverDeaf: Y,
                                tabIndex: ep,
                                otherClientSessionType: eu,
                                voicePlatform: ed,
                                embeddedApplication: W,
                                avatarContainerClass: a()({ [L.dj]: !0 }),
                                disabled: ef && !t,
                                selected: ej,
                                onClick: t ? void 0 : eM,
                                onDoubleClick: eV,
                                onContextMenu: eF,
                                guildId: U.guild_id,
                                isSelf: eb,
                                application: eg,
                                channelId: U.id,
                                hangStatusActivity: em,
                                showHangStatus: ey,
                            };
                        if (ef) {
                            var l;
                            return (0, r.jsx)(s.m, {
                                text: null != (l = (0, A.A)(eu)) ? l : M.intl.string(M.t.IyYqqY),
                                children: (0, r.jsx)(S.Ay, G({ ref: eO }, n)),
                            });
                        }
                        let c = () => null;
                        return (
                            ey && eR
                                ? (c = eH)
                                : en
                                  ? (c = eK)
                                  : eD && p.id !== I.default.getId()
                                    ? (c = eB)
                                    : ey && (c = eH),
                            (0, r.jsx)(o.YNO, {
                                targetElementRef: eO,
                                position: "right",
                                renderPopout: c,
                                shouldShow: (eo || (ey && ew)) && !ej,
                                onRequestClose: eL,
                                align: ey && eR && !eb ? "center" : void 0,
                                spacing: ey && eR ? 8 : 0,
                                children: () =>
                                    (0, r.jsx)(
                                        S.Ay,
                                        k(G({}, n), {
                                            ref: eO,
                                            onMouseDown: e.onMouseDown,
                                            onKeyDown: e.onKeyDown,
                                            handleHoverHangStatus: ek,
                                            handleHoverIcons: eU,
                                            onAddHangStatusClicked: () => eN(!0),
                                        }),
                                    ),
                            })
                        );
                    })(e),
            }),
        });
    return et ? ee(eW) : eW;
});
