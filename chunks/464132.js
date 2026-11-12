var i = l(582128),
    n = l(855986),
    a = l(793574),
    c = l(287809),
    p = l(818349),
    s = l(734066),
    u = l(419490),
    b = l(489496);
l.d(
    e,
    {},
    {
        U: function () {
            let t = (0, n.bG)([u.Ay, c.default], () =>
                    (0, p.r)(
                        u.Ay.getState().clipsSettings.clipsEnabled && (0, s.qj)(c.default.getCurrentUser()),
                        u.Ay.getEnableAutoclipping(),
                    ),
                ),
                e = i.useCallback(
                    (e) => {
                        e !== t &&
                            (function (t) {
                                let e = (0, p.K)(t),
                                    { clipsEnabled: l } = u.Ay.getState().clipsSettings;
                                (null != e.enableAutoclipping &&
                                    e.enableAutoclipping !== u.Ay.getEnableAutoclipping() &&
                                    b.uL(e.enableAutoclipping, !0, a.A.CLIPS_SETTINGS),
                                    e.clipsEnabled !== l &&
                                        b.yO({
                                            clipsEnabled: e.clipsEnabled,
                                            trackAnalytics: !0,
                                            analyticsLocation: a.A.CLIPS_SETTINGS,
                                        }));
                            })(e);
                    },
                    [t],
                );
            return { value: t, onChange: e };
        },
    },
);
