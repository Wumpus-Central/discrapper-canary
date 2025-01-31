n.d(t, { default: () => h });
var l = n(200651),
    a = n(192379),
    o = n(704215),
    r = n(481060),
    i = n(211266),
    s = n(605236),
    c = n(624659),
    d = n(626135),
    u = n(263226),
    m = n(225634),
    x = n(981631),
    _ = n(388032);
function h(e) {
    let { transitionState: t, onClose: h, guildId: f, guildName: E } = e,
        C = (0, i.Z)(m.S);
    return (
        a.useEffect(() => {
            d.default.track(x.rMx.OPEN_MODAL, { type: 'Guild Leave Report' });
        }, []),
        (0, l.jsx)(c.Z, {
            header: _.intl.string(_.t.YT6YAA),
            body: _.intl.formatToPlainString(_.t.xpn2vL, { server: E }),
            problems: C,
            onSubmit: function (e) {
                let { problem: t, dontShowAgain: a, feedback: i } = e;
                a && (0, s.EW)(o.z.GUILD_LEAVE_FEEDBACK);
                let c = null == t;
                (0, u.Z)(f, t, i, c),
                    c ||
                        (0, r.ZDy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, l.jsx)(e, {
                                    body: _.intl.string(_.t.Gxbt29),
                                    ...t
                                });
                        });
            },
            onClose: h,
            transitionState: t,
            otherKey: m.G.OTHER,
            hasCloseButton: !0
        })
    );
}
