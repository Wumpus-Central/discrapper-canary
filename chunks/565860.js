n.d(t, {
    jP: () => s,
}),
    n(733351),
    n(747238),
    n(346084);
var i = n(696451),
    r = n(994500),
    l = n(240248),
    a = n(427262);

function o(e) {
    return (0, l.sS)(e.toLocaleLowerCase()).trim();
}

function s(e) {
    let t = {},
        n = r.A.getNickname(e.id);
    null != n && (t[n] = o(n).split(" "));
    let l = a.Ay.getGlobalName(e);
    return (
        null != l && null == t[l] && (t[l] = o(l).split(" ")),
        (t[e.username] = o(e.username).split(" ")),
        i.Ay.getNicknames(e.id).forEach((e) => {
            null == t[e] && (t[e] = o(e).split(" "));
        }),
        {
            names: t,
            nick: n,
        }
    );
}
n(652215);
