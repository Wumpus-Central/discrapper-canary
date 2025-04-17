n.d(t, {
    P: () => a,
    q: () => i
});
var o = n(51254),
    r = n(810119);
function i(e, t) {
    for (var n = '', o = (0, r.Ei)(e), i = 0; i < o; i++) n += t(e[i], i, e, t) || '';
    return n;
}
function a(e, t, n, a) {
    switch (e.type) {
        case o.JM:
            if (e.children.length) break;
        case o.K$:
        case o.h5:
            return (e.return = e.return || e.value);
        case o.Ab:
            return '';
        case o.lK:
            return (e.return = e.value + '{' + i(e.children, a) + '}');
        case o.Fr:
            e.value = e.props.join(',');
    }
    return (0, r.to)((n = i(e.children, a))) ? (e.return = e.value + '{' + n + '}') : '';
}
