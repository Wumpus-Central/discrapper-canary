t.d(e, { default: () => i });
var l = t(200651);
t(192379);
var o = t(481060),
    a = t(239091),
    c = t(358085),
    s = t(998502),
    r = t(89013),
    d = t(388032);
function i(n) {
    let { text: e, onSelect: t } = n,
        i = (0, r.Z)(e);
    return c.isPlatformEmbedded
        ? (0, l.jsxs)(o.v2r, {
              navId: 'text-context',
              onClose: a.Zy,
              'aria-label': d.NW.string(d.t.s285pq),
              onSelect: t,
              children: [
                  (0, l.jsx)(o.kSQ, { children: i }),
                  (0, l.jsx)(o.kSQ, {
                      children: (0, l.jsx)(o.sNh, {
                          id: 'copy',
                          label: d.NW.string(d.t.OpuAlJ),
                          action: () => s.ZP.copy(e)
                      })
                  })
              ]
          })
        : null;
}
