n.d(t, {
    Z: () => f,
    u: () => m,
});
var r = n(951288);
n(647438);
var i = n(120356),
    s = n.n(i),
    l = n(692547),
    a = n(481060),
    o = n(388905),
    c = n(600164),
    u = n(981631),
    d = n(388032),
    h = n(108103),
    g = n(465106),
    p = n(10198);
function m(e) {
    let { text: t, buttonCta: i, onClick: u } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.Ee, { src: n(689411) }),
            (0, r.jsx)(o.Dx, {
                className: s()(p.marginTop20, p.marginBottom8, g.flexCenter),
                children: d.intl.string(d.t.eL5z0i),
            }),
            (0, r.jsx)(o.DK, {
                className: p.marginBottom40,
                children: d.intl.string(d.t.poAv63),
            }),
            (0, r.jsxs)(a.Zbd, {
                className: h.card,
                type: a.Zbd.Types.CUSTOM,
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
                            (0, r.jsx)(a.Text, {
                                tag: "strong",
                                className: h.buttonTitle,
                                variant: "text-md/normal",
                                style: { color: l.Z.unsafe_rawColors.PRIMARY_300.css },
                                children: t,
                            }),
                            (0, r.jsx)("div", {
                                className: h.button,
                                children: (0, r.jsx)(a.Button, {
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
function f(e) {
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
