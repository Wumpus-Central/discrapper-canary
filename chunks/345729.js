n.d(t, { C: () => a });
var r = n(473749),
    i = n(793030);
function a() {
    let { reducedMotion: e } = r.useContext(i.Sfi),
        {
            isOpen: t,
            setIsOpen: n,
            refs: a,
            floatingStyles: o,
            getReferenceProps: s,
            getFloatingProps: l,
            context: c,
        } = (0, i.ON0)({
            placement: "bottom",
            matchReferenceWidth: !0,
            transform: e.enabled,
        }),
        { styles: u } = (0, i.Y_D)(c, {
            common: { transformOrigin: "top center" },
            initial: {
                opacity: 0.5,
                transform: "scaleY(0.96)",
            },
            duration: 100,
        });
    return {
        isOpen: t,
        setIsOpen: n,
        refs: a,
        floatingStyles: o,
        getReferenceProps: s,
        getFloatingProps: l,
        transitionStyles: e.enabled ? {} : u,
    };
}
