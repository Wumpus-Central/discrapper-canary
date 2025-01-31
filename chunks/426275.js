n.d(t, { Z: () => m });
var i = n(200651),
    l = n(192379),
    a = n(692547),
    r = n(481060),
    s = n(375954),
    o = n(876338),
    c = n(912332),
    d = n(245216),
    u = n(388032);
function m(e) {
    let { className: t, channelId: n, messageId: m, targetKind: h, embedIndex: _ } = e,
        p = l.useCallback(() => {
            let e = s.Z.getMessage(n, m);
            if (null == e) return;
            let t = (0, o.j)(e, {
                targetKind: h,
                embedIndex: _
            });
            (0, c.l8)({
                message: e,
                source: 'message-actions',
                forwardOptions: t
            });
        }, [n, _, m, h]);
    return (0, i.jsx)(r.M0o, {
        className: t,
        tooltip: u.intl.string(u.t.I3ltXF),
        color: r.YX$.SECONDARY,
        icon: (0, i.jsx)(d.Z, {
            size: 'xs',
            color: a.Z.colors.INTERACTIVE_NORMAL
        }),
        onClick: p
    });
}
