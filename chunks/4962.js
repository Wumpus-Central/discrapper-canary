n.d(t, { Z: () => _ }), n(411104);
var i,
    l = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(700582),
    d = n(451478),
    u = n(388032),
    h = n(99238),
    m = (((i = m || {})[(i.STAFF_NOTES = 1)] = 'STAFF_NOTES'), i);
let p = s.ZP.connectStores([d.Z], () => ({ animate: d.Z.isFocused() }))((e) => {
        let { user: t, className: n, animate: i } = e;
        return (0, l.jsxs)('div', {
            className: a()(h.staffReviewHeader, n),
            children: [
                (0, l.jsx)(c.Z, {
                    size: o.EFr.SIZE_32,
                    user: t,
                    animate: i
                }),
                (0, l.jsxs)('div', {
                    className: h.headerText,
                    children: [
                        (0, l.jsx)('div', {
                            className: h.label,
                            children: u.intl.string(u.t.vmzMZG)
                        }),
                        (0, l.jsx)('div', {
                            className: h.username,
                            children: t.username
                        })
                    ]
                })
            ]
        });
    }),
    g = (e) => {
        let { data: t, className: n } = e;
        if (1 === t.type) {
            if (null == t.staffNotes) return null;
            let { user: e, content: i } = t.staffNotes;
            return null == e
                ? null
                : (0, l.jsxs)('div', {
                      className: n,
                      children: [
                          (0, l.jsx)(p, {
                              user: e,
                              className: h.header
                          }),
                          (0, l.jsx)('div', {
                              className: h.notes,
                              children: i
                          })
                      ]
                  });
        }
        throw Error('Unknown type');
    };
g.Types = m;
let _ = g;
