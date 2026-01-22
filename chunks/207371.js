n.d(t, {
    e: () => d,
    x: () => u,
}),
    n(938796);
var r = n(64700),
    i = n(665260),
    a = n(735991),
    s = n(216238),
    o = n(652215);

function l(e) {
    var t;
    if (!(0, a.$B)(e)) return !1;
    let n = null != (t = e.flags) ? t : 0,
        r = (0, i.Lt)(n, o.gfo.EMBEDDED),
        s = (0, i.Lt)(n, o.gfo.CONTEXTLESS_ACTIVITY);
    return r && s;
}

function c(e, t) {
    return null != e && !!l(e);
}

function u(e) {
    return c(e, (0, s.oj)("canLaunchFrame"));
}

function d(e) {
    let t = (0, s.$N)("canLaunchFrame");
    return r.useMemo(() => c(e, t), [e, t]);
}
