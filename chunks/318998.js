n(321073);
var e = n(477900),
    i = n(582128),
    r = n(536637),
    s = n.n(r),
    l = n(539267),
    u = n(189213),
    c = n(785007),
    o = n(834730),
    d = n(136857),
    m = n(964486),
    p = n(669815),
    S = n(448645),
    y = n(615396),
    D = n(473702),
    C = n(916974),
    f = n(652215),
    g = n(792996),
    h = n(203450);
n.d(
    a,
    {},
    {
        PremiumSubscriptionPauseModalSelect: function () {
            let {
                    transitionState: t,
                    onClose: a,
                    setStep: n,
                    setPauseDuration: r,
                    pauseDuration: s,
                    premiumSubscription: o,
                } = (0, C.X)(),
                d = i.useCallback(
                    (t) => {
                        let { value: a } = t;
                        r(a);
                    },
                    [r],
                ),
                p = o.status === f.Dmq.PAUSED ? g.intl.string(g.t.Lp9WoG) : g.intl.string(g.t.eSR83U),
                S = (function (t) {
                    let a = t.status === f.Dmq.PAUSED ? g.t.o3upfT : g.t.dBXZEm,
                        { durations: n, currentDaysPaused: e } = (0, y.Vy)(t),
                        i = [];
                    for (let t of n) {
                        let n = l.V[t];
                        i.push({
                            name: g.intl.formatToPlainString(a, { days: n - e }),
                            value: n,
                            radioItemIconClassName: h.hO,
                        });
                    }
                    return (
                        i.sort((t, a) => t.value - a.value),
                        i.push({
                            name: g.intl.string(g.t.OCPUM6),
                            value: 0,
                            radioBarClassName: h.CK,
                            radioItemIconClassName: h.CK,
                        }),
                        i
                    );
                })(o);
            return (
                (0, m.Ay)(() => {
                    S.length < 1 || r(S[0].value);
                }),
                (0, e.jsx)(u.a, {
                    transitionState: t,
                    title: g.intl.string(g.t["f3nnB/"]),
                    subtitle: p,
                    onClose: async () => {
                        await a();
                    },
                    actions: [
                        { variant: "secondary", text: g.intl.string(g.t.rzVN6j), onClick: a },
                        {
                            variant: "primary",
                            disabled: null === s,
                            text: g.intl.string(g.t["3PatSz"]),
                            onClick: () => {
                                0 === s ? n(D.g.WHAT_YOU_LOSE) : n(D.g.PAUSE_CONFIRM);
                            },
                        },
                    ],
                    children: (0, e.jsx)(c.$d, { "data-migration-pending": !0, options: S, onChange: d, value: s }),
                })
            );
        },
        cN: function () {
            let {
                    transitionState: t,
                    onClose: a,
                    pauseDuration: n,
                    premiumSubscription: r,
                    analyticsLocation: l,
                    setStep: c,
                    analyticsLocations: m,
                } = (0, C.X)(),
                [y, v] = i.useState(null),
                [P, A] = i.useState(!1);
            if (null == n) return void c(D.g.PAUSE_SELECT);
            let E = null,
                x = [f.Dmq.PAST_DUE, f.Dmq.PAUSED].includes(r.status) ? r.currentPeriodStart : r.currentPeriodEnd,
                b = s()(x).add(n, "days").toDate();
            switch (r.status) {
                case f.Dmq.PAST_DUE:
                    E = g.intl.format(g.t["xaS18/"], { pauseDuration: n, resumeDate: b });
                    break;
                case f.Dmq.PAUSED:
                    E = g.intl.format(g.t.Vur3Fc, { resumeDate: b });
                    break;
                default:
                    E = g.intl.format(g.t.W85vFA, { pauseDate: x, resumeDate: b, pauseDuration: n });
            }
            return (0, e.jsxs)(u.a, {
                title: g.intl.string(g.t.AnMG5x),
                transitionState: t,
                actions: [
                    { text: g.intl.string(g.t.rzVN6j), variant: "primary", onClick: a },
                    {
                        text: g.intl.string(g.t["cY+Oob"]),
                        variant: "critical-primary",
                        disabled: P || null == n,
                        onClick: async () => {
                            await (async function (t) {
                                let {
                                    premiumSubscription: a,
                                    pauseDuration: n,
                                    onClose: e,
                                    setHasError: i,
                                    setIsCancelling: r,
                                    analyticsLocations: s,
                                    analyticsLocation: l,
                                } = t;
                                try {
                                    (r(!0),
                                        i(null),
                                        await (0, p.nV)(
                                            a,
                                            { pauseDuration: n },
                                            { amount: 0, currency: a.currency },
                                            (0, S.UC)(a.items, a.currency, a.paymentSourceId),
                                            s,
                                            l,
                                        ),
                                        e());
                                } catch (t) {
                                    i(t instanceof d.Ay ? t : new d.Ay(t));
                                } finally {
                                    r(!1);
                                }
                            })({
                                premiumSubscription: r,
                                pauseDuration: n,
                                setIsCancelling: A,
                                setHasError: v,
                                onClose: a,
                                analyticsLocations: m,
                                analyticsLocation: l,
                            });
                        },
                    },
                ],
                onClose: async () => {
                    await a();
                },
                children: [
                    null != y
                        ? (0, e.jsx)("div", {
                              className: h.QK,
                              children: (0, e.jsx)(o.E, {
                                  variant: "body-sm/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: y.message,
                              }),
                          })
                        : null,
                    (0, e.jsx)("div", { className: h.rf, children: E }),
                ],
            });
        },
    },
);
