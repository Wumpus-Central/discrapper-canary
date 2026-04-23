n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(477782),
    a = n(624479),
    r = n(814890),
    s = n(383233),
    o = n(957565),
    d = n(985018);
function c(e) {
    if (!o.p5) return null;
    let t = e.getContentMessage(),
        n = (0, s._c)(t) ? (0, r.kC)(t.components) : t.content;
    return null == n || 0 === n.length
        ? null
        : (0, i.jsx)(l.Dr, {
              id: "copy-text",
              label: d.intl.string(d.t.JrGD7E),
              leadingAccessory: { type: "icon", icon: a.T },
              icon: a.T,
              action: () => {
                  (0, o.C)(n);
              },
          });
}
