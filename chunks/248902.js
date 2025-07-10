n.d(t, { Z: () => d });
var l = n(255367);
n(73800);
var r = n(481060),
    i = n(507453),
    s = n(48550),
    a = n(388032),
    o = n(895453);
function d(e) {
    let { mfaChallenge: t, setSlide: n, onClose: d } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(i.Z.SlideHeader, {
                subtitle: a.intl.string(a.t['XQaT+/']),
                onClose: d
            }),
            (0, l.jsx)(i.Z.SlideContent, {
                children: t.methods.map((e) =>
                    (0, l.jsxs)(
                        r.P3F,
                        {
                            className: o.listItemContainer,
                            onClick: () => {
                                n(e.type);
                            },
                            children: [
                                (0, l.jsx)(r.Text, {
                                    className: o.listItemText,
                                    variant: 'text-md/semibold',
                                    children: s.P[e.type]
                                }),
                                (0, l.jsx)(r.Fbu, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 20,
                                    height: 20,
                                    className: o.listItemArrow
                                })
                            ]
                        },
                        e.type
                    )
                )
            })
        ]
    });
}
