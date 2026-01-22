n.d(t, { A: () => y }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(192308),
    s = n(435371),
    o = n(397927),
    c = n(964486),
    u = n(544231),
    d = n(338510),
    f = n(151119),
    p = n(278941),
    h = n(665909),
    b = n(186111),
    g = n(58736),
    m = n(327337),
    A = n(985018);
let y = l.memo(function (e) {
    let { channel: t } = e,
        y = (0, d.u)(t.id),
        O = (0, f.S)(t.id),
        j = (0, p.e)(t.id),
        v = (0, a.useHasAnyModalOpen)(),
        x = (0, i.bG)([b.A], () => b.A.hasLayers()),
        E = l.useCallback(
            () => (O ? A.intl.string(A.t["16QyDv"]) : null != j ? A.intl.string(A.t.kCN9i0) : null),
            [O, j],
        ),
        _ = l.useMemo(() => (O || null != j) && !v && !x, [O, j, v, x]),
        [C, S] = l.useState(E());
    l.useEffect(() => {
        null != j &&
            null != y &&
            (o.ORC.announce(A.intl.string(A.t.acsXuG)),
            setTimeout(() => {
                (0, u.xi)(t.id, [j.id]);
            }, 5000),
            (0, h.QF)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: j.id,
                warningType: j.type,
                isNudgeWarning: null != j,
                viewName: h.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            O &&
                (o.ORC.announce(A.intl.string(A.t["1dxCqG"])),
                setTimeout(() => {
                    (0, u.bg)(t.id);
                }, 5000));
    }, [t, j, y, O]),
        (0, c.Ay)(() => {
            null != y &&
                (0, h.QF)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: y.id,
                    warningType: y.type,
                    isNudgeWarning: null != j,
                    viewName: h.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        l.useEffect(() => {
            let e = E();
            null != e && S(e);
        }, [O, j, E]);
    let I = l.useCallback(() => {
        null != j && (0, u.xi)(t.id, [j.id]),
            null != y &&
                ((0, o.mMO)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("45033"), n.e("46717"), n.e("13693")]).then(
                            n.bind(n, 788099),
                        );
                        return (n) => {
                            let { onClose: l, transitionState: i } = n;
                            return (0, r.jsx)(e, {
                                otherUserId: t.getRecipientId(),
                                channelId: t.id,
                                warningId: y.id,
                                warningType: y.type,
                                onClose: l,
                                transitionState: i,
                            });
                        };
                    },
                    { modalKey: m.V },
                ),
                (0, h._$)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: y.id,
                    warningType: y.type,
                    cta: h.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != j,
                }));
    }, [j, y, t]);
    return null == y
        ? null
        : (0, r.jsx)(s.m_, {
              forceOpen: _,
              text: C,
              position: "bottom",
              children: (0, r.jsx)(g.Ay.Icon, {
                  icon: o.lmn,
                  onClick: I,
                  tooltip: A.intl.string(A.t.rpc2qv),
                  tooltipDisabled: null != j,
              }),
          });
});
