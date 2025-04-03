n.d(t, { Z: () => a });
var r = n(824523),
    o = n(176031);
function a(e, t) {
    if ('object' !== (0, r.Z)(e) || null === e) return e;
    var n = e[o];
    if (void 0 !== n) {
        var a = n.call(e, t || 'default');
        if ('object' !== (0, r.Z)(a)) return a;
        throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
}
