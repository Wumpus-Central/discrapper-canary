n.d(t, {
    Z: () => o,
    u: () => l
});
var i = n(192379),
    r = n(873546),
    a = n(493959),
    s = n(974592);
function o() {
    let e = (0, a.TZ)();
    return i.useMemo(() => (r.tq || r.Em ? null : e ? s.Se : null), [e]);
}
function l() {
    let e = (0, a.DB)();
    return i.useMemo(() => {
        if (!r.tq && !r.Em) return e ? s.Se.firstTimeNotice : void 0;
    }, [e]);
}
