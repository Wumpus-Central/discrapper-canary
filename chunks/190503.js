l.d(t, { A: () => a });
var r = l(627968),
    n = l(607470),
    i = l(506456),
    o = l(271215);
let a = (e) => {
    let { src: t } = e,
        l = (0, i.A)(t);
    return null == l
        ? null
        : (0, i.c)(l.mimeType)
          ? (0, r.jsx)(n.A, { className: o.S, src: l.src, autoPlay: !0, loop: !0, muted: !0, playsInline: !0 })
          : (0, r.jsx)("img", { className: o.S, src: l.src, alt: l.alt ?? "" });
};
