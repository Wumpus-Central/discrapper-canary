n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(192308),
    r = n(990078),
    o = n(765178),
    d = n(231483),
    c = n(964486),
    u = n(544231),
    h = n(338510),
    A = n(151119),
    _ = n(278941),
    m = n(665909),
    g = n(186111),
    p = n(58736),
    f = n(327337),
    E = n(985018);
let x = l.memo(function (e) {
    let { channel: t } = e,
        x = (0, h.u)(t.id),
        I = (0, A.S)(t.id),
        C = (0, _.e)(t.id),
        b = (0, a.useHasAnyModalOpen)(),
        N = (0, s.bG)([g.A], () => g.A.hasLayers()),
        S = l.useCallback(
            () => (I ? E.intl.string(E.t["16QyDv"]) : null != C ? E.intl.string(E.t.kCN9i0) : null),
            [I, C],
        ),
        v = l.useMemo(() => (I || null != C) && !b && !N, [I, C, b, N]),
        [T, y] = l.useState(S());
    l.useEffect(() => {
        null != C &&
            null != x &&
            (o.O.announce(E.intl.string(E.t.acsXuG)),
            setTimeout(() => {
                (0, u.xi)(t.id, [C.id]);
            }, 5e3),
            (0, m.QF)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: C.id,
                warningType: C.type,
                isNudgeWarning: null != C,
                viewName: m.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            I &&
                (o.O.announce(E.intl.string(E.t["1dxCqG"])),
                setTimeout(() => {
                    (0, u.bg)(t.id);
                }, 5e3));
    }, [t, C, x, I]),
        (0, c.Ay)(() => {
            null != x &&
                (0, m.QF)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: x.id,
                    warningType: x.type,
                    isNudgeWarning: null != C,
                    viewName: m.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        l.useEffect(() => {
            let e = S();
            null != e && y(e);
        }, [I, C, S]);
    let j = l.useCallback(() => {
        null != C && (0, u.xi)(t.id, [C.id]),
            null != x &&
                ((0, a.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("45033"), n.e("46717"), n.e("12115")]).then(
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
                    { modalKey: f.V },
                ),
                (0, m._$)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: x.id,
                    warningType: x.type,
                    cta: m.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != C,
                }));
    }, [C, x, t]);
    return null == x
        ? null
        : (0, i.jsx)(r.m, {
              forceOpen: v,
              text: T,
              position: "bottom",
              children: (0, i.jsx)(p.Ay.Icon, {
                  icon: d.l,
                  onClick: j,
                  tooltip: E.intl.string(E.t.rpc2qv),
                  tooltipDisabled: null != C,
              }),
          });
});
