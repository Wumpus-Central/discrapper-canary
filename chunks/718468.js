n.d(t, {
    A: () => m,
    e: () => h,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(796873),
    l = n.n(o),
    c = n(397927),
    u = n(682718),
    d = n(453771),
    f = n(985018),
    p = n(202494);
let _ = (e) => {
    let { filename: t } = e,
        i = (0, d.GD)(t),
        a = n(714694)("./icon-file-".concat(i, ".svg"));
    return (0, r.jsx)("img", {
        className: p.Kk,
        src: a,
        alt: f.intl.formatToPlainString(f.t.g6KdFv, { fileType: i }),
        title: i,
    });
};
function h(e) {
    let { channelId: t, file: n } = e,
        a = i.useMemo(() => {
            let e = n.items;
            return null == e
                ? f.intl.string(f.t.jfKTes)
                : 1 === e.length && null != e[0].filename
                  ? e[0].filename
                  : f.intl.formatToPlainString(f.t.D0noUt, { count: e.length });
        }, [n.items]),
        s = i.useCallback(() => {
            u.A.cancel(t, n);
        }, [t, n]),
        o = 100 === n.progress,
        d = !o && n.currentSize > 0;
    return (0, r.jsx)("div", {
        className: p.Ig,
        children: (0, r.jsxs)("div", {
            className: p.NJ,
            children: [
                (0, r.jsx)(_, { filename: a }),
                (0, r.jsxs)("div", {
                    className: p.Jg,
                    children: [
                        (0, r.jsxs)("div", {
                            className: p.tP,
                            children: [
                                (0, r.jsx)("div", {
                                    className: p.iW,
                                    children: a,
                                }),
                                d
                                    ? (0, r.jsx)("div", {
                                          className: p.Ej,
                                          children: "\u2014 ".concat(l().filesize(n.currentSize)),
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: p.L$,
                            children: o
                                ? f.intl.string(f.t.jfKTes)
                                : (0, r.jsx)(c.kej, {
                                      className: p.qB,
                                      percent: n.progress,
                                  }),
                        }),
                    ],
                }),
                o
                    ? null
                    : (0, r.jsx)(c.DUT, {
                          onClick: s,
                          children: (0, r.jsx)(c.PGe, {
                              size: "md",
                              color: "currentColor",
                              className: p.x7,
                          }),
                      }),
            ],
        }),
    });
}
let m = (e) => {
    let { className: t, url: n, fileName: i, fileSize: a, onClick: o, onContextMenu: u, renderAdjacentContent: d } = e;
    return (0, r.jsxs)("div", {
        className: s()(p.Ig, t),
        children: [
            (0, r.jsxs)("div", {
                className: p.NJ,
                children: [
                    (0, r.jsx)(_, { filename: i }),
                    (0, r.jsxs)("div", {
                        className: p.Jg,
                        children: [
                            (0, r.jsx)("div", {
                                className: p.RT,
                                children: (0, r.jsx)(c.MzZ, {
                                    className: p.AD,
                                    href: n,
                                    onClick: o,
                                    onContextMenu: u,
                                    children: i,
                                }),
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: l().filesize(a),
                            }),
                        ],
                    }),
                ],
            }),
            null != d && d(),
        ],
    });
};
