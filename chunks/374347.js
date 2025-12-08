n.d(t, { Z: () => f }), n(388685);
var i = n(54381),
    l = n(473749),
    r = n(748780),
    a = n(442837),
    s = n(755721),
    o = n(481060),
    c = n(741361),
    d = n(856606),
    u = n(277053),
    h = n(259580),
    g = n(388032),
    m = n(657254);
function f() {
    let e = (0, a.e7)([u.Z], () => u.Z.advancedMode),
        [t] = l.useState(new r.Z.Value(+!!e));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.izJ, { className: m.advancedModeDivider }),
            (0, i.jsx)(o.y5t, {
                component: (0, i.jsx)(s.zx, {
                    look: s.zx.Looks.BLANK,
                    color: s.zx.Colors.TRANSPARENT,
                    onClick: function () {
                        e
                            ? r.Z.timing(t, {
                                  toValue: 0,
                                  duration: 250,
                              }).start(() => {
                                  (0, c.d$)(!1);
                              })
                            : ((0, c.d$)(!0),
                              r.Z.timing(t, {
                                  toValue: 1,
                                  duration: 250,
                              }).start());
                    },
                    children: (0, i.jsxs)(o.Text, {
                        variant: "text-lg/semibold",
                        className: m.advancedTitle,
                        children: [
                            g.intl.string(g.t.dYRsrm),
                            (0, i.jsx)(h.Z, {
                                expanded: e,
                                className: m.titleCaret,
                                width: 20,
                                height: 20,
                            }),
                        ],
                    }),
                }),
                children:
                    e &&
                    (0, i.jsx)(r.Z.div, {
                        style: { opacity: t },
                        children: (0, i.jsx)(d.Z, {}),
                    }),
            }),
        ],
    });
}
