n.d(t, {
    P0: () => o,
    nb: () => s,
    pz: () => i,
    wx: () => r
});
var r,
    i,
    o,
    a = n(119585);
function s(e) {
    var t, n, r, i;
    return (e.localName = null != (t = e.localName) ? t : (0, a.c)(e.name)), (e.jsonName = null != (n = e.jsonName) ? n : (0, a.c)(e.name)), (e.repeat = null != (r = e.repeat) ? r : o.NO), (e.opt = null != (i = e.opt) ? i : !e.repeat && !e.oneof && 'message' == e.kind), e;
}
!(function (e) {
    (e[(e.DOUBLE = 1)] = 'DOUBLE'), (e[(e.FLOAT = 2)] = 'FLOAT'), (e[(e.INT64 = 3)] = 'INT64'), (e[(e.UINT64 = 4)] = 'UINT64'), (e[(e.INT32 = 5)] = 'INT32'), (e[(e.FIXED64 = 6)] = 'FIXED64'), (e[(e.FIXED32 = 7)] = 'FIXED32'), (e[(e.BOOL = 8)] = 'BOOL'), (e[(e.STRING = 9)] = 'STRING'), (e[(e.BYTES = 12)] = 'BYTES'), (e[(e.UINT32 = 13)] = 'UINT32'), (e[(e.SFIXED32 = 15)] = 'SFIXED32'), (e[(e.SFIXED64 = 16)] = 'SFIXED64'), (e[(e.SINT32 = 17)] = 'SINT32'), (e[(e.SINT64 = 18)] = 'SINT64');
})(r || (r = {})),
    (function (e) {
        (e[(e.BIGINT = 0)] = 'BIGINT'), (e[(e.STRING = 1)] = 'STRING'), (e[(e.NUMBER = 2)] = 'NUMBER');
    })(i || (i = {})),
    (function (e) {
        (e[(e.NO = 0)] = 'NO'), (e[(e.PACKED = 1)] = 'PACKED'), (e[(e.UNPACKED = 2)] = 'UNPACKED');
    })(o || (o = {}));
