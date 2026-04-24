"use strict";
n.d(t, { A: () => r });
var l = n(627968);
n(64700);
var i = n(990078),
    s = n(821609),
    a = n(594262);
function r(e) {
    let {
            activity: t,
            embeddedActivity: n,
            user: r,
            onAction: o,
            location: c,
            variant: u = "secondary",
            size: d = "sm",
            ...h
        } = e,
        m = (0, a.l)({ activity: t ?? void 0, embeddedActivity: n, user: r, onGameJoin: o, location: c });
    if (null == m) return null;
    let { isJoining: p, handleJoinRequest: f, buttonCTA: g, tooltip: _, isEnabled: x } = m;
    return (0, l.jsx)(
        i.m,
        {
            text: _,
            asContainer: !x,
            children: (0, l.jsx)(s.$, {
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
