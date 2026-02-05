"use strict";
n.d(t, { G: () => s });
var r = n(64700),
    i = n(561392),
    a = n(844222);
function s() {
    let { reducedMotion: e } = r.useContext(a.C),
        {
            isOpen: t,
            setIsOpen: n,
            refs: s,
            floatingStyles: o,
            getReferenceProps: l,
            getFloatingProps: u,
            context: c,
        } = (0, i.u)({ placement: "bottom", matchReferenceWidth: !0, transform: e.enabled }),
        { styles: d } = (0, i.D)(c, {
            common: { transformOrigin: "top center" },
            initial: { opacity: 0.5, transform: "scaleY(0.96)" },
            duration: 100,
        });
    return {
        isOpen: t,
        setIsOpen: n,
        refs: s,
        floatingStyles: o,
        getReferenceProps: l,
        getFloatingProps: u,
        transitionStyles: e.enabled ? {} : d,
    };
}
