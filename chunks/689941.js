var i = r(413135).Buffer,
    a = r(257693);
function o(e) {
    return (e._prev = e._cipher.encryptBlock(e._prev)), e._prev;
}
n.encrypt = function (e, n) {
    for (; e._cache.length < n.length; ) e._cache = i.concat([e._cache, o(e)]);
    var r = e._cache.slice(0, n.length);
    return (e._cache = e._cache.slice(n.length)), a(n, r);
};
