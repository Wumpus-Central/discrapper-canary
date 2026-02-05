n.d(t, { SelectFriendsModalScreens: () => y, default: () => j });
var i,
    l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(158954),
    d = n(311907),
    c = n(397927),
    u = n(803306),
    m = n(718213),
    _ = n(793574),
    h = n(688810),
    p = n(954571),
    g = n(975571),
    A = n(427262),
    f = n(326084),
    x = n(851746),
    E = n(761546),
    C = n(972007),
    I = n(636184),
    T = n(652215),
    v = n(985018),
    N = n(683912);
let S = (e) => {
        let { onClose: t, onShare: n } = e,
            i = (0, d.bG)([x.A], () => x.A.getReferralsRemaining()),
            r = (0, d.bG)([x.A], () => x.A.getHasEligibleFriends()),
            [u, _] = a.useState(new Map()),
            [h, p] = a.useState(""),
            f = (0, m.A)(h, 400),
            {
                eligibleUsers: I,
                fetchUsers: S,
                hasError: b,
                isFetching: y,
                resendUsers: j,
            } = (0, C.i)({ searchQuery: f, selectedUsers: u }),
            [R, L] = a.useState(!1),
            M = I.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map());
        return null === i
            ? (0, l.jsx)(c.y$y, {})
            : b
              ? (0, l.jsx)(o.Modal, {
                    transitionState: o.ip4.ENTERED,
                    size: "sm",
                    title: v.intl.string(v.t.lcuio4),
                    subtitle: v.intl.string(v.t["x09+CD"]),
                    onClose: t,
                    actions: [],
                })
              : !1 === r
                ? (0, l.jsx)(o.Modal, {
                      transitionState: o.ip4.ENTERED,
                      size: "sm",
                      title: v.intl.string(v.t["2YigPp"]),
                      subtitle: v.intl.format(v.t.OOCbz8, {
                          helpdeskArticle: g.A.getArticleURL(T.MVz.REFERRAL_PROGRAM),
                      }),
                      onClose: t,
                      actions: [],
                  })
                : (0, l.jsx)(o.Modal, {
                      size: "md",
                      transitionState: o.ip4.ENTERED,
                      title: v.intl.string(v.t["2dVCLl"]),
                      subtitle: v.intl.string(v.t.DXgoi2),
                      onClose: t,
                      input: (0, l.jsx)(c.iS7, {
                          selectionMode: "multiple",
                          value: Array.from(u.values()),
                          options: Array.from(M.values()),
                          formatOption: (e) => ({ id: e.id, value: e, label: A.Ay.getName(e) }),
                          onSelectionChange: (e) => {
                              let t = Array.isArray(e) ? e : [e],
                                  n = new Map();
                              t.forEach((e) => {
                                  null != e && n.set(e.id, e);
                              }),
                                  _(n);
                          },
                          children: (0, l.jsx)("div", {
                              className: N.c,
                              children: (0, l.jsx)(c.a32, {
                                  placeholder: 0 === u.size ? v.intl.string(v.t.Kd5RaI) : "",
                                  onQueryChange: (e) => {
                                      p(e.target.value);
                                  },
                              }),
                          }),
                      }),
                      actions: [],
                      actionBarInput: ((e) => {
                          let i,
                              { eligibleRecipients: a } = e,
                              r = f.length > 0 && 0 === a.size;
                          return (
                              (i =
                                  !0 === r
                                      ? v.intl.string(v.t.wpSqAW)
                                      : u.size <= 1
                                        ? v.intl.string(v.t.ItpQxk)
                                        : v.intl.format(v.t.iW2stn, { nTrials: u.size })),
                              (0, l.jsx)("div", {
                                  className: s()(N.qr, N.h0),
                                  children: (0, l.jsx)(c.Button, {
                                      variant: "primary",
                                      disabled: (0 === u.size && !r) || R,
                                      text: i,
                                      size: "md",
                                      fullWidth: !0,
                                      onClick: async () => {
                                          r ? t() : (L(!0), await n([...u.values()]), L(!1));
                                      },
                                  }),
                              })
                          );
                      })({ eligibleRecipients: M }),
                      children: ((e) => {
                          let { eligibleRecipients: t } = e;
                          return (0, l.jsx)(E.A, {
                              users: Array.from(t.values()),
                              isUserSelected: (e) => u.has(e.id),
                              onSelectionChange: (e, t) => {
                                  _((n) => {
                                      let i = new Map(n);
                                      return t ? i.set(e.id, e) : i.delete(e.id), i;
                                  });
                              },
                              isFetching: y,
                              onFetchMore: S,
                              isUserDisabled: (e) =>
                                  null !== i &&
                                  0 !== i &&
                                  [...u.values()].filter((e) => !j.has(e.id)).length >= i &&
                                  !u.has(e.id) &&
                                  !j.has(e.id),
                              searchQuery: f,
                              emptySearchContent: {
                                  header: v.intl.string(v.t["8+ywHD"]),
                                  body: v.intl.string(v.t.CgQmY2),
                              },
                              className: N.p_,
                          });
                      })({ eligibleRecipients: M }),
                  });
    },
    b = (e) => {
        let t,
            { onClose: n, onShare: i } = e,
            r = (0, d.bG)([x.A], () => x.A.getRecipientStatus()),
            [m, _] = a.useState(new Map()),
            [h, p] = a.useState(new Map()),
            [g, A] = a.useState(!1);
        return (
            a.useEffect(() => {
                (async () => {
                    let e = new Map();
                    for (let [t, n] of r) {
                        let i = await (0, u.wz)(t);
                        (i.referralStatus = n), e.set(i.id, i);
                    }
                    _(e);
                })();
            }, [r]),
            (0, l.jsx)(o.Modal, {
                size: "md",
                transitionState: o.ip4.ENTERED,
                title: v.intl.string(v.t.rKmy8I),
                subtitle: v.intl.string(v.t.VDlF6o),
                onClose: n,
                actions: [],
                actionBarInput:
                    ((t = h.size <= 1 ? v.intl.string(v.t.ItpQxk) : v.intl.format(v.t.iW2stn, { nTrials: h.size })),
                    (0, l.jsx)("div", {
                        className: s()(N.qr, N.h0),
                        children: (0, l.jsx)(c.Button, {
                            variant: "primary",
                            disabled: 0 === h.size || g,
                            text: t,
                            size: "md",
                            fullWidth: !0,
                            onClick: async () => {
                                A(!0), await i([...h.values()]), A(!1);
                            },
                        }),
                    })),
                children: (0, l.jsx)(E.A, {
                    users: Array.from(m.values()),
                    isUserSelected: (e) => h.has(e.id),
                    isUserDisabled: (e) => e.referralStatus === f.aK.REDEEMED,
                    onSelectionChange: (e, t) => {
                        p((n) => {
                            let i = new Map(n);
                            return t ? i.set(e.id, e) : i.delete(e.id), i;
                        });
                    },
                    className: N.p_,
                }),
            })
        );
    };
var y =
    (((i = {})[(i.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
    (i[(i.CONFIRMATION = 2)] = "CONFIRMATION"),
    (i[(i.REMINDER = 3)] = "REMINDER"),
    i);
let j = (e) => {
    let { onClose: t, startingScreen: n = 1 } = e,
        i = (0, d.bG)([x.A], () => x.A.getReferralsRemaining()),
        [r, s] = a.useState(n),
        [o, u] = a.useState([]),
        { analyticsLocations: m } = (0, h.Ay)([_.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
        g = async (e) => {
            p.default.track(T.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: m });
            let t = await (0, f.xm)(Object.values(e).map((e) => e.id));
            u(e.map((e) => ({ recipient: e, status: t.get(e.id) }))), s(2);
        };
    return null === i
        ? (0, l.jsx)(c.y$y, {})
        : 2 === r
          ? (0, l.jsx)(I.h, { isReminderConfirmation: 3 === n, results: o, onClose: t })
          : 1 === r
            ? (0, l.jsx)(S, { onClose: t, onShare: g })
            : 3 === r
              ? (0, l.jsx)(b, { onClose: t, onShare: g })
              : void 0;
};
