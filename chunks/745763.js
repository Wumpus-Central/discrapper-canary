l.d(t, { default: () => d });
var e = l(255367);
l(73800);
var o = l(481060),
    a = l(239091),
    c = l(358085),
    i = l(998502),
    s = l(89013),
    r = l(388032);
function d(n) {
    let { text: t, onSelect: l } = n,
        d = (0, s.Z)(t);
    return c.isPlatformEmbedded
        ? (0, e.jsxs)(o.v2r, {
              navId: 'text-context',
              onClose: a.Zy,
              'aria-label': r.intl.string(r.t.s285pq),
              onSelect: l,
              children: [
                  (0, e.jsx)(o.kSQ, { children: d }),
                  (0, e.jsx)(o.kSQ, {
                      children: (0, e.jsx)(o.sNh, {
                          id: 'copy',
                          label: r.intl.string(r.t.OpuAlJ),
                          action: () => i.ZP.copy(t)
                      })
                  })
              ]
          })
        : null;
}
