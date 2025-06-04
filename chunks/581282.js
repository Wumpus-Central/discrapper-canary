n.d(t, {
    c: () => o,
    m: () => a
});
let r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split(''),
    i = [];
for (let e = 0; e < r.length; e++) i[r[e].charCodeAt(0)] = e;
function o(e) {
    let t = (3 * e.length) / 4;
    '=' == e[e.length - 2] ? (t -= 2) : '=' == e[e.length - 1] && (t -= 1);
    let n = new Uint8Array(t),
        r = 0,
        o = 0,
        a,
        s = 0;
    for (let t = 0; t < e.length; t++) {
        if (void 0 === (a = i[e.charCodeAt(t)]))
            switch (e[t]) {
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
                (s = a), (o = 1);
                break;
            case 1:
                (n[r++] = (s << 2) | ((48 & a) >> 4)), (s = a), (o = 2);
                break;
            case 2:
                (n[r++] = ((15 & s) << 4) | ((60 & a) >> 2)), (s = a), (o = 3);
                break;
            case 3:
                (n[r++] = ((3 & s) << 6) | a), (o = 0);
        }
    }
    if (1 == o) throw Error('invalid base64 string.');
    return n.subarray(0, r);
}
function a(e) {
    let t = '',
        n = 0,
        i,
        o = 0;
    for (let a = 0; a < e.length; a++)
        switch (((i = e[a]), n)) {
            case 0:
                (t += r[i >> 2]), (o = (3 & i) << 4), (n = 1);
                break;
            case 1:
                (t += r[o | (i >> 4)]), (o = (15 & i) << 2), (n = 2);
                break;
            case 2:
                (t += r[o | (i >> 6)]), (t += r[63 & i]), (n = 0);
        }
    return n && ((t += r[o]), (t += '='), 1 == n && (t += '=')), t;
}
(i[45] = r.indexOf('+')), (i[95] = r.indexOf('/'));
