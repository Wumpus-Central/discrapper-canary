n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(921801),
    l = n(695346),
    o = n(569550),
    c = n(726985),
    d = n(388032),
    u = n(802138);
function m(e) {
    let { refreshStyles: t = !1 } = e,
        n = l.I0.useSetting(),
        m = i.useCallback((e) => {
            (0, o.Z)('stream_previews_disabled', e, l.I0.getSetting()), l.I0.updateSetting(e);
        }, []),
        g = (0, r.jsx)(s.j7V, {
            value: n,
            onChange: m,
            note: d.NW.string(d.t.jTNPHB),
            hideBorder: t,
            children: d.NW.string(d.t['1CzWUF'])
        });
    return (0, r.jsx)(a.F, {
        setting: c.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS,
        children: t
            ? g
            : (0, r.jsx)(s.hjN, {
                  className: u.marginBottom20,
                  title: d.NW.string(d.t.OBwCXF),
                  children: g
              })
    });
}
