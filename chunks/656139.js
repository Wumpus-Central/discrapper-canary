n.d(t, {
    SelectFriendsModalScreens: () => A,
    default: () => N,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(481060),
    u = n(232567),
    d = n(480466),
    f = n(100527),
    p = n(906732),
    _ = n(626135),
    m = n(63063),
    h = n(51144),
    g = n(281494),
    E = n(276444),
    b = n(904399),
    y = n(955839),
    O = n(382271),
    v = n(981631),
    S = n(388032),
    I = n(14515);
let T = (e) => {
        let { onClose: t, onShare: n } = e,
            a = (0, l.e7)([E.Z], () => E.Z.getReferralsRemaining()),
            u = (0, l.e7)([E.Z], () => E.Z.getHasEligibleFriends()),
            [f, p] = i.useState(new Map()),
            [_, g] = i.useState(""),
            O = (0, d.Z)(_, 400),
            {
                eligibleUsers: T,
                fetchUsers: C,
                hasError: A,
                isFetching: N,
                resendUsers: P,
            } = (0, y.q)({
                searchQuery: O,
                selectedUsers: f,
            }),
            [R, w] = i.useState(!1),
            D = T.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map()),
            x = () =>
                (0, r.jsx)(c.uzC, {
                    selectionMode: "multiple",
                    value: Array.from(f.values()),
                    options: Array.from(D.values()),
                    formatOption: (e) => {
                        let t = e;
                        return {
                            id: t.id,
                            value: t,
                            label: h.ZP.getName(t),
                        };
                    },
                    onSelectionChange: (e) => {
                        let t = Array.isArray(e) ? e : [e],
                            n = new Map();
                        t.forEach((e) => {
                            null != e && n.set(e.id, e);
                        }),
                            p(n);
                    },
                    children: (0, r.jsx)("div", {
                        className: I.searchbar,
                        children: (0, r.jsx)(c.CtY, {
                            placeholder: 0 === f.size ? S.intl.string(S.t.Kd5RaI) : "",
                            onQueryChange: (e) => {
                                g(e.target.value);
                            },
                        }),
                    }),
                }),
            L = (e) => {
                let i,
                    { eligibleRecipients: a } = e,
                    s = O.length > 0 && 0 === a.size;
                return (
                    (i =
                        !0 === s
                            ? S.intl.string(S.t.wpSqAW)
                            : f.size <= 1
                              ? S.intl.string(S.t.ItpQxk)
                              : S.intl.format(S.t.iW2stn, { nTrials: f.size })),
                    (0, r.jsx)("div", {
                        className: o()(I.footer, I.footerSeparator),
                        children: (0, r.jsx)(c.Button, {
                            variant: "primary",
                            disabled: (0 === f.size && !s) || R,
                            text: i,
                            size: "md",
                            fullWidth: !0,
                            onClick: async () => {
                                if (s) return void t();
                                w(!0), await n([...f.values()]), w(!1);
                            },
                        }),
                    })
                );
            },
            j = (e) => {
                let { eligibleRecipients: t } = e;
                return (0, r.jsx)(b.Z, {
                    users: Array.from(t.values()),
                    isUserSelected: (e) => f.has(e.id),
                    onSelectionChange: (e, t) => {
                        p((n) => {
                            let r = new Map(n);
                            return t ? r.set(e.id, e) : r.delete(e.id), r;
                        });
                    },
                    isFetching: N,
                    onFetchMore: C,
                    isUserDisabled: (e) =>
                        null !== a &&
                        0 !== a &&
                        [...f.values()].filter((e) => !P.has(e.id)).length >= a &&
                        !f.has(e.id) &&
                        !P.has(e.id),
                    searchQuery: O,
                    emptySearchContent: {
                        header: S.intl.string(S.t["8+ywHD"]),
                        body: S.intl.string(S.t.CgQmY2),
                    },
                    className: I.list,
                });
            };
        return null === a
            ? (0, r.jsx)(c.$jN, {})
            : A
              ? (0, r.jsx)(s.Modal, {
                    transitionState: s.Dvm.ENTERED,
                    size: "sm",
                    title: S.intl.string(S.t.lcuio4),
                    subtitle: S.intl.string(S.t["x09+CD"]),
                    onClose: t,
                    actions: [],
                })
              : !1 === u
                ? (0, r.jsx)(s.Modal, {
                      transitionState: s.Dvm.ENTERED,
                      size: "sm",
                      title: S.intl.string(S.t["2YigPp"]),
                      subtitle: S.intl.format(S.t.OOCbz8, {
                          helpdeskArticle: m.Z.getArticleURL(v.BhN.REFERRAL_PROGRAM),
                      }),
                      onClose: t,
                      actions: [],
                  })
                : (0, r.jsx)(s.Modal, {
                      size: "md",
                      transitionState: s.Dvm.ENTERED,
                      title: S.intl.string(S.t["2dVCLl"]),
                      subtitle: S.intl.string(S.t.DXgoi2),
                      onClose: t,
                      input: x(),
                      actions: [],
                      actionBarInput: L({ eligibleRecipients: D }),
                      children: j({ eligibleRecipients: D }),
                  });
    },
    C = (e) => {
        let { onClose: t, onShare: n } = e,
            a = (0, l.e7)([E.Z], () => E.Z.getRecipientStatus()),
            [d, f] = i.useState(new Map()),
            [p, _] = i.useState(new Map()),
            [m, h] = i.useState(!1);
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
        let y = () => {
            let e;
            return (
                (e = p.size <= 1 ? S.intl.string(S.t.ItpQxk) : S.intl.format(S.t.iW2stn, { nTrials: p.size })),
                (0, r.jsx)("div", {
                    className: o()(I.footer, I.footerSeparator),
                    children: (0, r.jsx)(c.Button, {
                        variant: "primary",
                        disabled: 0 === p.size || m,
                        text: e,
                        size: "md",
                        fullWidth: !0,
                        onClick: async () => {
                            h(!0), await n([...p.values()]), h(!1);
                        },
                    }),
                })
            );
        };
        return (0, r.jsx)(s.Modal, {
            size: "md",
            transitionState: s.Dvm.ENTERED,
            title: S.intl.string(S.t.rKmy8I),
            subtitle: S.intl.string(S.t.VDlF6o),
            onClose: t,
            actions: [],
            actionBarInput: y(),
            children: (0, r.jsx)(b.Z, {
                users: Array.from(d.values()),
                isUserSelected: (e) => p.has(e.id),
                isUserDisabled: (e) => e.referralStatus === g.Fe.REDEEMED,
                onSelectionChange: (e, t) => {
                    _((n) => {
                        let r = new Map(n);
                        return t ? r.set(e.id, e) : r.delete(e.id), r;
                    });
                },
                className: I.list,
            }),
        });
    };
var A = (function (e) {
    return (
        (e[(e.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
        (e[(e.CONFIRMATION = 2)] = "CONFIRMATION"),
        (e[(e.REMINDER = 3)] = "REMINDER"),
        e
    );
})({});
let N = (e) => {
    let { onClose: t, startingScreen: n = 1 } = e,
        a = (0, l.e7)([E.Z], () => E.Z.getReferralsRemaining()),
        [o, s] = i.useState(n),
        [u, d] = i.useState([]),
        { analyticsLocations: m } = (0, p.ZP)([f.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
        h = async (e) => {
            _.default.track(v.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: m });
            let t = await (0, g.jy)(Object.values(e).map((e) => e.id));
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
        return (0, r.jsx)(O.m, {
            isReminderConfirmation: e,
            results: u,
            onClose: t,
        });
    }
    return 1 === o
        ? (0, r.jsx)(T, {
              onClose: t,
              onShare: h,
          })
        : 3 === o
          ? (0, r.jsx)(C, {
                onClose: t,
                onShare: h,
            })
          : void 0;
};
