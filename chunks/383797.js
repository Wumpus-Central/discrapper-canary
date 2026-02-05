n.d(t, { A: () => m });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(338717),
    o = n(302031),
    d = n(953756),
    c = n(647901),
    u = n(612089);
function m(e) {
    let { components: t, accentColor: n, spoiler: r, renderComponents: m } = e,
        [p, A] = a.useState(r),
        [h, C] = a.useState(r);
    r !== p && (A(r), C(r));
    let E = (e) =>
        (0, l.jsx)(d.O7.AutoMeasuredNestedContainer, {
            children: (a) =>
                (0, l.jsx)("div", {
                    ref: a,
                    className: s()(u.kL, { [u.dK]: e, [u._7]: null != n }),
                    style: { "--__accent-color": n },
                    children: (0, l.jsx)(c.x, { size: "reduced", children: m(t) }),
                }),
        });
    return null == t || 0 === t.length
        ? null
        : r
          ? (0, l.jsx)(o.Ay, {
                type: o.Ay.Types.ATTACHMENT,
                reason: i.Oc.SPOILER,
                obscured: h,
                onToggleObscurity: () => C((e) => !e),
                children: (e) => E(e),
            })
          : E(!1);
}
