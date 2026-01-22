n.d(t, {
    A: () => u,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(974875),
    l = n(900819),
    c = n(985018);

function u(e) {
    let { messageId: t, channelId: n } = e,
        u = (0, a.bG)([l.A], () => l.A.canSubmitFpReport(t)),
        d = i.useCallback(() => {
            (0, o.Q)(n, t);
        }, [n, t]);
    return (0, r.jsx)(s.Button, {
        variant: "secondary",
        text: c.intl.string(c.t["4q1Elf"]),
        onClick: d,
        disabled: !u,
    });
}
