var l = n(477900);
n(582128);
var i = n(866665),
    a = n(821609),
    r = n(513772);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    activity: t,
                    embeddedActivity: n,
                    user: s,
                    onAction: o,
                    location: u,
                    variant: c = "secondary",
                    size: d = "sm",
                    ...m
                } = e,
                A = (0, r.l)({ activity: t ?? void 0, embeddedActivity: n, user: s, onGameJoin: o, location: u });
            if (null == A) return null;
            let { isJoining: p, handleJoinRequest: h, buttonCTA: f, tooltip: g, isEnabled: x } = A;
            return (0, l.jsx)(
                i.m,
                {
                    text: g,
                    asContainer: !x,
                    children: (0, l.jsx)(a.$, {
                        variant: c,
                        size: d,
                        text: f,
                        onClick: h,
                        disabled: !x,
                        loading: p,
                        fullWidth: !0,
                        ...m,
                    }),
                },
                "join",
            );
        },
    },
);
