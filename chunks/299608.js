var r = n(954955),
    i = n(661233),
    o = 'Expected a function';
e.exports = function (e, t, n) {
    var a = !0,
        s = !0;
    if ('function' != typeof e) throw TypeError(o);
    return (
        i(n) && ((a = 'leading' in n ? !!n.leading : a), (s = 'trailing' in n ? !!n.trailing : s)),
        r(e, t, {
            leading: a,
            maxWait: t,
            trailing: s
        })
    );
};
