n.d(t, { G: () => s });
var i,
    r = [],
    a = function () {
        return r.splice(0).forEach(function (e) {
            return e();
        });
    },
    s = function (e) {
        if (!i) {
            var t = 0,
                n = document.createTextNode(''),
                s = { characterData: !0 };
            new MutationObserver(function () {
                return a();
            }).observe(n, s),
                (i = function () {
                    n.textContent = '' + (t ? t-- : t++);
                });
        }
        r.push(e), i();
    };
