l.d(n, { A: () => x });
var t = l(477900),
    i = l(582128),
    a = l(503698),
    s = l.n(a),
    r = l(689175),
    c = l(66834),
    u = l(379257),
    d = l(847599),
    o = l(323073),
    A = l(506164),
    h = l(375708),
    g = l(814316);
function m(e) {
    let { guild: n, channelId: l } = e,
        { modalType: a, emphasiseDisagree: s, ...r } = (0, o.k$)(n),
        g = i.useCallback(() => {
            null != n && c.A.nsfwReturnToSafety(n.id);
        }, [n]),
        m = i.useCallback(() => {
            null != n && c.A.nsfwAgree(n.id);
        }, [n]),
        x = i.useCallback(() => {
            u.A.showAgeVerificationGetStartedModal({ entryPoint: d.q1.NSFW_GUILD });
        }, []),
        f = { ...r, guildId: n?.id, channelId: l, disagreement: h.intl.string(h.t["/g10LC"]) };
    switch (a) {
        case d.A5.NSFW_CHANNEL_AGE_VERIFY:
        case d.A5.GUILD_LARGE_SERVER:
            return (0, t.jsx)(A.A, {
                onAgree: x,
                onDisagree: g,
                modalType: a,
                agreementButtonVariant: !0 === s ? "secondary" : "primary",
                disagreementButtonVariant: !0 === s ? "primary" : "secondary",
                ...f,
            });
        default:
            return (0, t.jsx)(A.A, { onAgree: m, onDisagree: g, modalType: a, ...f });
    }
}
let x = function (e) {
    let { guild: n, channelId: l, className: a } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            let { current: e } = c;
            e?.scrollToBottom();
        }, []),
        (0, t.jsx)(r.Ch, {
            ref: c,
            className: g.X,
            children: (0, t.jsx)("div", {
                className: s()(a, g.i),
                children: (0, t.jsx)(m, { guild: n, channelId: l }),
            }),
        })
    );
};
