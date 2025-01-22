n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(468706),
    s = n(774863),
    c = n(388032);
function u(e) {
    let { messageId: t, channelId: n } = e,
        u = (0, l.e7)([s.Z], () => s.Z.canSubmitFpReport(t)),
        d = r.useCallback(() => {
            (0, o.e)(n, t);
        }, [n, t]);
    return (0, i.jsx)(a.Button, {
        size: a.Button.Sizes.MEDIUM,
        color: a.Button.Colors.PRIMARY,
        onClick: d,
        disabled: !u,
        children: c.intl.string(c.t['4q1ElZ'])
    });
}
