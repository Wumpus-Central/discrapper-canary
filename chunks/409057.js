n.d(t, { Z: () => q });
var r = n(54381),
    i = n(120356),
    a = n.n(i),
    o = n(636977),
    s = n(28664),
    l = n(481060),
    c = n(394821),
    u = n(841784),
    d = n(833664),
    f = n(420660),
    p = n(100527),
    _ = n(906732),
    m = n(379357),
    h = n(264832),
    g = n(358696),
    E = n(649700),
    b = n(313201),
    y = n(833858),
    O = n(223135),
    v = n(633181),
    S = n(769654),
    I = n(750154),
    T = n(960870),
    C = n(139793),
    A = n(994746),
    N = n(232174),
    P = n(652853),
    R = n(979038),
    w = n(448980),
    D = n(576759),
    x = n(336383),
    L = n(194811),
    j = n(373826),
    M = n(668700),
    k = n(262210),
    U = n(670451),
    G = n(881530),
    Z = n(981631),
    F = n(701488),
    B = n(671955),
    V = n(388032),
    H = n(251806);
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
            className: Q,
            onClose: X,
            appContext: J,
        } = e,
        $ = (0, b.Dt)(),
        ee = (0, b.Dt)(),
        { analyticsLocations: et } = (0, _.ZP)(p.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: en } = (0, P.z)(),
        er = (0, E.Z)({
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
        ea = (0, C.Z)({
            userId: t.id,
            onAction: ei,
        }),
        eo = (0, A.Z)(i),
        es = null != eo.text && "" !== eo.text,
        { largeImage: el, smallImage: ec } = (0, m.FO)(i, Y),
        eu = (0, G.Z)({
            location: "UserProfileActivityCard",
            user: t,
            currentUser: n,
            activity: i,
            application: Y,
            entry: er,
            onClose: X,
        }),
        ed = () =>
            i.type !== Z.IIU.HANG_STATUS || t.id !== n.id || null == q
                ? null
                : (0, r.jsx)(s.u, {
                      text: V.intl.string(V.t.QSOBaq),
                      children: (0, r.jsx)(l.d3s, { size: "xxs" }),
                  }),
        ef = () => {
            let e = (0, c.Z)(i) ? "crunchyroll" : "default",
                n = en === B.l.MODAL_V2 ? g.J.SIZE_100 : g.J.SIZE_60;
            return i.type === Z.IIU.HANG_STATUS
                ? (0, r.jsx)(O.Z, {
                      userId: t.id,
                      size: en !== B.l.MODAL_V2 ? 60 : 100,
                      hangStatusActivity: i,
                      className: a()(H.hangStatusIcon, H.image, { [H.small]: en !== B.l.MODAL_V2 }),
                  })
                : null == eu
                  ? (0, r.jsx)(g.E, {
                        image: el,
                        smallImage: ec,
                        size: n,
                        aspectRatio: e,
                        className: H.image,
                    })
                  : (0, r.jsx)(g.E, {
                        image: el,
                        smallImage: ec,
                        size: n,
                        className: H.clickableImage,
                        aspectRatio: e,
                        onClick: (e) => {
                            ei({ action: "PRESS_IMAGE" }), eu(e);
                        },
                    });
        },
        ep = () =>
            i.type === Z.IIU.HANG_STATUS
                ? (0, r.jsx)(j.f, {
                      variant: "heading-sm/semibold",
                      text: (0, y.O8)(t.id, i),
                      id: $,
                  })
                : (0, f.Z)(i) && null != q
                  ? (0, r.jsxs)("div", {
                        className: H.voiceChannelText,
                        children: [
                            (0, r.jsx)(l.gj8, {
                                size: "xxs",
                                color: l.TVs.colors.TEXT_DEFAULT,
                                className: H.voiceIcon,
                            }),
                            (0, r.jsx)(j.f, {
                                variant: "heading-sm/semibold",
                                text: q.name,
                                id: $,
                            }),
                        ],
                    })
                  : (0, d.Z)(i) || (0, I.dS)(i)
                    ? (0, r.jsx)(j.f, {
                          variant: "heading-sm/semibold",
                          text: i.name,
                          id: $,
                      })
                    : null != i.details
                      ? (0, r.jsx)(h._, {
                            href: i.details_url,
                            children: (0, r.jsx)(j.f, {
                                variant: "heading-sm/semibold",
                                text: i.details,
                                id: $,
                            }),
                        })
                      : (0, r.jsx)(j.f, {
                            variant: "heading-sm/semibold",
                            text: i.name,
                            id: $,
                        }),
        e_ = () => {
            if (i.type === Z.IIU.HANG_STATUS) return null;
            if ((0, f.Z)(i) && null != K)
                return (0, r.jsx)(j.Z, {
                    variant: "text-xs/normal",
                    text: V.intl.formatToPlainString(V.t["hq/Qze"], { guildName: K.name }),
                    onClick: () => {
                        (0, S.X)(K.id), ei({ action: "OPEN_VOICE_GUILD" }), null == X || X();
                    },
                });
            if ((0, d.Z)(i))
                return (0, r.jsx)(h._, {
                    href: i.details_url,
                    children: (0, r.jsx)(j.Z, {
                        variant: "text-xs/normal",
                        text: i.details,
                    }),
                });
            if ((0, I.dS)(i)) {
                var e;
                return (0, r.jsx)(j.Z, {
                    variant: "text-xs/normal",
                    text: null == i || null == (e = i.assets) ? void 0 : e.small_text,
                });
            }
            return (0, r.jsx)(h._, {
                href: i.state_url,
                children: (0, r.jsx)(j.Z, {
                    variant: "text-xs/normal",
                    text: i.state,
                }),
            });
        },
        em = () => {
            var e, t, n, a, o, s, l, c;
            if (i.type === Z.IIU.WATCHING) return null;
            if ((0, d.Z)(i)) return eh();
            if (
                (0, I.dS)(i) &&
                (null == (e = i.party) ? void 0 : e.size) != null &&
                (null == (t = i.party) ? void 0 : t.size.length) >= 2
            ) {
                let e = V.intl.formatToPlainString(V.t["JC/3xw"], {
                    numSpeakers: null == (a = i.party) ? void 0 : a.size[0],
                    numListeners:
                        (null == (o = i.party) ? void 0 : o.size[1]) - (null == (s = i.party) ? void 0 : s.size[0]),
                });
                return (0, r.jsx)(j.Z, {
                    variant: "text-xs/normal",
                    text: e,
                });
            }
            return (null == (n = i.assets) ? void 0 : n.large_text) != null
                ? (0, r.jsx)(h._, {
                      href: null == (l = i.assets) ? void 0 : l.large_url,
                      children: (0, r.jsx)(j.Z, {
                          text: null == (c = i.assets) ? void 0 : c.large_text,
                          variant: "text-xs/normal",
                      }),
                  })
                : null;
        },
        eh = () => {
            var e, t, n, a;
            return (null == (e = i.party) ? void 0 : e.size) == null && i.application_id === F.Zc
                ? (0, r.jsxs)("div", {
                      className: H.gameState,
                      children: [
                          (0, r.jsx)(h._, {
                              href: i.state_url,
                              children: (0, r.jsx)(j.Z, {
                                  variant: "text-xs/normal",
                                  text: i.state,
                              }),
                          }),
                          (0, r.jsx)(j.Z, {
                              variant: "text-xs/normal",
                              text: V.intl.formatToPlainString(V.t["u//9By"], {
                                  count: "0",
                                  max: null != (a = null == Y ? void 0 : Y.getMaxParticipants()) ? a : 0,
                              }),
                          }),
                      ],
                  })
                : (0, u.Z)(i) &&
                    (null == (t = i.party) ? void 0 : t.size) != null &&
                    (null == (n = i.party) ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)("div", {
                        className: H.gameState,
                        children: [
                            (0, r.jsx)(h._, {
                                href: i.state_url,
                                children: (0, r.jsx)(j.Z, {
                                    variant: "text-xs/normal",
                                    text: i.state,
                                }),
                            }),
                            (0, r.jsx)(j.Z, {
                                variant: "text-xs/normal",
                                text:
                                    0 === i.party.size[1]
                                        ? V.intl.formatToPlainString(V.t.IM4J4e, { count: i.party.size[0] })
                                        : V.intl.formatToPlainString(V.t["u//9By"], {
                                              count: i.party.size[0],
                                              max: i.party.size[1],
                                          }),
                            }),
                        ],
                    })
                  : null == i.party
                    ? (0, r.jsx)(h._, {
                          href: i.state_url,
                          children: (0, r.jsx)(j.Z, {
                              variant: "text-xs/normal",
                              text: i.state,
                          }),
                      })
                    : null;
        },
        eg = () => {
            if (!(0, N.Z)(i)) return null;
            let { start: e, end: t } = i.timestamps;
            return (0, r.jsx)(k.Z, {
                start: e,
                end: t,
            });
        },
        eE = () =>
            null == eu
                ? (0, r.jsxs)("div", {
                      children: [ep(), e_(), em()],
                  })
                : (0, r.jsxs)(l.P3F, {
                      className: H.clickableText,
                      onClick: (e) => {
                          ei({ action: "PRESS_TEXT" }), eu(e);
                      },
                      children: [ep(), e_(), em()],
                  }),
        eb = () =>
            null == K || null == q
                ? null
                : (0, r.jsx)(M.Z, {
                      user: t,
                      guild: K,
                      channel: q,
                      onAction: ei,
                      onClose: X,
                  }),
        ey = () =>
            (0, r.jsx)(R.Z, {
                containerClassName: H.actions,
                activity: i,
                user: t,
                onAction: ei,
                onClose: X,
                application: Y,
            });
    return (0, r.jsx)(_.Gt, {
        value: et,
        children: (0, r.jsxs)(x.Z, {
            ref: ea,
            className: a()(H.card, Q),
            onAction: ei,
            onClose: X,
            "aria-labelledby": es ? "".concat(ee, " ").concat($) : $,
            children: [
                (0, r.jsx)(
                    L.Z,
                    z(
                        W(
                            {
                                textId: ee,
                                tags: ed(),
                            },
                            eo,
                        ),
                        {
                            contextMenu: (0, r.jsx)(U.Z, {
                                display: "live",
                                user: t,
                                activity: i,
                                entry: er,
                                onClose: X,
                                appContext: J,
                            }),
                        },
                    ),
                ),
                (0, r.jsx)(v.Z, {
                    applicationId: null == Y ? void 0 : Y.id,
                    questContent: o.j.USER_PROFILE_ACTIVITY,
                    children: (e) =>
                        (0, r.jsxs)("div", {
                            className: H.body,
                            ref: e,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: H.content,
                                    children: [
                                        !t.bot && ef(),
                                        (0, r.jsxs)("div", {
                                            className: H.details,
                                            children: [
                                                eE(),
                                                !t.bot &&
                                                    (0, r.jsx)(w.Z, {
                                                        user: t,
                                                        activity: i,
                                                        className: H.badges,
                                                    }),
                                                eg(),
                                                en === B.l.MODAL_V2 && ey(),
                                            ],
                                        }),
                                        en === B.l.MODAL && ey(),
                                    ],
                                }),
                                eb(),
                            ],
                        }),
                }),
                en !== B.l.MODAL && en !== B.l.MODAL_V2 && ey(),
                (0, r.jsx)(D.Z, {
                    applicationId: null == Y ? void 0 : Y.id,
                    onAction: ei,
                    onClose: X,
                    activity: i,
                }),
            ],
        }),
    });
}
