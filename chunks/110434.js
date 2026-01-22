n.d(t, {
    A: () => g,
}),
    n(65821);
var r,
    i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(966327),
    u = n(531685),
    d = n(985018),
    p = n(208744),
    f = (((r = f || {})[(r.STAFF_NOTES = 1)] = "STAFF_NOTES"), r);
let h = s.Ay.connectStores([u.A], () => ({
        animate: u.A.isFocused(),
    }))((e) => {
        let { user: t, className: n, animate: r } = e;
        return (0, i.jsxs)("div", {
            className: a()(p.g7, n),
            children: [
                (0, i.jsx)(c.A, {
                    size: o._3J.SIZE_32,
                    user: t,
                    animate: r,
                }),
                (0, i.jsxs)("div", {
                    className: p.TK,
                    children: [
                        (0, i.jsx)("div", {
                            className: p.Pf,
                            children: d.intl.string(d.t.vmzMZC),
                        }),
                        (0, i.jsx)("div", {
                            className: p.Xh,
                            children: t.username,
                        }),
                    ],
                }),
            ],
        });
    }),
    A = (e) => {
        let { data: t, className: n } = e;
        if (1 === t.type) {
            if (null == t.staffNotes) return null;
            let { user: e, content: r } = t.staffNotes;
            return null == e
                ? null
                : (0, i.jsxs)("div", {
                      className: n,
                      children: [
                          (0, i.jsx)(h, {
                              user: e,
                              className: p.wx,
                          }),
                          (0, i.jsx)("div", {
                              className: p.Q2,
                              children: r,
                          }),
                      ],
                  });
        }
        throw Error("Unknown type");
    };
A.Types = f;
let g = A;
