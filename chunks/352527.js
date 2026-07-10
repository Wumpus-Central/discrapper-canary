"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    r = n(688810),
    a = n(430795),
    s = n(74847),
    l = n(602902);
let o = function (e) {
    let { analyticsLocations: t } = (0, r.Ay)();
    return {
        onShareClick: i.useCallback(
            async (n) => {
                let { clips: i, onShareComplete: r, messageReference: o } = n;
                if (0 === i.length) return;
                let d = (0, s.t)(e);
                (0, a.H1)(i.map((e) => e.id));
                try {
                    await (0, l.K)(i, { channelId: d ? e : void 0, analyticsLocations: t, messageReference: o });
                } catch (e) {
                } finally {
                    (0, a.H1)(null), r?.();
                }
            },
            [e, t],
        ),
    };
};
