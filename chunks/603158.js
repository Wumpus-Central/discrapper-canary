n.d(t, { F: () => i }), n(474991), n(398202), n(301563);
let r = (function (e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
})(
    {},
    {
        '-': '-',
        ' ': ' '
    },
    {
        '[': ' ',
        ']': ' ',
        '(': ' ',
        ')': ' ',
        '|': ' ',
        '~': ' '
    },
    {
        '\u200B': '',
        '‌': '',
        '‍': '',
        '\u200E': '',
        '\uFEFF': ''
    },
    { '|': ' ' }
);
function i(e) {
    let t = '';
    for (let n = 0; n < e.length; n++) {
        let i = e[n];
        null != r[i] ? (t += r[i]) : RegExp('[\\p{Pd}\\p{Pc}\\p{Po}]', 'gu').test(i) ? (t += ' ') : (t += i);
    }
    return t.toLowerCase();
}
