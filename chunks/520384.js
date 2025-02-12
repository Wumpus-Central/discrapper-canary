n.d(t, { Z: () => m });
var i = n(200651),
    s = n(192379),
    l = n(481060),
    r = n(977059),
    a = n(921801),
    o = n(695346),
    c = n(569550),
    d = n(726985),
    u = n(388032),
    h = n(814632);
function m(e) {
    let { refreshStyles: t = !1 } = e,
        { enabled: n } = (0, r.S)({ location: 'UserSettingsStreamPreviews' }),
        m = o.I0.useSetting(),
        g = s.useCallback((e) => {
            (0, c.Z)('stream_previews_disabled', e, o.I0.getSetting()), o.I0.updateSetting(e);
        }, []);
    if (!n) return null;
    let x = (0, i.jsx)(l.j7V, {
        value: m,
        onChange: g,
        note: u.intl.string(u.t.jTNPHB),
        hideBorder: t,
        children: u.intl.string(u.t['1CzWUF'])
    });
    return (0, i.jsx)(a.F, {
        setting: d.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS,
        children: t
            ? x
            : (0, i.jsx)(l.hjN, {
                  className: h.marginBottom20,
                  title: u.intl.string(u.t.OBwCXF),
                  children: x
              })
    });
}
