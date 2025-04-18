n.d(t, {
    Z: () => s,
    u: () => l
});
var r = n(192379),
    i = n(873546),
    a = n(493959),
    o = n(974592);
function s() {
    let e = (0, a.TZ)();
    return r.useMemo(() => (i.tq || i.Em ? null : e ? o.Se : null), [e]);
}
function l() {
    let e = (0, a.DB)();
    return r.useMemo(() => {
        if (!i.tq && !i.Em) return e ? o.Se.firstTimeNotice : void 0;
    }, [e]);
}
