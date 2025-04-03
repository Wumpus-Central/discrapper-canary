n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(846027),
    l = n(921801),
    o = n(131951),
    c = n(726985),
    d = n(388032),
    u = n(20493);
function m(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, i.e7)([o.Z], () => o.Z.getEnableSilenceWarning()),
        m = (0, r.jsx)(s.j7V, {
            value: n,
            onChange: (e) => a.Z.setSilenceWarning(e),
            hideBorder: t,
            children: d.NW.string(d.t.jtiiCw)
        });
    return (0, r.jsx)(l.F, {
        setting: c.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING,
        children: t
            ? m
            : (0, r.jsx)(s.hjN, {
                  className: u.marginBottom20,
                  title: d.NW.string(d.t['aP1N/v']),
                  children: m
              })
    });
}
