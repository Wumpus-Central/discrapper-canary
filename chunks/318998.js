"use strict";
r.d(t, { PremiumSubscriptionPauseModalSelect: () => A, cN: () => C }), r(321073);
var a = r(627968),
    i = r(64700),
    n = r(989349),
    s = r.n(n),
    l = r(539267),
    o = r(189213),
    c = r(683071),
    d = r(785007),
    u = r(964486),
    _ = r(323082),
    p = r(927578),
    m = r(615396),
    h = r(473702),
    f = r(916974),
    g = r(652215),
    b = r(985018),
    v = r(487601);
async function y(e) {
    let {
        premiumSubscription: t,
        pauseDuration: r,
        onClose: a,
        setHasError: i,
        setIsCancelling: n,
        analyticsLocations: s,
        analyticsLocation: l,
    } = e;
    try {
        n(!0),
            i(!1),
            await (0, _.nV)(
                t,
                { pauseDuration: r },
                { amount: 0, currency: t.currency },
                (0, p.UC)(t.items, t.currency, t.paymentSourceId),
                s,
                l,
            ),
            a();
    } catch {
        i(!0), n(!1);
    }
}
function A() {
    let {
            transitionState: e,
            onClose: t,
            setStep: r,
            setPauseDuration: n,
            pauseDuration: s,
            premiumSubscription: c,
        } = (0, f.X)(),
        _ = i.useCallback(
            (e) => {
                let { value: t } = e;
                n(t);
            },
            [n],
        ),
        p = c.status === g.Dmq.PAUSED ? b.intl.string(b.t.Lp9WoG) : b.intl.string(b.t.eSR83U),
        y = (function (e) {
            let t = e.status === g.Dmq.PAUSED ? b.t.o3upfT : b.t.dBXZEm,
                { durations: r, currentDaysPaused: a } = (0, m.Vy)(e),
                i = [];
            for (let e of r) {
                let r = l.V[e];
                i.push({
                    name: b.intl.formatToPlainString(t, { days: r - a }),
                    value: r,
                    radioItemIconClassName: v.hO,
                });
            }
            return (
                i.sort((e, t) => e.value - t.value),
                i.push({
                    name: b.intl.string(b.t.OCPUM6),
                    value: 0,
                    radioBarClassName: v.CK,
                    radioItemIconClassName: v.CK,
                }),
                i
            );
        })(c);
    return (
        (0, u.Ay)(() => {
            y.length < 1 || n(y[0].value);
        }),
        (0, a.jsx)(o.Modal, {
            transitionState: e,
            title: b.intl.string(b.t["f3nnB/"]),
            subtitle: p,
            onClose: async () => {
                await t();
            },
            actions: [
                { variant: "secondary", text: b.intl.string(b.t.rzVN6j), onClick: t },
                {
                    variant: "primary",
                    disabled: null === s,
                    text: b.intl.string(b.t["3PatSz"]),
                    onClick: () => {
                        0 === s ? r(h.g.WHAT_YOU_LOSE) : r(h.g.PAUSE_CONFIRM);
                    },
                },
            ],
            children: (0, a.jsx)(d.$d, { "data-migration-pending": !0, options: y, onChange: _, value: s }),
        })
    );
}
function C() {
    let {
            transitionState: e,
            onClose: t,
            pauseDuration: r,
            premiumSubscription: n,
            analyticsLocation: l,
            setStep: d,
            analyticsLocations: u,
        } = (0, f.X)(),
        [_, p] = i.useState(!1),
        [m, A] = i.useState(!1);
    if (null == r) return void d(h.g.PAUSE_SELECT);
    let C = null,
        x = [g.Dmq.PAST_DUE, g.Dmq.PAUSED].includes(n.status) ? n.currentPeriodStart : n.currentPeriodEnd,
        I = s()(x).add(r, "days").toDate();
    switch (n.status) {
        case g.Dmq.PAST_DUE:
            C = b.intl.format(b.t["xaS18/"], { pauseDuration: r, resumeDate: I });
            break;
        case g.Dmq.PAUSED:
            C = b.intl.format(b.t.Vur3Fc, { resumeDate: I });
            break;
        default:
            C = b.intl.format(b.t.W85vFA, { pauseDate: x, resumeDate: I, pauseDuration: r });
    }
    return (0, a.jsxs)(o.Modal, {
        title: b.intl.string(b.t.AnMG5x),
        transitionState: e,
        actions: [
            { text: b.intl.string(b.t.rzVN6j), variant: "primary", onClick: t },
            {
                text: b.intl.string(b.t["cY+Oob"]),
                variant: "critical-primary",
                disabled: m || null == r,
                onClick: async () => {
                    await y({
                        premiumSubscription: n,
                        pauseDuration: r,
                        setIsCancelling: A,
                        setHasError: p,
                        onClose: t,
                        analyticsLocations: u,
                        analyticsLocation: l,
                    });
                },
            },
        ],
        onClose: async () => {
            await t();
        },
        children: [
            _
                ? (0, a.jsx)("div", {
                      className: v.QK,
                      children: (0, a.jsx)(c.w, { type: "critical", children: b.intl.string(b.t["5mlOCW"]) }),
                  })
                : null,
            (0, a.jsx)("div", { className: v.rf, children: C }),
        ],
    });
}
