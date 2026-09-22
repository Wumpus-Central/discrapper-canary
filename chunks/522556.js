l.d(n, { A: () => x });
var t = l(477900),
    i = l(582128),
    a = l(503698),
    s = l.n(a),
    r = l(689175),
    c = l(66834),
    d = l(379257),
    u = l(306537),
    o = l(323073),
    A = l(506164),
    g = l(375708),
    h = l(814316);
function m(e) {
    let { guild: n, channelId: l } = e,
        { modalType: a, emphasiseDisagree: s, ...r } = (0, o.k$)(n),
        h = i.useCallback(() => {
            null != n && c.A.nsfwReturnToSafety(n.id);
        }, [n]),
        m = i.useCallback(() => {
            null != n && c.A.nsfwAgree(n.id);
        }, [n]),
        x = i.useCallback(() => {
            d.A.showAgeVerificationGetStartedModal({ entryPoint: u.q1.NSFW_GUILD });
        }, []),
        f = {
            ...r,
            guildId: n?.id,
            channelId: l,
            disagreement: g.intl.string(g.t["/g10LC"]),
            "data-testid": `age-gate-${a}`,
        };
    switch (a) {
        case u.A5.NSFW_CHANNEL_AGE_VERIFY:
        case u.A5.GUILD_LARGE_SERVER:
            return (0, t.jsx)(A.A, {
                onAgree: x,
                onDisagree: h,
                modalType: a,
                agreementButtonVariant: !0 === s ? "secondary" : "primary",
                disagreementButtonVariant: !0 === s ? "primary" : "secondary",
                ...f,
            });
        default:
            return (0, t.jsx)(A.A, { onAgree: m, onDisagree: h, modalType: a, ...f });
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
            className: h.X,
            children: (0, t.jsx)("div", {
                className: s()(a, h.i),
                children: (0, t.jsx)(m, { guild: n, channelId: l }),
            }),
        })
    );
};
