n.d(t, {
    _: () => c,
    s: () => s,
});
var i,
    r = n(668781),
    l = n(63063),
    a = n(981631),
    o = n(388032),
    s =
        (((i = {})[(i.REMOVE_SELF = 0)] = "REMOVE_SELF"),
        (i[(i.REMOVE_ROLE = 1)] = "REMOVE_ROLE"),
        (i[(i.DENY_ROLE = 2)] = "DENY_ROLE"),
        i);
function c(e, t) {
    let n;
    0 === e
        ? (n = o.intl.format(o.t["/S6f5y"], {}))
        : 1 === e
          ? (n = o.intl.format(o.t.EBhv4R, { name: t }))
          : 2 === e && (n = o.intl.format(o.t["59Dbw0"], { name: t })),
        r.Z.show({
            title: o.intl.string(o.t.vElC9b),
            body: n,
            cancelText: o.intl.string(o.t.psXQHP),
            onCancel() {
                window.open(l.Z.getArticleURL(a.BhN.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT));
            },
        });
}
