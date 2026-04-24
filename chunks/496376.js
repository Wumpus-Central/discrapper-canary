n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    r = n(821609),
    s = n(974875),
    o = n(900019),
    c = n(985018);
function d(e) {
    let { messageId: t, channelId: n } = e,
        d = (0, a.bG)([o.A], () => o.A.canSubmitFpReport(t)),
        u = l.useCallback(() => {
            (0, s.Q)(n, t);
        }, [n, t]);
    return (0, i.jsx)(r.$, { variant: "secondary", text: c.intl.string(c.t["4q1Elf"]), onClick: u, disabled: !d });
}
