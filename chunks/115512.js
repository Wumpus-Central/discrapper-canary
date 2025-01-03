e.r(n),
    e.d(n, {
        default: function () {
            return c;
        }
    });
var r = e(200651);
e(192379);
var a = e(481060),
    l = e(239091),
    i = e(358085),
    o = e(29264),
    u = e(905041),
    s = e(388032);
function c(t) {
    let { src: n, onSelect: e } = t,
        c = (0, o.Z)(n),
        d = (0, u.Z)(n, null);
    return i.isPlatformEmbedded
        ? (0, r.jsxs)(a.Menu, {
              navId: 'image-context',
              onClose: l.Zy,
              'aria-label': s.intl.string(s.t.Zow2V1),
              onSelect: e,
              children: [(0, r.jsx)(a.MenuGroup, { children: c }), (0, r.jsx)(a.MenuGroup, { children: d })]
          })
        : null;
}
