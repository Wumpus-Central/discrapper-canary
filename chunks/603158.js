n.d(t, { F: () => r }), n(474991), n(398202), n(301563);
let i = (function (e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
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
function r(e) {
    let t = '';
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        null != i[r] ? (t += i[r]) : RegExp('[\\p{Pd}\\p{Pc}\\p{Po}]', 'gu').test(r) ? (t += ' ') : (t += r);
    }
    return t.toLowerCase();
}
