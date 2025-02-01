(t.encrypt = function (e, t) {
    return e._cipher.encryptBlock(t);
}),
    (t.decrypt = function (e, t) {
        return e._cipher.decryptBlock(t);
    });
