n.d(t, {
    A: () => f,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(338717),
    l = n(302031),
    c = n(953756),
    u = n(647901),
    d = n(612089);

function f(e) {
    let { components: t, accentColor: n, spoiler: a, renderComponents: f } = e,
        [p, _] = i.useState(a),
        [h, m] = i.useState(a);
    a !== p && (_(a), m(a));
    let g = (e) =>
        (0, r.jsx)(c.O7.AutoMeasuredNestedContainer, {
            children: (i) =>
                (0, r.jsx)("div", {
                    ref: i,
                    className: s()(d.kL, {
                        [d.dK]: e,
                        [d._7]: null != n,
                    }),
                    style: {
                        "--__accent-color": n,
                    },
                    children: (0, r.jsx)(u.x, {
                        size: "reduced",
                        children: f(t),
                    }),
                }),
        });
    return null == t || 0 === t.length
        ? null
        : a
          ? (0, r.jsx)(l.Ay, {
                type: l.Ay.Types.ATTACHMENT,
                reason: o.Oc.SPOILER,
                obscured: h,
                onToggleObscurity: () => m((e) => !e),
                children: (e) => g(e),
            })
          : g(!1);
}
