i.d(t, { SelectFriendsModalScreens: () => H, default: () => z });
var s,
    a = i(627968),
    n = i(64700),
    r = i(503698),
    l = i.n(r),
    c = i(189213),
    d = i(17928),
    o = i(732771),
    u = i(821609),
    m = i(289873),
    A = i(803306),
    p = i(718213),
    g = i(793574),
    N = i(688810),
    x = i(994500),
    E = i(174459),
    h = i(975571),
    f = i(427262),
    _ = i(326084),
    R = i(851746),
    C = i(794783),
    I = i(972007),
    T = i(772707),
    b = i(844222),
    S = i(778712),
    j = i(97808),
    v = i(834730),
    P = i(534890),
    O = i(90517),
    y = i(308528),
    M = i(854627),
    L = i(779733),
    D = i(652215),
    U = i(375708),
    G = i(494025);
let k = (e) => {
        let { recipient: t, status: i, onClose: s } = e,
            { avatarSrc: n, eventHandlers: r } = (0, M.A)({ userId: t?.id, size: S._3.SIZE_56 }),
            c = f.Ay.getName(t),
            d = i === _.o.FAIL;
        return (0, a.jsxs)("div", {
            className: G.w4,
            children: [
                (0, a.jsx)(j.eu, {
                    imageClassName: l()({ [G.jN]: d }),
                    src: n,
                    "aria-label": c,
                    size: S._3.SIZE_32,
                    ...r,
                }),
                d
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(v.E, {
                                  className: G.E0,
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: c,
                              }),
                              (0, a.jsx)(v.E, {
                                  variant: "text-md/medium",
                                  className: G.nT,
                                  color: "text-strong",
                                  children: U.intl.format(U.t.RO3T4B, { userName: c }),
                              }),
                          ],
                      })
                    : (0, a.jsx)(v.E, {
                          variant: "text-md/medium",
                          className: G.Pm,
                          color: "text-strong",
                          children: c,
                      }),
                (0, a.jsx)(u.$, {
                    variant: "secondary",
                    size: "sm",
                    text: U.intl.string(U.t["g33r/P"]),
                    icon: P.o,
                    onClick: () => {
                        var e;
                        return (e = t.id), void ((0, L.default)(), y.A.openPrivateChannel({ recipientIds: e }), s());
                    },
                }),
            ],
        });
    },
    F = (e) => {
        let { transitionState: t, results: i, onClose: s, isReminderConfirmation: r } = e,
            l = (0, d.bG)([R.A], () => R.A.getReferralsRemaining());
        E.default.track(D.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let { reducedMotion: c } = n.useContext(b.C);
        return null === l
            ? (0, a.jsx)(m.y, {})
            : (0, a.jsx)(T.k, {
                  graphic: c.enabled
                      ? {
                            src: "https://cdn.discordapp.com/assets/content/7d3bb543f57192ba573ca7c515ef59c9cf5c285538f43508ccd8e10637ccd902.svg",
                            type: "image",
                        }
                      : { rive: O.l, type: "rive" },
                  gradientColor: "nitro-pink",
                  title:
                      0 === i.filter((e) => e.status === _.o.SUCCESS).length
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
                  children: (0, a.jsx)("div", {
                      className: G.Hz,
                      children: i.map((e) =>
                          (0, a.jsx)(k, { recipient: e.recipient, status: e.status, onClose: s }, e.recipient.id),
                      ),
                  }),
              });
    };
var w = i(468049);
let V = (e) => {
        let { transitionState: t, onClose: i, onShare: s } = e,
            r = (0, d.bG)([R.A], () => R.A.getReferralsRemaining()),
            A = (0, d.bG)([R.A], () => R.A.getHasEligibleFriends()),
            [g, N] = n.useState(new Map()),
            [x, E] = n.useState(""),
            _ = (0, p.A)(x, 400),
            {
                eligibleUsers: T,
                fetchUsers: b,
                hasError: S,
                isFetching: j,
                resendUsers: v,
            } = (0, I.i)({ searchQuery: _, selectedUsers: g }),
            [P, O] = n.useState(!1),
            y = T.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map());
        return null === r
            ? (0, a.jsx)(m.y, {})
            : S
              ? (0, a.jsx)(c.Modal, {
                    transitionState: t,
                    size: "sm",
                    title: U.intl.string(U.t.lcuio4),
                    subtitle: U.intl.string(U.t["x09+CD"]),
                    onClose: i,
                    actions: [],
                })
              : !1 === A
                ? (0, a.jsx)(c.Modal, {
                      transitionState: t,
                      size: "sm",
                      title: U.intl.string(U.t["2YigPp"]),
                      subtitle: U.intl.format(U.t.OOCbz8, {
                          helpdeskArticle: h.A.getArticleURL(D.MVz.REFERRAL_PROGRAM),
                      }),
                      onClose: i,
                      actions: [],
                  })
                : (0, a.jsx)(c.Modal, {
                      size: "md",
                      transitionState: t,
                      title: U.intl.string(U.t["2dVCLl"]),
                      subtitle: U.intl.string(U.t.DXgoi2),
                      onClose: i,
                      input: (0, a.jsx)(o.iS, {
                          selectionMode: "multiple",
                          value: Array.from(g.values()),
                          options: Array.from(y.values()),
                          formatOption: (e) => ({ id: e.id, value: e, label: f.Ay.getName(e) }),
                          onSelectionChange: (e) => {
                              let t = Array.isArray(e) ? e : [e],
                                  i = new Map();
                              t.forEach((e) => {
                                  null != e && i.set(e.id, e);
                              }),
                                  N(i);
                          },
                          children: (0, a.jsx)("div", {
                              className: w.c,
                              children: (0, a.jsx)(o.a3, {
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
                              r = _.length > 0 && 0 === n.size;
                          return (
                              (t =
                                  !0 === r
                                      ? U.intl.string(U.t.wpSqAW)
                                      : g.size <= 1
                                        ? U.intl.string(U.t.ItpQxk)
                                        : U.intl.format(U.t.iW2stn, { nTrials: g.size })),
                              (0, a.jsx)("div", {
                                  className: l()(w.qr, w.h0),
                                  children: (0, a.jsx)(u.$, {
                                      variant: "primary",
                                      disabled: (0 === g.size && !r) || P,
                                      text: t,
                                      size: "md",
                                      fullWidth: !0,
                                      onClick: async () => {
                                          r ? i() : (O(!0), await s([...g.values()]), O(!1));
                                      },
                                  }),
                              })
                          );
                      })({ eligibleRecipients: y }),
                      children: ((e) => {
                          let { eligibleRecipients: t } = e;
                          return (0, a.jsx)(C.A, {
                              users: Array.from(t.values()),
                              isUserSelected: (e) => g.has(e.id),
                              onSelectionChange: (e, t) => {
                                  N((i) => {
                                      let s = new Map(i);
                                      return t ? s.set(e.id, e) : s.delete(e.id), s;
                                  });
                              },
                              isFetching: j,
                              onFetchMore: b,
                              isUserDisabled: (e) =>
                                  null !== r &&
                                  0 !== r &&
                                  [...g.values()].filter((e) => !v.has(e.id)).length >= r &&
                                  !g.has(e.id) &&
                                  !v.has(e.id),
                              searchQuery: _,
                              emptySearchContent: {
                                  header: U.intl.string(U.t["8+ywHD"]),
                                  body: U.intl.string(U.t.CgQmY2),
                              },
                              className: w.p_,
                          });
                      })({ eligibleRecipients: y }),
                  });
    },
    B = (e) => {
        let t,
            { transitionState: i, onClose: s, onShare: r } = e,
            o = (0, d.bG)([R.A], () => R.A.getRecipientStatus()),
            [m, p] = n.useState(new Map()),
            [g, N] = n.useState(new Map()),
            [E, h] = n.useState(!1);
        return (
            n.useEffect(() => {
                (async () => {
                    let e = new Map();
                    for (let [t, i] of o) {
                        if (x.A.isBlockedOrIgnored(t)) continue;
                        let s = await (0, A.wz)(t);
                        (s.referralStatus = i), e.set(s.id, s);
                    }
                    p(e);
                })();
            }, [o]),
            (0, a.jsx)(c.Modal, {
                size: "md",
                transitionState: i,
                title: U.intl.string(U.t.rKmy8I),
                subtitle: U.intl.string(U.t.VDlF6o),
                onClose: s,
                actions: [],
                actionBarInput:
                    ((t = g.size <= 1 ? U.intl.string(U.t.ItpQxk) : U.intl.format(U.t.iW2stn, { nTrials: g.size })),
                    (0, a.jsx)("div", {
                        className: l()(w.qr, w.h0),
                        children: (0, a.jsx)(u.$, {
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
                children: (0, a.jsx)(C.A, {
                    users: Array.from(m.values()),
                    isUserSelected: (e) => g.has(e.id),
                    isUserDisabled: (e) => e.referralStatus === _.aK.REDEEMED,
                    onSelectionChange: (e, t) => {
                        N((i) => {
                            let s = new Map(i);
                            return t ? s.set(e.id, e) : s.delete(e.id), s;
                        });
                    },
                    className: w.p_,
                }),
            })
        );
    };
var H =
    (((s = {})[(s.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
    (s[(s.CONFIRMATION = 2)] = "CONFIRMATION"),
    (s[(s.REMINDER = 3)] = "REMINDER"),
    s);
let z = (e) => {
    let { transitionState: t, onClose: i, startingScreen: s = 1 } = e,
        r = (0, d.bG)([R.A], () => R.A.getReferralsRemaining()),
        [l, c] = n.useState(s),
        [o, u] = n.useState([]),
        { analyticsLocations: A } = (0, N.Ay)([g.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
        p = async (e) => {
            E.default.track(D.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: A });
            let t = await (0, _.xm)(Object.values(e).map((e) => e.id));
            u(e.map((e) => ({ recipient: e, status: t.get(e.id) }))), c(2);
        };
    return null === r
        ? (0, a.jsx)(m.y, {})
        : 2 === l
          ? (0, a.jsx)(F, { transitionState: t, isReminderConfirmation: 3 === s, results: o, onClose: i })
          : 1 === l
            ? (0, a.jsx)(V, { transitionState: t, onClose: i, onShare: p })
            : 3 === l
              ? (0, a.jsx)(B, { transitionState: t, onClose: i, onShare: p })
              : void 0;
};
