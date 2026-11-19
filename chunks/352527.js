var a = s(582128),
    n = s(688810),
    r = s(74847),
    i = s(240620);
s.d(
    t,
    {},
    {
        A: function (e) {
            let { analyticsLocations: t } = (0, n.Ay)();
            return {
                onShareClick: a.useCallback(
                    async (s) => {
                        let {
                            clips: a,
                            onShareComplete: n,
                            messageReference: l,
                            povTargetInformation: o,
                            onShared: d,
                        } = s;
                        if (0 === a.length) return;
                        let u = (0, r.t)(e);
                        try {
                            await (0, i.K)(a, {
                                channelId: u ? e : void 0,
                                analyticsLocations: t,
                                messageReference: l,
                                povTargetInformation: o,
                                onShared: d,
                            });
                        } catch (e) {
                        } finally {
                            n?.();
                        }
                    },
                    [e, t],
                ),
            };
        },
    },
);
