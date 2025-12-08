n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var l = n(481060),
    i = n(507453),
    s = n(48550),
    a = n(388032),
    o = n(357507);
function c(e) {
    let { mfaChallenge: t, setSlide: n, onClose: c, headerAlignStart: u } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.Z.SlideHeader, {
                subtitle: a.intl.string(a.t["XQaT+8"]),
                onClose: c,
                headerAlignStart: u,
            }),
            (0, r.jsx)(i.Z.SlideContent, {
                children: t.methods.map((e) =>
                    (0, r.jsxs)(
                        l.P3F,
                        {
                            className: o.listItemContainer,
                            onClick: () => {
                                n(e.type);
                            },
                            children: [
                                (0, r.jsx)(l.Text, {
                                    className: o.listItemText,
                                    variant: "text-md/semibold",
                                    children: s.P[e.type],
                                }),
                                (0, r.jsx)(l.Fbu, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 20,
                                    height: 20,
                                    className: o.listItemArrow,
                                }),
                            ],
                        },
                        e.type,
                    ),
                ),
            }),
        ],
    });
}
