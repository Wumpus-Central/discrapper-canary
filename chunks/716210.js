n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var s = n(442837),
    r = n(481060),
    l = n(846027),
    a = n(921801),
    o = n(131951),
    c = n(726985),
    d = n(388032),
    u = n(232186);
function m(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, s.e7)([o.Z], () => o.Z.getEnableSilenceWarning()),
        m = (0, i.jsx)(r.j7V, {
            value: n,
            onChange: (e) => l.Z.setSilenceWarning(e),
            hideBorder: t,
            children: d.intl.string(d.t.jtiiCw)
        });
    return (0, i.jsx)(a.F, {
        setting: c.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING,
        children: t
            ? m
            : (0, i.jsx)(r.hjN, {
                  className: u.marginBottom20,
                  title: d.intl.string(d.t['aP1N/v']),
                  children: m
              })
    });
}
