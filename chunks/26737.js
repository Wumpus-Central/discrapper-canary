n.d(t, { Z: () => o });
var i = n(54381);
n(473749);
var l = n(481060),
    s = n(358085),
    r = n(998502),
    a = n(388032);
function o(e, t) {
    return s.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0
        ? (0, i.jsx)(l.sNh, {
              id: "copy",
              label: a.intl.string(a.t.OpuAlK),
              hint: (0, s.isMac)() ? "\u2318C" : "Ctrl+C",
              action: () => {
                  r.ZP.copy(e), null == t || t.focus();
              },
          })
        : null;
}
