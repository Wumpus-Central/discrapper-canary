n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(192308),
    r = n(435371),
    o = n(397927),
    d = n(964486),
    c = n(544231),
    u = n(338510),
    h = n(151119),
    A = n(278941),
    m = n(665909),
    p = n(186111),
    g = n(58736),
    _ = n(327337),
    f = n(985018);
let x = l.memo(function (e) {
    let { channel: t } = e,
        x = (0, u.u)(t.id),
        C = (0, h.S)(t.id),
        E = (0, A.e)(t.id),
        I = (0, a.useHasAnyModalOpen)(),
        b = (0, s.bG)([p.A], () => p.A.hasLayers()),
        N = l.useCallback(
            () => (C ? f.intl.string(f.t["16QyDv"]) : null != E ? f.intl.string(f.t.kCN9i0) : null),
            [C, E],
        ),
        S = l.useMemo(() => (C || null != E) && !I && !b, [C, E, I, b]),
        [T, v] = l.useState(N());
    l.useEffect(() => {
        null != E &&
            null != x &&
            (o.ORC.announce(f.intl.string(f.t.acsXuG)),
            setTimeout(() => {
                (0, c.xi)(t.id, [E.id]);
            }, 5e3),
            (0, m.QF)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: E.id,
                warningType: E.type,
                isNudgeWarning: null != E,
                viewName: m.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            C &&
                (o.ORC.announce(f.intl.string(f.t["1dxCqG"])),
                setTimeout(() => {
                    (0, c.bg)(t.id);
                }, 5e3));
    }, [t, E, x, C]),
        (0, d.Ay)(() => {
            null != x &&
                (0, m.QF)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: x.id,
                    warningType: x.type,
                    isNudgeWarning: null != E,
                    viewName: m.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        l.useEffect(() => {
            let e = N();
            null != e && v(e);
        }, [C, E, N]);
    let y = l.useCallback(() => {
        null != E && (0, c.xi)(t.id, [E.id]),
            null != x &&
                ((0, o.mMO)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("43549"),
                            n.e("45033"),
                            n.e("46717"),
                            n.e("86960"),
                        ]).then(n.bind(n, 788099));
                        return (n) => {
                            let { onClose: l, transitionState: s } = n;
                            return (0, i.jsx)(e, {
                                otherUserId: t.getRecipientId(),
                                channelId: t.id,
                                warningId: x.id,
                                warningType: x.type,
                                onClose: l,
                                transitionState: s,
                            });
                        };
                    },
                    { modalKey: _.V },
                ),
                (0, m._$)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: x.id,
                    warningType: x.type,
                    cta: m.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != E,
                }));
    }, [E, x, t]);
    return null == x
        ? null
        : (0, i.jsx)(r.m_, {
              forceOpen: S,
              text: T,
              position: "bottom",
              children: (0, i.jsx)(g.Ay.Icon, {
                  icon: o.lmn,
                  onClick: y,
                  tooltip: f.intl.string(f.t.rpc2qv),
                  tooltipDisabled: null != E,
              }),
          });
});
