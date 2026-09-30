n.d(t, { A: () => a });
var l = n(477900);
n(582128);
var i = n(866665),
    s = n(821609),
    r = n(102853);
function a(e) {
    let {
            activity: t,
            embeddedActivity: n,
            user: a,
            onAction: o,
            location: u,
            variant: c = "secondary",
            size: d = "sm",
            ...m
        } = e,
        h = (0, r.l)({ activity: t ?? void 0, embeddedActivity: n, user: a, onGameJoin: o, location: u });
    if (null == h) return null;
    let { isJoining: p, handleJoinRequest: f, buttonCTA: g, tooltip: x, isEnabled: A } = h;
    return (0, l.jsx)(
        i.m,
        {
            text: x,
            asContainer: !A,
            children: (0, l.jsx)(s.$, {
                variant: c,
                size: d,
                text: g,
                onClick: f,
                disabled: !A,
                loading: p,
                fullWidth: !0,
                ...m,
            }),
        },
        "join",
    );
}
