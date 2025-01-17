n.d(t, {
    Z: function () {
        return p;
    },
    u: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(692547),
    o = n(481060),
    a = n(388905),
    c = n(600164),
    d = n(981631),
    u = n(388032),
    h = n(897927),
    f = n(652849),
    g = n(232186);
function m(e) {
    let { text: t, buttonCta: r, onClick: d } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.Ee, { src: n(689411) }),
            (0, i.jsx)(a.Dx, {
                className: s()(g.marginTop20, g.marginBottom8, f.flexCenter),
                children: u.intl.string(u.t.eL5z0t)
            }),
            (0, i.jsx)(a.DK, {
                className: g.marginBottom40,
                children: u.intl.string(u.t['poAv6+'])
            }),
            (0, i.jsxs)(o.Card, {
                className: h.card,
                type: o.Card.Types.CUSTOM,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        className: h.cardAccentLeft,
                        src: n(70519)
                    }),
                    (0, i.jsx)('img', {
                        alt: '',
                        className: h.cardAccentRight,
                        src: n(806848)
                    }),
                    (0, i.jsxs)(c.Z, {
                        className: h.cardContents,
                        direction: c.Z.Direction.VERTICAL,
                        align: c.Z.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, i.jsx)(o.Text, {
                                tag: 'strong',
                                className: h.buttonTitle,
                                variant: 'text-md/normal',
                                style: { color: l.Z.unsafe_rawColors.PRIMARY_300.css },
                                children: t
                            }),
                            (0, i.jsx)(a.zx, {
                                className: h.button,
                                onClick: d,
                                children: r
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function p(e) {
    let { text: t, buttonCta: n, theme: r = d.BRd.DARK, onClick: s } = e;
    return (0, i.jsx)(a.ZP, {
        theme: r,
        children: (0, i.jsx)(m, {
            text: t,
            buttonCta: n,
            onClick: s
        })
    });
}
