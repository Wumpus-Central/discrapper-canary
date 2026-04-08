n.d(t, { A: () => d });
var l = n(627968);
n(64700);
var s = n(397927),
    r = n(398450),
    i = n(611248),
    a = n(985018),
    o = n(39634);
function d(e) {
    let { mfaChallenge: t, setSlide: n, onClose: d, headerAlignStart: u } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(r.A.SlideHeader, { subtitle: a.intl.string(a.t["XQaT+8"]), onClose: d, headerAlignStart: u }),
            (0, l.jsx)(r.A.SlideContent, {
                children: t.methods.map((e) =>
                    (0, l.jsxs)(
                        s.DUT,
                        {
                            className: o.Ry,
                            onClick: () => {
                                n(e.type);
                            },
                            children: [
                                (0, l.jsx)(s.Text, {
                                    className: o.zx,
                                    variant: "text-md/semibold",
                                    children: i.e[e.type],
                                }),
                                (0, l.jsx)(s._BQ, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 20,
                                    height: 20,
                                    className: o.td,
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
