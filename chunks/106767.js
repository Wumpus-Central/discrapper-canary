n.d(t, { $: () => i }), n(388685);
var r = n(647438);
function i(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
        n = arguments.length > 2 ? arguments[2] : void 0,
        [i, a] = r.useState("top");
    return (
        r.useEffect(() => {
            if (null == e.current) return void a("top");
            let n = e.current.getBoundingClientRect(),
                r = window.innerWidth,
                i = window.innerHeight,
                o = {
                    top: n.top,
                    bottom: i - n.bottom,
                    left: n.left,
                    right: r - n.right,
                },
                s = ["top", "bottom", "right", "left"];
            for (let e of s) if (o[e] >= t) return void a(e);
            a(s.reduce((e, t) => (o[t] > o[e] ? t : e), "top"));
        }, [e, t, n]),
        i
    );
}
