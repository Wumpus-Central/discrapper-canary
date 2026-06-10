"use strict";
n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(71393);
function a(e) {
    let { onCloseCallback: t, analyticsLocations: a, ...o } = e;
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("2125"), n.e("66901"), n.e("56430")]).then(n.bind(n, 39613));
            return (t) =>
                (0, i.jsx)(e, {
                    ...t,
                    ...o,
                    analyticsLocations: a,
                    guildCount: s.A.getGuildCount(),
                    "aria-labelledby": "nitro-guild-cap-upsell",
                });
        },
        { onCloseCallback: t },
    );
}
