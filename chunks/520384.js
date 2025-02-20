n.d(t, { Z: () => g });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(977059),
    l = n(921801),
    o = n(695346),
    c = n(569550),
    d = n(726985),
    u = n(388032),
    m = n(455812);
function g(e) {
    let { refreshStyles: t = !1 } = e,
        { enabled: n } = (0, a.S)({ location: 'UserSettingsStreamPreviews' }),
        g = o.I0.useSetting(),
        p = i.useCallback((e) => {
            (0, c.Z)('stream_previews_disabled', e, o.I0.getSetting()), o.I0.updateSetting(e);
        }, []);
    if (!n) return null;
    let h = (0, r.jsx)(s.j7V, {
        value: g,
        onChange: p,
        note: u.NW.string(u.t.jTNPHB),
        hideBorder: t,
        children: u.NW.string(u.t['1CzWUF'])
    });
    return (0, r.jsx)(l.F, {
        setting: d.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS,
        children: t
            ? h
            : (0, r.jsx)(s.hjN, {
                  className: m.marginBottom20,
                  title: u.NW.string(u.t.OBwCXF),
                  children: h
              })
    });
}
