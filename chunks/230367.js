var r, i;
n.d(t, {
    TD: () => i,
    z: () => r
}),
    (function (e) {
        (e.symbol = Symbol.for('protobuf-ts/unknown')),
            (e.onRead = (n, r, i, o, a) => {
                (t(r) ? r[e.symbol] : (r[e.symbol] = [])).push({
                    no: i,
                    wireType: o,
                    data: a
                });
            }),
            (e.onWrite = (t, n, r) => {
                for (let { no: t, wireType: i, data: o } of e.list(n)) r.tag(t, i).raw(o);
            }),
            (e.list = (n, r) => {
                if (t(n)) {
                    let t = n[e.symbol];
                    return r ? t.filter((e) => e.no == r) : t;
                }
                return [];
            }),
            (e.last = (t, n) => e.list(t, n).slice(-1)[0]);
        let t = (t) => t && Array.isArray(t[e.symbol]);
    })(r || (r = {})),
    !(function (e) {
        (e[(e.Varint = 0)] = 'Varint'), (e[(e.Bit64 = 1)] = 'Bit64'), (e[(e.LengthDelimited = 2)] = 'LengthDelimited'), (e[(e.StartGroup = 3)] = 'StartGroup'), (e[(e.EndGroup = 4)] = 'EndGroup'), (e[(e.Bit32 = 5)] = 'Bit32');
    })(i || (i = {}));
