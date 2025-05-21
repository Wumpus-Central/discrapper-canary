n.d(t, { Z: () => c });
var i = n(255367),
    r = n(73800),
    s = n(7093),
    l = n(101966),
    a = n(804413);
let o = r.lazy(() => n.e('22274').then(n.bind(n, 269792)));
function c() {
    let e = (0, a.Z)(),
        t = (0, l.Z)({ location: 'TenureLevelUpModal' }),
        n = (0, s.Z)((e) => e.shouldRenderTenureLevelUp);
    return t && n && null != e
        ? (0, i.jsx)(r.Suspense, {
              fallback: null,
              children: (0, i.jsx)(o, {})
          })
        : null;
}
