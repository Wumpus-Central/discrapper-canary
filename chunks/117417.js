var t = (e.exports = {});
(t.isIE = function (e) {
    return (
        !!(function () {
            var e = navigator.userAgent.toLowerCase();
            return -1 !== e.indexOf('msie') || -1 !== e.indexOf('trident') || -1 !== e.indexOf(' edge/');
        })() &&
        (!e ||
            e ===
                (function () {
                    var e,
                        t = 3,
                        n = document.createElement('div'),
                        r = n.getElementsByTagName('i');
                    do n.innerHTML = '<!--[if gt IE ' + ++t + ']><i></i><![endif]-->';
                    while (r[0]);
                    return t > 4 ? t : e;
                })())
    );
}),
    (t.isLegacyOpera = function () {
        return !!window.opera;
    });
