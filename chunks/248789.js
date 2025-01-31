n.d(t, { Y: () => g }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(286379),
    r = n(442837),
    s = n(481060),
    o = n(797614),
    c = n(699516),
    d = n(378298),
    u = n(359119),
    h = n(473092),
    p = n(177342),
    m = n(134612),
    f = n(388032);
function g(e) {
    let { channelId: t, warningId: g, senderId: _ } = e,
        C = l.useCallback(() => {
            (0, d.T)(t, [g]);
        }, [t, g]),
        x = (0, r.e7)([c.Z], () => c.Z.isBlocked(_)),
        v = l.useMemo(
            () => ({
                channelId: t,
                warningId: g,
                senderId: _,
                warningType: u.pj.INAPPROPRIATE_CONVERSATION_TIER_2
            }),
            [t, g, _]
        );
    l.useEffect(() => {
        (0, h.KQ)({
            ...v,
            viewName: h.pb.SAFETY_WARNING_BANNER
        }),
            o.Z.increment({ name: a.V.SAFETY_WARNING_VIEW });
    }, [v]);
    let E = l.useCallback(
            (e) => {
                (0, h.qc)({
                    ...v,
                    cta: e
                });
            },
            [v]
        ),
        I = l.useCallback(() => {
            (0, s.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('49508'), n.e('89650')]).then(n.bind(n, 611446));
                    return (n) => {
                        let { transitionState: l, onClose: a } = n;
                        return (0, i.jsx)(e, {
                            otherUserId: _,
                            channelId: t,
                            warningId: g,
                            warningType: u.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: l,
                            onClose: a
                        });
                    };
                },
                { modalKey: m.X_ }
            ),
                E(h.NM.USER_BANNER_OPEN_SAFETY_TOOLS);
        }, [t, _, g, E]),
        b = l.useCallback(() => {
            C(), E(h.NM.USER_BANNER_BLOCK_CONFIRM);
        }, [C, E]),
        Z = l.useCallback(() => {
            C(), E(h.NM.USER_BANNER_BLOCK_AND_REPORT_CONFIRM);
        }, [C, E]),
        N = l.useCallback(() => {
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e('19538').then(n.bind(n, 699783));
                return (n) => {
                    let { transitionState: l, onClose: a } = n;
                    return (0, i.jsx)(e, {
                        transitionState: l,
                        onBlock: b,
                        onBlockAndReport: Z,
                        onCancel: () => {
                            null == a || a(), E(h.NM.USER_BANNER_BLOCK_CANCEL);
                        },
                        onClose: a,
                        userId: _,
                        channelId: t
                    });
                };
            });
        }, [b, Z, _, t, E]);
    return (0, i.jsx)(p.Q, {
        channelId: t,
        warningId: g,
        senderId: _,
        warningType: u.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: f.intl.string(f.t.ZzlB5u),
        description: f.intl.string(f.t['D1aU+v']),
        onDismiss: C,
        buttons: [
            {
                text: f.intl.string(f.t.Qyu4UF),
                color: s.zxk.Colors.BRAND,
                onclick: I
            },
            ...(x
                ? []
                : [
                      {
                          text: f.intl.string(f.t['7q0bNT']),
                          color: s.zxk.Colors.PRIMARY,
                          onclick: N
                      }
                  ])
        ]
    });
}
