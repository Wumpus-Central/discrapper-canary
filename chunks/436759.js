n.d(t, { N: () => s });
var i = n(36056),
    r = n(929412),
    a = n(69122);
function s(e, t = i.pz.STRING) {
    switch (e) {
        case i.wx.BOOL:
            return !1;
        case i.wx.UINT64:
        case i.wx.FIXED64:
            return (0, r._)(a.p.ZERO, t);
        case i.wx.INT64:
        case i.wx.SFIXED64:
        case i.wx.SINT64:
            return (0, r._)(a.M.ZERO, t);
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
