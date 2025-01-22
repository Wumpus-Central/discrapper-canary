r.d(n, {
    t: function () {
        return o;
    }
});
var i = r(436759),
    a = r(240773);
function o(e) {
    let n = {};
    for (let r of (Object.defineProperty(n, a.C, {
        enumerable: !1,
        value: e
    }),
    e.fields)) {
        let e = r.localName;
        if (!r.opt) {
            if (r.oneof) n[r.oneof] = { oneofKind: void 0 };
            else if (r.repeat) n[e] = [];
            else
                switch (r.kind) {
                    case 'scalar':
                        n[e] = (0, i.N)(r.T, r.L);
                        break;
                    case 'enum':
                        n[e] = 0;
                        break;
                    case 'map':
                        n[e] = {};
                }
        }
    }
    return n;
}
