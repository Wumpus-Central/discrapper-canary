n.d(t, { b: () => r });
var i = n(981631);
function r(e, t, n, r) {
    let a = null != n ? n : t;
    return (null != a && e.can(i.Plq.CREATE_INSTANT_INVITE, a)) || (null != t && null != t.vanityURLCode) || (null == r ? void 0 : r.invite_code) != null;
}
