n.d(t, {
    Z: () => m,
    u: () => p
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(692547),
    o = n(481060),
    s = n(388905),
    c = n(600164),
    d = n(981631),
    u = n(388032),
    _ = n(897927),
    h = n(652849),
    g = n(232186);
function p(e) {
    let { text: t, buttonCta: r, onClick: d } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.Ee, { src: n(689411) }),
            (0, i.jsx)(s.Dx, {
                className: l()(g.marginTop20, g.marginBottom8, h.flexCenter),
                children: u.intl.string(u.t.eL5z0t)
            }),
            (0, i.jsx)(s.DK, {
                className: g.marginBottom40,
                children: u.intl.string(u.t['poAv6+'])
            }),
            (0, i.jsxs)(o.Zbd, {
                className: _.card,
                type: o.Zbd.Types.CUSTOM,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        className: _.cardAccentLeft,
                        src: n(70519)
                    }),
                    (0, i.jsx)('img', {
                        alt: '',
                        className: _.cardAccentRight,
                        src: n(806848)
                    }),
                    (0, i.jsxs)(c.Z, {
                        className: _.cardContents,
                        direction: c.Z.Direction.VERTICAL,
                        align: c.Z.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, i.jsx)(o.Text, {
                                tag: 'strong',
                                className: _.buttonTitle,
                                variant: 'text-md/normal',
                                style: { color: a.Z.unsafe_rawColors.PRIMARY_300.css },
                                children: t
                            }),
                            (0, i.jsx)(s.zx, {
                                className: _.button,
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
function m(e) {
    let { text: t, buttonCta: n, theme: r = d.BRd.DARK, onClick: l } = e;
    return (0, i.jsx)(s.ZP, {
        theme: r,
        children: (0, i.jsx)(p, {
            text: t,
            buttonCta: n,
            onClick: l
        })
    });
}
