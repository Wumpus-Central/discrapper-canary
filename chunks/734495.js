n.d(t, {
    A: () => s,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(814890),
    a = n(383233),
    o = n(957565),
    c = n(985018);

function s(e) {
    if (!o.p5) return null;
    let t = e.getContentMessage(),
        n = (0, a._c)(t) ? (0, l.kC)(t.components) : t.content;
    return null == n || 0 === n.length
        ? null
        : (0, r.jsx)(i.Drp, {
              id: "copy-text",
              label: c.intl.string(c.t.JrGD7E),
              leadingAccessory: {
                  type: "icon",
                  icon: i.TdU,
              },
              icon: i.TdU,
              action: () => {
                  (0, o.C)(n);
              },
          });
}
