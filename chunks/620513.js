n.d(t, { A: () => p }), n(747238), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(718468),
    l = n(338717),
    c = n(96782),
    u = n(302031),
    d = n(985018),
    f = n(71433);
function p(e) {
    let { file: t, name: n, size: a, spoiler: p } = e,
        _ = i.useMemo(
            () =>
                null != t.contentType && -1 !== t.contentType.indexOf("/")
                    ? t.contentType.split("/")
                    : ["unknown", "unknown"],
            [t.contentType],
        ),
        [h, m] = i.useState(p),
        [g, E] = i.useState(p);
    p !== h && (m(p), E(p));
    let b = i.useMemo(
            () => () =>
                (0, r.jsx)(c.zB, {
                    mimeType: _,
                    downloadURL: t.url,
                    showDownload: !0,
                    isVisualMediaType: !1,
                }),
            [t, _],
        ),
        y = (e) =>
            (0, r.jsx)(o.A, {
                className: s()({ [f.V]: e }),
                url: t.url,
                fileName: null != n ? n : d.intl.string(d.t.GnuJ5u),
                fileSize: null != a ? a : 0,
                renderAdjacentContent: b,
            });
    return (0, r.jsx)("div", {
        className: f.O,
        children: p
            ? (0, r.jsx)(u.Ay, {
                  type: u.Ay.Types.ATTACHMENT,
                  reason: l.Oc.SPOILER,
                  obscured: g,
                  onToggleObscurity: () => E((e) => !e),
                  children: (e) => y(e),
              })
            : y(!1),
    });
}
