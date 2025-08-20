n.d(t, { Z: () => _ });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(906732),
    s = n(921801),
    l = n(695346),
    c = n(569550),
    u = n(726985),
    d = n(388032),
    f = n(197571);
function _(e) {
    let { refreshStyles: t = !1 } = e,
        n = l.I0.useSetting(),
        { analyticsLocations: _ } = (0, o.ZP)(),
        p = i.useCallback(
            (e) => {
                (0, c.Z)("stream_previews_disabled", e, l.I0.getSetting(), _), l.I0.updateSetting(e);
            },
            [_],
        ),
        h = (0, r.jsx)(a.j7V, {
            value: n,
            onChange: p,
            note: d.intl.string(d.t.jTNPHB),
            hideBorder: t,
            children: d.intl.string(d.t["1CzWUF"]),
        });
    return (0, r.jsx)(s.F, {
        setting: u.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS,
        children: t
            ? h
            : (0, r.jsx)(a.hjN, {
                  className: f.marginBottom20,
                  title: d.intl.string(d.t.OBwCXF),
                  children: h,
              }),
    });
}
