n.d(t, {
    SelectFriendsModalScreens: () => N,
    default: () => P,
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
    d = n(794433),
    f = n(480466),
    p = n(100527),
    _ = n(906732),
    m = n(626135),
    h = n(63063),
    g = n(51144),
    E = n(281494),
    b = n(276444),
    y = n(904399),
    O = n(955839),
    v = n(382271),
    S = n(981631),
    I = n(388032),
    T = n(476034);
let A = (e) => {
        let { onClose: t, onShare: n } = e,
            a = (0, l.e7)([b.Z], () => b.Z.getReferralsRemaining()),
            u = (0, l.e7)([b.Z], () => b.Z.getHasEligibleFriends()),
            [p, _] = i.useState(new Map()),
            [m, E] = i.useState(""),
            v = (0, f.Z)(m, 400),
            {
                eligibleUsers: A,
                fetchUsers: C,
                hasError: N,
                isFetching: P,
                resendUsers: R,
            } = (0, O.q)({
                searchQuery: v,
                selectedUsers: p,
            }),
            [w, D] = i.useState(!1),
            x = A.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map()),
            L = () =>
                (0, r.jsx)(d.Z, {
                    className: T.searchbar,
                    size: d.Z.Sizes.MEDIUM,
                    tags: [...p.values()].map((e) => g.ZP.getName(e)),
                    placeholder: 0 === p.size ? I.intl.string(I.t.Kd5RaI) : "",
                    query: m,
                    onRemoveTag: (e) => {
                        _((t) => {
                            let n = [...t.values()][e],
                                r = new Map(t);
                            return r.delete(n.id), r;
                        });
                    },
                    onQueryChange: E,
                    onClear: () => E(""),
                }),
            j = (e) => {
                let i,
                    { eligibleRecipients: a } = e,
                    s = v.length > 0 && 0 === a.size;
                return (
                    (i =
                        !0 === s
                            ? I.intl.string(I.t.wpSqAW)
                            : p.size <= 1
                              ? I.intl.string(I.t.ItpQxk)
                              : I.intl.format(I.t.iW2stn, { nTrials: p.size })),
                    (0, r.jsx)("div", {
                        className: o()(T.footer, T.footerSeparator),
                        children: (0, r.jsx)(c.Button, {
                            variant: "primary",
                            disabled: (0 === p.size && !s) || w,
                            text: i,
                            size: "md",
                            fullWidth: !0,
                            onClick: async () => {
                                if (s) return void t();
                                D(!0), await n([...p.values()]), D(!1);
                            },
                        }),
                    })
                );
            },
            M = (e) => {
                let { eligibleRecipients: t } = e;
                return (0, r.jsx)(y.Z, {
                    users: Array.from(t.values()),
                    isUserSelected: (e) => p.has(e.id),
                    onSelectionChange: (e, t) => {
                        _((n) => {
                            let r = new Map(n);
                            return t ? r.set(e.id, e) : r.delete(e.id), r;
                        });
                    },
                    isFetching: P,
                    onFetchMore: C,
                    isUserDisabled: (e) =>
                        null !== a &&
                        0 !== a &&
                        [...p.values()].filter((e) => !R.has(e.id)).length >= a &&
                        !p.has(e.id) &&
                        !R.has(e.id),
                    searchQuery: v,
                    emptySearchContent: {
                        header: I.intl.string(I.t["8+ywHD"]),
                        body: I.intl.string(I.t.CgQmY2),
                    },
                    className: T.list,
                });
            };
        return null === a
            ? (0, r.jsx)(c.$jN, {})
            : N
              ? (0, r.jsx)(s.Modal, {
                    transitionState: s.Dvm.ENTERED,
                    size: "sm",
                    title: I.intl.string(I.t.lcuio4),
                    subtitle: I.intl.string(I.t["x09+CD"]),
                    onClose: t,
                    actions: [],
                })
              : !1 === u
                ? (0, r.jsx)(s.Modal, {
                      transitionState: s.Dvm.ENTERED,
                      size: "sm",
                      title: I.intl.string(I.t["2YigPp"]),
                      subtitle: I.intl.format(I.t.OOCbz8, {
                          helpdeskArticle: h.Z.getArticleURL(S.BhN.REFERRAL_PROGRAM),
                      }),
                      onClose: t,
                      actions: [],
                  })
                : (0, r.jsx)(s.Modal, {
                      size: "md",
                      transitionState: s.Dvm.ENTERED,
                      title: I.intl.string(I.t["2dVCLl"]),
                      subtitle: I.intl.string(I.t.DXgoi2),
                      onClose: t,
                      input: L(),
                      actions: [],
                      actionBarInput: j({ eligibleRecipients: x }),
                      children: M({ eligibleRecipients: x }),
                  });
    },
    C = (e) => {
        let { onClose: t, onShare: n } = e,
            a = (0, l.e7)([b.Z], () => b.Z.getRecipientStatus()),
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
        let g = () => {
            let e;
            return (
                (e = p.size <= 1 ? I.intl.string(I.t.ItpQxk) : I.intl.format(I.t.iW2stn, { nTrials: p.size })),
                (0, r.jsx)("div", {
                    className: o()(T.footer, T.footerSeparator),
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
            title: I.intl.string(I.t.rKmy8I),
            subtitle: I.intl.string(I.t.VDlF6o),
            onClose: t,
            actions: [],
            actionBarInput: g(),
            children: (0, r.jsx)(y.Z, {
                users: Array.from(d.values()),
                isUserSelected: (e) => p.has(e.id),
                isUserDisabled: (e) => e.referralStatus === E.Fe.REDEEMED,
                onSelectionChange: (e, t) => {
                    _((n) => {
                        let r = new Map(n);
                        return t ? r.set(e.id, e) : r.delete(e.id), r;
                    });
                },
                className: T.list,
            }),
        });
    };
var N = (function (e) {
    return (
        (e[(e.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
        (e[(e.CONFIRMATION = 2)] = "CONFIRMATION"),
        (e[(e.REMINDER = 3)] = "REMINDER"),
        e
    );
})({});
let P = (e) => {
    let { onClose: t, startingScreen: n = 1 } = e,
        a = (0, l.e7)([b.Z], () => b.Z.getReferralsRemaining()),
        [o, s] = i.useState(n),
        [u, d] = i.useState([]),
        { analyticsLocations: f } = (0, _.ZP)([p.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
        h = async (e) => {
            m.default.track(S.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: f });
            let t = await (0, E.jy)(Object.values(e).map((e) => e.id));
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
        return (0, r.jsx)(v.m, {
            isReminderConfirmation: e,
            results: u,
            onClose: t,
        });
    }
    return 1 === o
        ? (0, r.jsx)(A, {
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
