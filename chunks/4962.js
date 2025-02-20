n.d(t, { Z: () => m }), n(411104);
var r,
    i = n(200651);
n(192379);
var l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(700582),
    u = n(451478),
    d = n(388032),
    p = n(415820),
    h = (((r = h || {})[(r.STAFF_NOTES = 1)] = 'STAFF_NOTES'), r);
let g = a.ZP.connectStores([u.Z], () => ({ animate: u.Z.isFocused() }))((e) => {
        let { user: t, className: n, animate: r } = e;
        return (0, i.jsxs)('div', {
            className: o()(p.staffReviewHeader, n),
            children: [
                (0, i.jsx)(c.Z, {
                    size: s.EFr.SIZE_32,
                    user: t,
                    animate: r
                }),
                (0, i.jsxs)('div', {
                    className: p.headerText,
                    children: [
                        (0, i.jsx)('div', {
                            className: p.label,
                            children: d.NW.string(d.t.vmzMZG)
                        }),
                        (0, i.jsx)('div', {
                            className: p.username,
                            children: t.username
                        })
                    ]
                })
            ]
        });
    }),
    f = (e) => {
        let { data: t, className: n } = e;
        if (1 === t.type) {
            if (null == t.staffNotes) return null;
            let { user: e, content: r } = t.staffNotes;
            return null == e
                ? null
                : (0, i.jsxs)('div', {
                      className: n,
                      children: [
                          (0, i.jsx)(g, {
                              user: e,
                              className: p.header
                          }),
                          (0, i.jsx)('div', {
                              className: p.notes,
                              children: r
                          })
                      ]
                  });
        }
        throw Error('Unknown type');
    };
f.Types = h;
let m = f;
