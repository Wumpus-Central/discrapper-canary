n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(933557),
    s = n(592125),
    o = n(388032);
function c(e) {
    let { onConfirm: t, onCancel: n, channelId: c } = e,
        d = (0, i.e7)([s.Z], () => (null != c ? s.Z.getChannel(c) : null)),
        u = (0, a.ZP)(d, !0);
    return (0, r.jsx)(l.sYh, {
        dismissable: !0,
        header: o.intl.string(o.t.S2eoq6),
        confirmText: o.intl.string(o.t.N86XcH),
        cancelText: o.intl.string(o.t['ETE/oK']),
        onConfirm: t,
        onCancel: n,
        children: (0, r.jsx)(l.Text, {
            variant: 'text-sm/normal',
            children: null != d ? o.intl.format(o.t['1KT3Fh'], { channelName: u }) : o.intl.string(o.t.VOPUV1)
        })
    });
}
