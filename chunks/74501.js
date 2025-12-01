n.d(t, { Z: () => o });
var r = n(822632),
    i = n(610388),
    a = n(765592);
let o = { read: d },
    s = "8BIM",
    l = 2,
    c = 4,
    u = s.length;
function d(e, t) {
    let n = (0, r.Wp)(new Uint8Array(e).buffer),
        o = {},
        d = 0;
    for (; d < e.length; ) {
        let e = (0, r.oH)(n, d, u);
        d += u;
        let p = i.Z.getShortAt(n, d),
            { tagName: _, tagNameSize: m } = f(n, (d += l));
        d += m;
        let h = i.Z.getLongAt(n, d);
        if (((d += c), e === s)) {
            let e = (0, r.Wp)(n.buffer, d, h),
                i = {
                    id: p,
                    value: (0, r.oH)(e, 0, h),
                };
            if (a.Z[p]) {
                try {
                    i.description = a.Z[p].description(e);
                } catch (e) {
                    i.description = "<no description formatter>";
                }
                o[_ || a.Z[p].name] = i;
            } else t && (o[`undefined-${p}`] = i);
        }
        d += h + (h % 2);
    }
    return o;
}
function f(e, t) {
    let [n, i] = (0, r.nk)(e, t);
    return {
        tagName: i,
        tagNameSize: 1 + n + +(n % 2 == 0),
    };
}
