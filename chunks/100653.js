var i = n(257693);
(t.encrypt = function (e, t) {
    var n = i(t, e._prev);
    return (e._prev = e._cipher.encryptBlock(n)), e._prev;
}),
    (t.decrypt = function (e, t) {
        var n = e._prev;
        return (e._prev = t), i(e._cipher.decryptBlock(t), n);
    });
