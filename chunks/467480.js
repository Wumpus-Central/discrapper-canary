"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(192308),
    a = n(435371),
    o = n(397927),
    c = n(964486),
    d = n(544231),
    u = n(338510),
    h = n(151119),
    A = n(278941),
    p = n(665909),
    g = n(186111),
    m = n(58736),
    _ = n(327337),
    f = n(985018);
let x = s.memo(function (e) {
    let { channel: t } = e,
        x = (0, u.u)(t.id),
        C = (0, h.S)(t.id),
        E = (0, A.e)(t.id),
        I = (0, r.useHasAnyModalOpen)(),
        b = (0, l.bG)([g.A], () => g.A.hasLayers()),
        N = s.useCallback(
            () => (C ? f.intl.string(f.t["16QyDv"]) : null != E ? f.intl.string(f.t.kCN9i0) : null),
            [C, E],
        ),
        S = s.useMemo(() => (C || null != E) && !I && !b, [C, E, I, b]),
        [T, v] = s.useState(N());
    s.useEffect(() => {
        null != E &&
            null != x &&
            (o.ORC.announce(f.intl.string(f.t.acsXuG)),
            setTimeout(() => {
                (0, d.xi)(t.id, [E.id]);
            }, 5e3),
            (0, p.QF)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: E.id,
                warningType: E.type,
                isNudgeWarning: null != E,
                viewName: p.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            C &&
                (o.ORC.announce(f.intl.string(f.t["1dxCqG"])),
                setTimeout(() => {
                    (0, d.bg)(t.id);
                }, 5e3));
    }, [t, E, x, C]),
        (0, c.Ay)(() => {
            null != x &&
                (0, p.QF)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: x.id,
                    warningType: x.type,
                    isNudgeWarning: null != E,
                    viewName: p.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = N();
            null != e && v(e);
        }, [C, E, N]);
    let y = s.useCallback(() => {
        null != E && (0, d.xi)(t.id, [E.id]),
            null != x &&
                ((0, o.mMO)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("45033"), n.e("46717"), n.e("86960")]).then(
                            n.bind(n, 788099),
                        );
                        return (n) => {
                            let { onClose: s, transitionState: l } = n;
                            return (0, i.jsx)(e, {
                                otherUserId: t.getRecipientId(),
                                channelId: t.id,
                                warningId: x.id,
                                warningType: x.type,
                                onClose: s,
                                transitionState: l,
                            });
                        };
                    },
                    { modalKey: _.V },
                ),
                (0, p._$)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: x.id,
                    warningType: x.type,
                    cta: p.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != E,
                }));
    }, [E, x, t]);
    return null == x
        ? null
        : (0, i.jsx)(a.m_, {
              forceOpen: S,
              text: T,
              position: "bottom",
              children: (0, i.jsx)(m.Ay.Icon, {
                  icon: o.lmn,
                  onClick: y,
                  tooltip: f.intl.string(f.t.rpc2qv),
                  tooltipDisabled: null != E,
              }),
          });
});
