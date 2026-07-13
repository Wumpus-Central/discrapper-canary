t.d(l, { D3: () => c, SH: () => p, Yb: () => m, hj: () => u });
var s = t(64700),
    a = t(17928),
    n = t(131607),
    i = t(355898),
    o = t(644103),
    d = t(574560),
    r = t(652215);
let m = {
        globalCooldownMs: 864e5,
        perGameInitialCooldownMs: 864e5,
        perGameCooldownBackoffBase: 2,
        perGameMaxCooldownMs: 24192e5,
    },
    p = {
        globalCooldownMs: 6048e5,
        perGameInitialCooldownMs: 1 / 0,
        perGameCooldownBackoffBase: 1,
        perGameMaxCooldownMs: 1 / 0,
    };
function c(e) {
    let {
            application: l,
            disabled: t = !1,
            dismissibleContent: a,
            dismissibleContentGroupName: n,
            bypassAutoDismiss: i = !1,
            cooldownConfig: o,
        } = e,
        { eligibleToShow: d, markAsDismissed: r } = u({
            applications: (0, s.useMemo)(() => (null != l ? [l] : []), [l]),
            disabled: t,
            dismissibleContent: a,
            dismissibleContentGroupName: n,
            bypassAutoDismiss: i,
            cooldownConfig: o,
        });
    return {
        shouldShow: d.length > 0,
        markAsDismissed: (e) => {
            null != l && r([l.id], e);
        },
    };
}
function u(e) {
    let {
            applications: l,
            disabled: t = !1,
            dismissibleContent: m,
            dismissibleContentGroupName: p,
            bypassAutoDismiss: c = !1,
            cooldownConfig: u,
        } = e,
        h = (0, a.yK)([d.A], () => l.map((e) => d.A.getGameUpsellDismissal(e.id, m))),
        [f, w] = (0, s.useState)(() => new Set());
    (0, s.useEffect)(() => {
        let e = l.map((e, l) => {
                var t;
                return {
                    id: e.id,
                    nextTime:
                        ((t = h[l]),
                        null == t
                            ? 0
                            : t.dismissedAt +
                              Math.min(
                                  u.perGameInitialCooldownMs *
                                      Math.pow(u.perGameCooldownBackoffBase, t.timesDismissed - 1),
                                  u.perGameMaxCooldownMs,
                              )),
                };
            }),
            t = 0;
        return (
            !(function l() {
                let s = Date.now();
                w(
                    new Set(
                        e
                            .filter((e) => {
                                let { nextTime: l } = e;
                                return s >= l;
                            })
                            .map((e) => {
                                let { id: l } = e;
                                return l;
                            }),
                    ),
                );
                let a = e
                    .map((e) => {
                        let { nextTime: l } = e;
                        return l;
                    })
                    .filter((e) => e > s);
                a.length > 0 && (t = setTimeout(l, Math.min(Math.min(...a) - s, r.mnr)));
            })(),
            () => clearTimeout(t)
        );
    }, [l, h, u]);
    let g = t ? [] : l.filter((e) => f.has(e.id)).map((e) => e.id),
        [M, b] = (0, n.Wl)(g.length > 0 ? m : null, { cooldownDurationMs: u.globalCooldownMs }, p, c),
        C = M === m ? g : [],
        x = l.map((e) => e.id).join(","),
        y = C.join(",");
    return (
        (0, s.useEffect)(() => {
            let e = x.length > 0 ? x.split(",") : [],
                l = new Set(y.length > 0 ? y.split(",") : []),
                s = M !== m,
                a = {};
            for (let n of e)
                !l.has(n) &&
                    (t
                        ? (a[n] = "disabled")
                        : f.has(n)
                          ? s && (a[n] = "global-cooldown")
                          : (a[n] = "per-game-cooldown"));
            (0, o.v)({
                timestamp: Date.now(),
                applicationIds: e,
                dismissibleContent: m,
                eligibleToShow: [...l],
                disabled: t,
                excludedReasons: a,
            });
        }, [x, y, m, t, f, M]),
        {
            eligibleToShow: C,
            markAsDismissed: function (e, l) {
                (0, i.M)(e, m), b(l);
            },
        }
    );
}
