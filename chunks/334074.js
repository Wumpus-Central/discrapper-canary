var t = l(582128),
    i = l(855986),
    n = l(263775),
    a = l(355898),
    o = l(644103),
    r = l(574560),
    m = l(652215);
function d(e) {
    let {
            applications: s,
            disabled: l = !1,
            dismissibleContent: d,
            dismissibleContentGroupName: u,
            bypassAutoDismiss: c = !1,
            cooldownConfig: p,
        } = e,
        f = (0, i.yK)([r.A], () => s.map((e) => r.A.getGameUpsellDismissal(e.id, d))),
        [S, g] = (0, t.useState)(() => new Set());
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
                                  p.perGameInitialCooldownMs *
                                      Math.pow(p.perGameCooldownBackoffBase, l.timesDismissed - 1),
                                  p.perGameMaxCooldownMs,
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
    }, [s, f, p]);
    let h = l ? [] : s.filter((e) => S.has(e.id)).map((e) => e.id),
        [A, y] = (0, n.Wl)(h.length > 0 ? d : null, { cooldownDurationMs: p.globalCooldownMs }, u, c),
        C = A === d ? h : [],
        M = s.map((e) => e.id).join(","),
        w = C.join(",");
    return (
        (0, t.useEffect)(() => {
            let e = M.length > 0 ? M.split(",") : [],
                s = new Set(w.length > 0 ? w.split(",") : []),
                t = A !== d,
                i = {};
            for (let n of e)
                !s.has(n) &&
                    (l
                        ? (i[n] = "disabled")
                        : S.has(n)
                          ? t && (i[n] = "global-cooldown")
                          : (i[n] = "per-game-cooldown"));
            (0, o.v)({
                timestamp: Date.now(),
                applicationIds: e,
                dismissibleContent: d,
                eligibleToShow: [...s],
                disabled: l,
                excludedReasons: i,
            });
        }, [M, w, d, l, S, A]),
        {
            eligibleToShow: C,
            markAsDismissed: function (e, s) {
                ((0, a.M)(e, d), y(s));
            },
        }
    );
}
l.d(
    s,
    {},
    {
        D3: function (e) {
            let {
                    application: s,
                    disabled: l = !1,
                    dismissibleContent: i,
                    dismissibleContentGroupName: n,
                    bypassAutoDismiss: a = !1,
                    cooldownConfig: o,
                } = e,
                { eligibleToShow: r, markAsDismissed: m } = d({
                    applications: (0, t.useMemo)(() => (null != s ? [s] : []), [s]),
                    disabled: l,
                    dismissibleContent: i,
                    dismissibleContentGroupName: n,
                    bypassAutoDismiss: a,
                    cooldownConfig: o,
                });
            return {
                shouldShow: r.length > 0,
                markAsDismissed: (e) => {
                    null != s && m([s.id], e);
                },
            };
        },
        SH: {
            globalCooldownMs: 6048e5,
            perGameInitialCooldownMs: 1 / 0,
            perGameCooldownBackoffBase: 1,
            perGameMaxCooldownMs: 1 / 0,
        },
        Yb: {
            globalCooldownMs: 864e5,
            perGameInitialCooldownMs: 864e5,
            perGameCooldownBackoffBase: 2,
            perGameMaxCooldownMs: 24192e5,
        },
        hj: d,
    },
);
