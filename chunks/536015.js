s.d(e, { default: () => o, K: () => d });
var n = s(477900);
s(582128);
var i = s(192308),
    c = s(87719),
    a = s(831318),
    r = s(792996);
function d(t) {
    let { onSubscribeFinish: e, stackingBehavior: c } = t;
    (0, i.mM)(
        async () => {
            let { default: t } = await Promise.resolve().then(s.bind(s, 536015));
            return (s) => (0, n.jsx)(t, { onSubscribeFinish: e, ...s });
        },
        { stackingBehavior: c },
    );
}
function o(t) {
    let { onClose: e, ...s } = t;
    return (0, n.jsx)(a.A, {
        title: r.intl.string(r.t.reVc0M),
        subtitle: r.intl.string(r.t.KckEj7),
        graphic: {
            src: "https://cdn.discordapp.com/assets/content/47cc9b4a38d020f9f0bf747920f0a9b0d02109a9eb9a15510e7a08b7fb106350.svg",
            type: "image",
        },
        onSecondaryClick: () => {
            (0, c.x)(e);
        },
        secondaryCTA: r.intl.string(r.t.PcTCB7),
        onClose: e,
        ...s,
    });
}
