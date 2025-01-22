r.d(n, {
    G: function () {
        return s;
    }
});
var i,
    a = [],
    o = function () {
        return a.splice(0).forEach(function (e) {
            return e();
        });
    },
    s = function (e) {
        if (!i) {
            var n = 0,
                r = document.createTextNode(''),
                s = { characterData: !0 };
            new MutationObserver(function () {
                return o();
            }).observe(r, s),
                (i = function () {
                    r.textContent = ''.concat(n ? n-- : n++);
                });
        }
        a.push(e), i();
    };
