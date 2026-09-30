l.d(s, { D3: () => u, SH: () => p, Yb: () => d, hj: () => c });
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
function u(e) {
    let {
            application: s,
            disabled: l = !1,
            dismissibleContent: i,
            dismissibleContentGroupName: a,
            bypassAutoDismiss: n = !1,
            cooldownConfig: o,
        } = e,
        { eligibleToShow: m, markAsDismissed: r } = c({
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
function c(e) {
    let {
            applications: s,
            disabled: l = !1,
            dismissibleContent: d,
            dismissibleContentGroupName: p,
            bypassAutoDismiss: u = !1,
            cooldownConfig: c,
        } = e,
        f = (0, i.yK)([m.A], () => s.map((e) => m.A.getGameUpsellDismissal(e.id, d))),
        [g, h] = (0, t.useState)(() => new Set());
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
                                  c.perGameInitialCooldownMs *
                                      Math.pow(c.perGameCooldownBackoffBase, l.timesDismissed - 1),
                                  c.perGameMaxCooldownMs,
                              )),
                };
            }),
            l = 0;
        return (
            !(function s() {
                let t = Date.now();
                h(
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
    }, [s, f, c]);
    let M = l ? [] : s.filter((e) => g.has(e.id)).map((e) => e.id),
        [S, w] = (0, a.Wl)(M.length > 0 ? d : null, { cooldownDurationMs: c.globalCooldownMs }, p, u),
        D = S === d ? M : [],
        U = s.map((e) => e.id).join(","),
        C = D.join(",");
    return (
        (0, t.useEffect)(() => {
            let e = U.length > 0 ? U.split(",") : [],
                s = new Set(C.length > 0 ? C.split(",") : []),
                t = S !== d,
                i = {};
            for (let a of e)
                !s.has(a) &&
                    (l
                        ? (i[a] = "disabled")
                        : g.has(a)
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
        }, [U, C, d, l, g, S]),
        {
            eligibleToShow: D,
            markAsDismissed: function (e, s) {
                ((0, n.M)(e, d), w(s));
            },
        }
    );
}
