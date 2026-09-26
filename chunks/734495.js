n.d(t, { A: () => d });
var i = n(477900);
n(582128);
var l = n(477782),
    a = n(624479),
    r = n(437517),
    s = n(383233),
    o = n(957565),
    c = n(375708);
function d(e) {
    if (!o.p5) return null;
    let t = e.getContentMessage(),
        n = (0, s._c)(t) ? (0, r.kC)(t.components) : t.content;
    return null == n || 0 === n.length
        ? null
        : (0, i.jsx)(l.Dr, {
              id: "copy-text",
              label: c.intl.string(c.t.JrGD7E),
              leadingAccessory: { type: "icon", icon: a.CopyIcon },
              icon: a.CopyIcon,
              action: () => {
                  (0, o.C)(n);
              },
          });
}
