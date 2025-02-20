n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(358085),
    a = n(998502),
    o = n(388032);
function s(e, t) {
    return l.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0
        ? (0, r.jsx)(i.sNh, {
              id: 'copy',
              label: o.NW.string(o.t.OpuAlJ),
              hint: (0, l.isMac)() ? '\u2318C' : 'Ctrl+C',
              action: () => {
                  a.ZP.copy(e), null == t || t.focus();
              }
          })
        : null;
}
