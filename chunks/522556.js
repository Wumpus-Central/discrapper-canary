"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(686956),
    c = n(935649),
    d = n(847599),
    u = n(36149),
    h = n(323073),
    A = n(506164),
    p = n(204925),
    g = n(985018),
    m = n(635510);
function _(e) {
    let { guild: t, channelId: n } = e,
        { modalType: l, ...r } = (0, h.k$)(t),
        a = s.useCallback(() => {
            null != t && o.A.nsfwReturnToSafety(t.id);
        }, [t]),
        m = s.useCallback(() => {
            null != t && o.A.nsfwAgree(t.id);
        }, [t]),
        _ = s.useCallback(() => {
            c.A.showAgeVerificationGetStartedModal({ entryPoint: d.q1.NSFW_GUILD });
        }, []);
    (0, u.I7)(p.w_.NSFW_SERVER);
    let f = { ...r, guildId: t?.id, channelId: n, disagreement: g.intl.string(g.t["/g10LC"]) };
    switch (l) {
        case d.A5.NSFW_CHANNEL_AGE_VERIFY:
        case d.A5.GUILD_LARGE_SERVER:
            return (0, i.jsx)(A.A, { onAgree: _, onDisagree: a, modalType: l, ...f });
        default:
            return (0, i.jsx)(A.A, { onAgree: m, onDisagree: a, modalType: l, ...f });
    }
}
let f = function (e) {
    let { guild: t, channelId: n, className: l } = e,
        o = s.useRef(null);
    return (
        s.useEffect(() => {
            let { current: e } = o;
            e?.scrollToBottom();
        }, []),
        (0, i.jsx)(a.T7Y, {
            ref: o,
            className: m.X,
            children: (0, i.jsx)("div", {
                className: r()(l, m.i),
                children: (0, i.jsx)(_, { guild: t, channelId: n }),
            }),
        })
    );
};
