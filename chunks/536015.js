s.d(e, { default: () => p, K: () => l });
var i = s(477900);
s(582128);
var n = s(192308),
    r = s(38145),
    c = s(291005),
    a = s(87719),
    o = s(831318),
    d = s(792996);
function l(t) {
    let { onSubscribeFinish: e, stackingBehavior: r } = t;
    (0, n.mM)(
        async () => {
            let { default: t } = await Promise.resolve().then(s.bind(s, 536015));
            return (s) => (0, i.jsx)(t, { onSubscribeFinish: e, ...s });
        },
        { stackingBehavior: r },
    );
}
function p(t) {
    let { onClose: e, ...s } = t,
        l = (0, c.O)("profile_try_it_out_view_perks");
    return (0, i.jsx)(o.A, {
        title: d.intl.string(d.t.reVc0M),
        subtitle: d.intl.string(d.t.KckEj7),
        graphic: {
            src: "https://cdn.discordapp.com/assets/content/47cc9b4a38d020f9f0bf747920f0a9b0d02109a9eb9a15510e7a08b7fb106350.svg",
            type: "image",
        },
        onSecondaryClick: () => {
            (l && ((0, n.s7)(), (0, r.M)()), (0, a.x)(e));
        },
        secondaryCTA: d.intl.string(d.t.PcTCB7),
        onClose: e,
        ...s,
    });
}
