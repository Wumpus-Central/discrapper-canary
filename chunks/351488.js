n.d(t, { _: () => c });
var i = n(397927),
    l = n(47167),
    s = n(734057),
    a = n(994500),
    r = n(287809),
    o = n(985018);
function c(e) {
    let t = s.A.getChannel(e),
        n = null != t ? (0, l.m1)(t, r.default, a.A) : null,
        c = null == n ? o.intl.string(o.t.gi2swM) : o.intl.formatToPlainString(o.t.IFPJ6J, { channelName: n });
    (0, i.showToast)((0, i.createToast)(c, i.ToastType.SUCCESS));
}
