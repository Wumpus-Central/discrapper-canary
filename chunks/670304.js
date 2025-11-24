n.d(t, { Z: () => s });
var r = n(54381),
    l = n(473749),
    i = n(36361),
    o = n(111161),
    a = n(770877);
let s = l.memo(function (e) {
    let { node: t } = e;
    return null != t.render
        ? (0, r.jsx)(t.render, {})
        : (0, r.jsx)("div", {
              className: a.pane,
              children: t.layout.map((e, n) =>
                  (0, r.jsxs)(
                      l.Fragment,
                      {
                          children: [
                              (0, r.jsx)(i.Z, { node: e }),
                              n !== t.layout.length - 1 && (0, r.jsx)(o.Z, { className: a.divider }),
                          ],
                      },
                      e.key,
                  ),
              ),
          });
});
