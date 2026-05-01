n.d(t, { A: () => l, M: () => s });
var r = n(64700),
    i = n(17928),
    a = n(775602);
function l(e) {
    let [t, n] = r.useState(!1),
        [l, s] = r.useState(!1),
        o = (0, i.bG)([a.A], () => a.A.keyboardModeEnabled);
    r.useEffect(() => {
        let t = e.current;
        if (null == t) return;
        n(!1), s(!1);
        let r = () => n(!0),
            i = () => n(!1),
            a = () => s(!0),
            l = (e) => {
                t.contains(e.relatedTarget) || s(!1);
            };
        return (
            t.addEventListener("mouseenter", r),
            t.addEventListener("mouseleave", i),
            t.addEventListener("focusin", a),
            t.addEventListener("focusout", l),
            () => {
                t.removeEventListener("mouseenter", r),
                    t.removeEventListener("mouseleave", i),
                    t.removeEventListener("focusin", a),
                    t.removeEventListener("focusout", l);
            }
        );
    }, [e]);
    let u = o && l;
    return { isHovering: t, isFocusing: u, isHoveringOrFocusing: t || u };
}
function s(e) {
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
