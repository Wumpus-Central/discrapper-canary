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
        let _ = i.Z.getShortAt(n, d),
            { tagName: p, tagNameSize: h } = f(n, (d += l));
        d += h;
        let m = i.Z.getLongAt(n, d);
        if (((d += c), e === s)) {
            let e = (0, r.Wp)(n.buffer, d, m),
                i = {
                    id: _,
                    value: (0, r.oH)(e, 0, m),
                };
            if (a.Z[_]) {
                try {
                    i.description = a.Z[_].description(e);
                } catch (e) {
                    i.description = "<no description formatter>";
                }
                o[p || a.Z[_].name] = i;
            } else t && (o[`undefined-${_}`] = i);
        }
        d += m + (m % 2);
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
