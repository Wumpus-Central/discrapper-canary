var t = e(582128),
    i = e(855986),
    n = e(793574),
    s = e(287809),
    c = e(818349),
    p = e(734066),
    d = e(419490),
    u = e(489496);
async function o(l, a) {
    let e = (0, c.K)(l),
        { clipsEnabled: t } = d.Ay.getState().clipsSettings;
    (null != e.enableAutoclipping &&
        e.enableAutoclipping !== d.Ay.getEnableAutoclipping() &&
        u.uL(e.enableAutoclipping, !0, a),
        e.clipsEnabled !== t &&
            (await u.yO({ clipsEnabled: e.clipsEnabled, trackAnalytics: !0, analyticsLocation: a })));
}
e.d(
    a,
    {},
    {
        U: function () {
            let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.A.CLIPS_SETTINGS,
                a = (0, i.bG)([d.Ay, s.default], () =>
                    (0, c.r)(
                        d.Ay.getState().clipsSettings.clipsEnabled && (0, p.qj)(s.default.getCurrentUser()),
                        d.Ay.getEnableAutoclipping(),
                    ),
                ),
                e = t.useCallback(
                    (e) => {
                        e !== a && o(e, l);
                    },
                    [a, l],
                );
            return { value: a, onChange: e };
        },
        r: o,
    },
);
