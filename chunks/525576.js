"use strict";
n.d(t, { _: () => i });
var r = n(64700);
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
                s = { top: n.top, bottom: i - n.bottom, left: n.left, right: r - n.right },
                o = ["top", "bottom", "right", "left"];
            for (let e of o) if (s[e] >= t) return void a(e);
            a(o.reduce((e, t) => (s[t] > s[e] ? t : e), "top"));
        }, [e, t, n]),
        i
    );
}
