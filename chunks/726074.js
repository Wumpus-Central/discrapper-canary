r.d(n, {
    as: function () {
        return o;
    },
    tX: function () {
        return l;
    }
});
let i = 'undefined' != typeof global ? global : self,
    a = i.MutationObserver || i.WebKitMutationObserver;
function o(e) {
    return function () {
        let n = setTimeout(i, 0),
            r = setInterval(i, 50);
        function i() {
            clearTimeout(n), clearInterval(r), e();
        }
    };
}
function s(e) {
    let n = 1,
        r = new a(e),
        i = document.createTextNode('');
    return (
        r.observe(i, { characterData: !0 }),
        function () {
            (n = -n), (i.data = n);
        }
    );
}
let l = 'function' == typeof a ? s : o;
