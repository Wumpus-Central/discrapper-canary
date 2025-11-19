n.d(t, { Z: () => o });
var r = n(473749),
    i = n(522942),
    a = n(481060);
function o(e) {
    let t = (0, a.dQu)(a.TVs.colors.TEXT_DEFAULT).int();
    return r.useMemo(() => {
        switch (e) {
            case i.m.GRADIENT:
            case i.m.GLOW:
                return [7183099, 6082490];
            case i.m.TOON:
                return [15999128];
            case i.m.NEON:
                return [6888941];
            case i.m.POP:
                return [1036166];
            case i.m.SOLID:
            default:
                return [t];
        }
    }, [t, e]);
}
