n.d(t, { Z: () => o });
var l = n(200651);
n(192379);
var i = n(481060),
    r = n(103450),
    a = n(915863);
function o(e) {
    let { activity: t, embeddedActivity: n, user: o, onAction: s, ButtonComponent: u = a.Z, ...c } = e,
        d = (0, r.e)({
            activity: null != t ? t : void 0,
            embeddedActivity: n,
            user: o,
            onGameJoin: s
        });
    if (null == d) return null;
    let { isJoining: f, handleJoinRequest: m, buttonCTA: p, tooltip: h, isEnabled: v } = d;
    return (0, l.jsx)(
        i.ua7,
        {
            text: h,
            children: (e) => {
                let { onMouseEnter: t, onMouseLeave: n } = e;
                return (0, l.jsx)(u, {
                    onClick: m,
                    onMouseEnter: t,
                    onMouseLeave: n,
                    disabled: !v,
                    submitting: f,
                    fullWidth: !0,
                    ...c,
                    children: p
                });
            }
        },
        'join'
    );
}
