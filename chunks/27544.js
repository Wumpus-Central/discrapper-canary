n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    s = n(748780),
    r = n(442837),
    a = n(481060),
    o = n(741361),
    d = n(856606),
    c = n(277053),
    u = n(259580),
    h = n(388032),
    m = n(589794);
function g() {
    let e = (0, r.e7)([c.Z], () => c.Z.advancedMode),
        [t] = l.useState(new s.Z.Value(e ? 1 : 0));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.FormDivider, { className: m.advancedModeDivider }),
            (0, i.jsx)(a.HeadingLevel, {
                component: (0, i.jsx)(a.Button, {
                    look: a.Button.Looks.BLANK,
                    color: a.Button.Colors.TRANSPARENT,
                    onClick: function () {
                        e
                            ? s.Z.timing(t, {
                                  toValue: 0,
                                  duration: 250
                              }).start(() => {
                                  (0, o.d$)(!1);
                              })
                            : ((0, o.d$)(!0),
                              s.Z.timing(t, {
                                  toValue: 1,
                                  duration: 250
                              }).start());
                    },
                    children: (0, i.jsxs)(a.FormTitle, {
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
                    (0, i.jsx)(s.Z.div, {
                        style: { opacity: t },
                        children: (0, i.jsx)(d.Z, {})
                    })
            })
        ]
    });
}
