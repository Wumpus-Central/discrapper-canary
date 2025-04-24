n.d(t, {
    Z: () => m,
    u: () => f
});
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(692547),
    o = n(481060),
    a = n(388905),
    c = n(600164),
    u = n(981631),
    d = n(388032),
    h = n(359487),
    g = n(893354),
    p = n(20493);
function f(e) {
    let { text: t, buttonCta: i, onClick: u } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.Ee, { src: n(689411) }),
            (0, r.jsx)(a.Dx, {
                className: l()(p.marginTop20, p.marginBottom8, g.flexCenter),
                children: d.intl.string(d.t.eL5z0t)
            }),
            (0, r.jsx)(a.DK, {
                className: p.marginBottom40,
                children: d.intl.string(d.t['poAv6+'])
            }),
            (0, r.jsxs)(o.Zbd, {
                className: h.card,
                type: o.Zbd.Types.CUSTOM,
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        className: h.cardAccentLeft,
                        src: n(70519)
                    }),
                    (0, r.jsx)('img', {
                        alt: '',
                        className: h.cardAccentRight,
                        src: n(806848)
                    }),
                    (0, r.jsxs)(c.Z, {
                        className: h.cardContents,
                        direction: c.Z.Direction.VERTICAL,
                        align: c.Z.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, r.jsx)(o.Text, {
                                tag: 'strong',
                                className: h.buttonTitle,
                                variant: 'text-md/normal',
                                style: { color: s.Z.unsafe_rawColors.PRIMARY_300.css },
                                children: t
                            }),
                            (0, r.jsx)(a.zx, {
                                className: h.button,
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
    let { text: t, buttonCta: n, theme: i = u.BRd.DARK, onClick: l } = e;
    return (0, r.jsx)(a.ZP, {
        theme: i,
        children: (0, r.jsx)(f, {
            text: t,
            buttonCta: n,
            onClick: l
        })
    });
}
