t.d(n, { A: () => p });
var l = t(477900),
    i = t(582128),
    a = t(503698),
    s = t.n(a),
    r = t(689175),
    c = t(66834),
    o = t(379257),
    u = t(306537),
    d = t(323073),
    h = t(506164),
    g = t(105292),
    A = t(814316);
function m(e) {
    let { guild: n, channelId: t } = e,
        { modalType: a, emphasiseDisagree: s, ...r } = (0, d.k$)(n),
        A = i.useCallback(() => {
            null != n && c.A.nsfwReturnToSafety(n.id);
        }, [n]),
        m = i.useCallback(() => {
            null != n && c.A.nsfwAgree(n.id);
        }, [n]),
        p = i.useCallback(() => {
            o.A.showAgeVerificationGetStartedModal({ entryPoint: u.q1.NSFW_GUILD });
        }, []),
        j = {
            ...r,
            guildId: n?.id,
            channelId: t,
            disagreement: g.intl.string(g.t["/g10LC"]),
            "data-testid": `age-gate-${a}`,
        };
    switch (a) {
        case u.A5.NSFW_CHANNEL_AGE_VERIFY:
        case u.A5.GUILD_LARGE_SERVER:
            return (0, l.jsx)(h.A, {
                onAgree: p,
                onDisagree: A,
                modalType: a,
                agreementButtonVariant: !0 === s ? "secondary" : "primary",
                disagreementButtonVariant: !0 === s ? "primary" : "secondary",
                ...j,
            });
        default:
            return (0, l.jsx)(h.A, { onAgree: m, onDisagree: A, modalType: a, ...j });
    }
}
let p = function (e) {
    let { guild: n, channelId: t, className: a } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            let { current: e } = c;
            e?.scrollToBottom();
        }, []),
        (0, l.jsx)(r.Ch, {
            ref: c,
            className: A.X,
            children: (0, l.jsx)("div", {
                className: s()(a, A.i),
                children: (0, l.jsx)(m, { guild: n, channelId: t }),
            }),
        })
    );
};
