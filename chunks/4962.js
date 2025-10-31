n.d(t, { Z: () => g }), n(415506);
var r,
    i = n(951288);
n(647438);
var l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(700582),
    u = n(451478),
    d = n(388032),
    p = n(113520),
    f = (((r = f || {})[(r.STAFF_NOTES = 1)] = "STAFF_NOTES"), r);
let m = s.ZP.connectStores([u.Z], () => ({ animate: u.Z.isFocused() }))((e) => {
        let { user: t, className: n, animate: r } = e;
        return (0, i.jsxs)("div", {
            className: a()(p.staffReviewHeader, n),
            children: [
                (0, i.jsx)(c.Z, {
                    size: o.EFr.SIZE_32,
                    user: t,
                    animate: r,
                }),
                (0, i.jsxs)("div", {
                    className: p.headerText,
                    children: [
                        (0, i.jsx)("div", {
                            className: p.label,
                            children: d.intl.string(d.t.vmzMZC),
                        }),
                        (0, i.jsx)("div", {
                            className: p.username,
                            children: t.username,
                        }),
                    ],
                }),
            ],
        });
    }),
    h = (e) => {
        let { data: t, className: n } = e;
        if (1 === t.type) {
            if (null == t.staffNotes) return null;
            let { user: e, content: r } = t.staffNotes;
            return null == e
                ? null
                : (0, i.jsxs)("div", {
                      className: n,
                      children: [
                          (0, i.jsx)(m, {
                              user: e,
                              className: p.header,
                          }),
                          (0, i.jsx)("div", {
                              className: p.notes,
                              children: r,
                          }),
                      ],
                  });
        }
        throw Error("Unknown type");
    };
h.Types = f;
let g = h;
