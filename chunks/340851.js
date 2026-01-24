n.d(t, {
    Ay: () => V,
    LR: () => U,
    aI: () => B,
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
    R = n(544105),
    D = n(502075),
    M = n(985018),
    L = n(861379);

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

function G(e, t) {
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

function B(e) {
    let { numAudience: t, collapsed: n } = e,
        l = n
            ? t
            : M.intl.formatToPlainString(M.t["+v2pN2"], {
                  count: t,
              });
    return (0, r.jsxs)("div", {
        className: s()(L.yJ, {
            [L.Nr]: n,
        }),
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
let V = (0, h.J)(function (e) {
    var t;
    let {
            collapsed: i,
            user: h,
            channel: U,
            mute: B,
            localMute: V,
            localVideoDisabled: F,
            deaf: H,
            video: K,
            embeddedApplication: W,
            serverMute: z,
            serverDeaf: Y,
            nick: q,
            ringing: X,
            speaking: J,
            latched: Q,
            disconnected: Z,
            connectUserDragSource: $,
            canDrag: ee,
            isStreaming: et,
            isWatching: en,
            isGuest: er,
            priority: el,
            showPreview: ei,
            hidePreview: es,
            shouldShowHoverPopout: ea,
            previewIsOpen: eo,
            otherClientSessionType: ec,
            voicePlatform: eu,
            isSelfOnOtherClient: ed = !1,
            tabIndex: ep,
            location: eh,
            isSelf: ef,
            application: eg,
            hangStatusActivity: em,
            requestToStreamActivity: eb,
            showHangStatus: eA,
        } = e,
        ey = l.useRef(null),
        [e_, eO] = l.useState(!1),
        ej = l.useRef(null),
        [ev, ex] = l.useState(!1),
        [eE, eC] = l.useState(!1),
        [eS, eI] = l.useState(!1),
        [eN, eT] = l.useState(!1),
        eP = eE || eN || eS,
        ew = ev || eP,
        eR = (null == eb ? void 0 : eb.session_id) != null,
        eD = () => {
            eO(!e_);
        },
        eM = (e, t) => {
            let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
            null != t && n.has(t) && (eS && eI(!1), eE && eC(!1)), eL();
        },
        eL = () => {
            (et || eA || eR) && (null == es || es(h.id));
        },
        ek = (e) => {
            e
                ? (ej.current = setTimeout(() => {
                      ex(!0);
                  }, 150 * !!eo))
                : clearTimeout(ej.current);
        };
    l.useEffect(() => () => clearTimeout(ej.current), []);
    let eG = (e) => {
            e && ex(!1);
        },
        eU = () => {
            if (!(et && (0, _.eo)(U, w.A, N.A, T.A, b.default)[0])) return;
            let e = {
                streamType: D.U4.GUILD,
                ownerId: h.id,
                channelId: U.id,
                guildId: U.guild_id,
            };
            I.default.getId() !== h.id && d.default.selectVoiceChannel(U.id),
                en ? ((0, O.A)(e), c.A.selectParticipant(e.channelId, (0, y._z)(e))) : (0, p.Nl)(e),
                null == es || es(h.id);
        },
        eB = (e) => {
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
                        G(k({}, t), {
                            user: h,
                            guildId: U.guild_id,
                            channel: U,
                            showMediaItems: !0,
                            showStageChannelItems: U.isGuildStageVoice(),
                            onInteraction: (0, m.s)("GuildChannelUserContextMenu", g.A.VOICE_USER, {
                                targetUserId: h.id,
                            }),
                        }),
                    );
            });
        },
        eV = (e) =>
            ef
                ? (0, r.jsx)(
                      v.h,
                      G(k({}, e), {
                          channel: U,
                          setIsHangStatusInputFocused: eC,
                          setIsEmojiPickerOpen: eT,
                      }),
                  )
                : null != em
                  ? (0, r.jsx)(
                        x.E,
                        G(k({}, e), {
                            hangStatusActivity: em,
                            channel: U,
                            userId: h.id,
                        }),
                    )
                  : null,
        eF = () =>
            (0, r.jsx)(E.A, {
                userId: h.id,
                channel: U,
            }),
        eH = () =>
            (0, f.r9)() && (0, f.UK)(U.id)
                ? null
                : (0, r.jsx)(j.A, {
                      user: h,
                      channel: U,
                      onWatch: eU,
                      previewIsOpen: eo,
                      location: eh,
                  }),
        eK = (0, r.jsx)("div", {
            className: L.kZ,
            "data-dnd-name": U.name,
            onMouseEnter: ed
                ? void 0
                : () => {
                      (et || eA || eR) && !e_ && (null == ei || ei(h.id));
                  },
            onMouseLeave: ed ? void 0 : eL,
            children: (0, r.jsx)(C.A, {
                clickTrap:
                    (null == h ? void 0 : h.id) === (null == (t = P.default.getCurrentUser()) ? void 0 : t.id) && e_,
                targetElementRef: ey,
                user: h,
                guildId: U.guild_id,
                channelId: U.id,
                newAnalyticsLocations: [g.A.VOICE_USER],
                shouldShow: e_,
                onRequestClose: () => eO(!1),
                children: (e) =>
                    ((e) => {
                        let t = R.hv.has(null != ec ? ec : ""),
                            n = {
                                user: h,
                                speaking: J,
                                latched: Q,
                                disconnected: Z,
                                mute: B,
                                localMute: V,
                                localVideoDisabled: F,
                                isStreaming: et,
                                isGuest: er,
                                video: K,
                                priority: el,
                                ringing: X,
                                deaf: H,
                                nick: q,
                                collapsed: i,
                                overlap: i,
                                serverMute: z,
                                serverDeaf: Y,
                                tabIndex: ep,
                                otherClientSessionType: ec,
                                voicePlatform: eu,
                                embeddedApplication: W,
                                avatarContainerClass: s()({
                                    [L.dj]: !0,
                                }),
                                disabled: ed && !t,
                                selected: e_,
                                onClick: t ? void 0 : eD,
                                onDoubleClick: eU,
                                onContextMenu: eB,
                                guildId: U.guild_id,
                                isSelf: ef,
                                application: eg,
                                channelId: U.id,
                                hangStatusActivity: em,
                                showHangStatus: eA,
                            };
                        if (ed) {
                            var l;
                            return (0, r.jsx)(a.m, {
                                text: null != (l = (0, A.A)(ec)) ? l : M.intl.string(M.t.IyYqqY),
                                children: (0, r.jsx)(
                                    S.Ay,
                                    k(
                                        {
                                            ref: ey,
                                        },
                                        n,
                                    ),
                                ),
                            });
                        }
                        let c = () => null;
                        return (
                            eA && ew
                                ? (c = eV)
                                : et
                                  ? (c = eH)
                                  : eR && h.id !== I.default.getId()
                                    ? (c = eF)
                                    : eA && (c = eV),
                            (0, r.jsx)(o.YNO, {
                                targetElementRef: ey,
                                position: "right",
                                renderPopout: c,
                                shouldShow: (ea || (eA && eP)) && !e_,
                                onRequestClose: eM,
                                align: eA && ew && !ef ? "center" : void 0,
                                spacing: eA && ew ? 8 : 0,
                                children: () =>
                                    (0, r.jsx)(
                                        S.Ay,
                                        G(k({}, n), {
                                            ref: ey,
                                            onMouseDown: e.onMouseDown,
                                            onKeyDown: e.onKeyDown,
                                            handleHoverHangStatus: ek,
                                            handleHoverIcons: eG,
                                            onAddHangStatusClicked: () => eI(!0),
                                        }),
                                    ),
                            })
                        );
                    })(e),
            }),
        });
    return ee ? $(eK) : eK;
});
