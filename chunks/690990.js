"use strict";
i.d(t, { b: () => d });
var n = i(627968),
    r = i(64700),
    a = i(192308),
    l = i(308528),
    s = i(267102),
    o = i(964404),
    c = i(652215);
function d(e) {
    let { userId: t, onClose: d } = e,
        u = (0, s.aL)(),
        _ = r.useCallback(() => {
            l.A.openPrivateChannel({ recipientIds: t, joinCall: !0 }),
                d?.(),
                u.dispatch(c.jej.POPOUT_CLOSE),
                (0, a.closeAllModals)();
        }, [t, u, d]),
        p = r.useCallback(() => {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await i.e("19106").then(i.bind(i, 279673));
                return (t) => (0, n.jsx)(e, { onSubmit: _, ...t });
            });
        }, [_]),
        h = r.useCallback(() => {
            o.Ay.disableCallUserConfirmationPrompt ? _() : p();
        }, [p, _]);
    return { startCall: _, runVoiceCallAction: h };
}
