t.d(s, { D3: () => m, SH: () => c, Yb: () => u, hj: () => p });
var i = t(64700),
    l = t(17928),
    n = t(131607),
    a = t(355898),
    o = t(644103),
    r = t(574560),
    d = t(652215);
let u = {
        globalCooldownMs: 864e5,
        perGameInitialCooldownMs: 864e5,
        perGameCooldownBackoffBase: 2,
        perGameMaxCooldownMs: 24192e5,
    },
    c = {
        globalCooldownMs: 6048e5,
        perGameInitialCooldownMs: 1 / 0,
        perGameCooldownBackoffBase: 1,
        perGameMaxCooldownMs: 1 / 0,
    };
function m(e) {
    let {
            application: s,
            disabled: t = !1,
            dismissibleContent: l,
            dismissibleContentGroupName: n,
            bypassAutoDismiss: a = !1,
            cooldownConfig: o,
        } = e,
        { eligibleToShow: r, markAsDismissed: d } = p({
            applications: (0, i.useMemo)(() => (null != s ? [s] : []), [s]),
            disabled: t,
            dismissibleContent: l,
            dismissibleContentGroupName: n,
            bypassAutoDismiss: a,
            cooldownConfig: o,
        });
    return {
        shouldShow: r.length > 0,
        markAsDismissed: (e) => {
            null != s && d([s.id], e);
        },
    };
}
function p(e) {
    let {
            applications: s,
            disabled: t = !1,
            dismissibleContent: u,
            dismissibleContentGroupName: c,
            bypassAutoDismiss: m = !1,
            cooldownConfig: p,
        } = e,
        g = (0, l.yK)([r.A], () => s.map((e) => r.A.getGameUpsellDismissal(e.id, u))),
        [f, h] = (0, i.useState)(() => new Set());
    (0, i.useEffect)(() => {
        let e = s.map((e, s) => {
                var t;
                return {
                    id: e.id,
                    nextTime:
                        ((t = g[s]),
                        null == t
                            ? 0
                            : t.dismissedAt +
                              Math.min(
                                  p.perGameInitialCooldownMs *
                                      Math.pow(p.perGameCooldownBackoffBase, t.timesDismissed - 1),
                                  p.perGameMaxCooldownMs,
                              )),
                };
            }),
            t = 0;
        return (
            !(function s() {
                let i = Date.now();
                h(
                    new Set(
                        e
                            .filter((e) => {
                                let { nextTime: s } = e;
                                return i >= s;
                            })
                            .map((e) => {
                                let { id: s } = e;
                                return s;
                            }),
                    ),
                );
                let l = e
                    .map((e) => {
                        let { nextTime: s } = e;
                        return s;
                    })
                    .filter((e) => e > i);
                l.length > 0 && (t = setTimeout(s, Math.min(Math.min(...l) - i, d.mnr)));
            })(),
            () => clearTimeout(t)
        );
    }, [s, g, p]);
    let S = t ? [] : s.filter((e) => f.has(e.id)).map((e) => e.id),
        [w, I] = (0, n.Wl)(S.length > 0 ? u : null, { cooldownDurationMs: p.globalCooldownMs }, c, m),
        M = w === u ? S : [],
        _ = s.map((e) => e.id).join(","),
        E = M.join(",");
    return (
        (0, i.useEffect)(() => {
            let e = _.length > 0 ? _.split(",") : [],
                s = new Set(E.length > 0 ? E.split(",") : []),
                i = w !== u,
                l = {};
            for (let n of e)
                !s.has(n) &&
                    (t
                        ? (l[n] = "disabled")
                        : f.has(n)
                          ? i && (l[n] = "global-cooldown")
                          : (l[n] = "per-game-cooldown"));
            (0, o.v)({
                timestamp: Date.now(),
                applicationIds: e,
                dismissibleContent: u,
                eligibleToShow: [...s],
                disabled: t,
                excludedReasons: l,
            });
        }, [_, E, u, t, f, w]),
        {
            eligibleToShow: M,
            markAsDismissed: function (e, s) {
                (0, a.M)(e, u), I(s);
            },
        }
    );
}
