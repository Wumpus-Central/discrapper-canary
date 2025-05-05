n.d(t, { Z: () => u });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(468706),
    s = n(774863),
    c = n(388032);
function u(e) {
    let { messageId: t, channelId: n } = e,
        u = (0, l.e7)([s.Z], () => s.Z.canSubmitFpReport(t)),
        d = i.useCallback(() => {
            (0, o.e)(n, t);
        }, [n, t]);
    return (0, r.jsx)(a.zxk, {
        size: a.zxk.Sizes.MEDIUM,
        color: a.zxk.Colors.PRIMARY,
        onClick: d,
        disabled: !u,
        children: c.intl.string(c.t['4q1ElZ'])
    });
}
