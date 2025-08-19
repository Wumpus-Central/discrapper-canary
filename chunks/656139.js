r.d(t, {
    K: () => I,
    default: () => z,
}),
    r(388685);
var a,
    s = r(951288),
    n = r(647438),
    i = r(120356),
    l = r.n(i),
    c = r(442837),
    d = r(257465),
    o = r(82659),
    u = r(481060),
    m = r(232567),
    h = r(794433),
    f = r(480466),
    x = r(434650),
    g = r(100527),
    p = r(906732),
    j = r(626135),
    v = r(51144),
    N = r(281494),
    R = r(276444),
    b = r(687555),
    E = r(955839),
    S = r(553874),
    y = r(28061),
    Z = r(382271),
    w = r(981631),
    C = r(388032),
    P = r(476034);
let O = (e) => {
        let { onClose: t, onShare: r } = e,
            a = (0, c.e7)([R.Z], () => R.Z.getReferralsRemaining()),
            [i, m] = n.useState(new Map()),
            [g, p] = n.useState(""),
            j = (0, f.Z)(g, 400),
            {
                eligibleUsers: N,
                fetchUsers: Z,
                hasError: w,
                isFetching: O,
                resendUsers: M,
            } = (0, E.q)({
                searchQuery: j,
                selectedUsers: i,
            }),
            [I, z] = n.useState(!1),
            A = (0, x.O)((e) => {
                e && !O && Z();
            }),
            F = N.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map());
        return null === a
            ? (0, s.jsx)(u.$jN, {})
            : w
              ? (0, s.jsx)(S.P, { onClose: t })
              : (0, s.jsx)(o.Modal, {
                    size: "md",
                    transitionState: d.D.ENTERED,
                    title: C.intl.string(C.t["2dVCLi"]),
                    subtitle: C.intl.string(C.t.DXgoi4),
                    onClose: t,
                    input: (0, s.jsx)(h.Z, {
                        className: P.searchbar,
                        size: h.Z.Sizes.MEDIUM,
                        tags: [...i.values()].map((e) => v.ZP.getName(e)),
                        placeholder: 0 === i.size ? C.intl.string(C.t.Kd5RaG) : "",
                        query: g,
                        onRemoveTag: (e) => {
                            m((t) => {
                                let r = [...t.values()][e],
                                    a = new Map(t);
                                return a.delete(r.id), a;
                            });
                        },
                        onQueryChange: p,
                        onClear: () => p(""),
                    }),
                    actions: [],
                    actionBarInput: ((e) => {
                        let a,
                            { eligibleRecipients: n } = e,
                            c = j.length > 0 && 0 === n.size;
                        return (
                            (a =
                                !0 === c
                                    ? C.intl.string(C.t.wpSqAQ)
                                    : i.size <= 1
                                      ? C.intl.string(C.t.ItpQxs)
                                      : C.intl.format(C.t.iW2str, { nTrials: i.size })),
                            (0, s.jsx)("div", {
                                className: l()(P.footer, P.footerSeparator),
                                children: (0, s.jsx)(u.zxk, {
                                    variant: "primary",
                                    disabled: (0 === i.size && !c) || I,
                                    text: a,
                                    size: "md",
                                    fullWidth: !0,
                                    onClick: async () => {
                                        if (c) return void t();
                                        z(!0), await r([...i.values()]), z(!1);
                                    },
                                }),
                            })
                        );
                    })({ eligibleRecipients: F }),
                    children: ((e) => {
                        let { eligibleRecipients: t } = e;
                        return !0 == (j.length > 0 && 0 === t.size)
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [(0, s.jsx)(b.ih, {}), (0, s.jsx)(b.d, {})],
                              })
                            : (0, s.jsxs)(u.u2D, {
                                  className: P.list,
                                  children: [
                                      Array.from(t.values()).map((e) =>
                                          (0, s.jsx)(
                                              y.Z,
                                              {
                                                  disabled:
                                                      null !== a &&
                                                      0 !== a &&
                                                      [...i.values()].filter((e) => !M.has(e.id)).length >= a &&
                                                      !i.has(e.id) &&
                                                      !M.has(e.id),
                                                  checked: i.has(e.id),
                                                  user: e,
                                                  onChange: (e, t) => {
                                                      m((r) => {
                                                          let a = new Map(r);
                                                          return t ? a.set(e.id, e) : a.delete(e.id), a;
                                                      });
                                                  },
                                              },
                                              e.id,
                                          ),
                                      ),
                                      O && (0, s.jsx)(u.$jN, {}),
                                      (0, s.jsx)("div", { ref: A }),
                                  ],
                              });
                    })({ eligibleRecipients: F }),
                });
    },
    M = (e) => {
        let t,
            { onClose: r, onShare: a } = e,
            i = (0, c.e7)([R.Z], () => R.Z.getRecipientStatus()),
            [h, f] = n.useState(new Map()),
            [x, g] = n.useState(new Map()),
            [p, j] = n.useState(!1);
        return (
            n.useEffect(() => {
                (async () => {
                    let e = new Map();
                    for (let [t, r] of i) {
                        let a = await (0, m.PR)(t);
                        (a.referralStatus = r), e.set(a.id, a);
                    }
                    f(e);
                })();
            }, [i]),
            (0, s.jsx)(o.Modal, {
                size: "md",
                transitionState: d.D.ENTERED,
                title: C.intl.string(C.t.rKmy8P),
                subtitle: C.intl.string(C.t.VDlF6u),
                onClose: r,
                actions: [],
                actionBarInput:
                    ((t = x.size <= 1 ? C.intl.string(C.t.ItpQxs) : C.intl.format(C.t.iW2str, { nTrials: x.size })),
                    (0, s.jsx)("div", {
                        className: l()(P.footer, P.footerSeparator),
                        children: (0, s.jsx)(u.zxk, {
                            variant: "primary",
                            disabled: 0 === x.size || p,
                            text: t,
                            size: "md",
                            fullWidth: !0,
                            onClick: async () => {
                                j(!0), await a([...x.values()]), j(!1);
                            },
                        }),
                    })),
                children: (0, s.jsx)(u.u2D, {
                    className: P.list,
                    children: Array.from(h.values()).map((e) =>
                        (0, s.jsx)(
                            y.Z,
                            {
                                checked: x.has(e.id),
                                disabled: e.referralStatus === N.Fe.REDEEMED,
                                user: e,
                                onChange: (e, t) => {
                                    g((r) => {
                                        let a = new Map(r);
                                        return t ? a.set(e.id, e) : a.delete(e.id), a;
                                    });
                                },
                            },
                            e.id,
                        ),
                    ),
                }),
            })
        );
    };
var I =
    (((a = {})[(a.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
    (a[(a.CONFIRMATION = 2)] = "CONFIRMATION"),
    (a[(a.REMINDER = 3)] = "REMINDER"),
    a);
let z = (e) => {
    let { onClose: t, startingScreen: r = null } = e,
        a = (0, c.e7)([R.Z], () => R.Z.getReferralsRemaining()),
        [i, l] = n.useState(null !== r ? r : null !== a && a > 0 ? 1 : 3),
        [d, o] = n.useState(!1),
        [m, h] = n.useState([]),
        { analyticsLocations: f } = (0, p.ZP)([g.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
        x = async (e) => {
            j.default.track(w.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: f });
            let t = await (0, N.jy)(Object.values(e).map((e) => e.id));
            h(
                e.map((e) => ({
                    recipient: e,
                    status: t.get(e.id),
                })),
            ),
                3 === i && o(!0),
                l(2);
        };
    return null === a
        ? (0, s.jsx)(u.$jN, {})
        : 2 === i
          ? (0, s.jsx)(Z.m, {
                isReminderConfirmation: d,
                results: m,
                onClose: t,
            })
          : 1 === i
            ? (0, s.jsx)(O, {
                  onClose: t,
                  onShare: x,
              })
            : 3 === i
              ? (0, s.jsx)(M, {
                    onClose: t,
                    onShare: x,
                })
              : void 0;
};
