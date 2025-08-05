(n.d(t, { Z: () => a }), n(388685));
var r = n(73800),
    i = n(763520);
function a(e) {
    let { location: t, videoSpinnerContext: n, userId: a, streamId: o, loading: s, paused: l = !1 } = e,
        [c] = r.useState(() => new i.o(t));
    r.useEffect(() => {
        l || (s ? c.onSpinnerStarted() : null != o && c.trackSpinnerDuration(n, a, o));
    }, [s, l, o, c, n, a]);
}
