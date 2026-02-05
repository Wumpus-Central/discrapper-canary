a.d(e, { PremiumSubscriptionPauseModalSelect: () => f, cN: () => A }), a(321073);
var n = a(627968),
    r = a(64700),
    s = a(989349),
    i = a.n(s),
    l = a(539267),
    u = a(158954),
    c = a(421380),
    o = a(384904),
    d = a(964486),
    m = a(927578),
    _ = a(615396),
    E = a(473702),
    C = a(916974),
    S = a(652215),
    D = a(985018),
    p = a(970032);
async function y(t) {
    let {
        premiumSubscription: e,
        pauseDuration: a,
        onClose: n,
        setHasError: r,
        setIsCancelling: s,
        analyticsLocations: i,
        analyticsLocation: l,
    } = t;
    try {
        s(!0),
            r(!1),
            await (0, o.nV)(
                e,
                { pauseDuration: a },
                { amount: 0, currency: e.currency },
                (0, m.UC)(e.items, e.currency, e.paymentSourceId),
                i,
                l,
            ),
            n();
    } catch {
        r(!0), s(!1);
    }
}
function f() {
    let {
            transitionState: t,
            onClose: e,
            setStep: a,
            setPauseDuration: s,
            pauseDuration: i,
            premiumSubscription: o,
        } = (0, C.X)(),
        m = r.useCallback(
            (t) => {
                let { value: e } = t;
                s(e);
            },
            [s],
        ),
        y = o.status === S.Dmq.PAUSED ? D.intl.string(D.t.Lp9WoG) : D.intl.string(D.t.eSR83U),
        f = (function (t) {
            let e = t.status === S.Dmq.PAUSED ? D.t.o3upfT : D.t.dBXZEm,
                { durations: a, currentDaysPaused: n } = (0, _.Vy)(t),
                r = [];
            for (let t of a) {
                let a = l.V[t];
                r.push({
                    name: D.intl.formatToPlainString(e, { days: a - n }),
                    value: a,
                    radioItemIconClassName: p.hO,
                });
            }
            return (
                r.sort((t, e) => t.value - e.value),
                r.push({
                    name: D.intl.string(D.t.OCPUM6),
                    value: 0,
                    radioBarClassName: p.CK,
                    radioItemIconClassName: p.CK,
                }),
                r
            );
        })(o);
    return (
        (0, d.Ay)(() => {
            f.length < 1 || s(f[0].value);
        }),
        (0, n.jsx)(u.Modal, {
            transitionState: t,
            title: D.intl.string(D.t["f3nnB/"]),
            subtitle: y,
            onClose: async () => {
                await e();
            },
            actions: [
                { variant: "secondary", text: D.intl.string(D.t.h9tkAK), onClick: e },
                {
                    variant: "primary",
                    disabled: null === i,
                    text: D.intl.string(D.t["3PatSz"]),
                    onClick: () => {
                        0 === i ? a(E.g.WHAT_YOU_LOSE) : a(E.g.PAUSE_CONFIRM);
                    },
                },
            ],
            children: (0, n.jsx)(c.$d, { "data-migration-pending": !0, options: f, onChange: m, value: i }),
        })
    );
}
function A() {
    let {
            transitionState: t,
            onClose: e,
            pauseDuration: a,
            premiumSubscription: s,
            analyticsLocation: l,
            setStep: c,
            analyticsLocations: o,
        } = (0, C.X)(),
        [d, m] = r.useState(!1),
        [_, f] = r.useState(!1);
    if (null == a) return void c(E.g.PAUSE_SELECT);
    let A = null,
        I = [S.Dmq.PAST_DUE, S.Dmq.PAUSED].includes(s.status) ? s.currentPeriodStart : s.currentPeriodEnd,
        T = i()(I).add(a, "days").toDate();
    switch (s.status) {
        case S.Dmq.PAST_DUE:
            A = D.intl.format(D.t["xaS18/"], { pauseDuration: a, resumeDate: T });
            break;
        case S.Dmq.PAUSED:
            A = D.intl.format(D.t.Vur3Fc, { resumeDate: T });
            break;
        default:
            A = D.intl.format(D.t.W85vFA, { pauseDate: I, resumeDate: T, pauseDuration: a });
    }
    return (0, n.jsxs)(u.Modal, {
        title: D.intl.string(D.t.AnMG5x),
        transitionState: t,
        actions: [
            { text: D.intl.string(D.t.h9tkAK), variant: "primary", onClick: e },
            {
                text: D.intl.string(D.t["cY+Oob"]),
                variant: "critical-primary",
                disabled: _ || null == a,
                onClick: async () => {
                    await y({
                        premiumSubscription: s,
                        pauseDuration: a,
                        setIsCancelling: f,
                        setHasError: m,
                        onClose: e,
                        analyticsLocations: o,
                        analyticsLocation: l,
                    });
                },
            },
        ],
        onClose: async () => {
            await e();
        },
        children: [
            d
                ? (0, n.jsx)("div", {
                      className: p.QK,
                      children: (0, n.jsx)(u.wx6, { type: "critical", children: D.intl.string(D.t["5mlOCW"]) }),
                  })
                : null,
            (0, n.jsx)("div", { className: p.rf, children: A }),
        ],
    });
}
