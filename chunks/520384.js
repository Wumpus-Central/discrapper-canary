n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(481060),
    a = n(977059),
    l = n(921801),
    o = n(695346),
    c = n(569550),
    d = n(726985),
    u = n(388032),
    m = n(232186);
function g(e) {
    let { refreshStyles: t = !1 } = e,
        { enabled: n } = (0, a.S)({ location: 'UserSettingsStreamPreviews' }),
        g = o.I0.useSetting(),
        h = r.useCallback((e) => {
            (0, c.Z)('stream_previews_disabled', e, o.I0.getSetting()), o.I0.updateSetting(e);
        }, []);
    if (!n) return null;
    let p = (0, i.jsx)(s.FormSwitch, {
        value: g,
        onChange: h,
        note: u.intl.string(u.t.jTNPHB),
        hideBorder: t,
        children: u.intl.string(u.t['1CzWUF'])
    });
    return (0, i.jsx)(l.F, {
        setting: d.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS,
        children: t
            ? p
            : (0, i.jsx)(s.FormSection, {
                  className: m.marginBottom20,
                  title: u.intl.string(u.t.OBwCXF),
                  children: p
              })
    });
}
