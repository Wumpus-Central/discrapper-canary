n.d(t, {
    Do: () => a,
    Iu: () => o,
    qp: () => s
});
var r = ['D', 'DD'],
    i = ['YY', 'YYYY'];
function o(e) {
    return -1 !== r.indexOf(e);
}
function a(e) {
    return -1 !== i.indexOf(e);
}
function s(e, t, n) {
    if ('YYYY' === e) throw RangeError('Use `yyyy` instead of `YYYY` (in `'.concat(t, '`) for formatting years to the input `').concat(n, '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'));
    if ('YY' === e) throw RangeError('Use `yy` instead of `YY` (in `'.concat(t, '`) for formatting years to the input `').concat(n, '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'));
    if ('D' === e) throw RangeError('Use `d` instead of `D` (in `'.concat(t, '`) for formatting days of the month to the input `').concat(n, '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'));
    if ('DD' === e) throw RangeError('Use `dd` instead of `DD` (in `'.concat(t, '`) for formatting days of the month to the input `').concat(n, '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'));
}
