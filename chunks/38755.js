n.d(t, { Z: () => l }), n(388685);
var r = n(73800),
    i = n(763520);
function l(e) {
    let { location: t, videoSpinnerContext: n, userId: l, streamId: o, loading: s, paused: a = !1 } = e,
        [c] = r.useState(() => new i.o(t));
    r.useEffect(() => {
        a || (s ? c.onSpinnerStarted() : null != o && c.trackSpinnerDuration(n, l, o));
    }, [s, a, o, c, n, l]);
}
