var e = t(582128),
    i = t(855986),
    n = t(793574),
    s = t(287809),
    c = t(818349),
    p = t(734066),
    o = t(419490),
    u = t(489496);
t.d(
    a,
    {},
    {
        U: function () {
            let l = (0, i.bG)([o.Ay, s.default], () =>
                    (0, c.r)(
                        o.Ay.getState().clipsSettings.clipsEnabled && (0, p.qj)(s.default.getCurrentUser()),
                        o.Ay.getEnableAutoclipping(),
                    ),
                ),
                a = e.useCallback(
                    (a) => {
                        a !== l &&
                            (function (l) {
                                let a = (0, c.K)(l),
                                    { clipsEnabled: t } = o.Ay.getState().clipsSettings;
                                (null != a.enableAutoclipping &&
                                    a.enableAutoclipping !== o.Ay.getEnableAutoclipping() &&
                                    u.uL(a.enableAutoclipping, !0, n.A.CLIPS_SETTINGS),
                                    a.clipsEnabled !== t &&
                                        u.yO({
                                            clipsEnabled: a.clipsEnabled,
                                            trackAnalytics: !0,
                                            analyticsLocation: n.A.CLIPS_SETTINGS,
                                        }));
                            })(a);
                    },
                    [l],
                );
            return { value: l, onChange: a };
        },
    },
);
