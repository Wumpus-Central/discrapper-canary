n.d(t, { SelectFriendsModalScreens: () => j, default: () => O });
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
    f = n(994500),
    h = n(954571),
    g = n(975571),
    E = n(427262),
    p = n(326084),
    x = n(851746),
    C = n(761546),
    I = n(972007),
    T = n(636184),
    N = n(652215),
    S = n(985018),
    R = n(683912);
let v = (e) => {
        let { transitionState: t, onClose: n, onShare: i } = e,
            r = (0, c.bG)([x.A], () => x.A.getReferralsRemaining()),
            u = (0, c.bG)([x.A], () => x.A.getHasEligibleFriends()),
            [_, A] = a.useState(new Map()),
            [f, h] = a.useState(""),
            p = (0, m.A)(f, 400),
            {
                eligibleUsers: T,
                fetchUsers: v,
                hasError: M,
                isFetching: j,
                resendUsers: O,
            } = (0, I.i)({ searchQuery: p, selectedUsers: _ }),
            [b, y] = a.useState(!1),
            L = T.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map());
        return null === r
            ? (0, l.jsx)(d.y$y, {})
            : M
              ? (0, l.jsx)(o.Modal, {
                    transitionState: t,
                    size: "sm",
                    title: S.intl.string(S.t.lcuio4),
                    subtitle: S.intl.string(S.t["x09+CD"]),
                    onClose: n,
                    actions: [],
                })
              : !1 === u
                ? (0, l.jsx)(o.Modal, {
                      transitionState: t,
                      size: "sm",
                      title: S.intl.string(S.t["2YigPp"]),
                      subtitle: S.intl.format(S.t.OOCbz8, {
                          helpdeskArticle: g.A.getArticleURL(N.MVz.REFERRAL_PROGRAM),
                      }),
                      onClose: n,
                      actions: [],
                  })
                : (0, l.jsx)(o.Modal, {
                      size: "md",
                      transitionState: t,
                      title: S.intl.string(S.t["2dVCLl"]),
                      subtitle: S.intl.string(S.t.DXgoi2),
                      onClose: n,
                      input: (0, l.jsx)(d.iS7, {
                          selectionMode: "multiple",
                          value: Array.from(_.values()),
                          options: Array.from(L.values()),
                          formatOption: (e) => ({ id: e.id, value: e, label: E.Ay.getName(e) }),
                          onSelectionChange: (e) => {
                              let t = Array.isArray(e) ? e : [e],
                                  n = new Map();
                              t.forEach((e) => {
                                  null != e && n.set(e.id, e);
                              }),
                                  A(n);
                          },
                          children: (0, l.jsx)("div", {
                              className: R.c,
                              children: (0, l.jsx)(d.a32, {
                                  placeholder: 0 === _.size ? S.intl.string(S.t.Kd5RaI) : "",
                                  onQueryChange: (e) => {
                                      h(e.target.value);
                                  },
                              }),
                          }),
                      }),
                      actions: [],
                      actionBarInput: ((e) => {
                          let t,
                              { eligibleRecipients: a } = e,
                              r = p.length > 0 && 0 === a.size;
                          return (
                              (t =
                                  !0 === r
                                      ? S.intl.string(S.t.wpSqAW)
                                      : _.size <= 1
                                        ? S.intl.string(S.t.ItpQxk)
                                        : S.intl.format(S.t.iW2stn, { nTrials: _.size })),
                              (0, l.jsx)("div", {
                                  className: s()(R.qr, R.h0),
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
                          return (0, l.jsx)(C.A, {
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
                              searchQuery: p,
                              emptySearchContent: {
                                  header: S.intl.string(S.t["8+ywHD"]),
                                  body: S.intl.string(S.t.CgQmY2),
                              },
                              className: R.p_,
                          });
                      })({ eligibleRecipients: L }),
                  });
    },
    M = (e) => {
        let t,
            { transitionState: n, onClose: i, onShare: r } = e,
            m = (0, c.bG)([x.A], () => x.A.getRecipientStatus()),
            [_, A] = a.useState(new Map()),
            [h, g] = a.useState(new Map()),
            [E, I] = a.useState(!1);
        return (
            a.useEffect(() => {
                (async () => {
                    let e = new Map();
                    for (let [t, n] of m) {
                        if (f.A.isBlockedOrIgnored(t)) continue;
                        let i = await (0, u.wz)(t);
                        (i.referralStatus = n), e.set(i.id, i);
                    }
                    A(e);
                })();
            }, [m]),
            (0, l.jsx)(o.Modal, {
                size: "md",
                transitionState: n,
                title: S.intl.string(S.t.rKmy8I),
                subtitle: S.intl.string(S.t.VDlF6o),
                onClose: i,
                actions: [],
                actionBarInput:
                    ((t = h.size <= 1 ? S.intl.string(S.t.ItpQxk) : S.intl.format(S.t.iW2stn, { nTrials: h.size })),
                    (0, l.jsx)("div", {
                        className: s()(R.qr, R.h0),
                        children: (0, l.jsx)(d.Button, {
                            variant: "primary",
                            disabled: 0 === h.size || E,
                            text: t,
                            size: "md",
                            fullWidth: !0,
                            onClick: async () => {
                                I(!0), await r([...h.values()]), I(!1);
                            },
                        }),
                    })),
                children: (0, l.jsx)(C.A, {
                    users: Array.from(_.values()),
                    isUserSelected: (e) => h.has(e.id),
                    isUserDisabled: (e) => e.referralStatus === p.aK.REDEEMED,
                    onSelectionChange: (e, t) => {
                        g((n) => {
                            let i = new Map(n);
                            return t ? i.set(e.id, e) : i.delete(e.id), i;
                        });
                    },
                    className: R.p_,
                }),
            })
        );
    };
var j =
    (((i = {})[(i.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
    (i[(i.CONFIRMATION = 2)] = "CONFIRMATION"),
    (i[(i.REMINDER = 3)] = "REMINDER"),
    i);
let O = (e) => {
    let { transitionState: t, onClose: n, startingScreen: i = 1 } = e,
        r = (0, c.bG)([x.A], () => x.A.getReferralsRemaining()),
        [s, o] = a.useState(i),
        [u, m] = a.useState([]),
        { analyticsLocations: f } = (0, A.Ay)([_.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
        g = async (e) => {
            h.default.track(N.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: f });
            let t = await (0, p.xm)(Object.values(e).map((e) => e.id));
            m(e.map((e) => ({ recipient: e, status: t.get(e.id) }))), o(2);
        };
    return null === r
        ? (0, l.jsx)(d.y$y, {})
        : 2 === s
          ? (0, l.jsx)(T.h, { transitionState: t, isReminderConfirmation: 3 === i, results: u, onClose: n })
          : 1 === s
            ? (0, l.jsx)(v, { transitionState: t, onClose: n, onShare: g })
            : 3 === s
              ? (0, l.jsx)(M, { transitionState: t, onClose: n, onShare: g })
              : void 0;
};
