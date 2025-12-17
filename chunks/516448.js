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
    f = n(390583),
    m = n(641249),
    b = n(574085),
    p = n(293810),
    h = n(388032);
function x(e) {
    let { allSubscriptionListings: t } = e,
        { editStateId: n, guildId: x } = (0, s.N)(),
        [j, v] = o.UE(n),
        [O, C] = o.R7(n),
        y = i.useMemo(() => t.filter((e) => e.id !== n), [t, n]),
        { isFullServerGating: N } = (0, c.Z)(x),
        E = (0, a.mY)();
    return (0, r.jsx)(d.Z, {
        title: h.intl.string(h.t.YNw2Sm),
        description: h.intl.string(h.t.zMW5r0),
        children: (0, r.jsxs)(l.Kqy, {
            gap: 24,
            children: [
                (0, r.jsxs)(l.gNt, {
                    disabled: E,
                    label: h.intl.string(h.t.DFlDaE),
                    description: h.intl.string(h.t.kHalVA),
                    children: [
                        (0, r.jsx)(u.Z, {
                            channelBenefits: j,
                            intangibleBenefits: O,
                            subscriptionListings: y,
                            onImport: function (e, t) {
                                v((t) => t.concat(e)), C((e) => e.concat(t));
                            },
                        }),
                        (0, r.jsx)(u.w, {
                            guildId: x,
                            onImport: function (e) {
                                v((t) => {
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
                                                ref_type: p.Qs.CHANNEL,
                                            })),
                                    ];
                                });
                            },
                            disabled: E,
                        }),
                    ],
                }),
                (0, r.jsx)(l.gNt, {
                    label: h.intl.string(h.t.S2kKzP),
                    description: h.intl.string(h.t["5a4AxV"]),
                    disabled: E,
                    children: (e) =>
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                N &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(g.Z, {
                                                "aria-labelledby": e.labelId,
                                                disabled: E,
                                            }),
                                            (0, r.jsx)(l.LZC, { size: 8 }),
                                        ],
                                    }),
                                (0, r.jsx)(f.Z, {}),
                            ],
                        }),
                }),
                (0, r.jsx)(l.gNt, {
                    label: h.intl.string(h.t.RdwKw7),
                    description: h.intl.string(h.t.zAww7V),
                    disabled: E,
                    children: (0, r.jsx)(b.Z, {}),
                }),
                (0, r.jsx)(m.Z, {}),
            ],
        }),
    });
}
