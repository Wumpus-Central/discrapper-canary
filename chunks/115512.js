e.r(n),
    e.d(n, {
        default: function () {
            return c;
        }
    });
var a = e(200651);
e(192379);
var l = e(481060),
    i = e(239091),
    r = e(358085),
    o = e(29264),
    u = e(905041),
    s = e(388032);
function c(t) {
    let { src: n, onSelect: e } = t,
        c = (0, o.Z)(n),
        d = (0, u.Z)(n, null);
    return r.isPlatformEmbedded
        ? (0, a.jsxs)(l.Menu, {
              navId: 'image-context',
              onClose: i.Zy,
              'aria-label': s.intl.string(s.t.Zow2V1),
              onSelect: e,
              children: [(0, a.jsx)(l.MenuGroup, { children: c }), (0, a.jsx)(l.MenuGroup, { children: d })]
          })
        : null;
}
