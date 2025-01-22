n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    a = n(846027),
    l = n(921801),
    o = n(131951),
    c = n(726985),
    d = n(388032),
    u = n(232186);
function m(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, r.e7)([o.Z], () => o.Z.getEnableSilenceWarning()),
        m = (0, i.jsx)(s.FormSwitch, {
            value: n,
            onChange: (e) => a.Z.setSilenceWarning(e),
            hideBorder: t,
            children: d.intl.string(d.t.jtiiCw)
        });
    return (0, i.jsx)(l.F, {
        setting: c.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING,
        children: t
            ? m
            : (0, i.jsx)(s.FormSection, {
                  className: u.marginBottom20,
                  title: d.intl.string(d.t['aP1N/v']),
                  children: m
              })
    });
}
