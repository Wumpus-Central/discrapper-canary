n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var s = n(442837),
    l = n(481060),
    r = n(846027),
    a = n(921801),
    o = n(131951),
    c = n(726985),
    d = n(388032),
    u = n(483938);
function h(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, s.e7)([o.Z], () => o.Z.getQoS()),
        h = (0, i.jsx)(l.j7V, {
            value: n,
            onChange: (e) => r.Z.setQoS(e),
            note: d.intl.string(d.t.I1Eoqq),
            hideBorder: t,
            children: d.intl.string(d.t['3CqDxs'])
        });
    return (0, i.jsx)(a.F, {
        setting: c.s6.VOICE_AND_VIDEO_ADVANCED_QOS,
        children: t
            ? h
            : (0, i.jsx)(l.hjN, {
                  className: u.marginBottom20,
                  title: d.intl.string(d.t.uancuL),
                  children: h
              })
    });
}
