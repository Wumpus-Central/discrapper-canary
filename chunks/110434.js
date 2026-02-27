n.d(t, { A: () => p });
var i,
    r = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    d = n(966327),
    c = n(531685),
    u = n(985018),
    A = n(208744),
    h = (((i = h || {})[(i.STAFF_NOTES = 1)] = "STAFF_NOTES"), i);
let _ = s.Ay.connectStores([c.A], () => ({ animate: c.A.isFocused() }))((e) => {
        let { user: t, className: n, animate: i } = e;
        return (0, r.jsxs)("div", {
            className: a()(A.g7, n),
            children: [
                (0, r.jsx)(d.A, { size: o._3J.SIZE_32, user: t, animate: i }),
                (0, r.jsxs)("div", {
                    className: A.TK,
                    children: [
                        (0, r.jsx)("div", { className: A.Pf, children: u.intl.string(u.t.vmzMZC) }),
                        (0, r.jsx)("div", { className: A.Xh, children: t.username }),
                    ],
                }),
            ],
        });
    }),
    m = (e) => {
        let { data: t, className: n } = e;
        if (1 === t.type) {
            if (null == t.staffNotes) return null;
            let { user: e, content: i } = t.staffNotes;
            return null == e
                ? null
                : (0, r.jsxs)("div", {
                      className: n,
                      children: [
                          (0, r.jsx)(_, { user: e, className: A.wx }),
                          (0, r.jsx)("div", { className: A.Q2, children: i }),
                      ],
                  });
        }
        throw Error("Unknown type");
    };
m.Types = h;
let p = m;
