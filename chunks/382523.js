i.d(n, { default: () => l });
var a = i(54381);
i(473749);
var r = i(793030),
    e = i(442837),
    o = i(979651),
    s = i(388032);
function l(t) {
    let { username: n, onConfirm: i, onClose: l, transitionState: c } = t,
        d = (0, e.e7)([o.Z], () => o.Z.isCurrentClientInVoiceChannel());
    return (0, a.jsx)(r.Modal, {
        title: s.intl.formatToPlainString(s.t.RNAFdw, { username: n }),
        onClose: l,
        actions: [
            {
                text: s.intl.string(s.t["ETE/oC"]),
                onClick: l,
                variant: "secondary",
            },
            {
                text: s.intl.string(s.t["7Xq/nV"]),
                onClick: i,
                variant: "primary",
            },
        ],
        subtitle: s.intl.format(s.t["0P8VTO"], { username: n }) + (d ? " " + s.intl.string(s.t.dFPOQw) : ""),
        transitionState: c,
    });
}
