r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(824523),
    a = r(176031);
function o(e, n) {
    if ('object' !== (0, i.Z)(e) || null === e) return e;
    var r = e[a];
    if (void 0 !== r) {
        var o = r.call(e, n || 'default');
        if ('object' !== (0, i.Z)(o)) return o;
        throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === n ? String : Number)(e);
}
