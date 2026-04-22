"use strict";
n.d(t, { A: () => A });
var l = n(627968),
    i = n(64700),
    s = n(615300),
    a = n(311907),
    r = n(862482),
    o = n(404778),
    d = n(707554),
    c = n(834730),
    u = n(702805),
    h = n(159495),
    g = n(176360),
    m = n(147925),
    x = n(985018),
    p = n(311809);
function A() {
    let e = (0, a.bG)([g.A], () => g.A.advancedMode),
        [t] = i.useState(new s.A.Value(+!!e));
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(o.c, { className: p.BQ }),
            (0, l.jsx)(d.F, {
                component: (0, l.jsx)(r.$n, {
                    look: r.$n.Looks.BLANK,
                    color: r.$n.Colors.TRANSPARENT,
                    onClick: function () {
                        e
                            ? s.A.timing(t, { toValue: 0, duration: 250 }).start(() => {
                                  (0, u.E)(!1);
                              })
                            : ((0, u.E)(!0), s.A.timing(t, { toValue: 1, duration: 250 }).start());
                    },
                    children: (0, l.jsxs)(c.E, {
                        variant: "text-lg/semibold",
                        className: p.Vt,
                        children: [
                            x.intl.string(x.t.dYRsrm),
                            (0, l.jsx)(m.A, { expanded: e, className: p.yM, width: 20, height: 20 }),
                        ],
                    }),
                }),
                children: e && (0, l.jsx)(s.A.div, { style: { opacity: t }, children: (0, l.jsx)(h.A, {}) }),
            }),
        ],
    });
}
