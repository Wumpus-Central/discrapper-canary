n.d(e, { A: () => s });
var i = n(477900);
n(582128);
var a = n(192308),
    l = n(71393);
function s(t) {
    let { onCloseCallback: e, analyticsLocations: s, ...r } = t;
    (0, a.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("935205"), n.e("677668"), n.e("766901"), n.e("256430")]).then(
                n.bind(n, 39613),
            );
            return (e) =>
                (0, i.jsx)(t, {
                    ...e,
                    ...r,
                    analyticsLocations: s,
                    guildCount: l.A.getGuildCount(),
                    "aria-labelledby": "nitro-guild-cap-upsell",
                });
        },
        { onCloseCallback: e },
    );
}
