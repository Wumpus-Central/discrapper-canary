n.d(t, { X: () => s });
var i = n(668781),
    l = n(63063),
    r = n(981631),
    a = n(388032);
function s(e) {
    i.Z.show({
        title: a.intl.string(a.t.vElC9b),
        body: a.intl.format(a.t.yslqFM, { name: e }),
        cancelText: a.intl.string(a.t.psXQHP),
        onCancel() {
            window.open(l.Z.getArticleURL(r.BhN.PERMISSIONS_LOCKOUT));
        },
    });
}
