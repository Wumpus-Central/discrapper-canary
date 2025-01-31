n.d(t, { Z: () => a });
var i = n(824523),
    r = n(176031);
function a(e, t) {
    if ('object' !== (0, i.Z)(e) || null === e) return e;
    var n = e[r];
    if (void 0 !== n) {
        var a = n.call(e, t || 'default');
        if ('object' !== (0, i.Z)(a)) return a;
        throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
}
