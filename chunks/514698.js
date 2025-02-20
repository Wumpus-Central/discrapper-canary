n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(933557),
    l = n(592125),
    o = n(388032);
function c(e) {
    let { onConfirm: t, onCancel: n, channelId: c } = e,
        d = (0, i.e7)([l.Z], () => (null != c ? l.Z.getChannel(c) : null)),
        u = (0, a.ZP)(d, !0);
    return (0, r.jsx)(s.sYh, {
        dismissable: !0,
        header: o.NW.string(o.t.S2eoq6),
        confirmText: o.NW.string(o.t.N86XcH),
        cancelText: o.NW.string(o.t['ETE/oK']),
        onConfirm: t,
        onCancel: n,
        children: (0, r.jsx)(s.Text, {
            variant: 'text-sm/normal',
            children: null != d ? o.NW.format(o.t['1KT3Fh'], { channelName: u }) : o.NW.string(o.t.VOPUV1)
        })
    });
}
