a.d(t, { A: () => d });
var n = a(627968);
a(64700);
var l = a(503698),
    i = a.n(l),
    s = a(247928),
    r = a(359778),
    o = a(359923);
let d = function (e) {
    let { allowClicks: t = !1, children: a, withBorder: l = !1 } = e;
    return (0, n.jsx)(s.M, {
        children: (0, n.jsx)(r.Z, {
            className: i()(o.Rx, { [o.aK]: l }),
            outline: l,
            children: (0, n.jsx)("div", {
                className: o.AZ,
                onClickCapture: t
                    ? void 0
                    : function (e) {
                          e.stopPropagation();
                      },
                children: a,
            }),
        }),
    });
};
