n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    a = n(692547),
    o = n(481060),
    l = n(375954),
    s = n(876338),
    c = n(912332),
    d = n(245216),
    u = n(388032);
function p(e) {
    let { className: t, channelId: n, messageId: p, targetKind: m, embedIndex: f } = e,
        h = i.useCallback(() => {
            let e = l.Z.getMessage(n, p);
            if (null == e) return;
            let t = (0, s.j)(e, {
                targetKind: m,
                embedIndex: f
            });
            (0, c.l8)({
                message: e,
                source: 'message-actions',
                forwardOptions: t
            });
        }, [n, f, p, m]);
    return (0, r.jsx)(o.M0o, {
        className: t,
        tooltip: u.NW.string(u.t.I3ltXF),
        color: o.YX$.SECONDARY,
        icon: (0, r.jsx)(d.Z, {
            size: 'xs',
            color: a.Z.colors.INTERACTIVE_NORMAL
        }),
        onClick: h
    });
}
