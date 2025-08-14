n.d(t, { Z: () => a });
var i = n(255367),
    l = n(73800),
    s = n(770102),
    o = n(36361),
    r = n(770877);
let a = l.memo(function (e) {
    let { node: t } = e;
    return null != t.render
        ? (0, i.jsx)(t.render, {})
        : (0, i.jsx)("div", {
              className: r.pane,
              children: t.layout.map((e, n) =>
                  (0, i.jsxs)(
                      l.Fragment,
                      {
                          children: [
                              (0, i.jsx)(o.Z, { node: e }),
                              n !== t.layout.length - 1 && (0, i.jsx)(s.$, { className: r.divider }),
                          ],
                      },
                      e.key,
                  ),
              ),
          });
});
