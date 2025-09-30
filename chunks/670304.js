n.d(t, { Z: () => a });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    o = n(36361),
    s = n(770877);
let a = i.memo(function (e) {
    let { node: t } = e;
    return null != t.render
        ? (0, r.jsx)(t.render, {})
        : (0, r.jsx)("div", {
              className: s.pane,
              children: t.layout.map((e, n) =>
                  (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, r.jsx)(o.Z, { node: e }),
                              n !== t.layout.length - 1 && (0, r.jsx)(l.izJ, { className: s.divider }),
                          ],
                      },
                      e.key,
                  ),
              ),
          });
});
