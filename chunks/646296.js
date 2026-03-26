"use strict";
n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(735438),
    o = n(417597),
    d = n(73939),
    c = n(36525),
    u = n(397927),
    m = n(555337),
    g = n(567305),
    x = n(599941),
    h = n(695825),
    _ = n(11351),
    p = n(922975),
    A = n(822525),
    f = n(2242),
    j = n(652215),
    N = n(985018),
    E = n(702735);
let b = "guild-role-subscription-tier-template-selector";
function C(e) {
    let { guildId: t, priceTiers: l, groupListingId: h } = e,
        f = (0, x.cY)(h),
        {
            editStateIds: C,
            addNewEditStateId: T,
            addNewEditStateFromTemplate: I,
            removeEditStateId: v,
        } = p.d0(h, t, { includeSoftDeleted: !0 }),
        [S, y] = s.useState({}),
        R = s.useMemo(() => {
            let e = C.map((e) => S[e] ?? e);
            return (0, a.uniq)(e);
        }, [C, S]),
        O = (0, g._Y)(t),
        L = s.useCallback(() => {
            O
                ? (0, u.mMO)(
                      async () => {
                          let { default: e } = await n.e("263").then(n.bind(n, 486010));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  guildId: t,
                                  addNewEditStateFromTemplate: I,
                                  addNewEditStateFromScratch: T,
                                  priceTiers: l,
                              });
                      },
                      { modalKey: b },
                  )
                : T();
        }, [t, I, T, l, O]),
        G = p.Zw(R),
        D = s.useCallback(() => R.forEach(p.Ts), [R]),
        M = (0, _.gN)(),
        k = (0, o.bG)([m.A], () => m.A.getProps().subsection);
    return (
        s.useEffect(
            () => (
                k === j.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE && L(),
                () => {
                    (0, u.OoC)(b);
                }
            ),
            [k, L],
        ),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: E.B2,
                    children: [
                        R.map((e) =>
                            (0, i.jsx)(
                                A.A,
                                {
                                    guildId: t,
                                    initialEditStateId: e,
                                    allSubscriptionListings: f,
                                    priceTiers: l,
                                    groupListingId: h,
                                    onDeleteEditState: () => v(e),
                                    onBeforeDispatchNewListing: (t) => {
                                        var n;
                                        return (n = t.id), void y((t) => ({ ...t, [n]: e }));
                                    },
                                    onAfterDispatchNewListing: () => v(e),
                                },
                                e,
                            ),
                        ),
                        (0, i.jsxs)(u.DUT, {
                            onClick: M ? void 0 : L,
                            className: r()(E.l2, { [E.r9]: M }),
                            "aria-disabled": M,
                            children: [
                                (0, i.jsx)(u.U1e, { size: "xs", color: "currentColor", className: E.qE }),
                                (0, i.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    color: "interactive-text-active",
                                    children: N.intl.string(N.t.PiFnny),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(d.F, {
                    component: "div",
                    className: E.se,
                    children: G && (0, i.jsx)(u.FQk, { children: (0, i.jsx)(c.A, { onReset: D }) }),
                }),
            ],
        })
    );
}
function T(e) {
    let { guildId: t } = e,
        { priceTiers: n } = ((e) => {
            let [t, n] = s.useState(!0),
                [i, l] = s.useState();
            return (
                s.useEffect(() => {
                    n(!0),
                        (0, h.XT)(e).then((e) => {
                            l(e), n(!1);
                        });
                }, [e]),
                { loading: t, priceTiers: i }
            );
        })(t),
        l = (0, x.uk)(t),
        r = f.f7,
        a = l.map((e) => e.id);
    return (0, i.jsx)(u.D0$, {
        label: N.intl.string(N.t["72+Sos"]),
        description: N.intl.format(N.t.nHRSvM, { maxTiers: r }),
        children: (0, i.jsx)(C, { priceTiers: n, guildId: t, groupListingId: a[0] }),
    });
}
