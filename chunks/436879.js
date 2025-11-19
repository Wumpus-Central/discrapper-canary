n.d(t, { Z: () => s }), n(388685);
var r = n(473749),
    i = n(442837),
    l = n(607070),
    a = n(999382);
function s(e, t) {
    let [n, s] = r.useState(!1),
        o = (0, i.e7)([a.Z], () => a.Z.getProps().subsection),
        c = (0, i.e7)([l.Z], () => l.Z.useReducedMotion);
    r.useEffect(() => {
        n || (null !== e.current && o === t && (s(!0), e.current.scrollIntoView({ behavior: c ? "auto" : "smooth" })));
    }, [n, o, t, c, e]);
}
