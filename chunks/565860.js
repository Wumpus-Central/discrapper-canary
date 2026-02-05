n.d(t, { jP: () => u }), n(346084);
var l = n(696451),
    i = n(994500),
    s = n(240248),
    r = n(427262);
function a(e) {
    return (0, s.sS)(e.toLocaleLowerCase()).trim();
}
function u(e) {
    let t = {},
        n = i.A.getNickname(e.id);
    null != n && (t[n] = a(n).split(" "));
    let s = r.Ay.getGlobalName(e);
    return (
        null != s && null == t[s] && (t[s] = a(s).split(" ")),
        (t[e.username] = a(e.username).split(" ")),
        l.Ay.getNicknames(e.id).forEach((e) => {
            null == t[e] && (t[e] = a(e).split(" "));
        }),
        { names: t, nick: n }
    );
}
n(652215);
