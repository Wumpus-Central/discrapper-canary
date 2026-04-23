n.d(t, { A: () => m });
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(338717),
    o = n(302031),
    d = n(953756),
    c = n(647901),
    u = n(404228);
function m(e) {
    let { components: t, accentColor: n, spoiler: r, renderComponents: m } = e,
        [_, p] = l.useState(r),
        [h, A] = l.useState(r);
    r !== _ && (p(r), A(r));
    let C = (e) =>
        (0, a.jsx)(d.O7.AutoMeasuredNestedContainer, {
            children: (l) =>
                (0, a.jsx)("div", {
                    ref: l,
                    className: i()(u.kL, { [u.dK]: e, [u._7]: null != n }),
                    style: { "--__accent-color": n },
                    children: (0, a.jsx)(c.x, { size: "reduced", children: m(t) }),
                }),
        });
    return null == t || 0 === t.length
        ? null
        : r
          ? (0, a.jsx)(o.Ay, {
                type: o.Ay.Types.ATTACHMENT,
                reason: s.Oc.SPOILER,
                obscured: h,
                onToggleObscurity: () => A((e) => !e),
                children: (e) => C(e),
            })
          : C(!1);
}
