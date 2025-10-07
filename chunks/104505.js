n.d(t, {
    X: () => s,
    Z: () => o,
}),
    n(388685);
var r = n(647438),
    i = n(442837),
    a = n(607070);
function o(e) {
    let [t, n] = r.useState(!1),
        [o, s] = r.useState(!1),
        l = r.useRef(e.current),
        c = (0, i.e7)([a.Z], () => a.Z.keyboardModeEnabled);
    r.useEffect(() => {
        l.current = e.current;
    }, [e]),
        r.useEffect(() => {
            let e = l.current;
            if (null == e) return;
            n(!1), s(!1);
            let t = () => n(!0),
                r = () => n(!1),
                i = () => s(!0),
                a = (t) => {
                    e.contains(t.relatedTarget) || s(!1);
                };
            return (
                e.addEventListener("mouseenter", t),
                e.addEventListener("mouseleave", r),
                e.addEventListener("focusin", i),
                e.addEventListener("focusout", a),
                () => {
                    e.removeEventListener("mouseenter", t),
                        e.removeEventListener("mouseleave", r),
                        e.removeEventListener("focusin", i),
                        e.removeEventListener("focusout", a);
                }
            );
        }, [l]);
    let u = c && o;
    return {
        isHovering: t,
        isFocusing: u,
        isHoveringOrFocusing: t || u,
    };
}
function s(e) {
    let [t, n] = r.useState(!1),
        i = r.useRef(e.current);
    return (
        r.useEffect(() => {
            i.current = e.current;
        }, [e]),
        r.useEffect(() => {
            let e = i.current;
            if (null == e) return;
            let t = () => n(!0),
                r = () => n(!1);
            return (
                e.addEventListener("mouseenter", t),
                e.addEventListener("mouseleave", r),
                () => {
                    e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", r);
                }
            );
        }, [i]),
        t
    );
}
