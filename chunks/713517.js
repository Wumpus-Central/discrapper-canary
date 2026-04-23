"use strict";
n.d(t, { A: () => a, M: () => o });
var r = n(64700),
    i = n(311907),
    s = n(775602);
function a(e) {
    let [t, n] = r.useState(!1),
        [a, o] = r.useState(!1),
        l = (0, i.bG)([s.A], () => s.A.keyboardModeEnabled);
    r.useEffect(() => {
        let t = e.current;
        if (null == t) return;
        n(!1), o(!1);
        let r = () => n(!0),
            i = () => n(!1),
            s = () => o(!0),
            a = (e) => {
                t.contains(e.relatedTarget) || o(!1);
            };
        return (
            t.addEventListener("mouseenter", r),
            t.addEventListener("mouseleave", i),
            t.addEventListener("focusin", s),
            t.addEventListener("focusout", a),
            () => {
                t.removeEventListener("mouseenter", r),
                    t.removeEventListener("mouseleave", i),
                    t.removeEventListener("focusin", s),
                    t.removeEventListener("focusout", a);
            }
        );
    }, [e]);
    let u = l && a;
    return { isHovering: t, isFocusing: u, isHoveringOrFocusing: t || u };
}
function o(e) {
    let [t, n] = r.useState(!1);
    return (
        r.useEffect(() => {
            let t = e.current;
            if (null == t) return;
            let r = () => n(!0),
                i = () => n(!1);
            return (
                t.addEventListener("mouseenter", r),
                t.addEventListener("mouseleave", i),
                () => {
                    t.removeEventListener("mouseenter", r), t.removeEventListener("mouseleave", i);
                }
            );
        }, [e]),
        t
    );
}
