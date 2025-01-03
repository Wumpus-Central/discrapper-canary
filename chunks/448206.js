n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(442837),
    r = n(314897),
    l = n(944486),
    a = n(88751);
function s(e) {
    return (0, i.e7)(
        [r.default, l.Z, a.ZP],
        () => {
            let t = r.default.getId();
            return l.Z.getVoiceChannelId() === e ? a.ZP.getPermissionsForUser(t, e) : null;
        },
        [e]
    );
}
