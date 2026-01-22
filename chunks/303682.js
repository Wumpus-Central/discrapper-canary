n.d(t, {
    SelectFriendsModalScreens: () => C,
    default: () => N,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(397927),
    u = n(803306),
    d = n(718213),
    f = n(793574),
    p = n(688810),
    _ = n(954571),
    h = n(975571),
    m = n(427262),
    g = n(326084),
    E = n(851746),
    b = n(761546),
    y = n(972007),
    O = n(636184),
    A = n(652215),
    v = n(985018),
    S = n(683912);
let I = (e) => {
        let { onClose: t, onShare: n } = e,
            a = (0, l.bG)([E.A], () => E.A.getReferralsRemaining()),
            u = (0, l.bG)([E.A], () => E.A.getHasEligibleFriends()),
            [f, p] = i.useState(new Map()),
            [_, g] = i.useState(""),
            O = (0, d.A)(_, 400),
            {
                eligibleUsers: I,
                fetchUsers: T,
                hasError: C,
                isFetching: N,
                resendUsers: R,
            } = (0, y.i)({
                searchQuery: O,
                selectedUsers: f,
            }),
            [w, P] = i.useState(!1),
            D = I.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map()),
            x = () =>
                (0, r.jsx)(c.iS7, {
                    selectionMode: "multiple",
                    value: Array.from(f.values()),
                    options: Array.from(D.values()),
                    formatOption: (e) => {
                        let t = e;
                        return {
                            id: t.id,
                            value: t,
                            label: m.Ay.getName(t),
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
                        className: S.c,
                        children: (0, r.jsx)(c.a32, {
                            placeholder: 0 === f.size ? v.intl.string(v.t.Kd5RaI) : "",
                            onQueryChange: (e) => {
                                g(e.target.value);
                            },
                        }),
                    }),
                }),
            L = (e) => {
                let i,
                    { eligibleRecipients: a } = e,
                    o = O.length > 0 && 0 === a.size;
                return (
                    (i =
                        !0 === o
                            ? v.intl.string(v.t.wpSqAW)
                            : f.size <= 1
                              ? v.intl.string(v.t.ItpQxk)
                              : v.intl.format(v.t.iW2stn, { nTrials: f.size })),
                    (0, r.jsx)("div", {
                        className: s()(S.qr, S.h0),
                        children: (0, r.jsx)(c.Button, {
                            variant: "primary",
                            disabled: (0 === f.size && !o) || w,
                            text: i,
                            size: "md",
                            fullWidth: !0,
                            onClick: async () => {
                                o ? t() : (P(!0), await n([...f.values()]), P(!1));
                            },
                        }),
                    })
                );
            },
            j = (e) => {
                let { eligibleRecipients: t } = e;
                return (0, r.jsx)(b.A, {
                    users: Array.from(t.values()),
                    isUserSelected: (e) => f.has(e.id),
                    onSelectionChange: (e, t) => {
                        p((n) => {
                            let r = new Map(n);
                            return t ? r.set(e.id, e) : r.delete(e.id), r;
                        });
                    },
                    isFetching: N,
                    onFetchMore: T,
                    isUserDisabled: (e) =>
                        null !== a &&
                        0 !== a &&
                        [...f.values()].filter((e) => !R.has(e.id)).length >= a &&
                        !f.has(e.id) &&
                        !R.has(e.id),
                    searchQuery: O,
                    emptySearchContent: {
                        header: v.intl.string(v.t["8+ywHD"]),
                        body: v.intl.string(v.t.CgQmY2),
                    },
                    className: S.p_,
                });
            };
        return null === a
            ? (0, r.jsx)(c.y$y, {})
            : C
              ? (0, r.jsx)(o.Modal, {
                    transitionState: o.ip4.ENTERED,
                    size: "sm",
                    title: v.intl.string(v.t.lcuio4),
                    subtitle: v.intl.string(v.t["x09+CD"]),
                    onClose: t,
                    actions: [],
                })
              : !1 === u
                ? (0, r.jsx)(o.Modal, {
                      transitionState: o.ip4.ENTERED,
                      size: "sm",
                      title: v.intl.string(v.t["2YigPp"]),
                      subtitle: v.intl.format(v.t.OOCbz8, {
                          helpdeskArticle: h.A.getArticleURL(A.MVz.REFERRAL_PROGRAM),
                      }),
                      onClose: t,
                      actions: [],
                  })
                : (0, r.jsx)(o.Modal, {
                      size: "md",
                      transitionState: o.ip4.ENTERED,
                      title: v.intl.string(v.t["2dVCLl"]),
                      subtitle: v.intl.string(v.t.DXgoi2),
                      onClose: t,
                      input: x(),
                      actions: [],
                      actionBarInput: L({ eligibleRecipients: D }),
                      children: j({ eligibleRecipients: D }),
                  });
    },
    T = (e) => {
        let { onClose: t, onShare: n } = e,
            a = (0, l.bG)([E.A], () => E.A.getRecipientStatus()),
            [d, f] = i.useState(new Map()),
            [p, _] = i.useState(new Map()),
            [h, m] = i.useState(!1);
        i.useEffect(() => {
            (async () => {
                let e = new Map();
                for (let [t, n] of a) {
                    let r = await (0, u.wz)(t);
                    (r.referralStatus = n), e.set(r.id, r);
                }
                f(e);
            })();
        }, [a]);
        let y = () => {
            let e;
            return (
                (e = p.size <= 1 ? v.intl.string(v.t.ItpQxk) : v.intl.format(v.t.iW2stn, { nTrials: p.size })),
                (0, r.jsx)("div", {
                    className: s()(S.qr, S.h0),
                    children: (0, r.jsx)(c.Button, {
                        variant: "primary",
                        disabled: 0 === p.size || h,
                        text: e,
                        size: "md",
                        fullWidth: !0,
                        onClick: async () => {
                            m(!0), await n([...p.values()]), m(!1);
                        },
                    }),
                })
            );
        };
        return (0, r.jsx)(o.Modal, {
            size: "md",
            transitionState: o.ip4.ENTERED,
            title: v.intl.string(v.t.rKmy8I),
            subtitle: v.intl.string(v.t.VDlF6o),
            onClose: t,
            actions: [],
            actionBarInput: y(),
            children: (0, r.jsx)(b.A, {
                users: Array.from(d.values()),
                isUserSelected: (e) => p.has(e.id),
                isUserDisabled: (e) => e.referralStatus === g.aK.REDEEMED,
                onSelectionChange: (e, t) => {
                    _((n) => {
                        let r = new Map(n);
                        return t ? r.set(e.id, e) : r.delete(e.id), r;
                    });
                },
                className: S.p_,
            }),
        });
    };
var C = (function (e) {
    return (
        (e[(e.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
        (e[(e.CONFIRMATION = 2)] = "CONFIRMATION"),
        (e[(e.REMINDER = 3)] = "REMINDER"),
        e
    );
})({});
let N = (e) => {
    let { onClose: t, startingScreen: n = 1 } = e,
        a = (0, l.bG)([E.A], () => E.A.getReferralsRemaining()),
        [s, o] = i.useState(n),
        [u, d] = i.useState([]),
        { analyticsLocations: h } = (0, p.Ay)([f.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
        m = async (e) => {
            _.default.track(A.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: h });
            let t = await (0, g.xm)(Object.values(e).map((e) => e.id));
            d(
                e.map((e) => ({
                    recipient: e,
                    status: t.get(e.id),
                })),
            ),
                o(2);
        };
    if (null === a) return (0, r.jsx)(c.y$y, {});
    if (2 === s) {
        let e = 3 === n;
        return (0, r.jsx)(O.h, {
            isReminderConfirmation: e,
            results: u,
            onClose: t,
        });
    }
    return 1 === s
        ? (0, r.jsx)(I, {
              onClose: t,
              onShare: m,
          })
        : 3 === s
          ? (0, r.jsx)(T, {
                onClose: t,
                onShare: m,
            })
          : void 0;
};
