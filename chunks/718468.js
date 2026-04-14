"use strict";
n.d(t, { A: () => g, e: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(796873),
    l = n.n(o),
    u = n(311907),
    c = n(397927),
    d = n(682718),
    _ = n(399263),
    f = n(453771),
    h = n(985018),
    p = n(423603);
let m = (e) => {
    let { filename: t } = e,
        i = (0, f.GD)(t),
        s = n(714694)(`./icon-file-${i}.svg`);
    return (0, r.jsx)("img", {
        className: p.Kk,
        src: s,
        alt: h.intl.formatToPlainString(h.t.g6KdFv, { fileType: i }),
        title: i,
    });
};
function E(e) {
    let { channelId: t, file: n } = e,
        s = (0, u.bG)([_.A], () => _.A.getMessageForFile(n.id)?.content),
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
        f = 100 === n.progress,
        E = !f && n.currentSize > 0;
    return (0, r.jsxs)("div", {
        className: p.Ig,
        children: [
            null != s && "" !== s.trim() && (0, r.jsx)("div", { className: p.Qs, children: s }),
            (0, r.jsxs)("div", {
                className: p.NJ,
                children: [
                    (0, r.jsx)(m, { filename: a }),
                    (0, r.jsxs)("div", {
                        className: p.Jg,
                        children: [
                            (0, r.jsxs)("div", {
                                className: p.tP,
                                children: [
                                    (0, r.jsx)("div", { className: p.iW, children: a }),
                                    E
                                        ? (0, r.jsx)("div", {
                                              className: p.Ej,
                                              children: `— ${l().filesize(n.currentSize)}`,
                                          })
                                        : null,
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: p.L$,
                                children: f ? h.intl.string(h.t.jfKTes) : (0, r.jsx)(c.z21, { percent: n.progress }),
                            }),
                        ],
                    }),
                    f
                        ? null
                        : (0, r.jsx)(c.DUT, {
                              onClick: o,
                              children: (0, r.jsx)(c.PGe, { size: "md", color: "currentColor", className: p.x7 }),
                          }),
                ],
            }),
        ],
    });
}
let g = (e) => {
    let { className: t, url: n, fileName: i, fileSize: s, onClick: o, onContextMenu: u, renderAdjacentContent: d } = e;
    return (0, r.jsxs)("div", {
        className: a()(p.Ig, t),
        children: [
            (0, r.jsxs)("div", {
                className: p.NJ,
                children: [
                    (0, r.jsx)(m, { filename: i }),
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
