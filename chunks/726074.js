n.d(t, {
    as: () => a,
    tX: () => o
});
let i = 'undefined' != typeof global ? global : self,
    r = i.MutationObserver || i.WebKitMutationObserver;
function a(e) {
    return function () {
        let t = setTimeout(i, 0),
            n = setInterval(i, 50);
        function i() {
            clearTimeout(t), clearInterval(n), e();
        }
    };
}
function s(e) {
    let t = 1,
        n = new r(e),
        i = document.createTextNode('');
    return (
        n.observe(i, { characterData: !0 }),
        function () {
            (t = -t), (i.data = t);
        }
    );
}
let o = 'function' == typeof r ? s : a;
