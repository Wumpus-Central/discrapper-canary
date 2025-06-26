n.d(t, {
    Z: () => f,
    u: () => g
});
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(692547),
    o = n(481060),
    s = n(388905),
    c = n(600164),
    u = n(981631),
    d = n(388032),
    h = n(359487),
    p = n(893354),
    m = n(20493);
function g(e) {
    let { text: t, buttonCta: i, onClick: u } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Ee, { src: n(689411) }),
            (0, r.jsx)(s.Dx, {
                className: l()(m.marginTop20, m.marginBottom8, p.flexCenter),
                children: d.intl.string(d.t.eL5z0t)
            }),
            (0, r.jsx)(s.DK, {
                className: m.marginBottom40,
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
                                style: { color: a.Z.unsafe_rawColors.PRIMARY_300.css },
                                children: t
                            }),
                            (0, r.jsx)(s.zx, {
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
function f(e) {
    let { text: t, buttonCta: n, theme: i = u.BRd.DARK, onClick: l } = e;
    return (0, r.jsx)(s.ZP, {
        theme: i,
        children: (0, r.jsx)(g, {
            text: t,
            buttonCta: n,
            onClick: l
        })
    });
}
