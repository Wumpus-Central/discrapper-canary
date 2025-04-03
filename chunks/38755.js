n.d(t, { Z: () => o }), n(47120);
var r = n(192379),
    i = n(763520);
function o(e) {
    let { location: t, videoSpinnerContext: n, userId: o, streamId: l, loading: s, paused: a = !1 } = e,
        [c] = r.useState(() => new i.o(t));
    r.useEffect(() => {
        a || (s ? c.onSpinnerStarted() : null != l && c.trackSpinnerDuration(n, o, l));
    }, [s, a, l, c, n, o]);
}
