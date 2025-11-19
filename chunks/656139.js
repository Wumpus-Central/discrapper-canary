n.d(t, {
    SelectFriendsModalScreens: () => N,
    default: () => R,
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
    _ = n(100527),
    p = n(906732),
    h = n(626135),
    m = n(63063),
    g = n(51144),
    E = n(281494),
    b = n(276444),
    y = n(904399),
    O = n(955839),
    v = n(382271),
    I = n(981631),
    T = n(388032),
    S = n(400889);
let A = (e) => {
        let { onClose: t, onShare: n } = e,
            a = (0, l.e7)([b.Z], () => b.Z.getReferralsRemaining()),
            u = (0, l.e7)([b.Z], () => b.Z.getHasEligibleFriends()),
            [_, p] = i.useState(new Map()),
            [h, E] = i.useState(""),
            v = (0, f.Z)(h, 400),
            {
                eligibleUsers: A,
                fetchUsers: C,
                hasError: N,
                isFetching: R,
                resendUsers: P,
            } = (0, O.q)({
                searchQuery: v,
                selectedUsers: _,
            }),
            [D, w] = i.useState(!1),
            L = A.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map()),
            x = () =>
                (0, r.jsx)(d.Z, {
                    className: S.searchbar,
                    size: d.Z.Sizes.MEDIUM,
                    tags: [..._.values()].map((e) => g.ZP.getName(e)),
                    placeholder: 0 === _.size ? T.intl.string(T.t.Kd5RaI) : "",
                    query: h,
                    onRemoveTag: (e) => {
                        p((t) => {
                            let n = [...t.values()][e],
                                r = new Map(t);
                            return r.delete(n.id), r;
                        });
                    },
                    onQueryChange: E,
                    onClear: () => E(""),
                }),
            M = (e) => {
                let i,
                    { eligibleRecipients: a } = e,
                    s = v.length > 0 && 0 === a.size;
                return (
                    (i =
                        !0 === s
                            ? T.intl.string(T.t.wpSqAW)
                            : _.size <= 1
                              ? T.intl.string(T.t.ItpQxk)
                              : T.intl.format(T.t.iW2stn, { nTrials: _.size })),
                    (0, r.jsx)("div", {
                        className: o()(S.footer, S.footerSeparator),
                        children: (0, r.jsx)(c.Button, {
                            variant: "primary",
                            disabled: (0 === _.size && !s) || D,
                            text: i,
                            size: "md",
                            fullWidth: !0,
                            onClick: async () => {
                                if (s) return void t();
                                w(!0), await n([..._.values()]), w(!1);
                            },
                        }),
                    })
                );
            },
            j = (e) => {
                let { eligibleRecipients: t } = e;
                return (0, r.jsx)(y.Z, {
                    users: t,
                    selectedUsers: _,
                    onSelectionChange: (e, t) => {
                        p((n) => {
                            let r = new Map(n);
                            return t ? r.set(e.id, e) : r.delete(e.id), r;
                        });
                    },
                    isFetching: R,
                    onFetchMore: C,
                    isUserDisabled: (e) =>
                        null !== a &&
                        0 !== a &&
                        [..._.values()].filter((e) => !P.has(e.id)).length >= a &&
                        !_.has(e.id) &&
                        !P.has(e.id),
                    searchQuery: v,
                    emptySearchContent: {
                        header: T.intl.string(T.t["8+ywHD"]),
                        body: T.intl.string(T.t.CgQmY2),
                    },
                    className: S.list,
                });
            };
        return null === a
            ? (0, r.jsx)(c.$jN, {})
            : N
              ? (0, r.jsx)(s.Modal, {
                    transitionState: s.Dvm.ENTERED,
                    size: "sm",
                    title: T.intl.string(T.t.lcuio4),
                    subtitle: T.intl.string(T.t["x09+CD"]),
                    onClose: t,
                    actions: [],
                })
              : !1 === u
                ? (0, r.jsx)(s.Modal, {
                      transitionState: s.Dvm.ENTERED,
                      size: "sm",
                      title: T.intl.string(T.t["2YigPp"]),
                      subtitle: T.intl.format(T.t.OOCbz8, {
                          helpdeskArticle: m.Z.getArticleURL(I.BhN.REFERRAL_PROGRAM),
                      }),
                      onClose: t,
                      actions: [],
                  })
                : (0, r.jsx)(s.Modal, {
                      size: "md",
                      transitionState: s.Dvm.ENTERED,
                      title: T.intl.string(T.t["2dVCLl"]),
                      subtitle: T.intl.string(T.t.DXgoi2),
                      onClose: t,
                      input: x(),
                      actions: [],
                      actionBarInput: M({ eligibleRecipients: L }),
                      children: j({ eligibleRecipients: L }),
                  });
    },
    C = (e) => {
        let { onClose: t, onShare: n } = e,
            a = (0, l.e7)([b.Z], () => b.Z.getRecipientStatus()),
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
                (e = _.size <= 1 ? T.intl.string(T.t.ItpQxk) : T.intl.format(T.t.iW2stn, { nTrials: _.size })),
                (0, r.jsx)("div", {
                    className: o()(S.footer, S.footerSeparator),
                    children: (0, r.jsx)(c.Button, {
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
            title: T.intl.string(T.t.rKmy8I),
            subtitle: T.intl.string(T.t.VDlF6o),
            onClose: t,
            actions: [],
            actionBarInput: g(),
            children: (0, r.jsx)(y.Z, {
                users: d,
                selectedUsers: _,
                isUserDisabled: (e) => e.referralStatus === E.Fe.REDEEMED,
                onSelectionChange: (e, t) => {
                    p((n) => {
                        let r = new Map(n);
                        return t ? r.set(e.id, e) : r.delete(e.id), r;
                    });
                },
                className: S.list,
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
let R = (e) => {
    let { onClose: t, startingScreen: n = 1 } = e,
        a = (0, l.e7)([b.Z], () => b.Z.getReferralsRemaining()),
        [o, s] = i.useState(n),
        [u, d] = i.useState([]),
        { analyticsLocations: f } = (0, p.ZP)([_.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
        m = async (e) => {
            h.default.track(I.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: f });
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
              onShare: m,
          })
        : 3 === o
          ? (0, r.jsx)(C, {
                onClose: t,
                onShare: m,
            })
          : void 0;
};
