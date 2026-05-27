"use strict";
n.d(t, { SelectFriendsModalScreens: () => j, default: () => Y });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(189213),
    u = n(17928),
    c = n(732771),
    d = n(821609),
    _ = n(289873),
    h = n(803306),
    f = n(718213),
    p = n(793574),
    E = n(688810),
    m = n(994500),
    g = n(174459),
    A = n(975571),
    I = n(427262),
    T = n(326084),
    S = n(851746),
    y = n(794783),
    N = n(972007),
    v = n(772707),
    C = n(844222),
    R = n(778712),
    O = n(97808),
    b = n(834730),
    D = n(534890),
    L = n(90517),
    w = n(308528),
    M = n(854627),
    P = n(830543),
    x = n(652215),
    k = n(375708),
    U = n(494025);
let G = (e) => {
        let { recipient: t, status: n, onClose: i } = e,
            { avatarSrc: s, eventHandlers: a } = (0, M.A)({ userId: t?.id, size: R._3.SIZE_56 }),
            l = I.Ay.getName(t),
            u = n === T.o.FAIL;
        return (0, r.jsxs)("div", {
            className: U.w4,
            children: [
                (0, r.jsx)(O.eu, {
                    imageClassName: o()({ [U.jN]: u }),
                    src: s,
                    "aria-label": l,
                    size: R._3.SIZE_32,
                    ...a,
                }),
                u
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(b.E, {
                                  className: U.E0,
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: l,
                              }),
                              (0, r.jsx)(b.E, {
                                  variant: "text-md/medium",
                                  className: U.nT,
                                  color: "text-strong",
                                  children: k.intl.format(k.t.RO3T4B, { userName: l }),
                              }),
                          ],
                      })
                    : (0, r.jsx)(b.E, {
                          variant: "text-md/medium",
                          className: U.Pm,
                          color: "text-strong",
                          children: l,
                      }),
                (0, r.jsx)(d.$, {
                    variant: "secondary",
                    size: "sm",
                    text: k.intl.string(k.t["g33r/P"]),
                    icon: D.o,
                    onClick: () => {
                        var e;
                        return (e = t.id), void ((0, P.default)(), w.A.openPrivateChannel({ recipientIds: e }), i());
                    },
                }),
            ],
        });
    },
    F = (e) => {
        let { transitionState: t, results: n, onClose: i, isReminderConfirmation: a } = e,
            o = (0, u.bG)([S.A], () => S.A.getReferralsRemaining());
        g.default.track(x.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let { reducedMotion: l } = s.useContext(C.C);
        return null === o
            ? (0, r.jsx)(_.y, {})
            : (0, r.jsx)(v.k, {
                  graphic: l.enabled
                      ? {
                            src: "https://cdn.discordapp.com/assets/content/7d3bb543f57192ba573ca7c515ef59c9cf5c285538f43508ccd8e10637ccd902.svg",
                            type: "image",
                        }
                      : { rive: L.l, type: "rive" },
                  gradientColor: "nitro-pink",
                  title:
                      0 === n.filter((e) => e.status === T.o.SUCCESS).length
                          ? k.intl.string(k.t["7VBEue"])
                          : !0 === a
                            ? k.intl.string(k.t.GP5lbq)
                            : k.intl.string(k.t.tKCltd),
                  subtitle:
                      !0 === a
                          ? k.intl.format(k.t["4gJJfD"], { helpdeskArticle: A.A.getArticleURL(x.MVz.REFERRAL_PROGRAM) })
                          : k.intl.format(k.t.AwGSWl, { helpdeskArticle: A.A.getArticleURL(x.MVz.REFERRAL_PROGRAM) }),
                  onClose: i,
                  transitionState: t,
                  children: (0, r.jsx)("div", {
                      className: U.Hz,
                      children: n.map((e) =>
                          (0, r.jsx)(G, { recipient: e.recipient, status: e.status, onClose: i }, e.recipient.id),
                      ),
                  }),
              });
    };
var V = n(468049);
let B = (e) => {
        let { transitionState: t, onClose: n, onShare: i } = e,
            a = (0, u.bG)([S.A], () => S.A.getReferralsRemaining()),
            h = (0, u.bG)([S.A], () => S.A.getHasEligibleFriends()),
            [p, E] = s.useState(new Map()),
            [m, g] = s.useState(""),
            T = (0, f.A)(m, 400),
            {
                eligibleUsers: v,
                fetchUsers: C,
                hasError: R,
                isFetching: O,
                resendUsers: b,
            } = (0, N.i)({ searchQuery: T, selectedUsers: p }),
            [D, L] = s.useState(!1),
            w = v.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map());
        return null === a
            ? (0, r.jsx)(_.y, {})
            : R
              ? (0, r.jsx)(l.Modal, {
                    transitionState: t,
                    size: "sm",
                    title: k.intl.string(k.t.lcuio4),
                    subtitle: k.intl.string(k.t["x09+CD"]),
                    onClose: n,
                    actions: [],
                })
              : !1 === h
                ? (0, r.jsx)(l.Modal, {
                      transitionState: t,
                      size: "sm",
                      title: k.intl.string(k.t["2YigPp"]),
                      subtitle: k.intl.format(k.t.OOCbz8, {
                          helpdeskArticle: A.A.getArticleURL(x.MVz.REFERRAL_PROGRAM),
                      }),
                      onClose: n,
                      actions: [],
                  })
                : (0, r.jsx)(l.Modal, {
                      size: "md",
                      transitionState: t,
                      title: k.intl.string(k.t["2dVCLl"]),
                      subtitle: k.intl.string(k.t.DXgoi2),
                      onClose: n,
                      input: (0, r.jsx)(c.iS, {
                          selectionMode: "multiple",
                          value: Array.from(p.values()),
                          options: Array.from(w.values()),
                          formatOption: (e) => ({ id: e.id, value: e, label: I.Ay.getName(e) }),
                          onSelectionChange: (e) => {
                              let t = Array.isArray(e) ? e : [e],
                                  n = new Map();
                              t.forEach((e) => {
                                  null != e && n.set(e.id, e);
                              }),
                                  E(n);
                          },
                          children: (0, r.jsx)("div", {
                              className: V.c,
                              children: (0, r.jsx)(c.a3, {
                                  placeholder: 0 === p.size ? k.intl.string(k.t.Kd5RaI) : "",
                                  onQueryChange: (e) => {
                                      g(e.target.value);
                                  },
                              }),
                          }),
                      }),
                      actions: [],
                      actionBarInput: ((e) => {
                          let t,
                              { eligibleRecipients: s } = e,
                              a = T.length > 0 && 0 === s.size;
                          return (
                              (t =
                                  !0 === a
                                      ? k.intl.string(k.t.wpSqAW)
                                      : p.size <= 1
                                        ? k.intl.string(k.t.ItpQxk)
                                        : k.intl.format(k.t.iW2stn, { nTrials: p.size })),
                              (0, r.jsx)("div", {
                                  className: o()(V.qr, V.h0),
                                  children: (0, r.jsx)(d.$, {
                                      variant: "primary",
                                      disabled: (0 === p.size && !a) || D,
                                      text: t,
                                      size: "md",
                                      fullWidth: !0,
                                      onClick: async () => {
                                          a ? n() : (L(!0), await i([...p.values()]), L(!1));
                                      },
                                  }),
                              })
                          );
                      })({ eligibleRecipients: w }),
                      children: ((e) => {
                          let { eligibleRecipients: t } = e;
                          return (0, r.jsx)(y.A, {
                              users: Array.from(t.values()),
                              isUserSelected: (e) => p.has(e.id),
                              onSelectionChange: (e, t) => {
                                  E((n) => {
                                      let i = new Map(n);
                                      return t ? i.set(e.id, e) : i.delete(e.id), i;
                                  });
                              },
                              isFetching: O,
                              onFetchMore: C,
                              isUserDisabled: (e) =>
                                  null !== a &&
                                  0 !== a &&
                                  [...p.values()].filter((e) => !b.has(e.id)).length >= a &&
                                  !p.has(e.id) &&
                                  !b.has(e.id),
                              searchQuery: T,
                              emptySearchContent: {
                                  header: k.intl.string(k.t["8+ywHD"]),
                                  body: k.intl.string(k.t.CgQmY2),
                              },
                              className: V.p_,
                          });
                      })({ eligibleRecipients: w }),
                  });
    },
    H = (e) => {
        let t,
            { transitionState: n, onClose: i, onShare: a } = e,
            c = (0, u.bG)([S.A], () => S.A.getRecipientStatus()),
            [_, f] = s.useState(new Map()),
            [p, E] = s.useState(new Map()),
            [g, A] = s.useState(!1);
        return (
            s.useEffect(() => {
                (async () => {
                    let e = new Map();
                    for (let [t, n] of c) {
                        if (m.A.isBlockedOrIgnored(t)) continue;
                        let i = await (0, h.wz)(t);
                        (i.referralStatus = n), e.set(i.id, i);
                    }
                    f(e);
                })();
            }, [c]),
            (0, r.jsx)(l.Modal, {
                size: "md",
                transitionState: n,
                title: k.intl.string(k.t.rKmy8I),
                subtitle: k.intl.string(k.t.VDlF6o),
                onClose: i,
                actions: [],
                actionBarInput:
                    ((t = p.size <= 1 ? k.intl.string(k.t.ItpQxk) : k.intl.format(k.t.iW2stn, { nTrials: p.size })),
                    (0, r.jsx)("div", {
                        className: o()(V.qr, V.h0),
                        children: (0, r.jsx)(d.$, {
                            variant: "primary",
                            disabled: 0 === p.size || g,
                            text: t,
                            size: "md",
                            fullWidth: !0,
                            onClick: async () => {
                                A(!0), await a([...p.values()]), A(!1);
                            },
                        }),
                    })),
                children: (0, r.jsx)(y.A, {
                    users: Array.from(_.values()),
                    isUserSelected: (e) => p.has(e.id),
                    isUserDisabled: (e) => e.referralStatus === T.aK.REDEEMED,
                    onSelectionChange: (e, t) => {
                        E((n) => {
                            let i = new Map(n);
                            return t ? i.set(e.id, e) : i.delete(e.id), i;
                        });
                    },
                    className: V.p_,
                }),
            })
        );
    };
var j =
    (((i = {})[(i.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
    (i[(i.CONFIRMATION = 2)] = "CONFIRMATION"),
    (i[(i.REMINDER = 3)] = "REMINDER"),
    i);
let Y = (e) => {
    let { transitionState: t, onClose: n, startingScreen: i = 1 } = e,
        a = (0, u.bG)([S.A], () => S.A.getReferralsRemaining()),
        [o, l] = s.useState(i),
        [c, d] = s.useState([]),
        { analyticsLocations: h } = (0, E.Ay)([p.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
        f = async (e) => {
            g.default.track(x.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: h });
            let t = await (0, T.xm)(Object.values(e).map((e) => e.id));
            d(e.map((e) => ({ recipient: e, status: t.get(e.id) }))), l(2);
        };
    return null === a
        ? (0, r.jsx)(_.y, {})
        : 2 === o
          ? (0, r.jsx)(F, { transitionState: t, isReminderConfirmation: 3 === i, results: c, onClose: n })
          : 1 === o
            ? (0, r.jsx)(B, { transitionState: t, onClose: n, onShare: f })
            : 3 === o
              ? (0, r.jsx)(H, { transitionState: t, onClose: n, onShare: f })
              : void 0;
};
