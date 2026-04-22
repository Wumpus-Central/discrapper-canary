n.d(t, { _: () => p });
var i = n(627968),
    l = n(64700),
    a = n(731738),
    s = n(311907),
    r = n(192308),
    o = n(831062),
    c = n(994500),
    d = n(544231),
    u = n(349435),
    h = n(665909),
    m = n(576045),
    A = n(327337),
    g = n(985018);
function p(e) {
    let { channelId: t, warningId: p, senderId: _ } = e,
        f = l.useCallback(() => {
            (0, d.xi)(t, [p]);
        }, [t, p]),
        E = (0, s.bG)([c.A], () => c.A.isBlocked(_)),
        C = l.useMemo(
            () => ({ channelId: t, warningId: p, senderId: _, warningType: u._j.INAPPROPRIATE_CONVERSATION_TIER_2 }),
            [t, p, _],
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
            (0, r.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("45033"), n.e("46717"), n.e("64121")]).then(
                        n.bind(n, 788099),
                    );
                    return (n) => {
                        let { transitionState: l, onClose: a } = n;
                        return (0, i.jsx)(e, {
                            otherUserId: _,
                            channelId: t,
                            warningId: p,
                            warningType: u._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: l,
                            onClose: a,
                        });
                    };
                },
                { modalKey: A.V },
            ),
                x(h.Wm.USER_BANNER_OPEN_SAFETY_TOOLS);
        }, [t, _, p, x]),
        I = l.useCallback(() => {
            f(), x(h.Wm.USER_BANNER_BLOCK_CONFIRM);
        }, [f, x]),
        N = l.useCallback(() => {
            f(), x(h.Wm.USER_BANNER_BLOCK_AND_REPORT_CONFIRM);
        }, [f, x]),
        v = l.useCallback(() => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e("84938").then(n.bind(n, 371185));
                return (n) => {
                    let { transitionState: l, onClose: a } = n;
                    return (0, i.jsx)(e, {
                        transitionState: l,
                        onBlock: I,
                        onBlockAndReport: N,
                        onCancel: () => {
                            a?.(), x(h.Wm.USER_BANNER_BLOCK_CANCEL);
                        },
                        onClose: a,
                        userId: _,
                        channelId: t,
                    });
                };
            });
        }, [I, N, _, t, x]);
    return (0, i.jsx)(m.N, {
        channelId: t,
        warningId: p,
        senderId: _,
        warningType: u._j.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: g.intl.string(g.t.ZzlB5p),
        description: g.intl.string(g.t["D1aU+h"]),
        onDismiss: f,
        buttons: [
            { text: g.intl.string(g.t.Qyu4UK), variant: "primary", onClick: S },
            ...(E ? [] : [{ text: g.intl.string(g.t["7q0bNY"]), variant: "secondary", onClick: v }]),
        ],
    });
}
