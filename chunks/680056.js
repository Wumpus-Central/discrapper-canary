n.d(t, { Z: () => l });
var r = n(473749),
    i = n(906732),
    a = n(39604),
    o = n(407316),
    s = n(937784);
let l = (e) => {
    let { analyticsLocations: t } = (0, i.ZP)();
    return {
        onShareClick: r.useCallback(
            async (n) => {
                let { clips: r, onShareComplete: i, messageReference: l } = n;
                if (0 === r.length) return;
                let c = (0, o.W)(e);
                (0, a.UY)(r.map((e) => e.id));
                try {
                    await (0, s.e)(r, {
                        channelId: c ? e : void 0,
                        analyticsLocations: t,
                        messageReference: l,
                    });
                } catch (e) {
                } finally {
                    (0, a.UY)(null), null == i || i();
                }
            },
            [e, t],
        ),
    };
};
