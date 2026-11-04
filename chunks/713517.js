var i = n(582128),
    r = n(855986),
    a = n(775602);
n.d(
    t,
    {},
    {
        A: function (e) {
            let [t, n] = i.useState(!1),
                [s, l] = i.useState(!1),
                o = (0, r.bG)([a.Ay], () => a.Ay.keyboardModeEnabled);
            i.useEffect(() => {
                let t = e.current;
                if (null != t)
                    return (
                        n(!1),
                        l(!1),
                        t.addEventListener("mouseenter", i),
                        t.addEventListener("mouseleave", r),
                        t.addEventListener("focusin", a),
                        t.addEventListener("focusout", s),
                        () => {
                            (t.removeEventListener("mouseenter", i),
                                t.removeEventListener("mouseleave", r),
                                t.removeEventListener("focusin", a),
                                t.removeEventListener("focusout", s));
                        }
                    );
                function i() {
                    return n(!0);
                }
                function r(e) {
                    null != t && (t.contains(e.relatedTarget) || n(!1));
                }
                function a() {
                    return l(!0);
                }
                function s(e) {
                    null != t && (t.contains(e.relatedTarget) || l(!1));
                }
            }, [e]);
            let d = o && s;
            return { isHovering: t, isFocusing: d, isHoveringOrFocusing: t || d };
        },
        M: function (e) {
            let [t, n] = i.useState(!1);
            return (
                i.useEffect(() => {
                    let t = e.current;
                    if (null != t)
                        return (
                            t.addEventListener("mouseenter", i),
                            t.addEventListener("mouseleave", r),
                            () => {
                                (t.removeEventListener("mouseenter", i), t.removeEventListener("mouseleave", r));
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
        },
    },
);
