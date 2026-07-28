"use strict";
n.d(t, { A: () => l });
var i = n(477900);
n(582128);
var r = n(866665),
    a = n(821609),
    s = n(102853);
function l(e) {
    let {
            activity: t,
            embeddedActivity: n,
            user: l,
            onAction: o,
            location: d,
            variant: c = "secondary",
            size: u = "sm",
            ..._
        } = e,
        E = (0, s.l)({ activity: t ?? void 0, embeddedActivity: n, user: l, onGameJoin: o, location: d });
    if (null == E) return null;
    let { isJoining: A, handleJoinRequest: h, buttonCTA: I, tooltip: f, isEnabled: p } = E;
    return (0, i.jsx)(
        r.m,
        {
            text: f,
            asContainer: !p,
            children: (0, i.jsx)(a.$, {
                variant: c,
                size: u,
                text: I,
                onClick: h,
                disabled: !p,
                loading: A,
                fullWidth: !0,
                ..._,
            }),
        },
        "join",
    );
}
