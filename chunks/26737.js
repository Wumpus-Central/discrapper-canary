n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(358085),
    s = n(998502),
    r = n(388032);
function o(e, t) {
    return a.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0
        ? (0, i.jsx)(l.sNh, {
              id: 'copy',
              label: r.intl.string(r.t.OpuAlJ),
              hint: (0, a.isMac)() ? '\u2318C' : 'Ctrl+C',
              action: () => {
                  s.ZP.copy(e), null == t || t.focus();
              }
          })
        : null;
}
