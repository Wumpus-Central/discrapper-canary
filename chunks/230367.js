var i, a;
r.d(n, {
    TD: function () {
        return a;
    },
    z: function () {
        return i;
    }
}),
    !(function (e) {
        (e.symbol = Symbol.for('protobuf-ts/unknown')),
            (e.onRead = (r, i, a, o, s) => {
                (n(i) ? i[e.symbol] : (i[e.symbol] = [])).push({
                    no: a,
                    wireType: o,
                    data: s
                });
            }),
            (e.onWrite = (n, r, i) => {
                for (let { no: n, wireType: a, data: o } of e.list(r)) i.tag(n, a).raw(o);
            }),
            (e.list = (r, i) => {
                if (n(r)) {
                    let n = r[e.symbol];
                    return i ? n.filter((e) => e.no == i) : n;
                }
                return [];
            }),
            (e.last = (n, r) => e.list(n, r).slice(-1)[0]);
        let n = (n) => n && Array.isArray(n[e.symbol]);
    })(i || (i = {}));
!(function (e) {
    (e[(e.Varint = 0)] = 'Varint'), (e[(e.Bit64 = 1)] = 'Bit64'), (e[(e.LengthDelimited = 2)] = 'LengthDelimited'), (e[(e.StartGroup = 3)] = 'StartGroup'), (e[(e.EndGroup = 4)] = 'EndGroup'), (e[(e.Bit32 = 5)] = 'Bit32');
})(a || (a = {}));
