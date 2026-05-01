"use strict";
n.d(t, { A: () => a, M: () => o });
var i = n(64700),
    r = n(17928),
    s = n(775602);
function a(e) {
    let [t, n] = i.useState(!1),
        [a, o] = i.useState(!1),
        l = (0, r.bG)([s.A], () => s.A.keyboardModeEnabled);
    i.useEffect(() => {
        let t = e.current;
        if (null == t) return;
        n(!1), o(!1);
        let i = () => n(!0),
            r = () => n(!1),
            s = () => o(!0),
            a = (e) => {
                t.contains(e.relatedTarget) || o(!1);
            };
        return (
            t.addEventListener("mouseenter", i),
            t.addEventListener("mouseleave", r),
            t.addEventListener("focusin", s),
            t.addEventListener("focusout", a),
            () => {
                t.removeEventListener("mouseenter", i),
                    t.removeEventListener("mouseleave", r),
                    t.removeEventListener("focusin", s),
                    t.removeEventListener("focusout", a);
            }
        );
    }, [e]);
    let u = l && a;
    return { isHovering: t, isFocusing: u, isHoveringOrFocusing: t || u };
}
function o(e) {
    let [t, n] = i.useState(!1);
    return (
        i.useEffect(() => {
            let t = e.current;
            if (null == t) return;
            let i = () => n(!0),
                r = () => n(!1);
            return (
                t.addEventListener("mouseenter", i),
                t.addEventListener("mouseleave", r),
                () => {
                    t.removeEventListener("mouseenter", i), t.removeEventListener("mouseleave", r);
                }
            );
        }, [e]),
        t
    );
}
