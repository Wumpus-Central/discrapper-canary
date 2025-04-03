n.d(t, { Z: () => o });
var r = n(442837),
    i = n(314897),
    l = n(944486),
    a = n(88751);
function o(e) {
    return (0, r.e7)(
        [i.default, l.Z, a.ZP],
        () => {
            let t = i.default.getId();
            return l.Z.getVoiceChannelId() === e ? a.ZP.getPermissionsForUser(t, e) : null;
        },
        [e]
    );
}
