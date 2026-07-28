t.d(l, { A: () => f });
var n = t(477900),
    i = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(689175),
    c = t(66834),
    u = t(31720),
    d = t(847599),
    o = t(36149),
    m = t(323073),
    A = t(506164),
    g = t(204925),
    h = t(375708),
    x = t(790801);
function N(e) {
    let { guild: l, channelId: t } = e,
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
    (0, o.I7)(g.w_.NSFW_SERVER);
    let f = { ...a, guildId: l?.id, channelId: t, disagreement: h.intl.string(h.t["/g10LC"]) };
    switch (s) {
        case d.A5.NSFW_CHANNEL_AGE_VERIFY:
        case d.A5.GUILD_LARGE_SERVER:
            return (0, n.jsx)(A.A, { onAgree: N, onDisagree: r, modalType: s, ...f });
        default:
            return (0, n.jsx)(A.A, { onAgree: x, onDisagree: r, modalType: s, ...f });
    }
}
let f = function (e) {
    let { guild: l, channelId: t, className: s } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            let { current: e } = c;
            e?.scrollToBottom();
        }, []),
        (0, n.jsx)(r.Ch, {
            ref: c,
            className: x.X,
            children: (0, n.jsx)("div", {
                className: a()(s, x.i),
                children: (0, n.jsx)(N, { guild: l, channelId: t }),
            }),
        })
    );
};
