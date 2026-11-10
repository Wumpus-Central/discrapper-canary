var a = s(477900),
    n = s(582128),
    r = s(192308),
    i = s(688810),
    l = s(341923),
    o = s(489496),
    u = s(74847),
    d = s(829903),
    c = s(696016);
s.d(
    t,
    {},
    {
        A: function (e) {
            let { analyticsLocations: t } = (0, i.Ay)();
            return {
                onShareClick: n.useCallback(
                    async (n) => {
                        let {
                            clips: i,
                            onShareComplete: m,
                            messageReference: h,
                            povTargetInformation: p,
                            onShared: g,
                            showExportingModal: S = !1,
                        } = n;
                        if (0 === i.length) return;
                        let I = (0, u.t)(e);
                        (0, o.H1)(i.map((e) => e.id));
                        let v = null;
                        try {
                            (S &&
                                I &&
                                (0, l.s)() &&
                                i.some((e) => e.type === c.nQ.CLIP) &&
                                (v = await (0, r.mM)(
                                    async () => {
                                        let { default: e } = await s.e(372938).then(s.bind(s, 293265));
                                        return (t) => (0, a.jsx)(e, { ...t });
                                    },
                                    { stackingBehavior: "stack" },
                                )),
                                await (0, d.K)(i, {
                                    channelId: I ? e : void 0,
                                    analyticsLocations: t,
                                    messageReference: h,
                                    povTargetInformation: p,
                                    onShared: g,
                                }));
                        } catch (e) {
                        } finally {
                            (null != v && (0, r.Oo)(v), (0, o.H1)(null), m?.());
                        }
                    },
                    [e, t],
                ),
            };
        },
    },
);
