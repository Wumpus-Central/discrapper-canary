n.d(t, { Z: () => c });
var r = n(54381),
    l = n(473749),
    i = n(481060),
    o = n(36361),
    a = n(770877);
let c = l.memo(function (e) {
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
                              (0, r.jsx)(o.Z, { node: e }),
                              n !== t.layout.length - 1 && (0, r.jsx)(i.izJ, { className: a.divider }),
                          ],
                      },
                      e.key,
                  ),
              ),
          });
});
