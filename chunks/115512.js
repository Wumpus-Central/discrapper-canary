n.d(e, { default: () => u });
var l = n(255367);
n(73800);
var i = n(481060),
    a = n(239091),
    r = n(358085),
    o = n(29264),
    c = n(905041),
    s = n(388032);
function u(t) {
    let { src: e, onSelect: n } = t,
        u = (0, o.Z)(e),
        d = (0, c.Z)(e, null);
    return r.isPlatformEmbedded
        ? (0, l.jsxs)(i.v2r, {
              navId: 'image-context',
              onClose: a.Zy,
              'aria-label': s.intl.string(s.t.Zow2V1),
              onSelect: n,
              children: [(0, l.jsx)(i.kSQ, { children: u }), (0, l.jsx)(i.kSQ, { children: d })]
          })
        : null;
}
