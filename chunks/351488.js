n.d(t, {
    _: () => a,
});
var r = n(397927),
    l = n(734057),
    i = n(985018);

function a(e) {
    let t = l.A.getChannel(e),
        n =
            (null == t ? void 0 : t.name) == null
                ? i.intl.string(i.t.gi2swM)
                : i.intl.formatToPlainString(i.t.IFPJ6J, {
                      channelName: t.name,
                  });
    (0, r.showToast)((0, r.createToast)(n, r.ToastType.SUCCESS));
}
