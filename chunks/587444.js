n.d(t, {
    Z: () => m,
    u: () => f
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(692547),
    l = n(481060),
    s = n(388905),
    c = n(600164),
    u = n(981631),
    d = n(388032),
    p = n(359487),
    g = n(893354),
    h = n(20493);
function f(e) {
    let { text: t, buttonCta: i, onClick: u } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Ee, { src: n(689411) }),
            (0, r.jsx)(s.Dx, {
                className: o()(h.marginTop20, h.marginBottom8, g.flexCenter),
                children: d.NW.string(d.t.eL5z0t)
            }),
            (0, r.jsx)(s.DK, {
                className: h.marginBottom40,
                children: d.NW.string(d.t['poAv6+'])
            }),
            (0, r.jsxs)(l.Zbd, {
                className: p.card,
                type: l.Zbd.Types.CUSTOM,
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        className: p.cardAccentLeft,
                        src: n(70519)
                    }),
                    (0, r.jsx)('img', {
                        alt: '',
                        className: p.cardAccentRight,
                        src: n(806848)
                    }),
                    (0, r.jsxs)(c.Z, {
                        className: p.cardContents,
                        direction: c.Z.Direction.VERTICAL,
                        align: c.Z.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, r.jsx)(l.Text, {
                                tag: 'strong',
                                className: p.buttonTitle,
                                variant: 'text-md/normal',
                                style: { color: a.Z.unsafe_rawColors.PRIMARY_300.css },
                                children: t
                            }),
                            (0, r.jsx)(s.zx, {
                                className: p.button,
                                onClick: u,
                                children: i
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function m(e) {
    let { text: t, buttonCta: n, theme: i = u.BRd.DARK, onClick: o } = e;
    return (0, r.jsx)(s.ZP, {
        theme: i,
        children: (0, r.jsx)(f, {
            text: t,
            buttonCta: n,
            onClick: o
        })
    });
}
