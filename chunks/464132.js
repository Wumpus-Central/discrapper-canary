var i = n(855986),
    l = n(793574),
    s = n(818349),
    r = n(419490),
    a = n(489496);
function o(e) {
    let t = (0, s.K)(e),
        { clipsEnabled: n } = r.Ay.getState().clipsSettings;
    (null != t.enableAutoclipping &&
        t.enableAutoclipping !== r.Ay.getEnableAutoclipping() &&
        a.uL(t.enableAutoclipping, !0, l.A.CLIPS_SETTINGS),
        t.clipsEnabled !== n &&
            a.yO({ clipsEnabled: t.clipsEnabled, trackAnalytics: !0, analyticsLocation: l.A.CLIPS_SETTINGS }));
}
n.d(
    t,
    {},
    {
        U: function () {
            return {
                value: (0, i.bG)([r.Ay], () =>
                    (0, s.r)(r.Ay.getState().clipsSettings.clipsEnabled, r.Ay.getEnableAutoclipping()),
                ),
                onChange: o,
            };
        },
    },
);
