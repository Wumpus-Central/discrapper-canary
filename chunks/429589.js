n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(103450),
    o = n(915863);
function a(e) {
    let { activity: t, embeddedActivity: n, user: a, onAction: u, ButtonComponent: s = o.Z, ...c } = e,
        d = (0, l.e)({
            activity: null != t ? t : void 0,
            embeddedActivity: n,
            user: a,
            onGameJoin: u
        });
    if (null == d) return null;
    let { isJoining: f, handleJoinRequest: p, buttonCTA: m, tooltip: h, isEnabled: v } = d;
    return (0, r.jsx)(
        i.Tooltip,
        {
            text: h,
            children: (e) => {
                let { onMouseEnter: t, onMouseLeave: n } = e;
                return (0, r.jsx)(s, {
                    onClick: p,
                    onMouseEnter: t,
                    onMouseLeave: n,
                    disabled: !v,
                    submitting: f,
                    fullWidth: !0,
                    ...c,
                    children: m
                });
            }
        },
        'join'
    );
}
