n.d(t, { b: () => i });
var r = n(981631);
function i(e, t, n, i) {
    let a = null != n ? n : t;
    return (null != a && e.can(r.Plq.CREATE_INSTANT_INVITE, a)) || (null != t && null != t.vanityURLCode) || (null == i ? void 0 : i.invite_code) != null;
}
