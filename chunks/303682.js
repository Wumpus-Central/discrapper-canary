n.d(t, {
    SelectFriendsModalScreens: () => S,
    default: () => T,
}),
    n(896048);
var r,
    i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    c = n(311907),
    u = n(397927),
    d = n(803306),
    p = n(718213),
    m = n(793574),
    f = n(688810),
    g = n(954571),
    h = n(975571),
    _ = n(427262),
    b = n(326084),
    A = n(851746),
    y = n(761546),
    v = n(972007),
    x = n(636184),
    O = n(652215),
    E = n(985018),
    j = n(683912);
let C = (e) => {
        let { onClose: t, onShare: n } = e,
            r = (0, c.bG)([A.A], () => A.A.getReferralsRemaining()),
            a = (0, c.bG)([A.A], () => A.A.getHasEligibleFriends()),
            [d, m] = l.useState(new Map()),
            [f, g] = l.useState(""),
            b = (0, p.A)(f, 400),
            {
                eligibleUsers: x,
                fetchUsers: C,
                hasError: I,
                isFetching: S,
                resendUsers: T,
            } = (0, v.i)({
                searchQuery: b,
                selectedUsers: d,
            }),
            [N, P] = l.useState(!1),
            w = x.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map());
        return null === r
            ? (0, i.jsx)(u.y$y, {})
            : I
              ? (0, i.jsx)(o.Modal, {
                    transitionState: o.ip4.ENTERED,
                    size: "sm",
                    title: E.intl.string(E.t.lcuio4),
                    subtitle: E.intl.string(E.t["x09+CD"]),
                    onClose: t,
                    actions: [],
                })
              : !1 === a
                ? (0, i.jsx)(o.Modal, {
                      transitionState: o.ip4.ENTERED,
                      size: "sm",
                      title: E.intl.string(E.t["2YigPp"]),
                      subtitle: E.intl.format(E.t.OOCbz8, {
                          helpdeskArticle: h.A.getArticleURL(O.MVz.REFERRAL_PROGRAM),
                      }),
                      onClose: t,
                      actions: [],
                  })
                : (0, i.jsx)(o.Modal, {
                      size: "md",
                      transitionState: o.ip4.ENTERED,
                      title: E.intl.string(E.t["2dVCLl"]),
                      subtitle: E.intl.string(E.t.DXgoi2),
                      onClose: t,
                      input: (0, i.jsx)(u.iS7, {
                          selectionMode: "multiple",
                          value: Array.from(d.values()),
                          options: Array.from(w.values()),
                          formatOption: (e) => ({
                              id: e.id,
                              value: e,
                              label: _.Ay.getName(e),
                          }),
                          onSelectionChange: (e) => {
                              let t = Array.isArray(e) ? e : [e],
                                  n = new Map();
                              t.forEach((e) => {
                                  null != e && n.set(e.id, e);
                              }),
                                  m(n);
                          },
                          children: (0, i.jsx)("div", {
                              className: j.c,
                              children: (0, i.jsx)(u.a32, {
                                  placeholder: 0 === d.size ? E.intl.string(E.t.Kd5RaI) : "",
                                  onQueryChange: (e) => {
                                      g(e.target.value);
                                  },
                              }),
                          }),
                      }),
                      actions: [],
                      actionBarInput: ((e) => {
                          let r,
                              { eligibleRecipients: l } = e,
                              a = b.length > 0 && 0 === l.size;
                          return (
                              (r =
                                  !0 === a
                                      ? E.intl.string(E.t.wpSqAW)
                                      : d.size <= 1
                                        ? E.intl.string(E.t.ItpQxk)
                                        : E.intl.format(E.t.iW2stn, {
                                              nTrials: d.size,
                                          })),
                              (0, i.jsx)("div", {
                                  className: s()(j.qr, j.h0),
                                  children: (0, i.jsx)(u.Button, {
                                      variant: "primary",
                                      disabled: (0 === d.size && !a) || N,
                                      text: r,
                                      size: "md",
                                      fullWidth: !0,
                                      onClick: async () => {
                                          a ? t() : (P(!0), await n([...d.values()]), P(!1));
                                      },
                                  }),
                              })
                          );
                      })({
                          eligibleRecipients: w,
                      }),
                      children: ((e) => {
                          let { eligibleRecipients: t } = e;
                          return (0, i.jsx)(y.A, {
                              users: Array.from(t.values()),
                              isUserSelected: (e) => d.has(e.id),
                              onSelectionChange: (e, t) => {
                                  m((n) => {
                                      let r = new Map(n);
                                      return t ? r.set(e.id, e) : r.delete(e.id), r;
                                  });
                              },
                              isFetching: S,
                              onFetchMore: C,
                              isUserDisabled: (e) =>
                                  null !== r &&
                                  0 !== r &&
                                  [...d.values()].filter((e) => !T.has(e.id)).length >= r &&
                                  !d.has(e.id) &&
                                  !T.has(e.id),
                              searchQuery: b,
                              emptySearchContent: {
                                  header: E.intl.string(E.t["8+ywHD"]),
                                  body: E.intl.string(E.t.CgQmY2),
                              },
                              className: j.p_,
                          });
                      })({
                          eligibleRecipients: w,
                      }),
                  });
    },
    I = (e) => {
        let t,
            { onClose: n, onShare: r } = e,
            a = (0, c.bG)([A.A], () => A.A.getRecipientStatus()),
            [p, m] = l.useState(new Map()),
            [f, g] = l.useState(new Map()),
            [h, _] = l.useState(!1);
        return (
            l.useEffect(() => {
                (async () => {
                    let e = new Map();
                    for (let [t, n] of a) {
                        let r = await (0, d.wz)(t);
                        (r.referralStatus = n), e.set(r.id, r);
                    }
                    m(e);
                })();
            }, [a]),
            (0, i.jsx)(o.Modal, {
                size: "md",
                transitionState: o.ip4.ENTERED,
                title: E.intl.string(E.t.rKmy8I),
                subtitle: E.intl.string(E.t.VDlF6o),
                onClose: n,
                actions: [],
                actionBarInput:
                    ((t =
                        f.size <= 1
                            ? E.intl.string(E.t.ItpQxk)
                            : E.intl.format(E.t.iW2stn, {
                                  nTrials: f.size,
                              })),
                    (0, i.jsx)("div", {
                        className: s()(j.qr, j.h0),
                        children: (0, i.jsx)(u.Button, {
                            variant: "primary",
                            disabled: 0 === f.size || h,
                            text: t,
                            size: "md",
                            fullWidth: !0,
                            onClick: async () => {
                                _(!0), await r([...f.values()]), _(!1);
                            },
                        }),
                    })),
                children: (0, i.jsx)(y.A, {
                    users: Array.from(p.values()),
                    isUserSelected: (e) => f.has(e.id),
                    isUserDisabled: (e) => e.referralStatus === b.aK.REDEEMED,
                    onSelectionChange: (e, t) => {
                        g((n) => {
                            let r = new Map(n);
                            return t ? r.set(e.id, e) : r.delete(e.id), r;
                        });
                    },
                    className: j.p_,
                }),
            })
        );
    };
var S =
    (((r = {})[(r.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
    (r[(r.CONFIRMATION = 2)] = "CONFIRMATION"),
    (r[(r.REMINDER = 3)] = "REMINDER"),
    r);
let T = (e) => {
    let { onClose: t, startingScreen: n = 1 } = e,
        r = (0, c.bG)([A.A], () => A.A.getReferralsRemaining()),
        [a, s] = l.useState(n),
        [o, d] = l.useState([]),
        { analyticsLocations: p } = (0, f.Ay)([m.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
        h = async (e) => {
            g.default.track(O.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
                location_stack: p,
            });
            let t = await (0, b.xm)(Object.values(e).map((e) => e.id));
            d(
                e.map((e) => ({
                    recipient: e,
                    status: t.get(e.id),
                })),
            ),
                s(2);
        };
    return null === r
        ? (0, i.jsx)(u.y$y, {})
        : 2 === a
          ? (0, i.jsx)(x.h, {
                isReminderConfirmation: 3 === n,
                results: o,
                onClose: t,
            })
          : 1 === a
            ? (0, i.jsx)(C, {
                  onClose: t,
                  onShare: h,
              })
            : 3 === a
              ? (0, i.jsx)(I, {
                    onClose: t,
                    onShare: h,
                })
              : void 0;
};
