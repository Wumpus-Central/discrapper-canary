t.d(s, { D3: () => m, SH: () => c, Yb: () => d, hj: () => p });
var i = t(64700),
    n = t(17928),
    l = t(131607),
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
            dismissibleContent: n,
            dismissibleContentGroupName: l,
            bypassAutoDismiss: a = !1,
            cooldownConfig: o,
        } = e,
        { eligibleToShow: r, markAsDismissed: u } = p({
            applications: (0, i.useMemo)(() => (null != s ? [s] : []), [s]),
            disabled: t,
            dismissibleContent: n,
            dismissibleContentGroupName: l,
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
        f = (0, n.yK)([r.A], () => s.map((e) => r.A.getGameUpsellDismissal(e.id, d))),
        [g, h] = (0, i.useState)(() => new Set());
    (0, i.useEffect)(() => {
        let e = s.map((e, s) => {
                var t;
                return {
                    id: e.id,
                    nextTime:
                        ((t = f[s]),
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
                let n = e
                    .map((e) => {
                        let { nextTime: s } = e;
                        return s;
                    })
                    .filter((e) => e > i);
                n.length > 0 && (t = setTimeout(s, Math.min(Math.min(...n) - i, u.mnr)));
            })(),
            () => clearTimeout(t)
        );
    }, [s, f, p]);
    let S = t ? [] : s.filter((e) => g.has(e.id)).map((e) => e.id),
        [w, I] = (0, l.Wl)(S.length > 0 ? d : null, { cooldownDurationMs: p.globalCooldownMs }, c, m),
        M = w === d ? S : [],
        k = s.map((e) => e.id).join(","),
        _ = M.join(",");
    return (
        (0, i.useEffect)(() => {
            let e = k.length > 0 ? k.split(",") : [],
                s = new Set(_.length > 0 ? _.split(",") : []),
                i = w !== d,
                n = {};
            for (let l of e)
                !s.has(l) &&
                    (t
                        ? (n[l] = "disabled")
                        : g.has(l)
                          ? i && (n[l] = "global-cooldown")
                          : (n[l] = "per-game-cooldown"));
            (0, o.v)({
                timestamp: Date.now(),
                applicationIds: e,
                dismissibleContent: d,
                eligibleToShow: [...s],
                disabled: t,
                excludedReasons: n,
            });
        }, [k, _, d, t, g, w]),
        {
            eligibleToShow: M,
            markAsDismissed: function (e, s) {
                (0, a.M)(e, d), I(s);
            },
        }
    );
}
