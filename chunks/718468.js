"use strict";
n.d(t, { A: () => A, e: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(796873),
    l = n.n(o),
    u = n(311907),
    c = n(397927),
    d = n(682718),
    _ = n(46054),
    f = n(399263),
    p = n(453771),
    h = n(985018),
    m = n(490563);
let E = (e) => {
    let { filename: t } = e,
        i = (0, p.GD)(t),
        s = n(714694)(`./icon-file-${i}.svg`);
    return (0, r.jsx)("img", {
        className: m.Kk,
        src: s,
        alt: h.intl.formatToPlainString(h.t.g6KdFv, { fileType: i }),
        title: i,
    });
};
function g(e) {
    let { channelId: t, file: n } = e,
        s = (0, u.bG)([f.A], () => f.A.getMessageForFile(n.id)?.content),
        a = i.useMemo(() => {
            let e = n.items;
            return null == e
                ? h.intl.string(h.t.jfKTes)
                : 1 === e.length && null != e[0].filename
                  ? e[0].filename
                  : h.intl.formatToPlainString(h.t.D0noUt, { count: e.length });
        }, [n.items]),
        o = i.useCallback(() => {
            d.A.cancel(t, n);
        }, [t, n]),
        p = 100 === n.progress,
        g = !p && n.currentSize > 0,
        A = i.useMemo(() => (null == s || "" === s.trim() ? null : _.A.parse(s)), [s]);
    return (0, r.jsxs)("div", {
        className: m.Ig,
        children: [
            null != A && (0, r.jsx)("div", { className: m.Qs, children: A }),
            (0, r.jsxs)("div", {
                className: m.NJ,
                children: [
                    (0, r.jsx)(E, { filename: a }),
                    (0, r.jsxs)("div", {
                        className: m.Jg,
                        children: [
                            (0, r.jsxs)("div", {
                                className: m.tP,
                                children: [
                                    (0, r.jsx)("div", { className: m.iW, children: a }),
                                    g
                                        ? (0, r.jsx)("div", {
                                              className: m.Ej,
                                              children: `— ${l().filesize(n.currentSize)}`,
                                          })
                                        : null,
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: m.L$,
                                children: p ? h.intl.string(h.t.jfKTes) : (0, r.jsx)(c.z21, { percent: n.progress }),
                            }),
                        ],
                    }),
                    p
                        ? null
                        : (0, r.jsx)(c.DUT, {
                              onClick: o,
                              children: (0, r.jsx)(c.PGe, { size: "md", color: "currentColor", className: m.x7 }),
                          }),
                ],
            }),
        ],
    });
}
let A = (e) => {
    let { className: t, url: n, fileName: i, fileSize: s, onClick: o, onContextMenu: u, renderAdjacentContent: d } = e;
    return (0, r.jsxs)("div", {
        className: a()(m.Ig, t),
        children: [
            (0, r.jsxs)("div", {
                className: m.NJ,
                children: [
                    (0, r.jsx)(E, { filename: i }),
                    (0, r.jsxs)("div", {
                        className: m.Jg,
                        children: [
                            (0, r.jsx)("div", {
                                className: m.RT,
                                children: (0, r.jsx)(c.MzZ, {
                                    className: m.AD,
                                    href: n,
                                    onClick: o,
                                    onContextMenu: u,
                                    children: i,
                                }),
                            }),
                            (0, r.jsx)(c.Text, {
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
