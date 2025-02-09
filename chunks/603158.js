n.d(t, { F: () => r });
let i = {
    '-': '-',
    ' ': ' ',
    '[': ' ',
    ']': ' ',
    '(': ' ',
    ')': ' ',
    '|': ' ',
    '~': ' ',
    '\u200B': '',
    '‌': '',
    '‍': '',
    '\u200E': '',
    '\uFEFF': '',
    '|': ' '
};
function r(e) {
    let t = '';
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        null != i[r] ? (t += i[r]) : /[\p{Pd}\p{Pc}\p{Po}]/gu.test(r) ? (t += ' ') : (t += r);
    }
    return t.toLowerCase();
}
