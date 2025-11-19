n.d(t, {
    Z: () => m,
    p: () => h,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(112456),
    l = n.n(s),
    c = n(481060),
    u = n(966390),
    d = n(403182),
    f = n(388032),
    _ = n(449582);
let p = (e) => {
    let { filename: t } = e,
        i = (0, d.uV)(t),
        a = n(148660)("./icon-file-".concat(i, ".svg"));
    return (0, r.jsx)("img", {
        className: _.icon,
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
        o = i.useCallback(() => {
            u.Z.cancel(t, n);
        }, [t, n]),
        s = 100 === n.progress,
        d = !s && n.currentSize > 0;
    return (0, r.jsx)("div", {
        className: _.fileWrapper,
        children: (0, r.jsxs)("div", {
            className: _.file,
            children: [
                (0, r.jsx)(p, { filename: a }),
                (0, r.jsxs)("div", {
                    className: _.fileInner,
                    children: [
                        (0, r.jsxs)("div", {
                            className: _.filenameWrapper,
                            children: [
                                (0, r.jsx)("div", {
                                    className: _.filename,
                                    children: a,
                                }),
                                d
                                    ? (0, r.jsx)("div", {
                                          className: _.size,
                                          children: "\u2014 ".concat(l().filesize(n.currentSize)),
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: _.progressContainer,
                            children: s
                                ? f.intl.string(f.t.jfKTes)
                                : (0, r.jsx)(c.Exd, {
                                      className: _.progress,
                                      percent: n.progress,
                                  }),
                        }),
                    ],
                }),
                s
                    ? null
                    : (0, r.jsx)(c.P3F, {
                          onClick: o,
                          children: (0, r.jsx)(c.Dio, {
                              size: "md",
                              color: "currentColor",
                              className: _.cancelButton,
                          }),
                      }),
            ],
        }),
    });
}
let m = (e) => {
    let { className: t, url: n, fileName: i, fileSize: a, onClick: s, onContextMenu: u, renderAdjacentContent: d } = e;
    return (0, r.jsxs)("div", {
        className: o()(_.fileWrapper, t),
        children: [
            (0, r.jsxs)("div", {
                className: _.file,
                children: [
                    (0, r.jsx)(p, { filename: i }),
                    (0, r.jsxs)("div", {
                        className: _.fileInner,
                        children: [
                            (0, r.jsx)("div", {
                                className: _.filenameLinkWrapper,
                                children: (0, r.jsx)(c.Anchor, {
                                    className: _.fileNameLink,
                                    href: n,
                                    onClick: s,
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
