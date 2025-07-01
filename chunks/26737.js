n.d(t, { Z: () => o });
var i = n(255367);
n(73800);
var l = n(481060),
    r = n(358085),
    s = n(998502),
    a = n(388032);
function o(e, t) {
    return r.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0
        ? (0, i.jsx)(l.sNh, {
              id: 'copy',
              label: a.intl.string(a.t.OpuAlJ),
              hint: (0, r.isMac)() ? '\u2318C' : 'Ctrl+C',
              action: () => {
                  (s.ZP.copy(e), null == t || t.focus());
              }
          })
        : null;
}
