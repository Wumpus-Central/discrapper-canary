n.d(t, { F: () => o });
let i = { '|': ' ' },
    r = {
        '[': ' ',
        ']': ' ',
        '(': ' ',
        ')': ' ',
        '|': ' ',
        '~': ' '
    },
    a = {
        '\u200B': '',
        '‌': '',
        '‍': '',
        '\u200E': '',
        '\uFEFF': ''
    },
    s = {
        '-': '-',
        ' ': ' ',
        ...r,
        ...a,
        ...i
    };
function o(e) {
    let t = '';
    for (let n = 0; n < e.length; n++) {
        let i = e[n];
        null != s[i] ? (t += s[i]) : /[\p{Pd}\p{Pc}\p{Po}]/gu.test(i) ? (t += ' ') : (t += i);
    }
    return t.toLowerCase();
}
