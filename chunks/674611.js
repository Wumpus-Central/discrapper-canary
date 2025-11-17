n.d(t, { Z: () => u });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(468706),
    l = n(774863),
    c = n(388032);
function u(e) {
    let { messageId: t, channelId: n } = e,
        u = (0, a.e7)([l.Z], () => l.Z.canSubmitFpReport(t)),
        d = i.useCallback(() => {
            (0, s.e)(n, t);
        }, [n, t]);
    return (0, r.jsx)(o.Button, {
        variant: "secondary",
        text: c.intl.string(c.t["4q1Elf"]),
        onClick: d,
        disabled: !u,
    });
}
