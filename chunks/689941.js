var r = n(413135).Buffer,
    i = n(257693);
function o(e) {
    return (e._prev = e._cipher.encryptBlock(e._prev)), e._prev;
}
t.encrypt = function (e, t) {
    for (; e._cache.length < t.length; ) e._cache = r.concat([e._cache, o(e)]);
    var n = e._cache.slice(0, t.length);
    return (e._cache = e._cache.slice(t.length)), i(t, n);
};
