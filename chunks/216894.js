"use strict";
n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var s = n(970672),
    r = n(953680),
    l = n(613057);
let a = function (e) {
    let { match: t, location: n } = e,
        a = async (e) => {
            await (0, s.W)(l.XK.GAME_SHOP, {
                guildId: e.params.guildId,
                pageIndex: e.params.pageIndex,
                skuId: e.params.skuId,
                slug: e.params.slug,
            });
        };
    return (0, i.jsx)(r.A, { match: t, location: n, attemptDeepLink: a });
};
