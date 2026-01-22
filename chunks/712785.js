n.d(t, { A: () => X });
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(696292),
    o = n(990078),
    l = n(397927),
    c = n(541806),
    u = n(765379),
    d = n(672979),
    f = n(960076),
    p = n(793574),
    _ = n(688810),
    h = n(939341),
    m = n(662010),
    g = n(623671),
    E = n(365185),
    b = n(915089),
    y = n(886019),
    O = n(559405),
    A = n(753845),
    v = n(345942),
    S = n(82149),
    I = n(92240),
    T = n(257367),
    C = n(317572),
    N = n(53257),
    R = n(939496),
    w = n(167272),
    P = n(282197),
    D = n(624951),
    x = n(584904),
    L = n(351638),
    j = n(531648),
    M = n(910607),
    k = n(753713),
    U = n(8738),
    G = n(707794),
    V = n(652215),
    F = n(360469),
    B = n(996988),
    H = n(985018),
    Y = n(380297);
function W(e, t, n) {
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
function K(e) {
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
                W(e, t, n[t]);
            });
    }
    return e;
}
function z(e, t) {
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
function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function X(e) {
    let {
            user: t,
            currentUser: n,
            activity: i,
            application: W,
            voiceGuild: z,
            voiceChannel: X,
            className: Z,
            onClose: Q,
            appContext: $,
        } = e,
        J = (0, b.GV)(),
        ee = (0, b.GV)(),
        { analyticsLocations: et } = (0, _.Ay)(p.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: en } = (0, R.E)(),
        er = (0, E.A)({
            activity: i,
            user: t,
        }),
        ei = (0, I.A)({
            display: "live",
            user: t,
            activity: i,
            entry: er,
            analyticsLocations: et,
        }),
        ea = (0, T.A)({
            userId: t.id,
            onAction: ei,
        }),
        es = (0, C.A)(i),
        eo = null != es.text && "" !== es.text,
        { largeImage: el, smallImage: ec } = (0, h.XN)(i, W),
        eu = (0, G.A)({
            location: "UserProfileActivityCard",
            user: t,
            currentUser: n,
            activity: i,
            application: W,
            entry: er,
            onClose: Q,
        }),
        ed = () =>
            i.type !== V.$pd.HANG_STATUS || t.id !== n.id || null == X
                ? null
                : (0, r.jsx)(o.m, {
                      text: H.intl.string(H.t.QSOBaq),
                      children: (0, r.jsx)(l.mir, { size: "xxs" }),
                  }),
        ef = () => {
            let e = (0, c.A)(i) ? "crunchyroll" : "default",
                n = en === B.d.MODAL_V2 ? g.w.SIZE_100 : g.w.SIZE_60;
            return i.type === V.$pd.HANG_STATUS
                ? (0, r.jsx)(O.A, {
                      userId: t.id,
                      size: en !== B.d.MODAL_V2 ? 60 : 100,
                      hangStatusActivity: i,
                      className: a()(Y.W9, Y.Sl, { [Y.EX]: en !== B.d.MODAL_V2 }),
                  })
                : null == eu
                  ? (0, r.jsx)(g.d, {
                        image: el,
                        smallImage: ec,
                        size: n,
                        aspectRatio: e,
                        className: Y.Sl,
                    })
                  : (0, r.jsx)(g.d, {
                        image: el,
                        smallImage: ec,
                        size: n,
                        className: Y.mM,
                        aspectRatio: e,
                        onClick: (e) => {
                            ei({ action: "PRESS_IMAGE" }), eu(e);
                        },
                    });
        },
        ep = () =>
            i.type === V.$pd.HANG_STATUS
                ? (0, r.jsx)(j.Q, {
                      variant: "heading-sm/semibold",
                      text: (0, y.Au)(t.id, i),
                      id: J,
                  })
                : (0, f.A)(i) && null != X
                  ? (0, r.jsxs)("div", {
                        className: Y.FH,
                        children: [
                            (0, r.jsx)(l.HKD, {
                                size: "xxs",
                                color: l.LU0.colors.TEXT_DEFAULT,
                                className: Y.Ow,
                            }),
                            (0, r.jsx)(j.Q, {
                                variant: "heading-sm/semibold",
                                text: X.name,
                                id: J,
                            }),
                        ],
                    })
                  : (0, d.A)(i) || (0, S.Cy)(i)
                    ? (0, r.jsx)(j.Q, {
                          variant: "heading-sm/semibold",
                          text: i.name,
                          id: J,
                      })
                    : null != i.details
                      ? (0, r.jsx)(m.O, {
                            href: i.details_url,
                            children: (0, r.jsx)(j.Q, {
                                variant: "heading-sm/semibold",
                                text: i.details,
                                id: J,
                            }),
                        })
                      : (0, r.jsx)(j.Q, {
                            variant: "heading-sm/semibold",
                            text: i.name,
                            id: J,
                        }),
        e_ = () => {
            if (i.type === V.$pd.HANG_STATUS) return null;
            if ((0, f.A)(i) && null != z)
                return (0, r.jsx)(j.A, {
                    variant: "text-xs/normal",
                    text: H.intl.formatToPlainString(H.t["hq/Qze"], { guildName: z.name }),
                    onClick: () => {
                        (0, v.u)(z.id), ei({ action: "OPEN_VOICE_GUILD" }), null == Q || Q();
                    },
                });
            if ((0, d.A)(i))
                return (0, r.jsx)(m.O, {
                    href: i.details_url,
                    children: (0, r.jsx)(j.A, {
                        variant: "text-xs/normal",
                        text: i.details,
                    }),
                });
            if ((0, S.Cy)(i)) {
                var e;
                return (0, r.jsx)(j.A, {
                    variant: "text-xs/normal",
                    text: null == i || null == (e = i.assets) ? void 0 : e.small_text,
                });
            }
            return (0, r.jsx)(m.O, {
                href: i.state_url,
                children: (0, r.jsx)(j.A, {
                    variant: "text-xs/normal",
                    text: i.state,
                }),
            });
        },
        eh = () => {
            var e, t, n, a, s, o, l, c;
            if (i.type === V.$pd.WATCHING) return null;
            if ((0, d.A)(i)) return em();
            if (
                (0, S.Cy)(i) &&
                (null == (e = i.party) ? void 0 : e.size) != null &&
                (null == (t = i.party) ? void 0 : t.size.length) >= 2
            ) {
                let e = H.intl.formatToPlainString(H.t["JC/3xw"], {
                    numSpeakers: null == (a = i.party) ? void 0 : a.size[0],
                    numListeners:
                        (null == (s = i.party) ? void 0 : s.size[1]) - (null == (o = i.party) ? void 0 : o.size[0]),
                });
                return (0, r.jsx)(j.A, {
                    variant: "text-xs/normal",
                    text: e,
                });
            }
            return (null == (n = i.assets) ? void 0 : n.large_text) != null
                ? (0, r.jsx)(m.O, {
                      href: null == (l = i.assets) ? void 0 : l.large_url,
                      children: (0, r.jsx)(j.A, {
                          text: null == (c = i.assets) ? void 0 : c.large_text,
                          variant: "text-xs/normal",
                      }),
                  })
                : null;
        },
        em = () => {
            var e, t, n, a;
            return (null == (e = i.party) ? void 0 : e.size) == null && i.application_id === F.I4
                ? (0, r.jsxs)("div", {
                      className: Y.CI,
                      children: [
                          (0, r.jsx)(m.O, {
                              href: i.state_url,
                              children: (0, r.jsx)(j.A, {
                                  variant: "text-xs/normal",
                                  text: i.state,
                              }),
                          }),
                          (0, r.jsx)(j.A, {
                              variant: "text-xs/normal",
                              text: H.intl.formatToPlainString(H.t["u//9By"], {
                                  count: "0",
                                  max: null != (a = null == W ? void 0 : W.getMaxParticipants()) ? a : 0,
                              }),
                          }),
                      ],
                  })
                : (0, u.A)(i) &&
                    (null == (t = i.party) ? void 0 : t.size) != null &&
                    (null == (n = i.party) ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)("div", {
                        className: Y.CI,
                        children: [
                            (0, r.jsx)(m.O, {
                                href: i.state_url,
                                children: (0, r.jsx)(j.A, {
                                    variant: "text-xs/normal",
                                    text: i.state,
                                }),
                            }),
                            (0, r.jsx)(j.A, {
                                variant: "text-xs/normal",
                                text:
                                    0 === i.party.size[1]
                                        ? H.intl.formatToPlainString(H.t.IM4J4e, { count: i.party.size[0] })
                                        : H.intl.formatToPlainString(H.t["u//9By"], {
                                              count: i.party.size[0],
                                              max: i.party.size[1],
                                          }),
                            }),
                        ],
                    })
                  : null == i.party
                    ? (0, r.jsx)(m.O, {
                          href: i.state_url,
                          children: (0, r.jsx)(j.A, {
                              variant: "text-xs/normal",
                              text: i.state,
                          }),
                      })
                    : null;
        },
        eg = () => {
            if (!(0, N.A)(i)) return null;
            let { start: e, end: t } = i.timestamps;
            return (0, r.jsx)(k.A, {
                start: e,
                end: t,
            });
        },
        eE = () =>
            null == eu
                ? (0, r.jsxs)("div", {
                      children: [ep(), e_(), eh()],
                  })
                : (0, r.jsxs)(l.DUT, {
                      className: Y.sd,
                      onClick: (e) => {
                          ei({ action: "PRESS_TEXT" }), eu(e);
                      },
                      children: [ep(), e_(), eh()],
                  }),
        eb = () =>
            null == z || null == X
                ? null
                : (0, r.jsx)(M.A, {
                      user: t,
                      guild: z,
                      channel: X,
                      onAction: ei,
                      onClose: Q,
                  }),
        ey = () =>
            (0, r.jsx)(w.A, {
                containerClassName: Y.o1,
                activity: i,
                user: t,
                onAction: ei,
                onClose: Q,
                application: W,
            });
    return (0, r.jsx)(_.f5, {
        value: et,
        children: (0, r.jsxs)(x.A, {
            ref: ea,
            className: a()(Y.Nr, Z),
            onAction: ei,
            onClose: Q,
            "aria-labelledby": eo ? "".concat(ee, " ").concat(J) : J,
            children: [
                (0, r.jsx)(
                    L.A,
                    q(
                        K(
                            {
                                textId: ee,
                                tags: ed(),
                            },
                            es,
                        ),
                        {
                            contextMenu: (0, r.jsx)(U.A, {
                                display: "live",
                                user: t,
                                activity: i,
                                entry: er,
                                onClose: Q,
                                appContext: $,
                            }),
                        },
                    ),
                ),
                (0, r.jsx)(A.A, {
                    applicationId: null == W ? void 0 : W.id,
                    questContent: s.u.USER_PROFILE_ACTIVITY,
                    children: (e) =>
                        (0, r.jsxs)("div", {
                            className: Y.rf,
                            ref: e,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: Y.Qs,
                                    children: [
                                        !t.bot && ef(),
                                        (0, r.jsxs)("div", {
                                            className: Y.zH,
                                            children: [
                                                eE(),
                                                !t.bot &&
                                                    (0, r.jsx)(P.A, {
                                                        user: t,
                                                        activity: i,
                                                        className: Y.jp,
                                                    }),
                                                eg(),
                                                en === B.d.MODAL_V2 && ey(),
                                            ],
                                        }),
                                        en === B.d.MODAL && ey(),
                                    ],
                                }),
                                eb(),
                            ],
                        }),
                }),
                en !== B.d.MODAL && en !== B.d.MODAL_V2 && ey(),
                (0, r.jsx)(D.A, {
                    applicationId: null == W ? void 0 : W.id,
                    onAction: ei,
                    onClose: Q,
                    activity: i,
                }),
            ],
        }),
    });
}
