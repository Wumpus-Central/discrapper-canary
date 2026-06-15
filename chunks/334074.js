t.d(s, { D3: () => m, SH: () => c, Yb: () => d, hj: () => p });
var l = t(64700),
    i = t(17928),
    n = t(131607),
    a = t(355898),
    o = t(644103),
    r = t(574560),
    u = t(652215);
let d = {
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
            dismissibleContent: i,
            dismissibleContentGroupName: n,
            bypassAutoDismiss: a = !1,
            cooldownConfig: o,
        } = e,
        { eligibleToShow: r, markAsDismissed: u } = p({
            applications: (0, l.useMemo)(() => (null != s ? [s] : []), [s]),
            disabled: t,
            dismissibleContent: i,
            dismissibleContentGroupName: n,
            bypassAutoDismiss: a,
            cooldownConfig: o,
        });
    return {
        shouldShow: r.length > 0,
        markAsDismissed: (e) => {
            null != s && u([s.id], e);
        },
    };
}
function p(e) {
    let {
            applications: s,
            disabled: t = !1,
            dismissibleContent: d,
            dismissibleContentGroupName: c,
            bypassAutoDismiss: m = !1,
            cooldownConfig: p,
        } = e,
        g = (0, i.yK)([r.A], () => s.map((e) => r.A.getGameUpsellDismissal(e.id, d))),
        [f, h] = (0, l.useState)(() => new Set());
    (0, l.useEffect)(() => {
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
            t = 0,
            l = () => {
                let s = Date.now();
                h(
                    new Set(
                        e
                            .filter((e) => {
                                let { nextTime: t } = e;
                                return s >= t;
                            })
                            .map((e) => {
                                let { id: s } = e;
                                return s;
                            }),
                    ),
                );
                let i = e
                    .map((e) => {
                        let { nextTime: s } = e;
                        return s;
                    })
                    .filter((e) => e > s);
                i.length > 0 && (t = setTimeout(l, Math.min(Math.min(...i) - s, u.mnr)));
            };
        return l(), () => clearTimeout(t);
    }, [s, g, p]);
    let S = t ? [] : s.filter((e) => f.has(e.id)).map((e) => e.id),
        [w, M] = (0, n.Wl)(S.length > 0 ? d : null, { cooldownDurationMs: p.globalCooldownMs }, c, m),
        E = w === d ? S : [],
        I = s.map((e) => e.id).join(","),
        A = E.join(",");
    return (
        (0, l.useEffect)(() => {
            let e = I.length > 0 ? I.split(",") : [],
                s = new Set(A.length > 0 ? A.split(",") : []),
                l = w !== d,
                i = {};
            for (let n of e)
                !s.has(n) &&
                    (t
                        ? (i[n] = "disabled")
                        : f.has(n)
                          ? l && (i[n] = "global-cooldown")
                          : (i[n] = "per-game-cooldown"));
            (0, o.v)({
                timestamp: Date.now(),
                applicationIds: e,
                dismissibleContent: d,
                eligibleToShow: [...s],
                disabled: t,
                excludedReasons: i,
            });
        }, [I, A, d, t, f, w]),
        {
            eligibleToShow: E,
            markAsDismissed: (e, s) => {
                (0, a.M)(e, d), M(s);
            },
        }
    );
}
