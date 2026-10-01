t.d(n, { A: () => d });
var i = t(477900);
t(582128);
var l = t(477782),
    a = t(624479),
    r = t(437517),
    s = t(383233),
    o = t(957565),
    c = t(375708);
function d(e) {
    if (!o.p5) return null;
    let n = e.getContentMessage(),
        t = (0, s._c)(n) ? (0, r.kC)(n.components) : n.content;
    return null == t || 0 === t.length
        ? null
        : (0, i.jsx)(l.Dr, {
              id: "copy-text",
              label: c.intl.string(c.t.JrGD7E),
              leadingAccessory: { type: "icon", icon: a.CopyIcon },
              icon: a.CopyIcon,
              action: () => {
                  (0, o.C)(t);
              },
          });
}
