n.d(t, { A: () => d, Q: () => o });
var i,
    l = n(157559),
    s = n(975571),
    a = n(652215),
    r = n(985018),
    o =
        (((i = {})[(i.REMOVE_SELF = 0)] = "REMOVE_SELF"),
        (i[(i.REMOVE_ROLE = 1)] = "REMOVE_ROLE"),
        (i[(i.DENY_ROLE = 2)] = "DENY_ROLE"),
        i);
function d(e, t) {
    let n;
    0 === e
        ? (n = r.intl.format(r.t["/S6f5y"], {}))
        : 1 === e
          ? (n = r.intl.format(r.t.EBhv4R, { name: t }))
          : 2 === e && (n = r.intl.format(r.t["59Dbw0"], { name: t })),
        l.A.show({
            title: r.intl.string(r.t.vElC9b),
            body: n,
            cancelText: r.intl.string(r.t.psXQHP),
            onCancel() {
                window.open(s.A.getArticleURL(a.MVz.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT));
            },
        });
}
