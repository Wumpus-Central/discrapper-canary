n.d(l, { A: () => f });
var t = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(689175),
    c = n(66834),
    u = n(31720),
    d = n(847599),
    o = n(36149),
    m = n(323073),
    A = n(506164),
    h = n(204925),
    g = n(375708),
    x = n(790801);
function N(e) {
    let { guild: l, channelId: n } = e,
        { modalType: s, ...a } = (0, m.k$)(l),
        r = i.useCallback(() => {
            null != l && c.A.nsfwReturnToSafety(l.id);
        }, [l]),
        x = i.useCallback(() => {
            null != l && c.A.nsfwAgree(l.id);
        }, [l]),
        N = i.useCallback(() => {
            u.A.showAgeVerificationGetStartedModal({ entryPoint: d.q1.NSFW_GUILD });
        }, []);
    (0, o.I7)(h.w_.NSFW_SERVER);
    let f = { ...a, guildId: l?.id, channelId: n, disagreement: g.intl.string(g.t["/g10LC"]) };
    switch (s) {
        case d.A5.NSFW_CHANNEL_AGE_VERIFY:
        case d.A5.GUILD_LARGE_SERVER:
            return (0, t.jsx)(A.A, { onAgree: N, onDisagree: r, modalType: s, ...f });
        default:
            return (0, t.jsx)(A.A, { onAgree: x, onDisagree: r, modalType: s, ...f });
    }
}
let f = function (e) {
    let { guild: l, channelId: n, className: s } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            let { current: e } = c;
            e?.scrollToBottom();
        }, []),
        (0, t.jsx)(r.Ch, {
            ref: c,
            className: x.X,
            children: (0, t.jsx)("div", {
                className: a()(s, x.i),
                children: (0, t.jsx)(N, { guild: l, channelId: n }),
            }),
        })
    );
};
