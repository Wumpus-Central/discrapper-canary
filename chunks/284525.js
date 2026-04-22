"use strict";
n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var l = n(990078),
    s = n(821609),
    r = n(594262);
function a(e) {
    let {
            activity: t,
            embeddedActivity: n,
            user: a,
            onAction: o,
            location: c,
            variant: u = "secondary",
            size: d = "sm",
            ...h
        } = e,
        m = (0, r.l)({ activity: t ?? void 0, embeddedActivity: n, user: a, onGameJoin: o, location: c });
    if (null == m) return null;
    let { isJoining: p, handleJoinRequest: f, buttonCTA: g, tooltip: _, isEnabled: x } = m;
    return (0, i.jsx)(
        l.m,
        {
            text: _,
            asContainer: !x,
            children: (0, i.jsx)(s.$, {
                variant: u,
                size: d,
                text: g,
                onClick: f,
                disabled: !x,
                loading: p,
                fullWidth: !0,
                ...h,
            }),
        },
        "join",
    );
}
