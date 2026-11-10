var n = r(66455),
    s = r(964486);
r.d(
    e,
    {},
    {
        A: function (t) {
            let e = (0, n.A)(t);
            (0, s.Ay)(() => {
                let t = !1,
                    r = requestAnimationFrame(function n() {
                        t || (e.current?.(), (r = requestAnimationFrame(n)));
                    });
                return () => {
                    ((t = !0), cancelAnimationFrame(r));
                };
            });
        },
    },
);
