var n = Symbol.for('react.transitional.element');
function r(e, t, r) {
    var i = null;
    if ((void 0 !== r && (i = '' + r), void 0 !== t.key && (i = '' + t.key), 'key' in t)) for (var a in ((r = {}), t)) 'key' !== a && (r[a] = t[a]);
    else r = t;
    return {
        $$typeof: n,
        type: e,
        key: i,
        ref: void 0 !== (t = r.ref) ? t : null,
        props: r
    };
}
(t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r);
