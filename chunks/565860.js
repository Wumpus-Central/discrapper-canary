n.d(t, { jP: () => u }), n(346084);
var l = n(696451),
    i = n(994500),
    r = n(240248),
    s = n(427262);
function a(e) {
    return (0, r.sS)(e.toLocaleLowerCase()).trim();
}
function u(e) {
    let t = {},
        n = i.A.getNickname(e.id);
    null != n && (t[n] = a(n).split(" "));
    let r = s.Ay.getGlobalName(e);
    return (
        null != r && null == t[r] && (t[r] = a(r).split(" ")),
        (t[e.username] = a(e.username).split(" ")),
        l.Ay.getNicknames(e.id).forEach((e) => {
            null == t[e] && (t[e] = a(e).split(" "));
        }),
        { names: t, nick: n }
    );
}
n(652215);
