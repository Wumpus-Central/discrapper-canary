n.d(t, { t: () => o });
var r = n(436759),
    i = n(240773);
function o(e) {
    let t = {};
    for (let n of (Object.defineProperty(t, i.C, {
        enumerable: !1,
        value: e
    }),
    e.fields)) {
        let e = n.localName;
        if (!n.opt)
            if (n.oneof) t[n.oneof] = { oneofKind: void 0 };
            else if (n.repeat) t[e] = [];
            else
                switch (n.kind) {
                    case 'scalar':
                        t[e] = (0, r.N)(n.T, n.L);
                        break;
                    case 'enum':
                        t[e] = 0;
                        break;
                    case 'map':
                        t[e] = {};
                }
    }
    return t;
}
