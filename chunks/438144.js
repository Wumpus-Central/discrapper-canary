n.d(t, {
    M: () => l,
    s: () => i
});
var r = n(570140);
function i(e) {
    r.Z.dispatch({
        type: 'VOICE_CATEGORY_EXPAND',
        guildId: e,
        expand: !0
    });
}
function l(e) {
    r.Z.dispatch({
        type: 'VOICE_CATEGORY_COLLAPSE',
        guildId: e,
        expand: !1
    });
}
