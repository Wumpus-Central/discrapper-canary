var i = r(957578).Buffer;
function a(e, n, r) {
    var a = e._cipher.encryptBlock(e._prev)[0] ^ n;
    return (e._prev = i.concat([e._prev.slice(1), i.from([r ? n : a])])), a;
}
n.encrypt = function (e, n, r) {
    for (var o = n.length, s = i.allocUnsafe(o), l = -1; ++l < o; ) s[l] = a(e, n[l], r);
    return s;
};
