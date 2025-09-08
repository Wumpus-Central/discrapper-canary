n.d(t, { Z: () => W });
var r = n(951288),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(394821),
    l = n(841784),
    c = n(833664),
    u = n(420660),
    d = n(100527),
    f = n(906732),
    _ = n(379357),
    p = n(264832),
    h = n(358696),
    m = n(649700),
    g = n(313201),
    E = n(833858),
    b = n(223135),
    y = n(769654),
    O = n(750154),
    v = n(960870),
    I = n(139793),
    T = n(994746),
    S = n(232174),
    A = n(652853),
    C = n(979038),
    N = n(448980),
    R = n(576759),
    P = n(336383),
    w = n(194811),
    D = n(373826),
    x = n(668700),
    L = n(262210),
    j = n(670451),
    M = n(881530),
    k = n(981631),
    U = n(701488),
    G = n(671955),
    B = n(388032),
    Z = n(704543);
function F(e, t, n) {
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
function V(e) {
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
                F(e, t, n[t]);
            });
    }
    return e;
}
function H(e, t) {
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
function Y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : H(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function W(e) {
    let {
            user: t,
            currentUser: n,
            activity: i,
            application: F,
            voiceGuild: H,
            voiceChannel: W,
            className: K,
            onClose: z,
            appContext: q,
        } = e,
        X = (0, g.Dt)(),
        Q = (0, g.Dt)(),
        { analyticsLocations: J } = (0, f.ZP)(d.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: $ } = (0, A.z)(),
        ee = (0, m.Z)({
            activity: i,
            user: t,
        }),
        et = (0, v.Z)({
            display: "live",
            user: t,
            activity: i,
            entry: ee,
            analyticsLocations: J,
        }),
        en = (0, I.Z)({
            userId: t.id,
            onAction: et,
        }),
        er = (0, T.Z)(i),
        ei = null != er.text && "" !== er.text,
        { largeImage: ea, smallImage: eo } = (0, _.FO)(i, F),
        es = (0, M.Z)({
            location: "UserProfileActivityCard",
            user: t,
            currentUser: n,
            activity: i,
            application: F,
            entry: ee,
            onClose: z,
        }),
        el = () => {
            let e = (0, s.Z)(i) ? "crunchyroll" : "default",
                t = $ === G.l.MODAL_V2 ? h.J.SIZE_100 : h.J.SIZE_60;
            return i.type === k.IIU.HANG_STATUS
                ? (0, r.jsx)(b.Z, {
                      size: $ !== G.l.MODAL_V2 ? 60 : 100,
                      hangStatusActivity: i,
                      className: a()(Z.hangStatusIcon, Z.image, { [Z.small]: $ !== G.l.MODAL_V2 }),
                  })
                : null == es
                  ? (0, r.jsx)(h.E, {
                        image: ea,
                        smallImage: eo,
                        size: t,
                        aspectRatio: e,
                        className: Z.image,
                    })
                  : (0, r.jsx)(h.E, {
                        image: ea,
                        smallImage: eo,
                        size: t,
                        className: Z.clickableImage,
                        aspectRatio: e,
                        onClick: (e) => {
                            et({ action: "PRESS_IMAGE" }), es(e);
                        },
                    });
        },
        ec = () =>
            i.type === k.IIU.HANG_STATUS
                ? (0, r.jsx)(D.f, {
                      variant: "heading-sm/semibold",
                      text: (0, E.O8)(i),
                      id: X,
                  })
                : (0, u.Z)(i) && null != W
                  ? (0, r.jsxs)("div", {
                        className: Z.voiceChannelText,
                        children: [
                            (0, r.jsx)(o.gj8, {
                                size: "xxs",
                                color: o.TVs.colors.TEXT_DEFAULT,
                                className: Z.voiceIcon,
                            }),
                            (0, r.jsx)(D.f, {
                                variant: "heading-sm/semibold",
                                text: W.name,
                                id: X,
                            }),
                        ],
                    })
                  : (0, c.Z)(i) || (0, O.dS)(i)
                    ? (0, r.jsx)(D.f, {
                          variant: "heading-sm/semibold",
                          text: i.name,
                          id: X,
                      })
                    : null != i.details
                      ? (0, r.jsx)(p._, {
                            href: i.details_url,
                            children: (0, r.jsx)(D.f, {
                                variant: "heading-sm/semibold",
                                text: i.details,
                                id: X,
                            }),
                        })
                      : (0, r.jsx)(D.f, {
                            variant: "heading-sm/semibold",
                            text: i.name,
                            id: X,
                        }),
        eu = () => {
            if (i.type === k.IIU.HANG_STATUS) return null;
            if ((0, u.Z)(i) && null != H)
                return (0, r.jsx)(D.Z, {
                    variant: "text-xs/normal",
                    text: B.intl.formatToPlainString(B.t["hq/Qzc"], { guildName: H.name }),
                    onClick: () => {
                        (0, y.X)(H.id), et({ action: "OPEN_VOICE_GUILD" }), null == z || z();
                    },
                });
            if ((0, c.Z)(i))
                return (0, r.jsx)(p._, {
                    href: i.details_url,
                    children: (0, r.jsx)(D.Z, {
                        variant: "text-xs/normal",
                        text: i.details,
                    }),
                });
            if ((0, O.dS)(i)) {
                var e;
                return (0, r.jsx)(D.Z, {
                    variant: "text-xs/normal",
                    text: null == i || null == (e = i.assets) ? void 0 : e.small_text,
                });
            }
            return (0, r.jsx)(p._, {
                href: i.state_url,
                children: (0, r.jsx)(D.Z, {
                    variant: "text-xs/normal",
                    text: i.state,
                }),
            });
        },
        ed = () => {
            var e, t, n, a, o, s, l, u;
            if (i.type === k.IIU.WATCHING) return null;
            if ((0, c.Z)(i)) return ef();
            if (
                (0, O.dS)(i) &&
                (null == (e = i.party) ? void 0 : e.size) != null &&
                (null == (t = i.party) ? void 0 : t.size.length) >= 2
            ) {
                let e = B.intl.formatToPlainString(B.t["JC/3x8"], {
                    numSpeakers: null == (a = i.party) ? void 0 : a.size[0],
                    numListeners:
                        (null == (o = i.party) ? void 0 : o.size[1]) - (null == (s = i.party) ? void 0 : s.size[0]),
                });
                return (0, r.jsx)(D.Z, {
                    variant: "text-xs/normal",
                    text: e,
                });
            }
            return (null == (n = i.assets) ? void 0 : n.large_text) != null
                ? (0, r.jsx)(p._, {
                      href: null == (l = i.assets) ? void 0 : l.large_url,
                      children: (0, r.jsx)(D.Z, {
                          text: null == (u = i.assets) ? void 0 : u.large_text,
                          variant: "text-xs/normal",
                      }),
                  })
                : null;
        },
        ef = () => {
            var e, t, n, a;
            return (null == (e = i.party) ? void 0 : e.size) == null && i.application_id === U.Zc
                ? (0, r.jsxs)("div", {
                      className: Z.gameState,
                      children: [
                          (0, r.jsx)(p._, {
                              href: i.state_url,
                              children: (0, r.jsx)(D.Z, {
                                  variant: "text-xs/normal",
                                  text: i.state,
                              }),
                          }),
                          (0, r.jsx)(D.Z, {
                              variant: "text-xs/normal",
                              text: B.intl.formatToPlainString(B.t["u//9Bw"], {
                                  count: "0",
                                  max: null != (a = null == F ? void 0 : F.getMaxParticipants()) ? a : 0,
                              }),
                          }),
                      ],
                  })
                : (0, l.Z)(i) &&
                    (null == (t = i.party) ? void 0 : t.size) != null &&
                    (null == (n = i.party) ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)("div", {
                        className: Z.gameState,
                        children: [
                            (0, r.jsx)(p._, {
                                href: i.state_url,
                                children: (0, r.jsx)(D.Z, {
                                    variant: "text-xs/normal",
                                    text: i.state,
                                }),
                            }),
                            (0, r.jsx)(D.Z, {
                                variant: "text-xs/normal",
                                text:
                                    0 === i.party.size[1]
                                        ? B.intl.formatToPlainString(B.t.IM4J4e, { count: i.party.size[0] })
                                        : B.intl.formatToPlainString(B.t["u//9Bw"], {
                                              count: i.party.size[0],
                                              max: i.party.size[1],
                                          }),
                            }),
                        ],
                    })
                  : null == i.party
                    ? (0, r.jsx)(p._, {
                          href: i.state_url,
                          children: (0, r.jsx)(D.Z, {
                              variant: "text-xs/normal",
                              text: i.state,
                          }),
                      })
                    : null;
        },
        e_ = () => {
            if (!(0, S.Z)(i)) return null;
            let { start: e, end: t } = i.timestamps;
            return (0, r.jsx)(L.Z, {
                start: e,
                end: t,
            });
        },
        ep = () =>
            null == es
                ? (0, r.jsxs)("div", {
                      children: [ec(), eu(), ed()],
                  })
                : (0, r.jsxs)(o.P3F, {
                      className: Z.clickableText,
                      onClick: (e) => {
                          et({ action: "PRESS_TEXT" }), es(e);
                      },
                      children: [ec(), eu(), ed()],
                  }),
        eh = () =>
            null == H || null == W
                ? null
                : (0, r.jsx)(x.Z, {
                      user: t,
                      guild: H,
                      channel: W,
                      onAction: et,
                      onClose: z,
                  }),
        em = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)("div", {
                      className: Z.actions,
                      children: (0, r.jsx)(C.Z, {
                          activity: i,
                          user: t,
                          onAction: et,
                          onClose: z,
                          application: F,
                      }),
                  });
    return (0, r.jsx)(f.Gt, {
        value: J,
        children: (0, r.jsxs)(P.Z, {
            ref: en,
            className: a()(Z.card, K),
            onAction: et,
            onClose: z,
            "aria-labelledby": ei ? "".concat(Q, " ").concat(X) : X,
            children: [
                (0, r.jsx)(
                    w.Z,
                    Y(V({ textId: Q }, er), {
                        contextMenu: (0, r.jsx)(j.Z, {
                            display: "live",
                            user: t,
                            activity: i,
                            entry: ee,
                            onClose: z,
                            appContext: q,
                        }),
                    }),
                ),
                (0, r.jsxs)("div", {
                    className: Z.body,
                    children: [
                        (0, r.jsxs)("div", {
                            className: Z.content,
                            children: [
                                !t.bot && el(),
                                (0, r.jsxs)("div", {
                                    className: Z.details,
                                    children: [
                                        ep(),
                                        !t.bot &&
                                            (0, r.jsx)(N.Z, {
                                                user: t,
                                                activity: i,
                                                className: Z.badges,
                                            }),
                                        e_(),
                                        $ === G.l.MODAL_V2 && em(),
                                    ],
                                }),
                                $ === G.l.MODAL && em(),
                            ],
                        }),
                        eh(),
                    ],
                }),
                $ !== G.l.MODAL && $ !== G.l.MODAL_V2 && em(),
                (0, r.jsx)(R.Z, {
                    applicationId: null == F ? void 0 : F.id,
                    onAction: et,
                    onClose: z,
                }),
            ],
        }),
    });
}
