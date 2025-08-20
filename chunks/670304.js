n.d(t, { Z: () => a });
var i = n(951288),
    l = n(647438),
    r = n(770102),
    o = n(36361),
    s = n(770877);
let a = l.memo(function (e) {
    let { node: t } = e;
    return null != t.render
        ? (0, i.jsx)(t.render, {})
        : (0, i.jsx)("div", {
              className: s.pane,
              children: t.layout.map((e, n) =>
                  (0, i.jsxs)(
                      l.Fragment,
                      {
                          children: [
                              (0, i.jsx)(o.Z, { node: e }),
                              n !== t.layout.length - 1 && (0, i.jsx)(r.$, { className: s.divider }),
                          ],
                      },
                      e.key,
                  ),
              ),
          });
});
