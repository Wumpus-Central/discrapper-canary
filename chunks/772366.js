n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(71393);
function r(e) {
    let { onCloseCallback: t, analyticsLocations: r, ...s } = e;
    (0, l.mMO)(
        async () => {
            let { default: e } = await n.e("45990").then(n.bind(n, 307794));
            return (t) =>
                (0, i.jsx)(e, {
                    ...t,
                    ...s,
                    analyticsLocations: r,
                    guildCount: a.A.getGuildCount(),
                    "aria-labelledby": "nitro-guild-cap-upsell",
                });
        },
        { onCloseCallback: t },
    );
}
