n.d(t, { Z: () => s });
var i = n(442837),
    l = n(314897),
    r = n(944486),
    a = n(88751);
function s(e) {
    return (0, i.e7)(
        [l.default, r.Z, a.ZP],
        () => {
            let t = l.default.getId();
            return r.Z.getVoiceChannelId() === e ? a.ZP.getPermissionsForUser(t, e) : null;
        },
        [e]
    );
}
