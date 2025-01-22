r.d(n, {
    N: function () {
        return s;
    }
});
var i = r(36056),
    a = r(929412),
    o = r(69122);
function s(e, n = i.pz.STRING) {
    switch (e) {
        case i.wx.BOOL:
            return !1;
        case i.wx.UINT64:
        case i.wx.FIXED64:
            return (0, a._)(o.p.ZERO, n);
        case i.wx.INT64:
        case i.wx.SFIXED64:
        case i.wx.SINT64:
            return (0, a._)(o.M.ZERO, n);
        case i.wx.DOUBLE:
        case i.wx.FLOAT:
            return 0;
        case i.wx.BYTES:
            return new Uint8Array(0);
        case i.wx.STRING:
            return '';
        default:
            return 0;
    }
}
