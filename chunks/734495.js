n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(814890),
    r = n(383233),
    s = n(957565),
    o = n(985018);
function d(e) {
    if (!s.p5) return null;
    let t = e.getContentMessage(),
        n = (0, r._c)(t) ? (0, a.kC)(t.components) : t.content;
    return null == n || 0 === n.length
        ? null
        : (0, i.jsx)(l.Drp, {
              id: "copy-text",
              label: o.intl.string(o.t.JrGD7E),
              leadingAccessory: { type: "icon", icon: l.TdU },
              icon: l.TdU,
              action: () => {
                  (0, s.C)(n);
              },
          });
}
