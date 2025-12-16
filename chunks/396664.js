n.d(t, { Z: () => a });
var i = n(481060),
    r = n(592125),
    l = n(388032);
function a(e) {
    let t = r.Z.getChannel(e),
        n =
            (null == t ? void 0 : t.name) == null
                ? l.intl.string(l.t.gi2swM)
                : l.intl.formatToPlainString(l.t.IFPJ6J, { channelName: t.name });
    (0, i.showToast)((0, i.createToast)(n, i.ToastType.SUCCESS));
}
