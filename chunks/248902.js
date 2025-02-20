r.d(t, { Z: () => c });
var n = r(200651);
r(192379);
var l = r(481060),
    i = r(507453),
    s = r(48550),
    o = r(388032),
    a = r(595165);
function c(e) {
    let { mfaChallenge: t, setSlide: r, onClose: c } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.Z.SlideHeader, {
                subtitle: o.NW.string(o.t['XQaT+/']),
                onClose: c
            }),
            (0, n.jsx)(i.Z.SlideContent, {
                children: t.methods.map((e) =>
                    (0, n.jsxs)(
                        l.P3F,
                        {
                            className: a.listItemContainer,
                            onClick: () => {
                                r(e.type);
                            },
                            children: [
                                (0, n.jsx)(l.Text, {
                                    className: a.listItemText,
                                    variant: 'text-md/semibold',
                                    children: s.P[e.type]
                                }),
                                (0, n.jsx)(l.Fbu, {
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
