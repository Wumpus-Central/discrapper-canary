n.d(t, {
    _: function () {
        return d;
    },
    s: function () {
        return l;
    }
});
var i,
    l,
    r = n(668781),
    a = n(63063),
    o = n(981631),
    s = n(388032);
function d(e, t) {
    let n;
    0 === e ? (n = s.intl.format(s.t['/S6f5+'], {})) : 1 === e ? (n = s.intl.format(s.t.EBhv4e, { name: t })) : 2 === e && (n = s.intl.format(s.t['59Dbw8'], { name: t })),
        r.Z.show({
            title: s.intl.string(s.t.vElC9f),
            body: n,
            cancelText: s.intl.string(s.t.psXQHB),
            onCancel() {
                window.open(a.Z.getArticleURL(o.BhN.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT));
            }
        });
}
((i = l || (l = {}))[(i.REMOVE_SELF = 0)] = 'REMOVE_SELF'), (i[(i.REMOVE_ROLE = 1)] = 'REMOVE_ROLE'), (i[(i.DENY_ROLE = 2)] = 'DENY_ROLE');
