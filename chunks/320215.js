function i(e, n, r) {
    let i,
        a = r,
        o;
    for (let r of e.fields) {
        let e = r.localName;
        if (r.oneof) {
            let s = a[r.oneof];
            if ((null == s ? void 0 : s.oneofKind) == void 0) continue;
            if (((i = s[e]), ((o = n[r.oneof]).oneofKind = s.oneofKind), void 0 == i)) {
                delete o[e];
                continue;
            }
        } else if (((i = a[e]), (o = n), void 0 == i)) continue;
        switch ((r.repeat && (o[e].length = i.length), r.kind)) {
            case 'scalar':
            case 'enum':
                if (r.repeat) for (let n = 0; n < i.length; n++) o[e][n] = i[n];
                else o[e] = i;
                break;
            case 'message':
                let s = r.T();
                if (r.repeat) for (let n = 0; n < i.length; n++) o[e][n] = s.create(i[n]);
                else void 0 === o[e] ? (o[e] = s.create(i)) : s.mergePartial(o[e], i);
                break;
            case 'map':
                switch (r.V.kind) {
                    case 'scalar':
                    case 'enum':
                        Object.assign(o[e], i);
                        break;
                    case 'message':
                        let l = r.V.T();
                        for (let n of Object.keys(i)) o[e][n] = l.create(i[n]);
                }
        }
    }
}
r.d(n, {
    l: function () {
        return i;
    }
});
