(n.d(t, { Z: () => c }), n(388685));
var r = n(73800),
    i = n(442837),
    l = n(594174),
    a = n(823162),
    o = n(355298);
let s = new Set(['GB']);
function c() {
    let e = (0, i.e7)([o.Z], () => o.Z.getUserCountryCode()),
        t =
            !1 ===
            (0, i.e7)([l.default], () => {
                var e;
                return null == (e = l.default.getCurrentUser()) ? void 0 : e.nsfwAllowed;
            });
    return (
        r.useEffect(() => {
            null == e && (0, a.hi)();
        }, [e]),
        null != e && !!s.has(e.alpha2) && !!t
    );
}
