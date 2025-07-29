n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(292419),
    a = n(23750),
    o = n(572004),
    s = n(388032);
function c(e) {
    if (!o.wS) return null;
    let t = e.getContentMessage(),
        n = (0, a.hv)(t) ? (0, l.np)(t.components) : t.content;
    return null == n || 0 === n.length
        ? null
        : (0, r.jsx)(i.sNh, {
              id: 'copy-text',
              label: s.intl.string(s.t.JrGD7O),
              icon: i.TIy,
              action: () => {
                  (0, o.JG)(n);
              }
          });
}
