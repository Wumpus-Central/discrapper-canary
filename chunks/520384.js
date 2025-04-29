n.d(t, { Z: () => p });
var i = n(255367),
    r = n(73800),
    s = n(481060),
    l = n(906732),
    a = n(921801),
    o = n(695346),
    c = n(569550),
    d = n(726985),
    u = n(388032),
    m = n(20493);
function p(e) {
    let { refreshStyles: t = !1 } = e,
        n = o.I0.useSetting(),
        { analyticsLocations: p } = (0, l.ZP)(),
        g = r.useCallback(
            (e) => {
                (0, c.Z)('stream_previews_disabled', e, o.I0.getSetting(), p), o.I0.updateSetting(e);
            },
            [p]
        ),
        h = (0, i.jsx)(s.j7V, {
            value: n,
            onChange: g,
            note: u.intl.string(u.t.jTNPHB),
            hideBorder: t,
            children: u.intl.string(u.t['1CzWUF'])
        });
    return (0, i.jsx)(a.F, {
        setting: d.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS,
        children: t
            ? h
            : (0, i.jsx)(s.hjN, {
                  className: m.marginBottom20,
                  title: u.intl.string(u.t.OBwCXF),
                  children: h
              })
    });
}
