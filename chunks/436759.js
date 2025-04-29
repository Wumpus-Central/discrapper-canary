n.d(t, { N: () => a });
var r = n(36056),
    i = n(929412),
    o = n(69122);
function a(e, t = r.pz.STRING) {
    switch (e) {
        case r.wx.BOOL:
            return !1;
        case r.wx.UINT64:
        case r.wx.FIXED64:
            return (0, i._)(o.p.ZERO, t);
        case r.wx.INT64:
        case r.wx.SFIXED64:
        case r.wx.SINT64:
            return (0, i._)(o.M.ZERO, t);
        case r.wx.DOUBLE:
        case r.wx.FLOAT:
            return 0;
        case r.wx.BYTES:
            return new Uint8Array(0);
        case r.wx.STRING:
            return '';
        default:
            return 0;
    }
}
