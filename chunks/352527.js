n.d(t, { A: () => o });
var i = n(582128),
    l = n(688810),
    a = n(655180),
    s = n(74847),
    r = n(406980);
let o = function (e) {
    let { analyticsLocations: t } = (0, l.Ay)();
    return {
        onShareClick: i.useCallback(
            async (n) => {
                let { clips: i, onShareComplete: l, messageReference: o, povTargetInformation: d } = n;
                if (0 === i.length) return;
                let c = (0, s.t)(e);
                (0, a.H1)(i.map((e) => e.id));
                try {
                    await (0, r.K)(i, {
                        channelId: c ? e : void 0,
                        analyticsLocations: t,
                        messageReference: o,
                        povTargetInformation: d,
                    });
                } catch (e) {
                } finally {
                    (0, a.H1)(null), l?.();
                }
            },
            [e, t],
        ),
    };
};
