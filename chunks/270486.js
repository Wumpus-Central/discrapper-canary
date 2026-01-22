n.d(t, {
    A: () => f,
}),
    n(896048);
var l = n(627968),
    i = n(64700),
    r = n(615300),
    s = n(311907),
    a = n(421380),
    o = n(397927),
    c = n(702805),
    d = n(159495),
    u = n(176360),
    h = n(147925),
    g = n(985018),
    m = n(272396);

function f() {
    let e = (0, s.bG)([u.A], () => u.A.advancedMode),
        [t] = i.useState(new r.A.Value(+!!e));
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(o.cGx, {
                className: m.BQ,
            }),
            (0, l.jsx)(o.Fmo, {
                component: (0, l.jsx)(a.$n, {
                    look: a.$n.Looks.BLANK,
                    color: a.$n.Colors.TRANSPARENT,
                    onClick: function () {
                        e
                            ? r.A.timing(t, {
                                  toValue: 0,
                                  duration: 250,
                              }).start(() => {
                                  (0, c.E)(!1);
                              })
                            : ((0, c.E)(!0),
                              r.A.timing(t, {
                                  toValue: 1,
                                  duration: 250,
                              }).start());
                    },
                    children: (0, l.jsxs)(o.Text, {
                        variant: "text-lg/semibold",
                        className: m.Vt,
                        children: [
                            g.intl.string(g.t.dYRsrm),
                            (0, l.jsx)(h.A, {
                                expanded: e,
                                className: m.yM,
                                width: 20,
                                height: 20,
                            }),
                        ],
                    }),
                }),
                children:
                    e &&
                    (0, l.jsx)(r.A.div, {
                        style: {
                            opacity: t,
                        },
                        children: (0, l.jsx)(d.A, {}),
                    }),
            }),
        ],
    });
}
