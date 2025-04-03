var n = r(581079),
    i = /\.textClipping$/,
    o = {
        'text/plain': !0,
        'text/html': !0,
        'text/rtf': !0
    };
t.exports = function (t, e) {
    var a = 0,
        u = [];
    t.forEach(function (s) {
        !(function (t, e) {
            if (!r.g.FileReader || (t.type && !(t.type in o))) return e('');
            if ('' === t.type) {
                var a = '';
                i.test(t.name) && (a = t.name.replace(i, '')), e(a);
                return;
            }
            var u = new FileReader();
            (u.onload = function () {
                var t = u.result;
                'string' != typeof t && n(!1), e(t);
            }),
                (u.onerror = function () {
                    e('');
                }),
                u.readAsText(t);
        })(s, function (r) {
            a++, r && u.push(r.slice(0, 5000)), a == t.length && e(u.join('\r'));
        });
    });
};
