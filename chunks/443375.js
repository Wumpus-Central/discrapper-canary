n.d(t, { Z: () => X });
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
    N = n(232174),
    C = n(510659),
    R = n(287954),
    P = n(660579),
    w = n(652853),
    D = n(64621),
    L = n(979038),
    x = n(448980),
    M = n(336383),
    k = n(194811),
    j = n(373826),
    U = n(668700),
    G = n(262210),
    B = n(386019),
    V = n(881530),
    F = n(228168),
    Z = n(981631),
    H = n(701488),
    Y = n(671955),
    W = n(388032),
    K = n(704543);
function z(e, t, n) {
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
function q(e) {
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
                z(e, t, n[t]);
            });
    }
    return e;
}
function X(e) {
    var t;
    let {
            user: n,
            currentUser: a,
            activity: z,
            application: X,
            voiceGuild: Q,
            voiceChannel: J,
            profileGuildId: $,
            className: ee,
            onClose: et,
        } = e,
        en = (0, E.Dt)(),
        er = (0, E.Dt)(),
        ei = i.useRef(null),
        { analyticsLocations: ea } = (0, _.ZP)(f.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: eo } = (0, w.z)(),
        { interactionSource: es, interactionSourceId: el } = (0, C.Xo)(),
        ec = (0, g.Z)({
            activity: z,
            user: n,
        }),
        eu = (0, I.Z)({
            display: "live",
            user: n,
            activity: z,
            entry: ec,
            analyticsLocations: ea,
        }),
        ed = (0, T.Z)({
            userId: n.id,
            onAction: eu,
        }),
        ef = (0, S.Z)(z),
        e_ = null != ef.text && "" !== ef.text,
        { largeImage: ep, smallImage: eh } = (0, p.FO)(z, X),
        em = (0, V.Z)({
            location: "UserProfileActivityCardWithInteractionToolbar",
            user: n,
            currentUser: a,
            activity: z,
            application: X,
            entry: ec,
            onClose: et,
        }),
        eg = () => {
            let e = (0, l.Z)(z) ? "crunchyroll" : "default",
                t = eo === Y.l.MODAL_V2 ? m.J.SIZE_100 : m.J.SIZE_60;
            return z.type === Z.IIU.HANG_STATUS
                ? (0, r.jsx)(y.Z, {
                      hangStatusActivity: z,
                      className: o()(K.hangStatusIcon, K.image, { [K.small]: eo !== Y.l.MODAL_V2 }),
                  })
                : null == em
                  ? (0, r.jsx)(m.E, {
                        image: ep,
                        smallImage: eh,
                        size: t,
                        aspectRatio: e,
                        className: K.image,
                    })
                  : (0, r.jsx)(m.E, {
                        image: ep,
                        smallImage: eh,
                        size: t,
                        className: K.clickableImage,
                        aspectRatio: e,
                        onClick: (e) => {
                            e.stopPropagation(), eu({ action: "PRESS_IMAGE" }), em(e);
                        },
                    });
        },
        eE = () =>
            z.type === Z.IIU.HANG_STATUS
                ? (0, r.jsx)(j.f, {
                      variant: "heading-sm/semibold",
                      text: (0, b.O8)(z),
                      id: en,
                  })
                : (0, d.Z)(z) && null != J
                  ? (0, r.jsxs)("div", {
                        className: K.voiceChannelText,
                        children: [
                            (0, r.jsx)(s.gj8, {
                                size: "xxs",
                                color: s.TVs.colors.TEXT_DEFAULT,
                                className: K.voiceIcon,
                            }),
                            (0, r.jsx)(j.f, {
                                variant: "heading-sm/semibold",
                                text: J.name,
                                id: en,
                            }),
                        ],
                    })
                  : (0, u.Z)(z) || (0, v.dS)(z)
                    ? (0, r.jsx)(j.f, {
                          variant: "heading-sm/semibold",
                          text: z.name,
                          id: en,
                      })
                    : null != z.details
                      ? (0, r.jsx)(h._, {
                            href: z.details_url,
                            children: (0, r.jsx)(j.f, {
                                variant: "heading-sm/semibold",
                                text: z.details,
                                id: en,
                            }),
                        })
                      : (0, r.jsx)(j.f, {
                            variant: "heading-sm/semibold",
                            text: z.name,
                            id: en,
                        }),
        eb = () => {
            if (z.type === Z.IIU.HANG_STATUS) return null;
            if ((0, d.Z)(z) && null != Q)
                return (0, r.jsx)(j.Z, {
                    variant: "text-xs/normal",
                    text: W.intl.formatToPlainString(W.t["hq/Qzc"], { guildName: Q.name }),
                    onClick: () => {
                        (0, O.X)(Q.id), eu({ action: "OPEN_VOICE_GUILD" }), null == et || et();
                    },
                });
            if ((0, u.Z)(z))
                return (0, r.jsx)(h._, {
                    href: z.details_url,
                    children: (0, r.jsx)(j.Z, {
                        variant: "text-xs/normal",
                        text: z.details,
                    }),
                });
            if ((0, v.dS)(z)) {
                var e;
                return (0, r.jsx)(j.Z, {
                    variant: "text-xs/normal",
                    text: null == z || null == (e = z.assets) ? void 0 : e.small_text,
                });
            }
            return (0, r.jsx)(h._, {
                href: z.state_url,
                children: (0, r.jsx)(j.Z, {
                    variant: "text-xs/normal",
                    text: z.state,
                }),
            });
        },
        ey = () => {
            var e, t, n, i, a, o, s, l;
            if (z.type === Z.IIU.WATCHING) return null;
            if ((0, u.Z)(z)) return eO();
            if (
                (0, v.dS)(z) &&
                (null == (e = z.party) ? void 0 : e.size) != null &&
                (null == (t = z.party) ? void 0 : t.size.length) >= 2
            ) {
                let e = W.intl.formatToPlainString(W.t["JC/3x8"], {
                    numSpeakers: null == (i = z.party) ? void 0 : i.size[0],
                    numListeners:
                        (null == (a = z.party) ? void 0 : a.size[1]) - (null == (o = z.party) ? void 0 : o.size[0]),
                });
                return (0, r.jsx)(j.Z, {
                    variant: "text-xs/normal",
                    text: e,
                });
            }
            return (null == (n = z.assets) ? void 0 : n.large_text) != null
                ? (0, r.jsx)(h._, {
                      href: null == (s = z.assets) ? void 0 : s.large_url,
                      children: (0, r.jsx)(j.Z, {
                          text: null == (l = z.assets) ? void 0 : l.large_text,
                          variant: "text-xs/normal",
                      }),
                  })
                : null;
        },
        eO = () => {
            var e, t, n, i;
            return (null == (e = z.party) ? void 0 : e.size) == null && z.application_id === H.Zc
                ? (0, r.jsxs)("div", {
                      className: K.gameState,
                      children: [
                          (0, r.jsx)(h._, {
                              href: z.state_url,
                              children: (0, r.jsx)(j.Z, {
                                  variant: "text-xs/normal",
                                  text: z.state,
                              }),
                          }),
                          (0, r.jsx)(j.Z, {
                              variant: "text-xs/normal",
                              text: W.intl.formatToPlainString(W.t["u//9Bw"], {
                                  count: "0",
                                  max: null != (i = null == X ? void 0 : X.getMaxParticipants()) ? i : 0,
                              }),
                          }),
                      ],
                  })
                : (0, c.Z)(z) &&
                    (null == (t = z.party) ? void 0 : t.size) != null &&
                    (null == (n = z.party) ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)("div", {
                        className: K.gameState,
                        children: [
                            (0, r.jsx)(h._, {
                                href: z.state_url,
                                children: (0, r.jsx)(j.Z, {
                                    variant: "text-xs/normal",
                                    text: z.state,
                                }),
                            }),
                            (0, r.jsx)(j.Z, {
                                variant: "text-xs/normal",
                                text:
                                    0 === z.party.size[1]
                                        ? W.intl.formatToPlainString(W.t.IM4J4e, { count: z.party.size[0] })
                                        : W.intl.formatToPlainString(W.t["u//9Bw"], {
                                              count: z.party.size[0],
                                              max: z.party.size[1],
                                          }),
                            }),
                        ],
                    })
                  : null == z.party
                    ? (0, r.jsx)(h._, {
                          href: z.state_url,
                          children: (0, r.jsx)(j.Z, {
                              variant: "text-xs/normal",
                              text: z.state,
                          }),
                      })
                    : null;
        },
        ev = () => {
            if (!(0, N.Z)(z)) return null;
            let { start: e, end: t } = z.timestamps;
            return (0, r.jsx)(G.Z, {
                start: e,
                end: t,
            });
        },
        eI = () =>
            null == em
                ? (0, r.jsxs)("div", {
                      children: [eE(), eb(), ey()],
                  })
                : (0, r.jsxs)(s.P3F, {
                      className: K.clickableText,
                      onClick: (e) => {
                          e.stopPropagation(), eu({ action: "PRESS_TEXT" }), em(e);
                      },
                      children: [eE(), eb(), ey()],
                  }),
        eT = () =>
            null == Q || null == J
                ? null
                : (0, r.jsx)(U.Z, {
                      user: n,
                      guild: Q,
                      channel: J,
                      onAction: eu,
                      onClose: et,
                  }),
        eS = () =>
            n.id === a.id
                ? null
                : (0, r.jsx)("div", {
                      className: K.actions,
                      children: (0, r.jsx)(L.Z, {
                          activity: z,
                          user: n,
                          onAction: eu,
                          onClose: et,
                          application: X,
                      }),
                  });
    if (null === eo) return null;
    let eA = null != (t = z.application_id) ? t : z.name,
        eN = es === F.n_.ACTIVITY && el === eA;
    return (0, r.jsx)(_.Gt, {
        value: ea,
        children: (0, r.jsx)(D.Z, {
            targetElementRef: ei,
            sourceType: F.n_.ACTIVITY,
            user: n,
            children: (0, r.jsx)(R.Z, {
                user: n,
                guildId: $,
                themeType: eo,
                sourceId: eA,
                sourceDetails: null == ec ? (0, A.Z)(z) : null,
                entry: ec,
                onAction: eu,
                sourceType: F.n_.ACTIVITY,
                children: () =>
                    (0, r.jsx)(P.Z, {
                        ref: ei,
                        user: n,
                        className: K.toolbarContainer,
                        interactionSourceId: eA,
                        sourceType: F.n_.ACTIVITY,
                        onAction: eu,
                        renderMoreButtonPopout: (e) =>
                            (0, r.jsx)(B.Z, {
                                display: "live",
                                user: n,
                                activity: z,
                                entry: ec,
                                onClose: et,
                                children: e,
                            }),
                        onShowToolbar: () => eu({ action: "HOVER_ACTIVITY_CARD" }),
                        children: (0, r.jsxs)(M.Z, {
                            ref: ed,
                            className: o()(ee, { [K.hoisted]: eN }),
                            onAction: eu,
                            onClose: et,
                            "aria-labelledby": e_ ? "".concat(er, " ").concat(en) : en,
                            children: [
                                (0, r.jsx)(k.Z, q({ textId: er }, ef)),
                                (0, r.jsxs)("div", {
                                    className: K.body,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: K.content,
                                            children: [
                                                !n.bot && eg(),
                                                (0, r.jsxs)("div", {
                                                    className: K.details,
                                                    children: [
                                                        eI(),
                                                        !n.bot &&
                                                            (0, r.jsx)(x.Z, {
                                                                user: n,
                                                                activity: z,
                                                                className: K.badges,
                                                            }),
                                                        ev(),
                                                        eo === Y.l.MODAL_V2 && eS(),
                                                    ],
                                                }),
                                                eo === Y.l.MODAL && eS(),
                                            ],
                                        }),
                                        eT(),
                                    ],
                                }),
                                eo !== Y.l.MODAL && eo !== Y.l.MODAL_V2 && eS(),
                            ],
                        }),
                    }),
            }),
        }),
    });
}
