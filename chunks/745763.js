e.d(n, { default: () => o });
var i = e(255367);
e(73800);
var s = e(481060),
    l = e(239091),
    c = e(358085),
    r = e(998502),
    a = e(89013),
    d = e(388032);
function o(t) {
    let { text: n, onSelect: e } = t,
        o = (0, a.Z)(n);
    return c.isPlatformEmbedded
        ? (0, i.jsxs)(s.v2r, {
              navId: "text-context",
              onClose: l.Zy,
              "aria-label": d.intl.string(d.t.s285pq),
              onSelect: e,
              children: [
                  (0, i.jsx)(s.kSQ, { children: o }),
                  (0, i.jsx)(s.kSQ, {
                      children: (0, i.jsx)(s.sNh, {
                          id: "copy",
                          label: d.intl.string(d.t.OpuAlJ),
                          action: () => r.ZP.copy(n),
                      }),
                  }),
              ],
          })
        : null;
}
