n.d(t, { Z: () => l }), n(388685);
var r = n(647438),
    i = n(763520);
function l(e) {
    let { location: t, videoSpinnerContext: n, userId: l, streamId: a, loading: o, paused: c = !1 } = e,
        [s] = r.useState(() => new i.o(t));
    r.useEffect(() => {
        c || (o ? s.onSpinnerStarted() : null != a && s.trackSpinnerDuration(n, l, a));
    }, [o, c, a, s, n, l]);
}
