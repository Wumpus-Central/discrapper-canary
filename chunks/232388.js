n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(846027),
    s = n(921801),
    l = n(131951),
    c = n(726985),
    u = n(388032);
function d() {
    let e = (0, i.e7)([l.Z], () => l.Z.getQoS());
    return (0, r.jsx)(s.F, {
        setting: c.s6.VOICE_AND_VIDEO_ADVANCED_QOS,
        children: (0, r.jsx)(a.rsf, {
            label: u.intl.string(u.t["3CqDxp"]),
            description: u.intl.string(u.t.I1Eoqq),
            checked: e,
            onChange: (e) => o.Z.setQoS(e),
        }),
    });
}
