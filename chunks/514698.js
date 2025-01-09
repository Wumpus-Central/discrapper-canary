n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    s = n(933557),
    a = n(592125),
    o = n(388032);
function c(e) {
    let { onConfirm: t, onCancel: n, channelId: c } = e,
        d = (0, r.e7)([a.Z], () => (null != c ? a.Z.getChannel(c) : null)),
        u = (0, s.ZP)(d, !0);
    return (0, i.jsx)(l.DeclarativeConfirmModal, {
        dismissable: !0,
        header: o.intl.string(o.t.S2eoq6),
        confirmText: o.intl.string(o.t.N86XcH),
        cancelText: o.intl.string(o.t['ETE/oK']),
        onConfirm: t,
        onCancel: n,
        children: (0, i.jsx)(l.Text, {
            variant: 'text-sm/normal',
            children: null != d ? o.intl.format(o.t['1KT3Fh'], { channelName: u }) : o.intl.string(o.t.VOPUV1)
        })
    });
}
