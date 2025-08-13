r.d(t, { default: () => O }), r(388685);
var a = r(255367),
    i = r(73800),
    n = r(120356),
    s = r.n(n),
    l = r(442837),
    o = r(257465),
    c = r(82659),
    d = r(481060),
    u = r(232567),
    m = r(794433),
    f = r(480466),
    p = r(434650),
    x = r(100527),
    b = r(906732),
    h = r(626135),
    _ = r(51144),
    j = r(281494),
    g = r(276444),
    R = r(687555),
    v = r(955839),
    E = r(553874),
    C = r(28061),
    y = r(382271),
    N = r(981631),
    S = r(388032),
    Z = r(476674);
let w = (e) => {
        let { onClose: t, onShare: r } = e,
            n = (0, l.e7)([g.Z], () => g.Z.getReferralsRemaining()),
            [u, x] = i.useState(new Map()),
            [b, h] = i.useState(""),
            j = (0, f.Z)(b, 400),
            {
                eligibleUsers: y,
                fetchUsers: N,
                hasError: w,
                isFetching: A,
                resendUsers: O,
            } = (0, v.q)({
                searchQuery: j,
                selectedUsers: u,
            }),
            [M, k] = i.useState(!1),
            D = (0, p.O)((e) => {
                e && !A && N();
            }),
            z = y.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map());
        return null === n
            ? (0, a.jsx)(d.$jN, {})
            : w
              ? (0, a.jsx)(E.P, { onClose: t })
              : (0, a.jsx)(c.Modal, {
                    size: "md",
                    transitionState: o.D.ENTERED,
                    title: S.intl.string(S.t["2dVCLi"]),
                    subtitle: S.intl.string(S.t.DXgoi4),
                    onClose: t,
                    input: (0, a.jsx)(m.Z, {
                        className: Z.searchbar,
                        size: m.Z.Sizes.MEDIUM,
                        tags: [...u.values()].map((e) => _.ZP.getName(e)),
                        placeholder: 0 === u.size ? S.intl.string(S.t.Kd5RaG) : "",
                        query: b,
                        onRemoveTag: (e) => {
                            x((t) => {
                                let r = [...t.values()][e],
                                    a = new Map(t);
                                return a.delete(r.id), a;
                            });
                        },
                        onQueryChange: h,
                        onClear: () => h(""),
                    }),
                    actions: [],
                    actionBarInput: ((e) => {
                        let i,
                            { eligibleRecipients: n } = e,
                            l = j.length > 0 && 0 === n.size;
                        return (
                            (i =
                                !0 === l
                                    ? S.intl.string(S.t.wpSqAQ)
                                    : u.size <= 1
                                      ? S.intl.string(S.t.ItpQxs)
                                      : S.intl.format(S.t.iW2str, { nTrials: u.size })),
                            (0, a.jsx)("div", {
                                className: s()(Z.footer, Z.footerSeparator),
                                children: (0, a.jsx)(d.zxk, {
                                    variant: "primary",
                                    disabled: (0 === u.size && !l) || M,
                                    text: i,
                                    size: "md",
                                    fullWidth: !0,
                                    onClick: async () => {
                                        if (l) return void t();
                                        k(!0), await r([...u.values()]), k(!1);
                                    },
                                }),
                            })
                        );
                    })({ eligibleRecipients: z }),
                    children: ((e) => {
                        let { eligibleRecipients: t } = e;
                        return !0 == (j.length > 0 && 0 === t.size)
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [(0, a.jsx)(R.ih, {}), (0, a.jsx)(R.d, {})],
                              })
                            : (0, a.jsxs)(d.u2D, {
                                  className: Z.list,
                                  children: [
                                      Array.from(t.values()).map((e) =>
                                          (0, a.jsx)(
                                              C.Z,
                                              {
                                                  disabled:
                                                      null !== n &&
                                                      0 !== n &&
                                                      [...u.values()].filter((e) => !O.has(e.id)).length >= n &&
                                                      !u.has(e.id) &&
                                                      !O.has(e.id),
                                                  checked: u.has(e.id),
                                                  user: e,
                                                  onChange: (e, t) => {
                                                      x((r) => {
                                                          let a = new Map(r);
                                                          return t ? a.set(e.id, e) : a.delete(e.id), a;
                                                      });
                                                  },
                                              },
                                              e.id,
                                          ),
                                      ),
                                      A && (0, a.jsx)(d.$jN, {}),
                                      (0, a.jsx)("div", { ref: D }),
                                  ],
                              });
                    })({ eligibleRecipients: z }),
                });
    },
    A = (e) => {
        let { onClose: t, onShare: r } = e,
            n = (0, l.e7)([g.Z], () => g.Z.getRecipientStatus()),
            [m, f] = i.useState(new Map()),
            [p, x] = i.useState(new Map()),
            [b, h] = i.useState(!1);
        return (
            i.useEffect(() => {
                (async () => {
                    let e = new Map();
                    for (let [t, r] of n) {
                        let a = await (0, u.PR)(t);
                        (a.referralStatus = r), e.set(a.id, a);
                    }
                    f(e);
                })();
            }, [n]),
            (0, a.jsx)(c.Modal, {
                size: "md",
                transitionState: o.D.ENTERED,
                title: S.intl.string(S.t.SY9tyM),
                subtitle: S.intl.string(S.t.mPmPrq),
                onClose: t,
                actions: [],
                actionBarInput: (0, a.jsx)("div", {
                    className: s()(Z.footer, Z.footerSeparator),
                    children: (0, a.jsx)(d.zxk, {
                        variant: "primary",
                        disabled: 0 === p.size || b,
                        text: S.intl.string(S.t.ItpQxs),
                        size: "md",
                        fullWidth: !0,
                        onClick: async () => {
                            h(!0), await r([...p.values()]), h(!1);
                        },
                    }),
                }),
                children: (0, a.jsx)(d.u2D, {
                    className: Z.list,
                    children: Array.from(m.values()).map((e) =>
                        (0, a.jsx)(
                            C.Z,
                            {
                                checked: p.has(e.id),
                                disabled: e.referralStatus === j.Fe.REDEEMED,
                                user: e,
                                onChange: (e, t) => {
                                    x((r) => {
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
    },
    O = (e) => {
        let { onClose: t } = e,
            r = (0, l.e7)([g.Z], () => g.Z.getReferralsRemaining()),
            [n, s] = i.useState(null !== r && r > 0 ? 1 : 3),
            [o, c] = i.useState([]),
            { analyticsLocations: u } = (0, b.ZP)([x.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
            m = async (e) => {
                h.default.track(N.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: u });
                let t = await (0, j.jy)(Object.values(e).map((e) => e.id));
                c(
                    e.map((e) => ({
                        recipient: e,
                        status: t.get(e.id),
                    })),
                ),
                    s(2);
            };
        return null === r
            ? (0, a.jsx)(d.$jN, {})
            : 2 === n
              ? (0, a.jsx)(y.m, {
                    results: o,
                    onClose: t,
                })
              : 1 === n
                ? (0, a.jsx)(w, {
                      onClose: t,
                      onShare: m,
                  })
                : 3 === n
                  ? (0, a.jsx)(A, {
                        onClose: t,
                        onShare: m,
                    })
                  : void 0;
    };
