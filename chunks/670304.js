n.d(t, { Z: () => r });
var i = n(255367),
    l = n(73800),
    s = n(770102),
    o = n(36361),
    a = n(184515);
let r = l.memo(function (e) {
    let { node: t } = e;
    return null != t.render
        ? (0, i.jsx)(t.render, {})
        : (0, i.jsx)("div", {
              className: a.pane,
              children: t.layout.map((e, n) =>
                  (0, i.jsxs)(
                      l.Fragment,
                      {
                          children: [
                              (0, i.jsx)(o.Z, { node: e }),
                              n !== t.layout.length - 1 && (0, i.jsx)(s.$, { className: a.divider }),
                          ],
                      },
                      e.key,
                  ),
              ),
          });
});
