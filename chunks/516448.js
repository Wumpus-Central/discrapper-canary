n.d(t, { Z: () => x }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(723047),
    s = n(727843),
    o = n(290348),
    c = n(164000),
    d = n(783454),
    u = n(862319),
    g = n(140285),
    m = n(390583),
    p = n(641249),
    f = n(574085),
    h = n(293810),
    b = n(388032);
function x(e) {
    let { allSubscriptionListings: t } = e,
        { editStateId: n, guildId: x } = (0, s.N)(),
        [j, _] = o.UE(n),
        [v, O] = o.R7(n),
        C = i.useMemo(() => t.filter((e) => e.id !== n), [t, n]),
        { isFullServerGating: y } = (0, c.Z)(x),
        N = (0, a.mY)();
    return (0, r.jsx)(d.Z, {
        title: b.intl.string(b.t.YNw2Sm),
        description: b.intl.string(b.t.zMW5r0),
        children: (0, r.jsxs)(l.Kqy, {
            gap: 24,
            children: [
                (0, r.jsxs)(l.gNt, {
                    disabled: N,
                    label: b.intl.string(b.t.DFlDaE),
                    description: b.intl.string(b.t.kHalVA),
                    children: [
                        (0, r.jsx)(u.Z, {
                            channelBenefits: j,
                            intangibleBenefits: v,
                            subscriptionListings: C,
                            onImport: function (e, t) {
                                _((t) => t.concat(e)), O((e) => e.concat(t));
                            },
                        }),
                        (0, r.jsx)(u.w, {
                            guildId: x,
                            onImport: function (e) {
                                _((t) => {
                                    let n = new Set(
                                        t.map((e) => {
                                            let { ref_id: t } = e;
                                            return t;
                                        }),
                                    );
                                    return [
                                        ...t,
                                        ...e
                                            .filter((e) => !n.has(e))
                                            .map((e) => ({
                                                ref_id: e,
                                                ref_type: h.Qs.CHANNEL,
                                            })),
                                    ];
                                });
                            },
                            disabled: N,
                        }),
                    ],
                }),
                (0, r.jsx)(l.gNt, {
                    label: b.intl.string(b.t.S2kKzP),
                    description: b.intl.string(b.t["5a4AxV"]),
                    disabled: N,
                    children: (e) =>
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                y &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(g.Z, {
                                                "aria-labelledby": e.labelId,
                                                disabled: N,
                                            }),
                                            (0, r.jsx)(l.LZC, { size: 8 }),
                                        ],
                                    }),
                                (0, r.jsx)(m.Z, {}),
                            ],
                        }),
                }),
                (0, r.jsx)(l.gNt, {
                    label: b.intl.string(b.t.RdwKw7),
                    description: b.intl.string(b.t.zAww7V),
                    disabled: N,
                    children: (0, r.jsx)(f.Z, {}),
                }),
                (0, r.jsx)(p.Z, {}),
            ],
        }),
    });
}
