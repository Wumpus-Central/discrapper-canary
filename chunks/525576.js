t.d(n, { _: () => r });
var l = t(64700);
function r(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
        t = arguments.length > 2 ? arguments[2] : void 0,
        [r, i] = l.useState("top");
    return (
        l.useEffect(() => {
            if (null == e.current) return void i("top");
            let t = e.current.getBoundingClientRect(),
                l = window.innerWidth,
                r = window.innerHeight,
                a = { top: t.top, bottom: r - t.bottom, left: t.left, right: l - t.right },
                s = ["top", "bottom", "right", "left"];
            for (let e of s) if (a[e] >= n) return void i(e);
            i(s.reduce((e, n) => (a[n] > a[e] ? n : e), "top"));
        }, [e, n, t]),
        r
    );
}
