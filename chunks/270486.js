"use strict";
n.d(t, { A: () => x });
var l = n(627968),
    i = n(64700),
    s = n(615300),
    a = n(311907),
    r = n(421380),
    o = n(397927),
    d = n(702805),
    c = n(159495),
    u = n(176360),
    h = n(147925),
    g = n(985018),
    m = n(96886);
function x() {
    let e = (0, a.bG)([u.A], () => u.A.advancedMode),
        [t] = i.useState(new s.A.Value(+!!e));
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(o.cGx, { className: m.BQ }),
            (0, l.jsx)(o.Fmo, {
                component: (0, l.jsx)(r.$n, {
                    look: r.$n.Looks.BLANK,
                    color: r.$n.Colors.TRANSPARENT,
                    onClick: function () {
                        e
                            ? s.A.timing(t, { toValue: 0, duration: 250 }).start(() => {
                                  (0, d.E)(!1);
                              })
                            : ((0, d.E)(!0), s.A.timing(t, { toValue: 1, duration: 250 }).start());
                    },
                    children: (0, l.jsxs)(o.Text, {
                        variant: "text-lg/semibold",
                        className: m.Vt,
                        children: [
                            g.intl.string(g.t.dYRsrm),
                            (0, l.jsx)(h.A, { expanded: e, className: m.yM, width: 20, height: 20 }),
                        ],
                    }),
                }),
                children: e && (0, l.jsx)(s.A.div, { style: { opacity: t }, children: (0, l.jsx)(c.A, {}) }),
            }),
        ],
    });
}
