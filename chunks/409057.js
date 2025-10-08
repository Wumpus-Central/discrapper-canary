n.d(t, { Z: () => q });
var r = n(951288),
    i = n(120356),
    a = n.n(i),
    o = n(28664),
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
    b = n(272304),
    y = n(833858),
    O = n(223135),
    v = n(769654),
    I = n(750154),
    T = n(960870),
    S = n(139793),
    A = n(994746),
    C = n(232174),
    N = n(652853),
    R = n(555830),
    P = n(979038),
    w = n(448980),
    D = n(576759),
    L = n(336383),
    x = n(194811),
    M = n(373826),
    j = n(668700),
    k = n(262210),
    U = n(670451),
    G = n(881530),
    B = n(981631),
    Z = n(701488),
    F = n(671955),
    V = n(388032),
    H = n(704543);
function Y(e, t, n) {
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
function W(e) {
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
                Y(e, t, n[t]);
            });
    }
    return e;
}
function K(e, t) {
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
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : K(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function q(e) {
    let {
            user: t,
            currentUser: n,
            activity: i,
            application: Y,
            voiceGuild: K,
            voiceChannel: q,
            className: X,
            onClose: Q,
            appContext: J,
        } = e,
        $ = (0, E.Dt)(),
        ee = (0, E.Dt)(),
        { analyticsLocations: et } = (0, _.ZP)(f.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: en } = (0, N.z)(),
        er = (0, g.Z)({
            activity: i,
            user: t,
        }),
        ei = (0, T.Z)({
            display: "live",
            user: t,
            activity: i,
            entry: er,
            analyticsLocations: et,
        }),
        ea = (0, S.Z)({
            userId: t.id,
            onAction: ei,
        }),
        eo = (0, b.P6)("UserProfileActivityCard"),
        es = t.id === n.id,
        el = (0, u.Z)(i),
        ec = es && eo && el,
        eu = (0, A.Z)(i),
        ed = null != eu.text && "" !== eu.text,
        { largeImage: ef, smallImage: e_ } = (0, p.FO)(i, Y),
        ep = (0, G.Z)({
            location: "UserProfileActivityCard",
            user: t,
            currentUser: n,
            activity: i,
            application: Y,
            entry: er,
            onClose: Q,
        }),
        eh = () =>
            i.type !== B.IIU.HANG_STATUS || t.id !== n.id || null == q
                ? null
                : (0, r.jsx)(o.u, {
                      text: V.intl.string(V.t.QSOBam),
                      children: (0, r.jsx)(s.d3s, { size: "xxs" }),
                  }),
        em = () => {
            let e = (0, l.Z)(i) ? "crunchyroll" : "default",
                n = en === F.l.MODAL_V2 ? m.J.SIZE_100 : m.J.SIZE_60;
            return i.type === B.IIU.HANG_STATUS
                ? (0, r.jsx)(O.Z, {
                      userId: t.id,
                      size: en !== F.l.MODAL_V2 ? 60 : 100,
                      hangStatusActivity: i,
                      className: a()(H.hangStatusIcon, H.image, { [H.small]: en !== F.l.MODAL_V2 }),
                  })
                : null == ep
                  ? (0, r.jsx)(m.E, {
                        image: ef,
                        smallImage: e_,
                        size: n,
                        aspectRatio: e,
                        className: H.image,
                    })
                  : (0, r.jsx)(m.E, {
                        image: ef,
                        smallImage: e_,
                        size: n,
                        className: H.clickableImage,
                        aspectRatio: e,
                        onClick: (e) => {
                            ei({ action: "PRESS_IMAGE" }), ep(e);
                        },
                    });
        },
        eg = () =>
            i.type === B.IIU.HANG_STATUS
                ? (0, r.jsx)(M.f, {
                      variant: "heading-sm/semibold",
                      text: (0, y.O8)(t.id, i),
                      id: $,
                  })
                : (0, d.Z)(i) && null != q
                  ? (0, r.jsxs)("div", {
                        className: H.voiceChannelText,
                        children: [
                            (0, r.jsx)(s.gj8, {
                                size: "xxs",
                                color: s.TVs.colors.TEXT_DEFAULT,
                                className: H.voiceIcon,
                            }),
                            (0, r.jsx)(M.f, {
                                variant: "heading-sm/semibold",
                                text: q.name,
                                id: $,
                            }),
                        ],
                    })
                  : (0, u.Z)(i) || (0, I.dS)(i)
                    ? (0, r.jsx)(M.f, {
                          variant: "heading-sm/semibold",
                          text: i.name,
                          id: $,
                      })
                    : null != i.details
                      ? (0, r.jsx)(h._, {
                            href: i.details_url,
                            children: (0, r.jsx)(M.f, {
                                variant: "heading-sm/semibold",
                                text: i.details,
                                id: $,
                            }),
                        })
                      : (0, r.jsx)(M.f, {
                            variant: "heading-sm/semibold",
                            text: i.name,
                            id: $,
                        }),
        eE = () => {
            if (i.type === B.IIU.HANG_STATUS) return null;
            if ((0, d.Z)(i) && null != K)
                return (0, r.jsx)(M.Z, {
                    variant: "text-xs/normal",
                    text: V.intl.formatToPlainString(V.t["hq/Qzc"], { guildName: K.name }),
                    onClick: () => {
                        (0, v.X)(K.id), ei({ action: "OPEN_VOICE_GUILD" }), null == Q || Q();
                    },
                });
            if ((0, u.Z)(i))
                return (0, r.jsx)(h._, {
                    href: i.details_url,
                    children: (0, r.jsx)(M.Z, {
                        variant: "text-xs/normal",
                        text: i.details,
                    }),
                });
            if ((0, I.dS)(i)) {
                var e;
                return (0, r.jsx)(M.Z, {
                    variant: "text-xs/normal",
                    text: null == i || null == (e = i.assets) ? void 0 : e.small_text,
                });
            }
            return (0, r.jsx)(h._, {
                href: i.state_url,
                children: (0, r.jsx)(M.Z, {
                    variant: "text-xs/normal",
                    text: i.state,
                }),
            });
        },
        eb = () => {
            var e, t, n, a, o, s, l, c;
            if (i.type === B.IIU.WATCHING) return null;
            if ((0, u.Z)(i)) return ey();
            if (
                (0, I.dS)(i) &&
                (null == (e = i.party) ? void 0 : e.size) != null &&
                (null == (t = i.party) ? void 0 : t.size.length) >= 2
            ) {
                let e = V.intl.formatToPlainString(V.t["JC/3x8"], {
                    numSpeakers: null == (a = i.party) ? void 0 : a.size[0],
                    numListeners:
                        (null == (o = i.party) ? void 0 : o.size[1]) - (null == (s = i.party) ? void 0 : s.size[0]),
                });
                return (0, r.jsx)(M.Z, {
                    variant: "text-xs/normal",
                    text: e,
                });
            }
            return (null == (n = i.assets) ? void 0 : n.large_text) != null
                ? (0, r.jsx)(h._, {
                      href: null == (l = i.assets) ? void 0 : l.large_url,
                      children: (0, r.jsx)(M.Z, {
                          text: null == (c = i.assets) ? void 0 : c.large_text,
                          variant: "text-xs/normal",
                      }),
                  })
                : null;
        },
        ey = () => {
            var e, t, n, a;
            return (null == (e = i.party) ? void 0 : e.size) == null && i.application_id === Z.Zc
                ? (0, r.jsxs)("div", {
                      className: H.gameState,
                      children: [
                          (0, r.jsx)(h._, {
                              href: i.state_url,
                              children: (0, r.jsx)(M.Z, {
                                  variant: "text-xs/normal",
                                  text: i.state,
                              }),
                          }),
                          (0, r.jsx)(M.Z, {
                              variant: "text-xs/normal",
                              text: V.intl.formatToPlainString(V.t["u//9Bw"], {
                                  count: "0",
                                  max: null != (a = null == Y ? void 0 : Y.getMaxParticipants()) ? a : 0,
                              }),
                          }),
                      ],
                  })
                : (0, c.Z)(i) &&
                    (null == (t = i.party) ? void 0 : t.size) != null &&
                    (null == (n = i.party) ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)("div", {
                        className: H.gameState,
                        children: [
                            (0, r.jsx)(h._, {
                                href: i.state_url,
                                children: (0, r.jsx)(M.Z, {
                                    variant: "text-xs/normal",
                                    text: i.state,
                                }),
                            }),
                            (0, r.jsx)(M.Z, {
                                variant: "text-xs/normal",
                                text:
                                    0 === i.party.size[1]
                                        ? V.intl.formatToPlainString(V.t.IM4J4e, { count: i.party.size[0] })
                                        : V.intl.formatToPlainString(V.t["u//9Bw"], {
                                              count: i.party.size[0],
                                              max: i.party.size[1],
                                          }),
                            }),
                        ],
                    })
                  : null == i.party
                    ? (0, r.jsx)(h._, {
                          href: i.state_url,
                          children: (0, r.jsx)(M.Z, {
                              variant: "text-xs/normal",
                              text: i.state,
                          }),
                      })
                    : null;
        },
        eO = () => {
            if (!(0, C.Z)(i)) return null;
            let { start: e, end: t } = i.timestamps;
            return (0, r.jsx)(k.Z, {
                start: e,
                end: t,
            });
        },
        ev = () =>
            null == ep
                ? (0, r.jsxs)("div", {
                      children: [eg(), eE(), eb()],
                  })
                : (0, r.jsxs)(s.P3F, {
                      className: H.clickableText,
                      onClick: (e) => {
                          ei({ action: "PRESS_TEXT" }), ep(e);
                      },
                      children: [eg(), eE(), eb()],
                  }),
        eI = () =>
            null == K || null == q
                ? null
                : (0, r.jsx)(j.Z, {
                      user: t,
                      guild: K,
                      channel: q,
                      onAction: ei,
                      onClose: Q,
                  }),
        eT = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)("div", {
                      className: H.actions,
                      children: (0, r.jsx)(P.Z, {
                          activity: i,
                          user: t,
                          onAction: ei,
                          onClose: Q,
                          application: Y,
                      }),
                  });
    return (0, r.jsx)(_.Gt, {
        value: et,
        children: (0, r.jsxs)(L.Z, {
            ref: ea,
            className: a()(H.card, X),
            onAction: ei,
            onClose: Q,
            "aria-labelledby": ed ? "".concat(ee, " ").concat($) : $,
            children: [
                (0, r.jsx)(
                    x.Z,
                    z(
                        W(
                            {
                                textId: ee,
                                tags: eh(),
                            },
                            eu,
                        ),
                        {
                            contextMenu: (0, r.jsx)(U.Z, {
                                display: "live",
                                user: t,
                                activity: i,
                                entry: er,
                                onClose: Q,
                                appContext: J,
                            }),
                        },
                    ),
                ),
                (0, r.jsxs)("div", {
                    className: H.body,
                    children: [
                        (0, r.jsxs)("div", {
                            className: H.content,
                            children: [
                                !t.bot && em(),
                                (0, r.jsxs)("div", {
                                    className: H.details,
                                    children: [
                                        ev(),
                                        !t.bot &&
                                            (0, r.jsx)(w.Z, {
                                                user: t,
                                                activity: i,
                                                className: H.badges,
                                            }),
                                        eO(),
                                        en === F.l.MODAL_V2 && eT(),
                                    ],
                                }),
                                en === F.l.MODAL && eT(),
                            ],
                        }),
                        eI(),
                    ],
                }),
                en !== F.l.MODAL && en !== F.l.MODAL_V2 && eT(),
                (0, r.jsx)(D.Z, {
                    applicationId: null == Y ? void 0 : Y.id,
                    onAction: ei,
                    onClose: Q,
                    activity: i,
                }),
                ec &&
                    (0, r.jsx)(R.Z, {
                        activity: i,
                        variant: en === F.l.MODAL_V2 ? "horizontal" : "vertical",
                    }),
            ],
        }),
    });
}
