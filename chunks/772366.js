n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(71393);
function r(e) {
    let { onCloseCallback: t, analyticsLocations: r, ...a } = e;
    (0, l.mMO)(
        async () => {
            let { default: e } = await Promise.all([n.e("91757"), n.e("45990")]).then(n.bind(n, 307794));
            return (t) =>
                (0, i.jsx)(e, {
                    ...t,
                    ...a,
                    analyticsLocations: r,
                    guildCount: s.A.getGuildCount(),
                    "aria-labelledby": "nitro-guild-cap-upsell",
                });
        },
        { onCloseCallback: t },
    );
}
