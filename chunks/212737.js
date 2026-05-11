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
    f = n(803306),
    h = n(718213),
    p = n(793574),
    E = n(688810),
    m = n(994500),
    g = n(174459),
    A = n(975571),
    I = n(427262),
    T = n(326084),
    S = n(851746),
    N = n(794783),
    y = n(972007),
    C = n(772707),
    v = n(844222),
    O = n(778712),
    R = n(97808),
    b = n(834730),
    D = n(534890),
    L = n(90517),
    w = n(308528),
    M = n(854627),
    P = n(830543),
    x = n(652215),
    U = n(375708),
    k = n(494025);
let G = (e) => {
        let { recipient: t, status: n, onClose: i } = e,
            { avatarSrc: s, eventHandlers: a } = (0, M.A)({ userId: t?.id, size: O._3.SIZE_56 }),
            l = I.Ay.getName(t),
            u = n === T.o.FAIL;
        return (0, r.jsxs)("div", {
            className: k.w4,
            children: [
                (0, r.jsx)(R.eu, {
                    imageClassName: o()({ [k.jN]: u }),
                    src: s,
                    "aria-label": l,
                    size: O._3.SIZE_32,
                    ...a,
                }),
                u
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(b.E, {
                                  className: k.E0,
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: l,
                              }),
                              (0, r.jsx)(b.E, {
                                  variant: "text-md/medium",
                                  className: k.nT,
                                  color: "text-strong",
                                  children: U.intl.format(U.t.RO3T4B, { userName: l }),
                              }),
                          ],
                      })
                    : (0, r.jsx)(b.E, {
                          variant: "text-md/medium",
                          className: k.Pm,
                          color: "text-strong",
                          children: l,
                      }),
                (0, r.jsx)(d.$, {
                    variant: "secondary",
                    size: "sm",
                    text: U.intl.string(U.t["g33r/P"]),
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
        let { reducedMotion: l } = s.useContext(v.C);
        return null === o
            ? (0, r.jsx)(_.y, {})
            : (0, r.jsx)(C.k, {
                  graphic: l.enabled
                      ? {
                            src: "https://cdn.discordapp.com/assets/content/7d3bb543f57192ba573ca7c515ef59c9cf5c285538f43508ccd8e10637ccd902.svg",
                            type: "image",
                        }
                      : { rive: L.l, type: "rive" },
                  gradientColor: "nitro-pink",
                  title:
                      0 === n.filter((e) => e.status === T.o.SUCCESS).length
                          ? U.intl.string(U.t["7VBEue"])
                          : !0 === a
                            ? U.intl.string(U.t.GP5lbq)
                            : U.intl.string(U.t.tKCltd),
                  subtitle:
                      !0 === a
                          ? U.intl.format(U.t["4gJJfD"], { helpdeskArticle: A.A.getArticleURL(x.MVz.REFERRAL_PROGRAM) })
                          : U.intl.format(U.t.AwGSWl, { helpdeskArticle: A.A.getArticleURL(x.MVz.REFERRAL_PROGRAM) }),
                  onClose: i,
                  transitionState: t,
                  children: (0, r.jsx)("div", {
                      className: k.Hz,
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
            f = (0, u.bG)([S.A], () => S.A.getHasEligibleFriends()),
            [p, E] = s.useState(new Map()),
            [m, g] = s.useState(""),
            T = (0, h.A)(m, 400),
            {
                eligibleUsers: C,
                fetchUsers: v,
                hasError: O,
                isFetching: R,
                resendUsers: b,
            } = (0, y.i)({ searchQuery: T, selectedUsers: p }),
            [D, L] = s.useState(!1),
            w = C.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map());
        return null === a
            ? (0, r.jsx)(_.y, {})
            : O
              ? (0, r.jsx)(l.Modal, {
                    transitionState: t,
                    size: "sm",
                    title: U.intl.string(U.t.lcuio4),
                    subtitle: U.intl.string(U.t["x09+CD"]),
                    onClose: n,
                    actions: [],
                })
              : !1 === f
                ? (0, r.jsx)(l.Modal, {
                      transitionState: t,
                      size: "sm",
                      title: U.intl.string(U.t["2YigPp"]),
                      subtitle: U.intl.format(U.t.OOCbz8, {
                          helpdeskArticle: A.A.getArticleURL(x.MVz.REFERRAL_PROGRAM),
                      }),
                      onClose: n,
                      actions: [],
                  })
                : (0, r.jsx)(l.Modal, {
                      size: "md",
                      transitionState: t,
                      title: U.intl.string(U.t["2dVCLl"]),
                      subtitle: U.intl.string(U.t.DXgoi2),
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
                                  placeholder: 0 === p.size ? U.intl.string(U.t.Kd5RaI) : "",
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
                                      ? U.intl.string(U.t.wpSqAW)
                                      : p.size <= 1
                                        ? U.intl.string(U.t.ItpQxk)
                                        : U.intl.format(U.t.iW2stn, { nTrials: p.size })),
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
                          return (0, r.jsx)(N.A, {
                              users: Array.from(t.values()),
                              isUserSelected: (e) => p.has(e.id),
                              onSelectionChange: (e, t) => {
                                  E((n) => {
                                      let i = new Map(n);
                                      return t ? i.set(e.id, e) : i.delete(e.id), i;
                                  });
                              },
                              isFetching: R,
                              onFetchMore: v,
                              isUserDisabled: (e) =>
                                  null !== a &&
                                  0 !== a &&
                                  [...p.values()].filter((e) => !b.has(e.id)).length >= a &&
                                  !p.has(e.id) &&
                                  !b.has(e.id),
                              searchQuery: T,
                              emptySearchContent: {
                                  header: U.intl.string(U.t["8+ywHD"]),
                                  body: U.intl.string(U.t.CgQmY2),
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
            [_, h] = s.useState(new Map()),
            [p, E] = s.useState(new Map()),
            [g, A] = s.useState(!1);
        return (
            s.useEffect(() => {
                (async () => {
                    let e = new Map();
                    for (let [t, n] of c) {
                        if (m.A.isBlockedOrIgnored(t)) continue;
                        let i = await (0, f.wz)(t);
                        (i.referralStatus = n), e.set(i.id, i);
                    }
                    h(e);
                })();
            }, [c]),
            (0, r.jsx)(l.Modal, {
                size: "md",
                transitionState: n,
                title: U.intl.string(U.t.rKmy8I),
                subtitle: U.intl.string(U.t.VDlF6o),
                onClose: i,
                actions: [],
                actionBarInput:
                    ((t = p.size <= 1 ? U.intl.string(U.t.ItpQxk) : U.intl.format(U.t.iW2stn, { nTrials: p.size })),
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
                children: (0, r.jsx)(N.A, {
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
        { analyticsLocations: f } = (0, E.Ay)([p.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
        h = async (e) => {
            g.default.track(x.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: f });
            let t = await (0, T.xm)(Object.values(e).map((e) => e.id));
            d(e.map((e) => ({ recipient: e, status: t.get(e.id) }))), l(2);
        };
    return null === a
        ? (0, r.jsx)(_.y, {})
        : 2 === o
          ? (0, r.jsx)(F, { transitionState: t, isReminderConfirmation: 3 === i, results: c, onClose: n })
          : 1 === o
            ? (0, r.jsx)(B, { transitionState: t, onClose: n, onShare: h })
            : 3 === o
              ? (0, r.jsx)(H, { transitionState: t, onClose: n, onShare: h })
              : void 0;
};
