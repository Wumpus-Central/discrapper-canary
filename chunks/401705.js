"use strict";
function i(e) {
    if (
        (function () {
            if (null == r) {
                r = !1;
                try {
                    document.createElement("div").focus({
                        get preventScroll() {
                            return (r = !0), !0;
                        },
                    });
                } catch {}
            }
            return r;
        })()
    )
        e.focus({ preventScroll: !0 });
    else {
        let t = (function (e) {
            let t = e.parentNode,
                n = [],
                i = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== i; )
                (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) &&
                    n.push({ element: t, scrollTop: t.scrollTop, scrollLeft: t.scrollLeft }),
                    (t = t.parentNode);
            return (
                i instanceof HTMLElement && n.push({ element: i, scrollTop: i.scrollTop, scrollLeft: i.scrollLeft }), n
            );
        })(e);
        e.focus(),
            (function (e) {
                for (let { element: t, scrollTop: n, scrollLeft: i } of e) (t.scrollTop = n), (t.scrollLeft = i);
            })(t);
    }
}
n.d(t, { e: () => i });
let r = null;
