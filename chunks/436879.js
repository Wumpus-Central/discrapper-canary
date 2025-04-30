n.d(t, { Z: () => a }), n(388685);
var r = n(192379),
    i = n(442837),
    l = n(607070),
    s = n(999382);
function a(e, t) {
    let [n, a] = r.useState(!1),
        o = (0, i.e7)([s.Z], () => s.Z.getProps().subsection),
        c = (0, i.e7)([l.Z], () => l.Z.useReducedMotion);
    r.useEffect(() => {
        n || (null !== e.current && o === t && (a(!0), e.current.scrollIntoView({ behavior: c ? 'auto' : 'smooth' })));
    }, [n, o, t, c, e]);
}
