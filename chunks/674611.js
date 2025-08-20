n.d(t, { Z: () => u });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(481060),
    a = n(468706),
    s = n(774863),
    c = n(388032);
function u(e) {
    let { messageId: t, channelId: n } = e,
        u = (0, l.e7)([s.Z], () => s.Z.canSubmitFpReport(t)),
        d = i.useCallback(() => {
            (0, a.e)(n, t);
        }, [n, t]);
    return (0, r.jsx)(o.zxk, {
        variant: "secondary",
        text: c.intl.string(c.t["4q1ElZ"]),
        onClick: d,
        disabled: !u,
    });
}
