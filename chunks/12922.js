l.d(r, { Z: () => a });
var e = l(54381);
l(473749);
var n = l(442837),
    t = l(481060),
    s = l(607070),
    i = l(981631),
    c = l(23095);
function a(o) {
    var r, l;
    let { role: a } = o,
        d = (0, n.e7)([s.Z], () => s.Z.roleStyle);
    return (0, e.jsxs)("div", {
        className: c.roleRow,
        children: [
            "dot" === d
                ? (0, e.jsx)(t.FhE, {
                      className: c.roleDot,
                      color: null != (r = a.colorString) ? r : i.Pbq,
                      colors: a.colorStrings,
                      background: !1,
                      tooltip: !1,
                  })
                : (0, e.jsx)(t.xko, {
                      className: c.roleDot,
                      color: null != (l = a.colorString) ? l : i.Pbq,
                      colors: a.colorStrings,
                  }),
            (0, e.jsx)("div", { children: a.name }),
        ],
    });
}
