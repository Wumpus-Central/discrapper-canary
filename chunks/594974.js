n.d(t, {
    Be: () => a,
    Y1: () => o,
});
let r = "u" > typeof global ? global : self,
    i = r.MutationObserver || r.WebKitMutationObserver;
function a(e) {
    return function () {
        let t = setTimeout(r, 0),
            n = setInterval(r, 50);
        function r() {
            clearTimeout(t), clearInterval(n), e();
        }
    };
}
function s(e) {
    let t = 1,
        n = new i(e),
        r = document.createTextNode("");
    return (
        n.observe(r, { characterData: !0 }),
        function () {
            r.data = t = -t;
        }
    );
}
let o = "function" == typeof i ? s : a;
