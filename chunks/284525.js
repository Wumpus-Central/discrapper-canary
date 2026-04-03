"use strict";
n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(990078),
    s = n(397927),
    a = n(594262);
function o(e) {
    let {
            activity: t,
            embeddedActivity: n,
            user: o,
            onAction: l,
            location: u,
            variant: c = "secondary",
            size: d = "sm",
            ..._
        } = e,
        f = (0, a.l)({ activity: t ?? void 0, embeddedActivity: n, user: o, onGameJoin: l, location: u });
    if (null == f) return null;
    let { isJoining: p, handleJoinRequest: h, buttonCTA: m, tooltip: E, isEnabled: g } = f;
    return (0, r.jsx)(
        i.m,
        {
            text: E,
            asContainer: !g,
            children: (0, r.jsx)(s.Button, {
                variant: c,
                size: d,
                text: m,
                onClick: h,
                disabled: !g,
                loading: p,
                fullWidth: !0,
                ..._,
            }),
        },
        "join",
    );
}
