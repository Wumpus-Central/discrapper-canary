n.d(t, {
    A: () => s,
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(814890),
    o = n(383233),
    a = n(957565),
    c = n(985018);

function s(e) {
    if (!a.p5) return null;
    let t = e.getContentMessage(),
        n = (0, o._c)(t) ? (0, i.kC)(t.components) : t.content;
    return null == n || 0 === n.length
        ? null
        : (0, r.jsx)(l.Drp, {
              id: "copy-text",
              label: c.intl.string(c.t.JrGD7E),
              icon: l.TdU,
              action: () => {
                  (0, a.C)(n);
              },
          });
}
