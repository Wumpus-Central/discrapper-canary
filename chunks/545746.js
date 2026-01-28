n.d(t, {
    A: () => o,
});
var r = n(64700),
    i = n(311907),
    l = n(287809),
    a = n(961250),
    s = n(26508);

function o() {
    let { ignoreCacheTTL: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, s.Qs)("useMaybeFetchProgramRewards"),
        n = (0, i.bG)([l.default], () => (0, s.mY)(l.default.getCurrentUser())),
        o = t && n;
    r.useEffect(() => {
        o && (e ? (0, a.tT)() : (0, a.Ay)());
    }, [o, e]);
}
