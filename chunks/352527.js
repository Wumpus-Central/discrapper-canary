a.d(t, { A: () => o });
var s = a(64700),
    n = a(688810),
    i = a(607814),
    r = a(74847),
    l = a(602902);
let o = (e) => {
    let { analyticsLocations: t } = (0, n.Ay)();
    return {
        onShareClick: s.useCallback(
            async (a) => {
                let { clips: s, onShareComplete: n, messageReference: o } = a;
                if (0 === s.length) return;
                let d = (0, r.t)(e);
                (0, i.H1)(s.map((e) => e.id));
                try {
                    await (0, l.K)(s, { channelId: d ? e : void 0, analyticsLocations: t, messageReference: o });
                } catch (e) {
                } finally {
                    (0, i.H1)(null), n?.();
                }
            },
            [e, t],
        ),
    };
};
