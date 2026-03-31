n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(192308),
    r = n(435371),
    o = n(397927),
    c = n(964486),
    d = n(544231),
    u = n(338510),
    h = n(151119),
    A = n(278941),
    _ = n(665909),
    m = n(186111),
    g = n(58736),
    p = n(327337),
    f = n(985018);
let x = l.memo(function (e) {
    let { channel: t } = e,
        x = (0, u.u)(t.id),
        E = (0, h.S)(t.id),
        I = (0, A.e)(t.id),
        C = (0, a.useHasAnyModalOpen)(),
        N = (0, s.bG)([m.A], () => m.A.hasLayers()),
        T = l.useCallback(
            () => (E ? f.intl.string(f.t["16QyDv"]) : null != I ? f.intl.string(f.t.kCN9i0) : null),
            [E, I],
        ),
        S = l.useMemo(() => (E || null != I) && !C && !N, [E, I, C, N]),
        [b, y] = l.useState(T());
    l.useEffect(() => {
        null != I &&
            null != x &&
            (o.ORC.announce(f.intl.string(f.t.acsXuG)),
            setTimeout(() => {
                (0, d.xi)(t.id, [I.id]);
            }, 5e3),
            (0, _.QF)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: I.id,
                warningType: I.type,
                isNudgeWarning: null != I,
                viewName: _.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            E &&
                (o.ORC.announce(f.intl.string(f.t["1dxCqG"])),
                setTimeout(() => {
                    (0, d.bg)(t.id);
                }, 5e3));
    }, [t, I, x, E]),
        (0, c.Ay)(() => {
            null != x &&
                (0, _.QF)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: x.id,
                    warningType: x.type,
                    isNudgeWarning: null != I,
                    viewName: _.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        l.useEffect(() => {
            let e = T();
            null != e && y(e);
        }, [E, I, T]);
    let v = l.useCallback(() => {
        null != I && (0, d.xi)(t.id, [I.id]),
            null != x &&
                ((0, o.mMO)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("45033"), n.e("46717"), n.e("88331")]).then(
                            n.bind(n, 788099),
                        );
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
                    { modalKey: p.V },
                ),
                (0, _._$)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: x.id,
                    warningType: x.type,
                    cta: _.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != I,
                }));
    }, [I, x, t]);
    return null == x
        ? null
        : (0, i.jsx)(r.m_, {
              forceOpen: S,
              text: b,
              position: "bottom",
              children: (0, i.jsx)(g.Ay.Icon, {
                  icon: o.lmn,
                  onClick: v,
                  tooltip: f.intl.string(f.t.rpc2qv),
                  tooltipDisabled: null != I,
              }),
          });
});
