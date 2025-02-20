n.d(t, { Z: () => a });
var r = n(442837),
    i = n(314897),
    l = n(944486),
    o = n(88751);
function a(e) {
    return (0, r.e7)(
        [i.default, l.Z, o.ZP],
        () => {
            let t = i.default.getId();
            return l.Z.getVoiceChannelId() === e ? o.ZP.getPermissionsForUser(t, e) : null;
        },
        [e]
    );
}
