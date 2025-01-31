n.d(t, {
    M: () => r,
    s: () => l
});
var i = n(570140);
function l(e) {
    i.Z.dispatch({
        type: 'VOICE_CATEGORY_EXPAND',
        guildId: e,
        expand: !0
    });
}
function r(e) {
    i.Z.dispatch({
        type: 'VOICE_CATEGORY_COLLAPSE',
        guildId: e,
        expand: !1
    });
}
