n.d(t, {
    Ay: () => f,
    mG: () => u,
    tJ: () => c,
    tx: () => d,
});
var r = n(311907),
    i = n(734057),
    a = n(696451),
    o = n(994500),
    s = n(427262),
    l = n(985018);

function c(e, t, n) {
    if (null == n) return null;
    if (null != e) return a.Ay.getNick(e, n.id);
    if (null != t) {
        let e = i.A.getChannel(t);
        if (null == e ? void 0 : e.isPrivate()) return o.A.getNickname(n.id);
    }
    return null;
}

function u(e, t, n) {
    var r;
    return null == n ? l.intl.string(l.t.sKdZ6U) : null != (r = c(e, t, n)) ? r : s.Ay.getName(n);
}

function d(e, t, n) {
    return (0, r.bG)([a.Ay, i.A, o.A], () => u(e, t, n));
}
let f = {
    getNickname: c,
    getName: u,
    useName: d,
};
