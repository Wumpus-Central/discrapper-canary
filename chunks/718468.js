"use strict";
n.d(t, { A: () => y, e: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(796873),
    l = n.n(o),
    u = n(311907),
    c = n(911608),
    d = n(939249),
    _ = n(789645),
    f = n(349288),
    p = n(834730),
    h = n(682718),
    E = n(46054),
    m = n(399263),
    g = n(453771),
    A = n(985018),
    I = n(490563);
let T = (e) => {
    let { filename: t } = e,
        i = (0, g.GD)(t),
        s = n(714694)(`./icon-file-${i}.svg`);
    return (0, r.jsx)("img", {
        className: I.Kk,
        src: s,
        alt: A.intl.formatToPlainString(A.t.g6KdFv, { fileType: i }),
        title: i,
    });
};
function S(e) {
    let { channelId: t, file: n } = e,
        s = (0, u.bG)([m.A], () => m.A.getMessageForFile(n.id)?.content),
        a = i.useMemo(() => {
            let e = n.items;
            return null == e
                ? A.intl.string(A.t.jfKTes)
                : 1 === e.length && null != e[0].filename
                  ? e[0].filename
                  : A.intl.formatToPlainString(A.t.D0noUt, { count: e.length });
        }, [n.items]),
        o = i.useCallback(() => {
            h.A.cancel(t, n);
        }, [t, n]),
        f = 100 === n.progress,
        p = !f && n.currentSize > 0,
        g = i.useMemo(() => (null == s || "" === s.trim() ? null : E.A.parse(s)), [s]);
    return (0, r.jsxs)("div", {
        className: I.Ig,
        children: [
            null != g && (0, r.jsx)("div", { className: I.Qs, children: g }),
            (0, r.jsxs)("div", {
                className: I.NJ,
                children: [
                    (0, r.jsx)(T, { filename: a }),
                    (0, r.jsxs)("div", {
                        className: I.Jg,
                        children: [
                            (0, r.jsxs)("div", {
                                className: I.tP,
                                children: [
                                    (0, r.jsx)("div", { className: I.iW, children: a }),
                                    p
                                        ? (0, r.jsx)("div", {
                                              className: I.Ej,
                                              children: `— ${l().filesize(n.currentSize)}`,
                                          })
                                        : null,
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: I.L$,
                                children: f ? A.intl.string(A.t.jfKTes) : (0, r.jsx)(c.z, { percent: n.progress }),
                            }),
                        ],
                    }),
                    f
                        ? null
                        : (0, r.jsx)(d.D, {
                              onClick: o,
                              children: (0, r.jsx)(_.P, { size: "md", color: "currentColor", className: I.x7 }),
                          }),
                ],
            }),
        ],
    });
}
let y = (e) => {
    let { className: t, url: n, fileName: i, fileSize: s, onClick: o, onContextMenu: u, renderAdjacentContent: c } = e;
    return (0, r.jsxs)("div", {
        className: a()(I.Ig, t),
        children: [
            (0, r.jsxs)("div", {
                className: I.NJ,
                children: [
                    (0, r.jsx)(T, { filename: i }),
                    (0, r.jsxs)("div", {
                        className: I.Jg,
                        children: [
                            (0, r.jsx)("div", {
                                className: I.RT,
                                children: (0, r.jsx)(f.Anchor, {
                                    className: I.AD,
                                    href: n,
                                    onClick: o,
                                    onContextMenu: u,
                                    children: i,
                                }),
                            }),
                            (0, r.jsx)(p.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: l().filesize(s),
                            }),
                        ],
                    }),
                ],
            }),
            null != c && c(),
        ],
    });
};
