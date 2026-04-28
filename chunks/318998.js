n.d(a, { PremiumSubscriptionPauseModalSelect: () => v, cN: () => P }), n(321073);
var e = n(627968),
    i = n(64700),
    r = n(989349),
    s = n.n(r),
    l = n(539267),
    u = n(189213),
    c = n(683071),
    o = n(785007),
    d = n(964486),
    m = n(323082),
    p = n(927578),
    S = n(615396),
    C = n(473702),
    D = n(916974),
    g = n(652215),
    y = n(985018),
    h = n(487601);
async function f(t) {
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
        r(!0),
            i(!1),
            await (0, m.nV)(
                a,
                { pauseDuration: n },
                { amount: 0, currency: a.currency },
                (0, p.UC)(a.items, a.currency, a.paymentSourceId),
                s,
                l,
            ),
            e();
    } catch {
        i(!0), r(!1);
    }
}
function v() {
    let {
            transitionState: t,
            onClose: a,
            setStep: n,
            setPauseDuration: r,
            pauseDuration: s,
            premiumSubscription: c,
        } = (0, D.X)(),
        m = i.useCallback(
            (t) => {
                let { value: a } = t;
                r(a);
            },
            [r],
        ),
        p = c.status === g.Dmq.PAUSED ? y.intl.string(y.t.Lp9WoG) : y.intl.string(y.t.eSR83U),
        f = (function (t) {
            let a = t.status === g.Dmq.PAUSED ? y.t.o3upfT : y.t.dBXZEm,
                { durations: n, currentDaysPaused: e } = (0, S.Vy)(t),
                i = [];
            for (let t of n) {
                let n = l.V[t];
                i.push({
                    name: y.intl.formatToPlainString(a, { days: n - e }),
                    value: n,
                    radioItemIconClassName: h.hO,
                });
            }
            return (
                i.sort((t, a) => t.value - a.value),
                i.push({
                    name: y.intl.string(y.t.OCPUM6),
                    value: 0,
                    radioBarClassName: h.CK,
                    radioItemIconClassName: h.CK,
                }),
                i
            );
        })(c);
    return (
        (0, d.Ay)(() => {
            f.length < 1 || r(f[0].value);
        }),
        (0, e.jsx)(u.Modal, {
            transitionState: t,
            title: y.intl.string(y.t["f3nnB/"]),
            subtitle: p,
            onClose: async () => {
                await a();
            },
            actions: [
                { variant: "secondary", text: y.intl.string(y.t.rzVN6j), onClick: a },
                {
                    variant: "primary",
                    disabled: null === s,
                    text: y.intl.string(y.t["3PatSz"]),
                    onClick: () => {
                        0 === s ? n(C.g.WHAT_YOU_LOSE) : n(C.g.PAUSE_CONFIRM);
                    },
                },
            ],
            children: (0, e.jsx)(o.$d, { "data-migration-pending": !0, options: f, onChange: m, value: s }),
        })
    );
}
function P() {
    let {
            transitionState: t,
            onClose: a,
            pauseDuration: n,
            premiumSubscription: r,
            analyticsLocation: l,
            setStep: o,
            analyticsLocations: d,
        } = (0, D.X)(),
        [m, p] = i.useState(!1),
        [S, v] = i.useState(!1);
    if (null == n) return void o(C.g.PAUSE_SELECT);
    let P = null,
        E = [g.Dmq.PAST_DUE, g.Dmq.PAUSED].includes(r.status) ? r.currentPeriodStart : r.currentPeriodEnd,
        x = s()(E).add(n, "days").toDate();
    switch (r.status) {
        case g.Dmq.PAST_DUE:
            P = y.intl.format(y.t["xaS18/"], { pauseDuration: n, resumeDate: x });
            break;
        case g.Dmq.PAUSED:
            P = y.intl.format(y.t.Vur3Fc, { resumeDate: x });
            break;
        default:
            P = y.intl.format(y.t.W85vFA, { pauseDate: E, resumeDate: x, pauseDuration: n });
    }
    return (0, e.jsxs)(u.Modal, {
        title: y.intl.string(y.t.AnMG5x),
        transitionState: t,
        actions: [
            { text: y.intl.string(y.t.rzVN6j), variant: "primary", onClick: a },
            {
                text: y.intl.string(y.t["cY+Oob"]),
                variant: "critical-primary",
                disabled: S || null == n,
                onClick: async () => {
                    await f({
                        premiumSubscription: r,
                        pauseDuration: n,
                        setIsCancelling: v,
                        setHasError: p,
                        onClose: a,
                        analyticsLocations: d,
                        analyticsLocation: l,
                    });
                },
            },
        ],
        onClose: async () => {
            await a();
        },
        children: [
            m
                ? (0, e.jsx)("div", {
                      className: h.QK,
                      children: (0, e.jsx)(c.w, { type: "critical", children: y.intl.string(y.t["5mlOCW"]) }),
                  })
                : null,
            (0, e.jsx)("div", { className: h.rf, children: P }),
        ],
    });
}
