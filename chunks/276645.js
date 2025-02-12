n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(970731),
    a = n(388032),
    s = n(371144);
function o(e) {
    let { guildId: t, markAsDismissed: o } = e;
    return (0, i.jsx)(r.ZP, {
        className: s.container,
        asset: (0, i.jsx)('img', {
            className: s.image,
            src: n(297806),
            alt: ''
        }),
        header: a.intl.string(a.t['2l9beX']),
        headerClassName: s.header,
        content: a.intl.string(a.t.gdqdND),
        buttonCTA: a.intl.string(a.t.RzWDqa),
        buttonProps: {
            color: l.Ttl.WHITE,
            innerClassName: s.primaryButton
        },
        onClick: () => {
            (0, l.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('5863'), n.e('58984')]).then(n.bind(n, 751212));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guildId: t
                    });
            });
        },
        secondaryButtonCTA: a.intl.string(a.t.TulDPj),
        secondaryButtonProps: {
            look: l.iLD.LINK,
            color: l.Ttl.WHITE
        },
        markAsDismissed: o
    });
}
