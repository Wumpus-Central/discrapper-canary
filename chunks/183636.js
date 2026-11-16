var i = n(855986),
    r = n(531685);
n.d(
    t,
    {},
    {
        A: {
            canUIRequestGatewaySocket: function () {
                return !0;
            },
            getState: function () {
                return r.A.isAppFocused() ? "focused" : "unfocused";
            },
            useState: function () {
                return (0, i.bG)([r.A], () => (r.A.isAppFocused() ? "focused" : "unfocused"));
            },
            useCanUIRequestGatewaySocket: function () {
                return !0;
            },
        },
    },
);
