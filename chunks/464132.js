var e = i(855986),
    l = i(793574),
    a = i(818349),
    p = i(419490),
    c = i(489496);
function s(n) {
    let t = (0, a.K)(n),
        { clipsEnabled: i } = p.Ay.getState().clipsSettings;
    (null != t.enableAutoclipping &&
        t.enableAutoclipping !== p.Ay.getEnableAutoclipping() &&
        c.uL(t.enableAutoclipping, !0, l.A.CLIPS_SETTINGS),
        t.clipsEnabled !== i &&
            c.yO({ clipsEnabled: t.clipsEnabled, trackAnalytics: !0, analyticsLocation: l.A.CLIPS_SETTINGS }));
}
i.d(
    t,
    {},
    {
        U: function () {
            return {
                value: (0, e.bG)([p.Ay], () =>
                    (0, a.r)(p.Ay.getState().clipsSettings.clipsEnabled, p.Ay.getEnableAutoclipping()),
                ),
                onChange: s,
            };
        },
    },
);
