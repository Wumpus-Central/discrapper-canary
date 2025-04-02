t.d(l, { Z: () => s }), t(47120);
var n = t(192379),
    i = t(763520);
function s(e) {
    let { location: l, videoSpinnerContext: t, userId: s, streamId: r, loading: a, paused: o = !1 } = e,
        [c] = n.useState(() => new i.o(l));
    n.useEffect(() => {
        o || (a ? c.onSpinnerStarted() : null != r && c.trackSpinnerDuration(t, s, r));
    }, [a, o, r, c, t, s]);
}
