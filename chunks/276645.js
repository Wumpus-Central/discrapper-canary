n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(970731),
    a = n(388032),
    s = n(733926);
function o(e) {
    let { guildId: t, markAsDismissed: o } = e;
    return (0, i.jsx)(l.ZP, {
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
            color: r.ButtonColors.WHITE,
            innerClassName: s.primaryButton
        },
        onClick: () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('5863'), n.e('97984')]).then(n.bind(n, 751212));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guildId: t
                    });
            });
        },
        secondaryButtonCTA: a.intl.string(a.t.TulDPj),
        secondaryButtonProps: {
            look: r.ButtonLooks.LINK,
            color: r.ButtonColors.WHITE
        },
        markAsDismissed: o
    });
}
