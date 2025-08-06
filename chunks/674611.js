n.d(t, { Z: () => u });
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(481060),
    s = n(468706),
    l = n(774863),
    c = n(388032);
function u(e) {
    let { messageId: t, channelId: n } = e,
        u = (0, o.e7)([l.Z], () => l.Z.canSubmitFpReport(t)),
        d = i.useCallback(() => {
            (0, s.e)(n, t);
        }, [n, t]);
    return (0, r.jsx)(a.zxk, {
        variant: 'secondary',
        text: c.intl.string(c.t['4q1ElZ']),
        onClick: d,
        disabled: !u
    });
}
