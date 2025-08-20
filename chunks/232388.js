n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(846027),
    s = n(921801),
    l = n(131951),
    c = n(726985),
    u = n(388032),
    d = n(197571);
function f(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, i.e7)([l.Z], () => l.Z.getQoS()),
        f = (0, r.jsx)(a.j7V, {
            value: n,
            onChange: (e) => o.Z.setQoS(e),
            note: u.intl.string(u.t.I1Eoqq),
            hideBorder: t,
            children: u.intl.string(u.t["3CqDxs"]),
        });
    return (0, r.jsx)(s.F, {
        setting: c.s6.VOICE_AND_VIDEO_ADVANCED_QOS,
        children: t
            ? f
            : (0, r.jsx)(a.hjN, {
                  className: d.marginBottom20,
                  title: u.intl.string(u.t.uancuL),
                  children: f,
              }),
    });
}
