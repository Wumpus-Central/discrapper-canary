n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(821609),
    r = n(974875),
    o = n(900819),
    d = n(985018);
function c(e) {
    let { messageId: t, channelId: n } = e,
        c = (0, a.bG)([o.A], () => o.A.canSubmitFpReport(t)),
        u = l.useCallback(() => {
            (0, r.Q)(n, t);
        }, [n, t]);
    return (0, i.jsx)(s.$, { variant: "secondary", text: d.intl.string(d.t["4q1Elf"]), onClick: u, disabled: !c });
}
