var i, r;
n.d(t, {
    TD: () => r,
    z: () => i
}),
    (function (e) {
        (e.symbol = Symbol.for('protobuf-ts/unknown')),
            (e.onRead = (n, i, r, a, s) => {
                (t(i) ? i[e.symbol] : (i[e.symbol] = [])).push({
                    no: r,
                    wireType: a,
                    data: s
                });
            }),
            (e.onWrite = (t, n, i) => {
                for (let { no: t, wireType: r, data: a } of e.list(n)) i.tag(t, r).raw(a);
            }),
            (e.list = (n, i) => {
                if (t(n)) {
                    let t = n[e.symbol];
                    return i ? t.filter((e) => e.no == i) : t;
                }
                return [];
            }),
            (e.last = (t, n) => e.list(t, n).slice(-1)[0]);
        let t = (t) => t && Array.isArray(t[e.symbol]);
    })(i || (i = {})),
    !(function (e) {
        (e[(e.Varint = 0)] = 'Varint'), (e[(e.Bit64 = 1)] = 'Bit64'), (e[(e.LengthDelimited = 2)] = 'LengthDelimited'), (e[(e.StartGroup = 3)] = 'StartGroup'), (e[(e.EndGroup = 4)] = 'EndGroup'), (e[(e.Bit32 = 5)] = 'Bit32');
    })(r || (r = {}));
