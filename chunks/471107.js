n.d(t, {
    G: () => c,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    a = n(451988),
    s = n(775602),
    o = n(927813);

function l(e) {
    return Math.floor(e / o.A.Millis.SECOND) * o.A.Millis.SECOND;
}

function c() {
    let { hovered: e, isAppFocused: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [n, c] = r.useState(() => l(Date.now())),
        u = (0, i.bG)([s.A], () => s.A.useReducedMotion),
        d = !t || (u && !e),
        f = d ? 15 * o.A.Millis.SECOND : o.A.Millis.SECOND;
    return (
        r.useEffect(() => {
            let e = new a.IX();
            return (
                e.start(f, () => {
                    c(l(Date.now()));
                }),
                () => e.stop()
            );
        }, [f]),
        {
            now: n,
            slowTickMode: d,
        }
    );
}
