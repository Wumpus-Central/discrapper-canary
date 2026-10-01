i.d(t, { A: () => s });
var e = i(477900);
i(582128);
var l = i(866665),
    r = i(821609),
    a = i(102853);
function s(n) {
    let {
            activity: t,
            embeddedActivity: i,
            user: s,
            onAction: o,
            location: d,
            variant: u = "secondary",
            size: c = "sm",
            ...v
        } = n,
        h = (0, a.l)({ activity: t ?? void 0, embeddedActivity: i, user: s, onGameJoin: o, location: d });
    if (null == h) return null;
    let { isJoining: p, handleJoinRequest: f, buttonCTA: k, tooltip: x, isEnabled: C } = h;
    return (0, e.jsx)(
        l.m,
        {
            text: x,
            asContainer: !C,
            children: (0, e.jsx)(r.$, {
                variant: u,
                size: c,
                text: k,
                onClick: f,
                disabled: !C,
                loading: p,
                fullWidth: !0,
                ...v,
            }),
        },
        "join",
    );
}
