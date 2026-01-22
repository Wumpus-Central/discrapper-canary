n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(398450),
    s = n(611248),
    a = n(985018),
    o = n(288661);

function d(e) {
    let { mfaChallenge: t, setSlide: n, onClose: d, headerAlignStart: c } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.A.SlideHeader, {
                subtitle: a.intl.string(a.t["XQaT+8"]),
                onClose: d,
                headerAlignStart: c,
            }),
            (0, r.jsx)(i.A.SlideContent, {
                children: t.methods.map((e) =>
                    (0, r.jsxs)(
                        l.DUT,
                        {
                            className: o.Ry,
                            onClick: () => {
                                n(e.type);
                            },
                            children: [
                                (0, r.jsx)(l.Text, {
                                    className: o.zx,
                                    variant: "text-md/semibold",
                                    children: s.e[e.type],
                                }),
                                (0, r.jsx)(l._BQ, {
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
