n.d(t, { Z: () => o });
var r = n(442837),
    i = n(314897),
    l = n(88751);
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, r.cj)(
        [l.ZP, i.default],
        () => {
            let n = i.default.getId();
            return l.ZP.getPermissionsForUser(n, e, t);
        },
        [e, t]
    );
}
