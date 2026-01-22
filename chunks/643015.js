n.d(t, {
    A: () => c,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    a = n(287809),
    s = n(966107),
    o = n(380335);
let l = new Set(["GB"]);

function c() {
    let e = (0, i.bG)([o.A], () => o.A.getUserCountryCode()),
        t =
            !1 ===
            (0, i.bG)([a.default], () => {
                var e;
                return null == (e = a.default.getCurrentUser()) ? void 0 : e.nsfwAllowed;
            });
    return (
        r.useEffect(() => {
            null == e && (0, s.xf)();
        }, [e]),
        null != e && !!l.has(e.alpha2) && !!t
    );
}
