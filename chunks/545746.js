n.d(t, { A: () => o });
var i = n(64700),
    r = n(311907),
    a = n(287809),
    l = n(961250),
    s = n(26508);
function o() {
    let { ignoreCacheTTL: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, s.Qs)("useMaybeFetchProgramRewards"),
        n = (0, r.bG)([a.default], () => (0, s.mY)(a.default.getCurrentUser())),
        o = t && n;
    i.useEffect(() => {
        o && (e ? (0, l.tT)() : (0, l.Ay)());
    }, [o, e]);
}
