n.d(t, { Z: () => d });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(468706),
    o = n(774863),
    c = n(388032);
function d(e) {
    let { messageId: t, channelId: n } = e,
        d = (0, a.e7)([o.Z], () => o.Z.canSubmitFpReport(t)),
        u = l.useCallback(() => {
            (0, s.e)(n, t);
        }, [n, t]);
    return (0, i.jsx)(r.zxk, {
        size: r.zxk.Sizes.MEDIUM,
        color: r.zxk.Colors.PRIMARY,
        onClick: u,
        disabled: !d,
        children: c.intl.string(c.t['4q1ElZ'])
    });
}
