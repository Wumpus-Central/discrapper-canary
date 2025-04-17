n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    a = n(442837),
    l = n(481060),
    o = n(468706),
    s = n(774863),
    c = n(388032);
function u(e) {
    let { messageId: t, channelId: n } = e,
        u = (0, a.e7)([s.Z], () => s.Z.canSubmitFpReport(t)),
        d = i.useCallback(() => {
            (0, o.e)(n, t);
        }, [n, t]);
    return (0, r.jsx)(l.zxk, {
        size: l.zxk.Sizes.MEDIUM,
        color: l.zxk.Colors.PRIMARY,
        onClick: d,
        disabled: !u,
        children: c.NW.string(c.t['4q1ElZ'])
    });
}
