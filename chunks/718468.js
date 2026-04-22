"use strict";
n.d(t, { A: () => v, e: () => I });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(796873),
    o = n.n(a),
    c = n(311907),
    u = n(911608),
    d = n(939249),
    h = n(789645),
    m = n(349288),
    p = n(834730),
    f = n(682718),
    g = n(46054),
    _ = n(399263),
    x = n(453771),
    A = n(985018),
    C = n(490563);
let E = (e) => {
    let { filename: t } = e,
        l = (0, x.GD)(t),
        s = n(714694)(`./icon-file-${l}.svg`);
    return (0, i.jsx)("img", {
        className: C.Kk,
        src: s,
        alt: A.intl.formatToPlainString(A.t.g6KdFv, { fileType: l }),
        title: l,
    });
};
function I(e) {
    let { channelId: t, file: n } = e,
        s = (0, c.bG)([_.A], () => _.A.getMessageForFile(n.id)?.content),
        r = l.useMemo(() => {
            let e = n.items;
            return null == e
                ? A.intl.string(A.t.jfKTes)
                : 1 === e.length && null != e[0].filename
                  ? e[0].filename
                  : A.intl.formatToPlainString(A.t.D0noUt, { count: e.length });
        }, [n.items]),
        a = l.useCallback(() => {
            f.A.cancel(t, n);
        }, [t, n]),
        m = 100 === n.progress,
        p = !m && n.currentSize > 0,
        x = l.useMemo(() => (null == s || "" === s.trim() ? null : g.A.parse(s)), [s]);
    return (0, i.jsxs)("div", {
        className: C.Ig,
        children: [
            null != x && (0, i.jsx)("div", { className: C.Qs, children: x }),
            (0, i.jsxs)("div", {
                className: C.NJ,
                children: [
                    (0, i.jsx)(E, { filename: r }),
                    (0, i.jsxs)("div", {
                        className: C.Jg,
                        children: [
                            (0, i.jsxs)("div", {
                                className: C.tP,
                                children: [
                                    (0, i.jsx)("div", { className: C.iW, children: r }),
                                    p
                                        ? (0, i.jsx)("div", {
                                              className: C.Ej,
                                              children: `— ${o().filesize(n.currentSize)}`,
                                          })
                                        : null,
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: C.L$,
                                children: m ? A.intl.string(A.t.jfKTes) : (0, i.jsx)(u.z, { percent: n.progress }),
                            }),
                        ],
                    }),
                    m
                        ? null
                        : (0, i.jsx)(d.D, {
                              onClick: a,
                              children: (0, i.jsx)(h.P, { size: "md", color: "currentColor", className: C.x7 }),
                          }),
                ],
            }),
        ],
    });
}
let v = (e) => {
    let { className: t, url: n, fileName: l, fileSize: s, onClick: a, onContextMenu: c, renderAdjacentContent: u } = e;
    return (0, i.jsxs)("div", {
        className: r()(C.Ig, t),
        children: [
            (0, i.jsxs)("div", {
                className: C.NJ,
                children: [
                    (0, i.jsx)(E, { filename: l }),
                    (0, i.jsxs)("div", {
                        className: C.Jg,
                        children: [
                            (0, i.jsx)("div", {
                                className: C.RT,
                                children: (0, i.jsx)(m.Anchor, {
                                    className: C.AD,
                                    href: n,
                                    onClick: a,
                                    onContextMenu: c,
                                    children: l,
                                }),
                            }),
                            (0, i.jsx)(p.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: o().filesize(s),
                            }),
                        ],
                    }),
                ],
            }),
            null != u && u(),
        ],
    });
};
