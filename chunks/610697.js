n.d(t, { Z: () => d }), n(47120);
var i = n(192379),
    l = n(442837),
    a = n(594174),
    r = n(823162),
    s = n(907877),
    o = n(355298);
let c = new Set(['GB']);
function d() {
    let e = (0, s.f)({ location: 'useIsStricterMessageRequests' }),
        t = (0, l.e7)([o.Z], () => o.Z.getUserCountryCode()),
        n =
            !1 ===
            (0, l.e7)([a.default], () => {
                var e;
                return null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed;
            });
    return (
        i.useEffect(() => {
            null == t && (0, r.hi)();
        }, [t]),
        !!e || (!!(null != t && c.has(t.alpha2)) && !!n)
    );
}
