n.d(t, { A: () => f });
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
    g = n(665909),
    m = n(186111),
    p = n(58736),
    _ = n(327337),
    x = n(985018);
let f = l.memo(function (e) {
    let { channel: t } = e,
        f = (0, u.u)(t.id),
        E = (0, h.S)(t.id),
        C = (0, A.e)(t.id),
        I = (0, a.useHasAnyModalOpen)(),
        S = (0, s.bG)([m.A], () => m.A.hasLayers()),
        b = l.useCallback(
            () => (E ? x.intl.string(x.t["16QyDv"]) : null != C ? x.intl.string(x.t.kCN9i0) : null),
            [E, C],
        ),
        N = l.useMemo(() => (E || null != C) && !I && !S, [E, C, I, S]),
        [T, j] = l.useState(b());
    l.useEffect(() => {
        null != C &&
            null != f &&
            (o.ORC.announce(x.intl.string(x.t.acsXuG)),
            setTimeout(() => {
                (0, c.xi)(t.id, [C.id]);
            }, 5e3),
            (0, g.QF)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: C.id,
                warningType: C.type,
                isNudgeWarning: null != C,
                viewName: g.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            E &&
                (o.ORC.announce(x.intl.string(x.t["1dxCqG"])),
                setTimeout(() => {
                    (0, c.bg)(t.id);
                }, 5e3));
    }, [t, C, f, E]),
        (0, d.Ay)(() => {
            null != f &&
                (0, g.QF)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: f.id,
                    warningType: f.type,
                    isNudgeWarning: null != C,
                    viewName: g.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        l.useEffect(() => {
            let e = b();
            null != e && j(e);
        }, [E, C, b]);
    let v = l.useCallback(() => {
        null != C && (0, c.xi)(t.id, [C.id]),
            null != f &&
                ((0, o.mMO)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("45033"), n.e("46717"), n.e("13693")]).then(
                            n.bind(n, 788099),
                        );
                        return (n) => {
                            let { onClose: l, transitionState: s } = n;
                            return (0, i.jsx)(e, {
                                otherUserId: t.getRecipientId(),
                                channelId: t.id,
                                warningId: f.id,
                                warningType: f.type,
                                onClose: l,
                                transitionState: s,
                            });
                        };
                    },
                    { modalKey: _.V },
                ),
                (0, g._$)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: f.id,
                    warningType: f.type,
                    cta: g.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != C,
                }));
    }, [C, f, t]);
    return null == f
        ? null
        : (0, i.jsx)(r.m_, {
              forceOpen: N,
              text: T,
              position: "bottom",
              children: (0, i.jsx)(p.Ay.Icon, {
                  icon: o.lmn,
                  onClick: v,
                  tooltip: x.intl.string(x.t.rpc2qv),
                  tooltipDisabled: null != C,
              }),
          });
});
