n.d(t, {
    Z: () => s,
    u: () => l
});
var r = n(192379),
    i = n(873546),
    o = n(493959),
    a = n(974592);
function s() {
    let e = (0, o.TZ)();
    return r.useMemo(() => (i.tq || i.Em ? null : e ? a.Se : null), [e]);
}
function l() {
    let e = (0, o.DB)();
    return r.useMemo(() => {
        if (!i.tq && !i.Em) return e ? a.Se.firstTimeNotice : void 0;
    }, [e]);
}
