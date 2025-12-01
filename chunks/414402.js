n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(620662),
    a = n(710845),
    o = n(652853),
    s = n(732380),
    l = n(981631),
    c = n(671955),
    u = n(388032);
function d(e) {
    let { user: t, activity: n, onAction: d } = e,
        { themeType: f } = (0, o.z)(),
        p = f === c.l.MODAL_V2;
    if (!(0, i.Z)(n, l.xjy.INSTANCE)) return null;
    let _ = (e) => {
        e.stopPropagation(),
            null == d || d({ action: "PRESS_NOTIFY_BUTTON" }),
            new a.Z("UserActivityActions").log("notify", t.id, n);
    };
    return (0, r.jsx)(s.O1, {
        text: u.intl.string(u.t.vwl1PK),
        fullWidth: !p,
        onClick: _,
    });
}
