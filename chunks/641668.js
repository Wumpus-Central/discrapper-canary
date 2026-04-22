"use strict";
n.d(t, { G: () => o });
var r = n(64700),
    i = n(561392),
    s = n(862019),
    a = n(844222);
function o() {
    let { reducedMotion: e } = r.useContext(a.C),
        {
            isOpen: t,
            setIsOpen: n,
            refs: o,
            floatingStyles: l,
            getReferenceProps: u,
            getFloatingProps: d,
            context: c,
        } = (0, i.u)({ placement: "bottom", matchReferenceWidth: !0, transform: e.enabled }),
        { styles: _ } = (0, s.DL)(c, {
            common: { transformOrigin: "top center" },
            initial: { opacity: 0.5, transform: "scaleY(0.96)" },
            duration: 100,
        });
    return {
        isOpen: t,
        setIsOpen: n,
        refs: o,
        floatingStyles: l,
        getReferenceProps: u,
        getFloatingProps: d,
        transitionStyles: e.enabled ? {} : _,
    };
}
