n.d(t, { _: () => g });
var i = n(627968),
    l = n(64700),
    a = n(731738),
    s = n(311907),
    r = n(397927),
    o = n(831062),
    c = n(994500),
    d = n(544231),
    u = n(349435),
    h = n(665909),
    m = n(576045),
    A = n(327337),
    p = n(985018);
function g(e) {
    let { channelId: t, warningId: g, senderId: f } = e,
        _ = l.useCallback(() => {
            (0, d.xi)(t, [g]);
        }, [t, g]),
        E = (0, s.bG)([c.A], () => c.A.isBlocked(f)),
        C = l.useMemo(
            () => ({ channelId: t, warningId: g, senderId: f, warningType: u._j.INAPPROPRIATE_CONVERSATION_TIER_2 }),
            [t, g, f],
        );
    l.useEffect(() => {
        (0, h.QF)({ ...C, viewName: h.gN.SAFETY_WARNING_BANNER }), o.A.increment({ name: a.K.SAFETY_WARNING_VIEW });
    }, [C]);
    let x = l.useCallback(
            (e) => {
                (0, h._$)({ ...C, cta: e });
            },
            [C],
        ),
        S = l.useCallback(() => {
            (0, r.mMO)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("43549"),
                        n.e("45033"),
                        n.e("46717"),
                        n.e("76850"),
                    ]).then(n.bind(n, 788099));
                    return (n) => {
                        let { transitionState: l, onClose: a } = n;
                        return (0, i.jsx)(e, {
                            otherUserId: f,
                            channelId: t,
                            warningId: g,
                            warningType: u._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: l,
                            onClose: a,
                        });
                    };
                },
                { modalKey: A.V },
            ),
                x(h.Wm.USER_BANNER_OPEN_SAFETY_TOOLS);
        }, [t, f, g, x]),
        T = l.useCallback(() => {
            _(), x(h.Wm.USER_BANNER_BLOCK_CONFIRM);
        }, [_, x]),
        I = l.useCallback(() => {
            _(), x(h.Wm.USER_BANNER_BLOCK_AND_REPORT_CONFIRM);
        }, [_, x]),
        N = l.useCallback(() => {
            (0, r.mMO)(async () => {
                let { default: e } = await n.e("84938").then(n.bind(n, 371185));
                return (n) => {
                    let { transitionState: l, onClose: a } = n;
                    return (0, i.jsx)(e, {
                        transitionState: l,
                        onBlock: T,
                        onBlockAndReport: I,
                        onCancel: () => {
                            a?.(), x(h.Wm.USER_BANNER_BLOCK_CANCEL);
                        },
                        onClose: a,
                        userId: f,
                        channelId: t,
                    });
                };
            });
        }, [T, I, f, t, x]);
    return (0, i.jsx)(m.N, {
        channelId: t,
        warningId: g,
        senderId: f,
        warningType: u._j.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: p.intl.string(p.t.ZzlB5p),
        description: p.intl.string(p.t["D1aU+h"]),
        onDismiss: _,
        buttons: [
            { text: p.intl.string(p.t.Qyu4UK), variant: "primary", onClick: S },
            ...(E ? [] : [{ text: p.intl.string(p.t["7q0bNY"]), variant: "secondary", onClick: N }]),
        ],
    });
}
