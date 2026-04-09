s.d(t, { SelectFriendsModalScreens: () => C, default: () => M });
var i,
    a = s(627968),
    n = s(64700),
    l = s(503698),
    r = s.n(l),
    c = s(158954),
    o = s(311907),
    d = s(397927),
    u = s(803306),
    A = s(718213),
    m = s(793574),
    h = s(688810),
    R = s(994500),
    f = s(954571),
    g = s(975571),
    x = s(427262),
    E = s(326084),
    p = s(851746),
    _ = s(761546),
    S = s(972007),
    T = s(636184),
    j = s(652215),
    b = s(985018),
    v = s(560481);
let y = (e) => {
        let { transitionState: t, onClose: s, onShare: i } = e,
            l = (0, o.bG)([p.A], () => p.A.getReferralsRemaining()),
            u = (0, o.bG)([p.A], () => p.A.getHasEligibleFriends()),
            [m, h] = n.useState(new Map()),
            [R, f] = n.useState(""),
            E = (0, A.A)(R, 400),
            {
                eligibleUsers: T,
                fetchUsers: y,
                hasError: N,
                isFetching: C,
                resendUsers: M,
            } = (0, S.i)({ searchQuery: E, selectedUsers: m }),
            [I, O] = n.useState(!1),
            P = T.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map());
        return null === l
            ? (0, a.jsx)(d.y$y, {})
            : N
              ? (0, a.jsx)(c.Modal, {
                    transitionState: t,
                    size: "sm",
                    title: b.intl.string(b.t.lcuio4),
                    subtitle: b.intl.string(b.t["x09+CD"]),
                    onClose: s,
                    actions: [],
                })
              : !1 === u
                ? (0, a.jsx)(c.Modal, {
                      transitionState: t,
                      size: "sm",
                      title: b.intl.string(b.t["2YigPp"]),
                      subtitle: b.intl.format(b.t.OOCbz8, {
                          helpdeskArticle: g.A.getArticleURL(j.MVz.REFERRAL_PROGRAM),
                      }),
                      onClose: s,
                      actions: [],
                  })
                : (0, a.jsx)(c.Modal, {
                      size: "md",
                      transitionState: t,
                      title: b.intl.string(b.t["2dVCLl"]),
                      subtitle: b.intl.string(b.t.DXgoi2),
                      onClose: s,
                      input: (0, a.jsx)(d.iS7, {
                          selectionMode: "multiple",
                          value: Array.from(m.values()),
                          options: Array.from(P.values()),
                          formatOption: (e) => ({ id: e.id, value: e, label: x.Ay.getName(e) }),
                          onSelectionChange: (e) => {
                              let t = Array.isArray(e) ? e : [e],
                                  s = new Map();
                              t.forEach((e) => {
                                  null != e && s.set(e.id, e);
                              }),
                                  h(s);
                          },
                          children: (0, a.jsx)("div", {
                              className: v.c,
                              children: (0, a.jsx)(d.a32, {
                                  placeholder: 0 === m.size ? b.intl.string(b.t.Kd5RaI) : "",
                                  onQueryChange: (e) => {
                                      f(e.target.value);
                                  },
                              }),
                          }),
                      }),
                      actions: [],
                      actionBarInput: ((e) => {
                          let t,
                              { eligibleRecipients: n } = e,
                              l = E.length > 0 && 0 === n.size;
                          return (
                              (t =
                                  !0 === l
                                      ? b.intl.string(b.t.wpSqAW)
                                      : m.size <= 1
                                        ? b.intl.string(b.t.ItpQxk)
                                        : b.intl.format(b.t.iW2stn, { nTrials: m.size })),
                              (0, a.jsx)("div", {
                                  className: r()(v.qr, v.h0),
                                  children: (0, a.jsx)(d.Button, {
                                      variant: "primary",
                                      disabled: (0 === m.size && !l) || I,
                                      text: t,
                                      size: "md",
                                      fullWidth: !0,
                                      onClick: async () => {
                                          l ? s() : (O(!0), await i([...m.values()]), O(!1));
                                      },
                                  }),
                              })
                          );
                      })({ eligibleRecipients: P }),
                      children: ((e) => {
                          let { eligibleRecipients: t } = e;
                          return (0, a.jsx)(_.A, {
                              users: Array.from(t.values()),
                              isUserSelected: (e) => m.has(e.id),
                              onSelectionChange: (e, t) => {
                                  h((s) => {
                                      let i = new Map(s);
                                      return t ? i.set(e.id, e) : i.delete(e.id), i;
                                  });
                              },
                              isFetching: C,
                              onFetchMore: y,
                              isUserDisabled: (e) =>
                                  null !== l &&
                                  0 !== l &&
                                  [...m.values()].filter((e) => !M.has(e.id)).length >= l &&
                                  !m.has(e.id) &&
                                  !M.has(e.id),
                              searchQuery: E,
                              emptySearchContent: {
                                  header: b.intl.string(b.t["8+ywHD"]),
                                  body: b.intl.string(b.t.CgQmY2),
                              },
                              className: v.p_,
                          });
                      })({ eligibleRecipients: P }),
                  });
    },
    N = (e) => {
        let t,
            { transitionState: s, onClose: i, onShare: l } = e,
            A = (0, o.bG)([p.A], () => p.A.getRecipientStatus()),
            [m, h] = n.useState(new Map()),
            [f, g] = n.useState(new Map()),
            [x, S] = n.useState(!1);
        return (
            n.useEffect(() => {
                (async () => {
                    let e = new Map();
                    for (let [t, s] of A) {
                        if (R.A.isBlockedOrIgnored(t)) continue;
                        let i = await (0, u.wz)(t);
                        (i.referralStatus = s), e.set(i.id, i);
                    }
                    h(e);
                })();
            }, [A]),
            (0, a.jsx)(c.Modal, {
                size: "md",
                transitionState: s,
                title: b.intl.string(b.t.rKmy8I),
                subtitle: b.intl.string(b.t.VDlF6o),
                onClose: i,
                actions: [],
                actionBarInput:
                    ((t = f.size <= 1 ? b.intl.string(b.t.ItpQxk) : b.intl.format(b.t.iW2stn, { nTrials: f.size })),
                    (0, a.jsx)("div", {
                        className: r()(v.qr, v.h0),
                        children: (0, a.jsx)(d.Button, {
                            variant: "primary",
                            disabled: 0 === f.size || x,
                            text: t,
                            size: "md",
                            fullWidth: !0,
                            onClick: async () => {
                                S(!0), await l([...f.values()]), S(!1);
                            },
                        }),
                    })),
                children: (0, a.jsx)(_.A, {
                    users: Array.from(m.values()),
                    isUserSelected: (e) => f.has(e.id),
                    isUserDisabled: (e) => e.referralStatus === E.aK.REDEEMED,
                    onSelectionChange: (e, t) => {
                        g((s) => {
                            let i = new Map(s);
                            return t ? i.set(e.id, e) : i.delete(e.id), i;
                        });
                    },
                    className: v.p_,
                }),
            })
        );
    };
var C =
    (((i = {})[(i.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
    (i[(i.CONFIRMATION = 2)] = "CONFIRMATION"),
    (i[(i.REMINDER = 3)] = "REMINDER"),
    i);
let M = (e) => {
    let { transitionState: t, onClose: s, startingScreen: i = 1 } = e,
        l = (0, o.bG)([p.A], () => p.A.getReferralsRemaining()),
        [r, c] = n.useState(i),
        [u, A] = n.useState([]),
        { analyticsLocations: R } = (0, h.Ay)([m.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
        g = async (e) => {
            f.default.track(j.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: R });
            let t = await (0, E.xm)(Object.values(e).map((e) => e.id));
            A(e.map((e) => ({ recipient: e, status: t.get(e.id) }))), c(2);
        };
    return null === l
        ? (0, a.jsx)(d.y$y, {})
        : 2 === r
          ? (0, a.jsx)(T.h, { transitionState: t, isReminderConfirmation: 3 === i, results: u, onClose: s })
          : 1 === r
            ? (0, a.jsx)(y, { transitionState: t, onClose: s, onShare: g })
            : 3 === r
              ? (0, a.jsx)(N, { transitionState: t, onClose: s, onShare: g })
              : void 0;
};
