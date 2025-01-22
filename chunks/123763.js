var i = r(889678),
    a = r(706627),
    o = 'Expected a function';
function s(e, n, r) {
    var s = !0,
        l = !0;
    if ('function' != typeof e) throw TypeError(o);
    return (
        a(r) && ((s = 'leading' in r ? !!r.leading : s), (l = 'trailing' in r ? !!r.trailing : l)),
        i(e, n, {
            leading: s,
            maxWait: n,
            trailing: l
        })
    );
}
e.exports = s;
