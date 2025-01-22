r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(192379),
    a = r(512722),
    o = r.n(a);
function s(e, n) {
    let r = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        r.current = e;
    }, [e]),
        (0, i.useEffect)(() => {
            function e() {
                o()(null != r.current, 'Missing callback'), r.current();
            }
            if (null === n) return;
            let i = setInterval(e, n);
            return () => clearInterval(i);
        }, [n]);
}
