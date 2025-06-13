var n = r(954955),
    i = r(661233);
t.exports = function (t, e, r) {
    var o = !0,
        a = !0;
    if ('function' != typeof t) throw TypeError('Expected a function');
    return (
        i(r) && ((o = 'leading' in r ? !!r.leading : o), (a = 'trailing' in r ? !!r.trailing : a)),
        n(t, e, {
            leading: o,
            maxWait: e,
            trailing: a
        })
    );
};
