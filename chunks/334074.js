l.d(s, { D3: () => c, SH: () => p, Yb: () => d, hj: () => u });
var t = l(582128),
    i = l(17928),
    a = l(131607),
    n = l(355898),
    o = l(644103),
    r = l(574560),
    m = l(652215);
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
        { eligibleToShow: r, markAsDismissed: m } = u({
            applications: (0, t.useMemo)(() => (null != s ? [s] : []), [s]),
            disabled: l,
            dismissibleContent: i,
            dismissibleContentGroupName: a,
            bypassAutoDismiss: n,
            cooldownConfig: o,
        });
    return {
        shouldShow: r.length > 0,
        markAsDismissed: (e) => {
            null != s && m([s.id], e);
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
        h = (0, i.yK)([r.A], () => s.map((e) => r.A.getGameUpsellDismissal(e.id, d))),
        [f, g] = (0, t.useState)(() => new Set());
    (0, t.useEffect)(() => {
        let e = s.map((e, s) => {
                var l;
                return {
                    id: e.id,
                    nextTime:
                        ((l = h[s]),
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
                i.length > 0 && (l = setTimeout(s, Math.min(Math.min(...i) - t, m.mnr)));
            })(),
            () => clearTimeout(l)
        );
    }, [s, h, u]);
    let S = l ? [] : s.filter((e) => f.has(e.id)).map((e) => e.id),
        [w, M] = (0, a.Wl)(S.length > 0 ? d : null, { cooldownDurationMs: u.globalCooldownMs }, p, c),
        C = w === d ? S : [],
        D = s.map((e) => e.id).join(","),
        A = C.join(",");
    return (
        (0, t.useEffect)(() => {
            let e = D.length > 0 ? D.split(",") : [],
                s = new Set(A.length > 0 ? A.split(",") : []),
                t = w !== d,
                i = {};
            for (let a of e)
                !s.has(a) &&
                    (l
                        ? (i[a] = "disabled")
                        : f.has(a)
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
        }, [D, A, d, l, f, w]),
        {
            eligibleToShow: C,
            markAsDismissed: function (e, s) {
                ((0, n.M)(e, d), M(s));
            },
        }
    );
}
