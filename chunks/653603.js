e.exports = o;
var n = '֑-\u07FFיִ-\uFDFDﹰ-ﻼ',
    r = 'A-Za-zÀ-ÖØ-öø-ʸ̀-\u0590ࠀ-\u1FFF\u200EⰀ-\uFB1C︀-\uFE6F\uFEFD-\uFFFF',
    i = RegExp('^[^' + r + ']*[' + n + ']'),
    a = RegExp('^[^' + n + ']*[' + r + ']');
function o(e) {
    return ((e = String(e || '')), i.test(e)) ? 'rtl' : a.test(e) ? 'ltr' : 'neutral';
}
