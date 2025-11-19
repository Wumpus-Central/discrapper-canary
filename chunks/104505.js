n.d(t, {
    X: () => s,
    Z: () => o,
}),
    n(388685);
var r = n(473749),
    i = n(442837),
    a = n(607070);
function o(e) {
    let [t, n] = r.useState(!1),
        [o, s] = r.useState(!1),
        l = (0, i.e7)([a.Z], () => a.Z.keyboardModeEnabled);
    r.useEffect(() => {
        let t = e.current;
        if (null == t) return;
        n(!1), s(!1);
        let r = () => n(!0),
            i = () => n(!1),
            a = () => s(!0),
            o = (e) => {
                t.contains(e.relatedTarget) || s(!1);
            };
        return (
            t.addEventListener("mouseenter", r),
            t.addEventListener("mouseleave", i),
            t.addEventListener("focusin", a),
            t.addEventListener("focusout", o),
            () => {
                t.removeEventListener("mouseenter", r),
                    t.removeEventListener("mouseleave", i),
                    t.removeEventListener("focusin", a),
                    t.removeEventListener("focusout", o);
            }
        );
    }, [e]);
    let c = l && o;
    return {
        isHovering: t,
        isFocusing: c,
        isHoveringOrFocusing: t || c,
    };
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
