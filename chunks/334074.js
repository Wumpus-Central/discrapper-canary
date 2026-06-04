"use strict";
n.d(t, { D3: () => _, SH: () => d, Yb: () => c, hj: () => h });
var i = n(64700),
    r = n(17928),
    s = n(131607),
    a = n(355898),
    o = n(644103),
    l = n(574560),
    u = n(652215);
let c = {
        globalCooldownMs: 864e5,
        perGameInitialCooldownMs: 864e5,
        perGameCooldownBackoffBase: 2,
        perGameMaxCooldownMs: 24192e5,
    },
    d = {
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
            dismissibleContentGroupName: s,
            bypassAutoDismiss: a = !1,
            cooldownConfig: o,
        } = e,
        { eligibleToShow: l, markAsDismissed: u } = h({
            applications: (0, i.useMemo)(() => (null != t ? [t] : []), [t]),
            disabled: n,
            dismissibleContent: r,
            dismissibleContentGroupName: s,
            bypassAutoDismiss: a,
            cooldownConfig: o,
        });
    return {
        shouldShow: l.length > 0,
        markAsDismissed: (e) => {
            null != t && u([t.id], e);
        },
    };
}
function h(e) {
    let {
            applications: t,
            disabled: n = !1,
            dismissibleContent: c,
            dismissibleContentGroupName: d,
            bypassAutoDismiss: _ = !1,
            cooldownConfig: h,
        } = e,
        f = (0, r.yK)([l.A], () => t.map((e) => l.A.getGameUpsellDismissal(e.id, c))),
        [p, E] = (0, i.useState)(() => new Set());
    (0, i.useEffect)(() => {
        let e = t.map((e, t) => {
                var n;
                return {
                    id: e.id,
                    nextTime:
                        ((n = f[t]),
                        null == n
                            ? 0
                            : n.dismissedAt +
                              Math.min(
                                  h.perGameInitialCooldownMs *
                                      Math.pow(h.perGameCooldownBackoffBase, n.timesDismissed - 1),
                                  h.perGameMaxCooldownMs,
                              )),
                };
            }),
            n = 0,
            i = () => {
                let t = Date.now();
                E(
                    new Set(
                        e
                            .filter((e) => {
                                let { nextTime: n } = e;
                                return t >= n;
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
                    .filter((e) => e > t);
                r.length > 0 && (n = setTimeout(i, Math.min(Math.min(...r) - t, u.mnr)));
            };
        return i(), () => clearTimeout(n);
    }, [t, f, h]);
    let m = n ? [] : t.filter((e) => p.has(e.id)).map((e) => e.id),
        [g, A] = (0, s.Wl)(m.length > 0 ? c : null, { cooldownDurationMs: h.globalCooldownMs }, d, _),
        I = g === c ? m : [],
        T = t.map((e) => e.id).join(","),
        S = I.join(",");
    return (
        (0, i.useEffect)(() => {
            let e = T.length > 0 ? T.split(",") : [],
                t = new Set(S.length > 0 ? S.split(",") : []),
                i = g !== c,
                r = {};
            for (let s of e)
                !t.has(s) &&
                    (n
                        ? (r[s] = "disabled")
                        : p.has(s)
                          ? i && (r[s] = "global-cooldown")
                          : (r[s] = "per-game-cooldown"));
            (0, o.v)({
                timestamp: Date.now(),
                applicationIds: e,
                dismissibleContent: c,
                eligibleToShow: [...t],
                disabled: n,
                excludedReasons: r,
            });
        }, [T, S, c, n, p, g]),
        {
            eligibleToShow: I,
            markAsDismissed: (e, t) => {
                (0, a.M)(e, c), A(t);
            },
        }
    );
}
