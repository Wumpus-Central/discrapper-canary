i.d(n, { default: () => o });
var a = i(477900);
i(582128);
var r = i(17928),
    e = i(189213),
    s = i(977997),
    l = i(375708);
function o(t) {
    let { username: n, onConfirm: i, onClose: o, transitionState: c } = t,
        d = (0, r.bG)([s.A], () => s.A.isCurrentClientInVoiceChannel());
    return (0, a.jsx)(e.a, {
        title: l.intl.formatToPlainString(l.t.RNAFdw, { username: n }),
        onClose: o,
        actions: [
            { text: l.intl.string(l.t["ETE/oC"]), onClick: o, variant: "secondary" },
            { text: l.intl.string(l.t["7Xq/nV"]), onClick: i, variant: "primary" },
        ],
        subtitle: l.intl.format(l.t["0P8VTO"], { username: n }) + (d ? " " + l.intl.string(l.t.dFPOQw) : ""),
        transitionState: c,
    });
}
