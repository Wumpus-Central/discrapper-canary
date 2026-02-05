"use strict";
n.d(t, { A: () => C });
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
    g = n(175650),
    x = n(567305),
    h = n(599941),
    _ = n(695825),
    A = n(11351),
    p = n(922975),
    f = n(822525),
    j = n(652215),
    N = n(985018),
    E = n(862238);
let b = "guild-role-subscription-tier-template-selector";
function T(e) {
    let { guildId: t, priceTiers: l, groupListingId: _ } = e,
        T = (0, h.cY)(_),
        {
            editStateIds: C,
            addNewEditStateId: I,
            addNewEditStateFromTemplate: v,
            removeEditStateId: S,
        } = p.d0(_, t, { includeSoftDeleted: !0 }),
        [y, R] = s.useState({}),
        O = s.useMemo(() => {
            let e = C.map((e) => y[e] ?? e);
            return (0, a.uniq)(e);
        }, [C, y]),
        G = (0, x._Y)(t),
        L = (0, x.a0)(),
        D = s.useCallback(() => {
            L && g.ok.trackExposure({ guildId: t, location: "b2d9de_1" }),
                L && G
                    ? (0, u.mMO)(
                          async () => {
                              let { default: e } = await n.e("263").then(n.bind(n, 486010));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      guildId: t,
                                      addNewEditStateFromTemplate: v,
                                      addNewEditStateFromScratch: I,
                                      priceTiers: l,
                                  });
                          },
                          { modalKey: b },
                      )
                    : I();
        }, [t, v, I, l, L, G]),
        M = p.Zw(O),
        k = s.useCallback(() => O.forEach(p.Ts), [O]),
        U = (0, A.gN)(),
        P = (0, o.bG)([m.A], () => m.A.getProps().subsection);
    return (
        s.useEffect(
            () => (
                P === j.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE && D(),
                () => {
                    (0, u.OoC)(b);
                }
            ),
            [P, D],
        ),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: E.B2,
                    children: [
                        O.map((e) =>
                            (0, i.jsx)(
                                f.A,
                                {
                                    guildId: t,
                                    initialEditStateId: e,
                                    allSubscriptionListings: T,
                                    priceTiers: l,
                                    groupListingId: _,
                                    onDeleteEditState: () => S(e),
                                    onBeforeDispatchNewListing: (t) => {
                                        var n;
                                        return (n = t.id), void R((t) => ({ ...t, [n]: e }));
                                    },
                                    onAfterDispatchNewListing: () => S(e),
                                },
                                e,
                            ),
                        ),
                        (0, i.jsxs)(u.DUT, {
                            onClick: U ? void 0 : D,
                            className: r()(E.l2, { [E.r9]: U }),
                            "aria-disabled": U,
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
                    children: M && (0, i.jsx)(u.FQk, { children: (0, i.jsx)(c.A, { onReset: k }) }),
                }),
            ],
        })
    );
}
function C(e) {
    let { guildId: t } = e,
        { priceTiers: n } = ((e) => {
            let [t, n] = s.useState(!0),
                [i, l] = s.useState();
            return (
                s.useEffect(() => {
                    n(!0),
                        (0, _.XT)(e).then((e) => {
                            l(e), n(!1);
                        });
                }, [e]),
                { loading: t, priceTiers: i }
            );
        })(t),
        l = (0, h.uk)(t),
        { maxTiers: r } = (0, x.DN)(t),
        a = l.map((e) => e.id);
    return (0, i.jsx)(u.D0$, {
        label: N.intl.string(N.t["72+Sos"]),
        description: N.intl.format(N.t.nHRSvM, { maxTiers: r }),
        children: (0, i.jsx)(T, { priceTiers: n, guildId: t, groupListingId: a[0] }),
    });
}
