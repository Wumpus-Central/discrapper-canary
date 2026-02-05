n.d(t, { A: () => o });
var a = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    l = n(397927),
    r = n(350246);
let o = function (e) {
    let { allowClicks: t = !1, children: n, withBorder: s = !1 } = e;
    return (0, a.jsx)(l.M1G, {
        children: (0, a.jsx)(l.ZpM, {
            className: i()(r.Rx, { [r.aK]: s }),
            outline: s,
            children: (0, a.jsx)("div", {
                className: r.AZ,
                onClickCapture: t
                    ? void 0
                    : function (e) {
                          e.stopPropagation();
                      },
                children: n,
            }),
        }),
    });
};
