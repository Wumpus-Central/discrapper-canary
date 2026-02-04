n.d(t, {
    Ay: () => W,
    LR: () => Y,
    aI: () => K,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(990078),
    c = n(397927),
    u = n(367513),
    d = n(442433),
    p = n(956793),
    h = n(401843),
    g = n(296216),
    f = n(323073),
    m = n(793574),
    b = n(480890),
    A = n(643501),
    y = n(916641),
    O = n(652896),
    j = n(279250),
    _ = n(346846),
    x = n(142524),
    v = n(958140),
    E = n(721931),
    C = n(766319),
    S = n(342296),
    I = n(481947),
    N = n(430363),
    T = n(823854),
    P = n(961350),
    w = n(71393),
    R = n(576705),
    D = n(287809),
    L = n(977997),
    M = n(338234),
    G = n(376696),
    k = n(544105),
    U = n(502075),
    V = n(985018),
    B = n(861379);

function H(e) {
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

function F(e, t) {
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

function Y(e) {
    let { numUsers: t } = e;
    return (0, r.jsx)("div", {
        className: B.BN,
        children: (0, r.jsxs)(c.Text, {
            color: "text-muted",
            variant: "text-sm/medium",
            children: ["+", t],
        }),
    });
}

function K(e) {
    let { numAudience: t, collapsed: n } = e,
        l = n
            ? t
            : V.intl.formatToPlainString(V.t["+v2pN2"], {
                  count: t,
              });
    return (0, r.jsxs)("div", {
        className: s()(B.yJ, {
            [B.Nr]: n,
        }),
        children: [
            (0, r.jsx)("div", {
                className: B.$L,
                children: (0, r.jsx)(c.LoC, {
                    size: "md",
                    color: "currentColor",
                    className: B.wG,
                }),
            }),
            (0, r.jsx)(c.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: l,
            }),
        ],
    });
}
let W = (0, g.J)(function (e) {
    var t;
    let {
            collapsed: i,
            user: g,
            channel: Y,
            mute: K,
            localMute: W,
            localVideoDisabled: z,
            deaf: X,
            video: q,
            embeddedApplication: J,
            serverMute: Q,
            serverDeaf: Z,
            nick: $,
            ringing: ee,
            speaking: et,
            latched: en,
            disconnected: er,
            connectUserDragSource: el,
            canDrag: ei,
            isStreaming: es,
            isWatching: ea,
            isGuest: eo,
            priority: ec,
            showPreview: eu,
            hidePreview: ed,
            shouldShowHoverPopout: ep,
            previewIsOpen: eh,
            otherClientSessionType: eg,
            voicePlatform: ef,
            isSelfOnOtherClient: em = !1,
            tabIndex: eb,
            location: eA,
            isSelf: ey,
            application: eO,
            hangStatusActivity: ej,
            requestToStreamActivity: e_,
            showHangStatus: ex,
        } = e,
        { enableUserHoverActivities: ev } = (0, M.fC)({
            guildId: Y.guild_id,
            location: "VoiceUser",
        }),
        eE = l.useRef(null),
        [eC, eS] = l.useState(!1),
        eI = l.useRef(null),
        [eN, eT] = l.useState(!1),
        [eP, ew] = l.useState(!1),
        [eR, eD] = l.useState(!1),
        [eL, eM] = l.useState(!1),
        eG = eP || eL || eR,
        ek = eN || eG,
        eU = (null == e_ ? void 0 : e_.session_id) != null,
        eV = (0, a.bG)([T.A], () => T.A.hasVoiceDareForUserId(g.id), [g.id]),
        eB = (0, N.Uk)("VoiceUser") && eV,
        eH = () => {
            eS(!eC);
        },
        eF = (e, t) => {
            let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
            null != t && n.has(t) && (eR && eD(!1), eP && ew(!1)), eY();
        },
        eY = () => {
            null == ed || ed(g.id);
        },
        eK = (e) => {
            (!ev || ey) &&
                (e
                    ? (eI.current = setTimeout(() => {
                          eT(!0);
                      }, 150 * !!eh))
                    : clearTimeout(eI.current));
        };
    l.useEffect(() => () => clearTimeout(eI.current), []);
    let eW = (e) => {
            e && eT(!1);
        },
        ez = () => {
            if (!(es && (0, j.eo)(Y, L.A, w.A, R.A, A.default)[0])) return;
            let e = {
                streamType: U.U4.GUILD,
                ownerId: g.id,
                channelId: Y.id,
                guildId: Y.guild_id,
            };
            P.default.getId() !== g.id && p.default.selectVoiceChannel(Y.id),
                ea ? ((0, _.A)(e), u.A.selectParticipant(e.channelId, (0, O._z)(e))) : (0, h.Nl)(e),
                null == ed || ed(g.id);
        },
        eX = (e) => {
            (0, d.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("97262"),
                    n.e("29534"),
                    n.e("48469"),
                    n.e("84841"),
                    n.e("52458"),
                ]).then(n.bind(n, 107632));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        F(H({}, t), {
                            user: g,
                            guildId: Y.guild_id,
                            channel: Y,
                            showMediaItems: !0,
                            showStageChannelItems: Y.isGuildStageVoice(),
                            onInteraction: (0, b.s)("GuildChannelUserContextMenu", m.A.VOICE_USER, {
                                targetUserId: g.id,
                            }),
                        }),
                    );
            });
        },
        eq = (e) =>
            ey
                ? (0, r.jsx)(
                      v.h,
                      F(H({}, e), {
                          channel: Y,
                          setIsHangStatusInputFocused: ew,
                          setIsEmojiPickerOpen: eM,
                      }),
                  )
                : null != ej
                  ? (0, r.jsx)(
                        E.E,
                        F(H({}, e), {
                            hangStatusActivity: ej,
                            channel: Y,
                            userId: g.id,
                        }),
                    )
                  : null,
        eJ = () =>
            (0, r.jsx)(C.A, {
                userId: g.id,
                channel: Y,
            }),
        eQ = () =>
            (0, f.r9)() && (0, f.UK)(Y.id)
                ? null
                : (0, r.jsx)(x.A, {
                      user: g,
                      channel: Y,
                      onWatch: ez,
                      previewIsOpen: eh,
                      location: eA,
                  }),
        eZ = (0, r.jsx)("div", {
            className: B.kZ,
            "data-dnd-name": Y.name,
            onMouseEnter: em
                ? void 0
                : () => {
                      ev
                          ? (ey && ex && !eC && !ek && eT(!0), eC || null == eu || eu(g.id))
                          : (es || ex || eU || eB) && !eC && (null == eu || eu(g.id));
                  },
            onMouseLeave: em ? void 0 : eY,
            children: (0, r.jsx)(S.A, {
                clickTrap:
                    (null == g ? void 0 : g.id) === (null == (t = D.default.getCurrentUser()) ? void 0 : t.id) && eC,
                targetElementRef: eE,
                user: g,
                guildId: Y.guild_id,
                channelId: Y.id,
                newAnalyticsLocations: [m.A.VOICE_USER],
                shouldShow: eC,
                onRequestClose: () => eS(!1),
                children: (e) =>
                    ((e) => {
                        let t = k.hv.has(null != eg ? eg : ""),
                            n = {
                                user: g,
                                speaking: et,
                                latched: en,
                                disconnected: er,
                                mute: K,
                                localMute: W,
                                localVideoDisabled: z,
                                isStreaming: es,
                                isGuest: eo,
                                video: q,
                                priority: ec,
                                ringing: ee,
                                deaf: X,
                                nick: $,
                                collapsed: i,
                                overlap: i,
                                serverMute: Q,
                                serverDeaf: Z,
                                tabIndex: eb,
                                otherClientSessionType: eg,
                                voicePlatform: ef,
                                embeddedApplication: J,
                                avatarContainerClass: s()({
                                    [B.dj]: !0,
                                }),
                                disabled: em && !t,
                                selected: eC,
                                onClick: t ? void 0 : eH,
                                onDoubleClick: ez,
                                onContextMenu: eX,
                                guildId: Y.guild_id,
                                isSelf: ey,
                                application: eO,
                                channelId: Y.id,
                                hangStatusActivity: ej,
                                showHangStatus: ex,
                            };
                        if (em) {
                            var l;
                            return (0, r.jsx)(o.m, {
                                text: null != (l = (0, y.A)(eg)) ? l : V.intl.string(V.t.IyYqqY),
                                children: (0, r.jsx)(
                                    I.Ay,
                                    H(
                                        {
                                            ref: eE,
                                        },
                                        n,
                                    ),
                                ),
                            });
                        }
                        let a = () => null;
                        return (
                            ex && ek && (!ev || ey)
                                ? (a = eq)
                                : ev
                                  ? (a =
                                        ey && ex
                                            ? eq
                                            : () =>
                                                  (0, r.jsx)(G.A, {
                                                      channel: Y,
                                                      user: g,
                                                      onAction: eY,
                                                      onWatchStream: es ? ez : void 0,
                                                      hangStatusActivity: ej,
                                                  }))
                                  : es
                                    ? (a = eQ)
                                    : eU && g.id !== P.default.getId()
                                      ? (a = eJ)
                                      : ex && (a = eq),
                            (0, r.jsx)(c.YNO, {
                                targetElementRef: eE,
                                position: "right",
                                renderPopout: a,
                                shouldShow: (ep || (ex && eG && (!ev || ey))) && !eC,
                                onRequestClose: eF,
                                align: ex && ek && !ey && !ev ? "center" : void 0,
                                spacing: ex && ek && (!ev || ey) ? 8 : 0,
                                children: () =>
                                    (0, r.jsx)(
                                        I.Ay,
                                        F(H({}, n), {
                                            ref: eE,
                                            onMouseDown: e.onMouseDown,
                                            onKeyDown: e.onKeyDown,
                                            handleHoverHangStatus: eK,
                                            handleHoverIcons: eW,
                                            onAddHangStatusClicked: () => eD(!0),
                                        }),
                                    ),
                            })
                        );
                    })(e),
            }),
        });
    return ei ? el(eZ) : eZ;
});
