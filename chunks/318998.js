"use strict";
r.d(t, { PremiumSubscriptionPauseModalSelect: () => b, cN: () => x }), r(321073);
var a = r(627968),
    i = r(64700),
    n = r(989349),
    l = r.n(n),
    s = r(539267),
    o = r(189213),
    c = r(683071),
    d = r(785007),
    u = r(964486),
    _ = r(323082),
    p = r(927578),
    h = r(615396),
    m = r(473702),
    f = r(916974),
    g = r(652215),
    A = r(985018),
    C = r(487601);
async function v(e) {
    let {
        premiumSubscription: t,
        pauseDuration: r,
        onClose: a,
        setHasError: i,
        setIsCancelling: n,
        analyticsLocations: l,
        analyticsLocation: s,
    } = e;
    try {
        n(!0),
            i(!1),
            await (0, _.nV)(
                t,
                { pauseDuration: r },
                { amount: 0, currency: t.currency },
                (0, p.UC)(t.items, t.currency, t.paymentSourceId),
                l,
                s,
            ),
            a();
    } catch {
        i(!0), n(!1);
    }
}
function b() {
    let {
            transitionState: e,
            onClose: t,
            setStep: r,
            setPauseDuration: n,
            pauseDuration: l,
            premiumSubscription: c,
        } = (0, f.X)(),
        _ = i.useCallback(
            (e) => {
                let { value: t } = e;
                n(t);
            },
            [n],
        ),
        p = c.status === g.Dmq.PAUSED ? A.intl.string(A.t.Lp9WoG) : A.intl.string(A.t.eSR83U),
        v = (function (e) {
            let t = e.status === g.Dmq.PAUSED ? A.t.o3upfT : A.t.dBXZEm,
                { durations: r, currentDaysPaused: a } = (0, h.Vy)(e),
                i = [];
            for (let e of r) {
                let r = s.V[e];
                i.push({
                    name: A.intl.formatToPlainString(t, { days: r - a }),
                    value: r,
                    radioItemIconClassName: C.hO,
                });
            }
            return (
                i.sort((e, t) => e.value - t.value),
                i.push({
                    name: A.intl.string(A.t.OCPUM6),
                    value: 0,
                    radioBarClassName: C.CK,
                    radioItemIconClassName: C.CK,
                }),
                i
            );
        })(c);
    return (
        (0, u.Ay)(() => {
            v.length < 1 || n(v[0].value);
        }),
        (0, a.jsx)(o.Modal, {
            transitionState: e,
            title: A.intl.string(A.t["f3nnB/"]),
            subtitle: p,
            onClose: async () => {
                await t();
            },
            actions: [
                { variant: "secondary", text: A.intl.string(A.t.rzVN6j), onClick: t },
                {
                    variant: "primary",
                    disabled: null === l,
                    text: A.intl.string(A.t["3PatSz"]),
                    onClick: () => {
                        0 === l ? r(m.g.WHAT_YOU_LOSE) : r(m.g.PAUSE_CONFIRM);
                    },
                },
            ],
            children: (0, a.jsx)(d.$d, { "data-migration-pending": !0, options: v, onChange: _, value: l }),
        })
    );
}
function x() {
    let {
            transitionState: e,
            onClose: t,
            pauseDuration: r,
            premiumSubscription: n,
            analyticsLocation: s,
            setStep: d,
            analyticsLocations: u,
        } = (0, f.X)(),
        [_, p] = i.useState(!1),
        [h, b] = i.useState(!1);
    if (null == r) return void d(m.g.PAUSE_SELECT);
    let x = null,
        I = [g.Dmq.PAST_DUE, g.Dmq.PAUSED].includes(n.status) ? n.currentPeriodStart : n.currentPeriodEnd,
        y = l()(I).add(r, "days").toDate();
    switch (n.status) {
        case g.Dmq.PAST_DUE:
            x = A.intl.format(A.t["xaS18/"], { pauseDuration: r, resumeDate: y });
            break;
        case g.Dmq.PAUSED:
            x = A.intl.format(A.t.Vur3Fc, { resumeDate: y });
            break;
        default:
            x = A.intl.format(A.t.W85vFA, { pauseDate: I, resumeDate: y, pauseDuration: r });
    }
    return (0, a.jsxs)(o.Modal, {
        title: A.intl.string(A.t.AnMG5x),
        transitionState: e,
        actions: [
            { text: A.intl.string(A.t.rzVN6j), variant: "primary", onClick: t },
            {
                text: A.intl.string(A.t["cY+Oob"]),
                variant: "critical-primary",
                disabled: h || null == r,
                onClick: async () => {
                    await v({
                        premiumSubscription: n,
                        pauseDuration: r,
                        setIsCancelling: b,
                        setHasError: p,
                        onClose: t,
                        analyticsLocations: u,
                        analyticsLocation: s,
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
                      className: C.QK,
                      children: (0, a.jsx)(c.w, { type: "critical", children: A.intl.string(A.t["5mlOCW"]) }),
                  })
                : null,
            (0, a.jsx)("div", { className: C.rf, children: x }),
        ],
    });
}
