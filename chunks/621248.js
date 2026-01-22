n.d(t, {
    J: () => i,
    x: () => l,
});
var r = n(73153);
function i(e) {
    r.h.dispatch({
        type: "PUBLIC_UPSELL_NOTICE_DISMISS",
        guildId: e,
    });
}
function l(e) {
    r.h.dispatch({
        type: "MAX_MEMBER_COUNT_NOTICE_DISMISS",
        guildId: e,
    });
}
