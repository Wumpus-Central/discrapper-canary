"use strict";
n.d(t, { b: () => c });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(308528),
    o = n(267102),
    l = n(964404),
    u = n(652215);
function c(e) {
    let { userId: t, onClose: c } = e,
        d = (0, o.aL)(),
        _ = i.useCallback(() => {
            a.A.openPrivateChannel({ recipientIds: t, joinCall: !0 }),
                c?.(),
                d.dispatch(u.jej.POPOUT_CLOSE),
                (0, s.s7G)();
        }, [t, d, c]),
        f = i.useCallback(() => {
            (0, s.mMO)(async () => {
                let { default: e } = await n.e("19106").then(n.bind(n, 279673));
                return (t) => (0, r.jsx)(e, { onSubmit: _, ...t });
            });
        }, [_]),
        p = i.useCallback(() => {
            l.Ay.disableCallUserConfirmationPrompt ? _() : f();
        }, [f, _]);
    return { startCall: _, runVoiceCallAction: p };
}
