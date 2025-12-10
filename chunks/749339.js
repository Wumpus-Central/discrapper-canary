n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(292419),
    o = n(23750),
    a = n(572004),
    s = n(388032);
function c(e) {
    if (!a.wS) return null;
    let t = e.getContentMessage(),
        n = (0, o.hv)(t) ? (0, l.np)(t.components) : t.content;
    return null == n || 0 === n.length
        ? null
        : (0, r.jsx)(i.sNh, {
              id: "copy-text",
              label: s.intl.string(s.t.JrGD7E),
              icon: i.TIy,
              action: () => {
                  (0, a.JG)(n);
              },
          });
}
