n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(599319),
    o = n(686956),
    d = n(935649),
    c = n(847599),
    u = n(36149),
    h = n(323073),
    A = n(506164),
    _ = n(204925),
    m = n(985018),
    g = n(311177);
function p(e) {
    let { guild: t, channelId: n } = e,
        { modalType: s, ...a } = (0, h.k$)(t),
        r = l.useCallback(() => {
            null != t && o.A.nsfwReturnToSafety(t.id);
        }, [t]),
        g = l.useCallback(() => {
            null != t && o.A.nsfwAgree(t.id);
        }, [t]),
        p = l.useCallback(() => {
            d.A.showAgeVerificationGetStartedModal({ entryPoint: c.q1.NSFW_GUILD });
        }, []);
    (0, u.I7)(_.w_.NSFW_SERVER);
    let f = { ...a, guildId: t?.id, channelId: n, disagreement: m.intl.string(m.t["/g10LC"]) };
    switch (s) {
        case c.A5.NSFW_CHANNEL_AGE_VERIFY:
        case c.A5.GUILD_LARGE_SERVER:
            return (0, i.jsx)(A.A, { onAgree: p, onDisagree: r, modalType: s, ...f });
        default:
            return (0, i.jsx)(A.A, { onAgree: g, onDisagree: r, modalType: s, ...f });
    }
}
let f = function (e) {
    let { guild: t, channelId: n, className: s } = e,
        o = l.useRef(null);
    return (
        l.useEffect(() => {
            let { current: e } = o;
            e?.scrollToBottom();
        }, []),
        (0, i.jsx)(r.Ch, {
            ref: o,
            className: g.X,
            children: (0, i.jsx)("div", {
                className: a()(s, g.i),
                children: (0, i.jsx)(p, { guild: t, channelId: n }),
            }),
        })
    );
};
