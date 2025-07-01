(n.d(t, { Z: () => g }), n(388685));
var i = n(255367),
    l = n(73800),
    r = n(748780),
    s = n(442837),
    a = n(481060),
    o = n(741361),
    c = n(856606),
    d = n(277053),
    u = n(259580),
    h = n(388032),
    m = n(241756);
function g() {
    let e = (0, s.e7)([d.Z], () => d.Z.advancedMode),
        [t] = l.useState(new r.Z.Value(+!!e));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.$i$, { className: m.advancedModeDivider }),
            (0, i.jsx)(a.y5t, {
                component: (0, i.jsx)(a.zxk, {
                    look: a.zxk.Looks.BLANK,
                    color: a.zxk.Colors.TRANSPARENT,
                    onClick: function () {
                        e
                            ? r.Z.timing(t, {
                                  toValue: 0,
                                  duration: 250
                              }).start(() => {
                                  (0, o.d$)(!1);
                              })
                            : ((0, o.d$)(!0),
                              r.Z.timing(t, {
                                  toValue: 1,
                                  duration: 250
                              }).start());
                    },
                    children: (0, i.jsxs)(a.vwX, {
                        tag: 'h1',
                        className: m.advancedTitle,
                        children: [
                            h.intl.string(h.t.dYRsrq),
                            (0, i.jsx)(u.Z, {
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
                        children: (0, i.jsx)(c.Z, {})
                    })
            })
        ]
    });
}
