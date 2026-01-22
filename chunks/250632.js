n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(235986),
    s = n(957358),
    o = n(505806),
    c = n(985018),
    u = n(602570);
let d = function (e) {
    let { title: t, className: n, color: i, animate: d, getHistoricalTotalBytes: p } = e;
    return (0, r.jsx)(o.A, {
        getHistoricalTotalBytes: p,
        children: (e, o, p) => {
            var f;
            return (0, r.jsx)("div", {
                className: l()(u.dm, n),
                children: (0, r.jsxs)(a.A, {
                    align: a.A.Align.CENTER,
                    children: [
                        (0, r.jsxs)(a.A, {
                            className: u.Qq,
                            direction: a.A.Direction.VERTICAL,
                            children: [
                                (0, r.jsx)("div", {
                                    className: u.DD,
                                    children: t,
                                }),
                                (0, r.jsx)("div", {
                                    className: u.TS,
                                    children:
                                        (f = (e[e.length - 1] / o) * 1e3) > 1e3
                                            ? c.intl.formatToPlainString(c.t["WU+gTX"], {
                                                  size: Math.round(f / 1e3),
                                              })
                                            : c.intl.formatToPlainString(c.t.wnF6TH, {
                                                  size: Math.round(f),
                                              }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: u.MQ,
                            children: (0, r.jsx)(s.A, {
                                data: e,
                                maxValue: Math.max(Math.max.apply(null, e), 1e3),
                                className: u.CD,
                                updateInterval: o,
                                color: i,
                                numUpdatesToShow: p,
                                animate: d,
                                pixelWidth: 600,
                                pixelHeight: 48,
                                lineWidth: 4,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
};
