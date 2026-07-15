"use strict";
n.d(t, { A: () => s, M: () => l });
var i = n(64700),
    r = n(17928),
    a = n(775602);
function s(e) {
    let [t, n] = i.useState(!1),
        [s, l] = i.useState(!1),
        o = (0, r.bG)([a.Ay], () => a.Ay.keyboardModeEnabled);
    i.useEffect(() => {
        let t = e.current;
        if (null == t) return;
        function i() {
            return n(!0);
        }
        n(!1), l(!1);
        let r = (e) => {
            t.contains(e.relatedTarget) || n(!1);
        };
        function a() {
            return l(!0);
        }
        let s = (e) => {
            t.contains(e.relatedTarget) || l(!1);
        };
        return (
            t.addEventListener("mouseenter", i),
            t.addEventListener("mouseleave", r),
            t.addEventListener("focusin", a),
            t.addEventListener("focusout", s),
            () => {
                t.removeEventListener("mouseenter", i),
                    t.removeEventListener("mouseleave", r),
                    t.removeEventListener("focusin", a),
                    t.removeEventListener("focusout", s);
            }
        );
    }, [e]);
    let d = o && s;
    return { isHovering: t, isFocusing: d, isHoveringOrFocusing: t || d };
}
function l(e) {
    let [t, n] = i.useState(!1);
    return (
        i.useEffect(() => {
            let t = e.current;
            if (null != t)
                return (
                    t.addEventListener("mouseenter", i),
                    t.addEventListener("mouseleave", r),
                    () => {
                        t.removeEventListener("mouseenter", i), t.removeEventListener("mouseleave", r);
                    }
                );
            function i() {
                return n(!0);
            }
            function r() {
                return n(!1);
            }
        }, [e]),
        t
    );
}
