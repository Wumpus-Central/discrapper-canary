e.d(n, { default: () => u });
var l = e(951288);
e(647438);
var i = e(481060),
    a = e(239091),
    r = e(358085),
    o = e(29264),
    c = e(905041),
    s = e(388032);
function u(t) {
    let { src: n, onSelect: e } = t,
        u = (0, o.Z)(n),
        d = (0, c.Z)(n, null);
    return r.isPlatformEmbedded
        ? (0, l.jsxs)(i.v2r, {
              navId: "image-context",
              onClose: a.Zy,
              "aria-label": s.intl.string(s.t.Zow2V1),
              onSelect: e,
              children: [(0, l.jsx)(i.kSQ, { children: u }), (0, l.jsx)(i.kSQ, { children: d })],
          })
        : null;
}
