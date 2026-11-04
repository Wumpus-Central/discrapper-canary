var n = r(582128),
    a = r(855986),
    s = r(451988),
    i = r(775602),
    l = r(927813);
function o(t) {
    return Math.floor(t / l.A.Millis.SECOND) * l.A.Millis.SECOND;
}
r.d(
    e,
    {},
    {
        G: function () {
            let { hovered: t, isAppFocused: e = !0 } =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                [r, c] = n.useState(() => o(Date.now())),
                d = (0, a.bG)([i.Ay], () => i.Ay.useReducedMotion),
                u = !e || (d && !t),
                h = u ? 15 * l.A.Millis.SECOND : l.A.Millis.SECOND;
            return (
                n.useEffect(() => {
                    let t = new s.IX();
                    return (
                        t.start(h, () => {
                            c(o(Date.now()));
                        }),
                        () => t.stop()
                    );
                }, [h]),
                { now: r, slowTickMode: u }
            );
        },
    },
);
