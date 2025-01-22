r.d(n, {
    c: function () {
        return o;
    },
    m: function () {
        return s;
    }
});
let i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split(''),
    a = [];
for (let e = 0; e < i.length; e++) a[i[e].charCodeAt(0)] = e;
function o(e) {
    let n = (3 * e.length) / 4;
    '=' == e[e.length - 2] ? (n -= 2) : '=' == e[e.length - 1] && (n -= 1);
    let r = new Uint8Array(n),
        i = 0,
        o = 0,
        s,
        l = 0;
    for (let n = 0; n < e.length; n++) {
        if (void 0 === (s = a[e.charCodeAt(n)]))
            switch (e[n]) {
                case '=':
                    o = 0;
                case '\n':
                case '\r':
                case '\t':
                case ' ':
                    continue;
                default:
                    throw Error('invalid base64 string.');
            }
        switch (o) {
            case 0:
                (l = s), (o = 1);
                break;
            case 1:
                (r[i++] = (l << 2) | ((48 & s) >> 4)), (l = s), (o = 2);
                break;
            case 2:
                (r[i++] = ((15 & l) << 4) | ((60 & s) >> 2)), (l = s), (o = 3);
                break;
            case 3:
                (r[i++] = ((3 & l) << 6) | s), (o = 0);
        }
    }
    if (1 == o) throw Error('invalid base64 string.');
    return r.subarray(0, i);
}
function s(e) {
    let n = '',
        r = 0,
        a,
        o = 0;
    for (let s = 0; s < e.length; s++)
        switch (((a = e[s]), r)) {
            case 0:
                (n += i[a >> 2]), (o = (3 & a) << 4), (r = 1);
                break;
            case 1:
                (n += i[o | (a >> 4)]), (o = (15 & a) << 2), (r = 2);
                break;
            case 2:
                (n += i[o | (a >> 6)] + i[63 & a]), (r = 0);
        }
    return r && ((n += i[o] + '='), 1 == r && (n += '=')), n;
}
(a['-'.charCodeAt(0)] = i.indexOf('+')), (a['_'.charCodeAt(0)] = i.indexOf('/'));
