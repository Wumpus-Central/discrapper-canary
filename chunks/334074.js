l.d(s, { D3: () => c, SH: () => p, Yb: () => d, hj: () => u });
var t = l(582128),
    i = l(17928),
    a = l(131607),
    n = l(355898),
    o = l(644103),
    m = l(574560),
    r = l(652215);
let d = {
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
            application: s,
            disabled: l = !1,
            dismissibleContent: i,
            dismissibleContentGroupName: a,
            bypassAutoDismiss: n = !1,
            cooldownConfig: o,
        } = e,
        { eligibleToShow: m, markAsDismissed: r } = u({
            applications: (0, t.useMemo)(() => (null != s ? [s] : []), [s]),
            disabled: l,
            dismissibleContent: i,
            dismissibleContentGroupName: a,
            bypassAutoDismiss: n,
            cooldownConfig: o,
        });
    return {
        shouldShow: m.length > 0,
        markAsDismissed: (e) => {
            null != s && r([s.id], e);
        },
    };
}
function u(e) {
    let {
            applications: s,
            disabled: l = !1,
            dismissibleContent: d,
            dismissibleContentGroupName: p,
            bypassAutoDismiss: c = !1,
            cooldownConfig: u,
        } = e,
        f = (0, i.yK)([m.A], () => s.map((e) => m.A.getGameUpsellDismissal(e.id, d))),
        [h, g] = (0, t.useState)(() => new Set());
    (0, t.useEffect)(() => {
        let e = s.map((e, s) => {
                var l;
                return {
                    id: e.id,
                    nextTime:
                        ((l = f[s]),
                        null == l
                            ? 0
                            : l.dismissedAt +
                              Math.min(
                                  u.perGameInitialCooldownMs *
                                      Math.pow(u.perGameCooldownBackoffBase, l.timesDismissed - 1),
                                  u.perGameMaxCooldownMs,
                              )),
                };
            }),
            l = 0;
        return (
            !(function s() {
                let t = Date.now();
                g(
                    new Set(
                        e
                            .filter((e) => {
                                let { nextTime: s } = e;
                                return t >= s;
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
                    .filter((e) => e > t);
                i.length > 0 && (l = setTimeout(s, Math.min(Math.min(...i) - t, r.mnr)));
            })(),
            () => clearTimeout(l)
        );
    }, [s, f, u]);
    let w = l ? [] : s.filter((e) => h.has(e.id)).map((e) => e.id),
        [M, S] = (0, a.Wl)(w.length > 0 ? d : null, { cooldownDurationMs: u.globalCooldownMs }, p, c),
        D = M === d ? w : [],
        y = s.map((e) => e.id).join(","),
        A = D.join(",");
    return (
        (0, t.useEffect)(() => {
            let e = y.length > 0 ? y.split(",") : [],
                s = new Set(A.length > 0 ? A.split(",") : []),
                t = M !== d,
                i = {};
            for (let a of e)
                !s.has(a) &&
                    (l
                        ? (i[a] = "disabled")
                        : h.has(a)
                          ? t && (i[a] = "global-cooldown")
                          : (i[a] = "per-game-cooldown"));
            (0, o.v)({
                timestamp: Date.now(),
                applicationIds: e,
                dismissibleContent: d,
                eligibleToShow: [...s],
                disabled: l,
                excludedReasons: i,
            });
        }, [y, A, d, l, h, M]),
        {
            eligibleToShow: D,
            markAsDismissed: function (e, s) {
                (0, n.M)(e, d), S(s);
            },
        }
    );
}
