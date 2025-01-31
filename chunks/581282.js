n.d(t, {
    c: () => a,
    m: () => s
});
let i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split(''),
    r = [];
for (let e = 0; e < i.length; e++) r[i[e].charCodeAt(0)] = e;
function a(e) {
    let t = (3 * e.length) / 4;
    '=' == e[e.length - 2] ? (t -= 2) : '=' == e[e.length - 1] && (t -= 1);
    let n = new Uint8Array(t),
        i = 0,
        a = 0,
        s,
        o = 0;
    for (let t = 0; t < e.length; t++) {
        if (void 0 === (s = r[e.charCodeAt(t)]))
            switch (e[t]) {
                case '=':
                    a = 0;
                case '\n':
                case '\r':
                case '\t':
                case ' ':
                    continue;
                default:
                    throw Error('invalid base64 string.');
            }
        switch (a) {
            case 0:
                (o = s), (a = 1);
                break;
            case 1:
                (n[i++] = (o << 2) | ((48 & s) >> 4)), (o = s), (a = 2);
                break;
            case 2:
                (n[i++] = ((15 & o) << 4) | ((60 & s) >> 2)), (o = s), (a = 3);
                break;
            case 3:
                (n[i++] = ((3 & o) << 6) | s), (a = 0);
        }
    }
    if (1 == a) throw Error('invalid base64 string.');
    return n.subarray(0, i);
}
function s(e) {
    let t = '',
        n = 0,
        r,
        a = 0;
    for (let s = 0; s < e.length; s++)
        switch (((r = e[s]), n)) {
            case 0:
                (t += i[r >> 2]), (a = (3 & r) << 4), (n = 1);
                break;
            case 1:
                (t += i[a | (r >> 4)]), (a = (15 & r) << 2), (n = 2);
                break;
            case 2:
                (t += i[a | (r >> 6)]), (t += i[63 & r]), (n = 0);
        }
    return n && ((t += i[a]), (t += '='), 1 == n && (t += '=')), t;
}
(r['-'.charCodeAt(0)] = i.indexOf('+')), (r['_'.charCodeAt(0)] = i.indexOf('/'));
