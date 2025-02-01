var i = n(954955),
    r = n(661233),
    a = 'Expected a function';
function s(e, t, n) {
    var s = !0,
        o = !0;
    if ('function' != typeof e) throw TypeError(a);
    return (
        r(n) && ((s = 'leading' in n ? !!n.leading : s), (o = 'trailing' in n ? !!n.trailing : o)),
        i(e, t, {
            leading: s,
            maxWait: t,
            trailing: o
        })
    );
}
e.exports = s;
