e.d(l, { A: () => c });
var o = e(627968);
e(64700);
var s = e(311907),
    n = e(397927),
    i = e(775602),
    t = e(652215),
    a = e(790826);
function c(r) {
    var l, e;
    let { role: c } = r,
        d = (0, s.bG)([i.A], () => i.A.roleStyle);
    return (0, o.jsxs)("div", {
        className: a.x,
        children: [
            "dot" === d
                ? (0, o.jsx)(n.WYI, {
                      className: a.m,
                      color: null != (l = c.colorString) ? l : t.TpD,
                      colors: c.colorStrings,
                      background: !1,
                      tooltip: !1,
                  })
                : (0, o.jsx)(n.RYH, {
                      className: a.m,
                      color: null != (e = c.colorString) ? e : t.TpD,
                      colors: c.colorStrings,
                  }),
            (0, o.jsx)("div", { children: c.name }),
        ],
    });
}
