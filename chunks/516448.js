n.d(t, { Z: () => x }), n(388685);
var r = n(951288),
    i = n(647438),
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
        [j, v] = o.UE(n),
        [_, C] = o.R7(n),
        O = i.useMemo(() => t.filter((e) => e.id !== n), [t, n]),
        { isFullServerGating: y } = (0, c.Z)(x),
        E = (0, a.mY)();
    return (0, r.jsx)(d.Z, {
        title: b.intl.string(b.t.YNw2Sk),
        description: b.intl.string(b.t.zMW5r6),
        children: (0, r.jsxs)(l.Kqy, {
            gap: 24,
            children: [
                (0, r.jsxs)(l.gNt, {
                    disabled: E,
                    label: b.intl.string(b.t.DFlDaG),
                    description: b.intl.string(b.t.kHalVF),
                    children: [
                        (0, r.jsx)(u.Z, {
                            channelBenefits: j,
                            intangibleBenefits: _,
                            subscriptionListings: O,
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
                                                ref_type: h.Qs.CHANNEL,
                                            })),
                                    ];
                                });
                            },
                            disabled: E,
                        }),
                    ],
                }),
                (0, r.jsx)(l.gNt, {
                    label: b.intl.string(b.t.S2kKzM),
                    description: b.intl.string(b.t["5a4Axc"]),
                    disabled: E,
                    children: (e) =>
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                y &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(g.Z, {
                                                "aria-labelledby": e.labelId,
                                                disabled: E,
                                            }),
                                            (0, r.jsx)(l.LZC, { size: 8 }),
                                        ],
                                    }),
                                (0, r.jsx)(m.Z, {}),
                            ],
                        }),
                }),
                (0, r.jsx)(l.gNt, {
                    label: b.intl.string(b.t.RdwKw8),
                    description: b.intl.string(b.t.zAww7e),
                    disabled: E,
                    children: (0, r.jsx)(f.Z, {}),
                }),
                (0, r.jsx)(p.Z, {}),
            ],
        }),
    });
}
