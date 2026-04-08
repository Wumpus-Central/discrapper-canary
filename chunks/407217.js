n.d(t, { K: () => d, default: () => c });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(87719),
    a = n(244975),
    r = n(985018),
    o = n(880223);
function d(e) {
    let { onSubscribeFinish: t, stackingBehavior: l } = e;
    (0, s.mMO)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 407217));
            return (n) => (0, i.jsx)(e, { onSubscribeFinish: t, ...n });
        },
        { stackingBehavior: l },
    );
}
function c(e) {
    let { onClose: t, ...n } = e;
    return (0, i.jsx)(a.F, {
        title: r.intl.string(r.t.reVc0M),
        subtitle: r.intl.string(r.t.KckEj7),
        graphic: { src: o.A, type: "image" },
        onSecondaryClick: () => {
            (0, l.x)(t);
        },
        secondaryCTA: r.intl.string(r.t.PcTCB7),
        onClose: t,
        ...n,
    });
}
