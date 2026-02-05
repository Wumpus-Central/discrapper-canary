n.d(t, { _: () => s });
var i = n(397927),
    l = n(734057),
    a = n(985018);
function s(e) {
    let t = l.A.getChannel(e),
        n =
            t?.name == null
                ? a.intl.string(a.t.gi2swM)
                : a.intl.formatToPlainString(a.t.IFPJ6J, { channelName: t.name });
    (0, i.showToast)((0, i.createToast)(n, i.ToastType.SUCCESS));
}
