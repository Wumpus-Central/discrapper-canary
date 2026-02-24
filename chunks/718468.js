"use strict";
n.d(t, { A: () => m, e: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(796873),
    l = n.n(o),
    u = n(397927),
    c = n(682718),
    d = n(453771),
    _ = n(985018),
    f = n(13600);
let p = (e) => {
    let { filename: t } = e,
        i = (0, d.GD)(t),
        s = n(714694)(`./icon-file-${i}.svg`);
    return (0, r.jsx)("img", {
        className: f.Kk,
        src: s,
        alt: _.intl.formatToPlainString(_.t.g6KdFv, { fileType: i }),
        title: i,
    });
};
function h(e) {
    let { channelId: t, file: n } = e,
        s = i.useMemo(() => {
            let e = n.items;
            return null == e
                ? _.intl.string(_.t.jfKTes)
                : 1 === e.length && null != e[0].filename
                  ? e[0].filename
                  : _.intl.formatToPlainString(_.t.D0noUt, { count: e.length });
        }, [n.items]),
        a = i.useCallback(() => {
            c.A.cancel(t, n);
        }, [t, n]),
        o = 100 === n.progress,
        d = !o && n.currentSize > 0;
    return (0, r.jsx)("div", {
        className: f.Ig,
        children: (0, r.jsxs)("div", {
            className: f.NJ,
            children: [
                (0, r.jsx)(p, { filename: s }),
                (0, r.jsxs)("div", {
                    className: f.Jg,
                    children: [
                        (0, r.jsxs)("div", {
                            className: f.tP,
                            children: [
                                (0, r.jsx)("div", { className: f.iW, children: s }),
                                d
                                    ? (0, r.jsx)("div", {
                                          className: f.Ej,
                                          children: `— ${l().filesize(n.currentSize)}`,
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: f.L$,
                            children: o ? _.intl.string(_.t.jfKTes) : (0, r.jsx)(u.z21, { percent: n.progress }),
                        }),
                    ],
                }),
                o
                    ? null
                    : (0, r.jsx)(u.DUT, {
                          onClick: a,
                          children: (0, r.jsx)(u.PGe, { size: "md", color: "currentColor", className: f.x7 }),
                      }),
            ],
        }),
    });
}
let m = (e) => {
    let { className: t, url: n, fileName: i, fileSize: s, onClick: o, onContextMenu: c, renderAdjacentContent: d } = e;
    return (0, r.jsxs)("div", {
        className: a()(f.Ig, t),
        children: [
            (0, r.jsxs)("div", {
                className: f.NJ,
                children: [
                    (0, r.jsx)(p, { filename: i }),
                    (0, r.jsxs)("div", {
                        className: f.Jg,
                        children: [
                            (0, r.jsx)("div", {
                                className: f.RT,
                                children: (0, r.jsx)(u.MzZ, {
                                    className: f.AD,
                                    href: n,
                                    onClick: o,
                                    onContextMenu: c,
                                    children: i,
                                }),
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: l().filesize(s),
                            }),
                        ],
                    }),
                ],
            }),
            null != d && d(),
        ],
    });
};
