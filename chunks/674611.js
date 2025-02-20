n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(481060),
    l = n(468706),
    s = n(774863),
    c = n(388032);
function d(e) {
    let { messageId: t, channelId: n } = e,
        d = (0, a.e7)([s.Z], () => s.Z.canSubmitFpReport(t)),
        u = i.useCallback(() => {
            (0, l.e)(n, t);
        }, [n, t]);
    return (0, r.jsx)(o.zxk, {
        size: o.zxk.Sizes.MEDIUM,
        color: o.zxk.Colors.PRIMARY,
        onClick: u,
        disabled: !d,
        children: c.NW.string(c.t['4q1ElZ'])
    });
}
