"use strict";
function r(e) {
    if (
        (function () {
            if (null == i) {
                i = !1;
                try {
                    document.createElement("div").focus({
                        get preventScroll() {
                            return (i = !0), !0;
                        },
                    });
                } catch {}
            }
            return i;
        })()
    )
        e.focus({ preventScroll: !0 });
    else {
        let t = (function (e) {
            let t = e.parentNode,
                n = [],
                r = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== r; )
                (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) &&
                    n.push({ element: t, scrollTop: t.scrollTop, scrollLeft: t.scrollLeft }),
                    (t = t.parentNode);
            return (
                r instanceof HTMLElement && n.push({ element: r, scrollTop: r.scrollTop, scrollLeft: r.scrollLeft }), n
            );
        })(e);
        e.focus(),
            (function (e) {
                for (let { element: t, scrollTop: n, scrollLeft: r } of e) (t.scrollTop = n), (t.scrollLeft = r);
            })(t);
    }
}
n.d(t, { e: () => r });
let i = null;
