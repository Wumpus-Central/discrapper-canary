n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(977059),
    a = n(921801),
    l = n(695346),
    o = n(726985),
    c = n(388032),
    d = n(275477);
function u() {
    let { enabled: e } = (0, s.S)({ location: 'UserSettingsStreamPreviews' }),
        t = l.I0.useSetting();
    return e
        ? (0, i.jsx)(a.F, {
              setting: o.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
              children: (0, i.jsx)(r.FormSection, {
                  className: d.marginBottom20,
                  title: c.intl.string(c.t.OBwCXF),
                  children: (0, i.jsx)(r.FormSwitch, {
                      value: t,
                      onChange: l.I0.updateSetting,
                      note: c.intl.string(c.t.jTNPHB),
                      children: c.intl.string(c.t['1CzWUF'])
                  })
              })
          })
        : null;
}
