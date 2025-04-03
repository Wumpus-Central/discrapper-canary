n.d(t, {
    _: () => c,
    s: () => s
});
var r,
    i = n(668781),
    l = n(63063),
    o = n(981631),
    a = n(388032),
    s = (((r = {})[(r.REMOVE_SELF = 0)] = 'REMOVE_SELF'), (r[(r.REMOVE_ROLE = 1)] = 'REMOVE_ROLE'), (r[(r.DENY_ROLE = 2)] = 'DENY_ROLE'), r);
function c(e, t) {
    let n;
    0 === e ? (n = a.NW.format(a.t['/S6f5+'], {})) : 1 === e ? (n = a.NW.format(a.t.EBhv4e, { name: t })) : 2 === e && (n = a.NW.format(a.t['59Dbw8'], { name: t })),
        i.Z.show({
            title: a.NW.string(a.t.vElC9f),
            body: n,
            cancelText: a.NW.string(a.t.psXQHB),
            onCancel() {
                window.open(l.Z.getArticleURL(o.BhN.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT));
            }
        });
}
