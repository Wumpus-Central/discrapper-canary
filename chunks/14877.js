"use strict";
n.d(t, { $: () => a });
var i = n(582128),
    r = n(765178);
function a(e) {
    let { currentLength: t, maxLength: n, message: a } = e,
        s = i.useRef(!1);
    i.useEffect(() => {
        if (null == n) return;
        let e = t >= n;
        e && !s.current ? ((s.current = !0), r.O.announce(a, "assertive")) : e || (s.current = !1);
    }, [t, n, a]);
}
