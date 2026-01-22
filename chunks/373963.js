n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(723702),
    s = n(837921),
    a = n(985018);
function o(e, t) {
    return r.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0
        ? (0, i.jsx)(l.Drp, {
              id: "copy",
              label: a.intl.string(a.t.OpuAlK),
              hint: (0, r.isMac)() ? "\u2318C" : "Ctrl+C",
              action: () => {
                  s.Ay.copy(e), null == t || t.focus();
              },
          })
        : null;
}
