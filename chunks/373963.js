n.d(t, {
    A: () => o,
});
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(723702),
    r = n(837921),
    a = n(985018);

function o(e, t) {
    return s.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0
        ? (0, i.jsx)(l.Drp, {
              id: "copy",
              label: a.intl.string(a.t.OpuAlK),
              hint: (0, s.isMac)() ? "⌘C" : "Ctrl+C",
              leadingAccessory: {
                  type: "icon",
                  icon: l.TdU,
              },
              action: () => {
                  r.Ay.copy(e), null == t || t.focus();
              },
          })
        : null;
}
