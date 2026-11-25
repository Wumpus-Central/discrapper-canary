var l = n(582128),
    i = n(855986),
    a = n(451988),
    r = n(775602),
    s = n(927813);
function o(e) {
    return Math.floor(e / s.A.Millis.SECOND) * s.A.Millis.SECOND;
}
n.d(
    t,
    {},
    {
        G: function () {
            let { hovered: e, isAppFocused: t = !0 } =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                [n, u] = l.useState(() => o(Date.now())),
                c = (0, i.bG)([r.Ay], () => r.Ay.useReducedMotion),
                d = !t || (c && !e),
                m = d ? 15 * s.A.Millis.SECOND : s.A.Millis.SECOND;
            return (
                l.useEffect(() => {
                    let e = new a.IX();
                    return (
                        e.start(m, () => {
                            u(o(Date.now()));
                        }),
                        () => e.stop()
                    );
                }, [m]),
                { now: n, slowTickMode: d }
            );
        },
    },
);
