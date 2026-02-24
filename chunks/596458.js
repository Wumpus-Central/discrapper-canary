"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(342494),
    l = n(686956),
    r = n(652215),
    a = n(49999),
    o = n(985018);
function c(e) {
    let { targetElementRef: t, gameName: n, gameCommunityGuildId: c, markAsDismissed: d } = e;
    return (0, i.jsx)(s.AM, {
        targetElementRef: t,
        position: "top",
        onRequestClose: () => {
            d(a.i.USER_DISMISS);
        },
        title: o.intl.formatToPlainString(o.t.ry9SJw, { gameName: n }),
        body: o.intl.string(o.t.YPpOov),
        actions: [
            {
                text: o.intl.string(o.t.RVfNGU),
                onClick: () => {
                    d(a.i.TAKE_ACTION), l.A.joinGuild(c, { source: r.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL });
                },
            },
        ],
    });
}
