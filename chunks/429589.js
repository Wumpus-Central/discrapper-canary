n.d(t, { Z: () => o });
var l = n(200651);
n(192379);
var i = n(481060),
    r = n(103450),
    a = n(915863);
function o(e) {
    let { activity: t, embeddedActivity: n, user: o, onAction: s, ButtonComponent: d = a.Z, ...c } = e,
        u = (0, r.e)({
            activity: null != t ? t : void 0,
            embeddedActivity: n,
            user: o,
            onGameJoin: s
        });
    if (null == u) return null;
    let { isJoining: p, handleJoinRequest: f, buttonCTA: m, tooltip: h, isEnabled: v } = u;
    return (0, l.jsx)(
        i.ua7,
        {
            text: h,
            children: (e) => {
                let { onMouseEnter: t, onMouseLeave: n } = e;
                return (0, l.jsx)(d, {
                    onClick: f,
                    onMouseEnter: t,
                    onMouseLeave: n,
                    disabled: !v,
                    submitting: p,
                    fullWidth: !0,
                    ...c,
                    children: m
                });
            }
        },
        'join'
    );
}
