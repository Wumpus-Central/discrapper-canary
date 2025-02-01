var i = n(413135).Buffer,
    r = n(257693);
function a(e) {
    return (e._prev = e._cipher.encryptBlock(e._prev)), e._prev;
}
t.encrypt = function (e, t) {
    for (; e._cache.length < t.length; ) e._cache = i.concat([e._cache, a(e)]);
    var n = e._cache.slice(0, t.length);
    return (e._cache = e._cache.slice(t.length)), r(t, n);
};
