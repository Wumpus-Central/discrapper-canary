n.d(t, { Z: () => K });
var r = n(54381),
    i = n(120356),
    a = n.n(i),
    o = n(28664),
    s = n(481060),
    l = n(394821),
    c = n(841784),
    u = n(833664),
    d = n(420660),
    f = n(100527),
    p = n(906732),
    _ = n(379357),
    m = n(264832),
    h = n(358696),
    g = n(649700),
    E = n(313201),
    b = n(833858),
    y = n(223135),
    O = n(769654),
    v = n(750154),
    S = n(960870),
    I = n(139793),
    T = n(994746),
    A = n(232174),
    C = n(652853),
    N = n(979038),
    P = n(448980),
    R = n(576759),
    D = n(336383),
    w = n(194811),
    x = n(373826),
    L = n(668700),
    j = n(262210),
    M = n(670451),
    k = n(881530),
    U = n(981631),
    G = n(701488),
    Z = n(671955),
    B = n(388032),
    F = n(704543);
function V(e, t, n) {
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
                V(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
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
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function K(e) {
    let {
            user: t,
            currentUser: n,
            activity: i,
            application: V,
            voiceGuild: Y,
            voiceChannel: K,
            className: z,
            onClose: q,
            appContext: Q,
        } = e,
        X = (0, E.Dt)(),
        J = (0, E.Dt)(),
        { analyticsLocations: $ } = (0, p.ZP)(f.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: ee } = (0, C.z)(),
        et = (0, g.Z)({
            activity: i,
            user: t,
        }),
        en = (0, S.Z)({
            display: "live",
            user: t,
            activity: i,
            entry: et,
            analyticsLocations: $,
        }),
        er = (0, I.Z)({
            userId: t.id,
            onAction: en,
        }),
        ei = (0, T.Z)(i),
        ea = null != ei.text && "" !== ei.text,
        { largeImage: eo, smallImage: es } = (0, _.FO)(i, V),
        el = (0, k.Z)({
            location: "UserProfileActivityCard",
            user: t,
            currentUser: n,
            activity: i,
            application: V,
            entry: et,
            onClose: q,
        }),
        ec = () =>
            i.type !== U.IIU.HANG_STATUS || t.id !== n.id || null == K
                ? null
                : (0, r.jsx)(o.u, {
                      text: B.intl.string(B.t.QSOBaq),
                      children: (0, r.jsx)(s.d3s, { size: "xxs" }),
                  }),
        eu = () => {
            let e = (0, l.Z)(i) ? "crunchyroll" : "default",
                n = ee === Z.l.MODAL_V2 ? h.J.SIZE_100 : h.J.SIZE_60;
            return i.type === U.IIU.HANG_STATUS
                ? (0, r.jsx)(y.Z, {
                      userId: t.id,
                      size: ee !== Z.l.MODAL_V2 ? 60 : 100,
                      hangStatusActivity: i,
                      className: a()(F.hangStatusIcon, F.image, { [F.small]: ee !== Z.l.MODAL_V2 }),
                  })
                : null == el
                  ? (0, r.jsx)(h.E, {
                        image: eo,
                        smallImage: es,
                        size: n,
                        aspectRatio: e,
                        className: F.image,
                    })
                  : (0, r.jsx)(h.E, {
                        image: eo,
                        smallImage: es,
                        size: n,
                        className: F.clickableImage,
                        aspectRatio: e,
                        onClick: (e) => {
                            en({ action: "PRESS_IMAGE" }), el(e);
                        },
                    });
        },
        ed = () =>
            i.type === U.IIU.HANG_STATUS
                ? (0, r.jsx)(x.f, {
                      variant: "heading-sm/semibold",
                      text: (0, b.O8)(t.id, i),
                      id: X,
                  })
                : (0, d.Z)(i) && null != K
                  ? (0, r.jsxs)("div", {
                        className: F.voiceChannelText,
                        children: [
                            (0, r.jsx)(s.gj8, {
                                size: "xxs",
                                color: s.TVs.colors.TEXT_DEFAULT,
                                className: F.voiceIcon,
                            }),
                            (0, r.jsx)(x.f, {
                                variant: "heading-sm/semibold",
                                text: K.name,
                                id: X,
                            }),
                        ],
                    })
                  : (0, u.Z)(i) || (0, v.dS)(i)
                    ? (0, r.jsx)(x.f, {
                          variant: "heading-sm/semibold",
                          text: i.name,
                          id: X,
                      })
                    : null != i.details
                      ? (0, r.jsx)(m._, {
                            href: i.details_url,
                            children: (0, r.jsx)(x.f, {
                                variant: "heading-sm/semibold",
                                text: i.details,
                                id: X,
                            }),
                        })
                      : (0, r.jsx)(x.f, {
                            variant: "heading-sm/semibold",
                            text: i.name,
                            id: X,
                        }),
        ef = () => {
            if (i.type === U.IIU.HANG_STATUS) return null;
            if ((0, d.Z)(i) && null != Y)
                return (0, r.jsx)(x.Z, {
                    variant: "text-xs/normal",
                    text: B.intl.formatToPlainString(B.t["hq/Qze"], { guildName: Y.name }),
                    onClick: () => {
                        (0, O.X)(Y.id), en({ action: "OPEN_VOICE_GUILD" }), null == q || q();
                    },
                });
            if ((0, u.Z)(i))
                return (0, r.jsx)(m._, {
                    href: i.details_url,
                    children: (0, r.jsx)(x.Z, {
                        variant: "text-xs/normal",
                        text: i.details,
                    }),
                });
            if ((0, v.dS)(i)) {
                var e;
                return (0, r.jsx)(x.Z, {
                    variant: "text-xs/normal",
                    text: null == i || null == (e = i.assets) ? void 0 : e.small_text,
                });
            }
            return (0, r.jsx)(m._, {
                href: i.state_url,
                children: (0, r.jsx)(x.Z, {
                    variant: "text-xs/normal",
                    text: i.state,
                }),
            });
        },
        ep = () => {
            var e, t, n, a, o, s, l, c;
            if (i.type === U.IIU.WATCHING) return null;
            if ((0, u.Z)(i)) return e_();
            if (
                (0, v.dS)(i) &&
                (null == (e = i.party) ? void 0 : e.size) != null &&
                (null == (t = i.party) ? void 0 : t.size.length) >= 2
            ) {
                let e = B.intl.formatToPlainString(B.t["JC/3xw"], {
                    numSpeakers: null == (a = i.party) ? void 0 : a.size[0],
                    numListeners:
                        (null == (o = i.party) ? void 0 : o.size[1]) - (null == (s = i.party) ? void 0 : s.size[0]),
                });
                return (0, r.jsx)(x.Z, {
                    variant: "text-xs/normal",
                    text: e,
                });
            }
            return (null == (n = i.assets) ? void 0 : n.large_text) != null
                ? (0, r.jsx)(m._, {
                      href: null == (l = i.assets) ? void 0 : l.large_url,
                      children: (0, r.jsx)(x.Z, {
                          text: null == (c = i.assets) ? void 0 : c.large_text,
                          variant: "text-xs/normal",
                      }),
                  })
                : null;
        },
        e_ = () => {
            var e, t, n, a;
            return (null == (e = i.party) ? void 0 : e.size) == null && i.application_id === G.Zc
                ? (0, r.jsxs)("div", {
                      className: F.gameState,
                      children: [
                          (0, r.jsx)(m._, {
                              href: i.state_url,
                              children: (0, r.jsx)(x.Z, {
                                  variant: "text-xs/normal",
                                  text: i.state,
                              }),
                          }),
                          (0, r.jsx)(x.Z, {
                              variant: "text-xs/normal",
                              text: B.intl.formatToPlainString(B.t["u//9By"], {
                                  count: "0",
                                  max: null != (a = null == V ? void 0 : V.getMaxParticipants()) ? a : 0,
                              }),
                          }),
                      ],
                  })
                : (0, c.Z)(i) &&
                    (null == (t = i.party) ? void 0 : t.size) != null &&
                    (null == (n = i.party) ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)("div", {
                        className: F.gameState,
                        children: [
                            (0, r.jsx)(m._, {
                                href: i.state_url,
                                children: (0, r.jsx)(x.Z, {
                                    variant: "text-xs/normal",
                                    text: i.state,
                                }),
                            }),
                            (0, r.jsx)(x.Z, {
                                variant: "text-xs/normal",
                                text:
                                    0 === i.party.size[1]
                                        ? B.intl.formatToPlainString(B.t.IM4J4e, { count: i.party.size[0] })
                                        : B.intl.formatToPlainString(B.t["u//9By"], {
                                              count: i.party.size[0],
                                              max: i.party.size[1],
                                          }),
                            }),
                        ],
                    })
                  : null == i.party
                    ? (0, r.jsx)(m._, {
                          href: i.state_url,
                          children: (0, r.jsx)(x.Z, {
                              variant: "text-xs/normal",
                              text: i.state,
                          }),
                      })
                    : null;
        },
        em = () => {
            if (!(0, A.Z)(i)) return null;
            let { start: e, end: t } = i.timestamps;
            return (0, r.jsx)(j.Z, {
                start: e,
                end: t,
            });
        },
        eh = () =>
            null == el
                ? (0, r.jsxs)("div", {
                      children: [ed(), ef(), ep()],
                  })
                : (0, r.jsxs)(s.P3F, {
                      className: F.clickableText,
                      onClick: (e) => {
                          en({ action: "PRESS_TEXT" }), el(e);
                      },
                      children: [ed(), ef(), ep()],
                  }),
        eg = () =>
            null == Y || null == K
                ? null
                : (0, r.jsx)(L.Z, {
                      user: t,
                      guild: Y,
                      channel: K,
                      onAction: en,
                      onClose: q,
                  }),
        eE = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)("div", {
                      className: F.actions,
                      children: (0, r.jsx)(N.Z, {
                          activity: i,
                          user: t,
                          onAction: en,
                          onClose: q,
                          application: V,
                      }),
                  });
    return (0, r.jsx)(p.Gt, {
        value: $,
        children: (0, r.jsxs)(D.Z, {
            ref: er,
            className: a()(F.card, z),
            onAction: en,
            onClose: q,
            "aria-labelledby": ea ? "".concat(J, " ").concat(X) : X,
            children: [
                (0, r.jsx)(
                    w.Z,
                    W(
                        H(
                            {
                                textId: J,
                                tags: ec(),
                            },
                            ei,
                        ),
                        {
                            contextMenu: (0, r.jsx)(M.Z, {
                                display: "live",
                                user: t,
                                activity: i,
                                entry: et,
                                onClose: q,
                                appContext: Q,
                            }),
                        },
                    ),
                ),
                (0, r.jsxs)("div", {
                    className: F.body,
                    children: [
                        (0, r.jsxs)("div", {
                            className: F.content,
                            children: [
                                !t.bot && eu(),
                                (0, r.jsxs)("div", {
                                    className: F.details,
                                    children: [
                                        eh(),
                                        !t.bot &&
                                            (0, r.jsx)(P.Z, {
                                                user: t,
                                                activity: i,
                                                className: F.badges,
                                            }),
                                        em(),
                                        ee === Z.l.MODAL_V2 && eE(),
                                    ],
                                }),
                                ee === Z.l.MODAL && eE(),
                            ],
                        }),
                        eg(),
                    ],
                }),
                ee !== Z.l.MODAL && ee !== Z.l.MODAL_V2 && eE(),
                (0, r.jsx)(R.Z, {
                    applicationId: null == V ? void 0 : V.id,
                    onAction: en,
                    onClose: q,
                    activity: i,
                }),
            ],
        }),
    });
}
