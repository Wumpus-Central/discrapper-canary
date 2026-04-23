"use strict";
n.d(t, { _: () => i });
var r = n(64700);
function i(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
        n = arguments.length > 2 ? arguments[2] : void 0,
        [i, s] = r.useState("top");
    return (
        r.useEffect(() => {
            if (null == e.current) return void s("top");
            let n = e.current.getBoundingClientRect(),
                r = window.innerWidth,
                i = window.innerHeight,
                a = { top: n.top, bottom: i - n.bottom, left: n.left, right: r - n.right },
                o = ["top", "bottom", "right", "left"];
            for (let e of o) if (a[e] >= t) return void s(e);
            s(o.reduce((e, t) => (a[t] > a[e] ? t : e), "top"));
        }, [e, t, n]),
        i
    );
}
