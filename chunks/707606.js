var l = n(477900);
n(582128);
var i = n(129230);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (t) => {
                let { ref: n, ...a } = t;
                return (0, l.jsx)(i.Ig.Consumer, {
                    children: (t) => (0, l.jsx)(e, { ...a, ref: n, analyticsContext: t }),
                });
            };
            return ((t.displayName = `withAnalyticsContext(${e.displayName ?? e.name})`), t);
        },
    },
);
