n.d(t, {
    K: () => w,
    default: () => D,
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
    E = n(51144),
    b = n(281494),
    y = n(276444),
    O = n(687555),
    v = n(955839),
    I = n(553874),
    T = n(28061),
    S = n(382271),
    A = n(981631),
    C = n(388032),
    N = n(476034);
let R = (e) => {
        let { onClose: t, onShare: n } = e,
            a = (0, s.e7)([y.Z], () => y.Z.getReferralsRemaining()),
            [d, h] = i.useState(new Map()),
            [m, g] = i.useState(""),
            b = (0, _.Z)(m, 400),
            {
                eligibleUsers: S,
                fetchUsers: A,
                hasError: R,
                isFetching: P,
                resendUsers: w,
            } = (0, v.q)({
                searchQuery: b,
                selectedUsers: d,
            }),
            [D, x] = i.useState(!1),
            L = (0, p.O)((e) => {
                e && !P && A();
            }),
            j = S.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map()),
            M = () =>
                (0, r.jsx)(f.Z, {
                    className: N.searchbar,
                    size: f.Z.Sizes.MEDIUM,
                    tags: [...d.values()].map((e) => E.ZP.getName(e)),
                    placeholder: 0 === d.size ? C.intl.string(C.t.Kd5RaG) : "",
                    query: m,
                    onRemoveTag: (e) => {
                        h((t) => {
                            let n = [...t.values()][e],
                                r = new Map(t);
                            return r.delete(n.id), r;
                        });
                    },
                    onQueryChange: g,
                    onClear: () => g(""),
                }),
            k = (e) => {
                let i,
                    { eligibleRecipients: a } = e,
                    s = b.length > 0 && 0 === a.size;
                return (
                    (i =
                        !0 === s
                            ? C.intl.string(C.t.wpSqAQ)
                            : d.size <= 1
                              ? C.intl.string(C.t.ItpQxs)
                              : C.intl.format(C.t.iW2str, { nTrials: d.size })),
                    (0, r.jsx)("div", {
                        className: o()(N.footer, N.footerSeparator),
                        children: (0, r.jsx)(u.zxk, {
                            variant: "primary",
                            disabled: (0 === d.size && !s) || D,
                            text: i,
                            size: "md",
                            fullWidth: !0,
                            onClick: async () => {
                                if (s) return void t();
                                x(!0), await n([...d.values()]), x(!1);
                            },
                        }),
                    })
                );
            },
            U = (e) => {
                let { eligibleRecipients: t } = e;
                return !0 == (b.length > 0 && 0 === t.size)
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(O.ih, {}), (0, r.jsx)(O.d, {})],
                      })
                    : (0, r.jsxs)(u.u2D, {
                          className: N.list,
                          children: [
                              Array.from(t.values()).map((e) =>
                                  (0, r.jsx)(
                                      T.Z,
                                      {
                                          disabled:
                                              null !== a &&
                                              0 !== a &&
                                              [...d.values()].filter((e) => !w.has(e.id)).length >= a &&
                                              !d.has(e.id) &&
                                              !w.has(e.id),
                                          checked: d.has(e.id),
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
                              P && (0, r.jsx)(u.$jN, {}),
                              (0, r.jsx)("div", { ref: L }),
                          ],
                      });
            };
        return null === a
            ? (0, r.jsx)(u.$jN, {})
            : R
              ? (0, r.jsx)(I.P, { onClose: t })
              : (0, r.jsx)(c.Modal, {
                    size: "md",
                    transitionState: l.D.ENTERED,
                    title: C.intl.string(C.t["2dVCLi"]),
                    subtitle: C.intl.string(C.t.DXgoi4),
                    onClose: t,
                    input: M(),
                    actions: [],
                    actionBarInput: k({ eligibleRecipients: j }),
                    children: U({ eligibleRecipients: j }),
                });
    },
    P = (e) => {
        let { onClose: t, onShare: n } = e,
            a = (0, s.e7)([y.Z], () => y.Z.getRecipientStatus()),
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
                (e = p.size <= 1 ? C.intl.string(C.t.ItpQxs) : C.intl.format(C.t.iW2str, { nTrials: p.size })),
                (0, r.jsx)("div", {
                    className: o()(N.footer, N.footerSeparator),
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
            title: C.intl.string(C.t.rKmy8P),
            subtitle: C.intl.string(C.t.VDlF6u),
            onClose: t,
            actions: [],
            actionBarInput: E(),
            children: (0, r.jsx)(u.u2D, {
                className: N.list,
                children: Array.from(f.values()).map((e) =>
                    (0, r.jsx)(
                        T.Z,
                        {
                            checked: p.has(e.id),
                            disabled: e.referralStatus === b.Fe.REDEEMED,
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
var w = (function (e) {
    return (
        (e[(e.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
        (e[(e.CONFIRMATION = 2)] = "CONFIRMATION"),
        (e[(e.REMINDER = 3)] = "REMINDER"),
        e
    );
})({});
let D = (e) => {
    let { onClose: t, startingScreen: n = 1 } = e,
        a = (0, s.e7)([y.Z], () => y.Z.getReferralsRemaining()),
        [o, l] = i.useState(n),
        [c, d] = i.useState([]),
        { analyticsLocations: f } = (0, m.ZP)([h.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
        _ = async (e) => {
            g.default.track(A.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: f });
            let t = await (0, b.jy)(Object.values(e).map((e) => e.id));
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
        return (0, r.jsx)(S.m, {
            isReminderConfirmation: e,
            results: c,
            onClose: t,
        });
    }
    return 1 === o
        ? (0, r.jsx)(R, {
              onClose: t,
              onShare: _,
          })
        : 3 === o
          ? (0, r.jsx)(P, {
                onClose: t,
                onShare: _,
            })
          : void 0;
};
