n.d(t, { Z: () => f });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(906732),
    s = n(921801),
    l = n(695346),
    c = n(569550),
    u = n(726985),
    d = n(388032);
function f() {
    let e = l.I0.useSetting(),
        { analyticsLocations: t } = (0, o.ZP)(),
        n = i.useCallback(
            (e) => {
                (0, c.Z)("stream_previews_disabled", e, l.I0.getSetting(), t), l.I0.updateSetting(e);
            },
            [t],
        );
    return (0, r.jsx)(s.F, {
        setting: u.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS,
        children: (0, r.jsx)(a.j7V, {
            value: e,
            onChange: n,
            note: d.intl.string(d.t.jTNPHB),
            hideBorder: !0,
            children: d.intl.string(d.t["1CzWUF"]),
        }),
    });
}
