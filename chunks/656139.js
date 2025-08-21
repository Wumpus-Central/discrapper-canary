n.d(t, {
    K: () => P,
    default: () => w,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(257465),
    c = n(82659),
    u = n(481060),
    d = n(232567),
    f = n(794433),
    _ = n(480466),
    p = n(434650),
    h = n(100527),
    m = n(906732),
    g = n(626135),
    E = n(63063),
    b = n(51144),
    y = n(281494),
    O = n(276444),
    v = n(955839),
    I = n(28061),
    T = n(382271),
    S = n(981631),
    A = n(388032),
    C = n(476034);
let N = (e) => {
        let { onClose: t, onShare: n } = e,
            a = (0, s.e7)([O.Z], () => O.Z.getReferralsRemaining()),
            d = (0, s.e7)([O.Z], () => O.Z.getHasEligibleFriends()),
            [h, m] = i.useState(new Map()),
            [g, y] = i.useState(""),
            T = (0, _.Z)(g, 400),
            {
                eligibleUsers: N,
                fetchUsers: R,
                hasError: P,
                isFetching: w,
                resendUsers: D,
            } = (0, v.q)({
                searchQuery: T,
                selectedUsers: h,
            }),
            [x, L] = i.useState(!1),
            j = (0, p.O)((e) => {
                e && !w && R();
            }),
            M = N.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map()),
            k = () =>
                (0, r.jsx)(f.Z, {
                    className: C.searchbar,
                    size: f.Z.Sizes.MEDIUM,
                    tags: [...h.values()].map((e) => b.ZP.getName(e)),
                    placeholder: 0 === h.size ? A.intl.string(A.t.Kd5RaG) : "",
                    query: g,
                    onRemoveTag: (e) => {
                        m((t) => {
                            let n = [...t.values()][e],
                                r = new Map(t);
                            return r.delete(n.id), r;
                        });
                    },
                    onQueryChange: y,
                    onClear: () => y(""),
                }),
            U = (e) => {
                let i,
                    { eligibleRecipients: a } = e,
                    s = T.length > 0 && 0 === a.size;
                return (
                    (i =
                        !0 === s
                            ? A.intl.string(A.t.wpSqAQ)
                            : h.size <= 1
                              ? A.intl.string(A.t.ItpQxs)
                              : A.intl.format(A.t.iW2str, { nTrials: h.size })),
                    (0, r.jsx)("div", {
                        className: o()(C.footer, C.footerSeparator),
                        children: (0, r.jsx)(u.zxk, {
                            variant: "primary",
                            disabled: (0 === h.size && !s) || x,
                            text: i,
                            size: "md",
                            fullWidth: !0,
                            onClick: async () => {
                                if (s) return void t();
                                L(!0), await n([...h.values()]), L(!1);
                            },
                        }),
                    })
                );
            },
            G = (e) => {
                let { eligibleRecipients: t } = e;
                return !0 == (T.length > 0 && 0 === t.size)
                    ? (0, r.jsxs)("div", {
                          className: C.emptySearchResultsContainer,
                          children: [
                              (0, r.jsx)(u.X6q, {
                                  variant: "heading-md/semibold",
                                  color: "header-primary",
                                  children: A.intl.string(A.t["8+ywHB"]),
                              }),
                              (0, r.jsx)(u.Text, {
                                  variant: "text-md/medium",
                                  color: "text-secondary",
                                  children: A.intl.string(A.t.CgQmY2),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(u.u2D, {
                          className: C.list,
                          children: [
                              Array.from(t.values()).map((e) =>
                                  (0, r.jsx)(
                                      I.Z,
                                      {
                                          disabled:
                                              null !== a &&
                                              0 !== a &&
                                              [...h.values()].filter((e) => !D.has(e.id)).length >= a &&
                                              !h.has(e.id) &&
                                              !D.has(e.id),
                                          checked: h.has(e.id),
                                          user: e,
                                          onChange: (e, t) => {
                                              m((n) => {
                                                  let r = new Map(n);
                                                  return t ? r.set(e.id, e) : r.delete(e.id), r;
                                              });
                                          },
                                      },
                                      e.id,
                                  ),
                              ),
                              w && (0, r.jsx)(u.$jN, {}),
                              (0, r.jsx)("div", { ref: j }),
                          ],
                      });
            };
        return null === a
            ? (0, r.jsx)(u.$jN, {})
            : P
              ? (0, r.jsx)(c.Modal, {
                    transitionState: l.D.ENTERED,
                    size: "sm",
                    title: A.intl.string(A.t.lcuio6),
                    subtitle: A.intl.string(A.t["x09+CA"]),
                    onClose: t,
                    actions: [],
                })
              : !1 === d
                ? (0, r.jsx)(c.Modal, {
                      transitionState: l.D.ENTERED,
                      size: "sm",
                      title: A.intl.string(A.t["2YigPj"]),
                      subtitle: A.intl.format(A.t.OOCbz8, {
                          helpdeskArticle: E.Z.getArticleURL(S.BhN.REFERRAL_PROGRAM),
                      }),
                      onClose: t,
                      actions: [],
                  })
                : (0, r.jsx)(c.Modal, {
                      size: "md",
                      transitionState: l.D.ENTERED,
                      title: A.intl.string(A.t["2dVCLi"]),
                      subtitle: A.intl.string(A.t.DXgoi4),
                      onClose: t,
                      input: k(),
                      actions: [],
                      actionBarInput: U({ eligibleRecipients: M }),
                      children: G({ eligibleRecipients: M }),
                  });
    },
    R = (e) => {
        let { onClose: t, onShare: n } = e,
            a = (0, s.e7)([O.Z], () => O.Z.getRecipientStatus()),
            [f, _] = i.useState(new Map()),
            [p, h] = i.useState(new Map()),
            [m, g] = i.useState(!1);
        i.useEffect(() => {
            (async () => {
                let e = new Map();
                for (let [t, n] of a) {
                    let r = await (0, d.PR)(t);
                    (r.referralStatus = n), e.set(r.id, r);
                }
                _(e);
            })();
        }, [a]);
        let E = () => {
            let e;
            return (
                (e = p.size <= 1 ? A.intl.string(A.t.ItpQxs) : A.intl.format(A.t.iW2str, { nTrials: p.size })),
                (0, r.jsx)("div", {
                    className: o()(C.footer, C.footerSeparator),
                    children: (0, r.jsx)(u.zxk, {
                        variant: "primary",
                        disabled: 0 === p.size || m,
                        text: e,
                        size: "md",
                        fullWidth: !0,
                        onClick: async () => {
                            g(!0), await n([...p.values()]), g(!1);
                        },
                    }),
                })
            );
        };
        return (0, r.jsx)(c.Modal, {
            size: "md",
            transitionState: l.D.ENTERED,
            title: A.intl.string(A.t.rKmy8P),
            subtitle: A.intl.string(A.t.VDlF6u),
            onClose: t,
            actions: [],
            actionBarInput: E(),
            children: (0, r.jsx)(u.u2D, {
                className: C.list,
                children: Array.from(f.values()).map((e) =>
                    (0, r.jsx)(
                        I.Z,
                        {
                            checked: p.has(e.id),
                            disabled: e.referralStatus === y.Fe.REDEEMED,
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
            }),
        });
    };
var P = (function (e) {
    return (
        (e[(e.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
        (e[(e.CONFIRMATION = 2)] = "CONFIRMATION"),
        (e[(e.REMINDER = 3)] = "REMINDER"),
        e
    );
})({});
let w = (e) => {
    let { onClose: t, startingScreen: n = 1 } = e,
        a = (0, s.e7)([O.Z], () => O.Z.getReferralsRemaining()),
        [o, l] = i.useState(n),
        [c, d] = i.useState([]),
        { analyticsLocations: f } = (0, m.ZP)([h.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
        _ = async (e) => {
            g.default.track(S.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: f });
            let t = await (0, y.jy)(Object.values(e).map((e) => e.id));
            d(
                e.map((e) => ({
                    recipient: e,
                    status: t.get(e.id),
                })),
            ),
                l(2);
        };
    if (null === a) return (0, r.jsx)(u.$jN, {});
    if (2 === o) {
        let e = 3 === n;
        return (0, r.jsx)(T.m, {
            isReminderConfirmation: e,
            results: c,
            onClose: t,
        });
    }
    return 1 === o
        ? (0, r.jsx)(N, {
              onClose: t,
              onShare: _,
          })
        : 3 === o
          ? (0, r.jsx)(R, {
                onClose: t,
                onShare: _,
            })
          : void 0;
};
