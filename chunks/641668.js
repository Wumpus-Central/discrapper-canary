"use strict";
n.d(t, { G: () => l });
var i = n(582128),
    r = n(561392),
    a = n(499957),
    s = n(844222);
function l() {
    let { reducedMotion: e } = i.useContext(s.C),
        {
            isOpen: t,
            setIsOpen: n,
            refs: l,
            floatingStyles: o,
            getReferenceProps: d,
            getFloatingProps: c,
            context: u,
        } = (0, r.u)({ placement: "bottom", matchReferenceWidth: !0, transform: e.enabled }),
        { styles: _ } = (0, a.DL)(u, {
            common: { transformOrigin: "top center" },
            initial: { opacity: 0.5, transform: "scaleY(0.96)" },
            duration: 100,
        });
    return {
        isOpen: t,
        setIsOpen: n,
        refs: l,
        floatingStyles: o,
        getReferenceProps: d,
        getFloatingProps: c,
        transitionStyles: e.enabled ? {} : _,
    };
}
