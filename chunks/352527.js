var a = s(582128),
    n = s(688810),
    r = s(489496),
    i = s(74847),
    l = s(829903);
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
                            messageReference: o,
                            povTargetInformation: u,
                            onShared: d,
                        } = s;
                        if (0 === a.length) return;
                        let m = (0, i.t)(e);
                        (0, r.H1)(a.map((e) => e.id));
                        try {
                            await (0, l.K)(a, {
                                channelId: m ? e : void 0,
                                analyticsLocations: t,
                                messageReference: o,
                                povTargetInformation: u,
                                onShared: d,
                            });
                        } catch (e) {
                        } finally {
                            ((0, r.H1)(null), n?.());
                        }
                    },
                    [e, t],
                ),
            };
        },
    },
);
