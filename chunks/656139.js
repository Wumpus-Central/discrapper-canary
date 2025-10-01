n.d(t, {
    K: () => R,
    default: () => P,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(481060),
    u = n(232567),
    d = n(794433),
    f = n(480466),
    _ = n(434650),
    p = n(100527),
    h = n(906732),
    m = n(626135),
    g = n(63063),
    E = n(51144),
    b = n(281494),
    y = n(276444),
    O = n(955839),
    v = n(28061),
    I = n(382271),
    T = n(981631),
    S = n(388032),
    A = n(476034);
let C = (e) => {
        let { onClose: t, onShare: n } = e,
            a = (0, l.e7)([y.Z], () => y.Z.getReferralsRemaining()),
            u = (0, l.e7)([y.Z], () => y.Z.getHasEligibleFriends()),
            [p, h] = i.useState(new Map()),
            [m, b] = i.useState(""),
            I = (0, f.Z)(m, 400),
            {
                eligibleUsers: C,
                fetchUsers: N,
                hasError: R,
                isFetching: P,
                resendUsers: w,
            } = (0, O.q)({
                searchQuery: I,
                selectedUsers: p,
            }),
            [D, L] = i.useState(!1),
            x = (0, _.O)((e) => {
                e && !P && N();
            }),
            j = C.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map()),
            M = () =>
                (0, r.jsx)(d.Z, {
                    className: A.searchbar,
                    size: d.Z.Sizes.MEDIUM,
                    tags: [...p.values()].map((e) => E.ZP.getName(e)),
                    placeholder: 0 === p.size ? S.intl.string(S.t.Kd5RaG) : "",
                    query: m,
                    onRemoveTag: (e) => {
                        h((t) => {
                            let n = [...t.values()][e],
                                r = new Map(t);
                            return r.delete(n.id), r;
                        });
                    },
                    onQueryChange: b,
                    onClear: () => b(""),
                }),
            k = (e) => {
                let i,
                    { eligibleRecipients: a } = e,
                    s = I.length > 0 && 0 === a.size;
                return (
                    (i =
                        !0 === s
                            ? S.intl.string(S.t.wpSqAQ)
                            : p.size <= 1
                              ? S.intl.string(S.t.ItpQxs)
                              : S.intl.format(S.t.iW2str, { nTrials: p.size })),
                    (0, r.jsx)("div", {
                        className: o()(A.footer, A.footerSeparator),
                        children: (0, r.jsx)(c.zxk, {
                            variant: "primary",
                            disabled: (0 === p.size && !s) || D,
                            text: i,
                            size: "md",
                            fullWidth: !0,
                            onClick: async () => {
                                if (s) return void t();
                                L(!0), await n([...p.values()]), L(!1);
                            },
                        }),
                    })
                );
            },
            U = (e) => {
                let { eligibleRecipients: t } = e;
                return !0 == (I.length > 0 && 0 === t.size)
                    ? (0, r.jsxs)("div", {
                          className: A.emptySearchResultsContainer,
                          children: [
                              (0, r.jsx)(c.X6q, {
                                  variant: "heading-md/semibold",
                                  color: "header-primary",
                                  children: S.intl.string(S.t["8+ywHB"]),
                              }),
                              (0, r.jsx)(c.Text, {
                                  variant: "text-md/medium",
                                  color: "text-secondary",
                                  children: S.intl.string(S.t.CgQmY2),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(c.u2D, {
                          className: A.list,
                          children: [
                              Array.from(t.values()).map((e) =>
                                  (0, r.jsx)(
                                      v.Z,
                                      {
                                          disabled:
                                              null !== a &&
                                              0 !== a &&
                                              [...p.values()].filter((e) => !w.has(e.id)).length >= a &&
                                              !p.has(e.id) &&
                                              !w.has(e.id),
                                          checked: p.has(e.id),
                                          user: e,
                                          onChange: (e, t) => {
                                              h((n) => {
                                                  let r = new Map(n);
                                                  return t ? r.set(e.id, e) : r.delete(e.id), r;
                                              });
                                          },
                                      },
                                      e.id,
                                  ),
                              ),
                              P && (0, r.jsx)(c.$jN, {}),
                              (0, r.jsx)("div", { ref: x }),
                          ],
                      });
            };
        return null === a
            ? (0, r.jsx)(c.$jN, {})
            : R
              ? (0, r.jsx)(s.Modal, {
                    transitionState: s.Dvm.ENTERED,
                    size: "sm",
                    title: S.intl.string(S.t.lcuio6),
                    subtitle: S.intl.string(S.t["x09+CA"]),
                    onClose: t,
                    actions: [],
                })
              : !1 === u
                ? (0, r.jsx)(s.Modal, {
                      transitionState: s.Dvm.ENTERED,
                      size: "sm",
                      title: S.intl.string(S.t["2YigPj"]),
                      subtitle: S.intl.format(S.t.OOCbz8, {
                          helpdeskArticle: g.Z.getArticleURL(T.BhN.REFERRAL_PROGRAM),
                      }),
                      onClose: t,
                      actions: [],
                  })
                : (0, r.jsx)(s.Modal, {
                      size: "md",
                      transitionState: s.Dvm.ENTERED,
                      title: S.intl.string(S.t["2dVCLi"]),
                      subtitle: S.intl.string(S.t.DXgoi4),
                      onClose: t,
                      input: M(),
                      actions: [],
                      actionBarInput: k({ eligibleRecipients: j }),
                      children: U({ eligibleRecipients: j }),
                  });
    },
    N = (e) => {
        let { onClose: t, onShare: n } = e,
            a = (0, l.e7)([y.Z], () => y.Z.getRecipientStatus()),
            [d, f] = i.useState(new Map()),
            [_, p] = i.useState(new Map()),
            [h, m] = i.useState(!1);
        i.useEffect(() => {
            (async () => {
                let e = new Map();
                for (let [t, n] of a) {
                    let r = await (0, u.PR)(t);
                    (r.referralStatus = n), e.set(r.id, r);
                }
                f(e);
            })();
        }, [a]);
        let g = () => {
            let e;
            return (
                (e = _.size <= 1 ? S.intl.string(S.t.ItpQxs) : S.intl.format(S.t.iW2str, { nTrials: _.size })),
                (0, r.jsx)("div", {
                    className: o()(A.footer, A.footerSeparator),
                    children: (0, r.jsx)(c.zxk, {
                        variant: "primary",
                        disabled: 0 === _.size || h,
                        text: e,
                        size: "md",
                        fullWidth: !0,
                        onClick: async () => {
                            m(!0), await n([..._.values()]), m(!1);
                        },
                    }),
                })
            );
        };
        return (0, r.jsx)(s.Modal, {
            size: "md",
            transitionState: s.Dvm.ENTERED,
            title: S.intl.string(S.t.rKmy8P),
            subtitle: S.intl.string(S.t.VDlF6u),
            onClose: t,
            actions: [],
            actionBarInput: g(),
            children: (0, r.jsx)(c.u2D, {
                className: A.list,
                children: Array.from(d.values()).map((e) =>
                    (0, r.jsx)(
                        v.Z,
                        {
                            checked: _.has(e.id),
                            disabled: e.referralStatus === b.Fe.REDEEMED,
                            user: e,
                            onChange: (e, t) => {
                                p((n) => {
                                    let r = new Map(n);
                                    return t ? r.set(e.id, e) : r.delete(e.id), r;
                                });
                            },
                        },
                        e.id,
                    ),
                ),
            }),
        });
    };
var R = (function (e) {
    return (
        (e[(e.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
        (e[(e.CONFIRMATION = 2)] = "CONFIRMATION"),
        (e[(e.REMINDER = 3)] = "REMINDER"),
        e
    );
})({});
let P = (e) => {
    let { onClose: t, startingScreen: n = 1 } = e,
        a = (0, l.e7)([y.Z], () => y.Z.getReferralsRemaining()),
        [o, s] = i.useState(n),
        [u, d] = i.useState([]),
        { analyticsLocations: f } = (0, h.ZP)([p.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
        _ = async (e) => {
            m.default.track(T.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: f });
            let t = await (0, b.jy)(Object.values(e).map((e) => e.id));
            d(
                e.map((e) => ({
                    recipient: e,
                    status: t.get(e.id),
                })),
            ),
                s(2);
        };
    if (null === a) return (0, r.jsx)(c.$jN, {});
    if (2 === o) {
        let e = 3 === n;
        return (0, r.jsx)(I.m, {
            isReminderConfirmation: e,
            results: u,
            onClose: t,
        });
    }
    return 1 === o
        ? (0, r.jsx)(C, {
              onClose: t,
              onShare: _,
          })
        : 3 === o
          ? (0, r.jsx)(N, {
                onClose: t,
                onShare: _,
            })
          : void 0;
};
