n.d(t, {
    Y: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(286379),
    a = n(442837),
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
    let { channelId: t, warningId: g, senderId: C } = e,
        x = l.useCallback(() => {
            (0, d.T)(t, [g]);
        }, [t, g]),
        v = (0, a.e7)([c.Z], () => c.Z.isBlocked(C)),
        _ = l.useMemo(
            () => ({
                channelId: t,
                warningId: g,
                senderId: C,
                warningType: u.pj.INAPPROPRIATE_CONVERSATION_TIER_2
            }),
            [t, g, C]
        );
    l.useEffect(() => {
        (0, h.KQ)({
            ..._,
            viewName: h.pb.SAFETY_WARNING_BANNER
        }),
            o.Z.increment({ name: r.V.SAFETY_WARNING_VIEW });
    }, [_]);
    let I = l.useCallback(
            (e) => {
                (0, h.qc)({
                    ..._,
                    cta: e
                });
            },
            [_]
        ),
        E = l.useCallback(() => {
            (0, s.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('37229'), n.e('89650')]).then(n.bind(n, 611446));
                    return (n) => {
                        let { transitionState: l, onClose: r } = n;
                        return (0, i.jsx)(e, {
                            otherUserId: C,
                            channelId: t,
                            warningId: g,
                            warningType: u.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: l,
                            onClose: r
                        });
                    };
                },
                { modalKey: m.X_ }
            ),
                I(h.NM.USER_BANNER_OPEN_SAFETY_TOOLS);
        }, [t, C, g, I]),
        b = l.useCallback(() => {
            x(), I(h.NM.USER_BANNER_BLOCK_CONFIRM);
        }, [x, I]),
        Z = l.useCallback(() => {
            x(), I(h.NM.USER_BANNER_BLOCK_AND_REPORT_CONFIRM);
        }, [x, I]),
        N = l.useCallback(() => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await n.e('19538').then(n.bind(n, 699783));
                return (n) => {
                    let { transitionState: l, onClose: r } = n;
                    return (0, i.jsx)(e, {
                        transitionState: l,
                        onBlock: b,
                        onBlockAndReport: Z,
                        onCancel: () => {
                            null == r || r(), I(h.NM.USER_BANNER_BLOCK_CANCEL);
                        },
                        onClose: r,
                        userId: C,
                        channelId: t
                    });
                };
            });
        }, [b, Z, C, t, I]);
    return (0, i.jsx)(p.Q, {
        channelId: t,
        warningId: g,
        senderId: C,
        warningType: u.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: f.intl.string(f.t.ZzlB5u),
        description: f.intl.string(f.t['D1aU+v']),
        onDismiss: x,
        buttons: [
            {
                text: f.intl.string(f.t.Qyu4UF),
                color: s.Button.Colors.BRAND,
                onclick: E
            },
            ...(v
                ? []
                : [
                      {
                          text: f.intl.string(f.t['7q0bNT']),
                          color: s.Button.Colors.PRIMARY,
                          onclick: N
                      }
                  ])
        ]
    });
}
