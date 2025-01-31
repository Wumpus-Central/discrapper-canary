n.d(t, { X: () => r });
var i = n(668781),
    l = n(63063),
    s = n(981631),
    a = n(388032);
function r(e) {
    i.Z.show({
        title: a.intl.string(a.t.vElC9f),
        body: a.intl.format(a.t.yslqFB, { name: e }),
        cancelText: a.intl.string(a.t.psXQHB),
        onCancel() {
            window.open(l.Z.getArticleURL(s.BhN.PERMISSIONS_LOCKOUT));
        }
    });
}
