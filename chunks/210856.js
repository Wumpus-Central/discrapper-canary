var r = n(957578).Buffer;
function i(e, t, n) {
    var i = e._cipher.encryptBlock(e._prev)[0] ^ t;
    return (e._prev = r.concat([e._prev.slice(1), r.from([n ? t : i])])), i;
}
t.encrypt = function (e, t, n) {
    for (var o = t.length, a = r.allocUnsafe(o), s = -1; ++s < o; ) a[s] = i(e, t[s], n);
    return a;
};
