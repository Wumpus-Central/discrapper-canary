n.d(t, { SelectFriendsModalScreens: () => M, default: () => j });
var i,
    l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(158954),
    c = n(311907),
    d = n(397927),
    u = n(803306),
    m = n(718213),
    _ = n(793574),
    A = n(688810),
    f = n(954571),
    h = n(975571),
    g = n(427262),
    E = n(326084),
    p = n(851746),
    x = n(761546),
    C = n(972007),
    I = n(636184),
    T = n(652215),
    N = n(985018),
    S = n(683912);
let R = (e) => {
        let { transitionState: t, onClose: n, onShare: i } = e,
            r = (0, c.bG)([p.A], () => p.A.getReferralsRemaining()),
            u = (0, c.bG)([p.A], () => p.A.getHasEligibleFriends()),
            [_, A] = a.useState(new Map()),
            [f, E] = a.useState(""),
            I = (0, m.A)(f, 400),
            {
                eligibleUsers: R,
                fetchUsers: v,
                hasError: M,
                isFetching: j,
                resendUsers: O,
            } = (0, C.i)({ searchQuery: I, selectedUsers: _ }),
            [b, y] = a.useState(!1),
            L = R.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map());
        return null === r
            ? (0, l.jsx)(d.y$y, {})
            : M
              ? (0, l.jsx)(o.Modal, {
                    transitionState: t,
                    size: "sm",
                    title: N.intl.string(N.t.lcuio4),
                    subtitle: N.intl.string(N.t["x09+CD"]),
                    onClose: n,
                    actions: [],
                })
              : !1 === u
                ? (0, l.jsx)(o.Modal, {
                      transitionState: t,
                      size: "sm",
                      title: N.intl.string(N.t["2YigPp"]),
                      subtitle: N.intl.format(N.t.OOCbz8, {
                          helpdeskArticle: h.A.getArticleURL(T.MVz.REFERRAL_PROGRAM),
                      }),
                      onClose: n,
                      actions: [],
                  })
                : (0, l.jsx)(o.Modal, {
                      size: "md",
                      transitionState: t,
                      title: N.intl.string(N.t["2dVCLl"]),
                      subtitle: N.intl.string(N.t.DXgoi2),
                      onClose: n,
                      input: (0, l.jsx)(d.iS7, {
                          selectionMode: "multiple",
                          value: Array.from(_.values()),
                          options: Array.from(L.values()),
                          formatOption: (e) => ({ id: e.id, value: e, label: g.Ay.getName(e) }),
                          onSelectionChange: (e) => {
                              let t = Array.isArray(e) ? e : [e],
                                  n = new Map();
                              t.forEach((e) => {
                                  null != e && n.set(e.id, e);
                              }),
                                  A(n);
                          },
                          children: (0, l.jsx)("div", {
                              className: S.c,
                              children: (0, l.jsx)(d.a32, {
                                  placeholder: 0 === _.size ? N.intl.string(N.t.Kd5RaI) : "",
                                  onQueryChange: (e) => {
                                      E(e.target.value);
                                  },
                              }),
                          }),
                      }),
                      actions: [],
                      actionBarInput: ((e) => {
                          let t,
                              { eligibleRecipients: a } = e,
                              r = I.length > 0 && 0 === a.size;
                          return (
                              (t =
                                  !0 === r
                                      ? N.intl.string(N.t.wpSqAW)
                                      : _.size <= 1
                                        ? N.intl.string(N.t.ItpQxk)
                                        : N.intl.format(N.t.iW2stn, { nTrials: _.size })),
                              (0, l.jsx)("div", {
                                  className: s()(S.qr, S.h0),
                                  children: (0, l.jsx)(d.Button, {
                                      variant: "primary",
                                      disabled: (0 === _.size && !r) || b,
                                      text: t,
                                      size: "md",
                                      fullWidth: !0,
                                      onClick: async () => {
                                          r ? n() : (y(!0), await i([..._.values()]), y(!1));
                                      },
                                  }),
                              })
                          );
                      })({ eligibleRecipients: L }),
                      children: ((e) => {
                          let { eligibleRecipients: t } = e;
                          return (0, l.jsx)(x.A, {
                              users: Array.from(t.values()),
                              isUserSelected: (e) => _.has(e.id),
                              onSelectionChange: (e, t) => {
                                  A((n) => {
                                      let i = new Map(n);
                                      return t ? i.set(e.id, e) : i.delete(e.id), i;
                                  });
                              },
                              isFetching: j,
                              onFetchMore: v,
                              isUserDisabled: (e) =>
                                  null !== r &&
                                  0 !== r &&
                                  [..._.values()].filter((e) => !O.has(e.id)).length >= r &&
                                  !_.has(e.id) &&
                                  !O.has(e.id),
                              searchQuery: I,
                              emptySearchContent: {
                                  header: N.intl.string(N.t["8+ywHD"]),
                                  body: N.intl.string(N.t.CgQmY2),
                              },
                              className: S.p_,
                          });
                      })({ eligibleRecipients: L }),
                  });
    },
    v = (e) => {
        let t,
            { transitionState: n, onClose: i, onShare: r } = e,
            m = (0, c.bG)([p.A], () => p.A.getRecipientStatus()),
            [_, A] = a.useState(new Map()),
            [f, h] = a.useState(new Map()),
            [g, C] = a.useState(!1);
        return (
            a.useEffect(() => {
                (async () => {
                    let e = new Map();
                    for (let [t, n] of m) {
                        let i = await (0, u.wz)(t);
                        (i.referralStatus = n), e.set(i.id, i);
                    }
                    A(e);
                })();
            }, [m]),
            (0, l.jsx)(o.Modal, {
                size: "md",
                transitionState: n,
                title: N.intl.string(N.t.rKmy8I),
                subtitle: N.intl.string(N.t.VDlF6o),
                onClose: i,
                actions: [],
                actionBarInput:
                    ((t = f.size <= 1 ? N.intl.string(N.t.ItpQxk) : N.intl.format(N.t.iW2stn, { nTrials: f.size })),
                    (0, l.jsx)("div", {
                        className: s()(S.qr, S.h0),
                        children: (0, l.jsx)(d.Button, {
                            variant: "primary",
                            disabled: 0 === f.size || g,
                            text: t,
                            size: "md",
                            fullWidth: !0,
                            onClick: async () => {
                                C(!0), await r([...f.values()]), C(!1);
                            },
                        }),
                    })),
                children: (0, l.jsx)(x.A, {
                    users: Array.from(_.values()),
                    isUserSelected: (e) => f.has(e.id),
                    isUserDisabled: (e) => e.referralStatus === E.aK.REDEEMED,
                    onSelectionChange: (e, t) => {
                        h((n) => {
                            let i = new Map(n);
                            return t ? i.set(e.id, e) : i.delete(e.id), i;
                        });
                    },
                    className: S.p_,
                }),
            })
        );
    };
var M =
    (((i = {})[(i.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
    (i[(i.CONFIRMATION = 2)] = "CONFIRMATION"),
    (i[(i.REMINDER = 3)] = "REMINDER"),
    i);
let j = (e) => {
    let { transitionState: t, onClose: n, startingScreen: i = 1 } = e,
        r = (0, c.bG)([p.A], () => p.A.getReferralsRemaining()),
        [s, o] = a.useState(i),
        [u, m] = a.useState([]),
        { analyticsLocations: h } = (0, A.Ay)([_.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
        g = async (e) => {
            f.default.track(T.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: h });
            let t = await (0, E.xm)(Object.values(e).map((e) => e.id));
            m(e.map((e) => ({ recipient: e, status: t.get(e.id) }))), o(2);
        };
    return null === r
        ? (0, l.jsx)(d.y$y, {})
        : 2 === s
          ? (0, l.jsx)(I.h, { transitionState: t, isReminderConfirmation: 3 === i, results: u, onClose: n })
          : 1 === s
            ? (0, l.jsx)(R, { transitionState: t, onClose: n, onShare: g })
            : 3 === s
              ? (0, l.jsx)(v, { transitionState: t, onClose: n, onShare: g })
              : void 0;
};
