n.d(t, {
    A: () => J,
});
var r = n(627968);
n(64700);
var i = n(503698),
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
    y = n(915089),
    b = n(886019),
    O = n(559405),
    v = n(753845),
    A = n(345942),
    I = n(82149),
    S = n(92240),
    T = n(257367),
    C = n(317572),
    N = n(53257),
    w = n(657331),
    R = n(939496),
    P = n(964195),
    D = n(167272),
    x = n(282197),
    L = n(624951),
    j = n(584904),
    M = n(351638),
    k = n(531648),
    U = n(910607),
    G = n(753713),
    V = n(8738),
    F = n(707794),
    B = n(518477),
    H = n(652215),
    Y = n(360469),
    W = n(996988),
    K = n(985018),
    z = n(380297);

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

function Z(e) {
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

function X(e, t) {
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

function Q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : X(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function J(e) {
    let {
            user: t,
            currentUser: n,
            activity: i,
            application: q,
            voiceGuild: X,
            voiceChannel: J,
            className: $,
            onClose: ee,
            appContext: et,
        } = e,
        en = (0, y.GV)(),
        er = (0, y.GV)(),
        { analyticsLocations: ei } = (0, _.Ay)(p.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: ea } = (0, R.E)(),
        es = (0, E.A)({
            activity: i,
            user: t,
        }),
        eo = (0, S.A)({
            display: "live",
            user: t,
            activity: i,
            entry: es,
            analyticsLocations: ei,
        }),
        el = (0, T.A)({
            userId: t.id,
            onAction: eo,
        }),
        ec = (0, C.A)(i),
        eu = null != ec.text && "" !== ec.text,
        { largeImage: ed, smallImage: ef } = (0, h.XN)(i, q),
        ep = (0, F.A)({
            location: "UserProfileActivityCard",
            user: t,
            currentUser: n,
            activity: i,
            application: q,
            entry: es,
            onClose: ee,
        }),
        e_ = () =>
            i.type !== H.$pd.HANG_STATUS || t.id !== n.id || null == J
                ? null
                : (0, r.jsx)(o.m, {
                      text: K.intl.string(K.t.QSOBaq),
                      children: (0, r.jsx)(l.mir, {
                          size: "xxs",
                      }),
                  }),
        eh = () => {
            let e = (0, c.A)(i) ? "crunchyroll" : "default",
                n = ea === W.d.MODAL_V2 ? g.w.SIZE_100 : g.w.SIZE_60;
            return i.type === H.$pd.HANG_STATUS
                ? (0, r.jsx)(O.A, {
                      userId: t.id,
                      size: ea !== W.d.MODAL_V2 ? 60 : 100,
                      hangStatusActivity: i,
                      className: a()(z.W9, z.Sl, {
                          [z.EX]: ea !== W.d.MODAL_V2,
                      }),
                  })
                : null == ep
                  ? (0, r.jsx)(g.d, {
                        image: ed,
                        smallImage: ef,
                        size: n,
                        aspectRatio: e,
                        className: z.Sl,
                    })
                  : (0, r.jsx)(g.d, {
                        image: ed,
                        smallImage: ef,
                        size: n,
                        className: z.mM,
                        aspectRatio: e,
                        onClick: (e) => {
                            eo({
                                action: "PRESS_IMAGE",
                            }),
                                ep(e);
                        },
                    });
        },
        em = () =>
            i.type === H.$pd.HANG_STATUS
                ? (0, r.jsx)(k.Q, {
                      variant: "heading-sm/semibold",
                      text: (0, b.Au)(t.id, i),
                      id: en,
                  })
                : (0, f.A)(i) && null != J
                  ? (0, r.jsxs)("div", {
                        className: z.FH,
                        children: [
                            (0, r.jsx)(l.HKD, {
                                size: "xxs",
                                color: l.LU0.colors.TEXT_DEFAULT,
                                className: z.Ow,
                            }),
                            (0, r.jsx)(k.Q, {
                                variant: "heading-sm/semibold",
                                text: J.name,
                                id: en,
                            }),
                        ],
                    })
                  : (0, d.A)(i) || (0, I.Cy)(i)
                    ? (0, r.jsx)(k.Q, {
                          variant: "heading-sm/semibold",
                          text: i.name,
                          id: en,
                      })
                    : null != i.details
                      ? (0, r.jsx)(m.O, {
                            href: i.details_url,
                            children: (0, r.jsx)(k.Q, {
                                variant: "heading-sm/semibold",
                                text: i.details,
                                id: en,
                            }),
                        })
                      : (0, r.jsx)(k.Q, {
                            variant: "heading-sm/semibold",
                            text: i.name,
                            id: en,
                        }),
        eg = () => {
            if (i.type === H.$pd.HANG_STATUS) return null;
            if ((0, f.A)(i) && null != X)
                return (0, r.jsx)(k.A, {
                    variant: "text-xs/normal",
                    text: K.intl.formatToPlainString(K.t["hq/Qze"], {
                        guildName: X.name,
                    }),
                    onClick: () => {
                        (0, A.u)(X.id),
                            eo({
                                action: "OPEN_VOICE_GUILD",
                            }),
                            null == ee || ee();
                    },
                });
            if ((0, d.A)(i))
                return (0, r.jsx)(m.O, {
                    href: i.details_url,
                    children: (0, r.jsx)(k.A, {
                        variant: "text-xs/normal",
                        text: i.details,
                    }),
                });
            if ((0, I.Cy)(i)) {
                var e;
                return (0, r.jsx)(k.A, {
                    variant: "text-xs/normal",
                    text: null == i || null == (e = i.assets) ? void 0 : e.small_text,
                });
            }
            return (0, r.jsx)(m.O, {
                href: i.state_url,
                children: (0, r.jsx)(k.A, {
                    variant: "text-xs/normal",
                    text: i.state,
                }),
            });
        },
        eE = () => {
            var e, t, n, a, s, o, l, c;
            if (i.type === H.$pd.WATCHING) return null;
            if ((0, d.A)(i)) return ey();
            if (
                (0, I.Cy)(i) &&
                (null == (e = i.party) ? void 0 : e.size) != null &&
                (null == (t = i.party) ? void 0 : t.size.length) >= 2
            ) {
                let e = K.intl.formatToPlainString(K.t["JC/3xw"], {
                    numSpeakers: null == (a = i.party) ? void 0 : a.size[0],
                    numListeners:
                        (null == (s = i.party) ? void 0 : s.size[1]) - (null == (o = i.party) ? void 0 : o.size[0]),
                });
                return (0, r.jsx)(k.A, {
                    variant: "text-xs/normal",
                    text: e,
                });
            }
            return (null == (n = i.assets) ? void 0 : n.large_text) != null
                ? (0, r.jsx)(m.O, {
                      href: null == (l = i.assets) ? void 0 : l.large_url,
                      children: (0, r.jsx)(k.A, {
                          text: null == (c = i.assets) ? void 0 : c.large_text,
                          variant: "text-xs/normal",
                      }),
                  })
                : null;
        },
        ey = () => {
            var e, t, n, a;
            return (null == (e = i.party) ? void 0 : e.size) == null && i.application_id === Y.I4
                ? (0, r.jsxs)("div", {
                      className: z.CI,
                      children: [
                          (0, r.jsx)(m.O, {
                              href: i.state_url,
                              children: (0, r.jsx)(k.A, {
                                  variant: "text-xs/normal",
                                  text: i.state,
                              }),
                          }),
                          (0, r.jsx)(k.A, {
                              variant: "text-xs/normal",
                              text: K.intl.formatToPlainString(K.t["u//9By"], {
                                  count: "0",
                                  max: null != (a = null == q ? void 0 : q.getMaxParticipants()) ? a : 0,
                              }),
                          }),
                      ],
                  })
                : (0, u.A)(i) &&
                    (null == (t = i.party) ? void 0 : t.size) != null &&
                    (null == (n = i.party) ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)("div", {
                        className: z.CI,
                        children: [
                            (0, r.jsx)(m.O, {
                                href: i.state_url,
                                children: (0, r.jsx)(k.A, {
                                    variant: "text-xs/normal",
                                    text: i.state,
                                }),
                            }),
                            (0, r.jsx)(k.A, {
                                variant: "text-xs/normal",
                                text:
                                    0 === i.party.size[1]
                                        ? K.intl.formatToPlainString(K.t.IM4J4e, {
                                              count: i.party.size[0],
                                          })
                                        : K.intl.formatToPlainString(K.t["u//9By"], {
                                              count: i.party.size[0],
                                              max: i.party.size[1],
                                          }),
                            }),
                        ],
                    })
                  : null == i.party
                    ? (0, r.jsx)(m.O, {
                          href: i.state_url,
                          children: (0, r.jsx)(k.A, {
                              variant: "text-xs/normal",
                              text: i.state,
                          }),
                      })
                    : null;
        },
        eb = () => {
            if (!(0, N.A)(i)) return null;
            let { start: e, end: t } = i.timestamps;
            return (0, r.jsx)(G.A, {
                start: e,
                end: t,
            });
        },
        eO = () =>
            null == ep
                ? (0, r.jsxs)("div", {
                      children: [em(), eg(), eE()],
                  })
                : (0, r.jsxs)(l.DUT, {
                      className: z.sd,
                      onClick: (e) => {
                          eo({
                              action: "PRESS_TEXT",
                          }),
                              ep(e);
                      },
                      children: [em(), eg(), eE()],
                  }),
        ev = () =>
            null == X || null == J
                ? null
                : (0, r.jsx)(U.A, {
                      user: t,
                      guild: X,
                      channel: J,
                      onAction: eo,
                      onClose: ee,
                  }),
        eA = () =>
            (0, r.jsx)(D.A, {
                containerClassName: z.o1,
                activity: i,
                user: t,
                onAction: eo,
                onClose: ee,
                application: q,
            });
    return (0, r.jsx)(_.f5, {
        value: ei,
        children: (0, r.jsxs)(j.A, {
            ref: el,
            className: a()(z.Nr, $),
            onAction: eo,
            onClose: ee,
            "aria-labelledby": eu ? "".concat(er, " ").concat(en) : en,
            children: [
                (0, r.jsx)(
                    M.A,
                    Q(
                        Z(
                            {
                                textId: er,
                                tags: e_(),
                            },
                            ec,
                        ),
                        {
                            contextMenu: (0, r.jsx)(V.A, {
                                display: "live",
                                user: t,
                                activity: i,
                                entry: es,
                                onClose: ee,
                                appContext: et,
                            }),
                        },
                    ),
                ),
                (0, r.jsx)(v.A, {
                    applicationId: null == q ? void 0 : q.id,
                    questContent: s.u.USER_PROFILE_ACTIVITY,
                    children: (e) =>
                        (0, r.jsxs)("div", {
                            className: z.rf,
                            ref: e,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: z.Qs,
                                    children: [
                                        !t.bot && eh(),
                                        (0, r.jsxs)("div", {
                                            className: z.zH,
                                            children: [
                                                eO(),
                                                !t.bot &&
                                                    (0, r.jsx)(x.A, {
                                                        user: t,
                                                        activity: i,
                                                        className: z.jp,
                                                    }),
                                                eb(),
                                                ea === W.d.MODAL_V2 && eA(),
                                            ],
                                        }),
                                        ea === W.d.MODAL && eA(),
                                    ],
                                }),
                                ev(),
                            ],
                        }),
                }),
                ea !== W.d.MODAL &&
                    ea !== W.d.MODAL_V2 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            eA(),
                            (0, r.jsx)(P.A, {
                                className: z.AB,
                                userId: t.id,
                                activityApplication: q,
                                onClickViewMore: (e) => {
                                    e.stopPropagation(),
                                        eo({
                                            action: "PRESS_APPLICATION_WIDGET_PREVIEW_VIEW_MORE",
                                        }),
                                        null == ee || ee(),
                                        (0, w.openUserProfileModal)({
                                            userId: t.id,
                                            tabSection: B.RP.WIDGETS,
                                        });
                                },
                            }),
                        ],
                    }),
                (0, r.jsx)(L.A, {
                    applicationId: null == q ? void 0 : q.id,
                    onAction: eo,
                    onClose: ee,
                    activity: i,
                }),
            ],
        }),
    });
}
