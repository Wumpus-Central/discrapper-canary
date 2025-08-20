n.d(t, { Z: () => Q });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(394821),
    c = n(841784),
    u = n(833664),
    d = n(420660),
    f = n(100527),
    _ = n(906732),
    p = n(379357),
    h = n(264832),
    m = n(358696),
    g = n(649700),
    E = n(313201),
    b = n(833858),
    y = n(223135),
    O = n(769654),
    v = n(750154),
    I = n(960870),
    T = n(139793),
    S = n(994746),
    A = n(273284),
    C = n(232174),
    N = n(510659),
    R = n(287954),
    P = n(660579),
    w = n(652853),
    D = n(64621),
    x = n(979038),
    L = n(448980),
    j = n(576759),
    M = n(336383),
    k = n(194811),
    U = n(373826),
    G = n(668700),
    B = n(262210),
    Z = n(386019),
    V = n(881530),
    F = n(228168),
    H = n(981631),
    Y = n(701488),
    W = n(671955),
    K = n(388032),
    z = n(704543);
function q(e, t, n) {
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
function X(e) {
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
                q(e, t, n[t]);
            });
    }
    return e;
}
function Q(e) {
    var t;
    let {
            user: n,
            currentUser: a,
            activity: q,
            application: Q,
            voiceGuild: J,
            voiceChannel: $,
            profileGuildId: ee,
            className: et,
            onClose: en,
        } = e,
        er = (0, E.Dt)(),
        ei = (0, E.Dt)(),
        ea = i.useRef(null),
        { analyticsLocations: eo } = (0, _.ZP)(f.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: es } = (0, w.z)(),
        { interactionSource: el, interactionSourceId: ec } = (0, N.Xo)(),
        eu = (0, g.Z)({
            activity: q,
            user: n,
        }),
        ed = (0, I.Z)({
            display: "live",
            user: n,
            activity: q,
            entry: eu,
            analyticsLocations: eo,
        }),
        ef = (0, T.Z)({
            userId: n.id,
            onAction: ed,
        }),
        e_ = (0, S.Z)(q),
        ep = null != e_.text && "" !== e_.text,
        { largeImage: eh, smallImage: em } = (0, p.FO)(q, Q),
        eg = (0, V.Z)({
            location: "UserProfileActivityCardWithInteractionToolbar",
            user: n,
            currentUser: a,
            activity: q,
            application: Q,
            entry: eu,
            onClose: en,
        }),
        eE = () => {
            let e = (0, l.Z)(q) ? "crunchyroll" : "default",
                t = es === W.l.MODAL_V2 ? m.J.SIZE_100 : m.J.SIZE_60;
            return q.type === H.IIU.HANG_STATUS
                ? (0, r.jsx)(y.Z, {
                      hangStatusActivity: q,
                      className: o()(z.hangStatusIcon, z.image, { [z.small]: es !== W.l.MODAL_V2 }),
                  })
                : null == eg
                  ? (0, r.jsx)(m.E, {
                        image: eh,
                        smallImage: em,
                        size: t,
                        aspectRatio: e,
                        className: z.image,
                    })
                  : (0, r.jsx)(m.E, {
                        image: eh,
                        smallImage: em,
                        size: t,
                        className: z.clickableImage,
                        aspectRatio: e,
                        onClick: (e) => {
                            e.stopPropagation(), ed({ action: "PRESS_IMAGE" }), eg(e);
                        },
                    });
        },
        eb = () =>
            q.type === H.IIU.HANG_STATUS
                ? (0, r.jsx)(U.f, {
                      variant: "heading-sm/semibold",
                      text: (0, b.O8)(q),
                      id: er,
                  })
                : (0, d.Z)(q) && null != $
                  ? (0, r.jsxs)("div", {
                        className: z.voiceChannelText,
                        children: [
                            (0, r.jsx)(s.gj8, {
                                size: "xxs",
                                color: s.TVs.colors.TEXT_DEFAULT,
                                className: z.voiceIcon,
                            }),
                            (0, r.jsx)(U.f, {
                                variant: "heading-sm/semibold",
                                text: $.name,
                                id: er,
                            }),
                        ],
                    })
                  : (0, u.Z)(q) || (0, v.dS)(q)
                    ? (0, r.jsx)(U.f, {
                          variant: "heading-sm/semibold",
                          text: q.name,
                          id: er,
                      })
                    : null != q.details
                      ? (0, r.jsx)(h._, {
                            href: q.details_url,
                            children: (0, r.jsx)(U.f, {
                                variant: "heading-sm/semibold",
                                text: q.details,
                                id: er,
                            }),
                        })
                      : (0, r.jsx)(U.f, {
                            variant: "heading-sm/semibold",
                            text: q.name,
                            id: er,
                        }),
        ey = () => {
            if (q.type === H.IIU.HANG_STATUS) return null;
            if ((0, d.Z)(q) && null != J)
                return (0, r.jsx)(U.Z, {
                    variant: "text-xs/normal",
                    text: K.intl.formatToPlainString(K.t["hq/Qzc"], { guildName: J.name }),
                    onClick: () => {
                        (0, O.X)(J.id), ed({ action: "OPEN_VOICE_GUILD" }), null == en || en();
                    },
                });
            if ((0, u.Z)(q))
                return (0, r.jsx)(h._, {
                    href: q.details_url,
                    children: (0, r.jsx)(U.Z, {
                        variant: "text-xs/normal",
                        text: q.details,
                    }),
                });
            if ((0, v.dS)(q)) {
                var e;
                return (0, r.jsx)(U.Z, {
                    variant: "text-xs/normal",
                    text: null == q || null == (e = q.assets) ? void 0 : e.small_text,
                });
            }
            return (0, r.jsx)(h._, {
                href: q.state_url,
                children: (0, r.jsx)(U.Z, {
                    variant: "text-xs/normal",
                    text: q.state,
                }),
            });
        },
        eO = () => {
            var e, t, n, i, a, o, s, l;
            if (q.type === H.IIU.WATCHING) return null;
            if ((0, u.Z)(q)) return ev();
            if (
                (0, v.dS)(q) &&
                (null == (e = q.party) ? void 0 : e.size) != null &&
                (null == (t = q.party) ? void 0 : t.size.length) >= 2
            ) {
                let e = K.intl.formatToPlainString(K.t["JC/3x8"], {
                    numSpeakers: null == (i = q.party) ? void 0 : i.size[0],
                    numListeners:
                        (null == (a = q.party) ? void 0 : a.size[1]) - (null == (o = q.party) ? void 0 : o.size[0]),
                });
                return (0, r.jsx)(U.Z, {
                    variant: "text-xs/normal",
                    text: e,
                });
            }
            return (null == (n = q.assets) ? void 0 : n.large_text) != null
                ? (0, r.jsx)(h._, {
                      href: null == (s = q.assets) ? void 0 : s.large_url,
                      children: (0, r.jsx)(U.Z, {
                          text: null == (l = q.assets) ? void 0 : l.large_text,
                          variant: "text-xs/normal",
                      }),
                  })
                : null;
        },
        ev = () => {
            var e, t, n, i;
            return (null == (e = q.party) ? void 0 : e.size) == null && q.application_id === Y.Zc
                ? (0, r.jsxs)("div", {
                      className: z.gameState,
                      children: [
                          (0, r.jsx)(h._, {
                              href: q.state_url,
                              children: (0, r.jsx)(U.Z, {
                                  variant: "text-xs/normal",
                                  text: q.state,
                              }),
                          }),
                          (0, r.jsx)(U.Z, {
                              variant: "text-xs/normal",
                              text: K.intl.formatToPlainString(K.t["u//9Bw"], {
                                  count: "0",
                                  max: null != (i = null == Q ? void 0 : Q.getMaxParticipants()) ? i : 0,
                              }),
                          }),
                      ],
                  })
                : (0, c.Z)(q) &&
                    (null == (t = q.party) ? void 0 : t.size) != null &&
                    (null == (n = q.party) ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)("div", {
                        className: z.gameState,
                        children: [
                            (0, r.jsx)(h._, {
                                href: q.state_url,
                                children: (0, r.jsx)(U.Z, {
                                    variant: "text-xs/normal",
                                    text: q.state,
                                }),
                            }),
                            (0, r.jsx)(U.Z, {
                                variant: "text-xs/normal",
                                text:
                                    0 === q.party.size[1]
                                        ? K.intl.formatToPlainString(K.t.IM4J4e, { count: q.party.size[0] })
                                        : K.intl.formatToPlainString(K.t["u//9Bw"], {
                                              count: q.party.size[0],
                                              max: q.party.size[1],
                                          }),
                            }),
                        ],
                    })
                  : null == q.party
                    ? (0, r.jsx)(h._, {
                          href: q.state_url,
                          children: (0, r.jsx)(U.Z, {
                              variant: "text-xs/normal",
                              text: q.state,
                          }),
                      })
                    : null;
        },
        eI = () => {
            if (!(0, C.Z)(q)) return null;
            let { start: e, end: t } = q.timestamps;
            return (0, r.jsx)(B.Z, {
                start: e,
                end: t,
            });
        },
        eT = () =>
            null == eg
                ? (0, r.jsxs)("div", {
                      children: [eb(), ey(), eO()],
                  })
                : (0, r.jsxs)(s.P3F, {
                      className: z.clickableText,
                      onClick: (e) => {
                          e.stopPropagation(), ed({ action: "PRESS_TEXT" }), eg(e);
                      },
                      children: [eb(), ey(), eO()],
                  }),
        eS = () =>
            null == J || null == $
                ? null
                : (0, r.jsx)(G.Z, {
                      user: n,
                      guild: J,
                      channel: $,
                      onAction: ed,
                      onClose: en,
                  }),
        eA = () =>
            n.id === a.id
                ? null
                : (0, r.jsx)("div", {
                      className: z.actions,
                      children: (0, r.jsx)(x.Z, {
                          activity: q,
                          user: n,
                          onAction: ed,
                          onClose: en,
                          application: Q,
                      }),
                  });
    if (null === es) return null;
    let eC = null != (t = q.application_id) ? t : q.name,
        eN = el === F.n_.ACTIVITY && ec === eC;
    return (0, r.jsx)(_.Gt, {
        value: eo,
        children: (0, r.jsx)(D.Z, {
            targetElementRef: ea,
            sourceType: F.n_.ACTIVITY,
            user: n,
            children: (0, r.jsx)(R.Z, {
                user: n,
                guildId: ee,
                themeType: es,
                sourceId: eC,
                sourceDetails: null == eu ? (0, A.Z)(q) : null,
                entry: eu,
                onAction: ed,
                sourceType: F.n_.ACTIVITY,
                children: () =>
                    (0, r.jsx)(P.Z, {
                        ref: ea,
                        user: n,
                        className: z.toolbarContainer,
                        interactionSourceId: eC,
                        sourceType: F.n_.ACTIVITY,
                        onAction: ed,
                        renderMoreButtonPopout: (e) =>
                            (0, r.jsx)(Z.Z, {
                                display: "live",
                                user: n,
                                activity: q,
                                entry: eu,
                                onClose: en,
                                children: e,
                            }),
                        onShowToolbar: () => ed({ action: "HOVER_ACTIVITY_CARD" }),
                        children: (0, r.jsxs)(M.Z, {
                            ref: ef,
                            className: o()(et, { [z.hoisted]: eN }),
                            onAction: ed,
                            onClose: en,
                            "aria-labelledby": ep ? "".concat(ei, " ").concat(er) : er,
                            children: [
                                (0, r.jsx)(k.Z, X({ textId: ei }, e_)),
                                (0, r.jsxs)("div", {
                                    className: z.body,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: z.content,
                                            children: [
                                                !n.bot && eE(),
                                                (0, r.jsxs)("div", {
                                                    className: z.details,
                                                    children: [
                                                        eT(),
                                                        !n.bot &&
                                                            (0, r.jsx)(L.Z, {
                                                                user: n,
                                                                activity: q,
                                                                className: z.badges,
                                                            }),
                                                        eI(),
                                                        es === W.l.MODAL_V2 && eA(),
                                                    ],
                                                }),
                                                es === W.l.MODAL && eA(),
                                            ],
                                        }),
                                        eS(),
                                    ],
                                }),
                                es !== W.l.MODAL && es !== W.l.MODAL_V2 && eA(),
                                (0, r.jsx)(j.Z, {
                                    applicationId: null == Q ? void 0 : Q.id,
                                    onAction: ed,
                                    onClose: en,
                                }),
                            ],
                        }),
                    }),
            }),
        }),
    });
}
