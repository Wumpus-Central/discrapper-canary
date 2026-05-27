t.d(e, { A: () => C });
var l = t(627968),
    i = t(17928),
    a = t(477782),
    d = t(64700),
    r = t(192308),
    s = t(308528),
    o = t(267102),
    u = t(742023),
    c = t(652215),
    A = t(495544),
    b = t(734057),
    p = t(994500),
    k = t(309010),
    f = t(375708);
function C(n) {
    let { user: e, context: C } = n,
        m = (0, i.bG)([A.default], () => A.default.getId() === e.id),
        h = (0, i.bG)([p.A], () => p.A.isBlocked(e.id)),
        v = (0, i.bG)([k.A, b.A], () => k.A.getVoiceChannelId() === b.A.getDMFromUserId(e.id)),
        { runVoiceCallAction: y } = (function (n) {
            let { userId: e, onClose: i } = n,
                a = (0, o.aL)(),
                A = d.useCallback(() => {
                    s.A.openPrivateChannel({ recipientIds: e, joinCall: !0 }),
                        i?.(),
                        a.dispatch(c.jej.POPOUT_CLOSE),
                        (0, r.closeAllModals)();
                }, [e, a, i]),
                b = d.useCallback(() => {
                    (0, r.openModalLazy)(async () => {
                        let { default: n } = await t.e("19106").then(t.bind(t, 279673));
                        return (e) => (0, l.jsx)(n, { onSubmit: A, ...e });
                    });
                }, [A]),
                p = d.useCallback(() => {
                    u.Ay.disableCallUserConfirmationPrompt ? A() : b();
                }, [b, A]);
            return { startCall: A, runVoiceCallAction: p };
        })({ userId: e.id });
    return m || C === c.BRT.POPOUT || v || e.bot || e.isProvisional
        ? null
        : (0, l.jsx)(a.Dr, { id: "call", label: f.intl.string(f.t["ZeP+kK"]), action: y, disabled: h });
}
