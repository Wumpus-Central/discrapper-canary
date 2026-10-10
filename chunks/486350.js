E.d(t, { p: () => s, q: () => _ });
var h = E(73153),
    i = E(820672);
function s(p) {
    (h.h.dispatch({ type: "STREAM_REQUEST_COOLDOWN_START", userId: p }),
        setTimeout(() => {
            h.h.dispatch({ type: "STREAM_REQUEST_COOLDOWN_END", userId: p });
        }, i.e));
}
function _(p) {
    h.h.dispatch({ type: "STREAM_REQUEST_REMINDER_DISMISS", messageId: p });
}
