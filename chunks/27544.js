n.d(t, { Z: () => m }), n(388685);
var i = n(200651),
    r = n(192379),
    l = n(748780),
    s = n(442837),
    a = n(481060),
    o = n(741361),
    c = n(856606),
    d = n(277053),
    u = n(259580),
    h = n(388032),
    g = n(241756);
function m() {
    let e = (0, s.e7)([d.Z], () => d.Z.advancedMode),
        [t] = r.useState(new l.Z.Value(+!!e));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.$i$, { className: g.advancedModeDivider }),
            (0, i.jsx)(a.y5t, {
                component: (0, i.jsx)(a.zxk, {
                    look: a.zxk.Looks.BLANK,
                    color: a.zxk.Colors.TRANSPARENT,
                    onClick: function () {
                        e
                            ? l.Z.timing(t, {
                                  toValue: 0,
                                  duration: 250
                              }).start(() => {
                                  (0, o.d$)(!1);
                              })
                            : ((0, o.d$)(!0),
                              l.Z.timing(t, {
                                  toValue: 1,
                                  duration: 250
                              }).start());
                    },
                    children: (0, i.jsxs)(a.vwX, {
                        tag: 'h1',
                        className: g.advancedTitle,
                        children: [
                            h.NW.string(h.t.dYRsrq),
                            (0, i.jsx)(u.Z, {
                                expanded: e,
                                className: g.titleCaret,
                                width: 20,
                                height: 20
                            })
                        ]
                    })
                }),
                children:
                    e &&
                    (0, i.jsx)(l.Z.div, {
                        style: { opacity: t },
                        children: (0, i.jsx)(c.Z, {})
                    })
            })
        ]
    });
}
