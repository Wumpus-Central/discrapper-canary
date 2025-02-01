var i = n(957578).Buffer;
function r(e, t, n) {
    var r = e._cipher.encryptBlock(e._prev)[0] ^ t;
    return (e._prev = i.concat([e._prev.slice(1), i.from([n ? t : r])])), r;
}
t.encrypt = function (e, t, n) {
    for (var a = t.length, s = i.allocUnsafe(a), o = -1; ++o < a; ) s[o] = r(e, t[o], n);
    return s;
};
