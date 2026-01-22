n.d(e, {
    PremiumSubscriptionPauseModalSelect: () => O,
    cN: () => D,
}),
    n(321073),
    n(896048),
    n(638769);
var a = n(627968),
    r = n(64700),
    i = n(989349),
    l = n.n(i),
    s = n(539267),
    u = n(158954),
    o = n(421380),
    c = n(384904),
    d = n(964486),
    m = n(927578),
    f = n(615396),
    _ = n(473702),
    E = n(916974),
    y = n(652215),
    p = n(985018),
    C = n(970032);
async function S(t) {
    let {
        premiumSubscription: e,
        pauseDuration: n,
        onClose: a,
        setHasError: r,
        setIsCancelling: i,
        analyticsLocations: l,
        analyticsLocation: s,
    } = t;
    try {
        i(!0),
            r(!1),
            await (0, c.nV)(
                e,
                {
                    pauseDuration: n,
                },
                {
                    amount: 0,
                    currency: e.currency,
                },
                (0, m.UC)(e.items, e.currency, e.paymentSourceId),
                l,
                s,
            ),
            a();
    } catch (t) {
        r(!0), i(!1);
    }
}

function O() {
    let {
            transitionState: t,
            onClose: e,
            setStep: n,
            setPauseDuration: i,
            pauseDuration: l,
            premiumSubscription: c,
        } = (0, E.X)(),
        m = r.useCallback(
            (t) => {
                let { value: e } = t;
                i(e);
            },
            [i],
        ),
        S = c.status === y.Dmq.PAUSED ? p.intl.string(p.t.Lp9WoG) : p.intl.string(p.t.eSR83U),
        O = (function (t) {
            let e = t.status === y.Dmq.PAUSED ? p.t.o3upfT : p.t.dBXZEm,
                { durations: n, currentDaysPaused: a } = (0, f.Vy)(t),
                r = [];
            for (let t of n) {
                let n = s.V[t];
                r.push({
                    name: p.intl.formatToPlainString(e, {
                        days: n - a,
                    }),
                    value: n,
                    radioItemIconClassName: C.hO,
                });
            }
            return (
                r.sort((t, e) => t.value - e.value),
                r.push({
                    name: p.intl.string(p.t.OCPUM6),
                    value: 0,
                    radioBarClassName: C.CK,
                    radioItemIconClassName: C.CK,
                }),
                r
            );
        })(c);
    return (
        (0, d.Ay)(() => {
            O.length < 1 || i(O[0].value);
        }),
        (0, a.jsx)(u.Modal, {
            transitionState: t,
            title: p.intl.string(p.t["f3nnB/"]),
            subtitle: S,
            onClose: async () => {
                await e();
            },
            actions: [
                {
                    variant: "secondary",
                    text: p.intl.string(p.t.h9tkAK),
                    onClick: e,
                },
                {
                    variant: "primary",
                    disabled: null === l,
                    text: p.intl.string(p.t["3PatSz"]),
                    onClick: () => {
                        0 === l ? n(_.g.WHAT_YOU_LOSE) : n(_.g.PAUSE_CONFIRM);
                    },
                },
            ],
            children: (0, a.jsx)(o.$d, {
                "data-migration-pending": !0,
                options: O,
                onChange: m,
                value: l,
            }),
        })
    );
}

function D() {
    let {
            transitionState: t,
            onClose: e,
            pauseDuration: n,
            premiumSubscription: i,
            analyticsLocation: s,
            setStep: o,
            analyticsLocations: c,
        } = (0, E.X)(),
        [d, m] = r.useState(!1),
        [f, O] = r.useState(!1);
    if (null == n) return void o(_.g.PAUSE_SELECT);
    let D = null,
        g = [y.Dmq.PAST_DUE, y.Dmq.PAUSED].includes(i.status) ? i.currentPeriodStart : i.currentPeriodEnd,
        P = l()(g).add(n, "days").toDate();
    switch (i.status) {
        case y.Dmq.PAST_DUE:
            D = p.intl.format(p.t["xaS18/"], {
                pauseDuration: n,
                resumeDate: P,
            });
            break;
        case y.Dmq.PAUSED:
            D = p.intl.format(p.t.Vur3Fc, {
                resumeDate: P,
            });
            break;
        default:
            D = p.intl.format(p.t.W85vFA, {
                pauseDate: g,
                resumeDate: P,
                pauseDuration: n,
            });
    }
    return (0, a.jsxs)(u.Modal, {
        title: p.intl.string(p.t.AnMG5x),
        transitionState: t,
        actions: [
            {
                text: p.intl.string(p.t.h9tkAK),
                variant: "primary",
                onClick: e,
            },
            {
                text: p.intl.string(p.t["cY+Oob"]),
                variant: "critical-primary",
                disabled: f || null == n,
                onClick: async () => {
                    await S({
                        premiumSubscription: i,
                        pauseDuration: n,
                        setIsCancelling: O,
                        setHasError: m,
                        onClose: e,
                        analyticsLocations: c,
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
                ? (0, a.jsx)("div", {
                      className: C.QK,
                      children: (0, a.jsx)(u.wx6, {
                          type: "critical",
                          children: p.intl.string(p.t["5mlOCW"]),
                      }),
                  })
                : null,
            (0, a.jsx)("div", {
                className: C.rf,
                children: D,
            }),
        ],
    });
}
