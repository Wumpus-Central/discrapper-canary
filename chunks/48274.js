i.d(n, { default: () => o });
var a = i(627968);
i(64700);
var r = i(189213),
    e = i(17928),
    s = i(977997),
    l = i(985018);
function o(t) {
    let { username: n, onConfirm: i, onClose: o, transitionState: c } = t,
        d = (0, e.bG)([s.A], () => s.A.isCurrentClientInVoiceChannel());
    return (0, a.jsx)(r.Modal, {
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
