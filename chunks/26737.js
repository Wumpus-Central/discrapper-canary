n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(358085),
    o = n(998502),
    s = n(388032);
function l(e, t) {
    return a.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0
        ? (0, r.jsx)(i.sNh, {
              id: 'copy',
              label: s.intl.string(s.t.OpuAlJ),
              hint: (0, a.isMac)() ? '\u2318C' : 'Ctrl+C',
              action: () => {
                  (o.ZP.copy(e), null == t || t.focus());
              }
          })
        : null;
}
