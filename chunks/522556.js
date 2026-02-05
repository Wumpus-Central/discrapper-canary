n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(397927),
    o = n(686956),
    d = n(935649),
    c = n(847599),
    u = n(323073),
    h = n(506164),
    A = n(985018),
    g = n(635510);
function m(e) {
    let { guild: t, channelId: n } = e,
        { modalType: s, ...a } = (0, u.k$)(t),
        r = l.useCallback(() => {
            null != t && o.A.nsfwReturnToSafety(t.id);
        }, [t]),
        g = l.useCallback(() => {
            null != t && o.A.nsfwAgree(t.id);
        }, [t]),
        m = l.useCallback(() => {
            d.A.showAgeVerificationGetStartedModal({ entryPoint: c.q1.NSFW_GUILD });
        }, []),
        p = { ...a, guildId: t?.id, channelId: n, disagreement: A.intl.string(A.t["/g10LC"]) };
    switch (s) {
        case c.A5.NSFW_CHANNEL_AGE_VERIFY:
        case c.A5.GUILD_LARGE_SERVER:
            return (0, i.jsx)(h.A, { onAgree: m, onDisagree: r, modalType: s, ...p });
        default:
            return (0, i.jsx)(h.A, { onAgree: g, onDisagree: r, modalType: s, ...p });
    }
}
let p = function (e) {
    let { guild: t, channelId: n, className: s } = e,
        o = l.useRef(null);
    return (
        l.useEffect(() => {
            let { current: e } = o;
            e?.scrollToBottom();
        }, []),
        (0, i.jsx)(r.T7Y, {
            ref: o,
            className: g.X,
            children: (0, i.jsx)("div", {
                className: a()(s, g.i),
                children: (0, i.jsx)(m, { guild: t, channelId: n }),
            }),
        })
    );
};
