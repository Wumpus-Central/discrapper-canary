"use strict";
n.d(t, { $: () => s });
var r = n(64700),
    i = n(765178);
function s(e) {
    let { currentLength: t, maxLength: n, message: s } = e,
        a = r.useRef(!1);
    r.useEffect(() => {
        if (null == n) return;
        let e = t >= n;
        e && !a.current ? ((a.current = !0), i.O.announce(s, "polite")) : e || (a.current = !1);
    }, [t, n, s]);
}
