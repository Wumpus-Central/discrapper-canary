r.d(n, {
    P0: function () {
        return o;
    },
    nb: function () {
        return l;
    },
    pz: function () {
        return a;
    },
    wx: function () {
        return i;
    }
});
var i,
    a,
    o,
    s = r(119585);
function l(e) {
    var n, r, i, a;
    return (e.localName = null !== (n = e.localName) && void 0 !== n ? n : (0, s.c)(e.name)), (e.jsonName = null !== (r = e.jsonName) && void 0 !== r ? r : (0, s.c)(e.name)), (e.repeat = null !== (i = e.repeat) && void 0 !== i ? i : o.NO), (e.opt = null !== (a = e.opt) && void 0 !== a ? a : !e.repeat && !e.oneof && 'message' == e.kind), e;
}
!(function (e) {
    (e[(e.DOUBLE = 1)] = 'DOUBLE'), (e[(e.FLOAT = 2)] = 'FLOAT'), (e[(e.INT64 = 3)] = 'INT64'), (e[(e.UINT64 = 4)] = 'UINT64'), (e[(e.INT32 = 5)] = 'INT32'), (e[(e.FIXED64 = 6)] = 'FIXED64'), (e[(e.FIXED32 = 7)] = 'FIXED32'), (e[(e.BOOL = 8)] = 'BOOL'), (e[(e.STRING = 9)] = 'STRING'), (e[(e.BYTES = 12)] = 'BYTES'), (e[(e.UINT32 = 13)] = 'UINT32'), (e[(e.SFIXED32 = 15)] = 'SFIXED32'), (e[(e.SFIXED64 = 16)] = 'SFIXED64'), (e[(e.SINT32 = 17)] = 'SINT32'), (e[(e.SINT64 = 18)] = 'SINT64');
})(i || (i = {})),
    !(function (e) {
        (e[(e.BIGINT = 0)] = 'BIGINT'), (e[(e.STRING = 1)] = 'STRING'), (e[(e.NUMBER = 2)] = 'NUMBER');
    })(a || (a = {})),
    !(function (e) {
        (e[(e.NO = 0)] = 'NO'), (e[(e.PACKED = 1)] = 'PACKED'), (e[(e.UNPACKED = 2)] = 'UNPACKED');
    })(o || (o = {}));
