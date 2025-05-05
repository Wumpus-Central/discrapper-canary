n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var l = n(481060),
    i = n(507453),
    s = n(48550),
    o = n(388032),
    a = n(895453);
function c(e) {
    let { mfaChallenge: t, setSlide: n, onClose: c } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.Z.SlideHeader, {
                subtitle: o.intl.string(o.t['XQaT+/']),
                onClose: c
            }),
            (0, r.jsx)(i.Z.SlideContent, {
                children: t.methods.map((e) =>
                    (0, r.jsxs)(
                        l.P3F,
                        {
                            className: a.listItemContainer,
                            onClick: () => {
                                n(e.type);
                            },
                            children: [
                                (0, r.jsx)(l.Text, {
                                    className: a.listItemText,
                                    variant: 'text-md/semibold',
                                    children: s.P[e.type]
                                }),
                                (0, r.jsx)(l.Fbu, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 20,
                                    height: 20,
                                    className: a.listItemArrow
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
