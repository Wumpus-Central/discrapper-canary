(n.d(t, { Z: () => o }), n(388685));
var r = n(73800),
    i = n(763520);
function o(e) {
    let { location: t, videoSpinnerContext: n, userId: o, streamId: a, loading: s, paused: l = !1 } = e,
        [c] = r.useState(() => new i.o(t));
    r.useEffect(() => {
        l || (s ? c.onSpinnerStarted() : null != a && c.trackSpinnerDuration(n, o, a));
    }, [s, l, a, c, n, o]);
}
