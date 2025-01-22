r.d(n, {
    b: function () {
        return a;
    }
});
var i = r(981631);
function a(e, n, r, a) {
    let o = null != r ? r : n;
    return (null != o && e.can(i.Plq.CREATE_INSTANT_INVITE, o)) || (null != n && null != n.vanityURLCode) || (null == a ? void 0 : a.invite_code) != null;
}
