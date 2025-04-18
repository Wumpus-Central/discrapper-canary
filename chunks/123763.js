var r = n(889678),
    i = n(706627),
    a = 'Expected a function';
e.exports = function (e, t, n) {
    var o = !0,
        s = !0;
    if ('function' != typeof e) throw TypeError(a);
    return (
        i(n) && ((o = 'leading' in n ? !!n.leading : o), (s = 'trailing' in n ? !!n.trailing : s)),
        r(e, t, {
            leading: o,
            maxWait: t,
            trailing: s
        })
    );
};
