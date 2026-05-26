n.d(t, { SelectFriendsModalScreens: () => w, default: () => V });
var i,
    l = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    c = n(189213),
    o = n(17928),
    d = n(732771),
    u = n(821609),
    E = n(289873),
    A = n(803306),
    _ = n(718213),
    T = n(793574),
    I = n(688810),
    N = n(994500),
    R = n(174459),
    m = n(975571),
    C = n(427262),
    p = n(326084),
    S = n(851746),
    O = n(794783),
    g = n(972007),
    h = n(772707),
    f = n(844222),
    P = n(778712),
    M = n(97808),
    D = n(834730),
    x = n(534890),
    U = n(90517),
    y = n(308528),
    j = n(854627),
    L = n(830543),
    k = n(652215),
    v = n(375708),
    b = n(494025);
let G = (e) => {
        let { recipient: t, status: n, onClose: i } = e,
            { avatarSrc: r, eventHandlers: s } = (0, j.A)({ userId: t?.id, size: P._3.SIZE_56 }),
            c = C.Ay.getName(t),
            o = n === p.o.FAIL;
        return (0, l.jsxs)("div", {
            className: b.w4,
            children: [
                (0, l.jsx)(M.eu, {
                    imageClassName: a()({ [b.jN]: o }),
                    src: r,
                    "aria-label": c,
                    size: P._3.SIZE_32,
                    ...s,
                }),
                o
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(D.E, {
                                  className: b.E0,
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: c,
                              }),
                              (0, l.jsx)(D.E, {
                                  variant: "text-md/medium",
                                  className: b.nT,
                                  color: "text-strong",
                                  children: v.intl.format(v.t.RO3T4B, { userName: c }),
                              }),
                          ],
                      })
                    : (0, l.jsx)(D.E, {
                          variant: "text-md/medium",
                          className: b.Pm,
                          color: "text-strong",
                          children: c,
                      }),
                (0, l.jsx)(u.$, {
                    variant: "secondary",
                    size: "sm",
                    text: v.intl.string(v.t["g33r/P"]),
                    icon: x.o,
                    onClick: () => {
                        var e;
                        return (e = t.id), void ((0, L.default)(), y.A.openPrivateChannel({ recipientIds: e }), i());
                    },
                }),
            ],
        });
    },
    X = (e) => {
        let { transitionState: t, results: n, onClose: i, isReminderConfirmation: s } = e,
            a = (0, o.bG)([S.A], () => S.A.getReferralsRemaining());
        R.default.track(k.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let { reducedMotion: c } = r.useContext(f.C);
        return null === a
            ? (0, l.jsx)(E.y, {})
            : (0, l.jsx)(h.k, {
                  graphic: c.enabled
                      ? {
                            src: "https://cdn.discordapp.com/assets/content/7d3bb543f57192ba573ca7c515ef59c9cf5c285538f43508ccd8e10637ccd902.svg",
                            type: "image",
                        }
                      : { rive: U.l, type: "rive" },
                  gradientColor: "nitro-pink",
                  title:
                      0 === n.filter((e) => e.status === p.o.SUCCESS).length
                          ? v.intl.string(v.t["7VBEue"])
                          : !0 === s
                            ? v.intl.string(v.t.GP5lbq)
                            : v.intl.string(v.t.tKCltd),
                  subtitle:
                      !0 === s
                          ? v.intl.format(v.t["4gJJfD"], { helpdeskArticle: m.A.getArticleURL(k.MVz.REFERRAL_PROGRAM) })
                          : v.intl.format(v.t.AwGSWl, { helpdeskArticle: m.A.getArticleURL(k.MVz.REFERRAL_PROGRAM) }),
                  onClose: i,
                  transitionState: t,
                  children: (0, l.jsx)("div", {
                      className: b.Hz,
                      children: n.map((e) =>
                          (0, l.jsx)(G, { recipient: e.recipient, status: e.status, onClose: i }, e.recipient.id),
                      ),
                  }),
              });
    };
var q = n(468049);
let F = (e) => {
        let { transitionState: t, onClose: n, onShare: i } = e,
            s = (0, o.bG)([S.A], () => S.A.getReferralsRemaining()),
            A = (0, o.bG)([S.A], () => S.A.getHasEligibleFriends()),
            [T, I] = r.useState(new Map()),
            [N, R] = r.useState(""),
            p = (0, _.A)(N, 400),
            {
                eligibleUsers: h,
                fetchUsers: f,
                hasError: P,
                isFetching: M,
                resendUsers: D,
            } = (0, g.i)({ searchQuery: p, selectedUsers: T }),
            [x, U] = r.useState(!1),
            y = h.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map());
        return null === s
            ? (0, l.jsx)(E.y, {})
            : P
              ? (0, l.jsx)(c.Modal, {
                    transitionState: t,
                    size: "sm",
                    title: v.intl.string(v.t.lcuio4),
                    subtitle: v.intl.string(v.t["x09+CD"]),
                    onClose: n,
                    actions: [],
                })
              : !1 === A
                ? (0, l.jsx)(c.Modal, {
                      transitionState: t,
                      size: "sm",
                      title: v.intl.string(v.t["2YigPp"]),
                      subtitle: v.intl.format(v.t.OOCbz8, {
                          helpdeskArticle: m.A.getArticleURL(k.MVz.REFERRAL_PROGRAM),
                      }),
                      onClose: n,
                      actions: [],
                  })
                : (0, l.jsx)(c.Modal, {
                      size: "md",
                      transitionState: t,
                      title: v.intl.string(v.t["2dVCLl"]),
                      subtitle: v.intl.string(v.t.DXgoi2),
                      onClose: n,
                      input: (0, l.jsx)(d.iS, {
                          selectionMode: "multiple",
                          value: Array.from(T.values()),
                          options: Array.from(y.values()),
                          formatOption: (e) => ({ id: e.id, value: e, label: C.Ay.getName(e) }),
                          onSelectionChange: (e) => {
                              let t = Array.isArray(e) ? e : [e],
                                  n = new Map();
                              t.forEach((e) => {
                                  null != e && n.set(e.id, e);
                              }),
                                  I(n);
                          },
                          children: (0, l.jsx)("div", {
                              className: q.c,
                              children: (0, l.jsx)(d.a3, {
                                  placeholder: 0 === T.size ? v.intl.string(v.t.Kd5RaI) : "",
                                  onQueryChange: (e) => {
                                      R(e.target.value);
                                  },
                              }),
                          }),
                      }),
                      actions: [],
                      actionBarInput: ((e) => {
                          let t,
                              { eligibleRecipients: r } = e,
                              s = p.length > 0 && 0 === r.size;
                          return (
                              (t =
                                  !0 === s
                                      ? v.intl.string(v.t.wpSqAW)
                                      : T.size <= 1
                                        ? v.intl.string(v.t.ItpQxk)
                                        : v.intl.format(v.t.iW2stn, { nTrials: T.size })),
                              (0, l.jsx)("div", {
                                  className: a()(q.qr, q.h0),
                                  children: (0, l.jsx)(u.$, {
                                      variant: "primary",
                                      disabled: (0 === T.size && !s) || x,
                                      text: t,
                                      size: "md",
                                      fullWidth: !0,
                                      onClick: async () => {
                                          s ? n() : (U(!0), await i([...T.values()]), U(!1));
                                      },
                                  }),
                              })
                          );
                      })({ eligibleRecipients: y }),
                      children: ((e) => {
                          let { eligibleRecipients: t } = e;
                          return (0, l.jsx)(O.A, {
                              users: Array.from(t.values()),
                              isUserSelected: (e) => T.has(e.id),
                              onSelectionChange: (e, t) => {
                                  I((n) => {
                                      let i = new Map(n);
                                      return t ? i.set(e.id, e) : i.delete(e.id), i;
                                  });
                              },
                              isFetching: M,
                              onFetchMore: f,
                              isUserDisabled: (e) =>
                                  null !== s &&
                                  0 !== s &&
                                  [...T.values()].filter((e) => !D.has(e.id)).length >= s &&
                                  !T.has(e.id) &&
                                  !D.has(e.id),
                              searchQuery: p,
                              emptySearchContent: {
                                  header: v.intl.string(v.t["8+ywHD"]),
                                  body: v.intl.string(v.t.CgQmY2),
                              },
                              className: q.p_,
                          });
                      })({ eligibleRecipients: y }),
                  });
    },
    B = (e) => {
        let t,
            { transitionState: n, onClose: i, onShare: s } = e,
            d = (0, o.bG)([S.A], () => S.A.getRecipientStatus()),
            [E, _] = r.useState(new Map()),
            [T, I] = r.useState(new Map()),
            [R, m] = r.useState(!1);
        return (
            r.useEffect(() => {
                (async () => {
                    let e = new Map();
                    for (let [t, n] of d) {
                        if (N.A.isBlockedOrIgnored(t)) continue;
                        let i = await (0, A.wz)(t);
                        (i.referralStatus = n), e.set(i.id, i);
                    }
                    _(e);
                })();
            }, [d]),
            (0, l.jsx)(c.Modal, {
                size: "md",
                transitionState: n,
                title: v.intl.string(v.t.rKmy8I),
                subtitle: v.intl.string(v.t.VDlF6o),
                onClose: i,
                actions: [],
                actionBarInput:
                    ((t = T.size <= 1 ? v.intl.string(v.t.ItpQxk) : v.intl.format(v.t.iW2stn, { nTrials: T.size })),
                    (0, l.jsx)("div", {
                        className: a()(q.qr, q.h0),
                        children: (0, l.jsx)(u.$, {
                            variant: "primary",
                            disabled: 0 === T.size || R,
                            text: t,
                            size: "md",
                            fullWidth: !0,
                            onClick: async () => {
                                m(!0), await s([...T.values()]), m(!1);
                            },
                        }),
                    })),
                children: (0, l.jsx)(O.A, {
                    users: Array.from(E.values()),
                    isUserSelected: (e) => T.has(e.id),
                    isUserDisabled: (e) => e.referralStatus === p.aK.REDEEMED,
                    onSelectionChange: (e, t) => {
                        I((n) => {
                            let i = new Map(n);
                            return t ? i.set(e.id, e) : i.delete(e.id), i;
                        });
                    },
                    className: q.p_,
                }),
            })
        );
    };
var w =
    (((i = {})[(i.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
    (i[(i.CONFIRMATION = 2)] = "CONFIRMATION"),
    (i[(i.REMINDER = 3)] = "REMINDER"),
    i);
let V = (e) => {
    let { transitionState: t, onClose: n, startingScreen: i = 1 } = e,
        s = (0, o.bG)([S.A], () => S.A.getReferralsRemaining()),
        [a, c] = r.useState(i),
        [d, u] = r.useState([]),
        { analyticsLocations: A } = (0, I.Ay)([T.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
        _ = async (e) => {
            R.default.track(k.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: A });
            let t = await (0, p.xm)(Object.values(e).map((e) => e.id));
            u(e.map((e) => ({ recipient: e, status: t.get(e.id) }))), c(2);
        };
    return null === s
        ? (0, l.jsx)(E.y, {})
        : 2 === a
          ? (0, l.jsx)(X, { transitionState: t, isReminderConfirmation: 3 === i, results: d, onClose: n })
          : 1 === a
            ? (0, l.jsx)(F, { transitionState: t, onClose: n, onShare: _ })
            : 3 === a
              ? (0, l.jsx)(B, { transitionState: t, onClose: n, onShare: _ })
              : void 0;
};
