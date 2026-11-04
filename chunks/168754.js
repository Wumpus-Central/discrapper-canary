var i = t(477900);
t(582128);
var l = t(697744),
    s = t(693409);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { isActivityActive: n, onMouseEnter: t, onMouseLeave: a, onClick: r, ...o } = e,
                { Component: c, events: d, play: u } = (0, l.c)();
            return (0, i.jsx)(s.l, {
                isTrayButton: !0,
                isActive: n,
                color: n ? "green" : void 0,
                iconComponent: c,
                onMouseEnter: (e) => {
                    (t?.(e), d.onMouseEnter());
                },
                onMouseLeave: (e) => {
                    (a?.(e), d.onMouseLeave());
                },
                onClick: (e) => {
                    (r?.(e), u());
                },
                ...o,
            });
        },
    },
);
