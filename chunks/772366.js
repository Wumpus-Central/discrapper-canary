n.d(e, { A: () => l });
var i = n(477900);
n(582128);
var s = n(192308),
    a = n(71393);
function l(t) {
    let { onCloseCallback: e, analyticsLocations: l, ...o } = t;
    (0, s.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("935205"), n.e("677668"), n.e("766901"), n.e("256430")]).then(
                n.bind(n, 39613),
            );
            return (e) =>
                (0, i.jsx)(t, {
                    ...e,
                    ...o,
                    analyticsLocations: l,
                    guildCount: a.A.getGuildCount(),
                    "aria-labelledby": "nitro-guild-cap-upsell",
                });
        },
        { onCloseCallback: e },
    );
}
