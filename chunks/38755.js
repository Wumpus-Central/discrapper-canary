(n.d(t, { Z: () => l }), n(388685));
var r = n(73800),
    i = n(763520);
function l(e) {
    let { location: t, videoSpinnerContext: n, userId: l, streamId: o, loading: a, paused: s = !1 } = e,
        [c] = r.useState(() => new i.o(t));
    r.useEffect(() => {
        s || (a ? c.onSpinnerStarted() : null != o && c.trackSpinnerDuration(n, l, o));
    }, [a, s, o, c, n, l]);
}
