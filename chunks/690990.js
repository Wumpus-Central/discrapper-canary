n.d(t, { b: () => u });
var i = n(627968),
    l = n(64700),
    a = n(192308),
    r = n(308528),
    d = n(267102),
    o = n(964404),
    s = n(652215);
function u(e) {
    let { userId: t, onClose: u } = e,
        c = (0, d.aL)(),
        A = l.useCallback(() => {
            r.A.openPrivateChannel({ recipientIds: t, joinCall: !0 }),
                u?.(),
                c.dispatch(s.jej.POPOUT_CLOSE),
                (0, a.closeAllModals)();
        }, [t, c, u]),
        g = l.useCallback(() => {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await n.e("19106").then(n.bind(n, 279673));
                return (t) => (0, i.jsx)(e, { onSubmit: A, ...t });
            });
        }, [A]),
        f = l.useCallback(() => {
            o.Ay.disableCallUserConfirmationPrompt ? A() : g();
        }, [g, A]);
    return { startCall: A, runVoiceCallAction: f };
}
