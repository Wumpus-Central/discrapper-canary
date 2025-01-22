n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(192379),
    r = n(442837),
    l = n(594174),
    a = n(823162),
    o = n(907877),
    s = n(355298);
let c = new Set(['GB']);
function u() {
    let e = (0, o.f)({ location: 'useIsStricterMessageRequests' }),
        t = (0, r.e7)([s.Z], () => s.Z.getUserCountryCode()),
        n =
            !1 ===
            (0, r.e7)([l.default], () => {
                var e;
                return null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed;
            });
    return (
        i.useEffect(() => {
            null == t && (0, a.hi)();
        }, [t]),
        !!e || (!!(null != t && c.has(t.alpha2)) && !!n) || !1
    );
}
