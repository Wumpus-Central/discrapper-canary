n.d(t, { A: () => s });
var i = n(477900);
n(582128);
var l = n(192308),
    r = n(71393);
function s(e) {
    let { onCloseCallback: t, analyticsLocations: s, ...a } = e;
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("935205"), n.e("677668"), n.e("766901"), n.e("256430")]).then(
                n.bind(n, 39613),
            );
            return (t) =>
                (0, i.jsx)(e, {
                    ...t,
                    ...a,
                    analyticsLocations: s,
                    guildCount: r.A.getGuildCount(),
                    "aria-labelledby": "nitro-guild-cap-upsell",
                });
        },
        { onCloseCallback: t },
    );
}
