n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651),
    r = n(816988),
    l = n(331541),
    a = n(288914);
function s(e) {
    let { currentUser: t, onClose: n, setPopoutRef: s } = e,
        { permanentEntryPointsEnabled: o } = (0, r.u)({ location: 'AccountProfilePopout' });
    return o
        ? (0, i.jsx)(a.Z, {
              currentUser: t,
              onClose: n,
              setPopoutRef: s
          })
        : (0, i.jsx)(l.Z, {
              currentUser: t,
              onClose: n,
              setPopoutRef: s
          });
}
