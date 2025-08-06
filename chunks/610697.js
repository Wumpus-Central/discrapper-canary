(n.d(t, { Z: () => c }), n(388685));
var r = n(73800),
    i = n(442837),
    o = n(594174),
    a = n(823162),
    s = n(355298);
let l = new Set(['GB']);
function c() {
    let e = (0, i.e7)([s.Z], () => s.Z.getUserCountryCode()),
        t =
            !1 ===
            (0, i.e7)([o.default], () => {
                var e;
                return null == (e = o.default.getCurrentUser()) ? void 0 : e.nsfwAllowed;
            });
    return (
        r.useEffect(() => {
            null == e && (0, a.hi)();
        }, [e]),
        null != e && !!l.has(e.alpha2) && !!t
    );
}
