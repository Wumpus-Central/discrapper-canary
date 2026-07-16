n.d(t, { A: () => o });
var i = n(64700),
    l = n(688810),
    s = n(430795),
    a = n(74847),
    r = n(602902);
let o = function (e) {
    let { analyticsLocations: t } = (0, l.Ay)();
    return {
        onShareClick: i.useCallback(
            async (n) => {
                let { clips: i, onShareComplete: l, messageReference: o } = n;
                if (0 === i.length) return;
                let d = (0, a.t)(e);
                (0, s.H1)(i.map((e) => e.id));
                try {
                    await (0, r.K)(i, { channelId: d ? e : void 0, analyticsLocations: t, messageReference: o });
                } catch (e) {
                } finally {
                    (0, s.H1)(null), l?.();
                }
            },
            [e, t],
        ),
    };
};
