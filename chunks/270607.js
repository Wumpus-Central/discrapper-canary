var l = n(477900),
    i = n(582128),
    a = n(855986),
    o = n(192308),
    r = n(793574),
    s = n(688810),
    u = n(945810),
    c = n(734066),
    d = n(424739);
n.d(
    t,
    {},
    {
        B: function (e) {
            let t = !(0, c.Vl)(),
                f = (0, c.W1)() && t,
                g = (0, a.bG)([u.Bt], () => f && (0, d.o)("autoclips_ea:capture_mode_roadblock"), [f]);
            return {
                isLocked: i.useCallback((e) => g && "off" !== e, [g]),
                openRoadblock: i.useCallback(() => {
                    let t;
                    return (
                        (t = [e, r.A.CLIPS_EA_CAPTURE_MODE_ROADBLOCK]),
                        void (0, o.mM)(async () => {
                            let { default: i } = await Promise.all([n.e(93286), n.e(669779), n.e(614146)]).then(
                                n.bind(n, 503257),
                            );
                            return (n) => (0, l.jsx)(s.f5, { value: t, children: (0, l.jsx)(i, { ...n, source: e }) });
                        })
                    );
                }, [e]),
            };
        },
    },
);
