a.d(t, { SelectFriendsModalScreens: () => B, default: () => z });
var s,
    i = a(627968),
    n = a(64700),
    r = a(503698),
    l = a.n(r),
    c = a(189213),
    o = a(17928),
    d = a(732771),
    u = a(821609),
    m = a(289873),
    A = a(803306),
    N = a(718213),
    g = a(793574),
    p = a(688810),
    x = a(994500),
    E = a(174459),
    h = a(975571),
    f = a(427262),
    C = a(326084),
    R = a(851746),
    _ = a(794783),
    I = a(972007),
    T = a(772707),
    b = a(844222),
    j = a(778712),
    S = a(97808),
    v = a(834730),
    P = a(534890),
    y = a(90517),
    O = a(308528),
    M = a(854627),
    L = a(830543),
    D = a(652215),
    U = a(375708),
    G = a(494025);
let k = (e) => {
        let { recipient: t, status: a, onClose: s } = e,
            { avatarSrc: n, eventHandlers: r } = (0, M.A)({ userId: t?.id, size: j._3.SIZE_56 }),
            c = f.Ay.getName(t),
            o = a === C.o.FAIL;
        return (0, i.jsxs)("div", {
            className: G.w4,
            children: [
                (0, i.jsx)(S.eu, {
                    imageClassName: l()({ [G.jN]: o }),
                    src: n,
                    "aria-label": c,
                    size: j._3.SIZE_32,
                    ...r,
                }),
                o
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(v.E, {
                                  className: G.E0,
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: c,
                              }),
                              (0, i.jsx)(v.E, {
                                  variant: "text-md/medium",
                                  className: G.nT,
                                  color: "text-strong",
                                  children: U.intl.format(U.t.RO3T4B, { userName: c }),
                              }),
                          ],
                      })
                    : (0, i.jsx)(v.E, {
                          variant: "text-md/medium",
                          className: G.Pm,
                          color: "text-strong",
                          children: c,
                      }),
                (0, i.jsx)(u.$, {
                    variant: "secondary",
                    size: "sm",
                    text: U.intl.string(U.t["g33r/P"]),
                    icon: P.o,
                    onClick: () => {
                        var e;
                        return (e = t.id), void ((0, L.default)(), O.A.openPrivateChannel({ recipientIds: e }), s());
                    },
                }),
            ],
        });
    },
    F = (e) => {
        let { transitionState: t, results: a, onClose: s, isReminderConfirmation: r } = e,
            l = (0, o.bG)([R.A], () => R.A.getReferralsRemaining());
        E.default.track(D.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let { reducedMotion: c } = n.useContext(b.C);
        return null === l
            ? (0, i.jsx)(m.y, {})
            : (0, i.jsx)(T.k, {
                  graphic: c.enabled
                      ? {
                            src: "https://cdn.discordapp.com/assets/content/7d3bb543f57192ba573ca7c515ef59c9cf5c285538f43508ccd8e10637ccd902.svg",
                            type: "image",
                        }
                      : { rive: y.l, type: "rive" },
                  gradientColor: "nitro-pink",
                  title:
                      0 === a.filter((e) => e.status === C.o.SUCCESS).length
                          ? U.intl.string(U.t["7VBEue"])
                          : !0 === r
                            ? U.intl.string(U.t.GP5lbq)
                            : U.intl.string(U.t.tKCltd),
                  subtitle:
                      !0 === r
                          ? U.intl.format(U.t["4gJJfD"], { helpdeskArticle: h.A.getArticleURL(D.MVz.REFERRAL_PROGRAM) })
                          : U.intl.format(U.t.AwGSWl, { helpdeskArticle: h.A.getArticleURL(D.MVz.REFERRAL_PROGRAM) }),
                  onClose: s,
                  transitionState: t,
                  children: (0, i.jsx)("div", {
                      className: G.Hz,
                      children: a.map((e) =>
                          (0, i.jsx)(k, { recipient: e.recipient, status: e.status, onClose: s }, e.recipient.id),
                      ),
                  }),
              });
    };
var w = a(468049);
let H = (e) => {
        let { transitionState: t, onClose: a, onShare: s } = e,
            r = (0, o.bG)([R.A], () => R.A.getReferralsRemaining()),
            A = (0, o.bG)([R.A], () => R.A.getHasEligibleFriends()),
            [g, p] = n.useState(new Map()),
            [x, E] = n.useState(""),
            C = (0, N.A)(x, 400),
            {
                eligibleUsers: T,
                fetchUsers: b,
                hasError: j,
                isFetching: S,
                resendUsers: v,
            } = (0, I.i)({ searchQuery: C, selectedUsers: g }),
            [P, y] = n.useState(!1),
            O = T.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map());
        return null === r
            ? (0, i.jsx)(m.y, {})
            : j
              ? (0, i.jsx)(c.Modal, {
                    transitionState: t,
                    size: "sm",
                    title: U.intl.string(U.t.lcuio4),
                    subtitle: U.intl.string(U.t["x09+CD"]),
                    onClose: a,
                    actions: [],
                })
              : !1 === A
                ? (0, i.jsx)(c.Modal, {
                      transitionState: t,
                      size: "sm",
                      title: U.intl.string(U.t["2YigPp"]),
                      subtitle: U.intl.format(U.t.OOCbz8, {
                          helpdeskArticle: h.A.getArticleURL(D.MVz.REFERRAL_PROGRAM),
                      }),
                      onClose: a,
                      actions: [],
                  })
                : (0, i.jsx)(c.Modal, {
                      size: "md",
                      transitionState: t,
                      title: U.intl.string(U.t["2dVCLl"]),
                      subtitle: U.intl.string(U.t.DXgoi2),
                      onClose: a,
                      input: (0, i.jsx)(d.iS, {
                          selectionMode: "multiple",
                          value: Array.from(g.values()),
                          options: Array.from(O.values()),
                          formatOption: (e) => ({ id: e.id, value: e, label: f.Ay.getName(e) }),
                          onSelectionChange: (e) => {
                              let t = Array.isArray(e) ? e : [e],
                                  a = new Map();
                              t.forEach((e) => {
                                  null != e && a.set(e.id, e);
                              }),
                                  p(a);
                          },
                          children: (0, i.jsx)("div", {
                              className: w.c,
                              children: (0, i.jsx)(d.a3, {
                                  placeholder: 0 === g.size ? U.intl.string(U.t.Kd5RaI) : "",
                                  onQueryChange: (e) => {
                                      E(e.target.value);
                                  },
                              }),
                          }),
                      }),
                      actions: [],
                      actionBarInput: ((e) => {
                          let t,
                              { eligibleRecipients: n } = e,
                              r = C.length > 0 && 0 === n.size;
                          return (
                              (t =
                                  !0 === r
                                      ? U.intl.string(U.t.wpSqAW)
                                      : g.size <= 1
                                        ? U.intl.string(U.t.ItpQxk)
                                        : U.intl.format(U.t.iW2stn, { nTrials: g.size })),
                              (0, i.jsx)("div", {
                                  className: l()(w.qr, w.h0),
                                  children: (0, i.jsx)(u.$, {
                                      variant: "primary",
                                      disabled: (0 === g.size && !r) || P,
                                      text: t,
                                      size: "md",
                                      fullWidth: !0,
                                      onClick: async () => {
                                          r ? a() : (y(!0), await s([...g.values()]), y(!1));
                                      },
                                  }),
                              })
                          );
                      })({ eligibleRecipients: O }),
                      children: ((e) => {
                          let { eligibleRecipients: t } = e;
                          return (0, i.jsx)(_.A, {
                              users: Array.from(t.values()),
                              isUserSelected: (e) => g.has(e.id),
                              onSelectionChange: (e, t) => {
                                  p((a) => {
                                      let s = new Map(a);
                                      return t ? s.set(e.id, e) : s.delete(e.id), s;
                                  });
                              },
                              isFetching: S,
                              onFetchMore: b,
                              isUserDisabled: (e) =>
                                  null !== r &&
                                  0 !== r &&
                                  [...g.values()].filter((e) => !v.has(e.id)).length >= r &&
                                  !g.has(e.id) &&
                                  !v.has(e.id),
                              searchQuery: C,
                              emptySearchContent: {
                                  header: U.intl.string(U.t["8+ywHD"]),
                                  body: U.intl.string(U.t.CgQmY2),
                              },
                              className: w.p_,
                          });
                      })({ eligibleRecipients: O }),
                  });
    },
    V = (e) => {
        let t,
            { transitionState: a, onClose: s, onShare: r } = e,
            d = (0, o.bG)([R.A], () => R.A.getRecipientStatus()),
            [m, N] = n.useState(new Map()),
            [g, p] = n.useState(new Map()),
            [E, h] = n.useState(!1);
        return (
            n.useEffect(() => {
                (async () => {
                    let e = new Map();
                    for (let [t, a] of d) {
                        if (x.A.isBlockedOrIgnored(t)) continue;
                        let s = await (0, A.wz)(t);
                        (s.referralStatus = a), e.set(s.id, s);
                    }
                    N(e);
                })();
            }, [d]),
            (0, i.jsx)(c.Modal, {
                size: "md",
                transitionState: a,
                title: U.intl.string(U.t.rKmy8I),
                subtitle: U.intl.string(U.t.VDlF6o),
                onClose: s,
                actions: [],
                actionBarInput:
                    ((t = g.size <= 1 ? U.intl.string(U.t.ItpQxk) : U.intl.format(U.t.iW2stn, { nTrials: g.size })),
                    (0, i.jsx)("div", {
                        className: l()(w.qr, w.h0),
                        children: (0, i.jsx)(u.$, {
                            variant: "primary",
                            disabled: 0 === g.size || E,
                            text: t,
                            size: "md",
                            fullWidth: !0,
                            onClick: async () => {
                                h(!0), await r([...g.values()]), h(!1);
                            },
                        }),
                    })),
                children: (0, i.jsx)(_.A, {
                    users: Array.from(m.values()),
                    isUserSelected: (e) => g.has(e.id),
                    isUserDisabled: (e) => e.referralStatus === C.aK.REDEEMED,
                    onSelectionChange: (e, t) => {
                        p((a) => {
                            let s = new Map(a);
                            return t ? s.set(e.id, e) : s.delete(e.id), s;
                        });
                    },
                    className: w.p_,
                }),
            })
        );
    };
var B =
    (((s = {})[(s.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
    (s[(s.CONFIRMATION = 2)] = "CONFIRMATION"),
    (s[(s.REMINDER = 3)] = "REMINDER"),
    s);
let z = (e) => {
    let { transitionState: t, onClose: a, startingScreen: s = 1 } = e,
        r = (0, o.bG)([R.A], () => R.A.getReferralsRemaining()),
        [l, c] = n.useState(s),
        [d, u] = n.useState([]),
        { analyticsLocations: A } = (0, p.Ay)([g.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
        N = async (e) => {
            E.default.track(D.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: A });
            let t = await (0, C.xm)(Object.values(e).map((e) => e.id));
            u(e.map((e) => ({ recipient: e, status: t.get(e.id) }))), c(2);
        };
    if (null === r) return (0, i.jsx)(m.y, {});
    switch (l) {
        case 2:
            return (0, i.jsx)(F, { transitionState: t, isReminderConfirmation: 3 === s, results: d, onClose: a });
        case 1:
            return (0, i.jsx)(H, { transitionState: t, onClose: a, onShare: N });
        case 3:
            return (0, i.jsx)(V, { transitionState: t, onClose: a, onShare: N });
        default:
            return;
    }
};
