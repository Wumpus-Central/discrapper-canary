n.d(t, { SelectFriendsModalScreens: () => M, default: () => O });
var r,
    a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    c = n(189213),
    o = n(311907),
    d = n(389723),
    u = n(821609),
    _ = n(289873),
    m = n(803306),
    p = n(718213),
    f = n(793574),
    A = n(688810),
    g = n(994500),
    h = n(954571),
    b = n(975571),
    x = n(427262),
    C = n(326084),
    v = n(851746),
    R = n(761546),
    N = n(972007),
    E = n(636184),
    j = n(652215),
    T = n(985018),
    y = n(468049);
let I = (e) => {
        let { transitionState: t, onClose: n, onShare: r } = e,
            s = (0, o.bG)([v.A], () => v.A.getReferralsRemaining()),
            m = (0, o.bG)([v.A], () => v.A.getHasEligibleFriends()),
            [f, A] = i.useState(new Map()),
            [g, h] = i.useState(""),
            C = (0, p.A)(g, 400),
            {
                eligibleUsers: E,
                fetchUsers: I,
                hasError: S,
                isFetching: M,
                resendUsers: O,
            } = (0, N.i)({ searchQuery: C, selectedUsers: f }),
            [P, D] = i.useState(!1),
            L = E.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map());
        return null === s
            ? (0, a.jsx)(_.y, {})
            : S
              ? (0, a.jsx)(c.Modal, {
                    transitionState: t,
                    size: "sm",
                    title: T.intl.string(T.t.lcuio4),
                    subtitle: T.intl.string(T.t["x09+CD"]),
                    onClose: n,
                    actions: [],
                })
              : !1 === m
                ? (0, a.jsx)(c.Modal, {
                      transitionState: t,
                      size: "sm",
                      title: T.intl.string(T.t["2YigPp"]),
                      subtitle: T.intl.format(T.t.OOCbz8, {
                          helpdeskArticle: b.A.getArticleURL(j.MVz.REFERRAL_PROGRAM),
                      }),
                      onClose: n,
                      actions: [],
                  })
                : (0, a.jsx)(c.Modal, {
                      size: "md",
                      transitionState: t,
                      title: T.intl.string(T.t["2dVCLl"]),
                      subtitle: T.intl.string(T.t.DXgoi2),
                      onClose: n,
                      input: (0, a.jsx)(d.iS, {
                          selectionMode: "multiple",
                          value: Array.from(f.values()),
                          options: Array.from(L.values()),
                          formatOption: (e) => ({ id: e.id, value: e, label: x.Ay.getName(e) }),
                          onSelectionChange: (e) => {
                              let t = Array.isArray(e) ? e : [e],
                                  n = new Map();
                              t.forEach((e) => {
                                  null != e && n.set(e.id, e);
                              }),
                                  A(n);
                          },
                          children: (0, a.jsx)("div", {
                              className: y.c,
                              children: (0, a.jsx)(d.a3, {
                                  placeholder: 0 === f.size ? T.intl.string(T.t.Kd5RaI) : "",
                                  onQueryChange: (e) => {
                                      h(e.target.value);
                                  },
                              }),
                          }),
                      }),
                      actions: [],
                      actionBarInput: ((e) => {
                          let t,
                              { eligibleRecipients: i } = e,
                              s = C.length > 0 && 0 === i.size;
                          return (
                              (t =
                                  !0 === s
                                      ? T.intl.string(T.t.wpSqAW)
                                      : f.size <= 1
                                        ? T.intl.string(T.t.ItpQxk)
                                        : T.intl.format(T.t.iW2stn, { nTrials: f.size })),
                              (0, a.jsx)("div", {
                                  className: l()(y.qr, y.h0),
                                  children: (0, a.jsx)(u.$, {
                                      variant: "primary",
                                      disabled: (0 === f.size && !s) || P,
                                      text: t,
                                      size: "md",
                                      fullWidth: !0,
                                      onClick: async () => {
                                          s ? n() : (D(!0), await r([...f.values()]), D(!1));
                                      },
                                  }),
                              })
                          );
                      })({ eligibleRecipients: L }),
                      children: ((e) => {
                          let { eligibleRecipients: t } = e;
                          return (0, a.jsx)(R.A, {
                              users: Array.from(t.values()),
                              isUserSelected: (e) => f.has(e.id),
                              onSelectionChange: (e, t) => {
                                  A((n) => {
                                      let r = new Map(n);
                                      return t ? r.set(e.id, e) : r.delete(e.id), r;
                                  });
                              },
                              isFetching: M,
                              onFetchMore: I,
                              isUserDisabled: (e) =>
                                  null !== s &&
                                  0 !== s &&
                                  [...f.values()].filter((e) => !O.has(e.id)).length >= s &&
                                  !f.has(e.id) &&
                                  !O.has(e.id),
                              searchQuery: C,
                              emptySearchContent: {
                                  header: T.intl.string(T.t["8+ywHD"]),
                                  body: T.intl.string(T.t.CgQmY2),
                              },
                              className: y.p_,
                          });
                      })({ eligibleRecipients: L }),
                  });
    },
    S = (e) => {
        let t,
            { transitionState: n, onClose: r, onShare: s } = e,
            d = (0, o.bG)([v.A], () => v.A.getRecipientStatus()),
            [_, p] = i.useState(new Map()),
            [f, A] = i.useState(new Map()),
            [h, b] = i.useState(!1);
        return (
            i.useEffect(() => {
                (async () => {
                    let e = new Map();
                    for (let [t, n] of d) {
                        if (g.A.isBlockedOrIgnored(t)) continue;
                        let r = await (0, m.wz)(t);
                        (r.referralStatus = n), e.set(r.id, r);
                    }
                    p(e);
                })();
            }, [d]),
            (0, a.jsx)(c.Modal, {
                size: "md",
                transitionState: n,
                title: T.intl.string(T.t.rKmy8I),
                subtitle: T.intl.string(T.t.VDlF6o),
                onClose: r,
                actions: [],
                actionBarInput:
                    ((t = f.size <= 1 ? T.intl.string(T.t.ItpQxk) : T.intl.format(T.t.iW2stn, { nTrials: f.size })),
                    (0, a.jsx)("div", {
                        className: l()(y.qr, y.h0),
                        children: (0, a.jsx)(u.$, {
                            variant: "primary",
                            disabled: 0 === f.size || h,
                            text: t,
                            size: "md",
                            fullWidth: !0,
                            onClick: async () => {
                                b(!0), await s([...f.values()]), b(!1);
                            },
                        }),
                    })),
                children: (0, a.jsx)(R.A, {
                    users: Array.from(_.values()),
                    isUserSelected: (e) => f.has(e.id),
                    isUserDisabled: (e) => e.referralStatus === C.aK.REDEEMED,
                    onSelectionChange: (e, t) => {
                        A((n) => {
                            let r = new Map(n);
                            return t ? r.set(e.id, e) : r.delete(e.id), r;
                        });
                    },
                    className: y.p_,
                }),
            })
        );
    };
var M =
    (((r = {})[(r.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
    (r[(r.CONFIRMATION = 2)] = "CONFIRMATION"),
    (r[(r.REMINDER = 3)] = "REMINDER"),
    r);
let O = (e) => {
    let { transitionState: t, onClose: n, startingScreen: r = 1 } = e,
        s = (0, o.bG)([v.A], () => v.A.getReferralsRemaining()),
        [l, c] = i.useState(r),
        [d, u] = i.useState([]),
        { analyticsLocations: m } = (0, A.Ay)([f.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
        p = async (e) => {
            h.default.track(j.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: m });
            let t = await (0, C.xm)(Object.values(e).map((e) => e.id));
            u(e.map((e) => ({ recipient: e, status: t.get(e.id) }))), c(2);
        };
    return null === s
        ? (0, a.jsx)(_.y, {})
        : 2 === l
          ? (0, a.jsx)(E.h, { transitionState: t, isReminderConfirmation: 3 === r, results: d, onClose: n })
          : 1 === l
            ? (0, a.jsx)(I, { transitionState: t, onClose: n, onShare: p })
            : 3 === l
              ? (0, a.jsx)(S, { transitionState: t, onClose: n, onShare: p })
              : void 0;
};
