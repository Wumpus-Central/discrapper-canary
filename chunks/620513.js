n.d(t, { A: () => p });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(718468),
    o = n(338717),
    c = n(96782),
    d = n(302031),
    u = n(985018),
    m = n(9327);
function p(e) {
    let { file: t, name: n, size: r, spoiler: p } = e,
        A = a.useMemo(
            () =>
                null != t.contentType && -1 !== t.contentType.indexOf("/")
                    ? t.contentType.split("/")
                    : ["unknown", "unknown"],
            [t.contentType],
        ),
        [h, C] = a.useState(p),
        [E, x] = a.useState(p);
    p !== h && (C(p), x(p));
    let N = a.useMemo(
            () => () => (0, l.jsx)(c.zB, { mimeType: A, downloadURL: t.url, showDownload: !0, isVisualMediaType: !1 }),
            [t, A],
        ),
        I = (e) =>
            (0, l.jsx)(i.A, {
                className: s()({ [m.V]: e }),
                url: t.url,
                fileName: n ?? u.intl.string(u.t.GnuJ5u),
                fileSize: r ?? 0,
                renderAdjacentContent: N,
            });
    return (0, l.jsx)("div", {
        className: m.O,
        children: p
            ? (0, l.jsx)(d.Ay, {
                  type: d.Ay.Types.ATTACHMENT,
                  reason: o.Oc.SPOILER,
                  obscured: E,
                  onToggleObscurity: () => x((e) => !e),
                  children: (e) => I(e),
              })
            : I(!1),
    });
}
