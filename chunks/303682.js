"use strict";
s.d(t, { SelectFriendsModalScreens: () => O, default: () => v });
var r,
    i = s(627968),
    n = s(64700),
    a = s(503698),
    l = s.n(a),
    u = s(158954),
    c = s(311907),
    o = s(397927),
    d = s(803306),
    E = s(718213),
    _ = s(793574),
    R = s(688810),
    p = s(994500),
    I = s(954571),
    S = s(975571),
    h = s(427262),
    f = s(326084),
    g = s(851746),
    M = s(761546),
    A = s(972007),
    m = s(636184),
    P = s(652215),
    x = s(985018),
    U = s(560481);
let T = (e) => {
        let { transitionState: t, onClose: s, onShare: r } = e,
            a = (0, c.bG)([g.A], () => g.A.getReferralsRemaining()),
            d = (0, c.bG)([g.A], () => g.A.getHasEligibleFriends()),
            [_, R] = n.useState(new Map()),
            [p, I] = n.useState(""),
            f = (0, E.A)(p, 400),
            {
                eligibleUsers: m,
                fetchUsers: T,
                hasError: C,
                isFetching: O,
                resendUsers: v,
            } = (0, A.i)({ searchQuery: f, selectedUsers: _ }),
            [b, N] = n.useState(!1),
            y = m.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map());
        return null === a
            ? (0, i.jsx)(o.y$y, {})
            : C
              ? (0, i.jsx)(u.Modal, {
                    transitionState: t,
                    size: "sm",
                    title: x.intl.string(x.t.lcuio4),
                    subtitle: x.intl.string(x.t["x09+CD"]),
                    onClose: s,
                    actions: [],
                })
              : !1 === d
                ? (0, i.jsx)(u.Modal, {
                      transitionState: t,
                      size: "sm",
                      title: x.intl.string(x.t["2YigPp"]),
                      subtitle: x.intl.format(x.t.OOCbz8, {
                          helpdeskArticle: S.A.getArticleURL(P.MVz.REFERRAL_PROGRAM),
                      }),
                      onClose: s,
                      actions: [],
                  })
                : (0, i.jsx)(u.Modal, {
                      size: "md",
                      transitionState: t,
                      title: x.intl.string(x.t["2dVCLl"]),
                      subtitle: x.intl.string(x.t.DXgoi2),
                      onClose: s,
                      input: (0, i.jsx)(o.iS7, {
                          selectionMode: "multiple",
                          value: Array.from(_.values()),
                          options: Array.from(y.values()),
                          formatOption: (e) => ({ id: e.id, value: e, label: h.Ay.getName(e) }),
                          onSelectionChange: (e) => {
                              let t = Array.isArray(e) ? e : [e],
                                  s = new Map();
                              t.forEach((e) => {
                                  null != e && s.set(e.id, e);
                              }),
                                  R(s);
                          },
                          children: (0, i.jsx)("div", {
                              className: U.c,
                              children: (0, i.jsx)(o.a32, {
                                  placeholder: 0 === _.size ? x.intl.string(x.t.Kd5RaI) : "",
                                  onQueryChange: (e) => {
                                      I(e.target.value);
                                  },
                              }),
                          }),
                      }),
                      actions: [],
                      actionBarInput: ((e) => {
                          let t,
                              { eligibleRecipients: n } = e,
                              a = f.length > 0 && 0 === n.size;
                          return (
                              (t =
                                  !0 === a
                                      ? x.intl.string(x.t.wpSqAW)
                                      : _.size <= 1
                                        ? x.intl.string(x.t.ItpQxk)
                                        : x.intl.format(x.t.iW2stn, { nTrials: _.size })),
                              (0, i.jsx)("div", {
                                  className: l()(U.qr, U.h0),
                                  children: (0, i.jsx)(o.Button, {
                                      variant: "primary",
                                      disabled: (0 === _.size && !a) || b,
                                      text: t,
                                      size: "md",
                                      fullWidth: !0,
                                      onClick: async () => {
                                          a ? s() : (N(!0), await r([..._.values()]), N(!1));
                                      },
                                  }),
                              })
                          );
                      })({ eligibleRecipients: y }),
                      children: ((e) => {
                          let { eligibleRecipients: t } = e;
                          return (0, i.jsx)(M.A, {
                              users: Array.from(t.values()),
                              isUserSelected: (e) => _.has(e.id),
                              onSelectionChange: (e, t) => {
                                  R((s) => {
                                      let r = new Map(s);
                                      return t ? r.set(e.id, e) : r.delete(e.id), r;
                                  });
                              },
                              isFetching: O,
                              onFetchMore: T,
                              isUserDisabled: (e) =>
                                  null !== a &&
                                  0 !== a &&
                                  [..._.values()].filter((e) => !v.has(e.id)).length >= a &&
                                  !_.has(e.id) &&
                                  !v.has(e.id),
                              searchQuery: f,
                              emptySearchContent: {
                                  header: x.intl.string(x.t["8+ywHD"]),
                                  body: x.intl.string(x.t.CgQmY2),
                              },
                              className: U.p_,
                          });
                      })({ eligibleRecipients: y }),
                  });
    },
    C = (e) => {
        let t,
            { transitionState: s, onClose: r, onShare: a } = e,
            E = (0, c.bG)([g.A], () => g.A.getRecipientStatus()),
            [_, R] = n.useState(new Map()),
            [I, S] = n.useState(new Map()),
            [h, A] = n.useState(!1);
        return (
            n.useEffect(() => {
                (async () => {
                    let e = new Map();
                    for (let [t, s] of E) {
                        if (p.A.isBlockedOrIgnored(t)) continue;
                        let r = await (0, d.wz)(t);
                        (r.referralStatus = s), e.set(r.id, r);
                    }
                    R(e);
                })();
            }, [E]),
            (0, i.jsx)(u.Modal, {
                size: "md",
                transitionState: s,
                title: x.intl.string(x.t.rKmy8I),
                subtitle: x.intl.string(x.t.VDlF6o),
                onClose: r,
                actions: [],
                actionBarInput:
                    ((t = I.size <= 1 ? x.intl.string(x.t.ItpQxk) : x.intl.format(x.t.iW2stn, { nTrials: I.size })),
                    (0, i.jsx)("div", {
                        className: l()(U.qr, U.h0),
                        children: (0, i.jsx)(o.Button, {
                            variant: "primary",
                            disabled: 0 === I.size || h,
                            text: t,
                            size: "md",
                            fullWidth: !0,
                            onClick: async () => {
                                A(!0), await a([...I.values()]), A(!1);
                            },
                        }),
                    })),
                children: (0, i.jsx)(M.A, {
                    users: Array.from(_.values()),
                    isUserSelected: (e) => I.has(e.id),
                    isUserDisabled: (e) => e.referralStatus === f.aK.REDEEMED,
                    onSelectionChange: (e, t) => {
                        S((s) => {
                            let r = new Map(s);
                            return t ? r.set(e.id, e) : r.delete(e.id), r;
                        });
                    },
                    className: U.p_,
                }),
            })
        );
    };
var O =
    (((r = {})[(r.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
    (r[(r.CONFIRMATION = 2)] = "CONFIRMATION"),
    (r[(r.REMINDER = 3)] = "REMINDER"),
    r);
let v = (e) => {
    let { transitionState: t, onClose: s, startingScreen: r = 1 } = e,
        a = (0, c.bG)([g.A], () => g.A.getReferralsRemaining()),
        [l, u] = n.useState(r),
        [d, E] = n.useState([]),
        { analyticsLocations: p } = (0, R.Ay)([_.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
        S = async (e) => {
            I.default.track(P.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: p });
            let t = await (0, f.xm)(Object.values(e).map((e) => e.id));
            E(e.map((e) => ({ recipient: e, status: t.get(e.id) }))), u(2);
        };
    return null === a
        ? (0, i.jsx)(o.y$y, {})
        : 2 === l
          ? (0, i.jsx)(m.h, { transitionState: t, isReminderConfirmation: 3 === r, results: d, onClose: s })
          : 1 === l
            ? (0, i.jsx)(T, { transitionState: t, onClose: s, onShare: S })
            : 3 === l
              ? (0, i.jsx)(C, { transitionState: t, onClose: s, onShare: S })
              : void 0;
};
