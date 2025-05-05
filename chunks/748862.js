i.d(n, { default: () => s });
var e = i(200651);
i(192379);
var r = i(442837),
    o = i(468026),
    a = i(979651),
    l = i(388032);
function s(t) {
    let { username: n, onConfirm: i, onClose: s, transitionState: c } = t,
        d = (0, r.e7)([a.Z], () => a.Z.isCurrentClientInVoiceChannel());
    return (0, e.jsx)(o.default, {
        confirmText: l.intl.string(l.t['7Xq/nZ']),
        title: l.intl.formatToPlainString(l.t.RNAFd3, { username: n }),
        cancelText: l.intl.string(l.t['ETE/oK']),
        onConfirm: i,
        onClose: s,
        body: l.intl.format(l.t['0P8VTE'], { username: n }) + (d ? ' ' + l.intl.string(l.t.dFPOQ0) : ''),
        transitionState: c
    });
}
