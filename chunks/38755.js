n.d(t, { Z: () => l }), n(388685);
var r = n(647438),
    i = n(763520);
function l(e) {
    let { location: t, videoSpinnerContext: n, userId: l, streamId: a, loading: o, paused: s = !1 } = e,
        [c] = r.useState(() => new i.o(t));
    r.useEffect(() => {
        s || (o ? c.onSpinnerStarted() : null != a && c.trackSpinnerDuration(n, l, a));
    }, [o, s, a, c, n, l]);
}
