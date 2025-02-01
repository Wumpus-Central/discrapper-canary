e.exports = a;
var t = '֑-\u07FFיִ-\uFDFDﹰ-ﻼ',
    n = 'A-Za-zÀ-ÖØ-öø-ʸ̀-\u0590ࠀ-\u1FFF\u200EⰀ-\uFB1C︀-\uFE6F\uFEFD-\uFFFF',
    i = RegExp('^[^' + n + ']*[' + t + ']'),
    r = RegExp('^[^' + t + ']*[' + n + ']');
function a(e) {
    return ((e = String(e || '')), i.test(e)) ? 'rtl' : r.test(e) ? 'ltr' : 'neutral';
}
