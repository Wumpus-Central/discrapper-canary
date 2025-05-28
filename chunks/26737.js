n.d(t, { Z: () => s });
var i = n(255367);
n(73800);
var r = n(481060),
    l = n(358085),
    a = n(998502),
    o = n(388032);
function s(e, t) {
    return l.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0
        ? (0, i.jsx)(r.sNh, {
              id: 'copy',
              label: o.intl.string(o.t.OpuAlJ),
              hint: (0, l.isMac)() ? '\u2318C' : 'Ctrl+C',
              action: () => {
                  a.ZP.copy(e), null == t || t.focus();
              }
          })
        : null;
}
