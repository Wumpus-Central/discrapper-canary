"use strict";
n.d(t, { D3: () => _, SH: () => u, Yb: () => c, hj: () => E });
var i = n(64700),
    r = n(17928),
    a = n(131607),
    s = n(355898),
    l = n(644103),
    o = n(574560),
    d = n(652215);
let c = {
        globalCooldownMs: 864e5,
        perGameInitialCooldownMs: 864e5,
        perGameCooldownBackoffBase: 2,
        perGameMaxCooldownMs: 24192e5,
    },
    u = {
        globalCooldownMs: 6048e5,
        perGameInitialCooldownMs: 1 / 0,
        perGameCooldownBackoffBase: 1,
        perGameMaxCooldownMs: 1 / 0,
    };
function _(e) {
    let {
            application: t,
            disabled: n = !1,
            dismissibleContent: r,
            dismissibleContentGroupName: a,
            bypassAutoDismiss: s = !1,
            cooldownConfig: l,
        } = e,
        { eligibleToShow: o, markAsDismissed: d } = E({
            applications: (0, i.useMemo)(() => (null != t ? [t] : []), [t]),
            disabled: n,
            dismissibleContent: r,
            dismissibleContentGroupName: a,
            bypassAutoDismiss: s,
            cooldownConfig: l,
        });
    return {
        shouldShow: o.length > 0,
        markAsDismissed: (e) => {
            null != t && d([t.id], e);
        },
    };
}
function E(e) {
    let {
            applications: t,
            disabled: n = !1,
            dismissibleContent: c,
            dismissibleContentGroupName: u,
            bypassAutoDismiss: _ = !1,
            cooldownConfig: E,
        } = e,
        A = (0, r.yK)([o.A], () => t.map((e) => o.A.getGameUpsellDismissal(e.id, c))),
        [h, I] = (0, i.useState)(() => new Set());
    (0, i.useEffect)(() => {
        let e = t.map((e, t) => {
                var n;
                return {
                    id: e.id,
                    nextTime:
                        ((n = A[t]),
                        null == n
                            ? 0
                            : n.dismissedAt +
                              Math.min(
                                  E.perGameInitialCooldownMs *
                                      Math.pow(E.perGameCooldownBackoffBase, n.timesDismissed - 1),
                                  E.perGameMaxCooldownMs,
                              )),
                };
            }),
            n = 0;
        return (
            !(function t() {
                let i = Date.now();
                I(
                    new Set(
                        e
                            .filter((e) => {
                                let { nextTime: t } = e;
                                return i >= t;
                            })
                            .map((e) => {
                                let { id: t } = e;
                                return t;
                            }),
                    ),
                );
                let r = e
                    .map((e) => {
                        let { nextTime: t } = e;
                        return t;
                    })
                    .filter((e) => e > i);
                r.length > 0 && (n = setTimeout(t, Math.min(Math.min(...r) - i, d.mnr)));
            })(),
            () => clearTimeout(n)
        );
    }, [t, A, E]);
    let f = n ? [] : t.filter((e) => h.has(e.id)).map((e) => e.id),
        [p, T] = (0, a.Wl)(f.length > 0 ? c : null, { cooldownDurationMs: E.globalCooldownMs }, u, _),
        m = p === c ? f : [],
        g = t.map((e) => e.id).join(","),
        S = m.join(",");
    return (
        (0, i.useEffect)(() => {
            let e = g.length > 0 ? g.split(",") : [],
                t = new Set(S.length > 0 ? S.split(",") : []),
                i = p !== c,
                r = {};
            for (let a of e)
                !t.has(a) &&
                    (n
                        ? (r[a] = "disabled")
                        : h.has(a)
                          ? i && (r[a] = "global-cooldown")
                          : (r[a] = "per-game-cooldown"));
            (0, l.v)({
                timestamp: Date.now(),
                applicationIds: e,
                dismissibleContent: c,
                eligibleToShow: [...t],
                disabled: n,
                excludedReasons: r,
            });
        }, [g, S, c, n, h, p]),
        {
            eligibleToShow: m,
            markAsDismissed: function (e, t) {
                (0, s.M)(e, c), T(t);
            },
        }
    );
}
