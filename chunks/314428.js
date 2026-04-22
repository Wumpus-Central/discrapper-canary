n.d(t, { A: () => u });
var a = n(627968);
n(64700);
var r = n(939249),
    i = n(834730),
    s = n(320448),
    l = n(398450),
    o = n(611248),
    d = n(985018),
    c = n(902626);
function u(e) {
    let { mfaChallenge: t, setSlide: n, onClose: u, headerAlignStart: h } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(l.A.SlideHeader, { subtitle: d.intl.string(d.t["XQaT+8"]), onClose: u, headerAlignStart: h }),
            (0, a.jsx)(l.A.SlideContent, {
                children: t.methods.map((e) =>
                    (0, a.jsxs)(
                        r.D,
                        {
                            className: c.Ry,
                            onClick: () => {
                                n(e.type);
                            },
                            children: [
                                (0, a.jsx)(i.E, {
                                    className: c.zx,
                                    variant: "text-md/semibold",
                                    children: o.e[e.type],
                                }),
                                (0, a.jsx)(s._, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 20,
                                    height: 20,
                                    className: c.td,
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
