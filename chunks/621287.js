var a = {
    './bg.png': '135316',
    './cs.png': '107217',
    './da.png': '120273',
    './de.png': '696881',
    './el.png': '380938',
    './en-GB.png': '953420',
    './en-US.png': '201034',
    './es-419.png': '404700',
    './es-ES.png': '237860',
    './fi.png': '254815',
    './fr.png': '159900',
    './hi.png': '725668',
    './hr.png': '735979',
    './hu.png': '315018',
    './it.png': '564491',
    './ja.png': '993181',
    './ko.png': '533121',
    './lt.png': '639631',
    './nl.png': '289128',
    './no.png': '379414',
    './pl.png': '292927',
    './pt-BR.png': '101818',
    './ro.png': '935303',
    './ru.png': '978138',
    './sv-SE.png': '676980',
    './th.png': '234798',
    './tr.png': '126318',
    './uk.png': '829531',
    './vi.png': '43572',
    './zh-CN.png': '640909',
    './zh-TW.png': '408999'
};
function n(e) {
    return s(r(e));
}
function r(e) {
    if (!s.o(a, e)) {
        var t = Error("Cannot find module '" + e + "'");
        throw ((t.code = 'MODULE_NOT_FOUND'), t);
    }
    return a[e];
}
(n.keys = function () {
    return Object.keys(a);
}),
    (n.resolve = r),
    (e.exports = n),
    (n.id = '621287');
