n.d(t, { A: () => _ });
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(718468),
    o = n(338717),
    d = n(96782),
    c = n(302031),
    u = n(985018),
    m = n(343408);
function _(e) {
    let { file: t, name: n, size: r, spoiler: _ } = e,
        p = l.useMemo(
            () =>
                null != t.contentType && -1 !== t.contentType.indexOf("/")
                    ? t.contentType.split("/")
                    : ["unknown", "unknown"],
            [t.contentType],
        ),
        [h, A] = l.useState(_),
        [C, x] = l.useState(_);
    _ !== h && (A(_), x(_));
    let f = l.useMemo(
            () => () => (0, a.jsx)(d.zB, { mimeType: p, downloadURL: t.url, showDownload: !0, isVisualMediaType: !1 }),
            [t, p],
        ),
        E = (e) =>
            (0, a.jsx)(s.A, {
                className: i()({ [m.V]: e }),
                url: t.url,
                fileName: n ?? u.intl.string(u.t.GnuJ5u),
                fileSize: r ?? 0,
                renderAdjacentContent: f,
            });
    return (0, a.jsx)("div", {
        className: m.O,
        children: _
            ? (0, a.jsx)(c.Ay, {
                  type: c.Ay.Types.ATTACHMENT,
                  reason: o.Oc.SPOILER,
                  obscured: C,
                  onToggleObscurity: () => x((e) => !e),
                  children: (e) => E(e),
              })
            : E(!1),
    });
}
