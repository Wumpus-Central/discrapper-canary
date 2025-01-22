n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(692547),
    a = n(481060),
    o = n(375954),
    s = n(876338),
    c = n(912332),
    u = n(245216),
    d = n(388032);
function m(e) {
    let { className: t, channelId: n, messageId: m, targetKind: h, embedIndex: f } = e,
        p = r.useCallback(() => {
            let e = o.Z.getMessage(n, m);
            if (null == e) return;
            let t = (0, s.j)(e, {
                targetKind: h,
                embedIndex: f
            });
            (0, c.l8)({
                message: e,
                source: 'message-actions',
                forwardOptions: t
            });
        }, [n, f, m, h]);
    return (0, i.jsx)(a.CircleIconButton, {
        className: t,
        tooltip: d.intl.string(d.t.I3ltXF),
        color: a.CircleIconButtonColors.SECONDARY,
        icon: (0, i.jsx)(u.Z, {
            size: 'xs',
            color: l.Z.colors.INTERACTIVE_NORMAL
        }),
        onClick: p
    });
}
