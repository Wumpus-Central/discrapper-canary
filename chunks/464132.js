var t = e(582128),
    i = e(855986),
    n = e(793574),
    s = e(287809),
    c = e(818349),
    p = e(734066),
    d = e(419490),
    o = e(489496);
async function u(l, a) {
    let { skipOptOutSurvey: e = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        t = (0, c.K)(l),
        { clipsEnabled: i } = d.Ay.getState().clipsSettings;
    (null != t.enableAutoclipping &&
        t.enableAutoclipping !== d.Ay.getEnableAutoclipping() &&
        o.uL(t.enableAutoclipping, !0, a),
        t.clipsEnabled !== i &&
            (await o.yO({
                clipsEnabled: t.clipsEnabled,
                trackAnalytics: !0,
                analyticsLocation: a,
                skipOptOutSurvey: e,
            })));
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
                        e !== a && u(e, l);
                    },
                    [a, l],
                );
            return { value: a, onChange: e };
        },
        r: u,
    },
);
