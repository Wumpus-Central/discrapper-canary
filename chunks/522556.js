n.d(l, { A: () => j });
var t = n(477900),
    i = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(689175),
    c = n(66834),
    u = n(379257),
    d = n(847599),
    o = n(931374),
    A = n(323073),
    h = n(506164),
    g = n(204925),
    m = n(375708),
    x = n(814316);
function f(e) {
    let { guild: l, channelId: n } = e,
        { modalType: a, ...s } = (0, A.k$)(l),
        r = i.useCallback(() => {
            null != l && c.A.nsfwReturnToSafety(l.id);
        }, [l]),
        x = i.useCallback(() => {
            null != l && c.A.nsfwAgree(l.id);
        }, [l]),
        f = i.useCallback(() => {
            u.A.showAgeVerificationGetStartedModal({ entryPoint: d.q1.NSFW_GUILD });
        }, []);
    (0, o.I7)(g.w_.NSFW_SERVER);
    let j = { ...s, guildId: l?.id, channelId: n, disagreement: m.intl.string(m.t["/g10LC"]) };
    switch (a) {
        case d.A5.NSFW_CHANNEL_AGE_VERIFY:
        case d.A5.GUILD_LARGE_SERVER:
            return (0, t.jsx)(h.A, { onAgree: f, onDisagree: r, modalType: a, ...j });
        default:
            return (0, t.jsx)(h.A, { onAgree: x, onDisagree: r, modalType: a, ...j });
    }
}
let j = function (e) {
    let { guild: l, channelId: n, className: a } = e,
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
                className: s()(a, x.i),
                children: (0, t.jsx)(f, { guild: l, channelId: n }),
            }),
        })
    );
};
