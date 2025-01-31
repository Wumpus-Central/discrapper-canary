n.d(t, { Z: () => s });
var i = n(200651),
    l = n(816988),
    r = n(331541),
    a = n(288914);
function s(e) {
    let { currentUser: t, onClose: n, setPopoutRef: s } = e,
        { permanentEntryPointsEnabled: o } = (0, l.u)({ location: 'AccountProfilePopout' });
    return o
        ? (0, i.jsx)(a.Z, {
              currentUser: t,
              onClose: n,
              setPopoutRef: s
          })
        : (0, i.jsx)(r.Z, {
              currentUser: t,
              onClose: n,
              setPopoutRef: s
          });
}
