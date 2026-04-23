e.d(a, { PremiumSubscriptionPauseModalSelect: () => v, cN: () => P }), e(321073);
var n = e(627968),
    i = e(64700),
    r = e(989349),
    s = e.n(r),
    l = e(539267),
    c = e(189213),
    o = e(683071),
    u = e(785007),
    d = e(964486),
    m = e(323082),
    p = e(927578),
    S = e(615396),
    C = e(473702),
    D = e(916974),
    y = e(652215),
    g = e(985018),
    h = e(429361);
async function f(t) {
    let {
        premiumSubscription: a,
        pauseDuration: e,
        onClose: n,
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
                { pauseDuration: e },
                { amount: 0, currency: a.currency },
                (0, p.UC)(a.items, a.currency, a.paymentSourceId),
                s,
                l,
            ),
            n();
    } catch {
        i(!0), r(!1);
    }
}
function v() {
    let {
            transitionState: t,
            onClose: a,
            setStep: e,
            setPauseDuration: r,
            pauseDuration: s,
            premiumSubscription: o,
        } = (0, D.X)(),
        m = i.useCallback(
            (t) => {
                let { value: a } = t;
                r(a);
            },
            [r],
        ),
        p = o.status === y.Dmq.PAUSED ? g.intl.string(g.t.Lp9WoG) : g.intl.string(g.t.eSR83U),
        f = (function (t) {
            let a = t.status === y.Dmq.PAUSED ? g.t.o3upfT : g.t.dBXZEm,
                { durations: e, currentDaysPaused: n } = (0, S.Vy)(t),
                i = [];
            for (let t of e) {
                let e = l.V[t];
                i.push({
                    name: g.intl.formatToPlainString(a, { days: e - n }),
                    value: e,
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
        (0, d.Ay)(() => {
            f.length < 1 || r(f[0].value);
        }),
        (0, n.jsx)(c.Modal, {
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
                        0 === s ? e(C.g.WHAT_YOU_LOSE) : e(C.g.PAUSE_CONFIRM);
                    },
                },
            ],
            children: (0, n.jsx)(u.$d, { "data-migration-pending": !0, options: f, onChange: m, value: s }),
        })
    );
}
function P() {
    let {
            transitionState: t,
            onClose: a,
            pauseDuration: e,
            premiumSubscription: r,
            analyticsLocation: l,
            setStep: u,
            analyticsLocations: d,
        } = (0, D.X)(),
        [m, p] = i.useState(!1),
        [S, v] = i.useState(!1);
    if (null == e) return void u(C.g.PAUSE_SELECT);
    let P = null,
        x = [y.Dmq.PAST_DUE, y.Dmq.PAUSED].includes(r.status) ? r.currentPeriodStart : r.currentPeriodEnd,
        E = s()(x).add(e, "days").toDate();
    switch (r.status) {
        case y.Dmq.PAST_DUE:
            P = g.intl.format(g.t["xaS18/"], { pauseDuration: e, resumeDate: E });
            break;
        case y.Dmq.PAUSED:
            P = g.intl.format(g.t.Vur3Fc, { resumeDate: E });
            break;
        default:
            P = g.intl.format(g.t.W85vFA, { pauseDate: x, resumeDate: E, pauseDuration: e });
    }
    return (0, n.jsxs)(c.Modal, {
        title: g.intl.string(g.t.AnMG5x),
        transitionState: t,
        actions: [
            { text: g.intl.string(g.t.rzVN6j), variant: "primary", onClick: a },
            {
                text: g.intl.string(g.t["cY+Oob"]),
                variant: "critical-primary",
                disabled: S || null == e,
                onClick: async () => {
                    await f({
                        premiumSubscription: r,
                        pauseDuration: e,
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
                ? (0, n.jsx)("div", {
                      className: h.QK,
                      children: (0, n.jsx)(o.w, { type: "critical", children: g.intl.string(g.t["5mlOCW"]) }),
                  })
                : null,
            (0, n.jsx)("div", { className: h.rf, children: P }),
        ],
    });
}
