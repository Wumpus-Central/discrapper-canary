n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(735438),
    o = n(417597),
    d = n(73939),
    c = n(36525),
    u = n(192308),
    m = n(939249),
    g = n(245604),
    h = n(834730),
    x = n(871682),
    _ = n(452027),
    p = n(555337),
    A = n(567305),
    E = n(599941),
    f = n(695825),
    j = n(11351),
    N = n(922975),
    I = n(822525),
    C = n(2242),
    b = n(652215),
    v = n(985018),
    S = n(487647);
let T = "guild-role-subscription-tier-template-selector";
function y(e) {
    let { guildId: t, priceTiers: s, groupListingId: _ } = e,
        f = (0, E.cY)(_),
        {
            editStateIds: C,
            addNewEditStateId: y,
            addNewEditStateFromTemplate: R,
            removeEditStateId: L,
        } = N.d0(_, t, { includeSoftDeleted: !0 }),
        [D, O] = l.useState({}),
        G = l.useMemo(() => {
            let e = C.map((e) => D[e] ?? e);
            return (0, a.uniq)(e);
        }, [C, D]),
        M = (0, A._Y)(t),
        k = l.useCallback(() => {
            M
                ? (0, u.openModalLazy)(
                      async () => {
                          let { default: e } = await n.e("263").then(n.bind(n, 486010));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  guildId: t,
                                  addNewEditStateFromTemplate: R,
                                  addNewEditStateFromScratch: y,
                                  priceTiers: s,
                              });
                      },
                      { modalKey: T },
                  )
                : y();
        }, [t, R, y, s, M]),
        U = N.Zw(G),
        w = l.useCallback(() => G.forEach(N.Ts), [G]),
        P = (0, j.gN)(),
        B = (0, o.bG)([p.A], () => p.A.getProps().subsection);
    return (
        l.useEffect(
            () => (
                B === b.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE && k(),
                () => {
                    (0, u.closeModal)(T);
                }
            ),
            [B, k],
        ),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: S.B2,
                    children: [
                        G.map((e) =>
                            (0, i.jsx)(
                                I.A,
                                {
                                    guildId: t,
                                    initialEditStateId: e,
                                    allSubscriptionListings: f,
                                    priceTiers: s,
                                    groupListingId: _,
                                    onDeleteEditState: () => L(e),
                                    onBeforeDispatchNewListing: (t) => {
                                        var n;
                                        return (n = t.id), void O((t) => ({ ...t, [n]: e }));
                                    },
                                    onAfterDispatchNewListing: () => L(e),
                                },
                                e,
                            ),
                        ),
                        (0, i.jsxs)(m.D, {
                            onClick: P ? void 0 : k,
                            className: r()(S.l2, { [S.r9]: P }),
                            "aria-disabled": P,
                            children: [
                                (0, i.jsx)(g.U, { size: "xs", color: "currentColor", className: S.qE }),
                                (0, i.jsx)(h.E, {
                                    variant: "text-md/normal",
                                    color: "interactive-text-active",
                                    children: v.intl.string(v.t.PiFnny),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(d.F, {
                    component: "div",
                    className: S.se,
                    children: U && (0, i.jsx)(x.F, { children: (0, i.jsx)(c.A, { onReset: w }) }),
                }),
            ],
        })
    );
}
function R(e) {
    let { guildId: t } = e,
        { priceTiers: n } = ((e) => {
            let [t, n] = l.useState(!0),
                [i, s] = l.useState();
            return (
                l.useEffect(() => {
                    n(!0),
                        (0, f.XT)(e).then((e) => {
                            s(e), n(!1);
                        });
                }, [e]),
                { loading: t, priceTiers: i }
            );
        })(t),
        s = (0, E.uk)(t),
        r = C.f7,
        a = s.map((e) => e.id);
    return (0, i.jsx)(_.D, {
        label: v.intl.string(v.t["72+Sos"]),
        description: v.intl.format(v.t.nHRSvM, { maxTiers: r }),
        children: (0, i.jsx)(y, { priceTiers: n, guildId: t, groupListingId: a[0] }),
    });
}
