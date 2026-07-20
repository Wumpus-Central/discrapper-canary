"use strict";
n.d(t, { A: () => s });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(71393);
function s(e) {
    let { onCloseCallback: t, analyticsLocations: s, ...l } = e;
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("85029"), n.e("66901"), n.e("56430")]).then(n.bind(n, 39613));
            return (t) =>
                (0, i.jsx)(e, {
                    ...t,
                    ...l,
                    analyticsLocations: s,
                    guildCount: a.A.getGuildCount(),
                    "aria-labelledby": "nitro-guild-cap-upsell",
                });
        },
        { onCloseCallback: t },
    );
}
