r.d(n, {
    Z: function () {
        return l;
    },
    u: function () {
        return u;
    }
});
var i = r(192379),
    a = r(873546),
    o = r(493959),
    s = r(974592);
function l() {
    let e = (0, o.TZ)();
    return i.useMemo(() => (a.tq || a.Em ? null : e ? s.Se : null), [e]);
}
function u() {
    let e = (0, o.DB)();
    return i.useMemo(() => {
        if (!a.tq && !a.Em) return e ? s.Se.firstTimeNotice : void 0;
    }, [e]);
}
