n.d(t, { Z: () => c }), n(47120);
var r = n(192379),
    i = n(442837),
    a = n(594174),
    o = n(823162),
    l = n(355298);
let s = new Set(['GB']);
function c() {
    let e = (0, i.e7)([l.Z], () => l.Z.getUserCountryCode()),
        t =
            !1 ===
            (0, i.e7)([a.default], () => {
                var e;
                return null == (e = a.default.getCurrentUser()) ? void 0 : e.nsfwAllowed;
            });
    return (
        r.useEffect(() => {
            null == e && (0, o.hi)();
        }, [e]),
        null != e && !!s.has(e.alpha2) && !!t
    );
}
