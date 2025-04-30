e.exports = o;
var t = '֑-\u07FFיִ-\uFDFDﹰ-ﻼ',
    n = 'A-Za-zÀ-ÖØ-öø-ʸ̀-\u0590ࠀ-\u1FFF\u200EⰀ-\uFB1C︀-\uFE6F\uFEFD-\uFFFF',
    r = RegExp('^[^' + n + ']*[' + t + ']'),
    i = RegExp('^[^' + t + ']*[' + n + ']');
function o(e) {
    return ((e = String(e || '')), r.test(e)) ? 'rtl' : i.test(e) ? 'ltr' : 'neutral';
}
