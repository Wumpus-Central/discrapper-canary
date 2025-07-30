(n.d(t, { Z: () => p }), n(388685));
var i = n(255367),
    l = n(73800),
    r = n(748780),
    s = n(442837),
    a = n(755721),
    o = n(481060),
    c = n(741361),
    d = n(856606),
    u = n(277053),
    h = n(259580),
    g = n(388032),
    m = n(241756);
function p() {
    let e = (0, s.e7)([u.Z], () => u.Z.advancedMode),
        [t] = l.useState(new r.Z.Value(+!!e));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.$i$, { className: m.advancedModeDivider }),
            (0, i.jsx)(o.y5t, {
                component: (0, i.jsx)(a.zx, {
                    look: a.zx.Looks.BLANK,
                    color: a.zx.Colors.TRANSPARENT,
                    onClick: function () {
                        e
                            ? r.Z.timing(t, {
                                  toValue: 0,
                                  duration: 250
                              }).start(() => {
                                  (0, c.d$)(!1);
                              })
                            : ((0, c.d$)(!0),
                              r.Z.timing(t, {
                                  toValue: 1,
                                  duration: 250
                              }).start());
                    },
                    children: (0, i.jsxs)(o.vwX, {
                        tag: 'h1',
                        className: m.advancedTitle,
                        children: [
                            g.intl.string(g.t.dYRsrq),
                            (0, i.jsx)(h.Z, {
                                expanded: e,
                                className: m.titleCaret,
                                width: 20,
                                height: 20
                            })
                        ]
                    })
                }),
                children:
                    e &&
                    (0, i.jsx)(r.Z.div, {
                        style: { opacity: t },
                        children: (0, i.jsx)(d.Z, {})
                    })
            })
        ]
    });
}
