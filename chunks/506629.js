n.d(t, { G: () => a });
var r,
    i = [],
    o = function () {
        return i.splice(0).forEach(function (e) {
            return e();
        });
    },
    a = function (e) {
        if (!r) {
            var t = 0,
                n = document.createTextNode(''),
                a = { characterData: !0 };
            new MutationObserver(function () {
                return o();
            }).observe(n, a),
                (r = function () {
                    n.textContent = '' + (t ? t-- : t++);
                });
        }
        i.push(e), r();
    };
