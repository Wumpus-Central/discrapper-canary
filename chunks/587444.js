n.d(t, {
    Z: () => p,
    u: () => m,
});
var r = n(54381);
n(473749);
var i = n(120356),
    s = n.n(i),
    a = n(692547),
    l = n(481060),
    o = n(388905),
    c = n(600164),
    u = n(981631),
    d = n(388032),
    h = n(230936),
    f = n(727829),
    g = n(478411);
function m(e) {
    let { text: t, buttonCta: i, onClick: u } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.Ee, { src: n(689411) }),
            (0, r.jsx)(o.Dx, {
                className: s()(g.marginTop20, g.marginBottom8, f.flexCenter),
                children: d.intl.string(d.t.eL5z0i),
            }),
            (0, r.jsx)(o.DK, {
                className: g.marginBottom40,
                children: d.intl.string(d.t.poAv63),
            }),
            (0, r.jsxs)(l.Zbd, {
                className: h.card,
                type: l.Zbd.Types.CUSTOM,
                children: [
                    (0, r.jsx)("img", {
                        alt: "",
                        className: h.cardAccentLeft,
                        src: n(70519),
                    }),
                    (0, r.jsx)("img", {
                        alt: "",
                        className: h.cardAccentRight,
                        src: n(806848),
                    }),
                    (0, r.jsxs)(c.Z, {
                        className: h.cardContents,
                        direction: c.Z.Direction.VERTICAL,
                        align: c.Z.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, r.jsx)(l.Text, {
                                tag: "strong",
                                className: h.buttonTitle,
                                variant: "text-md/normal",
                                style: { color: a.Z.unsafe_rawColors.PRIMARY_300.css },
                                children: t,
                            }),
                            (0, r.jsx)("div", {
                                className: h.button,
                                children: (0, r.jsx)(l.Button, {
                                    text: i,
                                    fullWidth: !0,
                                    onClick: u,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function p(e) {
    let { text: t, buttonCta: n, theme: i = u.BRd.DARK, onClick: s } = e;
    return (0, r.jsx)(o.ZP, {
        theme: i,
        children: (0, r.jsx)(m, {
            text: t,
            buttonCta: n,
            onClick: s,
        }),
    });
}
