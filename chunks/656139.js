a.d(t, { default: () => z }), a(388685);
var r = a(951288),
    i = a(647438),
    s = a(120356),
    n = a.n(s),
    l = a(442837),
    o = a(257465),
    c = a(82659),
    d = a(481060),
    u = a(232567),
    m = a(794433),
    x = a(480466),
    p = a(434650),
    f = a(100527),
    h = a(906732),
    j = a(626135),
    g = a(51144),
    v = a(281494),
    b = a(276444),
    E = a(687555),
    R = a(955839),
    y = a(553874),
    S = a(28061),
    N = a(382271),
    C = a(981631),
    Z = a(388032),
    O = a(476034);
let M = (e) => {
        let { onClose: t, onShare: a } = e,
            s = (0, l.e7)([b.Z], () => b.Z.getReferralsRemaining()),
            [u, f] = i.useState(new Map()),
            [h, j] = i.useState(""),
            v = (0, x.Z)(h, 400),
            {
                eligibleUsers: N,
                fetchUsers: C,
                hasError: M,
                isFetching: w,
                resendUsers: z,
            } = (0, R.q)({
                searchQuery: v,
                selectedUsers: u,
            }),
            [P, A] = i.useState(!1),
            k = (0, p.O)((e) => {
                e && !w && C();
            }),
            D = N.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map());
        return null === s
            ? (0, r.jsx)(d.$jN, {})
            : M
              ? (0, r.jsx)(y.P, { onClose: t })
              : (0, r.jsx)(c.Modal, {
                    size: "md",
                    transitionState: o.D.ENTERED,
                    title: Z.intl.string(Z.t["2dVCLi"]),
                    subtitle: Z.intl.string(Z.t.DXgoi4),
                    onClose: t,
                    input: (0, r.jsx)(m.Z, {
                        className: O.searchbar,
                        size: m.Z.Sizes.MEDIUM,
                        tags: [...u.values()].map((e) => g.ZP.getName(e)),
                        placeholder: 0 === u.size ? Z.intl.string(Z.t.Kd5RaG) : "",
                        query: h,
                        onRemoveTag: (e) => {
                            f((t) => {
                                let a = [...t.values()][e],
                                    r = new Map(t);
                                return r.delete(a.id), r;
                            });
                        },
                        onQueryChange: j,
                        onClear: () => j(""),
                    }),
                    actions: [],
                    actionBarInput: ((e) => {
                        let i,
                            { eligibleRecipients: s } = e,
                            l = v.length > 0 && 0 === s.size;
                        return (
                            (i =
                                !0 === l
                                    ? Z.intl.string(Z.t.wpSqAQ)
                                    : u.size <= 1
                                      ? Z.intl.string(Z.t.ItpQxs)
                                      : Z.intl.format(Z.t.iW2str, { nTrials: u.size })),
                            (0, r.jsx)("div", {
                                className: n()(O.footer, O.footerSeparator),
                                children: (0, r.jsx)(d.zxk, {
                                    variant: "primary",
                                    disabled: (0 === u.size && !l) || P,
                                    text: i,
                                    size: "md",
                                    fullWidth: !0,
                                    onClick: async () => {
                                        if (l) return void t();
                                        A(!0), await a([...u.values()]), A(!1);
                                    },
                                }),
                            })
                        );
                    })({ eligibleRecipients: D }),
                    children: ((e) => {
                        let { eligibleRecipients: t } = e;
                        return !0 == (v.length > 0 && 0 === t.size)
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(E.ih, {}), (0, r.jsx)(E.d, {})],
                              })
                            : (0, r.jsxs)(d.u2D, {
                                  className: O.list,
                                  children: [
                                      Array.from(t.values()).map((e) =>
                                          (0, r.jsx)(
                                              S.Z,
                                              {
                                                  disabled:
                                                      null !== s &&
                                                      0 !== s &&
                                                      [...u.values()].filter((e) => !z.has(e.id)).length >= s &&
                                                      !u.has(e.id) &&
                                                      !z.has(e.id),
                                                  checked: u.has(e.id),
                                                  user: e,
                                                  onChange: (e, t) => {
                                                      f((a) => {
                                                          let r = new Map(a);
                                                          return t ? r.set(e.id, e) : r.delete(e.id), r;
                                                      });
                                                  },
                                              },
                                              e.id,
                                          ),
                                      ),
                                      w && (0, r.jsx)(d.$jN, {}),
                                      (0, r.jsx)("div", { ref: k }),
                                  ],
                              });
                    })({ eligibleRecipients: D }),
                });
    },
    w = (e) => {
        let { onClose: t, onShare: a } = e,
            s = (0, l.e7)([b.Z], () => b.Z.getRecipientStatus()),
            [m, x] = i.useState(new Map()),
            [p, f] = i.useState(new Map()),
            [h, j] = i.useState(!1);
        return (
            i.useEffect(() => {
                (async () => {
                    let e = new Map();
                    for (let [t, a] of s) {
                        let r = await (0, u.PR)(t);
                        (r.referralStatus = a), e.set(r.id, r);
                    }
                    x(e);
                })();
            }, [s]),
            (0, r.jsx)(c.Modal, {
                size: "md",
                transitionState: o.D.ENTERED,
                title: Z.intl.string(Z.t.SY9tyM),
                subtitle: Z.intl.string(Z.t.mPmPrq),
                onClose: t,
                actions: [],
                actionBarInput: (0, r.jsx)("div", {
                    className: n()(O.footer, O.footerSeparator),
                    children: (0, r.jsx)(d.zxk, {
                        variant: "primary",
                        disabled: 0 === p.size || h,
                        text: Z.intl.string(Z.t.ItpQxs),
                        size: "md",
                        fullWidth: !0,
                        onClick: async () => {
                            j(!0), await a([...p.values()]), j(!1);
                        },
                    }),
                }),
                children: (0, r.jsx)(d.u2D, {
                    className: O.list,
                    children: Array.from(m.values()).map((e) =>
                        (0, r.jsx)(
                            S.Z,
                            {
                                checked: p.has(e.id),
                                disabled: e.referralStatus === v.Fe.REDEEMED,
                                user: e,
                                onChange: (e, t) => {
                                    f((a) => {
                                        let r = new Map(a);
                                        return t ? r.set(e.id, e) : r.delete(e.id), r;
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
    z = (e) => {
        let { onClose: t } = e,
            a = (0, l.e7)([b.Z], () => b.Z.getReferralsRemaining()),
            [s, n] = i.useState(null !== a && a > 0 ? 1 : 3),
            [o, c] = i.useState([]),
            { analyticsLocations: u } = (0, h.ZP)([f.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
            m = async (e) => {
                j.default.track(C.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: u });
                let t = await (0, v.jy)(Object.values(e).map((e) => e.id));
                c(
                    e.map((e) => ({
                        recipient: e,
                        status: t.get(e.id),
                    })),
                ),
                    n(2);
            };
        return null === a
            ? (0, r.jsx)(d.$jN, {})
            : 2 === s
              ? (0, r.jsx)(N.m, {
                    results: o,
                    onClose: t,
                })
              : 1 === s
                ? (0, r.jsx)(M, {
                      onClose: t,
                      onShare: m,
                  })
                : 3 === s
                  ? (0, r.jsx)(w, {
                        onClose: t,
                        onShare: m,
                    })
                  : void 0;
    };
