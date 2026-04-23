"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(235986),
    a = n(957358),
    o = n(505806),
    c = n(985018),
    d = n(743827);
let h = function (e) {
    let { title: t, className: n, color: s, animate: h, getHistoricalTotalBytes: u } = e;
    return (0, i.jsx)(o.A, {
        getHistoricalTotalBytes: u,
        children: (e, o, u) => {
            var p;
            return (0, i.jsx)("div", {
                className: l()(d.dm, n),
                children: (0, i.jsxs)(r.A, {
                    align: r.A.Align.CENTER,
                    children: [
                        (0, i.jsxs)(r.A, {
                            className: d.Qq,
                            direction: r.A.Direction.VERTICAL,
                            children: [
                                (0, i.jsx)("div", { className: d.DD, children: t }),
                                (0, i.jsx)("div", {
                                    className: d.TS,
                                    children:
                                        (p = (e[e.length - 1] / o) * 1e3) > 1e3
                                            ? c.intl.formatToPlainString(c.t["WU+gTX"], { size: Math.round(p / 1e3) })
                                            : c.intl.formatToPlainString(c.t.wnF6TH, { size: Math.round(p) }),
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: d.MQ,
                            children: (0, i.jsx)(a.A, {
                                data: e,
                                maxValue: Math.max(Math.max.apply(null, e), 1e3),
                                className: d.CD,
                                updateInterval: o,
                                color: s,
                                numUpdatesToShow: u,
                                animate: h,
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
