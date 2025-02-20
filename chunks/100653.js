var r = n(257693);
(t.encrypt = function (e, t) {
    var n = r(t, e._prev);
    return (e._prev = e._cipher.encryptBlock(n)), e._prev;
}),
    (t.decrypt = function (e, t) {
        var n = e._prev;
        return (e._prev = t), r(e._cipher.decryptBlock(t), n);
    });
