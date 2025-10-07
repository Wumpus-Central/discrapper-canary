n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    s = n(723047),
    a = n(727843),
    o = n(290348),
    c = n(164000),
    d = n(783454),
    u = n(862319),
    g = n(140285),
    m = n(390583),
    p = n(641249),
    f = n(574085),
    h = n(293810),
    x = n(388032);
function b(e) {
    let { allSubscriptionListings: t } = e,
        { editStateId: n, guildId: b } = (0, a.N)(),
        [j, _] = o.UE(n),
        [v, C] = o.R7(n),
        O = i.useMemo(() => t.filter((e) => e.id !== n), [t, n]),
        { isFullServerGating: y } = (0, c.Z)(b),
        N = (0, s.mY)();
    return (0, r.jsx)(d.Z, {
        title: x.intl.string(x.t.YNw2Sk),
        description: x.intl.string(x.t.zMW5r6),
        children: (0, r.jsxs)(l.Kqy, {
            gap: 24,
            children: [
                (0, r.jsxs)(l.NIc, {
                    disabled: N,
                    label: x.intl.string(x.t.DFlDaG),
                    description: x.intl.string(x.t.kHalVF),
                    children: [
                        (0, r.jsx)(u.Z, {
                            channelBenefits: j,
                            intangibleBenefits: v,
                            subscriptionListings: O,
                            onImport: function (e, t) {
                                _((t) => t.concat(e)), C((e) => e.concat(t));
                            },
                        }),
                        (0, r.jsx)(u.w, {
                            guildId: b,
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
                (0, r.jsx)(l.NIc, {
                    label: x.intl.string(x.t.S2kKzM),
                    description: x.intl.string(x.t["5a4Axc"]),
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
                (0, r.jsx)(l.NIc, {
                    label: x.intl.string(x.t.RdwKw8),
                    description: x.intl.string(x.t.zAww7e),
                    disabled: N,
                    children: (0, r.jsx)(f.Z, {}),
                }),
                (0, r.jsx)(p.Z, {}),
            ],
        }),
    });
}
