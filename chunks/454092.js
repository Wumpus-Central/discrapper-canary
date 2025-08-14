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
        ? (n = o.intl.format(o.t["/S6f5+"], {}))
        : 1 === e
          ? (n = o.intl.format(o.t.EBhv4e, { name: t }))
          : 2 === e && (n = o.intl.format(o.t["59Dbw8"], { name: t })),
        r.Z.show({
            title: o.intl.string(o.t.vElC9f),
            body: n,
            cancelText: o.intl.string(o.t.psXQHB),
            onCancel() {
                window.open(l.Z.getArticleURL(a.BhN.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT));
            },
        });
}
