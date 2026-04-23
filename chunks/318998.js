n.d(e, { PremiumSubscriptionPauseModalSelect: () => D, cN: () => T }), n(321073);
var r = n(627968),
    a = n(64700),
    o = n(989349),
    i = n.n(o),
    s = n(539267),
    l = n(189213),
    _ = n(683071),
    c = n(785007),
    u = n(964486),
    d = n(323082),
    m = n(927578),
    C = n(615396),
    p = n(473702),
    f = n(916974),
    E = n(652215),
    I = n(985018),
    S = n(487601);
async function h(t) {
    let {
        premiumSubscription: e,
        pauseDuration: n,
        onClose: r,
        setHasError: a,
        setIsCancelling: o,
        analyticsLocations: i,
        analyticsLocation: s,
    } = t;
    try {
        o(!0),
            a(!1),
            await (0, d.nV)(
                e,
                { pauseDuration: n },
                { amount: 0, currency: e.currency },
                (0, m.UC)(e.items, e.currency, e.paymentSourceId),
                i,
                s,
            ),
            r();
    } catch {
        a(!0), o(!1);
    }
}
function D() {
    let {
            transitionState: t,
            onClose: e,
            setStep: n,
            setPauseDuration: o,
            pauseDuration: i,
            premiumSubscription: _,
        } = (0, f.X)(),
        d = a.useCallback(
            (t) => {
                let { value: e } = t;
                o(e);
            },
            [o],
        ),
        m = _.status === E.Dmq.PAUSED ? I.intl.string(I.t.Lp9WoG) : I.intl.string(I.t.eSR83U),
        h = (function (t) {
            let e = t.status === E.Dmq.PAUSED ? I.t.o3upfT : I.t.dBXZEm,
                { durations: n, currentDaysPaused: r } = (0, C.Vy)(t),
                a = [];
            for (let t of n) {
                let n = s.V[t];
                a.push({
                    name: I.intl.formatToPlainString(e, { days: n - r }),
                    value: n,
                    radioItemIconClassName: S.hO,
                });
            }
            return (
                a.sort((t, e) => t.value - e.value),
                a.push({
                    name: I.intl.string(I.t.OCPUM6),
                    value: 0,
                    radioBarClassName: S.CK,
                    radioItemIconClassName: S.CK,
                }),
                a
            );
        })(_);
    return (
        (0, u.Ay)(() => {
            h.length < 1 || o(h[0].value);
        }),
        (0, r.jsx)(l.Modal, {
            transitionState: t,
            title: I.intl.string(I.t["f3nnB/"]),
            subtitle: m,
            onClose: async () => {
                await e();
            },
            actions: [
                { variant: "secondary", text: I.intl.string(I.t.rzVN6j), onClick: e },
                {
                    variant: "primary",
                    disabled: null === i,
                    text: I.intl.string(I.t["3PatSz"]),
                    onClick: () => {
                        0 === i ? n(p.g.WHAT_YOU_LOSE) : n(p.g.PAUSE_CONFIRM);
                    },
                },
            ],
            children: (0, r.jsx)(c.$d, { "data-migration-pending": !0, options: h, onChange: d, value: i }),
        })
    );
}
function T() {
    let {
            transitionState: t,
            onClose: e,
            pauseDuration: n,
            premiumSubscription: o,
            analyticsLocation: s,
            setStep: c,
            analyticsLocations: u,
        } = (0, f.X)(),
        [d, m] = a.useState(!1),
        [C, D] = a.useState(!1);
    if (null == n) return void c(p.g.PAUSE_SELECT);
    let T = null,
        y = [E.Dmq.PAST_DUE, E.Dmq.PAUSED].includes(o.status) ? o.currentPeriodStart : o.currentPeriodEnd,
        A = i()(y).add(n, "days").toDate();
    switch (o.status) {
        case E.Dmq.PAST_DUE:
            T = I.intl.format(I.t["xaS18/"], { pauseDuration: n, resumeDate: A });
            break;
        case E.Dmq.PAUSED:
            T = I.intl.format(I.t.Vur3Fc, { resumeDate: A });
            break;
        default:
            T = I.intl.format(I.t.W85vFA, { pauseDate: y, resumeDate: A, pauseDuration: n });
    }
    return (0, r.jsxs)(l.Modal, {
        title: I.intl.string(I.t.AnMG5x),
        transitionState: t,
        actions: [
            { text: I.intl.string(I.t.rzVN6j), variant: "primary", onClick: e },
            {
                text: I.intl.string(I.t["cY+Oob"]),
                variant: "critical-primary",
                disabled: C || null == n,
                onClick: async () => {
                    await h({
                        premiumSubscription: o,
                        pauseDuration: n,
                        setIsCancelling: D,
                        setHasError: m,
                        onClose: e,
                        analyticsLocations: u,
                        analyticsLocation: s,
                    });
                },
            },
        ],
        onClose: async () => {
            await e();
        },
        children: [
            d
                ? (0, r.jsx)("div", {
                      className: S.QK,
                      children: (0, r.jsx)(_.w, { type: "critical", children: I.intl.string(I.t["5mlOCW"]) }),
                  })
                : null,
            (0, r.jsx)("div", { className: S.rf, children: T }),
        ],
    });
}
