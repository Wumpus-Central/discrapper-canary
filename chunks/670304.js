n.d(t, { Z: () => c });
var r = n(54381),
    i = n(473749),
    a = n(36361),
    o = n(111161),
    s = n(770877);
function l(e) {
    let { node: t } = e;
    return null != t.StronglyDiscouragedCustomComponent
        ? (0, r.jsx)(t.StronglyDiscouragedCustomComponent, {})
        : (0, r.jsx)("div", {
              className: s.pane,
              children: t.layout.map((e, n) =>
                  (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, r.jsx)(a.Z, { node: e }),
                              n !== t.layout.length - 1 && (0, r.jsx)(o.Z, { className: s.divider }),
                          ],
                      },
                      e.key,
                  ),
              ),
          });
}
let c = i.memo(l);
