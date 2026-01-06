n.d(t, { t: () => c }), n(388685);
var r = n(473749),
    i = n(442837),
    a = n(846519),
    o = n(607070),
    s = n(70956);
function l(e) {
    return Math.floor(e / s.Z.Millis.SECOND) * s.Z.Millis.SECOND;
}
function c() {
    let { hovered: e, isAppFocused: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [n, c] = r.useState(() => l(Date.now())),
        u = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        d = !t || (u && !e),
        f = d ? 15 * s.Z.Millis.SECOND : s.Z.Millis.SECOND;
    return (
        r.useEffect(() => {
            let e = new a.Xp();
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
