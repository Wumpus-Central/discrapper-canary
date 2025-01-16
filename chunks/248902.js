n.d(t, {
    Z: function () {
        return d;
    }
});
var l = n(200651);
n(192379);
var i = n(481060),
    r = n(507453),
    s = n(48550),
    o = n(388032),
    a = n(452091);
function d(e) {
    let { mfaChallenge: t, setSlide: n, onClose: d } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(r.Z.SlideHeader, {
                subtitle: o.intl.string(o.t['XQaT+/']),
                onClose: d
            }),
            (0, l.jsx)(r.Z.SlideContent, {
                children: t.methods.map((e) =>
                    (0, l.jsxs)(
                        i.Clickable,
                        {
                            className: a.listItemContainer,
                            onClick: () => {
                                n(e.type);
                            },
                            children: [
                                (0, l.jsx)(i.Text, {
                                    className: a.listItemText,
                                    variant: 'text-md/semibold',
                                    children: s.P[e.type]
                                }),
                                (0, l.jsx)(i.ChevronSmallRightIcon, {
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
