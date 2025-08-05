n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(710845),
    a = n(620662),
    o = n(915863),
    s = n(981631),
    l = n(388032);
function c(e) {
    let { activity: t, user: n, look: c, color: u, onAction: d } = e;
    if (!(0, a.Z)(t, s.xjy.INSTANCE)) return null;
    let f = () => {
        (null == d || d(), new i.Z('UserActivityActions').log('notify', n.id, t));
    };
    return (0, r.jsx)(
        o.Z,
        {
            look: c,
            color: u,
            onClick: f,
            fullWidth: !0,
            children: l.intl.string(l.t.vwl1PD)
        },
        'notify'
    );
}
