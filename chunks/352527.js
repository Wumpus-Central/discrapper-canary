var i = n(582128),
    l = n(688810),
    r = n(74847),
    a = n(240620);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { analyticsLocations: t } = (0, l.Ay)();
            return {
                onShareClick: i.useCallback(
                    async (n) => {
                        let {
                            clips: i,
                            onShareComplete: l,
                            messageReference: s,
                            povTargetInformation: o,
                            onShared: u,
                            keepModalsOpen: c,
                        } = n;
                        if (0 === i.length) return;
                        let d = (0, r.t)(e);
                        try {
                            await (0, a.K)(i, {
                                channelId: d ? e : void 0,
                                analyticsLocations: t,
                                messageReference: s,
                                povTargetInformation: o,
                                onShared: u,
                                keepModalsOpen: c,
                            });
                        } catch (e) {
                        } finally {
                            l?.();
                        }
                    },
                    [e, t],
                ),
            };
        },
    },
);
